import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"

const testimonials = [
  {
    id: 1,
    studentName: "Aziza Karimova",
    olympiadName: "International Mathematics Olympiad",
    place: "Gold Medal",
    region: "Tashkent",
    quote:
      "The Science Olympiad Center provided me with world-class training and mentorship. The rigorous preparation and expert guidance helped me achieve my dream of winning gold at the IMO.",
    image: "/winner-aziza-karimova.jpg",
  },
  {
    id: 2,
    studentName: "Bobur Rahimov",
    olympiadName: "International Physics Olympiad",
    place: "Silver Medal",
    region: "Samarkand",
    quote:
      "The comprehensive physics program and hands-on laboratory experience at the center were instrumental in my success. I'm grateful for the opportunity to represent Uzbekistan.",
    image: "/winner-bobur-rahimov.jpg",
  },
  {
    id: 3,
    studentName: "Malika Tursunova",
    olympiadName: "International Chemistry Olympiad",
    place: "Bronze Medal",
    region: "Bukhara",
    quote:
      "The center's chemistry program challenged me to think critically and develop strong analytical skills. The support from instructors was exceptional throughout my journey.",
    image: "/winner-malika-tursunova.jpg",
  },
]

const getPlaceColor = (place: string) => {
  if (place.includes("Gold")) return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
  if (place.includes("Silver")) return "bg-gray-500/10 text-gray-700 border-gray-500/20"
  if (place.includes("Bronze")) return "bg-orange-500/10 text-orange-700 border-orange-500/20"
  return "bg-primary/10 text-primary border-primary/20"
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Hear from our champions who have achieved remarkable success in international olympiad competitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=80&width=80&query=student portrait"}
                      alt={testimonial.studentName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{testimonial.studentName}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.region}</p>
                  <Badge className={`${getPlaceColor(testimonial.place)} mb-2`}>{testimonial.place}</Badge>
                  <p className="text-sm font-medium text-primary">{testimonial.olympiadName}</p>
                </div>

                <blockquote className="text-muted-foreground text-center italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/about/winners">
              Meet All Our Winners <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
