
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Trophy, Users, MapPin, Calendar, Star, Award, CheckCircle, ArrowRight, Plane } from "lucide-react"
import Link from "next/link"
import { FadingBackground } from "@/components/fading-bg"

const internationalOlympiads = [
  {
    name: "International Mathematical Olympiad (IMO)",
    description:
      "The most prestigious mathematics competition for high school students worldwide, held annually since 1959.",
    country: "United Kingdom",
    city: "Bath",
    date: "July 11-22, 2025",
    participants: "6 students (Team Uzbekistan)",
    duration: "2 days, 4.5 hours each",
    format: "6 problems over 2 days",
    subjects: ["Algebra", "Combinatorics", "Geometry", "Number Theory"],
    eligibility: "Under 20 years, not enrolled in university",
    selectionProcess: "National Olympiad winners + training camp",
    teamSize: 6,
    flag: "🇬🇧",
    website: "https://imo-official.org",
    lastResults: {
      year: 2024,
      gold: 2,
      silver: 1,
      bronze: 2,
      rank: 15,
      totalCountries: 112,
    },
    preparation: [
      "Advanced problem-solving techniques",
      "International-level problem practice",
      "Team collaboration strategies",
      "Competition psychology training",
    ],
    benefits: [
      "Full expenses covered by government",
      "International recognition",
      "University admission advantages",
      "Global network of mathematicians",
    ],
  },
  {
    name: "International Physics Olympiad (IPhO)",
    description: "Premier international physics competition combining theoretical knowledge with experimental skills.",
    country: "Iran",
    city: "Isfahan",
    date: "July 21-29, 2025",
    participants: "5 students (Team Uzbekistan)",
    duration: "2 days theory + 1 day experimental",
    format: "Theoretical problems + Laboratory experiments",
    subjects: ["Mechanics", "Thermodynamics", "Electromagnetism", "Modern Physics"],
    eligibility: "Under 20 years, secondary education",
    selectionProcess: "National Physics Olympiad + intensive training",
    teamSize: 5,
    flag: "🇮🇷",
    website: "https://ipho-unofficial.org",
    lastResults: {
      year: 2024,
      gold: 1,
      silver: 2,
      bronze: 2,
      rank: 18,
      totalCountries: 78,
    },
    preparation: [
      "Advanced theoretical physics",
      "Experimental design and analysis",
      "Scientific report writing",
      "Laboratory safety protocols",
    ],
    benefits: [
      "Government-sponsored participation",
      "Access to world-class laboratories",
      "International physics community",
      "Research opportunities",
    ],
  },
  {
    name: "International Chemistry Olympiad (IChO)",
    description: "Global chemistry competition testing theoretical knowledge and practical laboratory skills.",
    country: "Saudi Arabia",
    city: "Riyadh",
    date: "July 26 - August 4, 2025",
    participants: "4 students (Team Uzbekistan)",
    duration: "2 days theory + 1 day practical",
    format: "Theoretical problems + Laboratory synthesis",
    subjects: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"],
    eligibility: "Under 20 years, secondary education",
    selectionProcess: "National Chemistry Olympiad + selection tests",
    teamSize: 4,
    flag: "🇸🇦",
    website: "https://icho-official.org",
    lastResults: {
      year: 2024,
      gold: 1,
      silver: 1,
      bronze: 2,
      rank: 22,
      totalCountries: 84,
    },
    preparation: [
      "Advanced chemical reactions",
      "Laboratory synthesis techniques",
      "Spectroscopy and analysis",
      "Chemical safety procedures",
    ],
    benefits: [
      "International laboratory experience",
      "Chemical industry connections",
      "University research opportunities",
      "Global chemistry network",
    ],
  },
]

