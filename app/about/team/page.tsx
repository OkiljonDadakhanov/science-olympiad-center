import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Award, BookOpen } from "lucide-react"

const leadership = [
  {
    name: "Dr. Alisher Tashkentov",
    position: "Director",
    specialization: "Mathematics & Physics",
    education: "Ph.D. in Mathematics, Moscow State University",
    experience: "15+ years in olympiad training",
    achievements: ["Former IMO Gold Medalist", "Published 50+ research papers", "Trained 100+ international medalists"],
    image: "/team-director-alisher.jpg",
  },
  {
    name: "Dr. Fatima Nazarova",
    position: "Academic Director",
    specialization: "Chemistry & Biology",
    education: "Ph.D. in Chemistry, Cambridge University",
    experience: "12+ years in scientific education",
    achievements: ["IChO Team Leader", "UNESCO Education Award", "Author of 3 textbooks"],
    image: "/team-academic-director-fatima.jpg",
  },
]

const faculty = [
  {
    name: "Prof. Michael Chen",
    position: "Mathematics Program Head",
    specialization: "Number Theory & Combinatorics",
    education: "Ph.D. Mathematics, MIT",
    experience: "10+ years",
    achievements: ["IMO Problem Committee", "15 International Medals"],
    image: "/team-math-michael.jpg",
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Physics Program Head",
    specialization: "Theoretical Physics",
    education: "Ph.D. Physics, Stanford University",
    experience: "8+ years",
    achievements: ["IPhO Gold Medalist", "Young Scientist Award"],
    image: "/team-physics-sarah.jpg",
  },
  {
    name: "Dr. Elena Rodriguez",
    position: "Chemistry Program Head",
    specialization: "Analytical Chemistry",
    education: "Ph.D. Chemistry, ETH Zurich",
    experience: "9+ years",
    achievements: ["IChO Team Coach", "Research Excellence Award"],
    image: "/team-chemistry-elena.jpg",
  },
  {
    name: "Dr. Rustam Abdullayev",
    position: "Biology Program Head",
    specialization: "Molecular Biology",
    education: "Ph.D. Biology, Harvard University",
    experience: "7+ years",
    achievements: ["IBO Team Leader", "Biotechnology Innovation Award"],
    image: "/team-biology-rustam.jpg",
  },
  {
    name: "Dr. Jamshid Karimov",
    position: "Computer Science Program Head",
    specialization: "Algorithms & Data Structures",
    education: "Ph.D. Computer Science, Carnegie Mellon",
    experience: "6+ years",
    achievements: ["IOI Gold Medalist", "ACM Programming Contest Winner"],
    image: "/team-cs-jamshid.jpg",
  },
  {
    name: "Dr. Nilufar Saidova",
    position: "Student Affairs Director",
    specialization: "Educational Psychology",
    education: "Ph.D. Psychology, Oxford University",
    experience: "11+ years",
    achievements: ["Student Mentorship Award", "Educational Innovation Prize"],
    image: "/team-student-affairs-nilufar.jpg",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Meet the dedicated educators, researchers, and mentors who guide our students to excellence in science
                olympiads and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Visionary leaders with decades of experience in scientific education and olympiad training.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/20">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{member.name}</CardTitle>
                    <p className="text-primary font-semibold">{member.position}</p>
                    <p className="text-muted-foreground">{member.specialization}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Education
                      </h4>
                      <p className="text-sm text-muted-foreground">{member.education}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="outline" className="text-xs mr-2 mb-2">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Team */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Faculty & Program Heads
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Expert educators and researchers leading our specialized programs in mathematics, physics, chemistry,
                biology, and computer science.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-semibold text-sm">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.specialization}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Education</h4>
                      <p className="text-xs text-muted-foreground">{member.education}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Experience</h4>
                      <p className="text-xs text-muted-foreground">{member.experience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Achievements</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Join Our Team
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                We're always looking for passionate educators and researchers who share our commitment to nurturing
                scientific excellence. Join us in shaping the future of science education in Uzbekistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/careers">View Open Positions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Get in Touch</a>
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
