"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "next-intl"

export default function RulesOfStayPage() {
  const locale = useLocale() as "en" | "ru" | "uz"

  const content = {
    en: {
      title: "Rules of Stay",
      subtitle:
        "All participants must adhere to the following regulations to maintain a safe, respectful, and academically productive environment.",
      finalNote: "Final Note",
      finalText:
        "All participants are expected to uphold these rules throughout the program. Violations may result in disciplinary action, including dismissal.",
      rules: [
        {
          title: "General Provisions",
          items: [
            "All participants must follow the Center’s rules to ensure safety, academic integrity, and smooth operation.",
            "Rules apply to all students, staff, and partners during the program.",
            "Participation indicates full agreement with all rules.",
          ],
        },
        {
          title: "Eligibility and Admission",
          items: [
            "Students aged 10–18 with outstanding abilities in mathematics, physics, chemistry, biology, or computer science may apply.",
            "Applications must include required academic and identity documents.",
            "Providing false information may result in disqualification.",
          ],
        },
        {
          title: "Attendance and Participation",
          items: [
            "Students must attend sessions, workshops, and assigned online modules.",
            "Repeated unexcused absence may lead to dismissal from the program.",
            "Respectful conduct and active participation are mandatory.",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Participants must respect staff, peers, and the learning environment.",
            "Harassment, bullying, and discrimination are strictly prohibited.",
            "Academic integrity is required in all assessments and assignments.",
          ],
        },
        {
          title: "Accommodation and Meals",
          items: [
            "Students from outside Tashkent may be provided with dormitory and meal services.",
            "Facilities are monitored for safety, hygiene, and discipline.",
            "Damage to property may result in disciplinary measures.",
          ],
        },
        {
          title: "Technical Use",
          items: [
            "Each participant receives individual login credentials.",
            "Credential sharing and unauthorized access are prohibited.",
            "Technical issues must be reported promptly to support staff.",
          ],
        },
        {
          title: "Intellectual Property",
          items: [
            "Educational materials belong to the Center and partner institutions.",
            "Materials are for personal educational use only.",
            "Unauthorized reproduction or distribution is prohibited.",
          ],
        },
      ],
    },
    ru: {
      title: "Правила пребывания",
      subtitle:
        "Все участники обязаны соблюдать правила, чтобы поддерживать безопасную, уважительную и продуктивную учебную среду.",
      finalNote: "Итоговое примечание",
      finalText:
        "Соблюдение правил обязательно на всём протяжении программы. Нарушения могут повлечь дисциплинарные меры, включая отчисление.",
      rules: [
        {
          title: "Общие положения",
          items: [
            "Все участники соблюдают правила Центра для обеспечения безопасности и академической добросовестности.",
            "Правила распространяются на учащихся, сотрудников и партнёров.",
            "Участие в программе означает согласие с установленными правилами.",
          ],
        },
        {
          title: "Условия допуска",
          items: [
            "Подать заявку могут учащиеся 10–18 лет с высоким потенциалом по профильным предметам.",
            "Заявка должна содержать обязательные учебные и идентификационные документы.",
            "Недостоверные сведения приводят к дисквалификации.",
          ],
        },
        {
          title: "Посещаемость и участие",
          items: [
            "Участники обязаны посещать занятия, семинары и онлайн-модули.",
            "Необоснованные пропуски могут привести к отчислению.",
            "Активное участие и уважительное поведение обязательны.",
          ],
        },
        {
          title: "Кодекс поведения",
          items: [
            "Необходимо уважительно относиться к сотрудникам, сверстникам и учебной среде.",
            "Травля, дискриминация и домогательства запрещены.",
            "Во всех заданиях требуется академическая честность.",
          ],
        },
        {
          title: "Проживание и питание",
          items: [
            "Иногородним учащимся может предоставляться проживание и питание.",
            "В помещениях действует контроль безопасности и санитарных норм.",
            "Порча имущества влечёт дисциплинарную ответственность.",
          ],
        },
        {
          title: "Использование цифровых платформ",
          items: [
            "Каждому участнику предоставляется персональный доступ.",
            "Передача логина и попытки несанкционированного доступа запрещены.",
            "Технические проблемы необходимо своевременно сообщать в поддержку.",
          ],
        },
        {
          title: "Интеллектуальная собственность",
          items: [
            "Учебные материалы принадлежат Центру и его партнёрам.",
            "Материалы предназначены только для личного обучения.",
            "Несанкционированное копирование и распространение запрещено.",
          ],
        },
      ],
    },
    uz: {
      title: "Qoidalar",
      subtitle:
        "Barcha ishtirokchilar xavfsiz, hurmatga asoslangan va samarali o‘quv muhitini ta’minlash uchun quyidagi qoidalarga amal qilishi shart.",
      finalNote: "Yakuniy eslatma",
      finalText:
        "Dastur davomida qoidalarga rioya qilish majburiy. Qoidabuzarlik intizomiy choralar, jumladan chetlashtirishga olib kelishi mumkin.",
      rules: [
        {
          title: "Umumiy qoidalar",
          items: [
            "Barcha ishtirokchilar markazning xavfsizlik va akademik halollik qoidalariga amal qiladi.",
            "Qoidalar o‘quvchilar, xodimlar va hamkorlarga bir xil tatbiq etiladi.",
            "Dasturda qatnashish qoidalarga to‘liq rozilikni anglatadi.",
          ],
        },
        {
          title: "Qabul va moslik talablari",
          items: [
            "10–18 yoshdagi va fan yo‘nalishlarida salohiyati yuqori o‘quvchilar ariza topshirishi mumkin.",
            "Arizaga talab etilgan akademik va shaxsni tasdiqlovchi hujjatlar ilova qilinadi.",
            "Noto‘g‘ri ma’lumot taqdim etish diskvalifikatsiyaga olib keladi.",
          ],
        },
        {
          title: "Davomat va ishtirok",
          items: [
            "O‘quvchilar darslar, seminarlar va onlayn modullarda qatnashishi shart.",
            "Sababsiz davomatsizlik dasturdan chetlashtirishga sabab bo‘lishi mumkin.",
            "Faol ishtirok va hurmatli munosabat majburiy hisoblanadi.",
          ],
        },
        {
          title: "Xulq-atvor qoidalari",
          items: [
            "Xodimlar, tengdoshlar va o‘quv muhitiga nisbatan hurmat saqlanishi kerak.",
            "Kamsitish, zo‘ravonlik va tazyiq qat’iyan man etiladi.",
            "Barcha topshiriq va baholashlarda akademik halollik talab etiladi.",
          ],
        },
        {
          title: "Yotoqxona va ovqatlanish",
          items: [
            "Toshkentdan tashqaridan kelgan o‘quvchilarga yashash va ovqatlanish imkoniyatlari taqdim etilishi mumkin.",
            "Infratuzilma xavfsizlik va gigiyena talablariga muvofiq nazorat qilinadi.",
            "Mol-mulkka zarar yetkazish intizomiy choraga olib keladi.",
          ],
        },
        {
          title: "Texnik foydalanish",
          items: [
            "Har bir ishtirokchiga shaxsiy login-parol beriladi.",
            "Login ma’lumotlarini ulashish va ruxsatsiz kirish taqiqlanadi.",
            "Texnik muammolar yuzaga kelganda zudlik bilan yordam xizmatiga murojaat qilinadi.",
          ],
        },
        {
          title: "Intellektual mulk",
          items: [
            "Ta’lim materiallari markaz va hamkor tashkilotlarga tegishli.",
            "Materiallardan faqat shaxsiy o‘qish maqsadida foydalaniladi.",
            "Ruxsatsiz ko‘paytirish yoki tarqatish taqiqlanadi.",
          ],
        },
      ],
    },
  }[locale]

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {content.rules.map((rule, index) => (
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
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{content.finalNote}</h3>
            <p className="text-yellow-700">
              {content.finalText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
