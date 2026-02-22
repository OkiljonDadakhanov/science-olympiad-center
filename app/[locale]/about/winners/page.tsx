"use client"

import { useState, useRef, useEffect } from "react"
import { Trophy } from "lucide-react"
import WinnersFilter from "@/components/winners/WinnersFilter"
import WinnersGrid from "@/components/winners/winners-grid"
import { useWinners } from "@/hooks/useWinners"
import { BASE_URL } from "@/lib/api-winners"
import { FadingBackground } from "@/components/fading-bg"
import { useLocale } from "next-intl"

export default function WinnersPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const { 
    winners, loading, error,
    fetchData, nextUrl, prevUrl,
    currentPage, totalPages,
    availableYears, availableSubjects
  } = useWinners()

  const content = {
    en: {
      title: "Olympiad",
      highlight: "Winners",
      subtitle: "Browse Uzbekistan's brightest minds who excelled in various competitions.",
      page: "Page",
      of: "of",
      previous: "Previous",
      next: "Next",
      noWinners: "No winners found",
      noWinnersDesc: "Try adjusting your filters to see more results.",
    },
    ru: {
      title: "Победители",
      highlight: "олимпиад",
      subtitle: "Познакомьтесь с лучшими учениками Узбекистана, добившимися успеха на различных соревнованиях.",
      page: "Страница",
      of: "из",
      previous: "Назад",
      next: "Вперёд",
      noWinners: "Победители не найдены",
      noWinnersDesc: "Измените фильтры, чтобы увидеть больше результатов.",
    },
    uz: {
      title: "Olimpiada",
      highlight: "g‘oliblari",
      subtitle: "Turli musobaqalarda yuqori natija ko‘rsatgan O‘zbekistonning eng iqtidorli o‘quvchilari bilan tanishing.",
      page: "Sahifa",
      of: "dan",
      previous: "Oldingi",
      next: "Keyingi",
      noWinners: "G‘oliblar topilmadi",
      noWinnersDesc: "Ko‘proq natijani ko‘rish uchun filtrlarga o‘zgartirish kiriting.",
    },
  }[locale]

  const [olympiadType, setOlympiadType] = useState("ALL")
  const [year, setYear] = useState("ALL")
  const [selectedMedals, setSelectedMedals] = useState<string[]>([])
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const topRef = useRef<HTMLDivElement>(null)

  // Reset to page 1 when filters change
  useEffect(() => {
    const url = new URL(BASE_URL)

    selectedMedals.forEach((m) => url.searchParams.append("medal", m))
    selectedSubjects.forEach((s) => url.searchParams.append("subject", s))

    if (olympiadType !== "ALL") url.searchParams.set("olympiad_type", olympiadType)
    if (year !== "ALL") url.searchParams.set("academic_year", year)

    // Always go back to the first page when filters change
    url.searchParams.delete("page")
    fetchData(url.toString())
  }, [olympiadType, year, selectedMedals, selectedSubjects])

  const handlePageChange = (url: string) => {
    fetchData(url)
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="relative min-h-screen py-20">

      {/* Reusable fading background */}
      <FadingBackground imageUrl="/bg.jpg" height={400} />

      <div ref={topRef} />

      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          {content.title} <span className="text-primary">{content.highlight}</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </section>

      {/* Filter + Content */}
      <section className="container">
        <WinnersFilter
          olympiadType={olympiadType}
          year={year}
          onOlympiadTypeChange={setOlympiadType}
          onYearChange={setYear}
          availableYears={availableYears}
          selectedMedals={selectedMedals}
          onMedalsChange={setSelectedMedals}
          selectedSubjects={selectedSubjects}
          onSubjectsChange={setSelectedSubjects}
          availableSubjects={availableSubjects}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center mt-8">
            {error}
          </div>
        )}

        <WinnersGrid winners={winners} loading={loading} />

        {!loading && winners.length > 0 && (
          <div className="mt-12 flex flex-col items-center gap-4">

            {totalPages > 0 && (
              <div className="text-sm text-muted-foreground">
                {content.page} <span className="font-semibold">{currentPage}</span> {content.of}{" "}
                <span className="font-semibold">{totalPages}</span>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => handlePageChange(prevUrl!)}
                disabled={!prevUrl}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-40"
              >
                ← {content.previous}
              </button>

              <button
                onClick={() => handlePageChange(nextUrl!)}
                disabled={!nextUrl}
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-40"
              >
                {content.next} →
              </button>
            </div>
          </div>
        )}

        {!loading && winners.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">{content.noWinners}</h3>
            <p className="text-muted-foreground">
              {content.noWinnersDesc}
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
