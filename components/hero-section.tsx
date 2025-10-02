"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Users, Globe, Calendar, MapPin, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"

const upcomingOlympiads = [
  {
    id: 1,
    title: "International Mathematics Olympiad 2025",
    date: "2025-07-15",
    location: "Bath, United Kingdom",
    category: "International",
    participants: "6 students selected",
    tagline: "The most prestigious mathematics event of the year",
    description: "Representing Uzbekistan on the global stage in the world's premier mathematics competition.",
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
    tagline: "Gateway to international physics excellence",
    description: "National competition to select the best physics students for international representation.",
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
    tagline: "Perfect stepping stone to national competitions",
    description: "Regional chemistry competition for students across Central Asia.",
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
    tagline: "Explore the wonders of life sciences globally",
    description: "Showcase your biological knowledge in this prestigious international competition.",
    image: "/placeholder-alo59.png",
    registrationDeadline: "2025-04-01",
    categoryLink: "/olympiads/international",
  },
]

export function HeroSection() {
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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary/20 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            <span className="font-[family-name:var(--font-playfair)]">Empowering</span>{" "}
            <span className="text-primary">Young Scientists</span>{" "}
            <span className="font-[family-name:var(--font-playfair)]">Through</span>{" "}
            <span className="text-primary">International Olympiads</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
            Discover, prepare, and compete in prestigious science competitions worldwide. Join Uzbekistan's brightest
            minds in their journey to scientific excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/olympiads">
                View Upcoming Olympiads <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/programs">Join as a Student</Link>
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Upcoming</span> Competitions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss these exciting opportunities to showcase your scientific knowledge
            </p>
          </div>

          <div className="relative">
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
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-balance leading-tight mb-2">
                        {currentOlympiad.title}
                      </h3>
                      <p className="text-primary font-medium text-lg italic">{currentOlympiad.tagline}</p>
                    </div>

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

                    <p className="text-muted-foreground leading-relaxed">{currentOlympiad.description}</p>

                    <div className="pt-4">
                      <Button size="lg" className="w-full sm:w-auto" asChild>
                        <Link href={currentOlympiad.categoryLink}>
                          Learn More & Apply <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries Represented</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">20</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
                Our Mission: <span className="text-primary">Nurturing Scientific Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-balance">
                At Sirius Science Olympiad Center, we believe every student has the potential to excel in science. Our
                comprehensive programs combine rigorous academic training with mentorship from world-class experts,
                preparing students not just for competitions, but for lifelong scientific discovery and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Mentorship</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn from Olympic medalists and renowned scientists
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Comprehensive Training</h3>
                    <p className="text-sm text-muted-foreground">
                      Structured programs covering all major science disciplines
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Network</h3>
                    <p className="text-sm text-muted-foreground">Connect with peers and mentors worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">Track record of international competition success</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Recent</span> Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our students' outstanding performances in international competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Gold Medal
                  </Badge>
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">IMO 2024</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Akmal Rakhimov secured gold at the International Mathematics Olympiad in Bath, UK
                </p>
                <div className="text-xs text-muted-foreground">September 2024</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    Silver Medal
                  </Badge>
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">IPhO 2024</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dilshoda Karimova earned silver at the International Physics Olympiad in Isfahan, Iran
                </p>
                <div className="text-xs text-muted-foreground">July 2024</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Bronze Medal
                  </Badge>
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">IChO 2024</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sardor Umarov achieved bronze at the International Chemistry Olympiad in Riyadh, Saudi Arabia
                </p>
                <div className="text-xs text-muted-foreground">July 2024</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/about/winners">
                View All Achievements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <span className="text-sm mb-2">Scroll to Learn More</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
