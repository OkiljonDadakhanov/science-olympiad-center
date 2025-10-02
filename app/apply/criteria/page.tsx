import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BookOpen, Award, Target } from "lucide-react"

export default function SelectionCriteriaPage() {
  const eligibilityRequirements = [
    {
      category: "Age Requirements",
      items: [
        "Students aged 10-18 years",
        "Must be enrolled in secondary education",
        "No upper age limit for exceptional cases",
      ],
    },
    {
      category: "Academic Performance",
      items: [
        "Minimum GPA of 4.0 (out of 5.0) in relevant subjects",
        "Strong performance in mathematics and sciences",
        "Demonstrated interest in olympiad competitions",
      ],
    },
    {
      category: "Subject Proficiency",
      items: [
        "Advanced knowledge in chosen subject area",
        "Ability to solve complex problems",
        "Understanding of competition-level concepts",
      ],
    },
  ]

  const selectionCriteria = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      weight: "40%",
      description: "School grades, test scores, and academic achievements in relevant subjects",
    },
    {
      icon: Target,
      title: "Problem-Solving Skills",
      weight: "30%",
      description: "Performance on subject-specific assessments and logical reasoning tests",
    },
    {
      icon: Award,
      title: "Competition Experience",
      weight: "20%",
      description: "Previous participation in olympiads, contests, or academic competitions",
    },
    {
      icon: Users,
      title: "Motivation & Commitment",
      weight: "10%",
      description: "Personal statement, recommendations, and demonstrated dedication to learning",
    },
  ]

  const subjectRequirements = [
    {
      subject: "Mathematics",
      requirements: [
        "Strong foundation in algebra, geometry, and number theory",
        "Experience with mathematical proofs and logical reasoning",
        "Familiarity with combinatorics and discrete mathematics",
        "Ability to solve IMO-style problems",
      ],
    },
    {
      subject: "Physics",
      requirements: [
        "Solid understanding of mechanics, thermodynamics, and electromagnetism",
        "Mathematical skills including calculus and differential equations",
        "Laboratory experience and experimental design knowledge",
        "Problem-solving skills for IPhO-level questions",
      ],
    },
    {
      subject: "Chemistry",
      requirements: [
        "Comprehensive knowledge of organic, inorganic, and physical chemistry",
        "Understanding of chemical reactions and mechanisms",
        "Laboratory skills and safety protocols",
        "Analytical thinking for IChO-style problems",
      ],
    },
    {
      subject: "Biology",
      requirements: [
        "Strong foundation in molecular biology, genetics, and ecology",
        "Understanding of biochemical processes and cell biology",
        "Knowledge of anatomy, physiology, and evolution",
        "Research experience and scientific methodology",
      ],
    },
    {
      subject: "Computer Science",
      requirements: [
        "Proficiency in programming languages (C++, Python, Java)",
        "Understanding of algorithms and data structures",
        "Problem-solving skills for competitive programming",
        "Mathematical foundation for algorithm analysis",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Selection Criteria</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive selection process ensures we identify students with exceptional potential for success in
              international science olympiads
            </p>
          </div>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardTitle className="text-2xl">Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {eligibilityRequirements.map((req, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg text-gray-800 mb-4">{req.category}</h4>
                    <ul className="space-y-2">
                      {req.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Selection Criteria & Weights</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {selectionCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <criteria.icon className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg text-gray-900">{criteria.title}</h4>
                        <Badge variant="secondary">{criteria.weight}</Badge>
                      </div>
                      <p className="text-gray-600">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Subject-Specific Requirements</h2>
            {subjectRequirements.map((subject, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                  <CardTitle className="text-xl">{subject.subject}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {subject.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="text-2xl">Assessment Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Initial Screening</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Application review and document verification</li>
                    <li>• Academic transcript evaluation</li>
                    <li>• Recommendation letter assessment</li>
                    <li>• Personal statement review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Expert Evaluation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Subject-specific written examination</li>
                    <li>• Problem-solving assessment</li>
                    <li>• Interview with subject experts</li>
                    <li>• Final ranking and selection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Important Note</h3>
            <p className="text-yellow-700">
              Meeting the minimum requirements does not guarantee admission. Due to limited spots, we select only the
              most qualified candidates who demonstrate exceptional potential for success in international competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
