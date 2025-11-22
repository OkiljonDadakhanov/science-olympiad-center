import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar } from "lucide-react"

export default function DocumentsPage() {
  const documents = [
    {
      title: "PQ-346: On Measures to Further Improve the System of Working with Talented Youth",
      type: "Presidential Resolution",
      date: "September 30, 2024",
      format: "Online",
      link: "http://lex.uz//uz/docs/-7145231",
      description:
        "Discussion of the implementation of the resolution, coordination and control of the activities of responsible organizations are entrusted to the Prime Minister of the Republic of Uzbekistan A.N. Aripov. Signed by President Sh. Mirziyoyev.",
    },
    {
      title: "PQ-4306: On Measures to Identify Talented Youth and Organize a Continuous System of Training Highly Qualified Personnel",
      type: "Presidential Resolution",
      date: "May 3, 2019",
      format: "Online",
      link: "http://lex.uz//docs/4320713",
      description:
        "Control over the implementation of this resolution is entrusted to the Adviser to the President of the Republic of Uzbekistan A.A. Abduvaхitov and the Deputy Prime Minister of the Republic of Uzbekistan A.A. Abduхakimov. Signed by President Sh. Mirziyoyev.",
    },
    {
      title: "Resolution No. 562: On Improving the System of Science Olympiads Among Talented Students and Implementation of the Best School System for Teaching Foreign Languages",
      type: "Cabinet of Ministers Resolution",
      date: "September 9, 2021",
      format: "Online",
      link: "http://lex.uz//uz/docs/-5621189",
      description:
        "Resolution on improving the system of conducting science olympiads and introducing a system for identifying the best school in teaching foreign languages. Paragraph 6 as amended by Presidential Resolution PQ-346 dated September 30, 2024. Signed by Prime Minister A. Aripov.",
    },
  ]

  const documentCategories = [
    { name: "Government Resolutions", count: 3, color: "bg-blue-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Official Government Documents</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access official state documents related to national policies for supporting gifted youth, olympiad
              development, and educational excellence.
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
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              <CardTitle className="text-2xl">Document Access Policy</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Public Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Government resolutions and decrees</li>
                    <li>• National education policies</li>
                    <li>• Regulations for olympiad development</li>
                    <li>• State programs for gifted youth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Access Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Most documents are freely available</li>
                    <li>• Some materials may require authorization</li>
                    <li>• Official government records remain unchanged</li>
                    <li>• Contact us for specific document inquiries</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {documents.map((doc, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-orange-500" />
                      <h3 className="text-xl font-semibold text-gray-900">{doc.title}</h3>
                      <Badge variant="secondary">{doc.type}</Badge>
                    </div>
                    <p className="text-gray-600">{doc.description}</p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{doc.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{doc.format}</span>
                      </div>
                      <div>
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View Document
                        </a>
                      </div>
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
                  Can't find a specific document? Contact our administration office for further assistance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
