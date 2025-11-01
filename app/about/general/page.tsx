"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Globe, BookOpen } from "lucide-react"

export default function GeneralInformationPage() {
  const stats = [
    { icon: Users, label: "Active Students", value: "15,000+" },
    { icon: Award, label: "International Medals", value: "60+" },
    { icon: Globe, label: "Partner Countries", value: "3+" },
    { icon: BookOpen, label: "Programs & Courses", value: "40+" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              General Information
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The Science Olympiad Center is a state educational institution under the Agency for Specialized Educational Institutions of the Ministry of Preschool and School Education of the Republic of Uzbekistan.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* About */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">About the Center</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-4">
                <p>
                  The Science Olympiad Center is an educational and organizational institution established as a state organization under the Agency for Specialized Educational Institutions of the Ministry of Preschool and School Education.
                </p>
                <p>
                  The Center operates based on the advanced initiatives of the President of the Republic of Uzbekistan with the goal of identifying gifted students, developing their scientific potential, and preparing internationally competitive specialists.
                </p>
                <p>
                  Its mission is to establish a system for early identification, development, and international preparation of talented students through science olympiads, competitions, and academic challenges under the guidance of qualified mentors.
                </p>
              </CardContent>
            </Card>

            {/* Development Stages */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Stages of Development and Achievements</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">2023:</h3>
                  <p>
                    Developed mechanisms for coordinating Olympiads nationwide through a unified digital platform. The “Olympiad Management System” was launched, registering over 10,000 students digitally.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">2024:</h3>
                  <p>
                    Expanded with international training programs in mathematics, physics, informatics, and robotics. Over 200 teachers participated in seminars, and the first “Forum of Gifted Youth” hosted 500 students and 80 trainers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">2025 (Current Year):</h3>
                  <p>
                    Signed memoranda with Olympiad training centers in Turkey, South Korea, and Kazakhstan. Uzbek students achieved record-breaking results at international Olympiads. The National Olympiad Network was launched.
                  </p>
                  <ul className="mt-4 space-y-1">
                    <li>• IMO – 4 Silver, 1 Bronze</li>
                    <li>• IOI – 1 Silver, 1 Bronze</li>
                    <li>• WMI – 3 Gold, 3 Silver, 4 Bronze</li>
                    <li>• IChO – 4 Gold, 2 Silver, 7 Bronze</li>
                    <li>• ZIO – 2 Gold, 5 Silver, 12 Bronze</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Key Objectives */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">Key Objectives</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engage gifted students and teachers nationwide.</li>
                  <li>Create equal opportunities for all students to realize their potential.</li>
                  <li>Involve talented students in research and intellectual activities.</li>
                  <li>Systematize Olympiad preparation and evaluation mechanisms.</li>
                  <li>Enhance science education through modern methodologies.</li>
                  <li>Promote transparency, openness, and efficiency in education management.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Principles */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Strategic Principles</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Supporting the Best</h4>
                  <p>Focus on mentor–student systems, long-term engagement, and supporting winners’ academic growth.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership</h4>
                  <p>Develop leadership, responsibility, communication, and project management among students.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuity of Knowledge</h4>
                  <p>Integrate modern educational technologies to ensure ongoing improvement.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Exchange and Integration</h4>
                  <p>Combine national and international best practices to improve teaching and learning quality.</p>
                </div>
              </CardContent>
            </Card>

            {/* Future Directions */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">Future Directions</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-4">
                <p>
                  By 2026, the Center plans to establish the “Olympiad Academy,” create international methodological labs, and form a national Olympiad brand.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Science and Technology Synergy:</strong> Combining innovation, research, and analytical development.</li>
                  <li><strong>Uniting Talented Youth:</strong> Strengthening collaboration and creativity across disciplines.</li>
                  <li><strong>Broadening Horizons:</strong> Offering master classes, seminars, and expert-led lab sessions.</li>
                  <li><strong>Transparency and Fairness:</strong> Ensuring open, merit-based student selection.</li>
                  <li><strong>Fostering Creativity:</strong> Encouraging innovation and social impact through team projects.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Board of Trustees */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Board of Trustees</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-3">
                <p><strong>Chairperson:</strong> President of the Republic of Uzbekistan</p>
                <p><strong>Deputy Chairperson:</strong> Minister of Preschool and School Education</p>
                <p><strong>Secretary:</strong> Director of the Agency for Specialized Educational Institutions</p>
                <p className="font-semibold mt-4">Members include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>President of the Academy of Sciences</li>
                  <li>Minister of Digital Technologies</li>
                  <li>Minister of Innovative Development</li>
                  <li>Rector of Tashkent State University</li>
                  <li>Director of Presidential Schools in Tashkent</li>
                  <li>Laureates and trainers from international Olympiads</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  The Board defines strategic directions and oversees international cooperation. Its work follows Presidential Decree No. PQ-346 (Sept 30, 2024).
                </p>
              </CardContent>
            </Card>

            {/* Legal Documents */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">Legal Documents of the Center</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-gray-700 space-y-3">
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Charter:</strong> Defines legal status, objectives, and management structure.</li>
                  <li><strong>License:</strong> Authorizes organization of educational and international preparatory programs.</li>
                  <li><strong>Certificate of State Registration:</strong> Confirms registration as a state institution under the Ministry of Justice.</li>
                  <li>
                    <strong>Activity Reports:</strong> 
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>2023 – Introduced new Olympiad formats and guidelines.</li>
                      <li>2024 – National Program for International Olympiad Preparation (6 gold, 9 silver, 11 bronze).</li>
                      <li>2025 – Established regional centers, launched National Olympiad Network, and signed cooperation MoUs with Turkey, Korea, and Kazakhstan.</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
