"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar } from "lucide-react"
import { useLocale } from "next-intl"

export default function DocumentsPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const content = {
    en: {
      title: "Official Government Documents",
      subtitle:
        "Access official state documents related to national policies for supporting gifted youth, olympiad development, and educational excellence.",
      categories: [{ name: "Government Resolutions", count: 3, color: "bg-blue-600" }],
      policyTitle: "Document Access Policy",
      publicDocuments: "Public Documents",
      accessRequirements: "Access Requirements",
      publicItems: [
        "Government resolutions and decrees",
        "National education policies",
        "Regulations for olympiad development",
        "State programs for gifted youth",
      ],
      accessItems: [
        "Most documents are freely available",
        "Some materials may require authorization",
        "Official government records remain unchanged",
        "Contact us for specific document inquiries",
      ],
      viewDocument: "View Document",
      requestTitle: "Document Request",
      requestText: "Can't find a specific document? Contact our administration office for further assistance.",
      type1: "Presidential Resolution",
      type2: "Presidential Resolution",
      type3: "Cabinet of Ministers Resolution",
      format: "Online",
      documents: [
        {
          title: "PQ-346: On Measures to Further Improve the System of Working with Talented Youth",
          date: "September 30, 2024",
          link: "http://lex.uz//uz/docs/-7145231",
          description:
            "Coordination and control of implementation are entrusted to the Prime Minister of the Republic of Uzbekistan. Signed by President Sh. Mirziyoyev.",
        },
        {
          title:
            "PQ-4306: On Measures to Identify Talented Youth and Organize a Continuous System of Training Highly Qualified Personnel",
          date: "May 3, 2019",
          link: "http://lex.uz//docs/4320713",
          description:
            "Implementation control was assigned to authorized government officials. Signed by President Sh. Mirziyoyev.",
        },
        {
          title:
            "Resolution No. 562: On Improving the System of Science Olympiads Among Talented Students and Development of Foreign Language Education",
          date: "September 9, 2021",
          link: "http://lex.uz//uz/docs/-5621189",
          description:
            "Defines improvements to olympiad systems and related educational mechanisms. Later updated by Presidential Resolution PQ-346.",
        },
      ],
    },
    ru: {
      title: "Официальные государственные документы",
      subtitle:
        "Ознакомьтесь с официальными документами, регулирующими поддержку одарённой молодёжи, развитие олимпиадного движения и качество образования.",
      categories: [{ name: "Государственные постановления", count: 3, color: "bg-blue-600" }],
      policyTitle: "Политика доступа к документам",
      publicDocuments: "Публичные документы",
      accessRequirements: "Условия доступа",
      publicItems: [
        "Государственные постановления и указы",
        "Национальные образовательные политики",
        "Нормативы по развитию олимпиад",
        "Государственные программы поддержки одарённой молодёжи",
      ],
      accessItems: [
        "Большинство документов находятся в свободном доступе",
        "Для части материалов может требоваться авторизация",
        "Официальные госдокументы публикуются без изменений",
        "По отдельным вопросам можно обратиться в администрацию",
      ],
      viewDocument: "Открыть документ",
      requestTitle: "Запрос документа",
      requestText: "Если вы не нашли нужный документ, свяжитесь с администрацией центра.",
      type1: "Постановление Президента",
      type2: "Постановление Президента",
      type3: "Постановление Кабинета Министров",
      format: "Онлайн",
      documents: [
        {
          title: "PQ-346: О мерах по дальнейшему совершенствованию системы работы с одарённой молодёжью",
          date: "30 сентября 2024",
          link: "http://lex.uz//uz/docs/-7145231",
          description:
            "Координация и контроль исполнения возложены на Премьер-министра Республики Узбекистан. Подписано Президентом Ш. Мирзиёевым.",
        },
        {
          title:
            "PQ-4306: О мерах по выявлению талантливой молодёжи и созданию непрерывной системы подготовки высококвалифицированных кадров",
          date: "3 мая 2019",
          link: "http://lex.uz//docs/4320713",
          description:
            "Контроль исполнения поручен уполномоченным должностным лицам. Подписано Президентом Ш. Мирзиёевым.",
        },
        {
          title:
            "Постановление №562: О совершенствовании системы научных олимпиад и развитии обучения иностранным языкам",
          date: "9 сентября 2021",
          link: "http://lex.uz//uz/docs/-5621189",
          description:
            "Документ определяет меры по развитию системы олимпиад и сопутствующих образовательных механизмов. Позднее дополнен постановлением PQ-346.",
        },
      ],
    },
    uz: {
      title: "Rasmiy hukumat hujjatlari",
      subtitle:
        "Iqtidorli yoshlarni qo‘llab-quvvatlash, olimpiada tizimini rivojlantirish va ta’lim sifatini oshirishga oid rasmiy davlat hujjatlari bilan tanishing.",
      categories: [{ name: "Hukumat qarorlari", count: 3, color: "bg-blue-600" }],
      policyTitle: "Hujjatlardan foydalanish siyosati",
      publicDocuments: "Ochiq hujjatlar",
      accessRequirements: "Foydalanish talablari",
      publicItems: [
        "Hukumat qarorlari va farmonlar",
        "Milliy ta’lim siyosatlari",
        "Olimpiadalarni rivojlantirishga oid me’yorlar",
        "Iqtidorli yoshlar uchun davlat dasturlari",
      ],
      accessItems: [
        "Aksariyat hujjatlar ochiq tarzda mavjud",
        "Ba’zi materiallar uchun ruxsat talab qilinishi mumkin",
        "Rasmiy hujjatlar mazmuni o‘zgartirilmaydi",
        "Maxsus hujjatlar bo‘yicha ma’muriyatga murojaat qiling",
      ],
      viewDocument: "Hujjatni ko‘rish",
      requestTitle: "Hujjat so‘rovi",
      requestText: "Kerakli hujjatni topa olmadingizmi? Qo‘shimcha yordam uchun ma’muriyatga murojaat qiling.",
      type1: "Prezident qarori",
      type2: "Prezident qarori",
      type3: "Vazirlar Mahkamasi qarori",
      format: "Onlayn",
      documents: [
        {
          title: "PQ-346: Iqtidorli yoshlar bilan ishlash tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida",
          date: "2024-yil 30-sentabr",
          link: "http://lex.uz//uz/docs/-7145231",
          description:
            "Ijroni muvofiqlashtirish va nazorat qilish O‘zbekiston Respublikasi Bosh vaziriga yuklatilgan. Prezident Sh. Mirziyoyev tomonidan imzolangan.",
        },
        {
          title:
            "PQ-4306: Iqtidorli yoshlarni aniqlash va yuqori malakali kadrlarni tayyorlashning uzluksiz tizimini tashkil etish choralari to‘g‘risida",
          date: "2019-yil 3-may",
          link: "http://lex.uz//docs/4320713",
          description:
            "Ijro nazorati vakolatli mas’ul shaxslarga yuklatilgan. Prezident Sh. Mirziyoyev tomonidan imzolangan.",
        },
        {
          title:
            "562-son qaror: Iqtidorli o‘quvchilar o‘rtasida fan olimpiadalari tizimini takomillashtirish hamda ta’lim mexanizmlarini rivojlantirish to‘g‘risida",
          date: "2021-yil 9-sentabr",
          link: "http://lex.uz//uz/docs/-5621189",
          description:
            "Fan olimpiadalari tizimini yaxshilash va tegishli ta’lim mexanizmlarini belgilaydi. Keyinchalik PQ-346 qarori bilan to‘ldirilgan.",
        },
      ],
    },
  }[locale]

  const documentTypes = [content.type1, content.type2, content.type3]

  return (
    <div className="min-h-screen relative">
      {/* Background Image - Logo */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("/images/logo.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="absolute inset-0 bg-white/80 z-[1]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {content.categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{category.count}</div>
                  <div className="text-gray-600 text-sm">{category.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              <CardTitle className="text-2xl">{content.policyTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">{content.publicDocuments}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {content.publicItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">{content.accessRequirements}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {content.accessItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {content.documents.map((doc, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-orange-500" />
                      <h3 className="text-xl font-semibold text-gray-900">{doc.title}</h3>
                      <Badge variant="secondary">{documentTypes[index]}</Badge>
                    </div>
                    <p className="text-gray-600">{doc.description}</p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{doc.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{content.format}</span>
                      </div>
                      <div>
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {content.viewDocument}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">{content.requestTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  {content.requestText}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
