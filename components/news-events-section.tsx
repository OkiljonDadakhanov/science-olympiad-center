"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

// Helper function to format date
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// Helper function to calculate read time
function calculateReadTime(body: string): string {
  const wordsPerMinute = 200
  const wordCount = body.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

const BASE_URL = "https://api.olympcenter.uz/api/news/"

export function NewsEventsSection() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        setError(null)
        // Fetch only the latest 3 news articles
        const response = await fetch(`${BASE_URL}?limit=3`, { cache: "no-store" })

        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }

        const data: NewsResponse = await response.json()
        setNewsArticles(data.results?.slice(0, 3) || [])
      } catch (err) {
        console.error("Error fetching news:", err)
        setError("Failed to load news")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Stay updated with our latest achievements, program announcements, and upcoming competitions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">Recent News</h3>
              <Button variant="outline" asChild>
                <Link href="/news">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground">Loading news...</span>
              </div>
            )}

            {error && !loading && (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  {error}
                </CardContent>
              </Card>
            )}

            {!loading && !error && (
              <div className="space-y-6">
                {newsArticles.length === 0 ? (
                  <Card>
                    <CardContent className="pt-6 text-center text-muted-foreground">
                      No news articles available at the moment.
                    </CardContent>
                  </Card>
                ) : (
                  newsArticles.map((article, index) => (
                    <Card
                      key={article.id}
                      className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                        index === 0 ? "border-primary/30 border-2" : "border-primary/10"
                      }`}
                    >
                      <Link href={`/news/${article.slug}`} className="block">
                        <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                          {article.image_url ? (
                            <Image
                              src={article.image_url}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                              <span className="text-muted-foreground">No image</span>
                            </div>
                          )}
                          {index === 0 && (
                            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-lg">
                              Latest
                            </Badge>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge variant="secondary" className="capitalize">
                              {article.category}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(article.published_at)}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {calculateReadTime(article.body)}
                            </div>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed line-clamp-3">
                            {article.summary || article.body.substring(0, 150) + "..."}
                          </CardDescription>
                        </CardHeader>
                      </Link>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
