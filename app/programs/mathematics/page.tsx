import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, Users, Award, BookOpen, Target, ArrowRight } from "lucide-react"

export default function MathematicsPage() {
  return (
    <div className="min-h-screen">
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
                  The Mathematics Program of the Science Olympiad Center aims to cultivate deep mathematical thinking
                  through systematic training, rigorous problem-solving practice, and exposure to international olympiad
                  standards. Students engage in intensive coursework covering advanced mathematical theories and learn to
                  apply them in non-standard, competition-level problem contexts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  The curriculum integrates conceptual understanding, creative problem-solving, mathematical proof
                  techniques, competition strategies, and timed assessments. This approach ensures readiness for district,
                  regional, national, and international olympiads.
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
                        <p className="text-muted-foreground">Master advanced olympiad-style problem-solving methods</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Strengthen logical reasoning and proof-writing skills</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Build effective contest strategies and time management skills</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Enhance abstract thinking across algebra, geometry, number theory, and combinatorics</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Prepare for high-performing participation in international mathematics competitions</p>
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
                        <p className="text-muted-foreground">Strong foundation in secondary school mathematics</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Demonstrated interest in advanced mathematical problem solving</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">High level of self-discipline and readiness for intensive training</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Successful completion of the Center’s competitive entrance examination</p>
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
                        <div className="font-medium">Participants</div>
                        <div className="text-sm text-muted-foreground">50+ active students</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Achievements</div>
                        <div className="text-sm text-muted-foreground">15+ international medals (IMO, ZIO, WMI)</div>
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
                      Open to students with outstanding mathematical talent and demonstrated analytical ability.
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
                A structured roadmap covering all essential olympiad domains in mathematics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Algebra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Polynomials</Badge>
                  <Badge variant="outline" className="text-xs">Functional Equations</Badge>
                  <Badge variant="outline" className="text-xs">Inequalities</Badge>
                  <Badge variant="outline" className="text-xs">Complex Numbers</Badge>
                  <Badge variant="outline" className="text-xs">Equations & Transformations</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Geometry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Euclidean Geometry</Badge>
                  <Badge variant="outline" className="text-xs">Coordinate Geometry</Badge>
                  <Badge variant="outline" className="text-xs">Transformational Geometry</Badge>
                  <Badge variant="outline" className="text-xs">Circle and Triangle Geometry</Badge>
                  <Badge variant="outline" className="text-xs">Geometric Constructions & Proofs</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Number Theory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Divisibility Rules</Badge>
                  <Badge variant="outline" className="text-xs">Modular Arithmetic</Badge>
                  <Badge variant="outline" className="text-xs">Prime Numbers & Factorization</Badge>
                  <Badge variant="outline" className="text-xs">Diophantine Equations</Badge>
                  <Badge variant="outline" className="text-xs">Arithmetic Functions</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Combinatorics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Counting Principles</Badge>
                  <Badge variant="outline" className="text-xs">Graph Theory Fundamentals</Badge>
                  <Badge variant="outline" className="text-xs">Probability</Badge>
                  <Badge variant="outline" className="text-xs">Recurrence Relations</Badge>
                  <Badge variant="outline" className="text-xs">Generating Functions</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Mathematical Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Sequences & Series</Badge>
                  <Badge variant="outline" className="text-xs">Limits and Continuity</Badge>
                  <Badge variant="outline" className="text-xs">Inequalities in Analysis</Badge>
                  <Badge variant="outline" className="text-xs">Optimization Problems</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Problem Solving & Competition Preparation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Olympiad Proof Techniques</Badge>
                  <Badge variant="outline" className="text-xs">Strategy Development</Badge>
                  <Badge variant="outline" className="text-xs">Simulation of Contest Conditions</Badge>
                  <Badge variant="outline" className="text-xs">Time Management</Badge>
                  <Badge variant="outline" className="text-xs">Error Analysis & Post-Contest Review</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
