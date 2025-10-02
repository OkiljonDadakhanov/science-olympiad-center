import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Atom, Microscope, Code, Zap, ArrowRight, Users, Award } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    description: "Advanced mathematical problem solving and competition preparation",
    students: "50+",
    achievements: "15 International Medals",
    href: "/programs/mathematics",
  },
  {
    id: "physics",
    title: "Physics",
    icon: Zap,
    description: "Theoretical and experimental physics olympiad training",
    students: "45+",
    achievements: "12 International Medals",
    href: "/programs/physics",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: Atom,
    description: "Chemical analysis and laboratory skills development",
    students: "40+",
    achievements: "10 International Medals",
    href: "/programs/chemistry",
  },
  {
    id: "biology",
    title: "Biology",
    icon: Microscope,
    description: "Life sciences and biological research methodologies",
    students: "35+",
    achievements: "8 International Medals",
    href: "/programs/biology",
  },
  {
    id: "computer-science",
    title: "Computer Science",
    icon: Code,
    description: "Programming, algorithms, and computational thinking",
    students: "60+",
    achievements: "18 International Medals",
    href: "/programs/computer-science",
  },
]

export function ProgramsOverviewSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Comprehensive training programs designed to prepare exceptional students for national and international
            science olympiads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.slice(0, 3).map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center gap-4">
                    <Badge variant="outline" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {program.students}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-primary border-primary/20">
                      <Award className="h-3 w-3 mr-1" />
                      {program.achievements}
                    </Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={program.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.slice(3).map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <Badge variant="outline" className="text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        {program.students}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-primary border-primary/20">
                        <Award className="h-3 w-3 mr-1" />
                        {program.achievements}
                      </Badge>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={program.href}>
                        Learn More <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/programs">
              View All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
