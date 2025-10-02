import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Globe, BookOpen } from "lucide-react"

export default function GeneralInformationPage() {
  const stats = [
    { icon: Users, label: "Active Students", value: "2,500+" },
    { icon: Award, label: "International Medals", value: "150+" },
    { icon: Globe, label: "Partner Countries", value: "25+" },
    { icon: BookOpen, label: "Training Programs", value: "40+" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">General Information</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The Science Olympiad Center is Uzbekistan's premier institution for identifying, training, and supporting
              talented students in science competitions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">About Our Center</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-6">
                    The Science Olympiad Center of Uzbekistan was established to create a comprehensive ecosystem for
                    nurturing scientific talent among young people. We serve as the national hub for olympiad
                    preparation, bringing together the country's brightest minds and most experienced educators.
                  </p>
                  <p className="mb-6">
                    Our center operates under the principle that every talented student deserves the opportunity to
                    reach their full potential. We provide world-class training, mentorship, and resources to help
                    students excel in national and international science competitions.
                  </p>
                  <p>
                    Through our comprehensive programs, we have successfully positioned Uzbekistan as a competitive
                    force in international science olympiads, with our students consistently achieving top rankings in
                    mathematics, physics, chemistry, biology, and computer science competitions worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardTitle className="text-xl">Key Activities</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Intensive training programs for olympiad participants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>National team selection and preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>International competition participation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Teacher training and curriculum development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Research and educational innovation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardTitle className="text-xl">Target Audience</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Talented students aged 10-18 years</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mathematics and science enthusiasts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Students from all regions of Uzbekistan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Teachers and educators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Educational institutions and schools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
