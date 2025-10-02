import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target } from "lucide-react"

export default function ExpertCouncilPage() {
  const councilMembers = [
    {
      name: "Prof. Akmal Tursunov",
      subject: "Mathematics",
      role: "Chief Expert",
      achievements: "IMO Gold Medalist, 15+ years coaching experience",
      specialization: "Number Theory, Combinatorics",
    },
    {
      name: "Dr. Sevara Nazarova",
      subject: "Physics",
      role: "Senior Expert",
      achievements: "IPhO Silver Medalist, Research Physicist",
      specialization: "Theoretical Physics, Mechanics",
    },
    {
      name: "Prof. Rustam Kamilov",
      subject: "Chemistry",
      role: "Senior Expert",
      achievements: "IChO Gold Medalist, University Professor",
      specialization: "Organic Chemistry, Analytical Chemistry",
    },
    {
      name: "Dr. Dilnoza Rahmatova",
      subject: "Biology",
      role: "Senior Expert",
      achievements: "IBO Bronze Medalist, Molecular Biologist",
      specialization: "Genetics, Molecular Biology",
    },
    {
      name: "Eng. Sardor Abdullayev",
      subject: "Computer Science",
      role: "Senior Expert",
      achievements: "IOI Gold Medalist, Software Architect",
      specialization: "Algorithms, Data Structures",
    },
  ]

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
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our Expert Council consists of distinguished scientists, educators, and former olympiad champions who
              provide academic leadership and ensure the highest quality of education
            </p>
          </div>

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

          <Card className="border-0 shadow-lg mb-8">
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

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Council Members</h2>
            {councilMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto md:mx-0">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <div className="flex gap-2 mb-3">
                            <Badge variant="secondary">{member.subject}</Badge>
                            <Badge variant="outline">{member.role}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-800">Achievements: </span>
                          <span className="text-gray-600">{member.achievements}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">Specialization: </span>
                          <span className="text-gray-600">{member.specialization}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Meeting Schedule</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Monthly</div>
                  <div className="text-gray-600">Regular Council Meetings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Quarterly</div>
                  <div className="text-gray-600">Strategic Planning Sessions</div>
                </div>
                <div className="text-center">
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
