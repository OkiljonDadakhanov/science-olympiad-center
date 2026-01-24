"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Target, Clock, ArrowRight, Microscope } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function BiologyProgramPage() {
  const t = useTranslations('programDetails')
  const tb = useTranslations('programDetails.biology')
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

        ctx.beginPath()
        ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2)
        ctx.stroke()

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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgba(0, 170, 0, 0.05), rgba(16, 185, 129, 0.05))' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white/70 to-emerald-50/60 dark:from-green-950/30 dark:via-background/70 dark:to-emerald-950/30 z-[1]" />
      <main className="relative z-10">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Microscope className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {tb('title')} <span className="text-primary">{tb('program')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {tb('description')}
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
                  {tb('overview')}
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
                          <p className="text-muted-foreground">{tb(`objectives.${i}`)}</p>
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
                          <p className="text-muted-foreground">{tb(`prereqs.${i}`)}</p>
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
                        <div className="text-sm text-muted-foreground">{tb('duration')} {t('months')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t('participants')}</div>
                        <div className="text-sm text-muted-foreground">{tb('students')} {t('activeStudents')}</div>
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
                        <div className="text-sm text-muted-foreground">{tb('medals')}</div>
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
                      {tb('applicationNote')}
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
                {tb('curriculumDescription')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tb('molecularBiology')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tb('topics.dnaRna')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.geneExpression')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.recombinant')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tb('cellBiology')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tb('topics.organelles')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.membrane')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.cellDivision')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tb('genetics')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tb('topics.mendelian')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.populationGenetics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.mutations')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tb('ecology')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tb('topics.ecosystems')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.populationDynamics')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.energyFlow')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>{tb('physiology')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tb('topics.plantPhysiology')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.humanPhysiology')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.homeostasis')}</Badge>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle>{tb('laboratorySkills')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="text-xs">{tb('topics.microscopy')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.gelElectrophoresis')}</Badge>
                  <Badge variant="outline" className="text-xs">{tb('topics.dataAnalysis')}</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
