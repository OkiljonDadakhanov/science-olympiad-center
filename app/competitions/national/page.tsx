import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Trophy, Clock, FileText } from "lucide-react"

export default function NationalOlympiadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">National Science Olympiads</h1>
              <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto text-pretty">
                Compete at the highest level and represent Uzbekistan in international competitions
              </p>
            </div>
          </div>
        </section>

        {/* Competition Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About National Olympiads</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  National Science Olympiads are the premier competitions in Uzbekistan, bringing together the most
                  talented students from across the country. Winners earn the opportunity to represent Uzbekistan at
                  international competitions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm text-gray-600">Subjects</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">2024 Competition Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium">Registration Opens</div>
                      <div className="text-sm text-gray-600">September 1, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Regional Qualifiers</div>
                      <div className="text-sm text-gray-600">October 15-30, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div>
                      <div className="font-medium">National Finals</div>
                      <div className="text-sm text-gray-600">December 10-15, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competition Subjects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Competition Subjects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  subject: "Mathematics",
                  description: "Advanced problem-solving in algebra, geometry, number theory, and combinatorics",
                  participants: "120 students",
                  duration: "4.5 hours",
                  format: "6 problems",
                  color: "bg-blue-500",
                },
                {
                  subject: "Physics",
                  description: "Theoretical and experimental physics covering mechanics, thermodynamics, and more",
                  participants: "100 students",
                  duration: "5 hours",
                  format: "Theory + Lab",
                  color: "bg-green-500",
                },
                {
                  subject: "Chemistry",
                  description: "Organic, inorganic, and physical chemistry with laboratory experiments",
                  participants: "90 students",
                  duration: "5 hours",
                  format: "Theory + Lab",
                  color: "bg-purple-500",
                },
                {
                  subject: "Biology",
                  description: "Cell biology, genetics, ecology, and anatomy with practical components",
                  participants: "85 students",
                  duration: "4 hours",
                  format: "Theory + Practical",
                  color: "bg-emerald-500",
                },
                {
                  subject: "Computer Science",
                  description: "Algorithms, data structures, and programming in multiple languages",
                  participants: "110 students",
                  duration: "5 hours",
                  format: "Programming tasks",
                  color: "bg-orange-500",
                },
              ].map((comp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 ${comp.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{comp.subject}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{comp.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{comp.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{comp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-400" />
                        <span>{comp.format}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Participate</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Register Online</h3>
                <p className="text-gray-600">
                  Complete your registration through our online portal. Submit required documents and academic
                  transcripts.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Regional Qualifier</h3>
                <p className="text-gray-600">
                  Participate in regional qualifying rounds held in major cities across Uzbekistan. Top performers
                  advance to nationals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">National Finals</h3>
                <p className="text-gray-600">
                  Compete in the national finals in Tashkent. Winners join the national team for international
                  competitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2023 Results */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">2023 Competition Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { subject: "Mathematics", gold: 3, silver: 5, bronze: 8, total: 16 },
                { subject: "Physics", gold: 2, silver: 6, bronze: 9, total: 17 },
                { subject: "Chemistry", gold: 4, silver: 4, bronze: 7, total: 15 },
                { subject: "Biology", gold: 2, silver: 5, bronze: 8, total: 15 },
                { subject: "Computer Science", gold: 3, silver: 6, bronze: 6, total: 15 },
              ].map((result, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{result.subject}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-yellow-600">🥇 Gold:</span>
                        <span className="font-semibold">{result.gold}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">🥈 Silver:</span>
                        <span className="font-semibold">{result.silver}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-600">🥉 Bronze:</span>
                        <span className="font-semibold">{result.bronze}</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>{result.total}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Compete?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Join hundreds of talented students and represent Uzbekistan on the world stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Download Guidelines
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
