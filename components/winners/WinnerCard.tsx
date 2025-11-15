"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, School, Medal } from "lucide-react"
import { getPlaceColor } from "@/lib/winners"

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
  Gold: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white border-none shadow-md",
  Silver: "bg-gradient-to-r from-gray-400 to-slate-500 text-white border-none shadow-md",
  Bronze: "bg-gradient-to-r from-amber-700 to-orange-600 text-white border-none shadow-md",
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
    <Card className="transition-all hover:shadow-lg rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-[180px_1fr] gap-0">
        {/* Image section */}
        <div className="aspect-square relative overflow-hidden">
          <img
            src={winner.image}
            alt={winner.studentName}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <Badge
            className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold rounded-full ${placeStyle}`}
          >
            {medalIcon} {winner.place}
          </Badge>
        </div>

        {/* Details section */}
        <CardContent className="p-5 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-1">{winner.studentName}</h3>
          <p className="text-sm text-muted-foreground mb-2">Age: {winner.age ?? "—"}</p>
          <p className="text-primary font-medium mb-3">{winner.olympiadName}</p>

          <div className="space-y-2 text-sm text-muted-foreground">
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
