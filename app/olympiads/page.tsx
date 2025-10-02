import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

const olympiadCategories = [
  {
    title: "Prestigious Olympiads",
    description: "National competitions and elite international qualifiers",
    href: "/olympiads/prestigious",
    icon: Trophy,
    color: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20",
    count: "12 competitions",
  },
  {
    title: "International Olympiads",
    description: "Global science olympiad competitions worldwide",
    href: "/olympiads/international",
    icon: Trophy,
    color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20",
    count: "8 competitions",
  },
  {
    title: "Local Olympiads",
    description: "Regional and local science competitions",
    href: "/olympiads/local",
    icon: Trophy,
    color: "bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20",
    count: "15 competitions",
  },
]

const upcomingOlympiads = [
  {
    title: "International Mathematics Olympiad 2025",
    date: "2025-07-15",
    location: "Bath, United Kingdom",
    category: "International",
    participants: "6 students selected",
    registrationDeadline: "2025-03-01",
    description: "The most prestigious mathematics competition for high school students worldwide.",
    categoryHref: "/olympiads/international",
  },
  {
    title: "National Physics Olympiad 2025",
    date: "2025-04-20",
    location: "Tashkent, Uzbekistan",
    category: "Prestigious",
    participants: "Registration open",
    registrationDeadline: "2025-02-15",
    description: "National competition to select the best physics students for international representation.",
    categoryHref: "/olympiads/prestigious",
  },
  {
    title: "Regional Chemistry Competition",
    date: "2025-03-10",
    location: "Samarkand, Uzbekistan",
    category: "Local",
    participants: "150+ registered",
    registrationDeadline: "2025-02-01",
    description: "Regional chemistry competition for students across Central Asia.",
    categoryHref: "/olympiads/local",
  },
]

export default function OlympiadsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Science <span className="text-primary">Olympiads</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Discover opportunities to showcase your scientific knowledge and compete with the brightest minds from
                around the world in prestigious olympiad competitions.
              </p>
            </div>
          </div>
        </section>

        {/* Olympiad Categories */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Olympiad Categories
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Choose from three levels of competition, each designed to challenge and inspire scientific excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {olympiadCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card key={category.title} className={`transition-all hover:shadow-lg ${category.color}`}>
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {category.count}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {category.description}
                      </CardDescription>
                      <Button asChild className="w-full">
                        <Link href={category.href}>
                          Explore Competitions <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Olympiads */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Upcoming Olympiads
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Don't miss these exciting opportunities to compete and showcase your scientific knowledge.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingOlympiads.map((olympiad) => (
                <Card key={olympiad.title} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{olympiad.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(olympiad.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{olympiad.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {olympiad.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {olympiad.participants}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{olympiad.description}</p>

                    <div className="text-sm text-muted-foreground mb-4">
                      Registration deadline: {new Date(olympiad.registrationDeadline).toLocaleDateString()}
                    </div>

                    <Button asChild className="w-full">
                      <Link href={olympiad.categoryHref}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
