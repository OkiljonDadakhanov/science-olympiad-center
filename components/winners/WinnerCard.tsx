"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPlaceColor } from "@/lib/winners"

interface WinnerCardProps {
  winner: {
    id: number
    studentName: string
    age: number
    olympiadName: string
    region: string
    school: string
    place: string
    image: string
  }
}

export default function WinnerCard({ winner }: WinnerCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <div className="grid md:grid-cols-[180px_1fr] gap-0">
        <div className="aspect-square relative overflow-hidden rounded-l-lg">
          <img src={winner.image} alt={winner.studentName} className="object-cover w-full h-full" />
          <Badge className={`absolute top-3 left-3 ${getPlaceColor(winner.place)}`}>{winner.place}</Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-semibold mb-1">{winner.studentName}</h3>
          <p className="text-sm text-muted-foreground mb-2">Age: {winner.age}</p>
          <p className="text-primary font-medium mb-2">{winner.olympiadName}</p>
          <p className="text-sm text-muted-foreground">{winner.school}</p>
          <p className="text-sm text-muted-foreground">{winner.region}</p>
        </CardContent>
      </div>
    </Card>
  )
}
