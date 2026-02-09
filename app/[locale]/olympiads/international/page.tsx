"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Trophy, Users, MapPin, Calendar, Star, Award, CheckCircle, ArrowRight, Plane, Clock, FileText } from "lucide-react"
import { Link } from "@/i18n/routing"
import { FadingBackground } from "@/components/fading-bg"
import { useTranslations } from "next-intl"

export default function InternationalOlympiadsPage() {
  const t = useTranslations('olympiads.international')

  const internationalOlympiads = [
    {
      key: "imo",
      name: t('competitions.imo.name'),
      description: t('competitions.imo.description'),
      country: t('competitions.imo.country'),
      city: t('competitions.imo.city'),
      date: t('competitions.imo.date'),
      participants: t('competitions.imo.participants'),
      duration: t('competitions.imo.duration'),
      format: t('competitions.imo.format'),
      subjects: [
        t('competitions.imo.subjects.0'),
        t('competitions.imo.subjects.1'),
        t('competitions.imo.subjects.2'),
        t('competitions.imo.subjects.3'),
      ],
      eligibility: t('competitions.imo.eligibility'),
      selectionProcess: t('competitions.imo.selectionProcess'),
      teamSize: 6,
      flag: "\u{1F1E6}\u{1F1FA}",
      website: "https://imo-official.org",
      lastResults: {
        year: 2025,
        gold: 0,
        silver: 4,
        bronze: 1,
        rank: 0,
        totalCountries: 0,
      },
      preparation: [
        t('competitions.imo.preparation.0'),
        t('competitions.imo.preparation.1'),
        t('competitions.imo.preparation.2'),
        t('competitions.imo.preparation.3'),
      ],
      benefits: [
        t('competitions.imo.benefits.0'),
        t('competitions.imo.benefits.1'),
        t('competitions.imo.benefits.2'),
        t('competitions.imo.benefits.3'),
      ],
    },
    {
      key: "icho",
      name: t('competitions.icho.name'),
      description: t('competitions.icho.description'),
      country: t('competitions.icho.country'),
      city: t('competitions.icho.city'),
      date: t('competitions.icho.date'),
      participants: t('competitions.icho.participants'),
      duration: t('competitions.icho.duration'),
      format: t('competitions.icho.format'),
      subjects: [
        t('competitions.icho.subjects.0'),
        t('competitions.icho.subjects.1'),
        t('competitions.icho.subjects.2'),
        t('competitions.icho.subjects.3'),
      ],
      eligibility: t('competitions.icho.eligibility'),
      selectionProcess: t('competitions.icho.selectionProcess'),
      teamSize: 4,
      flag: "\u{1F1E6}\u{1F1EA}",
      website: "https://icho-official.org",
      lastResults: {
        year: 2025,
        gold: 2,
        silver: 2,
        bronze: 0,
        rank: 0,
        totalCountries: 0,
      },
      preparation: [
        t('competitions.icho.preparation.0'),
        t('competitions.icho.preparation.1'),
        t('competitions.icho.preparation.2'),
        t('competitions.icho.preparation.3'),
      ],
      benefits: [
        t('competitions.icho.benefits.0'),
        t('competitions.icho.benefits.1'),
        t('competitions.icho.benefits.2'),
        t('competitions.icho.benefits.3'),
      ],
    },
    {
      key: "ipho",
      name: t('competitions.ipho.name'),
      description: t('competitions.ipho.description'),
      country: t('competitions.ipho.country'),
      city: t('competitions.ipho.city'),
      date: t('competitions.ipho.date'),
      participants: t('competitions.ipho.participants'),
      duration: t('competitions.ipho.duration'),
      format: t('competitions.ipho.format'),
      subjects: [
        t('competitions.ipho.subjects.0'),
        t('competitions.ipho.subjects.1'),
        t('competitions.ipho.subjects.2'),
        t('competitions.ipho.subjects.3'),
      ],
      eligibility: t('competitions.ipho.eligibility'),
      selectionProcess: t('competitions.ipho.selectionProcess'),
      teamSize: 4,
      flag: "\u{1F1EB}\u{1F1F7}",
      website: "https://ipho-official.org",
      lastResults: {
        year: 2025,
        gold: 0,
        silver: 0,
        bronze: 2,
        rank: 0,
        totalCountries: 0,
      },
      preparation: [
        t('competitions.ipho.preparation.0'),
        t('competitions.ipho.preparation.1'),
        t('competitions.ipho.preparation.2'),
        t('competitions.ipho.preparation.3'),
      ],
      benefits: [
        t('competitions.ipho.benefits.0'),
        t('competitions.ipho.benefits.1'),
        t('competitions.ipho.benefits.2'),
        t('competitions.ipho.benefits.3'),
      ],
    },
    {
      key: "ioi",
      name: t('competitions.ioi.name'),
      description: t('competitions.ioi.description'),
      country: t('competitions.ioi.country'),
      city: t('competitions.ioi.city'),
      date: t('competitions.ioi.date'),
      participants: t('competitions.ioi.participants'),
      duration: t('competitions.ioi.duration'),
      format: t('competitions.ioi.format'),
      subjects: [
        t('competitions.ioi.subjects.0'),
        t('competitions.ioi.subjects.1'),
        t('competitions.ioi.subjects.2'),
        t('competitions.ioi.subjects.3'),
      ],
      eligibility: t('competitions.ioi.eligibility'),
      selectionProcess: t('competitions.ioi.selectionProcess'),
      teamSize: 4,
      flag: "\u{1F1E7}\u{1F1F4}",
      website: "https://ioi-official.org",
      lastResults: {
        year: 2025,
        gold: 0,
        silver: 1,
        bronze: 1,
        rank: 0,
        totalCountries: 0,
      },
      preparation: [
        t('competitions.ioi.preparation.0'),
        t('competitions.ioi.preparation.1'),
        t('competitions.ioi.preparation.2'),
        t('competitions.ioi.preparation.3'),
      ],
      benefits: [
        t('competitions.ioi.benefits.0'),
        t('competitions.ioi.benefits.1'),
        t('competitions.ioi.benefits.2'),
        t('competitions.ioi.benefits.3'),
      ],
    },
  ]

  const otherInternationalOlympiads = [
    {
      key: "elo",
      name: t('otherCompetitions.elo.name'),
      description: t('otherCompetitions.elo.description'),
      location: t('otherCompetitions.elo.location'),
      date: t('otherCompetitions.elo.date'),
      teamSize: t('otherCompetitions.elo.teamSize'),
      duration: t('otherCompetitions.elo.duration'),
      format: t('otherCompetitions.elo.format'),
      eligibility: t('otherCompetitions.elo.eligibility'),
      medals: { gold: 0, silver: 7, bronze: 0 },
      category: t('otherCompetitions.elo.category'),
    },
    {
      key: "ieo",
      name: t('otherCompetitions.ieo.name'),
      description: t('otherCompetitions.ieo.description'),
      location: t('otherCompetitions.ieo.location'),
      date: t('otherCompetitions.ieo.date'),
      teamSize: t('otherCompetitions.ieo.teamSize'),
      duration: t('otherCompetitions.ieo.duration'),
      format: t('otherCompetitions.ieo.format'),
      eligibility: t('otherCompetitions.ieo.eligibility'),
      medals: { gold: 0, silver: 1, bronze: 1 },
      category: t('otherCompetitions.ieo.category'),
    },
    {
      key: "igeo",
      name: t('otherCompetitions.igeo.name'),
      description: t('otherCompetitions.igeo.description'),
      location: t('otherCompetitions.igeo.location'),
      date: t('otherCompetitions.igeo.date'),
      teamSize: t('otherCompetitions.igeo.teamSize'),
      duration: t('otherCompetitions.igeo.duration'),
      format: t('otherCompetitions.igeo.format'),
      eligibility: t('otherCompetitions.igeo.eligibility'),
      medals: { gold: 0, silver: 0, bronze: 2 },
      category: t('otherCompetitions.igeo.category'),
    },
  ]

  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/ipho-slider.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/10 backdrop-blur-sm relative">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('hero.titleStart')} <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/criteria">{t('hero.qualificationButton')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#competitions">{t('hero.viewCompetitionsButton')}</Link>
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
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">{t('stats.competitions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">{t('stats.teamMembers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">112</div>
                <div className="text-muted-foreground">{t('stats.countries')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">36</div>
                <div className="text-muted-foreground">{t('stats.medals')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Competitions */}
        <section id="competitions" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('mainCompetitions.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('mainCompetitions.subtitle')}
              </p>
            </div>

            <div className="space-y-12">
              {internationalOlympiads.map((olympiad, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 shadow-xl">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{olympiad.flag}</span>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{olympiad.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">{olympiad.description}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Globe className="h-3 w-3 mr-1" />
                          {t('labels.international')}
                        </Badge>
                      </div>

                      {/* Competition Details */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.location')}:</span>
                            <span>
                              {olympiad.city}, {olympiad.country}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.date')}:</span>
                            <span>{olympiad.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.teamSize')}:</span>
                            <span>{olympiad.teamSize} {t('labels.students')}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.format')}:</span>
                            <span>{olympiad.format}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.duration')}:</span>
                            <span>{olympiad.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{t('labels.eligibility')}:</span>
                            <span>{olympiad.eligibility}</span>
                          </div>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">{t('labels.competitionSubjects')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {olympiad.subjects.map((subject, i) => (
                            <Badge key={i} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Preparation & Benefits */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-blue-500" />
                            {t('labels.preparationProgram')}
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.preparation.map((prep, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">&bull;</span>
                                <span>{prep}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-green-500" />
                            {t('labels.benefits')}
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {olympiad.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">&bull;</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Results & Actions */}
                    <div className="bg-muted/30 p-8 flex flex-col">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4">{olympiad.lastResults.year} {t('labels.results')}</h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-yellow-600">{t('labels.goldMedal')}:</span>
                            <span className="font-medium">{olympiad.lastResults.gold}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">{t('labels.silverMedal')}:</span>
                            <span className="font-medium">{olympiad.lastResults.silver}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-orange-600">{t('labels.bronzeMedal')}:</span>
                            <span className="font-medium">{olympiad.lastResults.bronze}</span>
                          </div>
                        </div>
                        {(olympiad.lastResults.rank > 0 || olympiad.lastResults.totalCountries > 0) && (
                          <div className="text-center p-3 bg-primary/10 rounded-lg">
                            <div className="text-sm text-muted-foreground">{t('labels.globalRanking')}</div>
                            <div className="text-lg font-bold text-primary">
                              #{olympiad.lastResults.rank} / {olympiad.lastResults.totalCountries}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto space-y-3">
                        <Button className="w-full" asChild>
                          <Link href="/apply/criteria">
                            {t('labels.viewRequirements')} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent" asChild>
                          <Link href={olympiad.website} target="_blank">
                            {t('labels.officialWebsite')}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other International Olympiads */}
        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('otherSection.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('otherSection.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {otherInternationalOlympiads.map((olympiad, index) => (
                <Card key={index} className="border-2 shadow-lg bg-white/95">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold">{olympiad.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{olympiad.description}</p>
                      </div>
                      <Badge variant="secondary">{olympiad.category}</Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{t('labels.location')}:</span>
                        <span className="text-muted-foreground">{olympiad.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{t('labels.date')}:</span>
                        <span className="text-muted-foreground">{olympiad.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{t('labels.teamSize')}:</span>
                        <span className="text-muted-foreground">{olympiad.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{t('labels.duration')}:</span>
                        <span className="text-muted-foreground">{olympiad.duration}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">{t('labels.format')}:</span>{" "}
                          <span className="text-muted-foreground">{olympiad.format}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">{t('labels.eligibility')}:</span>{" "}
                          <span className="text-muted-foreground">{olympiad.eligibility}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        {t('otherSection.medalResults')}
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-yellow-600">{t('labels.goldMedal')}</span>
                          <span className="font-medium">{olympiad.medals.gold}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t('labels.silverMedal')}</span>
                          <span className="font-medium">{olympiad.medals.silver}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-orange-600">{t('labels.bronzeMedal')}</span>
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

        {/* Selection Process */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('selectionProcess.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('selectionProcess.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('selectionProcess.steps.nationalVictory.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('selectionProcess.steps.nationalVictory.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('selectionProcess.steps.trainingCamp.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('selectionProcess.steps.trainingCamp.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('selectionProcess.steps.selectionTests.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('selectionProcess.steps.selectionTests.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('selectionProcess.steps.teamFormation.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('selectionProcess.steps.teamFormation.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{t('selectionProcess.steps.internationalCompetition.title')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('selectionProcess.steps.internationalCompetition.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Performance */}
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('historicalPerformance.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('historicalPerformance.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t('historicalPerformance.medalStatistics')}</h3>
                <div className="space-y-4">
                  {[
                    { year: "2025", gold: 9, silver: 12, bronze: 15, total: 36, rank: t('historicalPerformance.years.0.rank') },
                    { year: "2025", gold: 7, silver: 14, bronze: 18, total: 39, rank: t('historicalPerformance.years.1.rank') },
                    { year: "2025", gold: 8, silver: 11, bronze: 16, total: 35, rank: t('historicalPerformance.years.2.rank') },
                    { year: "2025", gold: 6, silver: 13, bronze: 14, total: 33, rank: t('historicalPerformance.years.3.rank') },
                    { year: "2025", gold: 5, silver: 10, bronze: 17, total: 32, rank: t('historicalPerformance.years.4.rank') },
                  ].map((year, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-lg">{year.year}</span>
                          <div className="text-right">
                            <Badge variant="outline">{year.total} {t('labels.medals')}</Badge>
                            <div className="text-xs text-muted-foreground mt-1">{year.rank}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-yellow-600 font-semibold">{t('labels.goldEmoji')} {year.gold}</div>
                            <div className="text-gray-500">{t('labels.gold')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-400 font-semibold">{t('labels.silverEmoji')} {year.silver}</div>
                            <div className="text-gray-500">{t('labels.silver')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-orange-600 font-semibold">{t('labels.bronzeEmoji')} {year.bronze}</div>
                            <div className="text-gray-500">{t('labels.bronze')}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">{t('historicalPerformance.notableAchievements')}</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <div className="font-semibold">{t('historicalPerformance.achievements.imoPerfect.title')}</div>
                          <div className="text-sm text-muted-foreground">
                            {t('historicalPerformance.achievements.imoPerfect.description')}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <div className="font-semibold">{t('historicalPerformance.achievements.iphoBestExperimental.title')}</div>
                          <div className="text-sm text-muted-foreground">
                            {t('historicalPerformance.achievements.iphoBestExperimental.description')}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <div className="font-semibold">{t('historicalPerformance.achievements.ioiTeam.title')}</div>
                          <div className="text-sm text-muted-foreground">
                            {t('historicalPerformance.achievements.ioiTeam.description')}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-purple-500 mt-1" />
                        <div>
                          <div className="font-semibold">{t('historicalPerformance.achievements.ichoRisingStar.title')}</div>
                          <div className="text-sm text-muted-foreground">
                            {t('historicalPerformance.achievements.ichoRisingStar.description')}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
                  <Link href="/apply/criteria">{t('cta.checkQualification')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about/winners">{t('cta.meetChampions')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
