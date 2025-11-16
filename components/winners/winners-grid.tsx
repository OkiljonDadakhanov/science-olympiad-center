"use client"

import WinnerCard from "./WinnerCard"

interface WinnerShape {
  id: number
  studentName: string
  grade?: number
  olympiadType?: string
  olympiadName?: string
  year?: number
  region?: string
  school?: string
  place?: string
  image?: string
}

interface WinnersGridProps {
  winners: WinnerShape[]
  loading: boolean
}

// Skeleton loader component
function WinnerSkeleton() {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden animate-pulse">
      <div className="grid md:grid-cols-[180px_1fr] gap-0">
        <div className="bg-gray-200 aspect-square" />
        <div className="p-6 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-5 bg-gray-200 rounded w-2/3" />
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WinnersGrid({ winners, loading }: WinnersGridProps) {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(6)].map((_, i) => (
          <WinnerSkeleton key={i} />
        ))}
      </div>
    )
  }

  // Sort by medal order (Gold > Silver > Bronze)
  const sorted = [...winners].sort((a, b) => {
    const order = ["Gold", "Silver", "Bronze"]
    const aIndex = order.indexOf(a.place || "")
    const bIndex = order.indexOf(b.place || "")
    
    // If both have valid medals, sort by order
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
    // If only one has a medal, it comes first
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
    // Neither has a medal, maintain original order
    return 0
  })

  return (
    <div className="grid md:grid-cols-2 gap-8 transition-opacity duration-300">
      {sorted.map((winner) => (
        <WinnerCard key={winner.id} winner={winner} />
      ))}
    </div>
  )
}