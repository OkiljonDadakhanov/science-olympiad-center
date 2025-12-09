"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

// --- DATA (extracted from your image) ---
const orgData = {
  director: {
    name: "Shermatov Turaboy Yusupboevich",
    role: "Director",
    work: "14 years",
    image: "/tree/torabek.jpg",
    education: [
      "2012 – Bachelor's degree, National University of Uzbekistan",
      "2015 – Master's degree, National University of Uzbekistan",
      "2017 – International Workshop IWANN-7, Turkey",
      "2021 – International Program for 'School Leaders,' University of Cambridge",
      "2023 – 'Management' Training Course, Academy of Public Administration under the President of the Republic of Uzbekistan",
      "2024 – Specialized Training Course, Academy of Public Administration under the President of the Republic of Uzbekistan"
    ]
  },

  deputy: {
    name: "Tuxtayev Davron Dilmurot ugli",
    role: "Deputy Director",
    work: "5 years",
    image: "/tree/tukhtaev.jpg",
    education: [
      "2014 – National University of Uzbekistan"
    ]
  },

  departments: [
    {
      name: "Department for Organizing Local Subject Olympiads and Competitions",
      head: {
        name: "Ishmuradov Shovhiddin Ilhomovich",
        role: "Head of Department",
        work: "21 years",
        image: "/team/shovqiddin.jpg",
        education: ["2004 – Navoi State Pedagogical Institute"]
      },
      staff: [
        {
          name: "Ibroghimov Mirzokhid Isroilovich",
          role: "Chief Specialist",
          work: "29 years",
          image: "/tree/mirzohid.jpg",
          education: ["1996 – Tashkent State University"]
        },
        {
          name: "Ergashov Abulmansur Abduvokhidovich",
          role: "Chief Specialist",
          work: "9 years",
          image: "/tree/abdulmansur.jpg",
          education: ["2016 – Tashkent State Pedagogical University named after Nizami"]
        },
        {
          name: "Ravshanov Rasuljon Rustamovich",
          role: "Leading Specialist",
          work: "5 years",
          image: "/tree/rasuljon.jpg",
          education: ["2021 – Navoi State Pedagogical Institute"]
        },
        {
          name: "Karimova Shahnóza Abdurasul qizi",
          role: "Leading Specialist",
          work: "3 years",
          image: "/tree/munisa.jpg",
          education: [
            "2019 – Tashkent State University of Uzbek Language and Literature named after Alisher Navoi (Bachelor's degree)",
            "2021 – Tashkent State University of Uzbek Language and Literature named after Alisher Navoi (Master's degree)"
          ]
        }
      ]
    },

    {
      name: "Department for Selecting and Preparing Students for International Science Olympiads",
      head: {
        name: "Tuychiev Fayyoz Farhod ugli",
        role: "Head of Department",
        work: "4 years",
        image: "/team/fayyoz.jpg",
        education: [
          "2021 – V.I. Ulyanov (Lenin) Saint Petersburg State Electrotechnical University 'LETI'",
          "2023 – Tashkent State Technical University named after I.A. Karimov (Master's degree)"
        ]
      },
      staff: [
        {
          name: "Rustamov Sherzod Allanazarovich",
          role: "Chief Specialist",
          work: "12 years",
          image: "/tree/sherzod.jpg",
          education: ["2021 – Berdakh State University of Karakalpakstan"]
        },
        {
          name: "Kalandarova Mavjuda Obidjonovna",
          role: "Leading Specialist",
          work: "25 years",
          image: "/tree/mavjuda.jpg",
          education: ["2024 – Gulistan State University"]
        },
        {
          name: "Toirova Ruhsora Khurshid kizi",
          role: "Leading Specialist",
          work: "1 year",
          image: "/tree/ruxsora.jpg",
          education: ["2025 – Yangi Uzbekistan University"]
        }
      ]
    },

    {
      name: "Department for Preparing Olympiad Materials, Monitoring and Organizing Online Olympiads",
      head: {
        name: "Jumaev Tursunboy Khusen ogli",
        role: "Head of Department",
        work: "7 years",
        image: "/team/tursunboy.jpg",
        education: [
          "2018 – Bukhara State University",
          "2022 – National University of Uzbekistan"
        ]
      },
      staff: [
        {
          name: "Shamsiyev Davron Asliddinovich",
          role: "Chief Specialist",
          work: "5 years",
          image: "/tree/davron.jpg",
          education: ["2024 – Tashkent State University of Economics"]
        },
        {
          name: "Boykobilov Dilshod Bahriddinovich",
          role: "Leading Specialist",
          work: "8 years",
          image: "/tree/dilshod.jpg",
          education: [
            "2015 – Jizzakh State Pedagogical Institute (Bachelor's degree)",
            "2017 – Gulistan State University (Master's degree)"
          ]
        }
      ]
    },

    {
      name: "Department for Developing Methodological Guidelines and Educational Manuals and Working with Trainer-Teachers",
      head: {
        name: "Tadjieva Nargiza Rustamovna",
        role: "Head of Department",
        work: "21 years",
        image: "/tree/nargiza.jpg",
        education: [
          "2005 – Mukimiy Kokand State Pedagogical Institute (Bachelor's degree)",
          "2023 – Al-Bukhari Oriental University (Master's degree)"
        ]
      },
      staff: [
        {
          name: "Djumabayeva Janar Muratbayeva",
          role: "Leading Specialist",
          work: "20 years",
          image: "/tree/janar.jpg",
          education: [
            "2004 – Karakalpakstan State University",
            "2025 – Student at the Higher School of Business and Entrepreneurship under the Cabinet of Ministers"
          ]
        },
        {
          name: "Soatova Guljakhon Mukhammatovna",
          role: "Leading Specialist",
          work: "18 years",
          image: "/tree/guljahon.jpg",
          education: [
            "2010 – Tashkent State University of World Languages",
            "2025 – University of Digital Economy and Agrotechnologies"
          ]
        }
      ]
    }
  ],

  support: [
    {
      name: "Aripov Jahongir Alimovich",
      role: "Chief HR Specialist",
      work: "14 years",
      image: "/tree/jahongir.jpg",
      education: ["2010 – Tashkent State Pedagogical University named after Nizami"]
    },
    {
      name: "Choliev Abduvali Abdulasam ugli",
      role: "Head of Accounting Department",
      work: "10 years",
      image: "/tree/bugaltr.jpg",
      education: ["2015 – Jizzakh Polytechnic Institute"]
    },
    {
      name: "Makhamatov Sardor Zoirovich",
      role: "Public Procurement Specialist",
      work: "7 years",
      image: "/tree/sardor.jpg",
      education: ["2017 – Tashkent University of Information Technologies named after Muhammad al-Khwarizmi"]
    },
    {
      name: "Turaeva Tamanno Ochilovna",
      role: "Head of Digital Media Department",
      work: "5 years",
      image: "/team/tamanno.jpg",
      education: ["2022 – Uzbekistan State University of World Languages"]
    },
    {
      name: "Ergashboev Jumanazar Abdunabi ugli",
      role: "Specialist",
      work: "8 years",
      image: "/tree/jumanazar.jpg",
      education: ["2024 – Moscow University of Finance and Industry"]
    },
    {
      name: "Uloshov Abumuslim Komil ugli",
      role: "Specialist",
      work: "4 years",
      image: "/tree/muslim.jpg",
      education: ["2022 – National University of Uzbekistan"]
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
      <div className="bg-white border-2 border-blue-400 rounded-lg p-4 shadow-md hover:shadow-xl hover:border-blue-600 transition-all cursor-pointer min-w-[160px]">
        <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden border-2 border-blue-300 bg-gray-100">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
              {person.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
          )}
        </div>
        <p className="text-xs font-semibold text-center text-gray-900 leading-tight mb-1">
          {person.name}
        </p>
        <p className="text-xs text-center text-gray-600 leading-tight">
          {person.role}
        </p>
      </div>

      {showTooltip && person.work && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-80 bg-gray-900 text-white text-xs rounded-lg p-4 shadow-xl z-50">
          <p className="mb-2">
            <span className="font-semibold">Work experience:</span> {person.work}
          </p>
          {Array.isArray(person.education) && person.education.length > 0 ? (
            <div>
              <span className="font-semibold">Place of Higher Education Completion:</span>
              <ul className="mt-1 space-y-1 ml-2">
                {person.education.map((edu, idx) => (
                  <li key={idx}>• {edu}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>
              <span className="font-semibold">Education:</span> {person.education || "Not specified"}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// --- PAGE ---
export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-12">
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
                    <div className="border-2 border-blue-300 rounded-lg p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-sm">
                      <h3 className="text-sm font-bold text-center mb-5 text-gray-800 leading-tight">
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
