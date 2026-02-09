"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Award,
  CheckCircle,
  Globe,
  ArrowRight,
} from "lucide-react"
import { Link } from "@/i18n/routing"
import { FadingBackground } from "@/components/fading-bg"
import { useTranslations } from "next-intl"

type MedalInfo = {
  gold: number
  silver: number
  bronze: number
}

type RegionalOlympiad = {
  nameKey: string
  shortNameKey?: string
  locationKey: string
  dateKey: string
  teamSizeKey: string
  formatKey: string
  durationKey: string
  eligibilityKey: string
  medals: MedalInfo
  categoryKey: string
}

const regionalOlympiads: RegionalOlympiad[] = [
  {
    nameKey: "competitions.ijso.name",
    shortNameKey: "competitions.ijso.shortName",
    locationKey: "competitions.ijso.location",
    dateKey: "competitions.ijso.date",
    teamSizeKey: "competitions.ijso.teamSize",
    formatKey: "competitions.ijso.format",
    durationKey: "competitions.ijso.duration",
    eligibilityKey: "competitions.ijso.eligibility",
    medals: { gold: 0, silver: 1, bronze: 3 },
    categoryKey: "competitions.ijso.category",
  },
  {
    nameKey: "competitions.izho.name",
    shortNameKey: "competitions.izho.shortName",
    locationKey: "competitions.izho.location",
    dateKey: "competitions.izho.date",
    teamSizeKey: "competitions.izho.teamSize",
    formatKey: "competitions.izho.format",
    durationKey: "competitions.izho.duration",
    eligibilityKey: "competitions.izho.eligibility",
    medals: { gold: 2, silver: 5, bronze: 12 },
    categoryKey: "competitions.izho.category",
  },
  {
    nameKey: "competitions.cmo.name",
    shortNameKey: "competitions.cmo.shortName",
    locationKey: "competitions.cmo.location",
    dateKey: "competitions.cmo.date",
    teamSizeKey: "competitions.cmo.teamSize",
    formatKey: "competitions.cmo.format",
    durationKey: "competitions.cmo.duration",
    eligibilityKey: "competitions.cmo.eligibility",
    medals: { gold: 4, silver: 1, bronze: 2 },
    categoryKey: "competitions.cmo.category",
  },
  {
    nameKey: "competitions.egmo.name",
    shortNameKey: "competitions.egmo.shortName",
    locationKey: "competitions.egmo.location",
    dateKey: "competitions.egmo.date",
    teamSizeKey: "competitions.egmo.teamSize",
    formatKey: "competitions.egmo.format",
    durationKey: "competitions.egmo.duration",
    eligibilityKey: "competitions.egmo.eligibility",
    medals: { gold: 0, silver: 1, bronze: 2 },
    categoryKey: "competitions.egmo.category",
  },
  {
    nameKey: "competitions.egoi.name",
    shortNameKey: "competitions.egoi.shortName",
    locationKey: "competitions.egoi.location",
    dateKey: "competitions.egoi.date",
    teamSizeKey: "competitions.egoi.teamSize",
    formatKey: "competitions.egoi.format",
    durationKey: "competitions.egoi.duration",
    eligibilityKey: "competitions.egoi.eligibility",
    medals: { gold: 0, silver: 0, bronze: 2 },
    categoryKey: "competitions.egoi.category",
  },
  {
    nameKey: "competitions.bmo.name",
    shortNameKey: "competitions.bmo.shortName",
    locationKey: "competitions.bmo.location",
    dateKey: "competitions.bmo.date",
    teamSizeKey: "competitions.bmo.teamSize",
    formatKey: "competitions.bmo.format",
    durationKey: "competitions.bmo.duration",
    eligibilityKey: "competitions.bmo.eligibility",
    medals: { gold: 1, silver: 4, bronze: 0 },
    categoryKey: "competitions.bmo.category",
  },
  {
    nameKey: "competitions.apho.name",
    shortNameKey: "competitions.apho.shortName",
    locationKey: "competitions.apho.location",
    dateKey: "competitions.apho.date",
    teamSizeKey: "competitions.apho.teamSize",
    formatKey: "competitions.apho.format",
    durationKey: "competitions.apho.duration",
    eligibilityKey: "competitions.apho.eligibility",
    medals: { gold: 0, silver: 0, bronze: 1 },
    categoryKey: "competitions.apho.category",
  },
  {
    nameKey: "competitions.mmo.name",
    shortNameKey: "competitions.mmo.shortName",
    locationKey: "competitions.mmo.location",
    dateKey: "competitions.mmo.date",
    teamSizeKey: "competitions.mmo.teamSize",
    formatKey: "competitions.mmo.format",
    durationKey: "competitions.mmo.duration",
    eligibilityKey: "competitions.mmo.eligibility",
    medals: { gold: 3, silver: 2, bronze: 2 },
    categoryKey: "competitions.mmo.category",
  },
  {
    nameKey: "competitions.khimioMath.name",
    shortNameKey: "competitions.khimioMath.shortName",
    locationKey: "competitions.khimioMath.location",
    dateKey: "competitions.khimioMath.date",
    teamSizeKey: "competitions.khimioMath.teamSize",
    formatKey: "competitions.khimioMath.format",
    durationKey: "competitions.khimioMath.duration",
    eligibilityKey: "competitions.khimioMath.eligibility",
    medals: { gold: 7, silver: 13, bronze: 30 },
    categoryKey: "competitions.khimioMath.category",
  },
  {
    nameKey: "competitions.apio.name",
    shortNameKey: "competitions.apio.shortName",
    locationKey: "competitions.apio.location",
    dateKey: "competitions.apio.date",
    teamSizeKey: "competitions.apio.teamSize",
    formatKey: "competitions.apio.format",
    durationKey: "competitions.apio.duration",
    eligibilityKey: "competitions.apio.eligibility",
    medals: { gold: 0, silver: 0, bronze: 3 },
    categoryKey: "competitions.apio.category",
  },
  {
    nameKey: "competitions.khimioChem.name",
    shortNameKey: "competitions.khimioChem.shortName",
    locationKey: "competitions.khimioChem.location",
    dateKey: "competitions.khimioChem.date",
    teamSizeKey: "competitions.khimioChem.teamSize",
    formatKey: "competitions.khimioChem.format",
    durationKey: "competitions.khimioChem.duration",
    eligibilityKey: "competitions.khimioChem.eligibility",
    medals: { gold: 6, silver: 8, bronze: 5 },
    categoryKey: "competitions.khimioChem.category",
  },
  {
    nameKey: "competitions.jbmo.name",
    shortNameKey: "competitions.jbmo.shortName",
    locationKey: "competitions.jbmo.location",
    dateKey: "competitions.jbmo.date",
    teamSizeKey: "competitions.jbmo.teamSize",
    formatKey: "competitions.jbmo.format",
    durationKey: "competitions.jbmo.duration",
    eligibilityKey: "competitions.jbmo.eligibility",
    medals: { gold: 3, silver: 2, bronze: 1 },
    categoryKey: "competitions.jbmo.category",
  },
  {
    nameKey: "competitions.apmo.name",
    shortNameKey: "competitions.apmo.shortName",
    locationKey: "competitions.apmo.location",
    dateKey: "competitions.apmo.date",
    teamSizeKey: "competitions.apmo.teamSize",
    formatKey: "competitions.apmo.format",
    durationKey: "competitions.apmo.duration",
    eligibilityKey: "competitions.apmo.eligibility",
    medals: { gold: 0, silver: 0, bronze: 3 },
    categoryKey: "competitions.apmo.category",
  },
]

