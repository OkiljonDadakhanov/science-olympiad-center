import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, Globe, Award, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                About <span className="text-primary">Our Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Dedicated to nurturing scientific excellence and fostering the next generation of innovators through
                world-class olympiad training and international competitions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <Card className="border-primary/20 shadow-lg">
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold font-[family-name:var(--font-playfair)]">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To identify talented students, support them, and foster their interest in science.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To create opportunities for Uzbek youth to showcase their knowledge and skills through science
                        olympiads.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To effectively organize national and international competitions, contests, and projects that
                        contribute to improving the quality of education.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To strengthen the country's scientific potential and nurture future scientists.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-secondary/20 shadow-lg">
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 mx-auto">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl font-bold font-[family-name:var(--font-playfair)]">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To position Uzbekistan among the leading countries in international science olympiads.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To establish an innovative educational ecosystem where every talented student can fully realize
                        their potential.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To become a leading regional center for supporting olympiad participants.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        To nurture a new generation with high intellectual capacity, capable of competing on a global
                        scale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Our Impact
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Measuring success through the achievements of our students and the advancement of scientific education
                in Uzbekistan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground font-medium">Students Trained</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Talented students from across Uzbekistan have benefited from our comprehensive training programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground font-medium">International Medals</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our students have earned recognition at prestigious international science olympiads worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground font-medium">Countries Reached</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our students have competed in olympiads across multiple continents, representing Uzbekistan with
                    pride.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-muted-foreground font-medium">Expert Instructors</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Highly qualified educators and researchers dedicated to nurturing scientific excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                  <div className="text-muted-foreground font-medium">Success Rate</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Of our students successfully advance to national and international competition levels.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-muted-foreground font-medium">Years of Excellence</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    A decade of commitment to advancing scientific education and olympiad training in Uzbekistan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                We believe in a comprehensive approach that combines rigorous academic training with personal
                development and international exposure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Talent Identification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We actively seek and identify exceptional students with natural aptitude for scientific thinking and
                  problem-solving.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each student receives customized training programs tailored to their strengths, interests, and
                  competition goals.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Exposure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide opportunities for students to compete internationally and learn from the best minds
                  worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment extends beyond training, providing ongoing mentorship and career guidance for our
                  alumni.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
