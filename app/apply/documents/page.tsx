import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Upload, AlertCircle, Download } from "lucide-react"

export default function RequiredDocumentsPage() {
  const requiredDocuments = [
    {
      title: "Academic Transcripts",
      description: "Official transcripts from your current school for the last 2 years",
      format: "PDF or scanned copy",
      required: true,
      notes: "Must be certified by school administration",
    },
    {
      title: "Birth Certificate",
      description: "Official birth certificate or passport copy",
      format: "PDF or scanned copy",
      required: true,
      notes: "For age verification purposes",
    },
    {
      title: "Recommendation Letters",
      description: "Letters from mathematics/science teachers (minimum 2)",
      format: "PDF on official letterhead",
      required: true,
      notes: "Must be from current or recent teachers",
    },
    {
      title: "Personal Statement",
      description: "Essay explaining your motivation and goals (500-1000 words)",
      format: "PDF or Word document",
      required: true,
      notes: "Should demonstrate passion for science",
    },
    {
      title: "Competition Certificates",
      description: "Certificates from previous olympiads or competitions",
      format: "PDF or scanned copies",
      required: false,
      notes: "Include any relevant academic achievements",
    },
    {
      title: "Medical Certificate",
      description: "Health certificate confirming fitness for intensive study",
      format: "PDF from licensed physician",
      required: true,
      notes: "Must be issued within 6 months",
    },
    {
      title: "Parent/Guardian Consent",
      description: "Signed consent form for participation in programs",
      format: "PDF of signed form",
      required: true,
      notes: "Use official form provided on website",
    },
    {
      title: "Portfolio (Optional)",
      description: "Academic projects, research work, or creative solutions",
      format: "PDF compilation",
      required: false,
      notes: "Can strengthen your application",
    },
  ]

  const documentChecklist = [
    "All documents must be in English or Uzbek",
    "Scanned documents should be clear and legible",
    "File size should not exceed 5MB per document",
    "Use PDF format when possible",
    "Ensure all pages are included for multi-page documents",
    "Documents must be current (issued within last 12 months unless specified)",
  ]

  const submissionSteps = [
    {
      step: 1,
      title: "Prepare Documents",
      description: "Gather all required documents and scan them in high quality",
    },
    {
      step: 2,
      title: "Complete Online Form",
      description: "Fill out the online application form with personal information",
    },
    {
      step: 3,
      title: "Upload Documents",
      description: "Upload all documents through our secure portal",
    },
    {
      step: 4,
      title: "Review & Submit",
      description: "Review your application and submit before the deadline",
    },
    {
      step: 5,
      title: "Confirmation",
      description: "Receive confirmation email with application reference number",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Complete list of documents needed for your application to the Science Olympiad Center programs
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Important Reminders</h3>
                <ul className="space-y-1 text-blue-700">
                  <li>• Application deadline: January 31, 2025</li>
                  <li>• Incomplete applications will not be processed</li>
                  <li>• All documents must be authentic and verifiable</li>
                  <li>• Late submissions will not be accepted</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardTitle className="text-2xl">Document Requirements</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-6 py-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-lg text-gray-900">{doc.title}</h4>
                          <Badge variant={doc.required ? "default" : "secondary"}>
                            {doc.required ? "Required" : "Optional"}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{doc.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>
                            <strong>Format:</strong> {doc.format}
                          </span>
                        </div>
                        {doc.notes && (
                          <div className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded">
                            <strong>Note:</strong> {doc.notes}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardTitle className="text-xl">Document Checklist</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {documentChecklist.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                      <Upload className="w-4 h-4" />
                      Start Application
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      Download Forms
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 p-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
                      <FileText className="w-4 h-4" />
                      Document Templates
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardTitle className="text-2xl">Submission Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-5 gap-6">
                {submissionSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Need Help?</h3>
            <p className="text-yellow-700 mb-4">
              If you have questions about document requirements or need assistance with your application, our admissions
              team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                Contact Admissions
              </button>
              <button className="px-6 py-2 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
