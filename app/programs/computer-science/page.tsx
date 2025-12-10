"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Target, Clock, ArrowRight, Code, Cpu, Network, Layers } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ComputerScienceProgramPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const symbols = ['{ }', '[ ]', '( )', '</>', '=>', '==', '++', '--', '&&', '||', '!', '?']
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      symbol: string
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: 10 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4
      })
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#0066cc'
        ctx.font = `${particle.size}px monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(particle.symbol, particle.x, particle.y)
        ctx.restore()

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
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
      {/* Interactive CS Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(0, 102, 204, 0.05), rgba(6, 182, 212, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/70 to-cyan-50/60 z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative ">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Computer Science <span className="text-primary">Program</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Advanced program for preparing students for the International Olympiad in Informatics (IOI) and competitive programming contests.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview & Cards */}
        <section className="py-20 relative ">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Program Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Informatics Program trains students in algorithmic thinking, programming efficiency, and data structure mastery.
                  The curriculum emphasizes solving complex computational problems under timed conditions.
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
                        <p className="text-muted-foreground">Develop proficiency in competitive programming</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Understand advanced algorithms and data structures</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Strengthen logical and analytical reasoning</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Master IOI-style problem solving and code optimization</p>
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
                        <p className="text-muted-foreground">Proficiency in programming (C++ preferred)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Strong background in mathematics</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">Ability to work on challenging logical tasks</p>
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
                        <div className="text-sm text-muted-foreground">6 months</div>
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
                        <div className="text-sm text-muted-foreground">IOI and regional contest medals</div>
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
                      Open to students with strong programming and algorithmic skills.
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
                Structured roadmap covering essential computer science and competitive programming domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Programming Fundamentals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">C++ / Python</Badge>
                  <Badge variant="outline" className="text-xs">Input & Output Optimization</Badge>
                  <Badge variant="outline" className="text-xs">Debugging Techniques</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Data Structures</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Arrays, Stacks, Queues</Badge>
                  <Badge variant="outline" className="text-xs">Trees & Graphs</Badge>
                  <Badge variant="outline" className="text-xs">Segment Trees, Fenwick Trees</Badge>
                  <Badge variant="outline" className="text-xs">Hashing</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Algorithms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Dynamic Programming</Badge>
                  <Badge variant="outline" className="text-xs">Greedy Algorithms</Badge>
                  <Badge variant="outline" className="text-xs">Graph Algorithms</Badge>
                  <Badge variant="outline" className="text-xs">Divide & Conquer</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>Advanced Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">String Algorithms</Badge>
                  <Badge variant="outline" className="text-xs">Computational Geometry</Badge>
                  <Badge variant="outline" className="text-xs">Number-Theoretic Algorithms</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Contest Preparation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">Codeforces-Style Rounds</Badge>
                  <Badge variant="outline" className="text-xs">IOI Problem Archive</Badge>
                  <Badge variant="outline" className="text-xs">Time Complexity Analysis</Badge>
                  <Badge variant="outline" className="text-xs">Strategy & Optimization</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
