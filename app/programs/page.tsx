import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Atom, Microscope, Code, Zap, ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    description: "Advanced mathematical problem solving and competition preparation",
    longDescription:
      "Our mathematics program focuses on developing analytical thinking, problem-solving skills, and mathematical intuition. Students work on challenging problems from algebra, geometry, number theory, and combinatorics.",
    duration: "12 months",
    level: "Advanced",
    students: "50+",
    achievements: "15 International Medals",
    topics: ["Algebra", "Geometry", "Number Theory", "Combinatorics", "Mathematical Analysis"],
    href: "/programs/mathematics",
  },
  {
    id: "physics",
    title: "Physics",
    icon: Zap,
    description: "Theoretical and experimental physics olympiad training",
    longDescription:
      "Comprehensive physics training covering mechanics, thermodynamics, electromagnetism, optics, and modern physics. Includes both theoretical problem-solving and hands-on laboratory work.",
    duration: "12 months",
    level: "Advanced",
    students: "45+",
    achievements: "12 International Medals",
    topics: ["Classical Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
    href: "/programs/physics",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: Atom,
    description: "Chemical analysis and laboratory skills development",
    longDescription:
      "In-depth chemistry program covering organic, inorganic, physical, and analytical chemistry. Students gain extensive laboratory experience and develop strong analytical skills.",
    duration: "12 months",
    level: "Advanced",
    students: "40+",
    achievements: "10 International Medals",
    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry"],
    href: "/programs/chemistry",
  },
  {
    id: "biology",
    title: "Biology",
    icon: Microscope,
    description: "Life sciences and biological research methodologies",
    longDescription:
      "Comprehensive biology program covering molecular biology, genetics, ecology, anatomy, and physiology. Emphasis on research methodologies and scientific inquiry.",
    duration: "12 months",
    level: "Advanced",
    students: "35+",
    achievements: "8 International Medals",
    topics: ["Molecular Biology", "Genetics", "Ecology", "Anatomy & Physiology", "Evolution"],
    href: "/programs/biology",
  },
  {
    id: "computer-science",
    title: "Computer Science",
    icon: Code,
    description: "Programming, algorithms, and computational thinking",
    longDescription:
      "Advanced computer science program focusing on algorithms, data structures, programming languages, and computational problem-solving. Preparation for programming contests and informatics olympiads.",
    duration: "12 months",
    level: "Advanced",
    students: "60+",
    achievements: "18 International Medals",
    topics: ["Algorithms", "Data Structures", "Programming Languages", "Computational Geometry", "Graph Theory"],
    href: "/programs/computer-science",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Our <span className="text-primary">Programs</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Comprehensive training programs designed to prepare exceptional students for national and international
                science olympiads across multiple disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program) => {
                const IconComponent = program.icon
                return (
                  <Card
                    key={program.id}
                    className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
                          <CardDescription className="text-base">{program.description}</CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <Clock className="h-3 w-3 mr-1" />
                          {program.duration}
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          <BookOpen className="h-3 w-3 mr-1" />
                          {program.level}
                        </Badge>
                        <Badge variant="outline">
                          <Users className="h-3 w-3 mr-1" />
                          {program.students}
                        </Badge>
                        <Badge variant="outline" className="text-primary border-primary/20">
                          <Award className="h-3 w-3 mr-1" />
                          {program.achievements}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{program.longDescription}</p>

                      <div>
                        <h4 className="font-semibold mb-3">Key Topics Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={program.href}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                What Makes Our Programs Special
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Our comprehensive approach ensures students receive world-class training and support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-primary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn from experienced educators and researchers with proven track records in olympiad training.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-secondary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Carefully designed curriculum covering all aspects needed for olympiad success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our students consistently achieve top rankings in national and international competitions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-secondary/10">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Intensive Training</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rigorous training sessions designed to push students to their full potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
