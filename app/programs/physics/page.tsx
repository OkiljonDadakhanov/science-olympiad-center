
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Atom, Zap, Thermometer, Waves, Telescope, Users, Clock, Trophy, BookOpen } from "lucide-react"

export default function PhysicsProgramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
     

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Physics Olympiad Program</h1>
                <p className="text-xl text-green-100 mb-8 text-pretty">
                  Master the fundamental laws of nature through theoretical understanding and experimental discovery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Theoretical Physics
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Experimental Methods
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Problem Solving
                  </Badge>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Program Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">85</div>
                    <div className="text-sm text-green-100">Active Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-green-100">Expert Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-green-100">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-sm text-green-100">Int'l Medals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Physics Training</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our physics program combines rigorous theoretical training with hands-on experimental work, preparing
                students for the highest levels of international competition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Atom,
                  title: "Classical Mechanics",
                  description: "Kinematics, dynamics, energy, momentum, rotational motion, and oscillations",
                  topics: ["Newton's Laws", "Conservation Laws", "Rigid Body Dynamics", "Simple Harmonic Motion"],
                },
                {
                  icon: Zap,
                  title: "Electromagnetism",
                  description: "Electric fields, magnetic fields, electromagnetic induction, and AC circuits",
                  topics: ["Coulomb's Law", "Gauss's Law", "Faraday's Law", "Maxwell's Equations"],
                },
                {
                  icon: Thermometer,
                  title: "Thermodynamics",
                  description: "Heat, temperature, entropy, and the laws of thermodynamics",
                  topics: ["Ideal Gas Law", "Heat Engines", "Entropy", "Phase Transitions"],
                },
                {
                  icon: Waves,
                  title: "Wave Physics & Optics",
                  description: "Wave properties, interference, diffraction, and geometric optics",
                  topics: ["Wave Equation", "Interference", "Diffraction", "Lens Systems"],
                },
              ].map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                    <div className="space-y-1">
                      {area.topics.map((topic, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Facilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              State-of-the-Art Laboratory Facilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Telescope className="h-5 w-5 text-blue-500" />
                    Optics Laboratory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Advanced optical equipment for experiments in geometric and wave optics, including laser
                    interferometry and spectroscopy.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Helium-Neon lasers</li>
                    <li>• Michelson interferometer</li>
                    <li>• Spectrometers and diffraction gratings</li>
                    <li>• Polarization equipment</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    Electronics Lab
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Modern electronics equipment for studying AC/DC circuits, electromagnetic phenomena, and digital
                    electronics.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital oscilloscopes</li>
                    <li>• Function generators</li>
                    <li>• Multimeters and power supplies</li>
                    <li>• Circuit simulation software</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Atom className="h-5 w-5 text-purple-500" />
                    Mechanics Lab
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Precision instruments for studying motion, forces, energy, and rotational dynamics with
                    computer-assisted data collection.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Motion sensors and force probes</li>
                    <li>• Rotational apparatus</li>
                    <li>• Pendulum systems</li>
                    <li>• Data acquisition systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Schedule */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Training Schedule & Structure</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Weekly Schedule</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday", activity: "Theoretical Physics Lecture", time: "16:00-18:00", type: "theory" },
                    { day: "Wednesday", activity: "Problem Solving Session", time: "16:00-18:00", type: "practice" },
                    { day: "Friday", activity: "Laboratory Experiments", time: "16:00-19:00", type: "lab" },
                    { day: "Saturday", activity: "Mock Competitions", time: "09:00-13:00", type: "competition" },
                  ].map((session, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{session.day}</span>
                        <Badge
                          variant={
                            session.type === "theory"
                              ? "default"
                              : session.type === "practice"
                                ? "secondary"
                                : session.type === "lab"
                                  ? "destructive"
                                  : "outline"
                          }
                        >
                          {session.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">{session.activity}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {session.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Program Levels</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Foundation Level</CardTitle>
                      <div className="text-sm text-gray-600">Grades 9-10 • 6 months</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">
                        Basic physics concepts, problem-solving techniques, and introduction to experimental methods.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          25 students
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />8 hours/week
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Advanced Level</CardTitle>
                      <div className="text-sm text-gray-600">Grades 10-11 • 8 months</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">
                        Advanced topics, complex problem solving, and intensive laboratory work.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          15 students
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          12 hours/week
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Elite Level</CardTitle>
                      <div className="text-sm text-gray-600">Grade 11-12 • 10 months</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">
                        Olympiad-level problems, research projects, and international competition preparation.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />8 students
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          16 hours/week
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dilshod Karimov",
                  achievement: "IPhO 2024 Gold Medal",
                  description:
                    "Scored 47.2/50 points, ranking 12th globally in the International Physics Olympiad in Belarus.",
                  university: "MIT Physics Program",
                  year: "2024",
                },
                {
                  name: "Malika Tashkentova",
                  achievement: "APhO 2024 Gold Medal",
                  description:
                    "Perfect score in theoretical section of Asian Physics Olympiad, special recognition for experimental work.",
                  university: "Cambridge University",
                  year: "2024",
                },
                {
                  name: "Bobur Samarkandov",
                  achievement: "National Champion 2023",
                  description:
                    "First place in National Physics Olympiad, leading to selection for international team training.",
                  university: "Stanford Physics",
                  year: "2023",
                },
              ].map((student, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{student.name}</CardTitle>
                        <div className="text-sm text-green-600 font-medium">{student.achievement}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{student.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{student.university}</span>
                      <span>{student.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Information */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Physics?</h2>
            <p className="text-xl mb-8 text-green-100">
              Join our elite physics program and unlock the secrets of the universe.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">Sep 15</div>
                <div className="text-sm">Application Deadline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">Oct 1</div>
                <div className="text-sm">Entrance Exam</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">Oct 15</div>
                <div className="text-sm">Program Starts</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}
