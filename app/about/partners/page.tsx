import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Award, Building, ExternalLink } from "lucide-react"

export default function PartnersPage() {
  const internationalPartners = [
    {
      name: "International Mathematical Olympiad (IMO)",
      country: "Global",
      type: "Competition Organization",
      partnership: "Official Participation",
      description: "Global mathematics competition for high school students",
      website: "imo-official.org",
    },
    {
      name: "International Physics Olympiad (IPhO)",
      country: "Global",
      type: "Competition Organization",
      partnership: "Official Participation",
      description: "Premier international physics competition",
      website: "ipho-unofficial.org",
    },
    {
      name: "Sirius Educational Center",
      country: "Russia",
      type: "Educational Institution",
      partnership: "Academic Collaboration",
      description: "Leading center for gifted education in Russia",
      website: "sochisirius.ru",
    },
    {
      name: "AIMO (Asian International Mathematical Olympiad)",
      country: "Asia-Pacific",
      type: "Regional Organization",
      partnership: "Regional Participation",
      description: "Regional mathematics olympiad for Asian countries",
      website: "aimo.org",
    },
  ]

  const domesticPartners = [
    {
      name: "Ministry of Public Education",
      location: "Tashkent",
      type: "Government Agency",
      partnership: "Official Oversight",
      description: "Primary governmental partner and oversight body",
    },
    {
      name: "National University of Uzbekistan",
      location: "Tashkent",
      type: "Higher Education",
      partnership: "Academic Collaboration",
      description: "Research collaboration and faculty exchange",
    },
    {
      name: "Tashkent State Technical University",
      location: "Tashkent",
      type: "Technical University",
      partnership: "STEM Programs",
      description: "Engineering and technology program development",
    },
    {
      name: "Republican Specialized School",
      location: "Multiple Cities",
      type: "Secondary Education",
      partnership: "Student Pipeline",
      description: "Talent identification and student preparation",
    },
  ]

  const schoolPartners = [
    {
      name: "Specialized Physics-Mathematics School #1",
      location: "Tashkent",
      students: "450+",
      established: "2018",
    },
    {
      name: "International School of Tashkent",
      location: "Tashkent",
      students: "320+",
      established: "2019",
    },
    {
      name: "Samarkand Specialized Science School",
      location: "Samarkand",
      students: "280+",
      established: "2020",
    },
    {
      name: "Bukhara Regional Science Center",
      location: "Bukhara",
      students: "200+",
      established: "2021",
    },
    {
      name: "Fergana Valley STEM Academy",
      location: "Fergana",
      students: "350+",
      established: "2020",
    },
    {
      name: "Nukus Science Olympiad School",
      location: "Nukus",
      students: "180+",
      established: "2022",
    },
  ]

  const partnershipStats = [
    { icon: Globe, label: "International Partners", value: "15+" },
    { icon: Building, label: "Domestic Institutions", value: "25+" },
    { icon: Users, label: "Partner Schools", value: "50+" },
    { icon: Award, label: "Joint Programs", value: "30+" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We collaborate with leading educational institutions, competition organizations, and schools worldwide to
              provide the best opportunities for our students
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {partnershipStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">International Partners</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {internationalPartners.map((partner, index) => (
                  <div key={index} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg text-gray-900">{partner.name}</h4>
                        <Badge variant="outline">{partner.country}</Badge>
                        <Badge variant="secondary">{partner.type}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{partner.description}</p>
                      <div className="text-sm text-gray-500">
                        Partnership: <span className="font-medium">{partner.partnership}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <a
                        href={`https://${partner.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="text-2xl">Domestic Partners</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {domesticPartners.map((partner, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-lg text-gray-900">{partner.name}</h4>
                      <Badge variant="outline">{partner.type}</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{partner.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📍 {partner.location}</span>
                      <span>🤝 {partner.partnership}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="text-2xl">Partner Schools Network</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schoolPartners.map((school, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{school.name}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>📍 {school.location}</div>
                      <div>👥 {school.students} students</div>
                      <div>📅 Partnership since {school.established}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardTitle className="text-2xl">Partnership Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">For Educational Institutions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Student exchange programs</li>
                    <li>• Faculty collaboration and training</li>
                    <li>• Joint research projects</li>
                    <li>• Curriculum development partnerships</li>
                    <li>• Resource and facility sharing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">For Organizations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Competition hosting and participation</li>
                    <li>• Sponsorship and funding opportunities</li>
                    <li>• Technology and equipment partnerships</li>
                    <li>• Professional development programs</li>
                    <li>• International collaboration initiatives</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Interested in partnering with us? We welcome collaboration opportunities that advance science
                  education.
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    Partnership Inquiry
                  </button>
                  <button className="px-6 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 transition-colors">
                    Download Partnership Guide
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
