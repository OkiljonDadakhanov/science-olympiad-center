
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"


export default function MissionVisionPage() {
  const t = useTranslations('pages.about.mission')

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg/about.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('heroTitle')} <span className="text-primary">{t('heroTitleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {t('heroDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Mission */}
              <div>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">{t('missionTitle')}</h2>
                  <p className="text-xl text-muted-foreground">
                    {t('missionSubtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        {t('talentDevelopmentTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('talentDevelopmentDesc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        {t('youthEmpowermentTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('youthEmpowermentDesc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        {t('educationalExcellenceTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('educationalExcellenceDesc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Eye className="h-6 w-6 text-primary" />
                        {t('scientificAdvancementTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('scientificAdvancementDesc')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Vision */}
              <div>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6">
                    <Eye className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">{t('visionTitle')}</h2>
                  <p className="text-xl text-muted-foreground">
                    {t('visionSubtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-secondary" />
                        {t('globalRecognitionTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('globalRecognitionDesc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-secondary" />
                        {t('innovationEcosystemTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('innovationEcosystemDesc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-secondary" />
                        {t('regionalLeadershipTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('regionalLeadershipDesc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Eye className="h-6 w-6 text-secondary" />
                        {t('futureScientistsTitle')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('futureScientistsDesc')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('ctaTitle')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t('ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {t('explorePrograms')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {t('getInTouch')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
