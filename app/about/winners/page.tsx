import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, MapPin, School, ArrowRight } from "lucide-react"
import Link from "next/link"

const winners = [
  {
    id: 1,
    studentName: "Aziza Karimova",
    olympiadName: "International Mathematics Olympiad",
    date: "2024-07-15",
    region: "Tashkent",
    school: "Republican Specialized School of Physics and Mathematics",
    place: "Gold Medal",
    description:
      "The most prestigious mathematics competition for high school students worldwide, featuring complex problem-solving challenges.",
    categoryLink: "/olympiads/international",
    image: "/winner-aziza-karimova.jpg",
  },
  {
    id: 2,
    studentName: "Bobur Rahimov",
    olympiadName: "International Physics Olympiad",
    date: "2024-07-20",
    region: "Samarkand",
    school: "Academic Lyceum of Samarkand State University",
    place: "Silver Medal",
    description:
      "Global physics competition testing theoretical knowledge and experimental skills of the world's brightest young physicists.",
    categoryLink: "/olympiads/international",
    image: "/winner-bobur-rahimov.jpg",
  },
  {
    id: 3,
    studentName: "Malika Tursunova",
    olympiadName: "International Chemistry Olympiad",
    date: "2024-07-25",
    region: "Bukhara",
    school: "Specialized School for Gifted Children",
    place: "Bronze Medal",
    description:
      "International chemistry competition featuring laboratory work and theoretical examinations in all areas of chemistry.",
    categoryLink: "/olympiads/international",
    image: "/winner-malika-tursunova.jpg",
  },
  {
    id: 4,
    studentName: "Jasur Abdullayev",
    olympiadName: "National Physics Olympiad",
    date: "2024-04-15",
    region: "Fergana",
    school: "Physics and Mathematics Lyceum",
    place: "1st Place",
    description:
      "National competition to select the best physics students for international representation, featuring advanced theoretical problems.",
    categoryLink: "/olympiads/prestigious",
    image: "/winner-jasur-abdullayev.jpg",
  },
  {
    id: 5,
    studentName: "Nigora Ismoilova",
    olympiadName: "International Biology Olympiad",
    date: "2024-07-10",
    region: "Tashkent",
    school: "Medical College Preparatory School",
    place: "Silver Medal",
    description:
      "Global biology competition testing knowledge in botany, zoology, ecology, genetics, and molecular biology.",
    categoryLink: "/olympiads/international",
    image: "/winner-nigora-ismoilova.jpg",
  },
  {
    id: 6,
    studentName: "Sardor Mirzayev",
    olympiadName: "Regional Mathematics Competition",
    date: "2024-03-20",
    region: "Namangan",
    school: "Namangan Regional Specialized School",
    place: "1st Place",
    description:
      "Regional mathematics competition for students across Central Asia, focusing on advanced problem-solving techniques.",
    categoryLink: "/olympiads/local",
    image: "/winner-sardor-mirzayev.jpg",
  },
]

const getPlaceColor = (place: string) => {
  if (place.includes("Gold") || place === "1st Place") return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
  if (place.includes("Silver") || place === "2nd Place") return "bg-gray-500/10 text-gray-700 border-gray-500/20"
  if (place.includes("Bronze") || place === "3rd Place") return "bg-orange-500/10 text-orange-700 border-orange-500/20"
  return "bg-primary/10 text-primary border-primary/20"
}

export default function WinnersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Our <span className="text-primary">Champions</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Celebrating the outstanding achievements of our students who have excelled in national and international
                science olympiads, bringing honor to Uzbekistan.
              </p>
            </div>
          </div>
        </section>

        {/* Winners Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Recent Winners
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Meet our talented students who have achieved remarkable success in various olympiad competitions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {winners.map((winner) => (
                <Card key={winner.id} className="transition-all hover:shadow-lg">
                  <div className="grid md:grid-cols-[200px_1fr] gap-0">
                    <div className="aspect-square relative overflow-hidden rounded-l-lg">
                      <img
                        src={winner.image || "/placeholder.svg?height=200&width=200&query=student portrait"}
                        alt={winner.studentName}
                        className="object-cover w-full h-full"
                      />
                      <Badge className={`absolute top-3 left-3 ${getPlaceColor(winner.place)}`}>{winner.place}</Badge>
                    </div>

                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl mb-2">{winner.studentName}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {winner.olympiadName}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(winner.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            {winner.region}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <School className="h-4 w-4 mr-2" />
                            {winner.school}
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{winner.description}</p>

                        <Button asChild size="sm" className="w-full">
                          <Link href={winner.categoryLink}>
                            Learn About This Olympiad <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Ready to Join Our Winners?
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Start your journey to olympiad success. Apply to our programs and receive world-class training from
                expert instructors who have guided these champions to victory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/olympiads">Explore Olympiads</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
