import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, Users, Award, BookOpen, Target, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

export default function MathematicsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Calculator className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Mathematics <span className="text-primary">Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Advanced mathematical problem solving and competition preparation for the International Mathematical
                Olympiad and other prestigious competitions.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Program Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our mathematics program is designed to develop exceptional problem-solving skills and mathematical
                  intuition. Students work through challenging problems from various areas of mathematics, building the
                  analytical thinking required for success in national and international competitions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  The curriculum covers advanced topics in algebra, geometry, number theory, and combinatorics, with
                  emphasis on creative problem-solving techniques and mathematical proof writing.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        Learning Objectives
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Master advanced problem-solving techniques</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Develop mathematical proof writing skills</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Build competition strategy and time management</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Enhance analytical and logical thinking</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-secondary" />
                        Prerequisites
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Strong foundation in high school mathematics</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Passion for mathematical problem solving</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Commitment to intensive training</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Selection through entrance examination</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Program Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="text-sm text-muted-foreground">12 months</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Students</div>
                        <div className="text-sm text-muted-foreground">50+ active participants</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Achievements</div>
                        <div className="text-sm text-muted-foreground">15 International Medals</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Level</div>
                        <div className="text-sm text-muted-foreground">Advanced</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardHeader>
                    <CardTitle>Application</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Applications are open for talented students who demonstrate exceptional mathematical ability.
                    </p>
                    <Button className="w-full">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Curriculum Topics
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Comprehensive coverage of advanced mathematical topics essential for olympiad success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Algebra</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Polynomials
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Functional Equations
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Inequalities
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Complex Numbers
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Geometry</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Euclidean Geometry
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Coordinate Geometry
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Transformations
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Circle Geometry
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Number Theory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Divisibility
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Modular Arithmetic
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Prime Numbers
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Diophantine Equations
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Combinatorics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Counting Principles
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Graph Theory
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Probability
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Generating Functions
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Mathematical Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Sequences & Series
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Limits
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Continuity
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Optimization
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Problem Solving</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Proof Techniques
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Strategy Development
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Contest Preparation
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Time Management
                    </Badge>
                  </div>
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
