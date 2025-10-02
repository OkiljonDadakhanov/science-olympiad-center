import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Information about the Educational Organization</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive information about the Science Olympiad Center structure and operations
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">Full Name</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700">
                  Science Olympiad Center of Uzbekistan - Educational Foundation "Talent and Success"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Short Name</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700">Science Olympiad Center</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">Date of Establishment</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-4">January 15, 2020</p>
                <p className="text-gray-600">
                  The Center was established by the Ministry of Public Education of the Republic of Uzbekistan to
                  identify and nurture talented students in science olympiads.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Legal Status</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="px-3 py-1">
                      Type
                    </Badge>
                    <span className="text-lg text-gray-700">Non-profit Educational Organization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="px-3 py-1">
                      Status
                    </Badge>
                    <span className="text-lg text-gray-700">State Educational Institution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="px-3 py-1">
                      License
                    </Badge>
                    <span className="text-lg text-gray-700">Educational License #ED-2020-001</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardTitle className="text-2xl">Organizational Structure</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-gray-800">Governing Bodies</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Board of Trustees</li>
                      <li>• Expert Council</li>
                      <li>• Academic Council</li>
                      <li>• Administrative Board</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-gray-800">Departments</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Mathematics Department</li>
                      <li>• Physics Department</li>
                      <li>• Chemistry Department</li>
                      <li>• Biology Department</li>
                      <li>• Computer Science Department</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
