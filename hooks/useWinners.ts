// hooks/useWinners.ts
"use client"

import { useEffect, useState } from "react"
import { Winner as ApiWinner } from "@/types/winners"
import { getWinners } from "@/lib/api-winners"

export function useWinners() {
  const [winners, setWinners] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [nextUrl, setNextUrl] = useState<string | null>(null)
  const [prevUrl, setPrevUrl] = useState<string | null>(null)

  async function fetchData(url?: string) {
    try {
      setLoading(true)
      setError(null)

      const data = await getWinners(url)

      // Map API snake_case fields to the UI shape expected by components
      const mapped = (data.results || []).map((w: ApiWinner) => ({
        id: w.id,
        studentName: w.student_name || w.competition_name || "Unknown",
        age: w.class_number ?? undefined,
        olympiadType: w.olympiad_type || undefined,
        olympiadName: w.competition_name || undefined,
        year: w.academic_year ? Number(w.academic_year) : undefined,
        region: w.region || undefined,
        school: w.school || undefined,
        place: w.medal || undefined,
        image: w.photo_url || w.photo || "/placeholder-winner.jpg",
      }))

      setWinners(mapped)
      setNextUrl(data.next)
      setPrevUrl(data.previous)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const availableYears = Array.from(
    new Set(winners.map((w) => Number(w.academic_year)))
  ).sort((a, b) => b - a)

  return {
    winners,
    loading,
    error,
    fetchData,
    nextUrl,
    prevUrl,
    availableYears,
  }
}