export default function MintaqaviyOlympiadsPage() {
  const t = useTranslations("olympiads.regional")

  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/regional-olympiads.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-500/10 via-emerald-500/5 to-sky-500/10 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full mb-6">
                <Globe className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-700 font-medium">{t("hero.badge")}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t("hero.titleStart")} <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/criteria">{t("hero.qualificationButton")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#competitions">{t("hero.viewCompetitionsButton")}</Link>
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
                <div className="text-3xl font-bold text-primary mb-2">{regionalOlympiads.length}</div>
                <div className="text-muted-foreground">{t("stats.regionalOlympiads")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">{t("stats.hostCountries")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60+</div>
                <div className="text-muted-foreground">{t("stats.teamMembers")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">{t("stats.totalMedals")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section id="competitions" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
              {t("competitionsSection.title")}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t("competitionsSection.description")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {regionalOlympiads.map((olympiad, index) => (
                <Card key={index} className="border-2 shadow-lg bg-white/95">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold">{t(olympiad.nameKey)}</h3>
                        {olympiad.shortNameKey && (
                          <p className="text-sm text-muted-foreground mt-1">{t("labels.shortName")}: {t(olympiad.shortNameKey)}</p>
                        )}
                      </div>
                      <Badge variant="secondary">{t(olympiad.categoryKey)}</Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t("labels.location")}:</span>
                          <span className="text-muted-foreground">{t(olympiad.locationKey)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t("labels.date")}:</span>
                          <span className="text-muted-foreground">{t(olympiad.dateKey)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t("labels.teamSize")}:</span>
                          <span className="text-muted-foreground">{t(olympiad.teamSizeKey)}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{t("labels.duration")}:</span>
                          <span className="text-muted-foreground">{t(olympiad.durationKey)}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-medium">{t("labels.eligibility")}:</span>{" "}
                            <span className="text-muted-foreground">{t(olympiad.eligibilityKey)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium">{t("labels.format")}:</span>{" "}
                      <span className="text-muted-foreground">{t(olympiad.formatKey)}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        {t("medals.title")}
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-yellow-600">{t("medals.gold")}</span>
                          <span className="font-medium">{olympiad.medals.gold}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t("medals.silver")}</span>
                          <span className="font-medium">{olympiad.medals.silver}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-orange-600">{t("medals.bronze")}</span>
                          <span className="font-medium">{olympiad.medals.bronze}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/about/winners">
                          {t("viewWinners")} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
