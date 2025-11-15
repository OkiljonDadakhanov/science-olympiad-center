"use client"

import WinnerCard from "./WinnerCard"

interface WinnerShape {
  id: number
  studentName: string
  age?: number
  olympiadType?: string
  olympiadName?: string
  year?: number
  region?: string
  school?: string
  place?: string
  image?: string
}

interface WinnersGridProps {
  type: string
  year: string
  winners: WinnerShape[]
}

export default function WinnersGrid({ type, year, winners }: WinnersGridProps) {
  const filtered = (winners || [])
    .filter((w) => (type === "ALL" ? true : w.olympiadType === type))
    .filter((w) => (year === "ALL" ? true : w.year?.toString() === year))
    .sort((a, b) => {
      const order = ["Gold", "Silver", "Bronze"]
      return (order.indexOf(a.place || "") - order.indexOf(b.place || ""))
    })

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filtered.map((winner) => (
        <WinnerCard key={winner.id} winner={winner} />
      ))}
    </div>
  )
}
