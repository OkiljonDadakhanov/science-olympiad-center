import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Award,
  CheckCircle,
  Globe,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { FadingBackground } from "@/components/fading-bg"

type MedalInfo = {
  gold: number
  silver: number
  bronze: number
}

type RegionalOlympiad = {
  name: string
  shortName?: string
  location: string
  date: string
  teamSize: string
  format: string
  duration: string
  eligibility: string
  medals: MedalInfo
  category: string
}

const regionalOlympiads: RegionalOlympiad[] = [
  {
    name: "International Junior Science Olympiad (IJSO)",
    shortName: "IJSO",
    location: "Sirius Federal Territory, Russia",
    date: "23 November – 2 December 2025",
    teamSize: "6 students",
    format: "Multiple-choice questionnaire, theoretical round (6 problems, 4 hours), experimental round",
    duration: "3 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 0, silver: 1, bronze: 3 },
    category: "Junior Science",
  },
  {
    name: "22nd International Zhautykov Olympiad (IZhO)",
    shortName: "IZhO",
    location: "Almaty, Kazakhstan",
    date: "13–17 January 2025",
    teamSize: "4 teams, 7 members each",
    format:
      "Mathematics: 6 problems over 2 days; Physics: 6 problems over 2 days; Informatics: 3 problems over 1 day",
    duration: "2 days, 4.5 hours",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 2, silver: 5, bronze: 12 },
    category: "Mathematics, Physics, Informatics",
  },
  {
    name: "Caucasus Mathematical Olympiad (CMO)",
    shortName: "CMO",
    location: "Maykop, Republic of Adygea",
    date: "14–19 March 2025",
    teamSize: "7 students",
    format: "8 problems over 2 days",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 4, silver: 1, bronze: 2 },
    category: "Mathematics",
  },
  {
    name: "European Girls’ Mathematical Olympiad (EGMO)",
    shortName: "EGMO",
    location: "Prishtina, Kosovo",
    date: "11–17 April 2025",
    teamSize: "4 students",
    format: "6 problems over 2 days",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 0, silver: 1, bronze: 2 },
    category: "Mathematics",
  },
  {
    name: "European Girls’ Olympiad in Informatics (EGOI)",
    shortName: "EGOI",
    location: "Bonn, Germany",
    date: "14–20 July 2025",
    teamSize: "4 students",
    format: "2 contests over 2 days",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 0, silver: 0, bronze: 2 },
    category: "Informatics",
  },
  {
    name: "42nd Balkan Mathematical Olympiad (BMO)",
    shortName: "BMO",
    location: "Sarajevo, Bosnia and Herzegovina",
    date: "25–30 April 2025",
    teamSize: "6 students",
    format: "4 problems over 1 day",
    duration: "1 day, 4.5 hours",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 1, silver: 4, bronze: 0 },
    category: "Mathematics",
  },
  {
    name: "Asian Physics Olympiad (APhO)",
    shortName: "APhO",
    location: "Dhahran, Kingdom of Saudi Arabia",
    date: "4–12 May 2025",
    teamSize: "5 students",
    format: "Theoretical and experimental exams",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 0, silver: 0, bronze: 1 },
    category: "Physics",
  },
  {
    name: "59th International Mendeleev Chemistry Olympiad (MMO)",
    shortName: "MMO",
    location: "Belo Horizonte, Brazil",
    date: "5–13 May 2025",
    teamSize: "7 students",
    format: "Practical exam and 2 theoretical exams",
    duration: "3 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 3, silver: 2, bronze: 2 },
    category: "Chemistry",
  },
  {
    name: "3rd Al-Khwarizmi International Mathematics and Informatics Olympiad (KHIMIO)",
    shortName: "KHIMIO (Math & CS)",
    location: "Tashkent, Uzbekistan",
    date: "7–13 May 2025",
    teamSize: "19 teams, 6 members each",
    format: "Mathematics: 8 problems over 2 days; Informatics contest",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 7, silver: 13, bronze: 30 },
    category: "Mathematics, Informatics",
  },
  {
    name: "19th Asia–Pacific Informatics Olympiad (APIO, online)",
    shortName: "APIO",
    location: "Tashkent, Uzbekistan (online host)",
    date: "17–18 May 2025",
    teamSize: "6 students",
    format: "Programming contest",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 0, silver: 0, bronze: 3 },
    category: "Informatics",
  },
  {
    name: "2nd Abu Rayhan Biruni International Chemistry Olympiad (KHIMIO)",
    shortName: "KHIMIO (Chemistry)",
    location: "Tashkent, Uzbekistan",
    date: "28 May – 4 June 2025",
    teamSize: "5 teams, 4 members each",
    format: "23 problems",
    duration: "2 days",
    eligibility: "Under 18 years",
    medals: { gold: 6, silver: 8, bronze: 5 },
    category: "Chemistry",
  },
  {
    name: "29th Junior Balkan Mathematical Olympiad (JBMO)",
    shortName: "JBMO",
    location: "Struga, North Macedonia",
    date: "24–29 July 2025",
    teamSize: "1 team, 6 members",
    format: "4 problems",
    duration: "1 day",
    eligibility: "Under 18 years",
    medals: { gold: 3, silver: 2, bronze: 1 },
    category: "Mathematics",
  },
  {
    name: "Asian Pacific Mathematics Olympiad (APMO, online)",
    shortName: "APMO",
    location: "Online",
    date: "17–18 May 2025",
    teamSize: "6 students",
    format: "Contest (proof-based problems)",
    duration: "2 days",
    eligibility: "Under 20 years, not enrolled in university",
    medals: { gold: 0, silver: 0, bronze: 3 },
    category: "Mathematics",
  },
]

export default function MintaqaviyOlympiadsPage() {
  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/regional-olympiads.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-500/10 via-emerald-500/5 to-sky-500/10 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full mb-6">
                <Globe className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-700 font-medium">Regional International Olympiads</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Regional International <span className="text-primary">Olympiads</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Leading regional olympiads in Europe, Asia and the Asia–Pacific region that connect national success
                with world-level competition.
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
                <div className="text-3xl font-bold text-primary mb-2">{regionalOlympiads.length}</div>
                <div className="text-muted-foreground">Regional International Olympiads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">Host Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Total Medals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section id="competitions" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
              Regional International Olympiads
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Regional olympiads where Uzbekistan&apos;s students earn medals and gain experience before global
                competitions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {regionalOlympiads.map((olympiad, index) => (
                <Card key={index} className="border-2 shadow-lg bg-white/95">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold">{olympiad.name}</h3>
                        {olympiad.shortName && (
                          <p className="text-sm text-muted-foreground mt-1">Short name: {olympiad.shortName}</p>
                        )}
                      </div>
                      <Badge variant="secondary">{olympiad.category}</Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Location:</span>
                          <span className="text-muted-foreground">{olympiad.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Date:</span>
                          <span className="text-muted-foreground">{olympiad.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Team Size:</span>
                          <span className="text-muted-foreground">{olympiad.teamSize}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Duration:</span>
                          <span className="text-muted-foreground">{olympiad.duration}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">Eligibility:</span>{" "}
                            <span className="text-muted-foreground">{olympiad.eligibility}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium">Format:</span>{" "}
                      <span className="text-muted-foreground">{olympiad.format}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        2025 Medal Results
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-yellow-600">🥇 Gold</span>
                          <span className="font-medium">{olympiad.medals.gold}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">🥈 Silver</span>
                          <span className="font-medium">{olympiad.medals.silver}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-orange-600">🥉 Bronze</span>
                          <span className="font-medium">{olympiad.medals.bronze}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/about/winners">
                          View Winners <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


