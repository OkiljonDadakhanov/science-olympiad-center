import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, Eye } from "lucide-react"

export default function DocumentsPage() {
  const documents = [
    {
      title: "Charter of the Science Olympiad Center",
      type: "Founding Document",
      date: "January 15, 2020",
      size: "2.3 MB",
      format: "PDF",
      description: "Official charter establishing the Science Olympiad Center and its mission",
    },
    {
      title: "Educational License",
      type: "Legal Document",
      date: "March 10, 2020",
      size: "1.1 MB",
      format: "PDF",
      description: "Official license to conduct educational activities in Uzbekistan",
    },
    {
      title: "Academic Regulations",
      type: "Policy Document",
      date: "September 1, 2024",
      size: "3.7 MB",
      format: "PDF",
      description: "Comprehensive academic policies and student regulations",
    },
    {
      title: "Code of Conduct",
      type: "Policy Document",
      date: "August 15, 2024",
      size: "1.8 MB",
      format: "PDF",
      description: "Ethical guidelines and behavioral expectations for students and staff",
    },
    {
      title: "Financial Transparency Report 2024",
      type: "Financial Report",
      date: "December 31, 2024",
      size: "4.2 MB",
      format: "PDF",
      description: "Annual financial report and budget allocation details",
    },
    {
      title: "Quality Assurance Standards",
      type: "Academic Document",
      date: "June 20, 2024",
      size: "2.9 MB",
      format: "PDF",
      description: "Educational quality standards and assessment criteria",
    },
    {
      title: "Partnership Agreements",
      type: "Legal Document",
      date: "November 5, 2024",
      size: "5.1 MB",
      format: "PDF",
      description: "International and domestic partnership agreements",
    },
    {
      title: "Student Privacy Policy",
      type: "Policy Document",
      date: "July 10, 2024",
      size: "1.5 MB",
      format: "PDF",
      description: "Data protection and privacy policies for students and families",
    },
  ]

  const documentCategories = [
    { name: "Founding Documents", count: 2, color: "bg-blue-500" },
    { name: "Policy Documents", count: 3, color: "bg-green-500" },
    { name: "Financial Reports", count: 1, color: "bg-orange-500" },
    { name: "Academic Documents", count: 2, color: "bg-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Official Documents</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access our official documents, policies, and reports that govern the operations of the Science Olympiad
              Center
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {documentCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{category.count}</div>
                  <div className="text-gray-600 text-sm">{category.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="text-2xl">Document Access Policy</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Public Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Charter and founding documents</li>
                    <li>• Educational policies and regulations</li>
                    <li>• Code of conduct and ethics</li>
                    <li>• Annual reports and transparency documents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Access Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Most documents are freely accessible</li>
                    <li>• Some financial details require authorization</li>
                    <li>• Student records are strictly confidential</li>
                    <li>• Contact us for specific document requests</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {documents.map((doc, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-6 h-6 text-orange-500" />
                        <h3 className="text-xl font-semibold text-gray-900">{doc.title}</h3>
                        <Badge variant="secondary">{doc.type}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{doc.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{doc.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{doc.format}</span>
                        </div>
                        <div>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Document Request</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Can't find the document you're looking for? Contact our administration office for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Request Document
                  </Button>
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                    Contact Administration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
