"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Users, Calendar, Clock, Star, CheckCircle, ArrowRight, GraduationCap, BookOpen, Award, Target } from "lucide-react"
import { Link } from "@/i18n/routing"
import { FadingBackground } from "@/components/fading-bg"
import { useTranslations } from "next-intl"

export default function LocalOlympiadsPage() {
  const t = useTranslations('olympiads.local')

  const olympiadStages = [
    {
      stage: 1,
      name: t('stages.1.name'),
      uzbekName: t('stages.1.uzbekName'),
      description: t('stages.1.description'),
      eligibility: t('stages.1.eligibility'),
      participants: t('stages.1.participants'),
      nextStageParticipants: t('stages.1.nextStageParticipants'),
      format: t('stages.1.format'),
      requirements: [
        t('stages.1.requirements.0'),
        t('stages.1.requirements.1'),
        t('stages.1.requirements.2'),
        t('stages.1.requirements.3'),
        t('stages.1.requirements.4')
      ],
      notification: t('stages.1.notification'),
      winners: t('stages.1.winners'),
      subjects: [
        t('subjects.mathematics'), t('subjects.physics'), t('subjects.chemistry'), t('subjects.biology'), t('subjects.informatics'),
        t('subjects.nativeLanguage'), t('subjects.uzbekLanguage'), t('subjects.russianLanguage'),
        t('subjects.karakalpakLanguage'), t('subjects.tajikLanguage'), t('subjects.kazakhLanguage'),
        t('subjects.englishLanguage'), t('subjects.germanLanguage'), t('subjects.frenchLanguage'),
        t('subjects.history'), t('subjects.stateLaw'), t('subjects.geography')
      ],
      totalSubjects: 17
    },
    {
      stage: 2,
      name: t('stages.2.name'),
      uzbekName: t('stages.2.uzbekName'),
      description: t('stages.2.description'),
      eligibility: t('stages.2.eligibility'),
      participants: t('stages.2.participants'),
      format: t('stages.2.format'),
      testDetails: {
        totalQuestions: 30,
        group1: {
          subjects: [t('subjects.mathematics'), t('subjects.physics'), t('subjects.chemistry'), t('subjects.biology'), t('subjects.informatics')],
          duration: t('stages.2.testDetails.group1.duration')
        },
        group2: {
          subjects: [
            t('subjects.nativeLanguage'), t('subjects.uzbekLanguage'), t('subjects.russianLanguage'),
            t('subjects.karakalpakLanguage'), t('subjects.tajikLanguage'), t('subjects.kazakhLanguage'),
            t('subjects.englishLanguage'), t('subjects.germanLanguage'), t('subjects.frenchLanguage'),
            t('subjects.history'), t('subjects.stateLaw'), t('subjects.geography')
          ],
          duration: t('stages.2.testDetails.group2.duration')
        }
      },
      exceptions: t('stages.2.exceptions'),
      specialRule: t('stages.2.specialRule'),
      winners: t('stages.2.winners'),
      totalSubjects: 17
    },
    {
      stage: 3,
      name: t('stages.3.name'),
      uzbekName: t('stages.3.uzbekName'),
      description: t('stages.3.description'),
      eligibility: t('stages.3.eligibility'),
      participants: t('stages.3.participants'),
      format: t('stages.3.format'),
      subjects: {
        science: {
          subjects: [t('subjects.mathematics'), t('subjects.physics'), t('subjects.chemistry'), t('subjects.biology')],
          part1: {
            type: t('stages.3.science.part1.type'),
            problems: 5,
            points: 50,
            duration: t('stages.3.science.part1.duration'),
            description: t('stages.3.science.part1.description')
          },
          part2: {
            type: t('stages.3.science.part2.type'),
            questions: 30,
            points: 50,
            duration: t('stages.3.science.part2.duration'),
            breakdown: {
              simple: t('stages.3.science.part2.breakdown.simple'),
              medium: t('stages.3.science.part2.breakdown.medium'),
              complex: t('stages.3.science.part2.breakdown.complex')
            },
            total: t('stages.3.science.part2.total')
          },
          total: t('stages.3.science.total')
        },
        informatics: {
          subject: t('subjects.informatics'),
          format: t('stages.3.informatics.format'),
          problems: 5,
          points: 50,
          duration: t('stages.3.informatics.duration'),
          languages: ["C++", "Python", "Java"],
          description: t('stages.3.informatics.description')
        },
        humanities: {
          subjects: [t('subjects.history'), t('subjects.stateLaw'), t('subjects.geography')],
          format: t('stages.3.humanities.format'),
          questions: 40,
          points: 100,
          duration: t('stages.3.humanities.duration'),
          breakdown: {
            simple: t('stages.3.humanities.breakdown.simple'),
            medium: t('stages.3.humanities.breakdown.medium'),
            complex: t('stages.3.humanities.breakdown.complex')
          },
          total: t('stages.3.humanities.total')
        }
      },
      winners: t('stages.3.winners'),
      statistics: {
        group1: {
          subjects: [t('subjects.mathematics'), t('subjects.physics'), t('subjects.chemistry'), t('subjects.biology'), t('subjects.informatics')],
          dates: t('stages.3.statistics.group1.dates'),
          grades: t('stages.3.statistics.group1.grades'),
          participants: t('stages.3.statistics.group1.participants')
        },
        group2: {
          subjects: [
            t('subjects.nativeLanguage'), t('subjects.uzbekLanguage'), t('subjects.karakalpakLanguage'),
            t('subjects.russianLanguage'), t('subjects.tajikLanguage'), t('subjects.kazakhLanguage'),
            t('subjects.englishLanguage'), t('subjects.germanLanguage'), t('subjects.frenchLanguage'),
            t('subjects.history'), t('subjects.geography'), t('subjects.stateLaw')
          ],
          participants: t('stages.3.statistics.group2.participants')
        }
      },
      prizes: t('stages.3.prizes'),
      republicQualifiers: t('stages.3.republicQualifiers')
    },
    {
      stage: 4,
      name: t('stages.4.name'),
      uzbekName: t('stages.4.uzbekName'),
      description: t('stages.4.description'),
      eligibility: t('stages.4.eligibility'),
      prizes: {
        monetary: {
          first: t('stages.4.prizes.monetary.first'),
          second: t('stages.4.prizes.monetary.second'),
          third: t('stages.4.prizes.monetary.third')
        },
        certificates: t('stages.4.prizes.certificates'),
        benefits: t('stages.4.prizes.benefits')
      },
      format: {
        humanities: {
          subjects: [t('subjects.history'), t('subjects.stateLaw'), t('subjects.geography')],
          type: t('stages.4.format.humanities.type'),
          format: t('stages.4.format.humanities.format')
        },
        foreignLanguages: {
          subjects: [t('subjects.englishLanguage'), t('subjects.germanLanguage'), t('subjects.frenchLanguage')],
          type: t('stages.4.format.foreignLanguages.type'),
          part1: {
            name: t('stages.4.format.foreignLanguages.part1.name'),
            points: 60,
            description: t('stages.4.format.foreignLanguages.part1.description')
          },
          part2: {
            name: t('stages.4.format.foreignLanguages.part2.name'),
            points: 40,
            format: t('stages.4.format.foreignLanguages.part2.format'),
            description: t('stages.4.format.foreignLanguages.part2.description')
          },
          total: 100,
          duration: t('stages.4.format.foreignLanguages.duration')
        },
        informatics: {
          subject: t('subjects.informatics'),
          type: t('stages.4.format.informatics.type'),
          format: t('stages.4.format.informatics.format'),
          problemsPerDay: 5,
          totalProblems: 10,
          pointsPerProblem: 10,
          totalPoints: 100,
          durationPerDay: t('stages.4.format.informatics.durationPerDay'),
          languages: ["C++", "Python", "Java"],
          description: t('stages.4.format.informatics.description')
        },
        science: {
          subjects: [t('subjects.mathematics'), t('subjects.physics'), t('subjects.chemistry'), t('subjects.biology')],
          type: t('stages.4.format.science.type'),
          round1: {
            name: t('stages.4.format.science.round1.name'),
            problems: 5,
            points: [7, 7, 10, 10, 16],
            totalPoints: 50,
            duration: t('stages.4.format.science.round1.duration'),
            description: t('stages.4.format.science.round1.description')
          },
          round2: {
            name: t('stages.4.format.science.round2.name'),
            format: t('stages.4.format.science.round2.format')
          }
        },
        languages: {
          subjects: [
            t('subjects.nativeLanguage'),
            t('subjects.uzbekLanguage'),
            t('subjects.russianLanguage'),
            t('subjects.kazakhLanguage'),
            t('subjects.tajikLanguage'),
            t('subjects.karakalpakLanguage')
          ],
          type: t('stages.4.format.languages.type'),
          round1: {
            name: t('stages.4.format.languages.round1.name'),
            duration: t('stages.4.format.languages.round1.duration'),
            points: 50
          },
          round2: {
            name: t('stages.4.format.languages.round2.name'),
            format: t('stages.4.format.languages.round2.format')
          }
        },
        other: {
          description: t('stages.4.format.other.description')
        }
      }
    }
  ]

  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/icho-slider.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 via-teal-500/5 to-emerald-500/10 backdrop-blur-sm relative">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full mb-6">
                <Trophy className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#stages">{t('hero.exploreStages')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/apply/criteria">{t('hero.viewRequirements')}</Link>
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
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">{t('stats.competitionStages')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">17</div>
                <div className="text-muted-foreground">{t('stats.subjects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">530K+</div>
                <div className="text-muted-foreground">{t('stats.schoolStageWinners')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">28K+</div>
                <div className="text-muted-foreground">{t('stats.regionalParticipants')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Stages */}
        <section id="stages" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('stagesSection.title')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('stagesSection.description')}
              </p>
            </div>

            <div className="space-y-16">
              {olympiadStages.map((stage, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-primary text-white text-lg px-4 py-1">
                            {t('stageLabel')} {stage.stage}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-bold">{stage.name}</h3>
                        </div>
                        <p className="text-muted-foreground italic">{stage.uzbekName}</p>
                      </div>
                      {'status' in stage && typeof stage.status === 'string' && stage.status && (
                        <Badge variant="outline" className="text-sm">
                          {stage.status}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Eligibility */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        {t('labels.eligibility')}
                      </h4>
                      <p className="text-muted-foreground">{stage.eligibility || ('note' in stage && typeof stage.note === 'string' ? stage.note : '')}</p>
                    </div>

                    {/* Stage 1 Specific Content */}
                    {stage.stage === 1 && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-500" />
                            {t('labels.organizationRequirements')}
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            {stage.requirements?.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-purple-500" />
                            {t('labels.notificationRequirements')}
                          </h4>
                          <p className="text-muted-foreground">{stage.notification}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            {t('labels.winners')}
                          </h4>
                          <p className="text-muted-foreground">{stage.winners}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" />
                            {t('labels.participationStatistics')}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-primary/5 rounded-lg">
                              <div className="text-sm text-muted-foreground mb-1">{t('labels.schoolStageWinners')}</div>
                              <div className="text-2xl font-bold text-primary">{stage.participants}</div>
                            </div>
                            <div className="p-4 bg-secondary/5 rounded-lg">
                              <div className="text-sm text-muted-foreground mb-1">{t('labels.advancedToDistrict')}</div>
                              <div className="text-2xl font-bold text-secondary">{stage.nextStageParticipants}</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-red-500" />
                            {t('labels.subjects')} ({stage.totalSubjects})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(stage.subjects) && stage.subjects.map((subject: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-sm">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Stage 2 Specific Content */}
                    {stage.stage === 2 && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            {t('labels.testFormat')}
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-semibold mb-2">{t('labels.group1Subjects')} ({stage.testDetails?.group1.duration})</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {stage.testDetails?.group1.subjects.join(", ")}
                              </p>
                              <p className="text-sm">
                                <strong>{t('labels.testQuestionsPerSubject')}</strong>
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-semibold mb-2">{t('labels.group2Subjects')} ({stage.testDetails?.group2.duration})</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {stage.testDetails?.group2.subjects.join(", ")}
                              </p>
                              <p className="text-sm">
                                <strong>{t('labels.testQuestionsPerSubject')}</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" />
                            {t('labels.participation')}
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            <strong>{stage.participants}</strong> {t('labels.studentsParticipated')}
                          </p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-500" />
                            {t('labels.specialRules')}
                          </h4>
                          <div className="space-y-2 text-muted-foreground">
                            <p>{stage.exceptions}</p>
                            <p>{stage.specialRule}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-green-500" />
                            {t('labels.winners')}
                          </h4>
                          <p className="text-muted-foreground">{stage.winners}</p>
                        </div>
                      </>
                    )}

                    {/* Stage 3 Specific Content */}
                    {stage.stage === 3 && 'subjects' in stage && stage.subjects && typeof stage.subjects === 'object' && !Array.isArray(stage.subjects) && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-500" />
                            {t('labels.scienceSubjectsFormat')}
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-semibold mb-2">{t('labels.part1WrittenProblems')}</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• {(stage.subjects as any).science?.part1.problems} {t('labels.problemsOfVaryingDifficulty')}</li>
                                <li>• {(stage.subjects as any).science?.part1.points} {t('labels.pointsMaximum')}</li>
                                <li>• {t('labels.duration')}: {(stage.subjects as any).science?.part1.duration}</li>
                                <li>• {t('labels.eachProblemEvaluated')}</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-semibold mb-2">{t('labels.part2TestQuestions')}</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• {(stage.subjects as any).science?.part2.questions} {t('labels.testQuestions')} ({(stage.subjects as any).science?.part2.points} {t('labels.points')})</li>
                                <li>• {t('labels.duration')}: {(stage.subjects as any).science?.part2.duration}</li>
                                <li>• {(stage.subjects as any).science?.part2.breakdown?.simple}</li>
                                <li>• {(stage.subjects as any).science?.part2.breakdown?.medium}</li>
                                <li>• {(stage.subjects as any).science?.part2.breakdown?.complex}</li>
                                <li>• {t('labels.total')}: {(stage.subjects as any).science?.part2.total}</li>
                              </ul>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-center">
                              <strong>{t('labels.total')}: {(stage.subjects as any).science?.total}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-purple-500" />
                            {t('labels.informaticsFormat')}
                          </h4>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>{(stage.subjects as any).informatics?.problems} {t('labels.problemsSolvedOnline')}</strong>
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• {t('labels.duration')}: {(stage.subjects as any).informatics?.duration}</li>
                              <li>• {t('labels.maximumPoints')}: {(stage.subjects as any).informatics?.points}</li>
                              <li>• {t('labels.programmingLanguages')}: {(stage.subjects as any).informatics?.languages?.join(", ")}</li>
                              <li>• {t('labels.pointsAwardedForCompleted')}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-red-500" />
                            {t('labels.humanitiesSubjectsFormat')}
                          </h4>
                          <div className="p-4 bg-red-50 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>{(stage.subjects as any).humanities?.questions} {t('labels.testQuestions')}</strong> ({(stage.subjects as any).humanities?.points} {t('labels.points')})
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• {t('labels.duration')}: {(stage.subjects as any).humanities?.duration}</li>
                              <li>• {(stage.subjects as any).humanities?.breakdown?.simple}</li>
                              <li>• {(stage.subjects as any).humanities?.breakdown?.medium}</li>
                              <li>• {(stage.subjects as any).humanities?.breakdown?.complex}</li>
                              <li>• {t('labels.total')}: {(stage.subjects as any).humanities?.total}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" />
                            {t('labels.competitionStatistics')}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-semibold mb-2">{t('labels.group1Subjects')}</h5>
                              <p className="text-sm text-muted-foreground mb-1">
                                {stage.statistics?.group1.subjects.join(", ")}
                              </p>
                              <p className="text-sm mb-1">
                                <strong>{t('labels.dates')}:</strong> {stage.statistics?.group1.dates}
                              </p>
                              <p className="text-sm mb-1">
                                <strong>{t('labels.grades')}:</strong> {stage.statistics?.group1.grades}
                              </p>
                              <p className="text-lg font-bold text-primary">
                                {stage.statistics?.group1.participants}
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-semibold mb-2">{t('labels.group2Subjects')}</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {t('labels.group2Summary')}
                              </p>
                              <p className="text-lg font-bold text-secondary">
                                {stage.statistics?.group2.participants}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                            {t('labels.prizes')}
                          </h4>
                          <p className="text-muted-foreground">{stage.prizes}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-green-500" />
                            {t('labels.republicStageQualification')}
                          </h4>
                          <p className="text-muted-foreground">{stage.republicQualifiers}</p>
                        </div>
                      </>
                    )}

                    {/* Stage 4 Specific Content */}
                    {stage.stage === 4 && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            {t('labels.eligibility')}
                          </h4>
                          <p className="text-muted-foreground">{stage.eligibility}</p>
                        </div>

                        {'prizes' in stage && stage.prizes && typeof stage.prizes === 'object' && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                              <Trophy className="h-5 w-5 text-yellow-500" />
                              {t('labels.prizesAndAwards')}
                            </h4>
                            <div className="space-y-4">
                              <div className="p-4 bg-yellow-50 rounded-lg">
                                <h5 className="font-semibold mb-2">{t('labels.monetaryPrizes')}</h5>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  <li>• <strong>{t('labels.firstPlace')}:</strong> {stage.prizes.monetary?.first}</li>
                                  <li>• <strong>{t('labels.secondPlace')}:</strong> {stage.prizes.monetary?.second}</li>
                                  <li>• <strong>{t('labels.thirdPlace')}:</strong> {stage.prizes.monetary?.third}</li>
                                </ul>
                              </div>
                              <div className="p-4 bg-blue-50 rounded-lg">
                                <h5 className="font-semibold mb-2">{t('labels.certificatesAndDiplomas')}</h5>
                                <p className="text-sm text-muted-foreground mb-2">{stage.prizes.certificates}</p>
                                <p className="text-sm text-muted-foreground">{stage.prizes.benefits}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-500" />
                            {t('labels.competitionFormatBySubjectGroups')}
                          </h4>

                          {/* Science Subjects */}
                          {'format' in stage && stage.format && typeof stage.format === 'object' && 'science' in stage.format && (
                            <div className="mb-4">
                              <h5 className="font-semibold mb-2 text-primary">{t('labels.scienceSubjectsDetailed')}</h5>
                              <div className="p-4 bg-blue-50 rounded-lg space-y-3">
                                <div>
                                  <h6 className="font-semibold text-sm mb-1">{t('labels.round1WrittenWork')}</h6>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• {stage.format.science.round1.problems} {t('labels.problemsOfVaryingDifficultyPoints')} ({stage.format.science.round1.points.join(", ")} {t('labels.pointsEach')})</li>
                                    <li>• {t('labels.total')}: {stage.format.science.round1.totalPoints} {t('labels.points')}</li>
                                    <li>• {t('labels.duration')}: {stage.format.science.round1.duration}</li>
                                  </ul>
                                </div>
                                <div>
                                  <h6 className="font-semibold text-sm mb-1">{t('labels.round2TestQuestions')}</h6>
                                  <p className="text-sm text-muted-foreground">{t('labels.testExaminationFormat')}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Informatics */}
                          {'format' in stage && stage.format && typeof stage.format === 'object' && 'informatics' in stage.format && (
                            <div className="mb-4">
                              <h5 className="font-semibold mb-2 text-purple-500">{t('subjects.informatics')}</h5>
                              <div className="p-4 bg-purple-50 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-2">
                                  <strong>{t('labels.formatLabel')}:</strong> {t('labels.informaticsFormatDescription')}
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• {stage.format.informatics.problemsPerDay} {t('labels.problemsPerDay')} ({stage.format.informatics.totalProblems} {t('labels.totalWord')})</li>
                                  <li>• {stage.format.informatics.pointsPerProblem} {t('labels.pointsPerProblem')} = {stage.format.informatics.totalPoints} {t('labels.pointsTotal')}</li>
                                  <li>• {t('labels.duration')}: {stage.format.informatics.durationPerDay} {t('labels.perDay')}</li>
                                  <li>• {t('labels.programmingLanguages')}: {stage.format.informatics.languages?.join(", ")}</li>
                                  <li>• {t('labels.pointsAwardedBySystem')}</li>
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Language and Literature Subjects */}
                          {'format' in stage && stage.format && typeof stage.format === 'object' && 'languages' in stage.format && (
                            <div className="mb-4">
                              <h5 className="font-semibold mb-2 text-green-500">{t('labels.languageLiteratureSubjects')}</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {t('labels.languageSubjectsList')}
                              </p>
                              <div className="p-4 bg-green-50 rounded-lg space-y-2">
                                <div>
                                  <h6 className="font-semibold text-sm mb-1">{t('labels.round1WrittenWorkEssay')}</h6>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• {t('labels.duration')}: {stage.format.languages.round1.duration}</li>
                                    <li>• {t('labels.total')}: {stage.format.languages.round1.points} {t('labels.points')}</li>
                                  </ul>
                                </div>
                                <div>
                                  <h6 className="font-semibold text-sm mb-1">{t('labels.round2TestQuestions')}</h6>
                                  <p className="text-sm text-muted-foreground">{t('labels.testExaminationFormat')}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Foreign Languages */}
                          {'format' in stage && stage.format && typeof stage.format === 'object' && 'foreignLanguages' in stage.format && (
                            <div className="mb-4">
                              <h5 className="font-semibold mb-2 text-orange-500">{t('labels.foreignLanguagesDetailed')}</h5>
                              <div className="p-4 bg-orange-50 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-2">
                                  <strong>{t('labels.formatLabel')}:</strong> {t('labels.foreignLanguagesFormatDescription')}
                                </p>
                                <div className="space-y-2">
                                  <div>
                                    <h6 className="font-semibold text-sm mb-1">{t('labels.part1ListeningReading')}</h6>
                                    <p className="text-sm text-muted-foreground">
                                      {t('labels.maximum')} {stage.format.foreignLanguages.part1.points} {t('labels.points')} - {t('labels.listeningReadingAssessment')}
                                    </p>
                                  </div>
                                  <div>
                                    <h6 className="font-semibold text-sm mb-1">{t('labels.part2LexicoGrammatical')}</h6>
                                    <p className="text-sm text-muted-foreground">
                                      {t('labels.maximum')} {stage.format.foreignLanguages.part2.points} {t('labels.points')} - {t('labels.vocabGrammarAssessment')}
                                    </p>
                                  </div>
                                  <div className="mt-2 p-2 bg-white rounded">
                                    <p className="text-sm font-semibold">
                                      {t('labels.total')}: {stage.format.foreignLanguages.total} {t('labels.points')} | {t('labels.duration')}: {stage.format.foreignLanguages.duration}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Humanities */}
                          {'format' in stage && stage.format && typeof stage.format === 'object' && 'humanities' in stage.format && (
                            <div className="mb-4">
                              <h5 className="font-semibold mb-2 text-red-500">{t('labels.humanitiesSubjects')}</h5>
                              <div className="p-4 bg-red-50 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-1">
                                  <strong>{t('labels.subjectsLabel')}:</strong> {stage.format.humanities.subjects.join(", ")}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  <strong>{t('labels.formatLabel')}:</strong> {t('labels.singleRoundTestQuestions')}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Other Subjects */}
                          <div>
                            <h5 className="font-semibold mb-2 text-gray-600">{t('labels.allOtherSubjects')}</h5>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm text-muted-foreground">
                                {t('labels.twoRoundsDescription')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
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
                  <Link href="/apply/criteria">{t('cta.viewQualification')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t('cta.contactUs')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
