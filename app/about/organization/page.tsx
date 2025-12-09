"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

// --- DATA (extracted from your image) ---
const orgData = {
  director: {
    name: "Shermatov Turaboy",
    role: "Director",
    work: "14 years",
    education: [
      "2012 – Bachelor’s, National University of Uzbekistan",
      "2015 – Master’s, National University of Uzbekistan",
      "2017 – IWANN-7, Turkey",
      "2021 – School Leaders Program, University of Cambridge"
    ]
  },

  deputy: {
    name: "Tukhtayev Davron",
    role: "Deputy Director",
    work: "10 years",
    education: [
      "2013 – Bachelor’s, Tashkent State Pedagogical University",
      "2016 – Master’s, Tashkent State Pedagogical University"
    ]
  },

  departments: [
    {
      name: "Department for Organizing Local Subject Olympiads and Competitions",
      head: {
        name: "Ishmurodov Shohriddin",
        role: "Head of Department",
        work: "9 years",
        education: ["Bachelor’s degree, National University of Uzbekistan"]
      },
      staff: [
        {
          name: "Ibragimov Mirzohid",
          role: "Chief Specialist",
          work: "7 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Ergashev Abdulmanzur",
          role: "Chief Specialist",
          work: "6 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Raxshanov Rasuljon",
          role: "Leading Specialist",
          work: "4 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Karimova Shahnoza",
          role: "Leading Specialist",
          work: "5 years",
          education: ["Bachelor’s degree"]
        }
      ]
    },

    {
      name: "Department for Selecting and Preparing Students for International Science Olympiads",
      head: {
        name: "Tuychiyev Fayyoz",
        role: "Head of Department",
        work: "8 years",
        education: ["Master’s degree"]
      },
      staff: [
        {
          name: "Rustamov Sherzod",
          role: "Chief Specialist",
          work: "5 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Kalandarova Mavjuda",
          role: "Leading Specialist",
          work: "4 years",
          education: ["Master’s degree"]
        },
        {
          name: "Toirova Ruxsora",
          role: "Leading Specialist",
          work: "3 years",
          education: ["Bachelor’s degree"]
        }
      ]
    },

    {
      name: "Department for Preparing Olympiad Materials, Monitoring and Organizing Online Olympiads",
      head: {
        name: "Jumayev Tursunboy",
        role: "Head of Department",
        work: "11 years",
        education: ["Master’s degree"]
      },
      staff: [
        {
          name: "Shamshiyev Davron",
          role: "Chief Specialist",
          work: "7 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Dadakhanov Oqiljon",
          role: "Chief Specialist (0.50)",
          work: "4 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Shukurullayev Shohbek",
          role: "Chief Specialist (0.50)",
          work: "3 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Boyqobilov Dilshod",
          role: "Leading Specialist",
          work: "6 years",
          education: ["Bachelor’s degree"]
        }
      ]
    },

    {
      name: "Department for Developing Methodological Guidelines and Educational Manuals and Working with Trainer-Teachers",
      head: {
        name: "Tadjiyeva Nargiza",
        role: "Head of Department",
        work: "9 years",
        education: ["Master’s degree"]
      },
      staff: [
        {
          name: "Vacant",
          role: "Chief Specialist",
          work: "",
          education: []
        },
        {
          name: "Djumabayeva Jamar",
          role: "Leading Specialist",
          work: "5 years",
          education: ["Bachelor’s degree"]
        },
        {
          name: "Soatova Guljaxon",
          role: "Leading Specialist",
          work: "6 years",
          education: ["Master’s degree"]
        }
      ]
    }
  ],

  support: [
    {
      name: "Aripov Jahongir",
      role: "Chief HR Specialist",
      work: "8 years",
      education: ["Bachelor’s, University of World Economy and Diplomacy"]
    },
    {
      name: "Chuliyev Abduvali",
      role: "Head of Accounting Department",
      work: "12 years",
      education: ["Accounting and Finance"]
    },
    {
      name: "Mahkamov Sardor",
      role: "Public Procurement Specialist",
      work: "7 years",
      education: ["Bachelor’s degree"]
    },
    {
      name: "Turayeva Tamanno",
      role: "Head of Digital Media Department",
      work: "6 years",
      education: ["Communications"]
    },
    {
      name: "Nizamkhanov Alixon",
      role: "Facilities Manager",
      work: "15 years",
      education: ["Technical Maintenance"]
    },
    {
      name: "Iskandarov Bunyod",
      role: "Technical Service Specialist",
      work: "5 years",
      education: ["Computer Engineering"]
    }
  ]
};

// --- UI COMPONENTS ---
const PersonCard = ({ person, className = "" }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="bg-white border-2 border-blue-400 rounded-lg p-3 shadow-md hover:shadow-xl transition-all cursor-pointer min-w-[140px]">
        <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
        <p className="text-xs font-semibold text-center text-gray-900">
          {person.name}
        </p>
        <p className="text-xs text-center text-gray-600">
          {person.role}
        </p>
      </div>

      {showTooltip && person.work && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl z-50">
          <p className="mb-2">
            <span className="font-semibold">Work experience:</span> {person.work}
          </p>
          <p>
            <span className="font-semibold">Education:</span> {person.education}
          </p>
        </div>
      )}
    </div>
  )
}

// --- PAGE ---
export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12">
      <div className="container mx-auto px-4">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Organizational Structure
          </h1>
          <p className="text-lg text-gray-600">
            Science Olympiads Center under the Agency for Specialized Educational Institutions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 overflow-x-auto">
          <div className="flex justify-center mb-8">
            <PersonCard person={orgData.director} />
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-blue-400"></div>
          </div>

          <div className="flex justify-center mb-8">
            <PersonCard person={orgData.deputy} />
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-8 bg-blue-400"></div>
          </div>

          <div className="flex justify-center gap-12">
            <div className="flex-1 max-w-5xl">
              <div className="grid grid-cols-2 gap-8">
                {orgData.departments.map((dept, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-blue-400"></div>
                    <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
                      <h3 className="text-xs font-bold text-center mb-4 text-gray-800">
                        {dept.name}
                      </h3>
                      <div className="flex justify-center mb-4">
                        <PersonCard person={dept.head} />
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-4 bg-blue-400"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {dept.staff.map((member, i) => (
                          <PersonCard key={i} person={member} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-64">
              <div className="flex justify-center mb-8">
                <div className="w-0.5 h-8 bg-blue-400"></div>
              </div>

              <div className="space-y-6">
                {orgData.support.map((person, idx) => (
                  <PersonCard key={idx} person={person} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Card className="mt-8 max-w-3xl mx-auto border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-2 text-gray-700 text-sm">
            <p><strong>Address:</strong> 52/1 Darvozakent Street, Yunusabad District, Tashkent City</p>
            <p><strong>Working Hours:</strong> Monday – Friday, 09:00 to 18:00</p>
            <p><strong>Phone:</strong> (+998)77 550 33 66</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@olympiads.uz"
                className="text-blue-600 hover:underline"
              >
                info@olympiads.uz
              </a>
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
