"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Atom, BookOpen, Clock, Users, Award, Target, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function PhysicsProgramPage() {
  const t = useTranslations('programDetails')
  const tp = useTranslations('programDetails.physics')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const formulas = ['F=ma', 'E=mc²', 'λ=h/p', 'V=IR', 'E=hf', 'p=mv']
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      formula: string
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        formula: formulas[Math.floor(Math.random() * formulas.length)],
        size: 12 + Math.random() * 8,
        opacity: 0.3 + Math.random() * 0.4
      })
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#9900ff'
        ctx.font = `${particle.size}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(particle.formula, particle.x, particle.y)
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(153, 0, 255, 0.05), rgba(99, 102, 241, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/70 to-indigo-50/60 dark:from-purple-950/30 dark:via-background/70 dark:to-indigo-950/30 z-[1]" />
      <main className="relative z-10">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Atom className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {tp('title')} <span className="text-primary">{tp('program')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {tp('description')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">{t('programOverview')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {tp('overview')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {tp('overviewExtra')}
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
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{tp(`objectives.${i}`)}</p>
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
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{tp(`prereqs.${i}`)}</p>
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
                        <div className="text-sm text-muted-foreground">{tp('duration')} {t('months')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('participants')}</div>
                        <div className="text-sm text-muted-foreground">{tp('students')} {t('activeStudents')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('achievements')}</div>
                        <div className="text-sm text-muted-foreground">{tp('medals')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('level')}</div>
                        <div className="text-sm text-muted-foreground">{t('advanced')}</div>
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
                      {tp('applicationNote')}
                    </p>
                    <Button className="w-full" asChild>
                      <Link href="/apply">
                        {t('applyNow')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('curriculumTopics')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {tp('curriculumDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tp('mechanics')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tp('topics.kinematics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.newton')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.energy')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.rotation')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.oscillations')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tp('thermodynamics')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tp('topics.heatWork')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.entropy')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.thermoCycles')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.kineticTheory')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tp('electromagnetism')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tp('topics.electrostatics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.circuits')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.magnetism')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.maxwell')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tp('optics')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tp('topics.geometrical')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.waveOptics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.interference')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tp('modernPhysics')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tp('topics.quantum')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.atomic')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.nuclear')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tp('problemSolving')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tp('topics.iphoSolutions')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.derivations')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.experimental')}</Badge>
                  <Badge variant="outline" className="text-xs">{tp('topics.errorPropagation')}</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