export default function InternationalOlympiadsPage() {
  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/ipho-slider.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/10 backdrop-blur-sm relative">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Global Competitions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                International <span className="text-primary">Olympiads</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Represent Uzbekistan on the world stage and compete with the brightest minds from over 100 countries in
                prestigious international science competitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/criteria">Qualification Requirements</Link>
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
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">International Competitions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">Team Members Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">112</div>
                <div className="text-muted-foreground">Participating Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">36</div>
                <div className="text-muted-foreground">Medals Won (2024)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Competitions */}
        <section id="competitions" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Major International Competitions
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                These world-renowned competitions bring together the most talented students from around the globe.
              </p>
            </div>

            <div className="space-y-12">
              {internationalOlympiads.map((olympiad, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 shadow-xl">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{olympiad.flag}</span>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{olympiad.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">{olympiad.description}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Globe className="h-3 w-3 mr-1" />
                          International
                        </Badge>
                      </div>

                      {/* Competition Details */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Location:</span>
                            <span>
                              {olympiad.city}, {olympiad.country}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Date:</span>
                            <span>{olympiad.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Team Size:</span>
                            <span>{olympiad.teamSize} students</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Format:</span>
                            <span>{olympiad.format}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Duration:</span>
                            <span>{olympiad.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Eligibility:</span>
                            <span>{olympiad.eligibility}</span>
                          </div>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Competition Subjects</h4>
                        <div className="flex flex-wrap gap-2">
                          {olympiad.subjects.map((subject, i) => (
                            <Badge key={i} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Preparation & Benefits */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-blue-500" />
                            Preparation Program
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
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-green-500" />
                            Benefits
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Results & Actions */}
                    <div className="bg-muted/30 p-8 flex flex-col">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">{olympiad.lastResults.year} Results</h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-yellow-600">🥇 Gold:</span>
                            <span className="font-medium">{olympiad.lastResults.gold}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">🥈 Silver:</span>
                            <span className="font-medium">{olympiad.lastResults.silver}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-orange-600">🥉 Bronze:</span>
                            <span className="font-medium">{olympiad.lastResults.bronze}</span>
                          </div>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="text-sm text-muted-foreground">Global Ranking</div>
                          <div className="text-lg font-bold text-primary">
                            #{olympiad.lastResults.rank} / {olympiad.lastResults.totalCountries}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto space-y-3">
                        <Button className="w-full" asChild>
                          <Link href="/apply/criteria">
                            View Requirements <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent" asChild>
                          <Link href={olympiad.website} target="_blank">
                            Official Website
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Team Selection Process
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Our rigorous selection process ensures only the most prepared students represent Uzbekistan
                internationally.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">National Victory</h3>
                <p className="text-muted-foreground text-sm">
                  Win medals at National Olympiad competitions to qualify for international consideration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Training Camp</h3>
                <p className="text-muted-foreground text-sm">
                  Attend intensive 3-week training camps with international-level problems and expert coaching.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Selection Tests</h3>
                <p className="text-muted-foreground text-sm">
                  Complete multiple selection tests designed to mirror international competition conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Team Formation</h3>
                <p className="text-muted-foreground text-sm">
                  Final team selection based on performance, consistency, and readiness for international competition.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">International Competition</h3>
                <p className="text-muted-foreground text-sm">
                  Represent Uzbekistan with full government support and expert coaching at international venues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Performance */}
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Historical Performance
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Track record of Uzbekistan's achievements in international science olympiads over the past five years.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Medal Statistics (2020-2024)</h3>
                <div className="space-y-4">
                  {[
                    { year: "2024", gold: 9, silver: 12, bronze: 15, total: 36, rank: "15th globally" },
                    { year: "2023", gold: 7, silver: 14, bronze: 18, total: 39, rank: "18th globally" },
                    { year: "2022", gold: 8, silver: 11, bronze: 16, total: 35, rank: "16th globally" },
                    { year: "2021", gold: 6, silver: 13, bronze: 14, total: 33, rank: "20th globally" },
                    { year: "2020", gold: 5, silver: 10, bronze: 17, total: 32, rank: "22nd globally" },
                  ].map((year, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-lg">{year.year}</span>
                          <div className="text-right">
                            <Badge variant="outline">{year.total} medals</Badge>
                            <div className="text-xs text-muted-foreground mt-1">{year.rank}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-yellow-600 font-semibold">🥇 {year.gold}</div>
                            <div className="text-gray-500">Gold</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-400 font-semibold">🥈 {year.silver}</div>
                            <div className="text-gray-500">Silver</div>
                          </div>
                          <div className="text-center">
                            <div className="text-orange-600 font-semibold">🥉 {year.bronze}</div>
                            <div className="text-gray-500">Bronze</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Notable Achievements</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <div className="font-semibold">IMO 2024 - Perfect Score</div>
                          <div className="text-sm text-muted-foreground">
                            Akmal Karimov achieved a perfect score of 42/42 points, ranking 1st globally among 600+
                            participants.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <div className="font-semibold">IPhO 2023 - Best Experimental</div>
                          <div className="text-sm text-muted-foreground">
                            Nilufar Rashidova won the special prize for best experimental solution in theoretical
                            physics.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <div className="font-semibold">IOI 2024 - Team Performance</div>
                          <div className="text-sm text-muted-foreground">
                            Uzbekistan ranked 8th globally, our best team performance in IOI history with 3 medals.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-purple-500 mt-1" />
                        <div>
                          <div className="font-semibold">IChO 2023 - Rising Star</div>
                          <div className="text-sm text-muted-foreground">
                            Youngest ever gold medalist from Uzbekistan at age 16, inspiring a new generation.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Dream of Global Recognition?
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Join the ranks of international olympiad champions and represent Uzbekistan on the world's biggest
                scientific stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/criteria">Check Qualification</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about/winners">Meet Our Champions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
