import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"

export default function BoardOfTrusteesPage() {
  const boardMembers = [
    {
      name: "Dr. Aziz Abdukarimov",
      position: "Chairman of the Board",
      background: "Former Minister of Higher Education, PhD in Mathematics",
      expertise: "Educational Policy, Mathematics Education",
      experience: "25+ years in educational leadership",
    },
    {
      name: "Prof. Malika Rahimova",
      position: "Vice Chairman",
      background: "Dean of Physics Faculty, Tashkent State University",
      expertise: "Physics Education, International Competitions",
      experience: "20+ years in academic leadership",
    },
    {
      name: "Dr. Bobur Karimov",
      position: "Board Member",
      background: "Director of Republican Specialized School of Physics and Mathematics",
      expertise: "Gifted Education, STEM Programs",
      experience: "18+ years in specialized education",
    },
    {
      name: "Prof. Nigora Sultanova",
      position: "Board Member",
      background: "Head of Chemistry Department, National University of Uzbekistan",
      expertise: "Chemistry Education, Research Methodology",
      experience: "22+ years in higher education",
    },
    {
      name: "Dr. Jasur Mirzaev",
      position: "Board Member",
      background: "Former Olympiad Champion, Software Engineering Expert",
      expertise: "Computer Science, Algorithm Design",
      experience: "15+ years in technology and education",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Board of Trustees</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our Board of Trustees comprises distinguished educators, researchers, and leaders who guide the strategic
              direction of the Science Olympiad Center
            </p>
          </div>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="text-2xl">Board Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Strategic Oversight</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Setting institutional vision and mission</li>
                    <li>• Approving strategic plans and budgets</li>
                    <li>• Monitoring organizational performance</li>
                    <li>• Ensuring educational quality standards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Governance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Policy development and approval</li>
                    <li>• Risk management oversight</li>
                    <li>• Stakeholder relationship management</li>
                    <li>• Compliance and regulatory oversight</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto md:mx-0">
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
                          <Badge variant="secondary" className="mb-3">
                            {member.position}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-800">Background: </span>
                          <span className="text-gray-600">{member.background}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">Expertise: </span>
                          <span className="text-gray-600">{member.expertise}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">Experience: </span>
                          <span className="text-gray-600">{member.experience}</span>
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
              <CardTitle className="text-2xl">Contact the Board</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">board@scienceolympiad.uz</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">+998 71 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-800">Address</div>
                    <div className="text-gray-600">Tashkent, Uzbekistan</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
