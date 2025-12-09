
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, FileText, Star, Award, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { FadingBackground } from "@/components/fading-bg"

const prestigiousOlympiads = [
  {
    name: "National Mathematics Olympiad",
    description:
      "The most prestigious mathematics competition in Uzbekistan, serving as the primary qualifier for IMO.",
    eligibility: "Grades 9-11, Uzbek citizens",
    participants: "120 finalists",
    duration: "4.5 hours",
    format: "6 challenging problems",
    prizes: "Gold, Silver, Bronze medals + IMO team selection",
    registrationDeadline: "September 15, 2024",
    competitionDate: "December 10, 2024",
    location: "Tashkent",
    requirements: [
      "Strong foundation in algebra, geometry, number theory",
      "Previous regional olympiad participation recommended",
      "Academic transcript with mathematics grades A/5",
      "Recommendation letter from mathematics teacher",
    ],
    preparation: [
      "Advanced problem-solving techniques",
      "Past olympiad problems practice",
      "Mathematical proof writing",
      "Time management strategies",
    ],
    lastYearResults: {
      gold: 3,
      silver: 5,
      bronze: 8,
      imoQualifiers: 6,
    },
  },
  {
    name: "National Physics Olympiad",
    description:
      "Premier physics competition combining theoretical knowledge with experimental skills for IPhO qualification.",
    eligibility: "Grades 10-11, Uzbek citizens",
    participants: "100 finalists",
    duration: "5 hours (3h theory + 2h experimental)",
    format: "Theoretical problems + Laboratory experiments",
    prizes: "Gold, Silver, Bronze medals + IPhO team selection",
    registrationDeadline: "September 20, 2024",
    competitionDate: "December 12, 2024",
    location: "Tashkent",
    requirements: [
      "Advanced physics knowledge (mechanics, thermodynamics, electromagnetism)",
      "Laboratory experience with measurement instruments",
      "Strong mathematical background (calculus, differential equations)",
      "Previous physics competition experience preferred",
    ],
    preparation: [
      "Advanced theoretical physics problems",
      "Experimental design and data analysis",
      "Scientific report writing",
      "Laboratory safety protocols",
    ],
    lastYearResults: {
      gold: 2,
      silver: 6,
      bronze: 9,
      iphoQualifiers: 5,
    },
  },
  {
    name: "National Chemistry Olympiad",
    description:
      "Comprehensive chemistry competition testing theoretical knowledge and practical laboratory skills for IChO.",
    eligibility: "Grades 10-11, Uzbek citizens",
    participants: "90 finalists",
    duration: "5 hours (3h theory + 2h practical)",
    format: "Theoretical problems + Laboratory synthesis",
    prizes: "Gold, Silver, Bronze medals + IChO team selection",
    registrationDeadline: "September 25, 2024",
    competitionDate: "December 14, 2024",
    location: "Tashkent",
    requirements: [
      "Mastery of organic, inorganic, and physical chemistry",
      "Laboratory synthesis and analysis experience",
      "Understanding of chemical safety procedures",
      "Strong analytical and problem-solving skills",
    ],
    preparation: [
      "Advanced chemical reactions and mechanisms",
      "Quantitative analysis techniques",
      "Spectroscopy and structure determination",
      "Laboratory technique refinement",
    ],
    lastYearResults: {
      gold: 4,
      silver: 4,
      bronze: 7,
      ichoQualifiers: 4,
    },
  },
]

export default function PrestigiousOlympiadsPage() {
  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/imo-slider.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-sm relative">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full mb-6">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span className="text-yellow-700 font-medium">Elite Competitions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Prestigious <span className="text-primary">Olympiads</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                National competitions and elite international qualifiers for the most talented students in Uzbekistan.
                Your pathway to representing our nation on the world stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/online">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#competitions">View Competitions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Prestigious Competitions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">310</div>
                <div className="text-muted-foreground">Annual Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">International Qualifiers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">University Admission Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Competitions */}
        <section id="competitions" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Major Prestigious Competitions
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                These elite competitions serve as gateways to international olympiads and prestigious university
                programs.
              </p>
            </div>

            <div className="space-y-12">
              {prestigiousOlympiads.map((olympiad, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 shadow-xl">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{olympiad.name}</h3>
                          <p className="text-muted-foreground leading-relaxed">{olympiad.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Trophy className="h-3 w-3 mr-1" />
                          Elite
                        </Badge>
                      </div>

                      {/* Competition Details */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Participants:</span>
                            <span>{olympiad.participants}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Duration:</span>
                            <span>{olympiad.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Format:</span>
                            <span>{olympiad.format}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Registration:</span>
                            <span>{olympiad.registrationDeadline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Competition:</span>
                            <span>{olympiad.competitionDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Location:</span>
                            <span>{olympiad.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Requirements & Preparation */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Requirements
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-blue-500" />
                            Preparation Focus
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.preparation.map((prep, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{prep}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Results & Actions */}
                    <div className="bg-muted/30 p-8 flex flex-col">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">2023 Results</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-yellow-600">🥇 Gold:</span>
                            <span className="font-medium">{olympiad.lastYearResults.gold}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">🥈 Silver:</span>
                            <span className="font-medium">{olympiad.lastYearResults.silver}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-orange-600">🥉 Bronze:</span>
                            <span className="font-medium">{olympiad.lastYearResults.bronze}</span>
                          </div>
                          {(olympiad.lastYearResults.imoQualifiers ||
                            olympiad.lastYearResults.iphoQualifiers ||
                            olympiad.lastYearResults.ichoQualifiers) && (
                            <div className="border-t pt-2 mt-2">
                              <div className="flex justify-between text-sm font-medium text-primary">
                                <span>International Team:</span>
                                <span>
                                  {olympiad.lastYearResults.imoQualifiers ||
                                    olympiad.lastYearResults.iphoQualifiers ||
                                    olympiad.lastYearResults.ichoQualifiers}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto space-y-3">
                        <Button className="w-full" asChild>
                          <Link href="/apply/online">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent" asChild>
                          <Link href="/apply/criteria">View Requirements</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Application Process
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Follow these steps to participate in prestigious olympiad competitions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Online Registration</h3>
                <p className="text-muted-foreground text-sm">
                  Complete your application with academic transcripts and teacher recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Regional Qualifier</h3>
                <p className="text-muted-foreground text-sm">
                  Participate in regional competitions to qualify for national finals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Training Camp</h3>
                <p className="text-muted-foreground text-sm">
                  Top qualifiers attend intensive training camps with expert coaches.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">National Finals</h3>
                <p className="text-muted-foreground text-sm">
                  Compete in national finals for medals and international team selection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Meet our prestigious olympiad winners who went on to achieve international recognition.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold">Akmal Karimov</h3>
                    <p className="text-sm text-muted-foreground">Mathematics Gold Medalist</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    "Winning the National Mathematics Olympiad opened doors to IMO 2024 where I achieved a perfect
                    score. Now studying at MIT with a full scholarship."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">Nilufar Rashidova</h3>
                    <p className="text-sm text-muted-foreground">Physics Gold Medalist</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    "The rigorous training for National Physics Olympiad prepared me for IPhO success. Currently
                    pursuing PhD in Theoretical Physics at Cambridge."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold">Sardor Abdullayev</h3>
                    <p className="text-sm text-muted-foreground">Chemistry Gold Medalist</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    "National Chemistry Olympiad victory led to IChO gold medal and research opportunities. Now working
                    on sustainable chemistry solutions at Stanford."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Ready to Join the Elite?
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Take the first step towards representing Uzbekistan in international competitions and securing your
                future in science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/online">Start Application</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get Guidance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
