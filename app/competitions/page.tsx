import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Trophy, Calendar, Users, ArrowRight, Medal, Flag, Target } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const competitions = [
  {
    id: "national",
    title: "National Olympiads",
    icon: Flag,
    description: "Uzbekistan's premier science competitions",
    longDescription:
      "Our national olympiads serve as the primary pathway for identifying and nurturing scientific talent across Uzbekistan. These competitions cover all major scientific disciplines and serve as qualifiers for international events.",
    participants: "2000+",
    subjects: "5 Subjects",
    frequency: "Annual",
    prizes: "Gold, Silver, Bronze Medals",
    benefits: [
      "University admission advantages",
      "Scholarship opportunities",
      "Recognition and awards",
      "International team selection",
    ],
    href: "/competitions/national",
  },
  {
    id: "international",
    title: "International Competitions",
    icon: Globe,
    description: "Global science olympiad participation",
    longDescription:
      "We prepare and send teams to prestigious international science olympiads worldwide, including IMO, IPhO, IChO, IBO, and IOI. Our students compete against the world's best young scientists.",
    participants: "50+",
    subjects: "5 Subjects",
    frequency: "Annual",
    prizes: "International Recognition",
    benefits: [
      "Global exposure and experience",
      "International networking",
      "University opportunities abroad",
      "Career advancement",
    ],
    href: "/competitions/international",
  },
  {
    id: "regional",
    title: "Regional Events",
    icon: MapPin,
    description: "Local and regional science competitions",
    longDescription:
      "Regional competitions provide opportunities for students to gain experience and prepare for higher-level competitions. These events help identify talent at the grassroots level.",
    participants: "5000+",
    subjects: "5 Subjects",
    frequency: "Multiple per year",
    prizes: "Certificates and Awards",
    benefits: ["Competition experience", "Skill development", "Talent identification", "Preparation for nationals"],
    href: "/competitions/regional",
  },
]

const upcomingCompetitions = [
  {
    title: "National Mathematics Olympiad 2025",
    date: "2025-03-15",
    location: "Tashkent, Uzbekistan",
    participants: "500+",
    subjects: ["Mathematics"],
    status: "Registration Open",
  },
  {
    title: "International Physics Olympiad 2025",
    date: "2025-07-20",
    location: "Singapore",
    participants: "400+",
    subjects: ["Physics"],
    status: "Team Selection",
  },
  {
    title: "Central Asian Chemistry Competition",
    date: "2025-05-10",
    location: "Almaty, Kazakhstan",
    participants: "200+",
    subjects: ["Chemistry"],
    status: "Preparation Phase",
  },
]

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Science <span className="text-primary">Competitions</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                From local contests to international olympiads, we provide pathways for students to showcase their
                scientific knowledge and compete at the highest levels.
              </p>
            </div>
          </div>
        </section>

        {/* Competition Types */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Competition Levels
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                We organize and participate in competitions at multiple levels, providing opportunities for students at
                every stage of their scientific journey.
              </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {competitions.map((competition, index) => {
                const IconComponent = competition.icon
                return (
                  <Card
                    key={competition.id}
                    className={`group hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "border-primary/10 hover:border-primary/20" : "border-secondary/10 hover:border-secondary/20"}`}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 p-8">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`inline-flex items-center justify-center w-16 h-16 rounded-full transition-colors ${index % 2 === 0 ? "bg-primary/10 group-hover:bg-primary/20" : "bg-secondary/10 group-hover:bg-secondary/20"}`}
                          >
                            <IconComponent
                              className={`h-8 w-8 ${index % 2 === 0 ? "text-primary" : "text-secondary"}`}
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{competition.title}</h3>
                            <p className="text-muted-foreground">{competition.description}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">{competition.longDescription}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          <Badge
                            variant="secondary"
                            className={
                              index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                            }
                          >
                            <Users className="h-3 w-3 mr-1" />
                            {competition.participants}
                          </Badge>
                          <Badge variant="outline">
                            <Target className="h-3 w-3 mr-1" />
                            {competition.subjects}
                          </Badge>
                          <Badge variant="outline">
                            <Calendar className="h-3 w-3 mr-1" />
                            {competition.frequency}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              index % 2 === 0 ? "text-primary border-primary/20" : "text-secondary border-secondary/20"
                            }
                          >
                            <Trophy className="h-3 w-3 mr-1" />
                            {competition.prizes}
                          </Badge>
                        </div>

                        <Button asChild className={index % 2 === 0 ? "" : "bg-secondary hover:bg-secondary/90"}>
                          <Link href={competition.href}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Benefits & Opportunities:</h4>
                        <div className="space-y-3">
                          {competition.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
                              />
                              <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Competitions */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Upcoming Competitions
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Stay updated with the latest competition schedules and registration deadlines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {upcomingCompetitions.map((competition, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={competition.status === "Registration Open" ? "default" : "secondary"}
                        className={competition.status === "Registration Open" ? "bg-primary" : ""}
                      >
                        {competition.status}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{new Date(competition.date).getDate()}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(competition.date).toLocaleDateString("en", { month: "short", year: "numeric" })}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{competition.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {competition.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {competition.participants} participants
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {competition.subjects.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Celebrating the remarkable achievements of our students in international competitions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-primary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Medal className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">63</div>
                  <div className="text-muted-foreground font-medium">Total International Medals</div>
                </CardContent>
              </Card>

              <Card className="text-center border-secondary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Trophy className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">25</div>
                  <div className="text-muted-foreground font-medium">Gold Medals</div>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground font-medium">Countries Competed</div>
                </CardContent>
              </Card>

              <Card className="text-center border-secondary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                  <div className="text-muted-foreground font-medium">International Participants</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
