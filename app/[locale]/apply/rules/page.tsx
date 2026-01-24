"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RulesOfStayPage() {
  const rules = [
    {
      title: "General Provisions",
      items: [
        "All participants must follow the Center’s rules to ensure safety, academic integrity, and smooth operation.",
        "Rules apply to all students, staff, and partners during the program.",
        "Participation indicates full agreement to all rules.",
      ],
    },
    {
      title: "Eligibility and Admission",
      items: [
        "Students aged 10–18 with exceptional abilities in mathematics, physics, chemistry, biology, or computer science may apply.",
        "Applications must include academic transcripts, personal statement, recommendation letters, and consent forms.",
        "Misrepresentation of information may result in immediate disqualification.",
      ],
    },
    {
      title: "Attendance and Participation",
      items: [
        "Students must attend all sessions, workshops, and online modules.",
        "Unexcused absences may lead to dismissal from the program.",
        "Respectful conduct and active participation are mandatory at all times.",
      ],
    },
    {
      title: "Code of Conduct",
      items: [
        "Participants must treat staff, peers, and the learning environment with respect.",
        "Harassment, bullying, or discrimination is strictly prohibited.",
        "Academic integrity must be maintained for all tasks and assessments.",
        "Use of inappropriate language, images, or content on the platform is forbidden.",
      ],
    },
    {
      title: "Accommodation and Meals",
      items: [
        "Students from outside Tashkent are provided with modern dormitory and dining facilities.",
        "All facilities are monitored to ensure safety, hygiene, and comfort.",
        "Any damage or misconduct in dormitories may result in disciplinary action.",
      ],
    },
    {
      title: "Technical Use",
      items: [
        "Each participant is given a unique login for online learning platforms.",
        "Sharing login credentials or attempting unauthorized access is strictly prohibited.",
        "Technical issues must be reported immediately to the support team.",
      ],
    },
    {
      title: "Intellectual Property",
      items: [
        "All educational materials belong to the Center and its partners.",
        "Materials may be used only for personal study and academic purposes.",
        "Unauthorized distribution, reproduction, or commercial use of materials is strictly prohibited.",
      ],
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg/rules-of-stay.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Rules of Stay</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              All participants must adhere to the following regulations to ensure a safe, respectful, and academically productive environment.
            </p>
          </div>

          <div className="space-y-8">
            {rules.map((rule, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
                  <CardTitle className="text-xl">{index + 1}. {rule.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {rule.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Final Note</h3>
            <p className="text-yellow-700">
              All participants are expected to uphold these rules throughout the program. Violations may result in disciplinary action, including dismissal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
