"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Upload, AlertCircle, Download } from "lucide-react"

export default function RequiredDocumentsPage() {
  const requiredDocuments = [
    {
      title: "Academic Transcripts",
      description: "Official transcripts from your current school for the last two academic years",
      format: "PDF or high-quality scanned copy",
      required: true,
      notes: "Must be certified by the school administration",
    },
    {
      title: "Birth Certificate / Passport Copy",
      description: "Official document confirming applicant’s date of birth",
      format: "PDF or scanned copy",
      required: true,
      notes: "Used for age verification",
    },
    {
      title: "Recommendation Letters",
      description: "Two recommendation letters from mathematics or science teachers",
      format: "PDF on official school letterhead",
      required: true,
      notes: "Must be signed and dated by the teacher",
    },
    {
      title: "Personal Statement",
      description: "Essay (500–1000 words) describing motivation, goals, and interest in science olympiads",
      format: "PDF or Word document",
      required: true,
      notes: "Should clearly demonstrate commitment and enthusiasm for scientific learning",
    },
    {
      title: "Competition Certificates",
      description: "Certificates from previous olympiads, contests, or competitions",
      format: "PDF or scanned copies",
      required: false,
      notes: "Include national or international achievements",
    },
    {
      title: "Medical Certificate",
      description: "Health certificate confirming fitness for intensive study and travel",
      format: "PDF issued by a licensed physician",
      required: true,
      notes: "Must be issued within the last 6 months",
    },
    {
      title: "Parent/Guardian Consent Form",
      description: "Signed consent for participation in the Center’s programs",
      format: "PDF of the signed form",
      required: true,
      notes: "Use the official consent form available on the Center’s website",
    },
    {
      title: "Portfolio",
      description: "Collection of academic projects, research work, or problem-solving initiatives",
      format: "PDF compilation",
      required: false,
      notes: "Can strengthen your overall application",
    },
  ]

  const documentChecklist = [
    "All documents must be in English or Uzbek",
    "Scans must be clear, legible, and complete",
    "File size must not exceed 5MB per document",
    "Preferably in PDF format",
    "Multi-page files must include all pages",
    "Documents must be issued within the past 12 months (unless otherwise specified)",
  ]

  const submissionSteps = [
    {
      step: 1,
      title: "Prepare Documents",
      description: "Gather and scan all required documents in high resolution",
    },
    {
      step: 2,
      title: "Complete Online Form",
      description: "Fill in your personal and academic details on the application page",
    },
    {
      step: 3,
      title: "Upload Documents",
      description: "Submit all required files through our secure upload portal",
    },
    {
      step: 4,
      title: "Review & Submit",
      description: "Verify all information before final submission",
    },
    {
      step: 5,
      title: "Confirmation",
      description: "Receive a confirmation email with your application reference number",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Complete list of documents required for applying to the Science Olympiad Center’s national and
              international training programs
            </p>
          </div>

          {/* IMPORTANT REMINDERS */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 text-lg mb-2">Important Reminders</h3>
                <ul className="space-y-1 text-blue-800">
                  <li>• Application deadline: <strong>January 31, 2025</strong></li>
                  <li>• Incomplete or late applications will not be considered</li>
                  <li>• All documents must be authentic, verified, and clearly scanned</li>
                  <li>• Only PDF format is accepted unless otherwise stated</li>
                </ul>
              </div>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* DOCUMENT REQUIREMENTS */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl rounded-xl">
                <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900 rounded-t-xl">
                  <CardTitle className="text-2xl">Document Requirements</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-xl text-gray-900">{doc.title}</h4>
                        <Badge variant={doc.required ? "default" : "secondary"}>
                          {doc.required ? "Required" : "Optional"}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-2">{doc.description}</p>

                      <p className="text-sm text-gray-600">
                        <strong>Format:</strong> {doc.format}
                      </p>

                      {doc.notes && (
                        <div className="mt-3 text-sm text-blue-700 bg-blue-50 p-3 rounded-md shadow-sm">
                          <strong>Note:</strong> {doc.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* SIDE PANEL */}
            <div className="space-y-6">
              {/* CHECKLIST */}
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl">Document Checklist</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {documentChecklist.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* QUICK ACTIONS */}
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                    <Upload className="w-4 h-4" /> Start Application
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                    <Download className="w-4 h-4" /> Download Forms
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 p-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                    <FileText className="w-4 h-4" /> Document Templates
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* SUBMISSION PROCESS */}
          <Card className="border-0 shadow-xl rounded-xl">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
              <CardTitle className="text-2xl">Submission Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-5 gap-6">
                {submissionSteps.map((step) => (
                  <div key={step.step} className="text-center">
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

          {/* HELP SECTION */}
          <div className="text-center mt-10 p-8 bg-yellow-50 border border-yellow-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Need Help?</h3>
            <p className="text-yellow-700 mb-4">
              If you have questions about document requirements or need assistance, our admissions team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                Contact Admissions
              </button>
              <button className="px-6 py-2 border border-yellow-600 text-yellow-700 rounded-lg hover:bg-yellow-50 transition">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
