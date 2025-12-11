
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight, Bell, ExternalLink } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "National Science Olympiad Registration",
    description:
      "Registration opens for the National Science Olympiad 2025. Don't miss this opportunity to showcase your scientific knowledge and compete with the best students across Uzbekistan.",
    date: "2024-10-15",
    time: "09:00 AM",
    endDate: "2024-12-15",
    location: "Online Registration",
    category: "Registration",
    participants: "Open to all",
    status: "Open",
    featured: true,
    image: "/national-olympiad-registration.jpg",
  },
  {
    id: 2,
    title: "International Biology Competition Prep",
    description:
      "Intensive preparation session for students selected for the International Biology Olympiad. This workshop will cover advanced topics and competition strategies.",
    date: "2024-10-20",
    time: "02:00 PM",
    endDate: "2024-10-22",
    location: "Science Olympiad Center, Tashkent",
    category: "Workshop",
    participants: "Selected students only",
    status: "Registration Required",
    featured: false,
    image: "/biology-prep-workshop.jpg",
  },
  {
    id: 3,
    title: "Science Fair Exhibition",
    description:
      "Annual science fair showcasing innovative projects from our talented students. Witness groundbreaking research and creative solutions to real-world problems.",
    date: "2024-11-01",
    time: "10:00 AM",
    endDate: "2024-11-03",
    location: "Tashkent Convention Center",
    category: "Exhibition",
    participants: "Public welcome",
    status: "Free Entry",
    featured: true,
    image: "/science-fair-exhibition.jpg",
  },
  {
    id: 4,
    title: "Mathematics Olympiad Training Camp",
    description:
      "Intensive 5-day training camp for mathematics olympiad preparation. Expert instructors will guide students through advanced problem-solving techniques.",
    date: "2024-11-15",
    time: "08:00 AM",
    endDate: "2024-11-19",
    location: "Science Olympiad Center",
    category: "Training",
    participants: "50 students",
    status: "Applications Open",
    featured: false,
    image: "/math-training-camp.jpg",
  },
  {
    id: 5,
    title: "International Physics Olympiad Team Selection",
    description:
      "Final selection round for the International Physics Olympiad team. Top performers will represent Uzbekistan at the global competition.",
    date: "2024-12-05",
    time: "09:00 AM",
    endDate: "2024-12-07",
    location: "National University of Uzbekistan",
    category: "Competition",
    participants: "Qualified students",
    status: "By Invitation",
    featured: true,
    image: "/physics-team-selection.jpg",
  },
  {
    id: 6,
    title: "Chemistry Laboratory Workshop",
    description:
      "Hands-on laboratory workshop focusing on advanced analytical techniques and experimental design for chemistry olympiad preparation.",
    date: "2024-12-20",
    time: "01:00 PM",
    endDate: "2024-12-22",
    location: "Chemistry Lab, SOC",
    category: "Workshop",
    participants: "30 students",
    status: "Registration Open",
    featured: false,
    image: "/chemistry-lab-workshop.jpg",
  },
]

const pastEvents = [
  {
    id: 7,
    title: "Summer Science Camp 2024",
    description:
      "Two-week intensive summer camp covering all olympiad subjects with hands-on experiments and projects.",
    date: "2024-07-15",
    location: "Science Olympiad Center",
    participants: "120 students",
    image: "/summer-science-camp.jpg",
  },
  {
    id: 8,
    title: "International Olympiad Send-off Ceremony",
    description: "Farewell ceremony for students representing Uzbekistan at international science olympiads.",
    date: "2024-06-20",
    location: "Ministry of Education",
    participants: "25 students + families",
    image: "/olympiad-sendoff-ceremony.jpg",
  },
]

const eventCategories = ["All", "Registration", "Workshop", "Exhibition", "Training", "Competition"]

export default function EventsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Creative Events Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='events' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='12' fill='none' stroke='%23007bff' stroke-width='2'/%3E%3Cline x1='25' y1='15' x2='25' y2='25' stroke='%23007bff' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='25' y1='25' x2='32' y2='25' stroke='%23007bff' stroke-width='1.5' stroke-linecap='round'/%3E%3Crect x='50' y='15' width='30' height='20' rx='2' fill='none' stroke='%23ff6b00' stroke-width='2'/%3E%3Cline x1='55' y1='22' x2='75' y2='22' stroke='%23ff6b00' stroke-width='1'/%3E%3Cline x1='55' y1='28' x2='70' y2='28' stroke='%23ff6b00' stroke-width='1'/%3E%3Cpath d='M 90 20 L 100 15 L 110 20 L 105 30 L 95 30 Z' fill='none' stroke='%2300aaff' stroke-width='2'/%3E%3Ccircle cx='102' cy='25' r='2' fill='%2300aaff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23events)'/%3E%3C/svg%3E")`,
          backgroundSize: '250px 250px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/70 via-white/80 to-blue-50/70 z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Events & <span className="text-primary">Activities</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Join us for competitions, workshops, training sessions, and exhibitions that advance scientific
                education and olympiad preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {eventCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Featured Events</h2>
              <p className="text-muted-foreground">Don't miss these important upcoming events</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event) => (
                  <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                      <Badge
                        variant={event.status === "Open" ? "default" : "secondary"}
                        className={`absolute top-4 right-4 ${event.status === "Open" ? "bg-green-600" : ""}`}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{event.category}</Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{new Date(event.date).getDate()}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString("en", { month: "short", year: "numeric" })}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.participants}</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <Button asChild>
                          <Link href={`/events/${event.id}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4 mr-2" />
                          Remind Me
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* All Upcoming Events */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Upcoming Events</h2>
              <p className="text-muted-foreground">Complete schedule of our upcoming activities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <Badge
                        variant={event.status === "Open" ? "default" : "secondary"}
                        className={event.status === "Open" ? "bg-green-600" : ""}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="text-2xl font-bold text-primary">{new Date(event.date).getDate()}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("en", { month: "short" })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {event.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                        <Link href={`/events/${event.id}`}>Details</Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bell className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Past Events */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Past Events</h2>
              <p className="text-muted-foreground">Recent activities and their highlights</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
