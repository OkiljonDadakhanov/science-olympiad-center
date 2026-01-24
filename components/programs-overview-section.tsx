"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Atom, Microscope, Code, Zap, ArrowRight, Users, Award } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function ProgramsOverviewSection() {
  const t = useTranslations('programs')
  
  const programs = [
    {
      id: "mathematics",
      title: t('mathematics.title'),
      icon: Calculator,
      description: t('mathematics.description'),
      students: "50+",
      achievements: "15 International Medals",
      href: "/programs/mathematics",
    },
    {
      id: "physics",
      title: t('physics.title'),
      icon: Zap,
      description: t('physics.description'),
      students: "45+",
      achievements: "12 International Medals",
      href: "/programs/physics",
    },
    {
      id: "chemistry",
      title: t('chemistry.title'),
      icon: Atom,
      description: t('chemistry.description'),
      students: "40+",
      achievements: "10 International Medals",
      href: "/programs/chemistry",
    },
    {
      id: "biology",
      title: t('biology.title'),
      icon: Microscope,
      description: t('biology.description'),
      students: "35+",
      achievements: "8 International Medals",
      href: "/programs/biology",
    },
    {
      id: "computer-science",
      title: t('computerScience.title'),
      icon: Code,
      description: t('computerScience.description'),
      students: "60+",
      achievements: "18 International Medals",
      href: "/programs/computer-science",
    },
  ]
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            {t('title').replace(t('titleHighlight'), '').trim()} <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.slice(0, 3).map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center gap-4">
                    <Badge variant="outline" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {program.students}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-primary border-primary/20">
                      <Award className="h-3 w-3 mr-1" />
                      {program.achievements}
                    </Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={program.href}>
                      {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.slice(3).map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <Badge variant="outline" className="text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        {program.students}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-primary border-primary/20">
                        <Award className="h-3 w-3 mr-1" />
                        {program.achievements}
                      </Badge>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={program.href}>
                        {t('learnMore')} <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/programs">
              {t('viewAllPrograms')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
