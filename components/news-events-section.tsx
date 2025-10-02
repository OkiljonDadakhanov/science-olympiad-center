import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "International Physics Olympiad 2024 Results",
    description:
      "Our students achieved remarkable success at the International Physics Olympiad, bringing home 3 gold medals and 2 silver medals.",
    date: "2024-09-15",
    category: "Achievement",
    image: "/physics-olympiad-medal-ceremony.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "New Mathematics Program Launch",
    description:
      "We're excited to announce our advanced mathematics program designed for exceptional students preparing for international competitions.",
    date: "2024-09-10",
    category: "Program",
    image: "/mathematics-classroom-students.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Chemistry Lab Renovation Complete",
    description:
      "Our state-of-the-art chemistry laboratory has been fully renovated with modern equipment to enhance practical learning experiences.",
    date: "2024-09-05",
    category: "Facility",
    image: "/modern-chemistry-laboratory.jpg",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "National Science Olympiad Registration",
    date: "2024-10-15",
    time: "09:00 AM",
    description:
      "Registration opens for the National Science Olympiad 2025. Don't miss this opportunity to showcase your scientific knowledge.",
  },
  {
    id: 2,
    title: "International Biology Competition Prep",
    date: "2024-10-20",
    time: "02:00 PM",
    description: "Intensive preparation session for students selected for the International Biology Olympiad.",
  },
  {
    id: 3,
    title: "Science Fair Exhibition",
    date: "2024-11-01",
    time: "10:00 AM",
    description: "Annual science fair showcasing innovative projects from our talented students.",
  },
]

export function NewsEventsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            Latest News & Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Stay updated with our latest achievements, program announcements, and upcoming competitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">Recent News</h3>
              <Button variant="outline" asChild>
                <Link href="/news">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  className={`transition-all hover:shadow-lg ${item.featured ? "border-primary/20" : ""}`}
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    {item.featured && <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">Upcoming Events</h3>
              <Button variant="outline" asChild>
                <Link href="/events">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="text-2xl font-bold text-primary">{new Date(event.date).getDate()}</div>
                        <div className="text-sm text-muted-foreground uppercase">
                          {new Date(event.date).toLocaleDateString("en", { month: "short" })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
