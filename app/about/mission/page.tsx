
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users } from "lucide-react"


export default function MissionVisionPage() {
  return (
    <div className="min-h-screen">
 
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Mission & <span className="text-primary">Vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Our guiding principles and aspirations that drive everything we do at the Science Olympiad Center.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Mission */}
              <div>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Our Mission</h2>
                  <p className="text-xl text-muted-foreground">
                    The fundamental purpose that guides our daily operations and long-term strategy.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        Talent Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To identify talented students, support them, and foster their interest in science through
                        comprehensive training programs and mentorship opportunities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        Youth Empowerment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To create opportunities for Uzbek youth to showcase their knowledge and skills through science
                        olympiads and international competitions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        Educational Excellence
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To effectively organize national and international competitions, contests, and projects that
                        contribute to improving the quality of education.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Eye className="h-6 w-6 text-primary" />
                        Scientific Advancement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To strengthen the country's scientific potential and nurture future scientists who will drive
                        innovation and discovery.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Vision */}
              <div>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6">
                    <Eye className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Our Vision</h2>
                  <p className="text-xl text-muted-foreground">
                    The future we envision and are working tirelessly to achieve.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-secondary" />
                        Global Recognition
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To position Uzbekistan among the leading countries in international science olympiads,
                        establishing our nation as a powerhouse of scientific talent.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-secondary" />
                        Innovation Ecosystem
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To establish an innovative educational ecosystem where every talented student can fully realize
                        their potential and contribute to scientific advancement.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-secondary" />
                        Regional Leadership
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To become a leading regional center for supporting olympiad participants, serving as a model for
                        other nations in Central Asia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Eye className="h-6 w-6 text-secondary" />
                        Future Scientists
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        To nurture a new generation with high intellectual capacity, capable of competing on a global
                        scale and driving scientific innovation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Join Our Mission
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Whether you're a talented student, dedicated educator, or supportive parent, there's a place for you in
                our mission to advance scientific education in Uzbekistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Explore Programs
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  )
}
