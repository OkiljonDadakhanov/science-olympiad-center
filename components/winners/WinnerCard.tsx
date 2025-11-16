"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, School } from "lucide-react"

interface WinnerCardProps {
  winner: {
    id: number
    studentName: string
    age?: number
    olympiadName?: string
    region?: string
    school?: string
    place?: string
    image?: string
    year?: number
  }
}

const placeStyles: Record<string, string> = {
  Gold: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-md",
  Silver: "bg-gradient-to-r from-gray-400 to-slate-500 text-white shadow-md",
  Bronze: "bg-gradient-to-r from-amber-700 to-orange-600 text-white shadow-md",
}

const placeEmojis: Record<string, string> = {
  Gold: "🥇",
  Silver: "🥈",
  Bronze: "🥉",
}

export default function WinnerCard({ winner }: WinnerCardProps) {
  const placeStyle = placeStyles[winner.place || ""] || "bg-primary text-white"
  const medalIcon = placeEmojis[winner.place || ""] || "🏅"

  return (
    <Card className="transition-all hover:shadow-xl rounded-2xl overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-[180px_1fr] gap-0">

        {/* Image */}
        <div className="relative">
          <img
            src={winner.image}
            alt={winner.studentName}
            className="object-cover w-full h-full aspect-square rounded-l-2xl"
          />

          {/* Soft bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Medal moved to bottom-right */}
          <Badge
            className={`absolute bottom-3 right-3 px-3 py-1 text-sm font-semibold rounded-full ${placeStyle}`}
          >
            {medalIcon} {winner.place}
          </Badge>
        </div>

        {/* Details */}
        <CardContent className="p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
            {winner.studentName}
          </h3>

          <p className="text-sm text-gray-500 mb-2">
            Grade: <span className="font-medium text-gray-700">{winner.age ?? "—"}</span>
          </p>

          <p className="text-primary font-medium mb-4">
            {winner.olympiadName}
          </p>

          <div className="space-y-2 text-sm text-gray-600">
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
