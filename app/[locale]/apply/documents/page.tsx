"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Upload, AlertCircle, Download } from "lucide-react"
import { useLocale } from "next-intl"

export default function RequiredDocumentsPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const content = {
    en: {
      title: "Required Documents",
      subtitle: "Complete list of documents required for applying to the Center’s training programs.",
      reminders: "Important Reminders",
      reminderItems: [
        "Application deadline: January 31, 2025",
        "Incomplete or late applications will not be considered",
        "All documents must be authentic and clearly scanned",
        "Use PDF format unless otherwise stated",
      ],
      requirements: "Document Requirements",
      checklist: "Document Checklist",
      quickActions: "Quick Actions",
      submissionProcess: "Submission Process",
      needHelp: "Need Help?",
      needHelpText: "If you have questions about document requirements, our admissions team is here to help.",
      contactAdmissions: "Contact Admissions",
      scheduleConsultation: "Schedule Consultation",
      required: "Required",
      optional: "Optional",
      format: "Format",
      note: "Note",
      startApplication: "Start Application",
      downloadForms: "Download Forms",
      templates: "Document Templates",
    },
    ru: {
      title: "Необходимые документы",
      subtitle: "Полный перечень документов для подачи заявки на программы центра.",
      reminders: "Важные напоминания",
      reminderItems: [
        "Срок подачи: 31 января 2025",
        "Неполные или поздние заявки не рассматриваются",
        "Все документы должны быть подлинными и читаемыми",
        "Используйте формат PDF, если не указано иное",
      ],
      requirements: "Требования к документам",
      checklist: "Чек-лист документов",
      quickActions: "Быстрые действия",
      submissionProcess: "Процесс подачи",
      needHelp: "Нужна помощь?",
      needHelpText: "Если у вас есть вопросы по документам, команда приёма поможет вам.",
      contactAdmissions: "Связаться с приёмной комиссией",
      scheduleConsultation: "Запланировать консультацию",
      required: "Обязательно",
      optional: "Необязательно",
      format: "Формат",
      note: "Примечание",
      startApplication: "Начать заявку",
      downloadForms: "Скачать формы",
      templates: "Шаблоны документов",
    },
    uz: {
      title: "Kerakli hujjatlar",
      subtitle: "Markaz dasturlariga ariza topshirish uchun kerak bo‘ladigan hujjatlar to‘liq ro‘yxati.",
      reminders: "Muhim eslatmalar",
      reminderItems: [
        "Ariza muddati: 2025-yil 31-yanvar",
        "To‘liq bo‘lmagan yoki kechikkan arizalar qabul qilinmaydi",
        "Barcha hujjatlar haqiqiy va aniq skan bo‘lishi kerak",
        "Alohida ko‘rsatilmagan bo‘lsa, PDF formatidan foydalaning",
      ],
      requirements: "Hujjatlar talabi",
      checklist: "Hujjatlar ro‘yxati",
      quickActions: "Tezkor amallar",
      submissionProcess: "Yuborish jarayoni",
      needHelp: "Yordam kerakmi?",
      needHelpText: "Hujjatlar bo‘yicha savollaringiz bo‘lsa, qabul jamoamiz sizga yordam beradi.",
      contactAdmissions: "Qabul bo‘limiga murojaat",
      scheduleConsultation: "Maslahatga yozilish",
      required: "Majburiy",
      optional: "Ixtiyoriy",
      format: "Format",
      note: "Izoh",
      startApplication: "Arizani boshlash",
      downloadForms: "Formalalarni yuklab olish",
      templates: "Hujjat shablonlari",
    },
  }[locale]

  const requiredDocuments = [
    {
      title: "Academic Transcripts",
      description: "Official transcripts from your current school for the last two academic years",
      format: "PDF or high-quality scanned copy",
      required: true,
      notes: "Must be certified by the school administration",
    },
    {
      title: "Birth Certificate / Passport Copy",
      description: "Official document confirming applicant’s date of birth",
      format: "PDF or scanned copy",
      required: true,
      notes: "Used for age verification",
    },
    {
      title: "Recommendation Letters",
      description: "Two recommendation letters from mathematics or science teachers",
      format: "PDF on official school letterhead",
      required: true,
      notes: "Must be signed and dated by the teacher",
    },
    {
      title: "Personal Statement",
      description: "Essay (500–1000 words) describing motivation, goals, and interest in science olympiads",
      format: "PDF or Word document",
      required: true,
      notes: "Should clearly demonstrate commitment and enthusiasm for scientific learning",
    },
    {
      title: "Competition Certificates",
      description: "Certificates from previous olympiads, contests, or competitions",
      format: "PDF or scanned copies",
      required: false,
      notes: "Include national or international achievements",
    },
    {
      title: "Medical Certificate",
      description: "Health certificate confirming fitness for intensive study and travel",
      format: "PDF issued by a licensed physician",
      required: true,
      notes: "Must be issued within the last 6 months",
    },
    {
      title: "Parent/Guardian Consent Form",
      description: "Signed consent for participation in the Center’s programs",
      format: "PDF of the signed form",
      required: true,
      notes: "Use the official consent form available on the Center’s website",
    },
    {
      title: "Portfolio",
      description: "Collection of academic projects, research work, or problem-solving initiatives",
      format: "PDF compilation",
      required: false,
      notes: "Can strengthen your overall application",
    },
  ]

  const localizedDocumentMap = {
    ru: {
      "Academic Transcripts": {
        title: "Табели / транскрипт",
        description: "Официальные академические выписки за последние два учебных года",
        format: "PDF или качественный скан",
        notes: "Должно быть заверено администрацией школы",
      },
      "Birth Certificate / Passport Copy": {
        title: "Свидетельство о рождении / копия паспорта",
        description: "Документ, подтверждающий дату рождения кандидата",
        format: "PDF или скан-копия",
        notes: "Используется для проверки возраста",
      },
      "Recommendation Letters": {
        title: "Рекомендательные письма",
        description: "Два рекомендательных письма от учителей математики или естественных наук",
        format: "PDF на официальном бланке школы",
        notes: "Должны быть подписаны и датированы",
      },
      "Personal Statement": {
        title: "Мотивационное письмо",
        description: "Эссе (500–1000 слов) о целях, мотивации и интересе к олимпиадам",
        format: "PDF или Word-документ",
        notes: "Должно отражать мотивацию и вовлечённость",
      },
      "Competition Certificates": {
        title: "Сертификаты соревнований",
        description: "Сертификаты с предыдущих олимпиад и конкурсов",
        format: "PDF или скан-копии",
        notes: "Желательно приложить национальные и международные достижения",
      },
      "Medical Certificate": {
        title: "Медицинская справка",
        description: "Справка о состоянии здоровья для интенсивного обучения и поездок",
        format: "PDF, выданный лицензированным врачом",
        notes: "Срок выдачи — не более 6 месяцев",
      },
      "Parent/Guardian Consent Form": {
        title: "Согласие родителя/опекуна",
        description: "Подписанное согласие на участие в программах Центра",
        format: "PDF подписанной формы",
        notes: "Используйте официальную форму с сайта Центра",
      },
      Portfolio: {
        title: "Портфолио",
        description: "Подборка академических проектов, исследований или задач",
        format: "PDF-файл",
        notes: "Может усилить заявку",
      },
    },
    uz: {
      "Academic Transcripts": {
        title: "Akademik baholar varaqasi",
        description: "So‘nggi ikki o‘quv yili uchun rasmiy akademik transcript",
        format: "PDF yoki sifatli skan nusxa",
        notes: "Maktab ma’muriyati tomonidan tasdiqlangan bo‘lishi kerak",
      },
      "Birth Certificate / Passport Copy": {
        title: "Tug‘ilganlik guvohnomasi / pasport nusxasi",
        description: "Nomzodning tug‘ilgan sanasini tasdiqlovchi rasmiy hujjat",
        format: "PDF yoki skan nusxa",
        notes: "Yoshni tasdiqlash uchun ishlatiladi",
      },
      "Recommendation Letters": {
        title: "Tavsiyanomalar",
        description: "Matematika yoki tabiiy fan o‘qituvchilaridan 2 ta tavsiyanoma",
        format: "Maktab blankasidagi PDF",
        notes: "Imzolangan va sana qo‘yilgan bo‘lishi kerak",
      },
      "Personal Statement": {
        title: "Shaxsiy bayonot",
        description: "500–1000 so‘zli motivatsiya va maqsadlarni yorituvchi esse",
        format: "PDF yoki Word hujjat",
        notes: "Fan o‘rganishga bo‘lgan qiziqishni aniq ko‘rsatishi kerak",
      },
      "Competition Certificates": {
        title: "Musobaqa sertifikatlari",
        description: "Oldingi olimpiada va tanlovlardan olingan sertifikatlar",
        format: "PDF yoki skan nusxa",
        notes: "Milliy va xalqaro yutuqlarni ilova qilish tavsiya etiladi",
      },
      "Medical Certificate": {
        title: "Tibbiy ma’lumotnoma",
        description: "Intensiv o‘qish va safar uchun sog‘liq holatini tasdiqlovchi hujjat",
        format: "Litsenziyaga ega shifokor bergan PDF",
        notes: "So‘nggi 6 oy ichida berilgan bo‘lishi kerak",
      },
      "Parent/Guardian Consent Form": {
        title: "Ota-ona/vasiy rozilik shakli",
        description: "Markaz dasturlarida ishtirok etish uchun imzolangan rozilik",
        format: "Imzolangan forma PDF nusxasi",
        notes: "Markaz saytida berilgan rasmiy formadan foydalaning",
      },
      Portfolio: {
        title: "Portfolio",
        description: "Akademik loyihalar, tadqiqot ishlari va masala yechimlari to‘plami",
        format: "PDF to‘plam",
        notes: "Ariza kuchini oshirishi mumkin",
      },
    },
  }[locale as "ru" | "uz"] as Record<string, { title: string; description: string; format: string; notes: string }> | undefined

  const localizedDocuments = requiredDocuments.map((doc) => ({
    ...doc,
    ...(localizedDocumentMap?.[doc.title] || {}),
  }))

  const documentChecklist =
    locale === "ru"
      ? [
          "Документы должны быть на русском, узбекском или с официальным переводом",
          "Сканы должны быть чёткими и читаемыми",
          "Размер файла не должен превышать 5MB",
          "Предпочтительный формат — PDF",
          "Многостраничные файлы должны содержать все страницы",
          "Документы должны быть актуальными (если не указано иное)",
        ]
      : locale === "uz"
        ? [
            "Hujjatlar o‘zbek, rus yoki rasmiy tarjima bilan bo‘lishi kerak",
            "Skan nusxalar aniq va to‘liq ko‘rinadigan bo‘lishi kerak",
            "Har bir fayl hajmi 5MB dan oshmasin",
            "Afzal format — PDF",
            "Ko‘p sahifali fayllarda barcha sahifalar bo‘lishi shart",
            "Hujjatlar dolzarb bo‘lishi kerak (alohida ko‘rsatilmagan bo‘lsa)",
          ]
        : [
            "All documents must be in English or Uzbek",
            "Scans must be clear, legible, and complete",
            "File size must not exceed 5MB per document",
            "Preferably in PDF format",
            "Multi-page files must include all pages",
            "Documents must be issued within the past 12 months (unless otherwise specified)",
          ]

  const submissionSteps =
    locale === "ru"
      ? [
          { step: 1, title: "Подготовьте документы", description: "Соберите и отсканируйте все документы в хорошем качестве" },
          { step: 2, title: "Заполните онлайн-форму", description: "Введите личные и академические данные в форме заявки" },
          { step: 3, title: "Загрузите документы", description: "Отправьте файлы через защищённый портал загрузки" },
          { step: 4, title: "Проверьте и отправьте", description: "Проверьте корректность данных перед финальной отправкой" },
          { step: 5, title: "Подтверждение", description: "Получите email с подтверждением и номером заявки" },
        ]
      : locale === "uz"
        ? [
            { step: 1, title: "Hujjatlarni tayyorlang", description: "Kerakli hujjatlarni yig‘ing va sifatli skan qiling" },
            { step: 2, title: "Onlayn formani to‘ldiring", description: "Shaxsiy va akademik ma’lumotlarni kiriting" },
            { step: 3, title: "Hujjatlarni yuklang", description: "Fayllarni xavfsiz yuklash portali orqali yuboring" },
            { step: 4, title: "Tekshiring va yuboring", description: "Yuborishdan oldin barcha ma’lumotlarni tekshiring" },
            { step: 5, title: "Tasdiq", description: "Ariza raqami ko‘rsatilgan tasdiqlovchi emailni oling" },
          ]
        : [
            { step: 1, title: "Prepare Documents", description: "Gather and scan all required documents in high resolution" },
            { step: 2, title: "Complete Online Form", description: "Fill in your personal and academic details on the application page" },
            { step: 3, title: "Upload Documents", description: "Submit all required files through our secure upload portal" },
            { step: 4, title: "Review & Submit", description: "Verify all information before final submission" },
            { step: 5, title: "Confirmation", description: "Receive a confirmation email with your application reference number" },
          ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          {/* IMPORTANT REMINDERS */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 text-lg mb-2">{content.reminders}</h3>
                <ul className="space-y-1 text-blue-800">
                  {content.reminderItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* DOCUMENT REQUIREMENTS */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl rounded-xl">
                <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900 rounded-t-xl">
                  <CardTitle className="text-2xl">{content.requirements}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {localizedDocuments.map((doc, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-xl text-gray-900">{doc.title}</h4>
                        <Badge variant={doc.required ? "default" : "secondary"}>
                          {doc.required ? content.required : content.optional}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-2">{doc.description}</p>

                      <p className="text-sm text-gray-600">
                        <strong>{content.format}:</strong> {doc.format}
                      </p>

                      {doc.notes && (
                        <div className="mt-3 text-sm text-blue-700 bg-blue-50 p-3 rounded-md shadow-sm">
                          <strong>{content.note}:</strong> {doc.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* SIDE PANEL */}
            <div className="space-y-6">
              {/* CHECKLIST */}
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl">{content.checklist}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {documentChecklist.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* QUICK ACTIONS */}
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl">{content.quickActions}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                    <Upload className="w-4 h-4" /> {content.startApplication}
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                    <Download className="w-4 h-4" /> {content.downloadForms}
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 p-3 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                    <FileText className="w-4 h-4" /> {content.templates}
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* SUBMISSION PROCESS */}
          <Card className="border-0 shadow-xl rounded-xl">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
              <CardTitle className="text-2xl">{content.submissionProcess}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-5 gap-6">
                {submissionSteps.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* HELP SECTION */}
          <div className="text-center mt-10 p-8 bg-yellow-50 border border-yellow-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">{content.needHelp}</h3>
            <p className="text-yellow-700 mb-4">
              {content.needHelpText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                {content.contactAdmissions}
              </button>
              <button className="px-6 py-2 border border-yellow-600 text-yellow-700 rounded-lg hover:bg-yellow-50 transition">
                {content.scheduleConsultation}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
