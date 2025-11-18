import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Atom, Zap, Thermometer, Beaker, BookOpen, Clock, Users, Award, Target, ArrowRight } from "lucide-react"

export default function ChemistryProgramPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Chemistry <span className="text-primary">Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Elite training program aligned with the International Chemistry Olympiad (IChO) standards, integrating theoretical mastery and practical laboratory work.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview & Cards */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Program Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Chemistry Program builds strong foundations in chemical theory, reaction mechanisms, and laboratory experimentation.
                  Students solve IChO-level problems, conduct advanced experiments, and study analytical and synthetic chemistry techniques.
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
                        <p className="text-muted-foreground">Develop deep understanding of chemical principles</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Master reaction mechanisms and quantitative analysis</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Apply thermodynamics, kinetics, and equilibrium in problem solving</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Gain laboratory skills aligned with IChO practical requirements</p>
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
                        <p className="text-muted-foreground">Strong background in general chemistry</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Ability to understand mathematical descriptions of chemical processes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Familiarity with laboratory safety</p>
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
                        <div className="text-sm text-muted-foreground">8 months</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Participants</div>
                        <div className="text-sm text-muted-foreground">35+ active students</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Level</div>
                        <div className="text-sm text-muted-foreground">Advanced</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Achievements</div>
                        <div className="text-sm text-muted-foreground">10+ IChO Medals</div>
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
                      Open to students with outstanding chemistry talent and laboratory skills.
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
                A structured roadmap covering all essential domains in chemistry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Physical Chemistry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Chemical Thermodynamics</Badge>
                  <Badge variant="outline" className="text-xs">Chemical Kinetics</Badge>
                  <Badge variant="outline" className="text-xs">Equilibrium & Le Chatelier</Badge>
                  <Badge variant="outline" className="text-xs">Electrochemistry</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Organic Chemistry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Structure & Bonding</Badge>
                  <Badge variant="outline" className="text-xs">Reaction Mechanisms</Badge>
                  <Badge variant="outline" className="text-xs">Stereochemistry</Badge>
                  <Badge variant="outline" className="text-xs">Spectroscopy (IR, NMR basics)</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Inorganic Chemistry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Periodicity</Badge>
                  <Badge variant="outline" className="text-xs">Coordination Compounds</Badge>
                  <Badge variant="outline" className="text-xs">Transition Metals</Badge>
                  <Badge variant="outline" className="text-xs">Main Group Chemistry</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Analytical Chemistry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Titration</Badge>
                  <Badge variant="outline" className="text-xs">Quantitative Analysis</Badge>
                  <Badge variant="outline" className="text-xs">Instrumental Methods</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Laboratory Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Synthesis</Badge>
                  <Badge variant="outline" className="text-xs">Stoichiometry</Badge>
                  <Badge variant="outline" className="text-xs">Error Analysis</Badge>
                  <Badge variant="outline" className="text-xs">Safety Protocols</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
