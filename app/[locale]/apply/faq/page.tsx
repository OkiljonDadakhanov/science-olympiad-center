"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle, Users, Clock, Award } from "lucide-react"
import { useLocale } from "next-intl"

export default function FAQPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const content = {
    en: {
      title: "Frequently Asked Questions (FAQ)",
      subtitle:
        "Find detailed answers to common questions about admissions, olympiad preparation, and training at the Science Olympiad Center.",
      categories: {
        general: "General Information",
        application: "Application Process",
        programs: "Programs & Training",
        support: "Technical Support",
      },
      contactTitle: "Still Have Questions?",
      contactSubtitle: "Our team is here to support you with admissions, programs, and technical matters.",
      channels: {
        email: "Email Support",
        chat: "Live Chat",
        phone: "Phone Support",
      },
      channelDescriptions: {
        email: "Get detailed responses directly to your inbox.",
        chat: "Talk directly with our admissions team.",
        phone: "Speak to an advisor directly.",
      },
      channelActions: {
        email: "Send Email",
        chat: "Start Chat",
        phone: "Call Now",
      },
      faqs: [
        {
          category: "General Information",
          question: "What is the Science Olympiad Center?",
          answer:
            "The Science Olympiad Center is a state educational institution under the Agency for Specialized Educational Institutions. The Center identifies and develops gifted students through structured olympiad preparation and international collaboration.",
        },
        {
          category: "General Information",
          question: "Who can apply?",
          answer:
            "Students aged 10 to 18 with strong potential in mathematics, physics, chemistry, biology, or computer science can apply from all regions of Uzbekistan.",
        },
        {
          category: "General Information",
          question: "Are programs free of charge?",
          answer:
            "Yes. Training programs are funded by the state and include academic preparation. Additional support may be provided based on program format.",
        },
        {
          category: "Application Process",
          question: "When is the application deadline?",
          answer:
            "Application deadlines are announced each intake period on the official website. We recommend submitting early due to competitive selection.",
        },
        {
          category: "Application Process",
          question: "What documents are required?",
          answer:
            "Usually required documents include transcripts, ID copy, recommendation letters, personal statement, and guardian consent form. Exact requirements are listed on the documents page.",
        },
        {
          category: "Application Process",
          question: "How is selection conducted?",
          answer:
            "Selection includes document screening, subject-specific assessments, and expert review. Final decisions are based on merit and demonstrated potential.",
        },
        {
          category: "Programs & Training",
          question: "Which subjects are offered?",
          answer:
            "The Center provides olympiad training in mathematics, physics, chemistry, biology, and informatics, aligned with international standards.",
        },
        {
          category: "Programs & Training",
          question: "Can I apply for multiple subjects?",
          answer:
            "You may indicate multiple interests, but final placement is typically made in the subject where your readiness and performance are strongest.",
        },
        {
          category: "Technical Support",
          question: "How can I track my application status?",
          answer:
            "You can track updates through your application reference and notifications sent to your email during each review stage.",
        },
        {
          category: "Technical Support",
          question: "What file formats are accepted?",
          answer:
            "Most files are accepted in PDF, JPG, or PNG format, with size limits specified in the application portal.",
        },
      ],
    },
    ru: {
      title: "Часто задаваемые вопросы (FAQ)",
      subtitle:
        "Здесь собраны ответы на основные вопросы о поступлении, подготовке к олимпиадам и обучении в Центре научных олимпиад.",
      categories: {
        general: "Общая информация",
        application: "Процесс подачи заявки",
        programs: "Программы и обучение",
        support: "Техническая поддержка",
      },
      contactTitle: "Остались вопросы?",
      contactSubtitle: "Наша команда поможет вам по вопросам поступления, программ и технической поддержки.",
      channels: {
        email: "Поддержка по email",
        chat: "Онлайн-чат",
        phone: "Телефонная поддержка",
      },
      channelDescriptions: {
        email: "Получите подробный ответ на электронную почту.",
        chat: "Свяжитесь с командой приёмной комиссии напрямую.",
        phone: "Поговорите с консультантом по телефону.",
      },
      channelActions: {
        email: "Отправить письмо",
        chat: "Начать чат",
        phone: "Позвонить",
      },
      faqs: [
        {
          category: "Общая информация",
          question: "Что такое Центр научных олимпиад?",
          answer:
            "Центр научных олимпиад — государственное образовательное учреждение при Агентстве специализированных образовательных учреждений. Центр выявляет и развивает талантливых учеников через системную олимпиадную подготовку и международное сотрудничество.",
        },
        {
          category: "Общая информация",
          question: "Кто может подать заявку?",
          answer:
            "Подать заявку могут учащиеся 10–18 лет, проявляющие высокий потенциал по математике, физике, химии, биологии или информатике, из всех регионов Узбекистана.",
        },
        {
          category: "Общая информация",
          question: "Программы бесплатны?",
          answer:
            "Да. Учебные программы финансируются государством и включают академическую подготовку. Дополнительная поддержка зависит от формата программы.",
        },
        {
          category: "Процесс подачи заявки",
          question: "Когда крайний срок подачи заявки?",
          answer:
            "Сроки публикации объявляются для каждого набора на официальном сайте. Рекомендуем подавать заявку заранее из-за конкурсного отбора.",
        },
        {
          category: "Процесс подачи заявки",
          question: "Какие документы необходимы?",
          answer:
            "Обычно требуются табели/транскрипт, копия документа личности, рекомендательные письма, мотивационное письмо и согласие родителя/опекуна. Точный перечень указан на странице документов.",
        },
        {
          category: "Процесс подачи заявки",
          question: "Как проходит отбор?",
          answer:
            "Отбор включает проверку документов, профильные оценивания и экспертную оценку. Итоговое решение принимается по академическим результатам и потенциалу кандидата.",
        },
        {
          category: "Программы и обучение",
          question: "По каким предметам ведётся подготовка?",
          answer:
            "Центр проводит олимпиадную подготовку по математике, физике, химии, биологии и информатике в соответствии с международными стандартами.",
        },
        {
          category: "Программы и обучение",
          question: "Можно ли выбрать несколько предметов?",
          answer:
            "Можно указать несколько направлений интереса, однако итоговое зачисление обычно проводится по предмету с наилучшими результатами и готовностью.",
        },
        {
          category: "Техническая поддержка",
          question: "Как отслеживать статус заявки?",
          answer:
            "Статус можно отслеживать по номеру заявки и уведомлениям, которые приходят на электронную почту на каждом этапе рассмотрения.",
        },
        {
          category: "Техническая поддержка",
          question: "Какие форматы файлов принимаются?",
          answer:
            "Обычно принимаются PDF, JPG и PNG с ограничением по размеру, указанным в заявочной системе.",
        },
      ],
    },
    uz: {
      title: "Ko‘p beriladigan savollar (FAQ)",
      subtitle:
        "Qabul, olimpiadaga tayyorgarlik va o‘quv jarayoniga oid eng muhim savollarga javoblarni shu yerda topasiz.",
      categories: {
        general: "Umumiy ma’lumot",
        application: "Ariza topshirish jarayoni",
        programs: "Dasturlar va tayyorgarlik",
        support: "Texnik yordam",
      },
      contactTitle: "Yana savollaringiz bormi?",
      contactSubtitle: "Jamoamiz qabul, dasturlar va texnik masalalar bo‘yicha sizga yordam beradi.",
      channels: {
        email: "Email orqali yordam",
        chat: "Jonli chat",
        phone: "Telefon orqali yordam",
      },
      channelDescriptions: {
        email: "Savollaringizga batafsil javobni emailingizga oling.",
        chat: "Qabul bo‘limi bilan bevosita muloqot qiling.",
        phone: "Maslahatchi bilan telefon orqali gaplashing.",
      },
      channelActions: {
        email: "Email yuborish",
        chat: "Chatni boshlash",
        phone: "Qo‘ng‘iroq qilish",
      },
      faqs: [
        {
          category: "Umumiy ma’lumot",
          question: "Fan olimpiadalari markazi nima?",
          answer:
            "Fan olimpiadalari markazi Ixtisoslashtirilgan ta’lim muassasalari agentligi tasarrufidagi davlat ta’lim muassasasi hisoblanadi. Markaz iqtidorli o‘quvchilarni aniqlash va rivojlantirishga yo‘naltirilgan.",
        },
        {
          category: "Umumiy ma’lumot",
          question: "Kimlar ariza topshirishi mumkin?",
          answer:
            "Matematika, fizika, kimyo, biologiya yoki informatika yo‘nalishlarida salohiyati yuqori bo‘lgan 10–18 yoshli o‘quvchilar O‘zbekistonning barcha hududlaridan ariza topshirishi mumkin.",
        },
        {
          category: "Umumiy ma’lumot",
          question: "Dasturlar bepulmi?",
          answer:
            "Ha. O‘quv dasturlari davlat tomonidan moliyalashtiriladi va akademik tayyorgarlikni qamrab oladi. Qo‘shimcha yordam dastur formatiga bog‘liq bo‘lishi mumkin.",
        },
        {
          category: "Ariza topshirish jarayoni",
          question: "Ariza topshirishning oxirgi muddati qachon?",
          answer:
            "Har bir qabul davri bo‘yicha muddatlar rasmiy sayt orqali e’lon qilinadi. Tanlov kuchli bo‘lgani sababli arizani erta topshirish tavsiya etiladi.",
        },
        {
          category: "Ariza topshirish jarayoni",
          question: "Qaysi hujjatlar kerak bo‘ladi?",
          answer:
            "Odatda transcript, shaxsni tasdiqlovchi hujjat nusxasi, tavsiyanoma, motivatsion xat va ota-ona/vasiy rozilik xati talab qilinadi. Aniq ro‘yxat hujjatlar sahifasida beriladi.",
        },
        {
          category: "Ariza topshirish jarayoni",
          question: "Saralash qanday o‘tkaziladi?",
          answer:
            "Saralash hujjatlarni tekshirish, fan bo‘yicha baholash va ekspertlar xulosasi asosida amalga oshiriladi. Yakuniy qaror nomzodning natijalari va salohiyatiga ko‘ra qabul qilinadi.",
        },
        {
          category: "Dasturlar va tayyorgarlik",
          question: "Qaysi fanlar bo‘yicha tayyorgarlik bor?",
          answer:
            "Markaz matematika, fizika, kimyo, biologiya va informatika fanlari bo‘yicha xalqaro standartlarga mos olimpiada tayyorgarligini olib boradi.",
        },
        {
          category: "Dasturlar va tayyorgarlik",
          question: "Bir nechta fan bo‘yicha ariza topshirsa bo‘ladimi?",
          answer:
            "Bir nechta yo‘nalishni ko‘rsatish mumkin, biroq yakuniy joylashtirish odatda sizning kuchli natija ko‘rsatgan asosiy yo‘nalishingiz bo‘yicha amalga oshiriladi.",
        },
        {
          category: "Texnik yordam",
          question: "Ariza holatini qanday kuzataman?",
          answer:
            "Ariza raqami va emailga yuboriladigan bosqichma-bosqich bildirishnomalar orqali ariza holatini kuzatishingiz mumkin.",
        },
        {
          category: "Texnik yordam",
          question: "Qaysi fayl formatlari qabul qilinadi?",
          answer:
            "Asosan PDF, JPG va PNG formatlari qabul qilinadi. Fayl hajmi bo‘yicha cheklovlar ariza platformasida ko‘rsatilgan.",
        },
      ],
    },
  }[locale]

  // Automatically count categories
  const faqCategories = [
    {
      icon: Users,
      label: content.categories.general,
      count: content.faqs.filter(f => f.category === content.categories.general).length,
    },
    {
      icon: Clock,
      label: content.categories.application,
      count: content.faqs.filter(f => f.category === content.categories.application).length,
    },
    {
      icon: Award,
      label: content.categories.programs,
      count: content.faqs.filter(f => f.category === content.categories.programs).length,
    },
    {
      icon: HelpCircle,
      label: content.categories.support,
      count: content.faqs.filter(f => f.category === content.categories.support).length,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {faqCategories.map((cat, idx) => (
              <Card key={idx} className="border-0 shadow-md bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <cat.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                  <div className="text-3xl font-bold">{cat.count}</div>
                  <p className="text-gray-600 mt-1">{cat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md bg-white/90 backdrop-blur"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-4 md:p-6 text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <Badge variant="outline" className="text-blue-600">
                        {faq.category}
                      </Badge>
                      <h3 className="font-semibold text-base md:text-lg text-gray-900 mt-2">
                        {faq.question}
                      </h3>
                    </div>

                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <Card className="border-0 shadow-xl mt-16 bg-white/90 backdrop-blur">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-xl">
              <CardTitle className="text-2xl">{content.contactTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 mb-10">
                  {content.contactSubtitle}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HelpCircle className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{content.channels.email}</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      {content.channelDescriptions.email}
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      {content.channelActions.email}
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{content.channels.chat}</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      {content.channelDescriptions.chat}
                    </p>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                      {content.channelActions.chat}
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{content.channels.phone}</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      {content.channelDescriptions.phone}
                    </p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                      {content.channelActions.phone}
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
