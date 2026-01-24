"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Target, Clock, ArrowRight, Code } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function ComputerScienceProgramPage() {
  const t = useTranslations('programDetails')
  const tc = useTranslations('programDetails.computerScience')
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(0, 102, 204, 0.05), rgba(6, 182, 212, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/70 to-cyan-50/60 dark:from-blue-950/30 dark:via-background/70 dark:to-cyan-950/30 z-[1]" />
      <main className="relative z-10">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Code className="h-10 w-10 text-primary" />
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
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{tc(`objectives.${i}`)}</p>
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
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{tc(`prereqs.${i}`)}</p>
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
                        <div className="text-sm text-muted-foreground">{tc('duration')} {t('months')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('participants')}</div>
                        <div className="text-sm text-muted-foreground">{tc('students')} {t('activeStudents')}</div>
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
                {tc('curriculumDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tc('fundamentals')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.cpp')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.io')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.debugging')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tc('dataStructures')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.arrays')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.trees')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.segmentTrees')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.hashing')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tc('algorithms')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.dp')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.greedy')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.graphAlgo')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.divideConquer')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tc('advanced')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.strings')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.compGeometry')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.numberTheory')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tc('contestPrep')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tc('topics.codeforces')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.ioiArchive')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.complexity')}</Badge>
                  <Badge variant="outline" className="text-xs">{tc('topics.strategy')}</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
