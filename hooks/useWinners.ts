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
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  // Extract available years from all fetched data
  const [allYears, setAllYears] = useState<number[]>([])
  const [availableSubjects, setAvailableSubjects] = useState<string[]>([])

  async function fetchData(url?: string) {
    try {
      setLoading(true)
      setError(null)

      const data = await getWinners(url)

      // Map API snake_case fields to the UI shape
      const mapped = (data.results || []).map((w: ApiWinner) => ({
        id: w.id,
        studentName: w.student_name || w.competition_name || "Unknown",
        // class_number represents the student's grade (class) in school
        grade: w.class_number ?? undefined,
        olympiadType: w.olympiad_type || undefined,
        olympiadName: w.competition_name || undefined,
        subject: w.subject || undefined,
        year: w.academic_year ? Number(w.academic_year) : undefined,
        region: w.region || undefined,
        school: w.school || undefined,
        place: w.medal || undefined,
        image: w.photo_url || w.photo || "/placeholder-winner.jpg",
      }))

      setWinners(mapped)
      setNextUrl(data.next)
      setPrevUrl(data.previous)
      setTotalCount(data.count || 0)

      // Calculate current page from URL
      if (url) {
        const urlObj = new URL(url)
        const pageParam = urlObj.searchParams.get("page")
        setCurrentPage(pageParam ? parseInt(pageParam) : 1)
      } else {
        setCurrentPage(1)
      }

      // Calculate total pages (assuming default page size of 10)
      const pageSize = 10
      setTotalPages(Math.ceil((data.count || 0) / pageSize))

      // Collect years for filter
      const years = mapped
        .map((w) => w.year)
        .filter((y): y is number => y !== undefined)
      
      setAllYears((prev) => {
        const combined = [...new Set([...prev, ...years])]
        return combined.sort((a, b) => b - a)
      })

      // Collect subjects for filter
      const subjects = mapped
        .map((w) => w.subject)
        .filter((s): s is string => !!s)

      // store unique subjects
      setAvailableSubjects((prev: string[]) => {
        const combined = [...new Set([...(prev || []), ...subjects])]
        return combined.sort()
      })

    } catch (err: any) {
      setError(err.message || "Failed to load winners")
      setWinners([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    winners,
    loading,
    error,
    fetchData,
    nextUrl,
    prevUrl,
    currentPage,
    totalPages,
    totalCount,
    availableYears: allYears,
    availableSubjects,
  }
}