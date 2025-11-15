"use client"

import { useState } from "react"
import { Trophy } from "lucide-react"
import WinnersFilter from "@/components/winners/WinnersFilter"
import WinnersGrid from "@/components/winners/winners-grid"
import { useWinners } from "@/hooks/useWinners"

export default function WinnersPage() {
  const { 
    winners, loading, error,
    fetchData,
    nextUrl, prevUrl,
    availableYears
  } = useWinners()

  const [type, setType] = useState("ALL")
  const [year, setYear] = useState("ALL")

  return (
    <main className="min-h-screen py-20">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Olympiad <span className="text-primary">Winners</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse Uzbekistan’s brightest minds who excelled in various competitions.
        </p>
      </section>

      {/* Filters + Content */}
      <section className="container">

        <WinnersFilter
          type={type}
          year={year}
          onTypeChange={setType}
          onYearChange={setYear}
          availableYears={availableYears}
        />

        {error && <p className="text-red-500 text-center mt-8">{error}</p>}

        {loading ? (
          <div className="text-center py-10 text-muted-foreground">
            Loading winners...
          </div>
        ) : (
          <WinnersGrid {...({ winners, type, year } as any)} />
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-10">
          {prevUrl && (
            <button
              onClick={() => fetchData(prevUrl)}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={() => fetchData(nextUrl)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Next
            </button>
          )}
        </div>

      </section>
    </main>
  )
}
