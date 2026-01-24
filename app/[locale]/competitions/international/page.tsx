
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Trophy, Users, MapPin, Calendar, Star } from "lucide-react"

export default function InternationalCompetitionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
     

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">International Science Olympiads</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-pretty">
                Representing Uzbekistan on the global stage of scientific excellence
              </p>
            </div>
          </div>
        </section>

        {/* International Competitions Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Competition Network</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our students compete in prestigious international olympiads, bringing honor to Uzbekistan and gaining
                invaluable experience on the world stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "International Mathematical Olympiad (IMO)",
                  location: "Japan 2024",
                  participants: "6 students",
                  achievements: "2 Gold, 1 Silver, 2 Bronze",
                  description: "The most prestigious mathematics competition for high school students worldwide.",
                  flag: "🇯🇵",
                },
                {
                  name: "International Physics Olympiad (IPhO)",
                  location: "Belarus 2024",
                  participants: "5 students",
                  achievements: "1 Gold, 2 Silver, 2 Bronze",
                  description: "Premier physics competition featuring theoretical and experimental challenges.",
                  flag: "🇧🇾",
                },
                {
                  name: "International Chemistry Olympiad (IChO)",
                  location: "Saudi Arabia 2024",
                  participants: "4 students",
                  achievements: "1 Gold, 1 Silver, 2 Bronze",
                  description: "Global chemistry competition with laboratory and theoretical components.",
                  flag: "🇸🇦",
                },
                {
                  name: "International Biology Olympiad (IBO)",
                  location: "Kazakhstan 2024",
                  participants: "4 students",
                  achievements: "2 Silver, 2 Bronze",
                  description: "Comprehensive biology competition covering all major biological disciplines.",
                  flag: "🇰🇿",
                },
                {
                  name: "International Olympiad in Informatics (IOI)",
                  location: "Egypt 2024",
                  participants: "4 students",
                  achievements: "1 Gold, 1 Silver, 1 Bronze",
                  description: "Premier programming and algorithmic problem-solving competition.",
                  flag: "🇪🇬",
                },
                {
                  name: "Asian Physics Olympiad (APhO)",
                  location: "Mongolia 2024",
                  participants: "8 students",
                  achievements: "3 Gold, 2 Silver, 3 Bronze",
                  description: "Regional physics olympiad for Asian countries with high participation.",
                  flag: "🇲🇳",
                },
              ].map((comp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="h-6 w-6 text-blue-500" />
                      <span className="text-2xl">{comp.flag}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{comp.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{comp.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{comp.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Team Size:</span>
                        <span className="font-medium">{comp.participants}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">2024 Results:</span>
                        <div className="font-medium text-green-600">{comp.achievements}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Team Selection Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">National Olympiad</h3>
                <p className="text-gray-600 text-sm">
                  Top performers from national competitions are invited to training camps.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Training Camp</h3>
                <p className="text-gray-600 text-sm">
                  Intensive 2-week training with expert coaches and advanced problem sets.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Final Selection</h3>
                <p className="text-gray-600 text-sm">Multiple selection tests determine the final team composition.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">International Competition</h3>
                <p className="text-gray-600 text-sm">
                  Selected students represent Uzbekistan at international olympiads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Performance */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Historical Performance (2020-2024)</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Medal Statistics</h3>
                <div className="space-y-4">
                  {[
                    { year: "2024", gold: 9, silver: 12, bronze: 15, total: 36 },
                    { year: "2023", gold: 7, silver: 14, bronze: 18, total: 39 },
                    { year: "2022", gold: 8, silver: 11, bronze: 16, total: 35 },
                    { year: "2021", gold: 6, silver: 13, bronze: 14, total: 33 },
                    { year: "2020", gold: 5, silver: 10, bronze: 17, total: 32 },
                  ].map((year, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-lg">{year.year}</span>
                        <Badge variant="outline">{year.total} medals</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-yellow-600 font-semibold">🥇 {year.gold}</div>
                          <div className="text-gray-500">Gold</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-400 font-semibold">🥈 {year.silver}</div>
                          <div className="text-gray-500">Silver</div>
                        </div>
                        <div className="text-center">
                          <div className="text-orange-600 font-semibold">🥉 {year.bronze}</div>
                          <div className="text-gray-500">Bronze</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Notable Achievements</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <div className="font-semibold">IMO 2024 - Perfect Score</div>
                          <div className="text-sm text-gray-600">
                            Akmal Karimov achieved a perfect score of 42/42 points, ranking 1st globally.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <div className="font-semibold">IPhO 2023 - Best Experimental</div>
                          <div className="text-sm text-gray-600">
                            Nilufar Rashidova won the special prize for best experimental solution.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <div className="font-semibold">IOI 2024 - Team Performance</div>
                          <div className="text-sm text-gray-600">
                            Uzbekistan ranked 8th globally, our best team performance in IOI history.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support and Preparation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preparation and Support</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    Expert Coaching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    World-class coaches including former olympiad winners and university professors provide personalized
                    training.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Individual mentoring sessions</li>
                    <li>• Advanced problem-solving techniques</li>
                    <li>• Mock competition environments</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-500" />
                    Training Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Structured training program spanning 8-10 months with intensive camps before international
                    competitions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Weekly training sessions</li>
                    <li>• Monthly assessment tests</li>
                    <li>• Pre-competition boot camps</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    Full Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complete support including travel, accommodation, and post-competition recognition and
                    opportunities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All expenses covered</li>
                    <li>• University admission benefits</li>
                    <li>• Alumni network access</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Dream of Representing Uzbekistan?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your journey to international recognition and scientific excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Apply to Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Training Schedule
              </Button>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}
