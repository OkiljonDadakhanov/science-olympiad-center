"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, Award, Globe, BookOpen } from "lucide-react"
import { Link } from "@/i18n/routing"

const upcomingOlympiads = [
  {
    id: 1,
    title: "International Mathematics Olympiad 2025",
    date: "2025-07-15",
    location: "Bath, United Kingdom",
    category: "International",
    participants: "6 students selected",
    description:
      "The most prestigious mathematics competition for high school students worldwide. Representing Uzbekistan on the global stage.",
    image: "/placeholder-e20to.png",
    registrationDeadline: "2025-03-01",
    categoryLink: "/olympiads/international",
  },
  {
    id: 2,
    title: "National Physics Olympiad 2025",
    date: "2025-04-20",
    location: "Tashkent, Uzbekistan",
    category: "Prestigious",
    participants: "Registration open",
    description:
      "National competition to select the best physics students for international representation. Join the elite ranks of Uzbekistan's top scientists.",
    image: "/placeholder-xz5xf.png",
    registrationDeadline: "2025-02-15",
    categoryLink: "/olympiads/prestigious",
  },
  {
    id: 3,
    title: "Regional Chemistry Competition",
    date: "2025-03-10",
    location: "Samarkand, Uzbekistan",
    category: "Local",
    participants: "150+ registered",
    description:
      "Regional chemistry competition for students across Central Asia. Perfect stepping stone to national competitions.",
    image: "/chemistry-laboratory-students-competition-beakers.jpg",
    registrationDeadline: "2025-02-01",
    categoryLink: "/olympiads/local",
  },
  {
    id: 4,
    title: "International Biology Olympiad 2025",
    date: "2025-08-10",
    location: "Astana, Kazakhstan",
    category: "International",
    participants: "4 students selected",
    description:
      "Explore the wonders of life sciences in this prestigious international competition. Showcase your biological knowledge globally.",
    image: "/placeholder-alo59.png",
    registrationDeadline: "2025-04-01",
    categoryLink: "/olympiads/international",
  },
]

export function OlympiadSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % upcomingOlympiads.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingOlympiads.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingOlympiads.length) % upcomingOlympiads.length)
  }

  const currentOlympiad = upcomingOlympiads[currentSlide]

  return (
    <>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              <span className="font-[family-name:var(--font-playfair)]">Upcoming</span>{" "}
              <span className="text-primary">Olympiads</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover the next opportunities to showcase your scientific knowledge on national and international
              stages. Join Uzbekistan's brightest minds in prestigious competitions.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square relative overflow-hidden">
                  <img
                    src={currentOlympiad.image || "/placeholder.svg"}
                    alt={currentOlympiad.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                    {currentOlympiad.category}
                  </Badge>
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
                      {currentOlympiad.title}
                    </h2>

                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-5 w-5 mr-3" />
                        <span className="text-lg">
                          {new Date(currentOlympiad.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-5 w-5 mr-3" />
                        <span className="text-lg">{currentOlympiad.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-5 w-5 mr-3" />
                        <span className="text-lg">{currentOlympiad.participants}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-lg">{currentOlympiad.description}</p>

                    <div className="pt-4 space-y-4">
                      <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        <strong>Registration deadline:</strong>{" "}
                        {new Date(currentOlympiad.registrationDeadline).toLocaleDateString()}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                          <Link href={currentOlympiad.categoryLink}>Learn More & Apply</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                          <Link href="/olympiads">View All Olympiads</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm shadow-lg h-12 w-12"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm shadow-lg h-12 w-12"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {upcomingOlympiads.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">International Medals</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
