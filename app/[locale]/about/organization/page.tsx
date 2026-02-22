"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"
import { Users, Building2, Briefcase, GraduationCap, Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { useLocale } from "next-intl"

// --- DATA ---
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
      "2023 – 'Management' Training Course, Academy of Public Administration",
      "2024 – Specialized Training Course, Academy of Public Administration"
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
      name: "Department for Organizing Local Subject Olympiads",
      color: "from-blue-500 to-blue-600",
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
          education: ["2016 – Tashkent State Pedagogical University"]
        },
        {
          name: "Ravshanov Rasuljon Rustamovich",
          role: "Leading Specialist",
          work: "5 years",
          image: "/tree/rasuljon.jpg",
          education: ["2021 – Navoi State Pedagogical Institute"]
        }
      ]
    },
    {
      name: "Department for International Science Olympiads",
      color: "from-purple-500 to-purple-600",
      head: {
        name: "Tuychiev Fayyoz Farhod ugli",
        role: "Head of Department",
        work: "4 years",
        image: "/team/fayyoz.jpg",
        education: [
          "2021 – Saint Petersburg State Electrotechnical University",
          "2023 – Tashkent State Technical University (Master's)"
        ]
      },
      staff: [
        {
          name: "Rustamov Sherzod Allanazarovich",
          role: "Chief Specialist",
          work: "12 years",
          image: "/tree/sherzod.jpg",
          education: ["2021 – Berdakh State University"]
        },
        {
          name: "Kalandarova Mavjuda Obidjonovna",
          role: "Leading Specialist",
          work: "25 years",
          image: "/tree/mavjuda.jpg",
          education: ["2024 – Gulistan State University"]
        }
      ]
    },
    {
      name: "Department for Olympiad Materials & Online Olympiads",
      color: "from-emerald-500 to-emerald-600",
      head: {
        name: "Jumaev Tursunboy Khusen ugli",
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
          name: "Oqiljon Dadaxanov",
          role: "Software Engineer",
          work: "1 year",
          image: "/tree/akilhan.jpg",
          education: ["2021–2025 – New Uzbekistan University"]
        },
        {
          name: "Shoxbek Shukurulloyev",
          role: "Software Engineer",
          work: "1 year",
          image: "/tree/shoxbek.jpg",
          education: ["2021–2025 – New Uzbekistan University"]
        }
      ]
    },
    {
      name: "Department for Methodological Guidelines",
      color: "from-amber-500 to-amber-600",
      head: {
        name: "Djumabayeva Janar Muratbayeva",
        role: "Head of Department",
        work: "20 years",
        image: "/tree/janar.jpg",
        education: ["2004 – Karakalpakstan State University"]
      },
      staff: [
        {
          name: "Soatova Guljakhon Mukhammatovna",
          role: "Leading Specialist",
          work: "18 years",
          image: "/tree/guljahon.jpg",
          education: ["2010 – Tashkent State University of World Languages"]
        },
        {
          name: "Abdusattorova Charos Abdulaziz qizi",
          role: "Lead Specialist",
          work: "3 years",
          education: []
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
      education: []
    },
    {
      name: "Choliev Abduvali Abdulasam ugli",
      role: "Head of Accounting Department",
      work: "10 years",
      image: "/team/abduvali.jpg",
      education: []
    },
    {
      name: "Makhamatov Sardor Zoirovich",
      role: "Public Procurement Specialist",
      work: "",
      image: "/tree/sardor.jpg",
      education: []
    },
    {
      name: "Turaeva Tamanno Ochilovna",
      role: "Head of Digital Media Department",
      work: "5 years",
      image: "/team/tamanno.jpg",
      education: []
    },
    {
      name: "Ergashboev Jumanazar Abdunabi ugli",
      role: "Specialist",
      work: "",
      image: "/tree/jumanazar.jpg",
      education: []
    },
    {
      name: "Uloshov Abumuslim Komil ugli",
      role: "Specialist",
      work: "",
      image: "/tree/muslim.jpg",
      education: []
    }
  ]
};

// Person Card Component with expandable education
interface PersonProps {
  person: {
    name: string
    role: string
    work?: string
    image?: string
    education?: string[]
  }
  size?: "lg" | "md" | "sm"
  showEducation?: boolean
  educationLabel?: string
  experienceSuffix?: string
}

