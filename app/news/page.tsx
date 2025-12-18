"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye, Share2, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

// Types for API response
interface NewsArticle {
  id: number
  title: string
  slug: string
  category: string
  summary: string
  body: string
  published_at: string
  view_count: number
  image: string | null
  image_url: string | null
  created_at: string
  updated_at: string
}

interface NewsResponse {
  count: number
  next: string | null
  previous: string | null
  results: NewsArticle[]
}

// Helper function to calculate read time
function calculateReadTime(body: string): string {
  const wordsPerMinute = 200
  const wordCount = body.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// Helper function to format date
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Helper function to format view count
function formatViewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

const BASE_URL = "https://api.olympcenter.uz/api/news/"

export default function NewsPage() {
  const { toast } = useToast()
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [categories, setCategories] = useState<string[]>(["All"])
  const [sharingId, setSharingId] = useState<number | null>(null)

  // Share handler
  const handleShare = async (article: NewsArticle, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    
    setSharingId(article.id)
    const url = typeof window !== "undefined" ? `${window.location.origin}/news/${article.slug}` : ""
    const shareData = {
      title: article.title,
      text: article.summary || article.title,
      url: url,
    }

    try {
      // Try Web Share API first
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
        toast({
          title: "Shared!",
          description: "Article shared successfully.",
        })
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Article link has been copied to clipboard.",
        })
      }
    } catch (err: any) {
      // User cancelled or error occurred
      if (err.name !== "AbortError") {
        // Try clipboard as fallback
        try {
          await navigator.clipboard.writeText(url)
          toast({
            title: "Link copied!",
            description: "Article link has been copied to clipboard.",
          })
        } catch (clipboardErr) {
          toast({
            title: "Error",
            description: "Failed to share article. Please try again.",
            variant: "destructive",
          })
        }
      }
    } finally {
      setSharingId(null)
    }
  }

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(BASE_URL, { cache: "no-store" })

        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }

        const data: NewsResponse = await response.json()
        setNewsArticles(data.results || [])

        // Extract unique categories from API data
        const uniqueCategories = Array.from(
          new Set(data.results.map((article) => article.category).filter(Boolean))
        ).sort()
        setCategories(["All", ...uniqueCategories])
      } catch (err) {
        console.error("Error fetching news:", err)
        setError("Failed to load news articles. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Filter articles by category
  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory)

  // Featured articles (first 2 items)
  const featuredArticles = filteredArticles.slice(0, 2)
  const otherArticles = filteredArticles.slice(2)

  return (
    <div className="min-h-screen relative">
      {/* Creative News Background */}
      <div
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='news' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect x='10' y='10' width='40' height='30' rx='2' fill='none' stroke='%23007bff' stroke-width='1.5'/%3E%3Cline x1='15' y1='20' x2='45' y2='20' stroke='%23007bff' stroke-width='1'/%3E%3Cline x1='15' y1='28' x2='40' y2='28' stroke='%23007bff' stroke-width='1'/%3E%3Cline x1='15' y1='35' x2='35' y2='35' stroke='%23007bff' stroke-width='1'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ff6b00'/%3E%3Cpath d='M 55 25 L 58 28 L 65 20' stroke='white' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3Crect x='70' y='15' width='20' height='25' rx='2' fill='none' stroke='%2300aaff' stroke-width='1.5'/%3E%3Cline x1='75' y1='22' x2='85' y2='22' stroke='%2300aaff' stroke-width='1'/%3E%3Cline x1='75' y1='30' x2='82' y2='30' stroke='%2300aaff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23news)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/80 to-purple-50/70 z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Latest <span className="text-primary">News</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Stay updated with the latest achievements, announcements, and developments from the Science Olympiad
                Center.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Loading State */}
        {loading && (
          <section className="py-20">
            <div className="container">
              <div className="flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-lg text-muted-foreground">Loading news...</span>
              </div>
            </div>
          </section>
        )}

        {/* Error State */}
        {error && !loading && (
          <section className="py-20">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <Card className="border-destructive">
                  <CardContent className="pt-6">
                    <p className="text-destructive">{error}</p>
                    <Button
                      onClick={() => window.location.reload()}
                      className="mt-4"
                      variant="outline"
                    >
                      Retry
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* News Content */}
        {!loading && !error && (
          <section className="py-20">
            <div className="container">
              {/* Featured Articles */}
              {featuredArticles.length > 0 && (
                <>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                      Featured Stories
                    </h2>
                    <p className="text-muted-foreground">Our most important news and achievements</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredArticles.map((article) => (
                      <Card
                        key={article.id}
                        className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-video relative overflow-hidden bg-muted">
                          {article.image_url ? (
                            <Image
                              src={article.image_url}
                              alt={article.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted">
                              <span className="text-muted-foreground">No image</span>
                            </div>
                          )}
                          <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                          <Badge variant="secondary" className="absolute top-4 right-4 capitalize">
                            {article.category}
                          </Badge>
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(article.published_at)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {calculateReadTime(article.body)}
                            </div>
                          </div>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {article.summary || article.body.substring(0, 150) + "..."}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <Button asChild>
                              <Link href={`/news/${article.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {formatViewCount(article.view_count)}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => handleShare(article, e)}
                                disabled={sharingId === article.id}
                                title="Share article"
                              >
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              {/* All Articles */}
              {otherArticles.length > 0 && (
                <>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                      {featuredArticles.length > 0 ? "More News" : "All News"}
                    </h2>
                    <p className="text-muted-foreground">Complete coverage of our activities and achievements</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherArticles.map((article) => (
                      <Card
                        key={article.id}
                        className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-video relative overflow-hidden bg-muted">
                          {article.image_url ? (
                            <Image
                              src={article.image_url}
                              alt={article.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted">
                              <span className="text-muted-foreground">No image</span>
                            </div>
                          )}
                          <Badge variant="secondary" className="absolute top-4 right-4 capitalize">
                            {article.category}
                          </Badge>
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(article.published_at)}
                            <span>•</span>
                            <Clock className="h-4 w-4" />
                            {calculateReadTime(article.body)}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">
                            {article.summary || article.body.substring(0, 100) + "..."}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/news/${article.slug}`}>Read More</Link>
                            </Button>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Eye className="h-4 w-4" />
                              {formatViewCount(article.view_count)}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              {/* No Articles State */}
              {filteredArticles.length === 0 && !loading && (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground">No news articles found in this category.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
