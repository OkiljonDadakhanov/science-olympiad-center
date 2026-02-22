"use client"

import { useEffect, useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target } from "lucide-react"
import { FadingBackground } from "@/components/fading-bg" // import the fading bg
import { getApiUrl } from "@/lib/config"
import { useLocale } from "next-intl"
 
export type Mentor = {
  id: number
  full_name: string
  year: number | null
  subject: string | null
  region: string | null
  district: string | null
  position: string | null
  institution: string | null
  photo_url: string | null
}

export type FilterOption =
  | string
  | number
  | { value: string; label: string }

/* -------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------*/

export default function ExpertCouncilPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const [members, setMembers] = useState<Mentor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const content = {
    en: {
      title: "Expert Council",
      subtitle:
        "Our Expert Council consists of distinguished educators and subject experts who contribute to high-quality olympiad preparation and academic excellence.",
      responsibilities: [
        { icon: BookOpen, title: "Curriculum Development", description: "Design and review training curricula for each subject area" },
        { icon: Users, title: "Student Assessment", description: "Evaluate student performance and provide feedback" },
        { icon: Award, title: "Competition Preparation", description: "Prepare students for national and international competitions" },
        { icon: Target, title: "Quality Assurance", description: "Ensure high standards in all educational programs" },
      ],
      filterMembers: "Filter Members",
      clearAll: "Clear All",
      labels: {
        year: "Year",
        subject: "Subject",
        region: "Region",
        district: "District",
        position: "Position",
        ordering: "Ordering",
        search: "Search",
      },
      orderingOptions: [
        { value: "", label: "Default" },
        { value: "year", label: "Year ↑" },
        { value: "-year", label: "Year ↓" },
        { value: "full_name", label: "Name ↑" },
        { value: "-full_name", label: "Name ↓" },
      ],
      searchPlaceholder: "Search by name, institution, or subject",
      councilMembers: "Council Members",
      loading: "Loading...",
      failedLoad: "Failed to load council members",
      regionLabel: "Region",
      institutionLabel: "Institution",
      yearLabel: "Year",
      page: "Page",
      of: "of",
      membersCount: "members",
      previous: "Previous",
      next: "Next",
      meetingSchedule: "Meeting Schedule",
      monthly: "Monthly",
      quarterly: "Quarterly",
      annually: "Annually",
      monthlyDesc: "Regular Council Meetings",
      quarterlyDesc: "Strategic Planning Sessions",
      annuallyDesc: "Comprehensive Program Review",
      all: "All",
    },
    ru: {
      title: "Экспертный совет",
      subtitle:
        "Экспертный совет объединяет опытных педагогов и предметных специалистов, обеспечивающих качество олимпиадной подготовки.",
      responsibilities: [
        { icon: BookOpen, title: "Разработка учебных программ", description: "Подготовка и обновление программ обучения по предметам" },
        { icon: Users, title: "Оценка учащихся", description: "Анализ результатов учащихся и рекомендации по развитию" },
        { icon: Award, title: "Подготовка к соревнованиям", description: "Подготовка команд к национальным и международным олимпиадам" },
        { icon: Target, title: "Контроль качества", description: "Обеспечение высоких стандартов образовательных программ" },
      ],
      filterMembers: "Фильтры",
      clearAll: "Сбросить",
      labels: {
        year: "Год",
        subject: "Предмет",
        region: "Регион",
        district: "Район",
        position: "Должность",
        ordering: "Сортировка",
        search: "Поиск",
      },
      orderingOptions: [
        { value: "", label: "По умолчанию" },
        { value: "year", label: "Год ↑" },
        { value: "-year", label: "Год ↓" },
        { value: "full_name", label: "Имя ↑" },
        { value: "-full_name", label: "Имя ↓" },
      ],
      searchPlaceholder: "Поиск по имени, учреждению или предмету",
      councilMembers: "Члены совета",
      loading: "Загрузка...",
      failedLoad: "Не удалось загрузить членов совета",
      regionLabel: "Регион",
      institutionLabel: "Учреждение",
      yearLabel: "Год",
      page: "Страница",
      of: "из",
      membersCount: "участников",
      previous: "Назад",
      next: "Вперёд",
      meetingSchedule: "График заседаний",
      monthly: "Ежемесячно",
      quarterly: "Ежеквартально",
      annually: "Ежегодно",
      monthlyDesc: "Регулярные заседания совета",
      quarterlyDesc: "Сессии стратегического планирования",
      annuallyDesc: "Комплексный обзор программ",
      all: "Все",
    },
    uz: {
      title: "Ekspertlar kengashi",
      subtitle:
        "Ekspertlar kengashi tajribali pedagoglar va fan mutaxassislaridan iborat bo‘lib, olimpiadaga tayyorgarlik sifatini ta’minlaydi.",
      responsibilities: [
        { icon: BookOpen, title: "O‘quv dasturlarini ishlab chiqish", description: "Har bir fan yo‘nalishi bo‘yicha o‘quv dasturlarini tayyorlash va ko‘rib chiqish" },
        { icon: Users, title: "O‘quvchilarni baholash", description: "Natijalarni tahlil qilish va rivojlanish bo‘yicha tavsiyalar berish" },
        { icon: Award, title: "Musobaqaga tayyorlash", description: "Jamoalarni milliy va xalqaro olimpiadalarga tayyorlash" },
        { icon: Target, title: "Sifat nazorati", description: "Barcha dasturlarda yuqori ta’lim standartlarini ta’minlash" },
      ],
      filterMembers: "Filtrlar",
      clearAll: "Tozalash",
      labels: {
        year: "Yil",
        subject: "Fan",
        region: "Hudud",
        district: "Tuman",
        position: "Lavozim",
        ordering: "Saralash",
        search: "Qidiruv",
      },
      orderingOptions: [
        { value: "", label: "Standart" },
        { value: "year", label: "Yil ↑" },
        { value: "-year", label: "Yil ↓" },
        { value: "full_name", label: "Ism ↑" },
        { value: "-full_name", label: "Ism ↓" },
      ],
      searchPlaceholder: "Ism, muassasa yoki fan bo‘yicha qidiring",
      councilMembers: "Kengash a’zolari",
      loading: "Yuklanmoqda...",
      failedLoad: "Kengash a’zolarini yuklab bo‘lmadi",
      regionLabel: "Hudud",
      institutionLabel: "Muassasa",
      yearLabel: "Yil",
      page: "Sahifa",
      of: "dan",
      membersCount: "a’zo",
      previous: "Oldingi",
      next: "Keyingi",
      meetingSchedule: "Yig‘ilishlar jadvali",
      monthly: "Har oy",
      quarterly: "Har chorak",
      annually: "Har yili",
      monthlyDesc: "Muntazam kengash yig‘ilishlari",
      quarterlyDesc: "Strategik rejalashtirish sessiyalari",
      annuallyDesc: "Dasturlar bo‘yicha yillik tahlil",
      all: "Barchasi",
    },
  }[locale]

  // Pagination
  const [nextUrl, setNextUrl] = useState<string | null>(null)
  const [prevUrl, setPrevUrl] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)

  // Filters
  const [year, setYear] = useState<string>("ALL")
  const [subject, setSubject] = useState<string>("ALL")
  const [region, setRegion] = useState<string>("ALL")
  const [district, setDistrict] = useState<string>("ALL")
  const [position, setPosition] = useState<string>("ALL")
  const [search, setSearch] = useState<string>("")
  const [ordering, setOrdering] = useState<string>("")

  // Options
  const [availableYears, setAvailableYears] = useState<number[]>([])
  const [availableSubjects, setAvailableSubjects] = useState<string[]>([])
  const [availableRegions, setAvailableRegions] = useState<string[]>([])
  const [availableDistricts, setAvailableDistricts] = useState<string[]>([])
  const [availablePositions, setAvailablePositions] = useState<string[]>([])

  /* -------------------------------------------------------
     FETCH MEMBERS
  --------------------------------------------------------*/
  async function fetchMentors(url?: string) {
    setLoading(true)
    setError("")

    try {
      const endpoint = url || getApiUrl('/mentors/')
      const res = await fetch(endpoint)

      if (!res.ok) throw new Error("Failed to fetch mentors")

      const data = await res.json()
      const results: Mentor[] = data.results || []

      setMembers(results)

      // Pagination info from API
      setNextUrl(data.next ?? null)
      setPrevUrl(data.previous ?? null)
      const count = typeof data.count === "number" ? data.count : results.length
      setTotalCount(count)

      // Derive current page from URL (default 1)
      if (url) {
        const urlObj = new URL(url)
        const pageParam = urlObj.searchParams.get("page")
        setCurrentPage(pageParam ? parseInt(pageParam) : 1)
      } else {
        setCurrentPage(1)
      }

      // Derive total pages from count and page size actually returned
      const pageSize = results.length > 0 ? results.length : 1
      setTotalPages(Math.max(1, Math.ceil(count / pageSize)))

      setAvailableYears(
        Array.from(
          new Set(results.map((m) => m.year).filter((y): y is number => y != null))
        ).sort((a, b) => b - a)
      )

      setAvailableSubjects(
        Array.from(new Set(results.map((m) => m.subject).filter(Boolean))).sort()
      )

      setAvailableRegions(
        Array.from(new Set(results.map((m) => m.region).filter(Boolean))).sort()
      )

      setAvailableDistricts(
        Array.from(new Set(results.map((m) => m.district).filter(Boolean))).sort()
      )

      setAvailablePositions(
        Array.from(new Set(results.map((m) => m.position).filter(Boolean))).sort()
      )
    } catch (err) {
      console.error(err)
      setError(content.failedLoad)
      setMembers([])
    } finally {
      setLoading(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchMentors()
  }, [])

  // Fetch with filters
  useEffect(() => {
    const url = new URL(getApiUrl('/mentors/'))

    if (year !== "ALL") url.searchParams.set("year", year)
    if (subject !== "ALL") url.searchParams.set("subject", subject)
    if (region !== "ALL") url.searchParams.set("region", region)
    if (district !== "ALL") url.searchParams.set("district", district)
    if (position !== "ALL") url.searchParams.set("position", position)
    if (search.trim()) url.searchParams.set("search", search.trim())
    if (ordering) url.searchParams.set("ordering", ordering)

    fetchMentors(url.toString())
  }, [year, subject, region, district, position, search, ordering])

  const handlePageChange = (url: string | null) => {
    if (!url) return
    fetchMentors(url)
    // keep scroll behavior simple; user can see top of list already
  }

  /* -------------------------------------------------------
     RESPONSIBILITIES
  --------------------------------------------------------*/
  const responsibilities = useMemo(
    () => content.responsibilities,
    [content]
  )

  /* -------------------------------------------------------
     RENDER
  --------------------------------------------------------*/
  return (
    <div className="min-h-screen relative">
      {/* Fading Background */}
      <FadingBackground imageUrl="/expert-bg.jpg" height={500} />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {responsibilities.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{content.filterMembers}</h3>
                <button
                  onClick={() => {
                    setYear("ALL")
                    setSubject("ALL")
                    setRegion("ALL")
                    setDistrict("ALL")
                    setPosition("ALL")
                    setSearch("")
                    setOrdering("")
                  }}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  {content.clearAll}
                </button>
              </div>

              {/* Row 1 */}
              <div className="grid md:grid-cols-3 gap-4">
                <FilterSelect allLabel={content.all} label={content.labels.year} value={year} setValue={setYear} options={availableYears} />
                <FilterSelect allLabel={content.all} label={content.labels.subject} value={subject} setValue={setSubject} options={availableSubjects} />
                <FilterSelect allLabel={content.all} label={content.labels.region} value={region} setValue={setRegion} options={availableRegions} />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <FilterSelect allLabel={content.all} label={content.labels.district} value={district} setValue={setDistrict} options={availableDistricts} />
                <FilterSelect allLabel={content.all} label={content.labels.position} value={position} setValue={setPosition} options={availablePositions} />
                <FilterSelect
                  allLabel={content.all}
                  label={content.labels.ordering}
                  value={ordering}
                  setValue={setOrdering}
                  isCustom
                  options={content.orderingOptions}
                />
              </div>

              {/* Search */}
              <div className="mt-4">
                <label className="text-sm font-medium mb-2 block">{content.labels.search}</label>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={content.searchPlaceholder}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </CardContent>
          </Card>

          {/* Members */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">{content.councilMembers}</h2>

            {loading && <p className="text-center text-gray-600">{content.loading}</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member) => (
                    <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <img
                            src={member.photo_url || "/placeholder.png"}
                            alt={member.full_name}
                            className="w-32 h-32 rounded-full object-cover shadow mb-4"
                          />
                          <h3 className="text-xl font-bold text-gray-900">{member.full_name}</h3>
                          <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {member.subject && <Badge variant="secondary">{member.subject}</Badge>}
                            {member.position && <Badge variant="outline">{member.position}</Badge>}
                          </div>
                          <div className="mt-4 text-gray-600 text-sm space-y-1">
                            <p>
                              <span className="font-semibold text-gray-800">{content.regionLabel}:</span> {member.region}
                            </p>
                            {member.institution && (
                              <p>
                                <span className="font-semibold text-gray-800">{content.institutionLabel}:</span>{" "}
                                {member.institution}
                              </p>
                            )}
                            {member.year && (
                              <p>
                                <span className="font-semibold text-gray-800">{content.yearLabel}:</span> {member.year}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-10 flex flex-col items-center gap-3">
                    <div className="text-sm text-gray-600">
                      {content.page} <span className="font-semibold">{currentPage}</span> {content.of}{" "}
                      <span className="font-semibold">{totalPages}</span> ({totalCount} {content.membersCount})
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handlePageChange(prevUrl)}
                        disabled={!prevUrl}
                        className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40"
                      >
                        ← {content.previous}
                      </button>
                      <button
                        onClick={() => handlePageChange(nextUrl)}
                        disabled={!nextUrl}
                        className="px-4 py-2 rounded-lg border bg-primary text-white hover:bg-primary/90 disabled:opacity-40"
                      >
                        {content.next} →
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Schedule */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">{content.meetingSchedule}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <ScheduleItem label={content.monthly} desc={content.monthlyDesc} />
                <ScheduleItem label={content.quarterly} desc={content.quarterlyDesc} />
                <ScheduleItem label={content.annually} desc={content.annuallyDesc} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   FILTER SELECT COMPONENT
--------------------------------------------------------*/

function FilterSelect({
  label,
  allLabel,
  value,
  setValue,
  options,
  isCustom = false,
}: {
  label: string
  allLabel: string
  value: string
  setValue: (v: string) => void
  options: (string | number | { value: string; label: string })[]
  isCustom?: boolean
}) {
  return (
    <div>
      <label className="text-sm font-medium mb-2 block">{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      >
        {!isCustom && <option value="ALL">{allLabel} {label}</option>}
        {isCustom
          ? options.map((o) => {
              const opt = o as { value: string; label: string }
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              )
            })
          : options.map((o) => (
              <option key={String(o)} value={String(o)}>
                {String(o)}
              </option>
            ))}
      </select>
    </div>
  )
}

/* -------------------------------------------------------
   SCHEDULE ITEM
--------------------------------------------------------*/

function ScheduleItem({ label, desc }: { label: string; desc: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-orange-500 mb-2">{label}</div>
      <div className="text-gray-600">{desc}</div>
    </div>
  )
}
