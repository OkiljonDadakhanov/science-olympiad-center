import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BookOpen, Award, Target } from "lucide-react"

export default function SelectionCriteriaPage() {
  const eligibilityRequirements = [
    {
      category: "Age Requirements",
      items: [
        "Students aged 10–18 years currently enrolled in secondary or specialized education institutions.",
        "Exceptions may apply for outstanding candidates recommended by regional or national olympiad committees.",
      ],
    },
    {
      category: "Academic Performance",
      items: [
        "Minimum GPA of 4.0 out of 5.0 in core science subjects.",
        "Demonstrated excellence in mathematics, physics, chemistry, biology, or informatics.",
        "Proven participation and achievements in regional or national olympiads.",
      ],
    },
    {
      category: "Subject Proficiency",
      items: [
        "Advanced knowledge and problem-solving ability in the chosen subject area.",
        "Capacity to analyze, reason, and solve olympiad-level challenges.",
      ],
    },
  ]

  const selectionCriteria = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      weight: "40%",
      description: "School performance, test results, and academic achievements.",
    },
    {
      icon: Target,
      title: "Problem-Solving Skills",
      weight: "30%",
      description: "Results from olympiad-style tasks and analytical reasoning tests.",
    },
    {
      icon: Award,
      title: "Competition Experience",
      weight: "20%",
      description: "Achievements in regional, national, or international olympiads.",
    },
    {
      icon: Users,
      title: "Motivation & Commitment",
      weight: "10%",
      description: "Evaluation of motivation letter, recommendations, and dedication to learning.",
    },
  ]

  const subjectRequirements = [
    {
      subject: "Mathematics",
      requirements: [
        "Strong foundation in algebra, geometry, number theory, and combinatorics.",
        "Experience in solving proof-based and analytical problems.",
        "Ability to tackle IMO-style problems.",
      ],
    },
    {
      subject: "Physics",
      requirements: [
        "Solid understanding of mechanics, thermodynamics, and electromagnetism.",
        "Competence in mathematical modeling and analytical thinking.",
        "Problem-solving skills aligned with IPhO-level standards.",
      ],
    },
    {
      subject: "Chemistry",
      requirements: [
        "Proficiency in organic, inorganic, and physical chemistry.",
        "Ability to conduct experiments and analyze chemical mechanisms.",
        "Preparedness for IChO-style theoretical and practical problems.",
      ],
    },
    {
      subject: "Biology",
      requirements: [
        "Knowledge of molecular biology, genetics, biochemistry, and ecology.",
        "Familiarity with laboratory practices and scientific inquiry.",
        "Analytical skills for IBO-level challenges.",
      ],
    },
    {
      subject: "Informatics (Computer Science)",
      requirements: [
        "Proficiency in C++, Python, or Java.",
        "Strong understanding of algorithms, data structures, and problem-solving.",
        "Preparedness for IOI-style competitive programming tasks.",
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
              Our Science Olympiad Center implements a transparent and merit-based selection system aligned with
              the Resolution No. 562 of the Cabinet of Ministers of the Republic of Uzbekistan (September 9, 2021),
              ensuring nationwide identification of the most talented students capable of representing Uzbekistan at
              international olympiads in mathematics, physics, chemistry, biology, and informatics.
            </p>
          </div>

          {/* Eligibility Requirements */}
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

          {/* Selection Criteria */}
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

          {/* Subject Requirements */}
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

          {/* Assessment Process */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="text-2xl">Assessment Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Initial Screening</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Application review and eligibility verification.</li>
                    <li>• Academic transcript evaluation.</li>
                    <li>• Review of recommendation letters and motivation statement.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Expert Evaluation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Subject-specific written tests.</li>
                    <li>• Logical and problem-solving assessments.</li>
                    <li>• Interviews conducted by academic experts.</li>
                    <li>• Final ranking and selection by the National Olympiad Committee.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Note */}
          <div className="text-center mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Important Note</h3>
            <p className="text-yellow-700">
              Meeting the minimum eligibility criteria does not guarantee selection. Due to limited capacity and high
              competition, only the most promising candidates demonstrating outstanding scientific aptitude and
              potential are chosen to represent Uzbekistan in international olympiads.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
