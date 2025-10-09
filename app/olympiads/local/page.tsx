
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Users, Calendar, Clock, Star, CheckCircle, ArrowRight, GraduationCap } from "lucide-react"
import Link from "next/link"

const localOlympiads = [
  {
    name: "Tashkent Regional Mathematics Competition",
    description:
      "Annual mathematics competition for students in Tashkent region, serving as a stepping stone to national competitions.",
    region: "Tashkent",
    level: "Regional",
    participants: "200+ students",
    duration: "3 hours",
    format: "5 problems",
    subjects: ["Algebra", "Geometry", "Number Theory"],
    eligibility: "Grades 8-11, Tashkent region schools",
    registrationDeadline: "October 1, 2024",
    competitionDate: "November 15, 2024",
    venue: "Tashkent State University",
    prizes: "Medals, certificates, national qualification",
    requirements: [
      "Student of Tashkent region school",
      "Strong mathematics foundation",
      "Teacher recommendation",
      "School registration required",
    ],
    preparation: [
      "Regional problem sets practice",
      "Basic olympiad techniques",
      "Time management skills",
      "Mathematical reasoning",
    ],
    lastYearResults: {
      participants: 185,
      gold: 8,
      silver: 15,
      bronze: 25,
      nationalQualifiers: 12,
    },
  },
  {
    name: "Samarkand Physics Olympiad",
    description:
      "Regional physics competition focusing on theoretical problem-solving and experimental skills for Central Asian students.",
    region: "Samarkand",
    level: "Regional",
    participants: "150+ students",
    duration: "4 hours (3h theory + 1h practical)",
    format: "Theoretical problems + Simple experiments",
    subjects: ["Mechanics", "Electricity", "Optics", "Thermodynamics"],
    eligibility: "Grades 9-11, Central Asian schools",
    registrationDeadline: "September 20, 2024",
    competitionDate: "October 25, 2024",
    venue: "Samarkand State University",
    prizes: "Medals, lab equipment, national pathway",
    requirements: [
      "Secondary school enrollment",
      "Basic physics laboratory experience",
      "School physics teacher endorsement",
      "Regional residency or school attendance",
    ],
    preparation: [
      "Regional physics problems",
      "Basic experimental techniques",
      "Scientific calculation methods",
      "Laboratory safety training",
    ],
    lastYearResults: {
      participants: 142,
      gold: 6,
      silver: 12,
      bronze: 20,
      nationalQualifiers: 8,
    },
  },
  {
    name: "Fergana Valley Chemistry Challenge",
    description:
      "Multi-city chemistry competition covering the Fergana Valley region with emphasis on practical applications.",
    region: "Fergana Valley",
    level: "Inter-Regional",
    participants: "120+ students",
    duration: "4 hours (2.5h theory + 1.5h lab)",
    format: "Written exam + Laboratory work",
    subjects: ["General Chemistry", "Organic Chemistry", "Chemical Analysis"],
    eligibility: "Grades 10-11, Fergana Valley schools",
    registrationDeadline: "September 30, 2024",
    competitionDate: "November 8, 2024",
    venue: "Fergana Polytechnic Institute",
    prizes: "Medals, chemistry sets, university scholarships",
    requirements: [
      "Fergana Valley region school attendance",
      "Chemistry laboratory course completion",
      "Minimum B grade in chemistry",
      "Safety certification required",
    ],
    preparation: [
      "Regional chemistry curriculum",
      "Laboratory technique practice",
      "Chemical safety protocols",
      "Analytical problem solving",
    ],
    lastYearResults: {
      participants: 118,
      gold: 5,
      silver: 10,
      bronze: 18,
      nationalQualifiers: 6,
    },
  },
]

const upcomingEvents = [
  {
    name: "Bukhara Biology Olympiad",
    date: "2024-12-05",
    location: "Bukhara State University",
    participants: "80+ expected",
    subjects: ["Botany", "Zoology", "Ecology"],
  },
  {
    name: "Nukus Computer Science Challenge",
    date: "2024-11-20",
    location: "Karakalpakstan State University",
    participants: "60+ expected",
    subjects: ["Programming", "Algorithms", "Data Structures"],
  },
  {
    name: "Andijan Multi-Science Competition",
    date: "2024-12-12",
    location: "Andijan State University",
    participants: "200+ expected",
    subjects: ["Math", "Physics", "Chemistry", "Biology"],
  },
]

export default function LocalOlympiadsPage() {
  return (
    <div className="min-h-screen">
     
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 via-teal-500/5 to-emerald-500/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-medium">Regional & Local</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Local <span className="text-primary">Olympiads</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Start your olympiad journey with regional and local competitions across Uzbekistan. Build your skills,
                gain experience, and qualify for national competitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/online">Register for Local Events</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#competitions">Browse Competitions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Local Competitions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-muted-foreground">Annual Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">14</div>
                <div className="text-muted-foreground">Regions Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Advancement Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Competitions */}
        <section id="competitions" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Featured Local Competitions
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                These regional competitions provide excellent preparation and qualification opportunities for national
                olympiads.
              </p>
            </div>

            <div className="space-y-12">
              {localOlympiads.map((olympiad, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{olympiad.name}</h3>
                          <p className="text-muted-foreground leading-relaxed">{olympiad.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <MapPin className="h-3 w-3 mr-1" />
                          {olympiad.level}
                        </Badge>
                      </div>

                      {/* Competition Details */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Region:</span>
                            <span>{olympiad.region}</span>
                          </div>
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
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Registration:</span>
                            <span>{olympiad.registrationDeadline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Competition:</span>
                            <span>{olympiad.competitionDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Venue:</span>
                            <span>{olympiad.venue}</span>
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
                            Preparation Areas
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
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Participants:</span>
                            <span className="font-medium">{olympiad.lastYearResults.participants}</span>
                          </div>
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
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <div className="text-sm text-muted-foreground">National Qualifiers</div>
                          <div className="text-lg font-bold text-primary">
                            {olympiad.lastYearResults.nationalQualifiers}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto space-y-3">
                        <Button className="w-full" asChild>
                          <Link href="/apply/online">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent" asChild>
                          <Link href="/apply/criteria">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Upcoming Local Events
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Don't miss these upcoming opportunities to participate in local and regional competitions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Upcoming</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {event.participants}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Subjects:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.subjects.map((subject, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href="/apply/online">Register Interest</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Local Participation */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Why Start with Local Olympiads?
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Local competitions provide the perfect foundation for your olympiad journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-green-500" />
                    Build Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gain valuable competition experience in a supportive regional environment before advancing to
                    national levels.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Competition format familiarity</li>
                    <li>• Time management skills</li>
                    <li>• Problem-solving techniques</li>
                    <li>• Confidence building</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-blue-500" />
                    Qualification Pathway
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Many local competitions serve as direct qualifiers for national olympiads and training programs.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• National olympiad qualification</li>
                    <li>• Training camp invitations</li>
                    <li>• Scholarship opportunities</li>
                    <li>• University recognition</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    Community & Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Connect with like-minded students and teachers in your region who share your passion for science.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Local study groups</li>
                    <li>• Mentor relationships</li>
                    <li>• Peer learning networks</li>
                    <li>• Regional recognition</li>
                  </ul>
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
                Start Your Olympiad Journey Today
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Every champion started with their first local competition. Take the first step towards national and
                international recognition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/online">Register for Local Events</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Find Local Coordinators</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  )
}
