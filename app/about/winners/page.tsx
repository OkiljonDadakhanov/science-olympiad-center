"use client"

import { useState } from "react"
import { Trophy } from "lucide-react"
import WinnersFilter from "@/components/winners/WinnersFilter"
import WinnersGrid from "@/components/winners/winners-grid"
import { winners } from "@/data/winners"

export default function WinnersPage() {
  const [type, setType] = useState("ALL")
  const [year, setYear] = useState("ALL")

  const availableYears = Array.from(new Set(winners.map((w) => w.year))).sort((a, b) => b - a)

  return (
    <main className="min-h-screen py-20">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4">
          Olympiad <span className="text-primary">Winners</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse Uzbekistan’s brightest minds who excelled in various competitions.
        </p>
      </section>

      {/* Filters */}
      <section className="container">
        <WinnersFilter
          type={type}
          year={year}
          onTypeChange={setType}
          onYearChange={setYear}
          availableYears={availableYears}
        />
        <WinnersGrid type={type} year={year} />
      </section>
    </main>
  )
}
