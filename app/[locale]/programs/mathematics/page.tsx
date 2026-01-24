"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, Users, Award, BookOpen, Target, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function MathematicsPage() {
  const t = useTranslations('programDetails')
  const tm = useTranslations('programDetails.mathematics')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const symbols = ['∑', '∫', 'π', '√', '∞', 'α', 'β', 'θ', 'x²', '∂', '∇', 'Δ']
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      symbol: string
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: 20 + Math.random() * 30,
        opacity: 0.3 + Math.random() * 0.4
      })
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#666'
        ctx.font = `${particle.size}px serif`
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(102, 51, 153, 0.05), rgba(59, 130, 246, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/70 to-blue-50/60 dark:from-purple-950/30 dark:via-background/70 dark:to-blue-950/30 z-[1]" />
      <main className="relative z-10">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Calculator className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {tm('title')} <span className="text-primary">{tm('program')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {tm('description')}
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
                  {tm('overview')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {tm('overviewExtra')}
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
                          <p className="text-muted-foreground">{tm(`objectives.${i}`)}</p>
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
                          <p className="text-muted-foreground">{tm(`prereqs.${i}`)}</p>
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
                        <div className="text-sm text-muted-foreground">{tm('duration')} {t('months')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('participants')}</div>
                        <div className="text-sm text-muted-foreground">{tm('students')} {t('activeStudents')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('achievements')}</div>
                        <div className="text-sm text-muted-foreground">{tm('medals')}</div>
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
                      {tm('applicationNote')}
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
                {tm('curriculumDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tm('algebra')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tm('topics.polynomials')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.functionalEq')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.inequalities')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.complex')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.transformations')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tm('geometry')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tm('topics.euclidean')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.coordinate')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.transformational')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.circleTriangle')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.constructions')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tm('numberTheory')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tm('topics.divisibility')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.modular')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.primes')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.diophantine')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.arithmetic')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tm('combinatorics')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tm('topics.counting')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.graphTheory')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.probability')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.recurrence')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.generating')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tm('analysis')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tm('topics.sequences')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.limits')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.analysisIneq')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.optimization')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tm('problemSolving')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tm('topics.proofTech')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.strategy')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.simulation')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.timeManagement')}</Badge>
                  <Badge variant="outline" className="text-xs">{tm('topics.errorAnalysis')}</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
