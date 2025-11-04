"use client"

import WinnerCard from "./WinnerCard"
import { winners } from "@/data/winners"

interface WinnersGridProps {
  type: string
  year: string
}

export default function WinnersGrid({ type, year }: WinnersGridProps) {
  const filtered = winners
    .filter((w) => (type === "ALL" ? true : w.olympiadType === type))
    .filter((w) => (year === "ALL" ? true : w.year.toString() === year))
    .sort((a, b) => {
      const order = ["Gold", "Silver", "Bronze"]
      return order.indexOf(a.place) - order.indexOf(b.place)
    })

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filtered.map((winner) => (
        <WinnerCard key={winner.id} winner={winner} />
      ))}
    </div>
  )
}
