"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, Loader2, ArrowLeft } from "lucide-react"
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

const BASE_URL = "https://api.olympcenter.uz/api/news/"

export default function NewsArticlePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  const { toast } = useToast()

  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSharing, setIsSharing] = useState(false)

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return

      try {
        setLoading(true)
        setError(null)

        // Try to fetch by slug endpoint first
        let response = await fetch(`${BASE_URL}${slug}/`, { cache: "no-store" })

        // If slug endpoint doesn't work, fetch all and filter by slug
        if (!response.ok) {
          const allResponse = await fetch(BASE_URL, { cache: "no-store" })
          if (!allResponse.ok) {
            throw new Error("Failed to fetch news")
          }
          const data = await allResponse.json()
          const foundArticle = data.results?.find((item: NewsArticle) => item.slug === slug)
          
          if (!foundArticle) {
            throw new Error("Article not found")
          }
          
          setArticle(foundArticle)
        } else {
          const articleData: NewsArticle = await response.json()
          setArticle(articleData)
        }
      } catch (err) {
        console.error("Error fetching article:", err)
        setError("Failed to load article. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  // Share handler
  const handleShare = async () => {
    if (!article) return

    setIsSharing(true)
    const url = typeof window !== "undefined" ? window.location.href : ""
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
      setIsSharing(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/80 to-purple-50/70 z-[1]" />
        <main className="relative z-10 py-20">
          <div className="container">
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Loading article...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/80 to-purple-50/70 z-[1]" />
        <main className="relative z-10 py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-destructive">
                <CardContent className="pt-6">
                  <p className="text-destructive mb-4">{error || "Article not found"}</p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => router.back()} variant="outline">
                      Go Back
                    </Button>
                    <Button asChild>
                      <Link href="/news">Back to News</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }

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
      <main className="relative z-10 py-12 lg:py-20">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>

          {/* Article Header */}
          <Card className="border-0 shadow-lg overflow-hidden mb-8">
            {article.image_url && (
              <div className="relative w-full h-[400px] lg:h-[500px] bg-muted">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            )}
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center gap-4 flex-wrap mb-6">
                <Badge variant="secondary" className="capitalize text-sm">
                  {article.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(article.published_at)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {calculateReadTime(article.body)}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
                {article.title}
              </h1>

              {article.summary && (
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
                  {article.summary}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Article Body */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:font-[family-name:var(--font-playfair)] prose-p:leading-relaxed prose-p:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                {article.body.includes("<") && article.body.includes(">") ? (
                  <div dangerouslySetInnerHTML={{ __html: article.body }} />
                ) : (
                  <p className="whitespace-pre-wrap leading-relaxed text-foreground">
                    {article.body}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Share Section */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All News
              </Link>
            </Button>
            <Button variant="outline" onClick={handleShare} disabled={isSharing}>
              <Share2 className="mr-2 h-4 w-4" />
              {isSharing ? "Sharing..." : "Share Article"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

