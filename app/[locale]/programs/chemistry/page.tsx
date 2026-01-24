"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Award, Target, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function ChemistryProgramPage() {
  const t = useTranslations('programDetails')
  const tc = useTranslations('programDetails.chemistry')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      symbol: string
    }> = []

    const symbols = ['C', 'O', 'H', 'N', 'Cl', 'Na']
    const colors = ['#007bff', '#00aaff', '#00ffaa', '#0077ff', '#00ccff', '#0099ff']

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 15 + Math.random() * 10,
        symbol: symbols[Math.floor(Math.random() * symbols.length)]
      })
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(0, 123, 255, 0.2)'
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((particle, index) => {
        ctx.fillStyle = colors[index % colors.length] + '40'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = colors[index % colors.length]
        ctx.font = `${particle.radius * 0.6}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(particle.symbol, particle.x, particle.y)

        particle.x += particle.vx
        particle.y += particle.vy

        if (!canvas) return
        if (particle.x < particle.radius || particle.x > canvas.width - particle.radius) {
          particle.vx *= -1
        }
        if (particle.y < particle.radius || particle.y > canvas.height - particle.radius) {
          particle.vy *= -1
        }
      })

      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen relative">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(0, 123, 255, 0.05), rgba(0, 255, 170, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/40 to-green-50/40 dark:from-blue-950/40 dark:via-background/40 dark:to-green-950/40 z-[1]" />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {tc('title')} <span className="text-primary">{tc('program')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {tc('description')}
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview & Cards */}
        <section className="py-20 relative">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">{t('programOverview')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {tc('overview')}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        {t('learningObjectives')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {['1', '2', '3', '4'].map((num) => (
                        <div key={num} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{tc(`objectives.${num}`)}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-secondary" />
                        {t('prerequisites')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {['1', '2', '3'].map((num) => (
                        <div key={num} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{tc(`prereqs.${num}`)}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>{t('programDetailsTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('duration')}</div>
                        <div className="text-sm text-muted-foreground">8 {t('months')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('participants')}</div>
                        <div className="text-sm text-muted-foreground">35+ {t('activeStudents')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('level')}</div>
                        <div className="text-sm text-muted-foreground">{t('advanced')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('achievements')}</div>
                        <div className="text-sm text-muted-foreground">{tc('medals')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardHeader>
                    <CardTitle>{t('application')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {tc('applicationNote')}
                    </p>
                    <Button className="w-full" asChild>
                      <Link href="/apply/online">
                        {t('applyNow')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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
                {t('curriculumTopics')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {tc('curriculumDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tc('physicalChemistry')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.thermodynamics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.kinetics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.equilibrium')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.electrochemistry')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tc('organicChemistry')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.structure')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.mechanisms')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.stereochemistry')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.spectroscopy')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tc('inorganicChemistry')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.periodicity')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.coordination')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.transition')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.mainGroup')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tc('analyticalChemistry')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.titration')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.quantitative')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.instrumental')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tc('laboratorySkills')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.synthesis')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.stoichiometry')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.errorAnalysis')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.safety')}</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
