"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Users, Award, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useLocale } from "next-intl"

export default function ApplyPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const content = {
    en: {
      title: "How to Apply",
      subtitle:
        "Join Uzbekistan's premier science olympiad training programs. Our application process helps identify and nurture talented students.",
      stats: {
        students: "Students Trained",
        medals: "International Medals",
        success: "Success Rate",
      },
      processTitle: "Application Process",
      programsTitle: "Available Programs",
      linksTitle: "Quick Links",
      selectionCriteria: "Selection Criteria",
      onlineApplication: "Online Application",
      requiredDocuments: "Required Documents",
      faq: "FAQ",
      startApplication: "Start Your Application",
      deadline: "Application deadline:",
      deadlineDate: "January 31, 2025",
      duration: "Duration",
      level: "Level",
      starts: "Starts",
      applicationSteps: [
        { step: 1, title: "Online Application", description: "Complete the online application form with personal and academic information", duration: "15-20 minutes", status: "active" },
        { step: 2, title: "Document Submission", description: "Upload required documents including transcripts and recommendation letters", duration: "1-2 days", status: "pending" },
        { step: 3, title: "Initial Assessment", description: "Take subject-specific online assessments to demonstrate your knowledge", duration: "2-3 hours", status: "pending" },
        { step: 4, title: "Expert Review", description: "Our expert council reviews your application and assessment results", duration: "1-2 weeks", status: "pending" },
        { step: 5, title: "Final Selection", description: "Successful candidates are invited to join our training programs", duration: "1 week", status: "pending" },
      ],
      programs: [
        { name: "Mathematics Olympiad Training", duration: "6 months", level: "Advanced", nextStart: "March 2025", spots: "25 available" },
        { name: "Physics Competition Prep", duration: "8 months", level: "Intermediate to Advanced", nextStart: "February 2025", spots: "20 available" },
        { name: "Chemistry Intensive Program", duration: "7 months", level: "Advanced", nextStart: "March 2025", spots: "18 available" },
        { name: "Biology Research Track", duration: "9 months", level: "Advanced", nextStart: "April 2025", spots: "15 available" },
        { name: "Computer Science Algorithms", duration: "5 months", level: "Intermediate to Advanced", nextStart: "February 2025", spots: "30 available" },
      ],
    },
    ru: {
      title: "Как подать заявку",
      subtitle:
        "Присоединяйтесь к ведущим программам подготовки к научным олимпиадам в Узбекистане. Наша система отбора помогает выявлять и развивать талантливых учащихся.",
      stats: {
        students: "Подготовлено учеников",
        medals: "Международных медалей",
        success: "Успешность",
      },
      processTitle: "Процесс подачи заявки",
      programsTitle: "Доступные программы",
      linksTitle: "Быстрые ссылки",
      selectionCriteria: "Критерии отбора",
      onlineApplication: "Онлайн-заявка",
      requiredDocuments: "Необходимые документы",
      faq: "FAQ",
      startApplication: "Начать подачу заявки",
      deadline: "Крайний срок подачи:",
      deadlineDate: "31 января 2025",
      duration: "Длительность",
      level: "Уровень",
      starts: "Старт",
      applicationSteps: [
        { step: 1, title: "Онлайн-заявка", description: "Заполните онлайн-форму с личной и академической информацией", duration: "15-20 минут", status: "active" },
        { step: 2, title: "Подача документов", description: "Загрузите обязательные документы, включая табели и рекомендации", duration: "1-2 дня", status: "pending" },
        { step: 3, title: "Первичное оценивание", description: "Пройдите профильные онлайн-оценивания по предметам", duration: "2-3 часа", status: "pending" },
        { step: 4, title: "Экспертный анализ", description: "Экспертный совет рассматривает вашу заявку и результаты", duration: "1-2 недели", status: "pending" },
        { step: 5, title: "Итоговый отбор", description: "Успешные кандидаты зачисляются на программы подготовки", duration: "1 неделя", status: "pending" },
      ],
      programs: [
        { name: "Олимпиадная подготовка по математике", duration: "6 месяцев", level: "Продвинутый", nextStart: "Март 2025", spots: "25 мест" },
        { name: "Подготовка по физике", duration: "8 месяцев", level: "Средний–продвинутый", nextStart: "Февраль 2025", spots: "20 мест" },
        { name: "Интенсив по химии", duration: "7 месяцев", level: "Продвинутый", nextStart: "Март 2025", spots: "18 мест" },
        { name: "Биология: исследовательский трек", duration: "9 месяцев", level: "Продвинутый", nextStart: "Апрель 2025", spots: "15 мест" },
        { name: "Алгоритмы и информатика", duration: "5 месяцев", level: "Средний–продвинутый", nextStart: "Февраль 2025", spots: "30 мест" },
      ],
    },
    uz: {
      title: "Qanday ariza topshiriladi",
      subtitle:
        "O‘zbekistonning yetakchi fan olimpiadasi tayyorgarlik dasturlariga qo‘shiling. Ariza jarayoni iqtidorli o‘quvchilarni saralash va rivojlantirishga qaratilgan.",
      stats: {
        students: "Tayyorlangan o‘quvchilar",
        medals: "Xalqaro medallar",
        success: "Muvaffaqiyat darajasi",
      },
      processTitle: "Ariza topshirish jarayoni",
      programsTitle: "Mavjud dasturlar",
      linksTitle: "Tezkor havolalar",
      selectionCriteria: "Saralash mezonlari",
      onlineApplication: "Onlayn ariza",
      requiredDocuments: "Kerakli hujjatlar",
      faq: "FAQ",
      startApplication: "Arizani boshlash",
      deadline: "Ariza topshirish muddati:",
      deadlineDate: "2025-yil 31-yanvar",
      duration: "Davomiyligi",
      level: "Daraja",
      starts: "Boshlanishi",
      applicationSteps: [
        { step: 1, title: "Onlayn ariza", description: "Shaxsiy va akademik ma’lumotlar bilan ariza formasini to‘ldiring", duration: "15-20 daqiqa", status: "active" },
        { step: 2, title: "Hujjatlarni topshirish", description: "Transcript va tavsiyanomalar kabi zarur hujjatlarni yuklang", duration: "1-2 kun", status: "pending" },
        { step: 3, title: "Dastlabki baholash", description: "Bilimingizni ko‘rsatish uchun fan bo‘yicha onlayn baholashdan o‘ting", duration: "2-3 soat", status: "pending" },
        { step: 4, title: "Ekspert ko‘rib chiqishi", description: "Ekspertlar kengashi ariza va natijalarni tahlil qiladi", duration: "1-2 hafta", status: "pending" },
        { step: 5, title: "Yakuniy saralash", description: "Muvaffaqiyatli nomzodlar tayyorgarlik dasturlariga taklif etiladi", duration: "1 hafta", status: "pending" },
      ],
      programs: [
        { name: "Matematika olimpiadasi tayyorgarligi", duration: "6 oy", level: "Yuqori", nextStart: "2025-yil mart", spots: "25 ta o‘rin" },
        { name: "Fizika musobaqasiga tayyorgarlik", duration: "8 oy", level: "O‘rta-yuqori", nextStart: "2025-yil fevral", spots: "20 ta o‘rin" },
        { name: "Kimyo intensiv dasturi", duration: "7 oy", level: "Yuqori", nextStart: "2025-yil mart", spots: "18 ta o‘rin" },
        { name: "Biologiya tadqiqot yo‘nalishi", duration: "9 oy", level: "Yuqori", nextStart: "2025-yil aprel", spots: "15 ta o‘rin" },
        { name: "Informatika va algoritmlar", duration: "5 oy", level: "O‘rta-yuqori", nextStart: "2025-yil fevral", spots: "30 ta o‘rin" },
      ],
    },
  }[locale]

  return (
    <div className="min-h-screen relative">
      {/* Creative Application Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='apply' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Crect x='10' y='10' width='30' height='40' rx='2' fill='none' stroke='%23ff6b00' stroke-width='2'/%3E%3Cline x1='15' y1='20' x2='35' y2='20' stroke='%23ff6b00' stroke-width='1'/%3E%3Cline x1='15' y1='30' x2='30' y2='30' stroke='%23ff6b00' stroke-width='1'/%3E%3Cline x1='15' y1='40' x2='25' y2='40' stroke='%23ff6b00' stroke-width='1'/%3E%3Ccircle cx='60' cy='30' r='15' fill='none' stroke='%23007bff' stroke-width='2'/%3E%3Cpath d='M 55 30 L 58 33 L 65 25' stroke='%23007bff' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Crect x='80' y='15' width='25' height='35' rx='2' fill='none' stroke='%2300aaff' stroke-width='2'/%3E%3Cline x1='85' y1='25' x2='100' y2='25' stroke='%2300aaff' stroke-width='1'/%3E%3Cline x1='85' y1='35' x2='95' y2='35' stroke='%2300aaff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23apply)'/%3E%3C/svg%3E")`,
          backgroundSize: '250px 250px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-white/80 to-blue-50/70 z-[1]" />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
                  <div className="text-gray-600">{content.stats.students}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600">{content.stats.medals}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600">{content.stats.success}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg mb-12">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-2xl">{content.processTitle}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {content.applicationSteps.map((step, index) => (
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
                  <CardTitle className="text-xl">{content.programsTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {content.programs.map((program, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{program.name}</h4>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          <span>{content.duration}: {program.duration}</span>
                          <span>•</span>
                          <span>{content.level}: {program.level}</span>
                          <span>•</span>
                          <span>{content.starts}: {program.nextStart}</span>
                        </div>
                        <div className="text-sm text-green-600 mt-1">{program.spots}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                  <CardTitle className="text-xl">{content.linksTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Link
                      href="/apply/criteria"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-orange-500" />
                        <span className="font-medium">{content.selectionCriteria}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/apply/online"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">{content.onlineApplication}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/apply/documents"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-green-500" />
                        <span className="font-medium">{content.requiredDocuments}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                    <Link
                      href="/apply/faq"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-purple-500" />
                        <span className="font-medium">{content.faq}</span>
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
                  {content.startApplication}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <p className="text-gray-600 mt-4">
                {content.deadline} <span className="font-semibold">{content.deadlineDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