function PersonCard({
  person,
  size = "md",
  showEducation = true,
  educationLabel = "Education",
  experienceSuffix = "experience",
}: PersonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasEducation = person.education && person.education.length > 0

  const sizeClasses = {
    lg: {
      card: "p-5 md:p-6 w-full",
      avatar: "w-24 h-24 md:w-32 md:h-32",
      name: "text-lg md:text-xl",
      role: "text-sm",
      wrapper: "w-full max-w-sm"
    },
    md: {
      card: "p-4 md:p-5 w-full",
      avatar: "w-24 h-24",
      name: "text-base",
      role: "text-xs",
      wrapper: "w-full max-w-xs"
    },
    sm: {
      card: "p-4 w-full",
      avatar: "w-20 h-20",
      name: "text-sm",
      role: "text-xs",
      wrapper: "w-full max-w-[240px]"
    }
  }

  const s = sizeClasses[size]

  return (
    <div className={s.wrapper}>
      <Card className={`${s.card} bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30`}>
        <div className="flex flex-col items-center text-center">
          <div className={`${s.avatar} rounded-full overflow-hidden border-3 border-primary/20 mb-4 ring-2 ring-offset-2 ring-offset-background ring-primary/10`}>
            {person.image ? (
              <Image
                src={person.image}
                alt={person.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-2xl">
                {person.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
              </div>
            )}
          </div>
          <h3 className={`${s.name} font-semibold text-foreground leading-tight mb-1`}>{person.name}</h3>
          <p className={`${s.role} text-muted-foreground`}>{person.role}</p>
          {person.work && (
            <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {person.work} {experienceSuffix}
            </span>
          )}

          {/* Expandable Education Section */}
          {showEducation && hasEducation && (
            <div className="w-full mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-center gap-1 w-full text-xs text-muted-foreground hover:text-primary transition-colors py-1"
              >
                <GraduationCap className="h-3.5 w-3.5" />
                <span>{educationLabel}</span>
                {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    {person.education?.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

// Connector line component
function Connector({ direction = "vertical", className = "" }: { direction?: "vertical" | "horizontal", className?: string }) {
  if (direction === "vertical") {
    return <div className={`w-0.5 h-8 bg-gradient-to-b from-border to-border/50 ${className}`} />
  }
  return <div className={`h-0.5 w-8 bg-gradient-to-r from-border to-border/50 ${className}`} />
}

// Main Page Component
export default function OrganizationPage() {
  const locale = useLocale() as "en" | "ru" | "uz"

  const labels = {
    en: {
      title: "Organizational Structure",
      subtitle: "Science Olympiad Center under the Agency for Specialized Educational Institutions",
      departments: "Departments",
      support: "Support Staff",
      contact: "Contact Information",
      address: "Address",
      workingHours: "Working Hours",
      phone: "Phone",
      email: "Email",
      education: "Education",
      experience: "experience",
      roleMap: {
        Director: "Director",
        "Deputy Director": "Deputy Director",
        "Head of Department": "Head of Department",
        "Chief Specialist": "Chief Specialist",
        "Leading Specialist": "Leading Specialist",
        "Lead Specialist": "Lead Specialist",
        "Chief HR Specialist": "Chief HR Specialist",
        "Head of Accounting Department": "Head of Accounting Department",
        "Public Procurement Specialist": "Public Procurement Specialist",
        "Head of Digital Media Department": "Head of Digital Media Department",
        Specialist: "Specialist",
        "Software Engineer": "Software Engineer",
      },
      departmentMap: {
        "Department for Organizing Local Subject Olympiads": "Department for Organizing Local Subject Olympiads",
        "Department for International Science Olympiads": "Department for International Science Olympiads",
        "Department for Olympiad Materials & Online Olympiads": "Department for Olympiad Materials & Online Olympiads",
        "Department for Methodological Guidelines": "Department for Methodological Guidelines",
      },
    },
    ru: {
      title: "Организационная структура",
      subtitle: "Центр научных олимпиад при Агентстве специализированных образовательных учреждений",
      departments: "Отделы",
      support: "Вспомогательный персонал",
      contact: "Контактная информация",
      address: "Адрес",
      workingHours: "Часы работы",
      phone: "Телефон",
      email: "Email",
      education: "Образование",
      experience: "стажа",
      roleMap: {
        Director: "Директор",
        "Deputy Director": "Заместитель директора",
        "Head of Department": "Начальник отдела",
        "Chief Specialist": "Главный специалист",
        "Leading Specialist": "Ведущий специалист",
        "Lead Specialist": "Ведущий специалист",
        "Chief HR Specialist": "Главный HR-специалист",
        "Head of Accounting Department": "Начальник бухгалтерии",
        "Public Procurement Specialist": "Специалист по госзакупкам",
        "Head of Digital Media Department": "Начальник отдела цифровых медиа",
        Specialist: "Специалист",
        "Software Engineer": "Инженер-программист",
      },
      departmentMap: {
        "Department for Organizing Local Subject Olympiads": "Отдел организации местных предметных олимпиад",
        "Department for International Science Olympiads": "Отдел международных научных олимпиад",
        "Department for Olympiad Materials & Online Olympiads": "Отдел олимпиадных материалов и онлайн-олимпиад",
        "Department for Methodological Guidelines": "Отдел методических разработок",
      },
    },
    uz: {
      title: "Tashkiliy tuzilma",
      subtitle: "Ixtisoslashtirilgan ta’lim muassasalari agentligi huzuridagi Fan olimpiadalari markazi",
      departments: "Bo‘limlar",
      support: "Yordamchi xodimlar",
      contact: "Aloqa ma’lumotlari",
      address: "Manzil",
      workingHours: "Ish vaqti",
      phone: "Telefon",
      email: "Email",
      education: "Ta’lim",
      experience: "tajriba",
      roleMap: {
        Director: "Direktor",
        "Deputy Director": "Direktor o‘rinbosari",
        "Head of Department": "Bo‘lim boshlig‘i",
        "Chief Specialist": "Bosh mutaxassis",
        "Leading Specialist": "Yetakchi mutaxassis",
        "Lead Specialist": "Yetakchi mutaxassis",
        "Chief HR Specialist": "Bosh HR mutaxassisi",
        "Head of Accounting Department": "Buxgalteriya bo‘limi boshlig‘i",
        "Public Procurement Specialist": "Davlat xaridlari bo‘yicha mutaxassis",
        "Head of Digital Media Department": "Raqamli media bo‘limi boshlig‘i",
        Specialist: "Mutaxassis",
        "Software Engineer": "Dasturiy ta’minot muhandisi",
      },
      departmentMap: {
        "Department for Organizing Local Subject Olympiads": "Mahalliy fan olimpiadalarini tashkil etish bo‘limi",
        "Department for International Science Olympiads": "Xalqaro fan olimpiadalari bo‘limi",
        "Department for Olympiad Materials & Online Olympiads": "Olimpiada materiallari va onlayn olimpiadalar bo‘limi",
        "Department for Methodological Guidelines": "Metodik ko‘rsatmalar bo‘limi",
      },
    },
  }[locale]

  const translateRole = (role: string) => labels.roleMap[role as keyof typeof labels.roleMap] ?? role
  const translateDept = (name: string) => labels.departmentMap[name as keyof typeof labels.departmentMap] ?? name

  const localizePerson = (person: { name: string; role: string; work?: string; image?: string; education?: string[] }) => ({
    ...person,
    role: translateRole(person.role),
  })

  const localizedData = {
    ...orgData,
    director: localizePerson(orgData.director),
    deputy: localizePerson(orgData.deputy),
    departments: orgData.departments.map((dept) => ({
      ...dept,
      name: translateDept(dept.name),
      head: localizePerson(dept.head),
      staff: dept.staff.map(localizePerson),
    })),
    support: orgData.support.map(localizePerson),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <Building2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            {labels.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-20">
          <div className="flex flex-col items-center">
            <PersonCard person={localizedData.director} size="lg" educationLabel={labels.education} experienceSuffix={labels.experience} />
            <Connector className="my-4" />
            <PersonCard person={localizedData.deputy} size="md" educationLabel={labels.education} experienceSuffix={labels.experience} />
          </div>
        </section>

        {/* Departments Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10 text-foreground">{labels.departments}</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {localizedData.departments.map((dept, idx) => (
              <Card key={idx} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${dept.color} text-white py-5`}>
                  <CardTitle className="text-lg font-semibold flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Department Head */}
                  <div className="flex flex-col items-center mb-8">
                    <PersonCard person={dept.head} size="md" educationLabel={labels.education} experienceSuffix={labels.experience} />
                  </div>

                  {/* Connector */}
                  {dept.staff.length > 0 && (
                    <div className="flex justify-center mb-6">
                      <div className="flex flex-col items-center">
                        <Connector />
                        <div className="w-32 h-0.5 bg-border" />
                      </div>
                    </div>
                  )}

                  {/* Staff Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 justify-items-center">
                    {dept.staff.map((member, i) => (
                      <PersonCard key={i} person={member} size="sm" educationLabel={labels.education} experienceSuffix={labels.experience} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Staff Section */}
        <section className="mb-20">
          <Card className="shadow-lg">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                {labels.support}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {localizedData.support.map((person, idx) => (
                  <PersonCard key={idx} person={person} size="sm" showEducation={false} educationLabel={labels.education} experienceSuffix={labels.experience} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="max-w-3xl mx-auto shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white py-6">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                {labels.contact}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{labels.address}</p>
                    <p className="text-sm text-muted-foreground">52/1 Darvozakent Street, Yunusabad District, Tashkent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{labels.workingHours}</p>
                    <p className="text-sm text-muted-foreground">Mon – Fri, 09:00 – 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{labels.phone}</p>
                    <p className="text-sm text-muted-foreground">(+998) 77 550 33 66</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{labels.email}</p>
                    <a href="mailto:info@olympcenter.uz" className="text-sm text-primary hover:underline">
                      info@olympcenter.uz
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
