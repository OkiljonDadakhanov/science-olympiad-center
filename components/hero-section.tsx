"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Award,
  Users,
  Globe,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  Target,
  Newspaper,
  Clock,
} from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { getApiUrl } from "@/lib/config"

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
}

const heroBackgrounds = [
  { src: "/main-bg.jpg", alt: "Students collaborating at an olympiad event" },
  { src: "/bg.jpg", alt: "Auditorium filled with competitors" },
  { src: "/expert-bg.jpg", alt: "Mentors guiding students through challenges" },
]

const upcomingOlympiads = [
  {
    id: 1,
    title: "58th International Chemistry Olympiad (IChO 2026)",
    date: "2026-07-10",
    location: "Tashkent, Uzbekistan",
    category: "International",
    participants: "90+ countries expected",
    tagline: "A global celebration of science",
    description: "The world's most prestigious annual competition for high school chemistry students, featuring challenging theoretical and practical exams. Hosted by Uzbekistan for the first time in history.",
    image: "/icho-slider.jpg",
    registrationDeadline: "2026-03-01",
    categoryLink: "/olympiads/international",
  },
  {
    id: 2,
    title: "67th International Mathematical Olympiad (IMO 2026)",
    date: "2026-07-10",
    location: "Shanghai, China",
    category: "International",
    participants: "100+ countries",
    tagline: "The world championship of mathematics for high school students",
    description: "The IMO is the oldest and most prestigious global mathematics competition, bringing together talented students from over 100 countries.",
    image: "/imo-slider.jpg",
    registrationDeadline: "2026-03-15",
    categoryLink: "/olympiads/international",
  },
  {
    id: 3,
    title: "56th International Physics Olympiad (IPhO 2026)",
    date: "2026-07-04",
    location: "Bucaramanga, Colombia",
    category: "International",
    participants: "Worldwide participants",
    tagline: "Celebrating physics, culture, and global friendship",
    description: "The IPhO 2026 unites the brightest young physicists from around the world for challenging exams and cultural exchange in Colombia.",
    image: "/ipho-slider.jpg",
    registrationDeadline: "2026-03-01",
    categoryLink: "/olympiads/international",
  },
  {
    id: 4,
    title: "37th International Biology Olympiad (IBO 2026)",
    date: "2026-07-20",
    location: "Vilnius, Lithuania",
    category: "International",
    participants: "Global biology finalists",
    tagline: "Advancing excellence in life sciences",
    description: "The IBO 2026 in Lithuania continues the tradition of inspiring young talents in biological sciences through rigorous exams and international collaboration.",
    image: "/ibo-slider.jpg",
    registrationDeadline: "2026-04-01",
    categoryLink: "/olympiads/international",
  },
]

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function HeroSection() {
  const t = useTranslations('hero')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentBackground, setCurrentBackground] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [newsLoading, setNewsLoading] = useState(true)

  useEffect(() => {
    setIsVisible(true)

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % upcomingOlympiads.length)
    }, 6000)

    const bgTimer = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % heroBackgrounds.length)
    }, 8000)

    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.08)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Fetch news
    async function fetchNews() {
      try {
        const response = await fetch(getApiUrl('/news/'), { cache: "no-store" })
        if (response.ok) {
          const data = await response.json()
          setNewsArticles(data.results?.slice(0, 3) || [])
        }
      } catch (err) {
        console.error("Error fetching news:", err)
      } finally {
        setNewsLoading(false)
      }
    }
    fetchNews()

    return () => {
      clearInterval(timer)
      clearInterval(bgTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingOlympiads.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingOlympiads.length) % upcomingOlympiads.length)
  }

  const currentOlympiad = upcomingOlympiads[currentSlide]

  return (
    <section className="relative pt-20 lg:pt-32 pb-10 lg:pb-16 overflow-hidden">
      {/* Full-bleed scrolling background carousel */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {heroBackgrounds.map((bg, index) => (
          <div
            key={bg.src}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentBackground ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${index === currentBackground ? scrollOffset : 0}px)`,
            }}
            role="presentation"
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-white dark:to-background" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-secondary/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container relative">
        {/* Hero Text */}
        <div className={`max-w-5xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white drop-shadow-lg">{t('title')}</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('subtitle')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-secondary border-0 text-white" asChild>
              <Link href="/olympiads">
                {t('exploreOlympiads')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/90 dark:bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white dark:hover:bg-white/20 hover:border-white hover:scale-105 transition-all duration-300 shadow-lg text-foreground dark:text-white" asChild>
              <Link href="/programs">{t('startJourney')}</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="font-medium text-white">{t('medalsWon')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-white">{t('students')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe className="h-5 w-5 text-green-400" />
              <span className="font-medium text-white">{t('countries')}</span>
            </div>
          </div>
        </div>

        {/* News Highlights Section */}
        {!newsLoading && newsArticles.length > 0 && (
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Newspaper className="h-5 w-5 text-primary" />
                <span className="text-white font-medium">{t('newsHighlights')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg">
                {t('latestNews')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`}>
                  <Card className="group h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      {article.image_url ? (
                        <Image
                          src={article.image_url}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                          <Newspaper className="h-12 w-12 text-muted-foreground/50" />
                        </div>
                      )}
                      <Badge className="absolute top-3 right-3 bg-primary/90 text-white capitalize">
                        {article.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.published_at)}
                      </div>
                      <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.summary || article.body.substring(0, 100) + "..."}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="bg-white/90 dark:bg-white/10 backdrop-blur-sm" asChild>
                <Link href="/news">
                  {t('viewAllNews')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Featured Olympiad Carousel */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg">
              {t('upcomingCompetitions')}
            </h2>
            <p className="text-lg text-white/80">{t('dontMiss')}</p>
          </div>

          <div className="relative group">
            <Card className="overflow-hidden shadow-2xl border-0 bg-card/95 backdrop-blur-xl hover:shadow-3xl transition-all duration-500">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 aspect-video lg:aspect-auto relative overflow-hidden">
                  <img src={currentOlympiad.image || "/placeholder.svg"} alt={currentOlympiad.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge className="absolute top-6 left-6 bg-white/90 text-primary px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-sm border border-primary/20">
                    {currentOlympiad.category}
                  </Badge>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white/90 text-sm font-medium mb-1">{t('registrationDeadline')}</div>
                    <div className="text-white font-bold text-lg">
                      {new Date(currentOlympiad.registrationDeadline).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                  </div>
                </div>

                <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight text-foreground">{currentOlympiad.title}</h3>
                      <p className="text-primary font-semibold text-lg flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        {currentOlympiad.tagline}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium">{t('eventDate')}</div>
                          <div className="text-sm font-semibold text-foreground">
                            {new Date(currentOlympiad.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium">{t('location')}</div>
                          <div className="text-sm font-semibold text-foreground">{currentOlympiad.location}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 sm:col-span-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium">{t('participants')}</div>
                          <div className="text-sm font-semibold text-foreground">{currentOlympiad.participants}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{currentOlympiad.description}</p>

                    <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-secondary text-white" asChild>
                      <Link href={currentOlympiad.categoryLink}>
                        {t('applyNow')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Button variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm shadow-xl h-12 w-12 border-2 border-border hover:border-primary hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100" onClick={prevSlide}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm shadow-xl h-12 w-12 border-2 border-border hover:border-primary hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100" onClick={nextSlide}>
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-8 gap-2">
              {upcomingOlympiads.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-full ${index === currentSlide ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-white/50 hover:bg-white/70"}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {[
            { icon: Users, value: "10,000+", label: t('studentsTrained'), color: "from-blue-500 to-blue-600" },
            { icon: Globe, value: "50+", label: t('countriesRepresented'), color: "from-purple-500 to-purple-600" },
            { icon: Award, value: "20", label: t('yearsOfExcellence'), color: "from-amber-500 to-amber-600" },
          ].map((stat, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur-sm hover:scale-105">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl bg-card/95 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-10 md:p-16">
              <div className="text-center mb-10">
                <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white">
                  {t('ourMission')}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('nurturingScientificExcellence')}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t('missionDescription')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: t('expertMentorship'), desc: t('expertMentorshipDesc'), icon: Sparkles },
                  { title: t('comprehensiveTraining'), desc: t('comprehensiveTrainingDesc'), icon: Target },
                  { title: t('globalNetwork'), desc: t('globalNetworkDesc'), icon: Globe },
                  { title: t('provenResults'), desc: t('provenResultsDesc'), icon: Trophy },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
