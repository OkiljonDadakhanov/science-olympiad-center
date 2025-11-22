"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Information about the Educational Organization
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive information about the Science Olympiad Center’s structure and operations
            </p>
          </div>

          <div className="space-y-8">
            {/* General Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-2xl">Full Name</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700">
                  Science Olympiad Center under the Agency for Specialized Educational Institutions of the Ministry of Preschool and School Education of the Republic of Uzbekistan
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
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-2xl">Date of Establishment</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-4">January 9, 2025</p>
                <p className="text-gray-600">
                  About the Center In accordance with Presidential Decree PQ–346 of September 30, 2024, the Science Olympiad Center was established as a state institution under the Agency for Specialized Educational Institutions of the Ministry of Preschool and School Education.
                </p>
              </CardContent>
            </Card>

            {/* Legal Status */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Legal Status</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">Type</Badge>
                  <span className="text-lg text-gray-700">State Institution (Non-commercial organization)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">System</Badge>
                  <span className="text-lg text-gray-700">
                    Operates within the specialized education system under the Agency for Specialized Educational Institutions
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Management and Organizational Structure */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-2xl">Management and Organizational Structure</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Management</h4>
                  <ul className="space-y-2 text-gray-600 mt-2">
                    <li>• <strong>Director:</strong> Shermatov Turaboy Yusupboevich</li>
                    <li>• <strong>Deputy Director:</strong> Tuxtaev Davron Dilmurot ugli</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Main Departments and Key Positions</h4>
                  <ul className="space-y-2 text-gray-600 mt-2">
                    <li>• Chief Specialist for Human Resources</li>
                    <li>• Chief Legal Advisor</li>
                    <li>• Chief Specialist for Organizational Control and Public Inquiries</li>
                    <li>• Department for Organizing Local Science Olympiads and Competitions</li>
                    <li>• Department for Preparing, Monitoring, and Organizing Online Olympiad Materials</li>
                    <li>• Department for Selection and Training of Students for International Olympiads</li>
                    <li>• Department for Developing Methodological Guidelines, Educational Materials, and Training of Teachers</li>
                    <li>• Department for Digital Media Resources and Communications</li>
                    <li>• Accounting Department</li>
                    <li>• Chief Specialist for Public Procurement and Contract Management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-3 text-gray-700">
                <p><strong>Address:</strong> 52/1 Darvozakent Street, Yunusabad District, Tashkent City, Republic of Uzbekistan</p>
                <p><strong>Working Hours:</strong> Monday – Friday, from 09:00 to 18:00</p>
                <p><strong>Telephone:</strong> (+998)77 550 33 66</p>
                <p><strong>Email:</strong> <a href="mailto:info@scienceolympiad.uz" className="text-blue-600 hover:underline">info@olympiads.uz</a></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
