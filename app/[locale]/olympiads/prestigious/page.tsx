"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Trophy, Clock, FileText, Star, Award, CheckCircle, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { FadingBackground } from "@/components/fading-bg"
import { useTranslations } from "next-intl"

export default function PrestigiousOlympiadsPage() {
  const t = useTranslations('olympiads.prestigious')

  const prestigiousOlympiads = [
    {
      name: t('nationalOlympiads.math.name'),
      description: t('nationalOlympiads.math.description'),
      eligibility: t('nationalOlympiads.math.eligibility'),
      participants: t('nationalOlympiads.math.participants'),
      duration: t('nationalOlympiads.math.duration'),
      format: t('nationalOlympiads.math.format'),
      prizes: t('nationalOlympiads.math.prizes'),
      registrationDeadline: t('nationalOlympiads.math.registrationDeadline'),
      competitionDate: t('nationalOlympiads.math.competitionDate'),
      location: t('nationalOlympiads.math.location'),
      requirements: [
        t('nationalOlympiads.math.requirements.0'),
        t('nationalOlympiads.math.requirements.1'),
        t('nationalOlympiads.math.requirements.2'),
        t('nationalOlympiads.math.requirements.3'),
      ],
      preparation: [
        t('nationalOlympiads.math.preparation.0'),
        t('nationalOlympiads.math.preparation.1'),
        t('nationalOlympiads.math.preparation.2'),
        t('nationalOlympiads.math.preparation.3'),
      ],
      lastYearResults: {
        gold: 3,
        silver: 5,
        bronze: 8,
        imoQualifiers: 6,
      },
    },
    {
      name: t('nationalOlympiads.physics.name'),
      description: t('nationalOlympiads.physics.description'),
      eligibility: t('nationalOlympiads.physics.eligibility'),
      participants: t('nationalOlympiads.physics.participants'),
      duration: t('nationalOlympiads.physics.duration'),
      format: t('nationalOlympiads.physics.format'),
      prizes: t('nationalOlympiads.physics.prizes'),
      registrationDeadline: t('nationalOlympiads.physics.registrationDeadline'),
      competitionDate: t('nationalOlympiads.physics.competitionDate'),
      location: t('nationalOlympiads.physics.location'),
      requirements: [
        t('nationalOlympiads.physics.requirements.0'),
        t('nationalOlympiads.physics.requirements.1'),
        t('nationalOlympiads.physics.requirements.2'),
        t('nationalOlympiads.physics.requirements.3'),
      ],
      preparation: [
        t('nationalOlympiads.physics.preparation.0'),
        t('nationalOlympiads.physics.preparation.1'),
        t('nationalOlympiads.physics.preparation.2'),
        t('nationalOlympiads.physics.preparation.3'),
      ],
      lastYearResults: {
        gold: 2,
        silver: 6,
        bronze: 9,
        iphoQualifiers: 5,
      },
    },
    {
      name: t('nationalOlympiads.chemistry.name'),
      description: t('nationalOlympiads.chemistry.description'),
      eligibility: t('nationalOlympiads.chemistry.eligibility'),
      participants: t('nationalOlympiads.chemistry.participants'),
      duration: t('nationalOlympiads.chemistry.duration'),
      format: t('nationalOlympiads.chemistry.format'),
      prizes: t('nationalOlympiads.chemistry.prizes'),
      registrationDeadline: t('nationalOlympiads.chemistry.registrationDeadline'),
      competitionDate: t('nationalOlympiads.chemistry.competitionDate'),
      location: t('nationalOlympiads.chemistry.location'),
      requirements: [
        t('nationalOlympiads.chemistry.requirements.0'),
        t('nationalOlympiads.chemistry.requirements.1'),
        t('nationalOlympiads.chemistry.requirements.2'),
        t('nationalOlympiads.chemistry.requirements.3'),
      ],
      preparation: [
        t('nationalOlympiads.chemistry.preparation.0'),
        t('nationalOlympiads.chemistry.preparation.1'),
        t('nationalOlympiads.chemistry.preparation.2'),
        t('nationalOlympiads.chemistry.preparation.3'),
      ],
      lastYearResults: {
        gold: 4,
        silver: 4,
        bronze: 7,
        ichoQualifiers: 4,
      },
    },
  ]

  const prestigiousInternationalOlympiads = [
    {
      name: t('internationalOlympiads.imo.name'),
      location: t('internationalOlympiads.imo.location'),
      date: t('internationalOlympiads.imo.date'),
      teamSize: t('internationalOlympiads.imo.teamSize'),
      format: t('internationalOlympiads.imo.format'),
      duration: t('internationalOlympiads.imo.duration'),
      eligibility: t('internationalOlympiads.imo.eligibility'),
      medals: {
        gold: 0,
        silver: 4,
        bronze: 1,
      },
    },
    {
      name: t('internationalOlympiads.icho.name'),
      location: t('internationalOlympiads.icho.location'),
      date: t('internationalOlympiads.icho.date'),
      teamSize: t('internationalOlympiads.icho.teamSize'),
      format: t('internationalOlympiads.icho.format'),
      duration: t('internationalOlympiads.icho.duration'),
      eligibility: t('internationalOlympiads.icho.eligibility'),
      medals: {
        gold: 2,
        silver: 2,
        bronze: 0,
      },
    },
    {
      name: t('internationalOlympiads.ipho.name'),
      location: t('internationalOlympiads.ipho.location'),
      date: t('internationalOlympiads.ipho.date'),
      teamSize: t('internationalOlympiads.ipho.teamSize'),
      format: t('internationalOlympiads.ipho.format'),
      duration: t('internationalOlympiads.ipho.duration'),
      eligibility: t('internationalOlympiads.ipho.eligibility'),
      medals: {
        gold: 0,
        silver: 0,
        bronze: 2,
      },
    },
    {
      name: t('internationalOlympiads.ioi.name'),
      location: t('internationalOlympiads.ioi.location'),
      date: t('internationalOlympiads.ioi.date'),
      teamSize: t('internationalOlympiads.ioi.teamSize'),
      format: t('internationalOlympiads.ioi.format'),
      duration: t('internationalOlympiads.ioi.duration'),
      eligibility: t('internationalOlympiads.ioi.eligibility'),
      medals: {
        gold: 0,
        silver: 1,
        bronze: 1,
      },
    },
  ]

  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/imo-slider.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-sm relative">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full mb-6">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span className="text-yellow-700 font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('hero.titleStart')} <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/online">{t('hero.applyNow')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#competitions">{t('hero.viewCompetitions')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">{t('stats.competitions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">310</div>
                <div className="text-muted-foreground">{t('stats.participants')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">{t('stats.qualifiers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">{t('stats.admissionRate')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Competitions */}
        <section id="competitions" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('competitions.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('competitions.description')}
              </p>
            </div>

            <div className="space-y-12">
              {prestigiousOlympiads.map((olympiad, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 shadow-xl">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{olympiad.name}</h3>
                          <p className="text-muted-foreground leading-relaxed">{olympiad.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Trophy className="h-3 w-3 mr-1" />
                          {t('labels.elite')}
                        </Badge>
                      </div>

                      {/* Competition Details */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.participants')}</span>
                            <span>{olympiad.participants}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.duration')}</span>
                            <span>{olympiad.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.format')}</span>
                            <span>{olympiad.format}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.registration')}</span>
                            <span>{olympiad.registrationDeadline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.competition')}</span>
                            <span>{olympiad.competitionDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.location')}</span>
                            <span>{olympiad.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Requirements & Preparation */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {t('labels.requirements')}
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-blue-500" />
                            {t('labels.preparationFocus')}
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.preparation.map((prep, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{prep}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Results & Actions */}
                    <div className="bg-muted/30 p-8 flex flex-col">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">{t('results.title')}</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-yellow-600">{t('results.gold')}</span>
                            <span className="font-medium">{olympiad.lastYearResults.gold}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">{t('results.silver')}</span>
                            <span className="font-medium">{olympiad.lastYearResults.silver}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-orange-600">{t('results.bronze')}</span>
                            <span className="font-medium">{olympiad.lastYearResults.bronze}</span>
                          </div>
                          {(olympiad.lastYearResults.imoQualifiers ||
                            olympiad.lastYearResults.iphoQualifiers ||
                            olympiad.lastYearResults.ichoQualifiers) && (
                            <div className="border-t pt-2 mt-2">
                              <div className="flex justify-between text-sm font-medium text-primary">
                                <span>{t('results.internationalTeam')}</span>
                                <span>
                                  {olympiad.lastYearResults.imoQualifiers ||
                                    olympiad.lastYearResults.iphoQualifiers ||
                                    olympiad.lastYearResults.ichoQualifiers}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto space-y-3">
                        <Button className="w-full" asChild>
                          <Link href="/apply/online">
                            {t('actions.registerNow')} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent" asChild>
                          <Link href="/apply/criteria">{t('actions.viewRequirements')}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prestigious International Olympiads */}
        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('international.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('international.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {prestigiousInternationalOlympiads.map((olympiad, index) => (
                <Card key={index} className="border-2 shadow-lg bg-white/95">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{olympiad.name}</h3>
                        <p className="text-muted-foreground">
                          {t('international.cardDescription')}
                        </p>
                      </div>
                      <Badge variant="secondary">
                        <Trophy className="h-3 w-3 mr-1" />
                        {t('labels.international')}
                      </Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t('labels.location')}</span>
                          <span className="text-muted-foreground">{olympiad.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t('labels.date')}</span>
                          <span className="text-muted-foreground">{olympiad.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t('labels.teamSize')}</span>
                          <span className="text-muted-foreground">{olympiad.teamSize}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t('labels.format')}</span>
                          <span className="text-muted-foreground">{olympiad.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t('labels.duration')}</span>
                          <span className="text-muted-foreground">{olympiad.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t('labels.eligibility')}</span>
                          <span className="text-muted-foreground">{olympiad.eligibility}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        {t('results.medalResults')}
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-yellow-600">{t('results.gold')}</span>
                          <span className="font-medium">{olympiad.medals.gold}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t('results.silver')}</span>
                          <span className="font-medium">{olympiad.medals.silver}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-orange-600">{t('results.bronze')}</span>
                          <span className="font-medium">{olympiad.medals.bronze}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('applicationProcess.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('applicationProcess.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('applicationProcess.steps.step1.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('applicationProcess.steps.step1.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('applicationProcess.steps.step2.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('applicationProcess.steps.step2.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('applicationProcess.steps.step3.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('applicationProcess.steps.step3.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('applicationProcess.steps.step4.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('applicationProcess.steps.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('successStories.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('successStories.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold">{t('successStories.stories.akmal.name')}</h3>
                    <p className="text-sm text-muted-foreground">{t('successStories.stories.akmal.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {t('successStories.stories.akmal.quote')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">{t('successStories.stories.nilufar.name')}</h3>
                    <p className="text-sm text-muted-foreground">{t('successStories.stories.nilufar.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {t('successStories.stories.nilufar.quote')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold">{t('successStories.stories.sardor.name')}</h3>
                    <p className="text-sm text-muted-foreground">{t('successStories.stories.sardor.title')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {t('successStories.stories.sardor.quote')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/online">{t('cta.startApplication')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t('cta.getGuidance')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
