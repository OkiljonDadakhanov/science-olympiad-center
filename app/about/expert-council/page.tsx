"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target } from "lucide-react"

export default function ExpertCouncilPage() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchMentors() {
      try {
        const res = await fetch("https://api.olympcenter.uz/api/mentors/")
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setMembers(data.results || [])
      } catch (err) {
        setError("Failed to load council members")
      } finally {
        setLoading(false)
      }
    }
    fetchMentors()
  }, [])

  const responsibilities = [
    {
      icon: BookOpen,
      title: "Curriculum Development",
      description: "Design and review training curricula for each subject area",
    },
    {
      icon: Users,
      title: "Student Assessment",
      description: "Evaluate student performance and provide feedback",
    },
    {
      icon: Award,
      title: "Competition Preparation",
      description: "Prepare students for national and international competitions",
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Ensure high standards in all educational programs",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Expert Council</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Expert Council consists of distinguished educators and subject experts who
              contribute to high-quality olympiad preparation and academic excellence.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {responsibilities.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Council structure */}
          <Card className="border-0 shadow-lg mb-12">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="text-2xl">Council Structure & Functions</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Academic Functions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Develop subject-specific training programs</li>
                    <li>• Create assessment criteria and standards</li>
                    <li>• Review and approve educational materials</li>
                    <li>• Conduct regular academic evaluations</li>
                    <li>• Provide mentorship to students and teachers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Strategic Functions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advise on educational policy and direction</li>
                    <li>• Establish partnerships with international organizations</li>
                    <li>• Recommend improvements to training methods</li>
                    <li>• Support research and innovation initiatives</li>
                    <li>• Ensure alignment with global standards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Council members */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Council Members</h2>

            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member: any) => (
                  <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={member.photo_url}
                          alt={member.full_name}
                          className="w-32 h-32 rounded-full object-cover shadow mb-4"
                        />

                        <h3 className="text-xl font-bold text-gray-900">{member.full_name}</h3>

                        <div className="flex flex-wrap justify-center gap-2 mt-3">
  <Badge 
    variant="secondary"
    className="max-w-full whitespace-normal break-words px-2 py-1 text-center"
  >
    {member.subject}
  </Badge>

  <Badge 
    variant="outline"
    className="max-w-full whitespace-normal break-words px-2 py-1 text-center"
  >
    {member.position}
  </Badge>
</div>


                        <div className="mt-4 text-gray-600 text-sm space-y-1">
                          <p>
                            <span className="font-semibold text-gray-800">Region: </span>
                            {member.region}
                          </p>
                          {member.institution && (
                            <p>
                              <span className="font-semibold text-gray-800">Institution: </span>
                              {member.institution}
                            </p>
                          )}
                          {member.year && (
                            <p>
                              <span className="font-semibold text-gray-800">Year: </span>
                              {member.year}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Meeting schedule */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Meeting Schedule</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-2">Monthly</div>
                  <div className="text-gray-600">Regular Council Meetings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-2">Quarterly</div>
                  <div className="text-gray-600">Strategic Planning Sessions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-2">Annually</div>
                  <div className="text-gray-600">Comprehensive Program Review</div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
