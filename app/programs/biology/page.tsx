"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Target, Clock, ArrowRight, Microscope, DNA, Leaf, Cell, Virus } from "lucide-react"
import { useEffect, useRef } from "react"

export default function BiologyProgramPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const cells: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    for (let i = 0; i < 20; i++) {
      cells.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 30 + Math.random() * 40,
        opacity: 0.2 + Math.random() * 0.3
      })
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      cells.forEach((cell) => {
        ctx.save()
        ctx.globalAlpha = cell.opacity
        ctx.strokeStyle = '#00aa00'
        ctx.fillStyle = '#00aa00'
        ctx.lineWidth = 2

        // Draw cell membrane
        ctx.beginPath()
        ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Draw nucleus
        ctx.beginPath()
        ctx.arc(cell.x, cell.y, cell.radius * 0.3, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        cell.x += cell.vx
        cell.y += cell.vy

        if (cell.x < cell.radius || cell.x > canvas.width - cell.radius) cell.vx *= -1
        if (cell.y < cell.radius || cell.y > canvas.height - cell.radius) cell.vy *= -1
      })

      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Interactive Biology Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(0, 170, 0, 0.05), rgba(16, 185, 129, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white/70 to-emerald-50/60 z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative ">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Microscope className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Biology <span className="text-primary">Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Comprehensive biological sciences training fully aligned with the International Biology Olympiad (IBO) standards.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview & Cards */}
        <section className="py-20 relative">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Program Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This program cultivates advanced biological knowledge through conceptual lectures, laboratory modules, and olympiad-style problem solving.
                  Students explore molecular, cellular, ecological, and evolutionary biology with emphasis on scientific reasoning.
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
                        <p className="text-muted-foreground">Master core concepts of modern biology</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Analyze biological systems at molecular and organismal levels</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Develop experimental design and data interpretation skills</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Apply scientific method to olympiad-level problems</p>
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
                        <p className="text-muted-foreground">General biology knowledge</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Strong interest in molecular sciences</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Readiness for intensive lab and theoretical training</p>
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
                        <div className="text-sm text-muted-foreground">9 months</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Participants</div>
                        <div className="text-sm text-muted-foreground">30+ active students</div>
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
                        <div className="text-sm text-muted-foreground">IBO & regional olympiad finalists</div>
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
                      Open to students with strong biological knowledge and laboratory skills.
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
        <section className="py-20 bg-muted/20 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Curriculum Topics
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                A structured roadmap covering all essential domains in biology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Molecular Biology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">DNA/RNA Structure</Badge>
                  <Badge variant="outline" className="text-xs">Gene Expression</Badge>
                  <Badge variant="outline" className="text-xs">Recombinant DNA Technology</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Cell Biology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Cellular Organelles</Badge>
                  <Badge variant="outline" className="text-xs">Membrane Transport</Badge>
                  <Badge variant="outline" className="text-xs">Cell Division</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Genetics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Mendelian Genetics</Badge>
                  <Badge variant="outline" className="text-xs">Population Genetics</Badge>
                  <Badge variant="outline" className="text-xs">Genetic Mutations</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Ecology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Ecosystems</Badge>
                  <Badge variant="outline" className="text-xs">Population Dynamics</Badge>
                  <Badge variant="outline" className="text-xs">Energy Flow</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Physiology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Plant Physiology</Badge>
                  <Badge variant="outline" className="text-xs">Human Physiology</Badge>
                  <Badge variant="outline" className="text-xs">Homeostasis</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Laboratory Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Microscopy</Badge>
                  <Badge variant="outline" className="text-xs">Gel Electrophoresis</Badge>
                  <Badge variant="outline" className="text-xs">Data Analysis</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
