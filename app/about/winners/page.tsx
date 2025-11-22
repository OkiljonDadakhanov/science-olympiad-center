"use client"

import { useState, useEffect, useRef } from "react"
import { Trophy } from "lucide-react"
import WinnersFilter from "@/components/winners/WinnersFilter"
import WinnersGrid from "@/components/winners/winners-grid"
import { useWinners } from "@/hooks/useWinners"
import { BASE_URL } from "@/lib/api-winners"

export default function WinnersPage() {
  const { 
    winners, loading, error,
    fetchData, nextUrl, prevUrl,
    currentPage, totalPages,
    availableYears, availableSubjects
  } = useWinners()

  const [olympiadType, setOlympiadType] = useState("ALL")
  const [year, setYear] = useState("ALL")
  const [selectedMedals, setSelectedMedals] = useState<string[]>([])
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const topRef = useRef<HTMLDivElement>(null)

  // FADE OUT BACKGROUND ON SCROLL
  const [bgOpacity, setBgOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const fadePoint = 300 // px until fully invisible
      const scrollTop = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollTop / fadePoint)
      setBgOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset to page 1 when filters change
  useEffect(() => {
    const url = new URL(BASE_URL)

    selectedMedals.forEach((m) => url.searchParams.append("medal", m))
    selectedSubjects.forEach((s) => url.searchParams.append("subject", s))

    if (olympiadType !== "ALL") url.searchParams.set("olympiad_type", olympiadType)
    if (year !== "ALL") url.searchParams.set("academic_year", year)

    url.searchParams.delete("page")
    fetchData(url.toString())
  }, [olympiadType, year, selectedMedals, selectedSubjects])

  const handlePageChange = (url: string) => {
    fetchData(url)
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="relative min-h-screen py-20">

      {/* BACKGROUND IMAGE WITH FADING */}
      <div
        className="fixed top-0 left-0 w-full h-[400px] bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          opacity: bgOpacity,
          transition: "opacity 0.2s linear"
        }}
      />

      <div ref={topRef} />

      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Olympiad <span className="text-primary">Winners</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse Uzbekistan's brightest minds who excelled in various competitions.
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
                Page <span className="font-semibold">{currentPage}</span> of{" "}
                <span className="font-semibold">{totalPages}</span>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => handlePageChange(prevUrl!)}
                disabled={!prevUrl}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-40"
              >
                ← Previous
              </button>

              <button
                onClick={() => handlePageChange(nextUrl!)}
                disabled={!nextUrl}
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {!loading && winners.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">No winners found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
 