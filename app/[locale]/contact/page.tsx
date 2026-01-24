
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Creative Contact Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='contact' x='0' y='0' width='150' height='150' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='8' fill='%23007bff'/%3E%3Cpath d='M 30 30 L 50 50' stroke='%23007bff' stroke-width='2'/%3E%3Crect x='50' y='50' width='20' height='15' rx='2' fill='%23007bff'/%3E%3Ccircle cx='100' cy='40' r='6' fill='%23ff6b00'/%3E%3Cpath d='M 100 40 L 120 60' stroke='%23ff6b00' stroke-width='2'/%3E%3Crect x='120' y='60' width='18' height='12' rx='2' fill='%23ff6b00'/%3E%3Ccircle cx='70' cy='100' r='7' fill='%2300aaff'/%3E%3Cpath d='M 70 100 L 90 120' stroke='%2300aaff' stroke-width='2'/%3E%3Crect x='90' y='120' width='16' height='10' rx='2' fill='%2300aaff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23contact)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/80 to-orange-50/70 z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Get in touch with our team for inquiries about programs, admissions, partnerships, or any questions
                about the Science Olympiad Center.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're here to help you on your scientific journey. Whether you're a student interested in our
                    programs, a parent seeking information, or an educator looking to collaborate, we'd love to hear
                    from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Address</h3>
                          <p className="text-muted-foreground">
                            Science Olympiad Center
                            <br />
                            Mirzo Ulugbek District
                            <br />
                            Tashkent 100174, Uzbekistan
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Phone</h3>
                          <p className="text-muted-foreground">
                            Main Office: +998 77 550 33 66
                            <br />
                            Admissions: +998 77 550 33 66
                            <br />
                            International: +998 77 550 33 66
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            General: info@scienceolympiad.uz
                            <br />
                            Admissions: admissions@scienceolympiad.uz
                            <br />
                            Press: media@scienceolympiad.uz
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0">
                          <Clock className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 9:00 AM - 2:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Visit Our Center
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Located in the heart of Tashkent, our modern facility is easily accessible by public transportation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Science Olympiad Center
                      <br />
                      Mirzo Ulugbek District, Tashkent
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
