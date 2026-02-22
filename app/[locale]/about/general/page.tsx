"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function GeneralInformationPage() {
  const t = useTranslations('pages.about.general');
  const locale = useLocale() as "en" | "ru" | "uz";

  const stats = [
    { icon: Users, labelKey: "stats.activeStudents", value: "15,000+", href: "/about/winners" },
    { icon: Award, labelKey: "stats.internationalMedals", value: "60+", href: "/about/winners" },
    { icon: Globe, labelKey: "stats.partnerCountries", value: "3+", href: "/about/partners" },
    { icon: BookOpen, labelKey: "stats.programsCourses", value: "40+", href: "/programs/mathematics" },
  ];

  const localizedContent = {
    en: {
      olympiadStats: {
        international: [
          "International English Language Olympiad — 7 medals (7 Silver), 5 Cups",
          "International Geography Olympiad — 2 medals (2 Bronze)",
          "International Economics Olympiad — 2 medals (1 Silver, 1 Bronze)",
        ],
        regional: [
          "Zhautykov International Olympiad — 19 medals (2 Gold, 5 Silver, 12 Bronze)",
          "Caucasus Mathematics Olympiad — 7 medals (4 Gold, 1 Silver, 2 Bronze)",
          "Balkan Mathematics Olympiad — 5 medals (1 Gold, 4 Silver)",
          "Junior Balkan Mathematical Olympiad — 6 medals (3 Gold, 2 Silver, 1 Bronze)",
          "International Mathematics Competition — 7 medals (3 Silver, 4 Bronze)",
          "International Mendeleev Chemistry Olympiad — 7 medals (3 Gold, 2 Silver, 2 Bronze)",
          "International Young Naturalists' Olympiad — 3 medals (3 Bronze)",
          "Asian Physics Olympiad — 1 medal (Bronze)",
          "Asia-Pacific Informatics Olympiad — 3 medals (3 Bronze)",
          "Abu Rayhan Beruni International Chemistry Olympiad — 19 medals (6 Gold, 8 Silver, 5 Bronze)",
          "Al-Khwarizmi International Math & Informatics Olympiad — 50 medals (7 Gold, 13 Silver, 30 Bronze)",
          "European Girls' Informatics Olympiad — 2 medals (2 Bronze)",
          "European Girls' Mathematical Olympiad — 3 medals (1 Silver, 2 Bronze)",
          "Asia-Pacific Mathematics Olympiad — 6 medals (1 Gold, 2 Silver, 3 Bronze)",
        ],
        prestigious: [
          "International Chemistry Olympiad (IChO) — 4 medals (2 Gold, 2 Silver)",
          "International Mathematical Olympiad (IMO) — 5 medals (4 Silver, 1 Bronze)",
          "International Olympiad in Informatics (IOI) — 2 medals (1 Silver, 1 Bronze)",
          "International Physics Olympiad (IPhO) — 2 medals (2 Bronze)",
        ],
      },
      stages: {
        y2023:
          'Developed mechanisms for coordinating Olympiads nationwide through a unified digital platform. The "Olympiad Management System" was launched, registering over 10,000 students digitally.',
        y2024:
          'Expanded with international training programs in mathematics, physics, informatics, and robotics. Over 200 teachers participated in seminars, and the first "Forum of Gifted Youth" hosted 500 students and 80 trainers.',
        y2025:
          "Signed memoranda with Olympiad training centers in Turkey, South Korea, and Kazakhstan. Uzbek students achieved record-breaking results at international Olympiads. The National Olympiad Network was launched.",
        y2025List: [
          "IMO – 4 Silver, 1 Bronze",
          "IOI – 1 Silver, 1 Bronze",
          "WMI – 3 Gold, 3 Silver, 4 Bronze",
          "IChO – 4 Gold, 2 Silver, 7 Bronze",
          "ZIO – 2 Gold, 5 Silver, 12 Bronze",
        ],
      },
      objectives: [
        "Engage gifted students and teachers nationwide.",
        "Create equal opportunities for all students to realize their potential.",
        "Involve talented students in research and intellectual activities.",
        "Systematize Olympiad preparation and evaluation mechanisms.",
        "Enhance science education through modern methodologies.",
        "Promote transparency, openness, and efficiency in education management.",
      ],
      principles: [
        { title: "Supporting the Best", desc: "Focus on mentor–student systems, long-term engagement, and supporting winners' academic growth." },
        { title: "Leadership", desc: "Develop leadership, responsibility, communication, and project management among students." },
        { title: "Continuity of Knowledge", desc: "Integrate modern educational technologies to ensure ongoing improvement." },
        { title: "Exchange and Integration", desc: "Combine national and international best practices to improve teaching and learning quality." },
      ],
      futureText:
        'By 2026, the Center plans to establish the "Olympiad Academy," create international methodological labs, and form a national Olympiad brand.',
      futureList: [
        "Science and Technology Synergy: Combining innovation, research, and analytical development.",
        "Uniting Talented Youth: Strengthening collaboration and creativity across disciplines.",
        "Broadening Horizons: Offering master classes, seminars, and expert-led lab sessions.",
        "Transparency and Fairness: Ensuring open, merit-based student selection.",
        "Fostering Creativity: Encouraging innovation and social impact through team projects.",
      ],
      board: {
        chair: "President of the Republic of Uzbekistan",
        deputy: "Minister of Preschool and School Education",
        secretary: "Director of the Agency for Specialized Educational Institutions",
        membersTitle: "Members include:",
        members: [
          "President of the Academy of Sciences",
          "Minister of Digital Technologies",
          "Minister of Innovative Development",
          "Rector of Tashkent State University",
          "Director of Presidential Schools in Tashkent",
          "Laureates and trainers from international Olympiads",
        ],
        note:
          "The Board defines strategic directions and oversees international cooperation. Its work follows Presidential Decree No. PQ-346 (Sept 30, 2024).",
      },
      legal: {
        items: [
          "Charter: Defines legal status, objectives, and management structure.",
          "License: Authorizes organization of educational and international preparatory programs.",
          "Certificate of State Registration: Confirms registration as a state institution under the Ministry of Justice.",
        ],
        reportsTitle: "Activity Reports:",
        reports: [
          "2023 – Introduced new Olympiad formats and guidelines.",
          "2024 – National Program for International Olympiad Preparation (6 gold, 9 silver, 11 bronze).",
          "2025 – Established regional centers, launched National Olympiad Network, and signed cooperation MoUs with Turkey, Korea, and Kazakhstan.",
        ],
      },
    },
    ru: {
      olympiadStats: {
        international: [
          "Международная олимпиада по английскому языку — 7 медалей (7 серебряных), 5 кубков",
          "Международная олимпиада по географии — 2 медали (2 бронзовые)",
          "Международная олимпиада по экономике — 2 медали (1 серебряная, 1 бронзовая)",
        ],
        regional: [
          "Международная олимпиада Жаутыкова — 19 медалей (2 золота, 5 серебра, 12 бронзы)",
          "Кавказская математическая олимпиада — 7 медалей (4 золота, 1 серебро, 2 бронзы)",
          "Балканская математическая олимпиада — 5 медалей (1 золото, 4 серебра)",
          "Юниорская Балканская математическая олимпиада — 6 медалей (3 золота, 2 серебра, 1 бронза)",
          "Международный математический конкурс — 7 медалей (3 серебра, 4 бронзы)",
          "Международная олимпиада Менделеева по химии — 7 медалей (3 золота, 2 серебра, 2 бронзы)",
          "Международная олимпиада юных натуралистов — 3 медали (3 бронзы)",
          "Азиатская олимпиада по физике — 1 медаль (бронза)",
          "Азиатско-Тихоокеанская олимпиада по информатике — 3 медали (3 бронзы)",
          "Международная олимпиада имени Абу Райхана Беруни по химии — 19 медалей (6 золота, 8 серебра, 5 бронзы)",
          "Международная олимпиада имени Аль-Хорезми по математике и информатике — 50 медалей (7 золота, 13 серебра, 30 бронзы)",
          "Европейская олимпиада по информатике среди девушек — 2 медали (2 бронзы)",
          "Европейская математическая олимпиада среди девушек — 3 медали (1 серебро, 2 бронзы)",
          "Азиатско-Тихоокеанская математическая олимпиада — 6 медалей (1 золото, 2 серебра, 3 бронзы)",
        ],
        prestigious: [
          "Международная химическая олимпиада (IChO) — 4 медали (2 золота, 2 серебра)",
          "Международная математическая олимпиада (IMO) — 5 медалей (4 серебра, 1 бронза)",
          "Международная олимпиада по информатике (IOI) — 2 медали (1 серебро, 1 бронза)",
          "Международная олимпиада по физике (IPhO) — 2 медали (2 бронзы)",
        ],
      },
      stages: {
        y2023:
          'В 2023 году создана единая цифровая система координации олимпиад. Запущена платформа "Olympiad Management System", в которой зарегистрировано более 10 000 учащихся.',
        y2024:
          'В 2024 году расширены международные программы подготовки по математике, физике, информатике и робототехнике. В семинарах приняли участие более 200 педагогов, а первый "Форум одарённой молодёжи" объединил 500 учеников и 80 тренеров.',
        y2025:
          "В 2025 году подписаны меморандумы с центрами подготовки в Турции, Южной Корее и Казахстане. Учащиеся Узбекистана показали рекордные результаты, запущена Национальная олимпиадная сеть.",
        y2025List: [
          "IMO – 4 серебра, 1 бронза",
          "IOI – 1 серебро, 1 бронза",
          "WMI – 3 золота, 3 серебра, 4 бронзы",
          "IChO – 4 золота, 2 серебра, 7 бронзы",
          "ZIO – 2 золота, 5 серебра, 12 бронзы",
        ],
      },
      objectives: [
        "Вовлекать одарённых учащихся и педагогов по всей стране.",
        "Создавать равные возможности для раскрытия потенциала каждого ученика.",
        "Включать талантливых учащихся в исследовательскую и интеллектуальную деятельность.",
        "Систематизировать механизмы подготовки и оценки в олимпиадном движении.",
        "Развивать научное образование на основе современных методик.",
        "Повышать прозрачность и эффективность управления в образовании.",
      ],
      principles: [
        { title: "Поддержка лучших", desc: "Развитие долгосрочной системы наставничества и сопровождения победителей." },
        { title: "Лидерство", desc: "Формирование лидерских качеств, ответственности, коммуникации и проектного мышления." },
        { title: "Непрерывность знаний", desc: "Интеграция современных образовательных технологий для постоянного роста качества." },
        { title: "Обмен и интеграция", desc: "Сочетание национальных и международных практик для улучшения обучения." },
      ],
      futureText:
        'К 2026 году Центр планирует создать "Олимпиадную академию", международные методические лаборатории и национальный олимпиадный бренд.',
      futureList: [
        "Синергия науки и технологий: развитие инноваций, исследований и аналитического мышления.",
        "Объединение талантливой молодёжи: укрепление междисциплинарного сотрудничества и творчества.",
        "Расширение горизонтов: мастер-классы, семинары и лабораторные занятия с экспертами.",
        "Прозрачность и справедливость: открытая система отбора на основе заслуг.",
        "Развитие креативности: стимулирование инновационных и социально значимых проектов.",
      ],
      board: {
        chair: "Президент Республики Узбекистан",
        deputy: "Министр дошкольного и школьного образования",
        secretary: "Директор Агентства специализированных образовательных учреждений",
        membersTitle: "В состав входят:",
        members: [
          "Президент Академии наук",
          "Министр цифровых технологий",
          "Министр инновационного развития",
          "Ректор Ташкентского государственного университета",
          "Директор Президентских школ в Ташкенте",
          "Лауреаты и тренеры международных олимпиад",
        ],
        note:
          "Совет определяет стратегические направления и контролирует международное сотрудничество. Деятельность ведётся на основе Постановления Президента № PQ-346 от 30.09.2024.",
      },
      legal: {
        items: [
          "Устав: определяет правовой статус, цели и систему управления.",
          "Лицензия: подтверждает право организации образовательных и международных программ подготовки.",
          "Свидетельство о госрегистрации: подтверждает регистрацию как государственного учреждения в системе Минюста.",
        ],
        reportsTitle: "Отчёты о деятельности:",
        reports: [
          "2023 – внедрены новые форматы олимпиад и методические подходы.",
          "2024 – национальная программа международной подготовки (6 золота, 9 серебра, 11 бронзы).",
          "2025 – открыты региональные центры, запущена Национальная олимпиадная сеть и подписаны меморандумы с Турцией, Кореей и Казахстаном.",
        ],
      },
    },
    uz: {
      olympiadStats: {
        international: [
          "Xalqaro ingliz tili olimpiadasi — 7 medal (7 kumush), 5 kubok",
          "Xalqaro geografiya olimpiadasi — 2 medal (2 bronza)",
          "Xalqaro iqtisodiyot olimpiadasi — 2 medal (1 kumush, 1 bronza)",
        ],
        regional: [
          "Jautikov xalqaro olimpiadasi — 19 medal (2 oltin, 5 kumush, 12 bronza)",
          "Kavkaz matematika olimpiadasi — 7 medal (4 oltin, 1 kumush, 2 bronza)",
          "Bolqon matematika olimpiadasi — 5 medal (1 oltin, 4 kumush)",
          "Kichik Bolqon matematika olimpiadasi — 6 medal (3 oltin, 2 kumush, 1 bronza)",
          "Xalqaro matematika musobaqasi — 7 medal (3 kumush, 4 bronza)",
          "Mendeleyev xalqaro kimyo olimpiadasi — 7 medal (3 oltin, 2 kumush, 2 bronza)",
          "Yosh tabiatchilar xalqaro olimpiadasi — 3 medal (3 bronza)",
          "Osiyo fizika olimpiadasi — 1 medal (bronza)",
          "Osiyo-Tinch okeani informatika olimpiadasi — 3 medal (3 bronza)",
          "Abu Rayhon Beruniy xalqaro kimyo olimpiadasi — 19 medal (6 oltin, 8 kumush, 5 bronza)",
          "Al-Xorazmiy xalqaro matematika va informatika olimpiadasi — 50 medal (7 oltin, 13 kumush, 30 bronza)",
          "Yevropa qizlar informatika olimpiadasi — 2 medal (2 bronza)",
          "Yevropa qizlar matematika olimpiadasi — 3 medal (1 kumush, 2 bronza)",
          "Osiyo-Tinch okeani matematika olimpiadasi — 6 medal (1 oltin, 2 kumush, 3 bronza)",
        ],
        prestigious: [
          "Xalqaro kimyo olimpiadasi (IChO) — 4 medal (2 oltin, 2 kumush)",
          "Xalqaro matematika olimpiadasi (IMO) — 5 medal (4 kumush, 1 bronza)",
          "Xalqaro informatika olimpiadasi (IOI) — 2 medal (1 kumush, 1 bronza)",
          "Xalqaro fizika olimpiadasi (IPhO) — 2 medal (2 bronza)",
        ],
      },
      stages: {
        y2023:
          '2023-yilda mamlakat bo‘ylab olimpiadalarni muvofiqlashtirish uchun yagona raqamli tizim yaratildi. "Olympiad Management System" ishga tushirilib, 10 000 dan ortiq o‘quvchi ro‘yxatdan o‘tkazildi.',
        y2024:
          '2024-yilda matematika, fizika, informatika va robototexnika bo‘yicha xalqaro tayyorgarlik dasturlari kengaytirildi. 200 dan ortiq ustoz seminarlarda qatnashdi, birinchi "Iqtidorli yoshlar forumi"da 500 o‘quvchi va 80 murabbiy ishtirok etdi.',
        y2025:
          "2025-yilda Turkiya, Janubiy Koreya va Qozog‘iston markazlari bilan memorandumlar imzolandi. O‘zbekiston o‘quvchilari rekord natijalarga erishdi va Milliy olimpiada tarmog‘i ishga tushirildi.",
        y2025List: [
          "IMO – 4 kumush, 1 bronza",
          "IOI – 1 kumush, 1 bronza",
          "WMI – 3 oltin, 3 kumush, 4 bronza",
          "IChO – 4 oltin, 2 kumush, 7 bronza",
          "ZIO – 2 oltin, 5 kumush, 12 bronza",
        ],
      },
      objectives: [
        "Iqtidorli o‘quvchi va ustozlarni respublika bo‘ylab jalb etish.",
        "Har bir o‘quvchi salohiyatini ro‘yobga chiqarishi uchun teng imkoniyat yaratish.",
        "Iqtidorli o‘quvchilarni ilmiy-tadqiqot va intellektual faoliyatga jalb etish.",
        "Olimpiadaga tayyorgarlik va baholash mexanizmlarini tizimlashtirish.",
        "Zamonaviy metodlar asosida fan ta’limi sifatini oshirish.",
        "Ta’lim boshqaruvida shaffoflik va samaradorlikni kuchaytirish.",
      ],
      principles: [
        { title: "Eng yaxshilarni qo‘llab-quvvatlash", desc: "Murabbiy-o‘quvchi tizimini rivojlantirish va g‘oliblarni uzoq muddat qo‘llab-quvvatlash." },
        { title: "Liderlik", desc: "O‘quvchilarda yetakchilik, mas’uliyat, muloqot va loyiha boshqaruvi ko‘nikmalarini rivojlantirish." },
        { title: "Bilim uzviyligi", desc: "Ta’lim sifati uzluksiz oshishi uchun zamonaviy texnologiyalarni joriy etish." },
        { title: "Almashinuv va integratsiya", desc: "Milliy va xalqaro tajribalarni uyg‘unlashtirib ta’lim sifatini yaxshilash." },
      ],
      futureText:
        '2026-yilgacha Markaz "Olimpiada akademiyasi"ni tashkil etish, xalqaro metodik laboratoriyalar yaratish va milliy olimpiada brendini shakllantirishni rejalashtirmoqda.',
      futureList: [
        "Fan va texnologiya sinergiyasi: innovatsiya, tadqiqot va tahliliy fikrlashni uyg‘unlashtirish.",
        "Iqtidorli yoshlarni birlashtirish: fanlararo hamkorlik va ijodkorlikni mustahkamlash.",
        "Imkoniyatlarni kengaytirish: master-klasslar, seminarlar va ekspert laboratoriya mashg‘ulotlari.",
        "Shaffoflik va adolat: ochiq, merit asosidagi saralash tizimi.",
        "Ijodkorlikni rag‘batlantirish: innovatsion va ijtimoiy ahamiyatli jamoaviy loyihalarni rivojlantirish.",
      ],
      board: {
        chair: "O‘zbekiston Respublikasi Prezidenti",
        deputy: "Maktabgacha va maktab ta’limi vaziri",
        secretary: "Ixtisoslashtirilgan ta’lim muassasalari agentligi direktori",
        membersTitle: "Kengash tarkibiga kiradi:",
        members: [
          "Fanlar akademiyasi prezidenti",
          "Raqamli texnologiyalar vaziri",
          "Innovatsion rivojlanish vaziri",
          "Toshkent davlat universiteti rektori",
          "Toshkentdagi Prezident maktablari direktori",
          "Xalqaro olimpiada sovrindorlari va murabbiylar",
        ],
        note:
          "Kengash strategik yo‘nalishlarni belgilaydi va xalqaro hamkorlikni nazorat qiladi. Faoliyat Prezidentning 2024-yil 30-sentabrdagi PQ-346-son qarori asosida olib boriladi.",
      },
      legal: {
        items: [
          "Nizom: huquqiy maqom, maqsadlar va boshqaruv tuzilmasini belgilaydi.",
          "Litsenziya: ta’lim va xalqaro tayyorgarlik dasturlarini tashkil etish huquqini beradi.",
          "Davlat ro‘yxatidan o‘tganlik guvohnomasi: Adliya vazirligi tizimida davlat muassasasi sifatida ro‘yxatdan o‘tganini tasdiqlaydi.",
        ],
        reportsTitle: "Faoliyat hisobotlari:",
        reports: [
          "2023 – olimpiadalar uchun yangi format va metodikalar joriy etildi.",
          "2024 – xalqaro olimpiadalarga tayyorgarlik milliy dasturi (6 oltin, 9 kumush, 11 bronza).",
          "2025 – hududiy markazlar ochildi, Milliy olimpiada tarmog‘i ishga tushirildi, Turkiya, Koreya va Qozog‘iston bilan memorandumlar imzolandi.",
        ],
      },
    },
  }[locale];

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg/general-info.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-white/75 dark:bg-background/85 z-[1]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Link key={index} href={stat.href} className="block">
                <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{t(stat.labelKey)}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardTitle className="text-2xl">{t('olympiadStats')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('internationalOlympiads')}
                </h3>
                <ul className="space-y-3">
                  {localizedContent.olympiadStats.international.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('regionalContinental')}
                </h3>
                <ul className="space-y-3">
                  {localizedContent.olympiadStats.regional.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('prestigiousInternational')}
                </h3>
                <ul className="space-y-3">
                  {localizedContent.olympiadStats.prestigious.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-muted">
              <CardTitle className="text-2xl">{t('aboutCenter')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-4">
              <p>{t('aboutCenterText1')}</p>
              <p>{t('aboutCenterText2')}</p>
              <p>{t('aboutCenterText3')}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardTitle className="text-2xl">{t('developmentStages')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-foreground">2023:</h3>
                <p>{localizedContent.stages.y2023}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">2024:</h3>
                <p>{localizedContent.stages.y2024}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">2025:</h3>
                <p>{localizedContent.stages.y2025}</p>
                <ul className="mt-4 space-y-1">
                  {localizedContent.stages.y2025List.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-muted">
              <CardTitle className="text-2xl">{t('keyObjectives')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                {localizedContent.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardTitle className="text-2xl">{t('strategicPrinciples')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-6">
              {localizedContent.principles.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-muted">
              <CardTitle className="text-2xl">{t('futureDirections')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-4">
              <p>{localizedContent.futureText}</p>
              <ul className="list-disc pl-6 space-y-2">
                {localizedContent.futureList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardTitle className="text-2xl">{t('boardOfTrustees')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-3">
              <p><strong>{locale === "ru" ? "Председатель:" : locale === "uz" ? "Rais:" : "Chairperson:"}</strong> {localizedContent.board.chair}</p>
              <p><strong>{locale === "ru" ? "Заместитель председателя:" : locale === "uz" ? "Rais o‘rinbosari:" : "Deputy Chairperson:"}</strong> {localizedContent.board.deputy}</p>
              <p><strong>{locale === "ru" ? "Секретарь:" : locale === "uz" ? "Kotib:" : "Secretary:"}</strong> {localizedContent.board.secretary}</p>
              <p className="font-semibold mt-4">{localizedContent.board.membersTitle}</p>
              <ul className="list-disc pl-6 space-y-1">
                {localizedContent.board.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                {localizedContent.board.note}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-muted">
              <CardTitle className="text-2xl">{t('legalDocuments')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-3">
              <ol className="list-decimal pl-6 space-y-2">
                {localizedContent.legal.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>
                  <strong>{localizedContent.legal.reportsTitle}</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    {localizedContent.legal.reports.map((report) => (
                      <li key={report}>{report}</li>
                    ))}
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
