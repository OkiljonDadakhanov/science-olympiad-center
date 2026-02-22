"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BookOpen, Award, Target } from "lucide-react"
import { useLocale } from "next-intl"

export default function SelectionCriteriaPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const content = {
    en: {
      title: "Selection Criteria",
      subtitle:
        "Our Science Olympiad Center follows a transparent and merit-based selection approach to identify students capable of representing Uzbekistan in international competitions.",
      eligibility: "Eligibility Requirements",
      criteriaWeights: "Selection Criteria & Weights",
      subjectRequirements: "Subject-Specific Requirements",
      assessment: "Assessment Process",
      initialScreening: "Initial Screening",
      expertEvaluation: "Expert Evaluation",
      noteTitle: "Important Note",
      noteText:
        "Meeting the minimum requirements does not guarantee selection. Due to limited capacity and high competition, only the strongest candidates are admitted.",
      eligibilityRequirements: [
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
      ],
      selectionCriteria: [
        { icon: BookOpen, title: "Academic Excellence", weight: "40%", description: "School performance, test results, and academic achievements." },
        { icon: Target, title: "Problem-Solving Skills", weight: "30%", description: "Results from olympiad-style tasks and analytical reasoning tests." },
        { icon: Award, title: "Competition Experience", weight: "20%", description: "Achievements in regional, national, or international olympiads." },
        { icon: Users, title: "Motivation & Commitment", weight: "10%", description: "Evaluation of motivation letter, recommendations, and dedication to learning." },
      ],
      subjectRequirementsData: [
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
      ],
      assessmentInitial: [
        "Application review and eligibility verification.",
        "Academic transcript evaluation.",
        "Review of recommendation letters and motivation statement.",
      ],
      assessmentExpert: [
        "Subject-specific written tests.",
        "Logical and problem-solving assessments.",
        "Interviews conducted by academic experts.",
        "Final ranking and selection by the National Olympiad Committee.",
      ],
    },
    ru: {
      title: "Критерии отбора",
      subtitle:
        "Центр использует прозрачную и основанную на заслугах систему отбора для выявления учащихся, способных представлять Узбекистан на международных олимпиадах.",
      eligibility: "Требования к кандидатам",
      criteriaWeights: "Критерии отбора и вес",
      subjectRequirements: "Требования по предметам",
      assessment: "Этапы оценивания",
      initialScreening: "Первичный отбор",
      expertEvaluation: "Экспертная оценка",
      noteTitle: "Важно",
      noteText:
        "Соответствие минимальным требованиям не гарантирует зачисление. Из-за высокой конкуренции отбираются только наиболее подготовленные кандидаты.",
      eligibilityRequirements: [
        {
          category: "Возрастные требования",
          items: [
            "К участию допускаются учащиеся 10–18 лет, обучающиеся в школах и специализированных учреждениях.",
            "Для выдающихся кандидатов по рекомендации профильных комиссий возможны исключения.",
          ],
        },
        {
          category: "Академические показатели",
          items: [
            "Минимальный GPA по профильным предметам — 4.0 из 5.0.",
            "Подтверждённые успехи по математике, физике, химии, биологии или информатике.",
            "Наличие опыта участия и достижений в олимпиадах.",
          ],
        },
        {
          category: "Предметная подготовка",
          items: [
            "Продвинутые знания в выбранной предметной области.",
            "Умение анализировать и решать задачи олимпиадного уровня.",
          ],
        },
      ],
      selectionCriteria: [
        { icon: BookOpen, title: "Академическая успеваемость", weight: "40%", description: "Школьные результаты, тестовые баллы и учебные достижения." },
        { icon: Target, title: "Навыки решения задач", weight: "30%", description: "Результаты аналитических и олимпиадных заданий." },
        { icon: Award, title: "Соревновательный опыт", weight: "20%", description: "Достижения на региональных, республиканских и международных олимпиадах." },
        { icon: Users, title: "Мотивация и вовлечённость", weight: "10%", description: "Оценка мотивационного письма, рекомендаций и целеустремлённости." },
      ],
      subjectRequirementsData: [
        {
          subject: "Математика",
          requirements: [
            "Сильная база по алгебре, геометрии, теории чисел и комбинаторике.",
            "Опыт решения доказательных и аналитических задач.",
            "Готовность к задачам уровня IMO.",
          ],
        },
        {
          subject: "Физика",
          requirements: [
            "Уверенные знания механики, термодинамики и электромагнетизма.",
            "Навыки математического моделирования и аналитического мышления.",
            "Подготовка к задачам уровня IPhO.",
          ],
        },
        {
          subject: "Химия",
          requirements: [
            "Знание органической, неорганической и физической химии.",
            "Навыки проведения экспериментов и анализа реакций.",
            "Подготовка к теоретическим и практическим заданиям уровня IChO.",
          ],
        },
        {
          subject: "Биология",
          requirements: [
            "Знания по молекулярной биологии, генетике, биохимии и экологии.",
            "Опыт лабораторной работы и научного исследования.",
            "Готовность к заданиям уровня IBO.",
          ],
        },
        {
          subject: "Информатика",
          requirements: [
            "Уверенное владение C++, Python или Java.",
            "Понимание алгоритмов и структур данных.",
            "Готовность к соревновательным задачам уровня IOI.",
          ],
        },
      ],
      assessmentInitial: [
        "Проверка заявки и соответствия требованиям.",
        "Анализ академических результатов.",
        "Рассмотрение рекомендаций и мотивационного письма.",
      ],
      assessmentExpert: [
        "Письменные предметные тесты.",
        "Оценка логики и навыков решения задач.",
        "Собеседования с экспертами.",
        "Итоговый рейтинг и решение комиссии.",
      ],
    },
    uz: {
      title: "Saralash mezonlari",
      subtitle:
        "Markaz iqtidorli o‘quvchilarni xalqaro olimpiadalarga tayyorlash uchun ochiq va merit tamoyiliga asoslangan saralash tizimini qo‘llaydi.",
      eligibility: "Nomzodga qo‘yiladigan talablar",
      criteriaWeights: "Saralash mezonlari va ulushi",
      subjectRequirements: "Fanlar bo‘yicha talablar",
      assessment: "Baholash jarayoni",
      initialScreening: "Dastlabki saralash",
      expertEvaluation: "Ekspert baholashi",
      noteTitle: "Muhim eslatma",
      noteText:
        "Minimal talablarga mos kelish tanlovdan o‘tishni kafolatlamaydi. O‘rinlar cheklanganligi sababli eng kuchli nomzodlar saralanadi.",
      eligibilityRequirements: [
        {
          category: "Yosh bo‘yicha talablar",
          items: [
            "10–18 yoshdagi, umumta’lim yoki ixtisoslashtirilgan ta’lim muassasalarida o‘qiyotgan o‘quvchilar qatnasha oladi.",
            "Hududiy yoki respublika komissiyasi tavsiyasi asosida istisnolar qo‘llanishi mumkin.",
          ],
        },
        {
          category: "Akademik ko‘rsatkichlar",
          items: [
            "Asosiy fanlar bo‘yicha minimal GPA — 5.0 dan 4.0.",
            "Matematika, fizika, kimyo, biologiya yoki informatika bo‘yicha yuqori natijalar.",
            "Hududiy yoki milliy olimpiadalardagi ishtirok va yutuqlar.",
          ],
        },
        {
          category: "Fan bo‘yicha tayyorgarlik",
          items: [
            "Tanlangan yo‘nalish bo‘yicha chuqur bilim va masala yechish ko‘nikmasi.",
            "Olimpiada darajasidagi masalalarni tahlil qilish va yecha olish.",
          ],
        },
      ],
      selectionCriteria: [
        { icon: BookOpen, title: "Akademik yutuqlar", weight: "40%", description: "Maktab natijalari, test ballari va akademik yutuqlar." },
        { icon: Target, title: "Masala yechish ko‘nikmalari", weight: "30%", description: "Analitik fikrlash va olimpiada tipidagi topshiriqlar natijalari." },
        { icon: Award, title: "Musobaqa tajribasi", weight: "20%", description: "Hududiy, respublika va xalqaro olimpiadalardagi natijalar." },
        { icon: Users, title: "Motivatsiya va intilish", weight: "10%", description: "Motivatsion xat, tavsiyanoma va maqsadlilik darajasi." },
      ],
      subjectRequirementsData: [
        {
          subject: "Matematika",
          requirements: [
            "Algebra, geometriya, sonlar nazariyasi va kombinatorika bo‘yicha mustahkam baza.",
            "Isbot talab qiladigan va analitik masalalar yechish tajribasi.",
            "IMO darajasidagi masalalarga tayyorlik.",
          ],
        },
        {
          subject: "Fizika",
          requirements: [
            "Mexanika, termodinamika va elektromagnetizm bo‘yicha kuchli bilim.",
            "Matematik modellashtirish va tahliliy fikrlash ko‘nikmasi.",
            "IPhO darajasidagi topshiriqlarga tayyorlik.",
          ],
        },
        {
          subject: "Kimyo",
          requirements: [
            "Organik, noorganik va fizik kimyo bo‘yicha bilim.",
            "Tajriba o‘tkazish va kimyoviy jarayonlarni tahlil qilish ko‘nikmasi.",
            "IChO nazariy va amaliy topshiriqlariga tayyorlik.",
          ],
        },
        {
          subject: "Biologiya",
          requirements: [
            "Molekulyar biologiya, genetika, biokimyo va ekologiya bo‘yicha bilim.",
            "Laboratoriya amaliyoti va ilmiy izlanish bilan tanishlik.",
            "IBO darajasidagi topshiriqlarga tayyorlik.",
          ],
        },
        {
          subject: "Informatika",
          requirements: [
            "C++, Python yoki Java bo‘yicha erkin ishlash.",
            "Algoritmlar va ma’lumotlar tuzilmalari bo‘yicha kuchli tushuncha.",
            "IOI uslubidagi dasturlash topshiriqlariga tayyorlik.",
          ],
        },
      ],
      assessmentInitial: [
        "Arizani ko‘rib chiqish va talabga moslikni tekshirish.",
        "Akademik ko‘rsatkichlarni tahlil qilish.",
        "Tavsiyanomalar va motivatsion xatni baholash.",
      ],
      assessmentExpert: [
        "Fan bo‘yicha yozma sinovlar.",
        "Mantiqiy fikrlash va masala yechish baholashlari.",
        "Ekspertlar bilan suhbatlar.",
        "Yakuniy reyting va komissiya qarori.",
      ],
    },
  }[locale]

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg/selection.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          {/* Eligibility Requirements */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              <CardTitle className="text-2xl">{content.eligibility}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.eligibilityRequirements.map((req, index) => (
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
              <CardTitle className="text-2xl">{content.criteriaWeights}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {content.selectionCriteria.map((criteria, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{content.subjectRequirements}</h2>
            {content.subjectRequirementsData.map((subject, index) => (
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
              <CardTitle className="text-2xl">{content.assessment}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">{content.initialScreening}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {content.assessmentInitial.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">{content.expertEvaluation}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {content.assessmentExpert.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Note */}
          <div className="text-center mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{content.noteTitle}</h3>
            <p className="text-yellow-700">
              {content.noteText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
