"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, School } from "lucide-react"

interface WinnerProps {
  winner: {
    id: number
    studentName: string
    grade?: number
    olympiadName?: string
    region?: string
    school?: string
    place?: string
    image?: string
    year?: number
  }
}

const placeStyles: Record<string, string> = {
  Gold: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white border-none shadow-md",
  Silver: "bg-gradient-to-r from-gray-300 to-slate-500 text-white border-none shadow-md",
  Bronze: "bg-gradient-to-r from-amber-700 to-orange-600 text-white border-none shadow-md",
}

const placeEmojis: Record<string, string> = {
  Gold: "🥇",
  Silver: "🥈",
  Bronze: "🥉",
}

export default function WinnerCard({ winner }: WinnerProps) {
  const normalizePlace = (p?: string) => {
    if (!p) return ""
    const map: Record<string, string> = {
      Oltin: "Gold",
      Kumush: "Silver",
      Bronza: "Bronze",
      Gold: "Gold",
      Silver: "Silver",
      Bronze: "Bronze",
    }
    return map[p] ?? p
  }

  const norm = normalizePlace(winner.place)
  const placeStyle = placeStyles[norm || ""] || "bg-primary text-white"
  const medalIcon = placeEmojis[norm || ""] || "🏅"

  return (
    <Card className="transition-all hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-[180px_1fr]">

        {/* ─── IMAGE ───────────────────────────────────────────── */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={winner.image}
            alt={winner.studentName}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />

          {/* Medal → bottom-left */}
          <Badge
            className={`absolute bottom-3 left-3 px-3 py-1.5 text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg ${placeStyle}`}
          >
            {medalIcon} {winner.place}
          </Badge>

          {/* Subtle top gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* ─── CONTENT ─────────────────────────────────────────── */}
        <CardContent className="p-6 flex flex-col justify-center space-y-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {winner.studentName}
          </h3>

          <p className="text-sm text-gray-500">
            Grade: <span className="font-medium text-gray-700">{winner.grade ?? "—"}</span>
          </p>

          {winner.olympiadName && (
            <p className="text-primary font-semibold text-sm">
              {winner.olympiadName}
            </p>
          )}

          <div className="space-y-2 pt-2 text-sm text-gray-600">
            {winner.year && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary/80" />
                {winner.year}
              </div>
            )}

            <div className="flex items-center">
              <School className="h-4 w-4 mr-2 text-primary/80" />
              {winner.school ?? "—"}
            </div>

            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary/80" />
              {winner.region ?? "—"}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
