import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const applicationSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Complete the online application form with personal and academic information",
      duration: "15-20 minutes",
      status: "active",
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload required documents including transcripts and recommendation letters",
      duration: "1-2 days",
      status: "pending",
    },
    {
      step: 3,
      title: "Initial Assessment",
      description: "Take subject-specific online assessments to demonstrate your knowledge",
      duration: "2-3 hours",
      status: "pending",
    },
    {
      step: 4,
      title: "Expert Review",
      description: "Our expert council reviews your application and assessment results",
      duration: "1-2 weeks",
      status: "pending",
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Successful candidates are invited to join our training programs",
      duration: "1 week",
      status: "pending",
    },
  ]

  const programs = [
    {
      name: "Mathematics Olympiad Training",
      duration: "6 months",
      level: "Advanced",
      nextStart: "March 2025",
      spots: "25 available",
    },
    {
      name: "Physics Competition Prep",
      duration: "8 months",
      level: "Intermediate to Advanced",
      nextStart: "February 2025",
      spots: "20 available",
    },
    {
      name: "Chemistry Intensive Program",
      duration: "7 months",
      level: "Advanced",
      nextStart: "March 2025",
      spots: "18 available",
    },
    {
      name: "Biology Research Track",
      duration: "9 months",
      level: "Advanced",
      nextStart: "April 2025",
      spots: "15 available",
    },
    {
      name: "Computer Science Algorithms",
      duration: "5 months",
      level: "Intermediate to Advanced",
      nextStart: "February 2025",
      spots: "30 available",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Apply</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join Uzbekistan's premier science olympiad training programs. Our comprehensive application process
              ensures we identify and nurture the most talented students.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
                <div className="text-gray-600">Students Trained</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600">International Medals</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg mb-12">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              <CardTitle className="text-2xl">Application Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                          step.status === "active" ? "bg-orange-500" : "bg-gray-400"
                        }`}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-xl">Available Programs</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {programs.map((program, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{program.name}</h4>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span>Duration: {program.duration}</span>
                        <span>•</span>
                        <span>Level: {program.level}</span>
                        <span>•</span>
                        <span>Starts: {program.nextStart}</span>
                      </div>
                      <div className="text-sm text-green-600 mt-1">{program.spots}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-xl">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Link
                    href="/apply/criteria"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">Selection Criteria</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/apply/online"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">Online Application</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/apply/documents"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Required Documents</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/apply/faq"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span className="font-medium">FAQ</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3"
            >
              <Link href="/apply/online" className="flex items-center gap-2">
                Start Your Application
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <p className="text-gray-600 mt-4">
              Application deadline: <span className="font-semibold">January 31, 2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
