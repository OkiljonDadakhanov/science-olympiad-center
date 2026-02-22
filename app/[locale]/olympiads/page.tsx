"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useLocale } from "next-intl"

export default function OlympiadsPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const intlLocale = locale === "ru" ? "ru-RU" : locale === "uz" ? "uz-UZ" : "en-US"

  const content = {
    en: {
      heroTitle: "Science",
      heroHighlight: "Olympiads",
      heroDescription:
        "Discover opportunities to showcase your scientific knowledge and compete with the brightest minds from around the world in prestigious olympiad competitions.",
      categoriesTitle: "Olympiad Categories",
      categoriesDescription:
        "Choose from key competition tracks designed to challenge and inspire scientific excellence.",
      upcomingTitle: "Upcoming Olympiads",
      upcomingDescription:
        "Don't miss these exciting opportunities to compete and showcase your scientific knowledge.",
      exploreCompetitions: "Explore Competitions",
      registrationDeadline: "Registration deadline",
      learnMore: "Learn More",
      categories: [
        {
          title: "Prestigious Olympiads",
          description: "National competitions and elite international qualifiers",
          href: "/olympiads/prestigious",
          icon: Trophy,
          color: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20",
          count: "12 competitions",
        },
        {
          title: "International Olympiads",
          description: "Global science olympiad competitions worldwide",
          href: "/olympiads/international",
          icon: Trophy,
          color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20",
          count: "8 competitions",
        },
        {
          title: "Regional International Olympiads",
          description: "Regional international olympiads across Europe, Asia and the Asia-Pacific",
          href: "/olympiads/mintaqaviy",
          icon: Trophy,
          color: "bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border-indigo-500/20",
          count: "13 competitions",
        },
        {
          title: "Local Olympiads",
          description: "Regional and local science competitions",
          href: "/olympiads/local",
          icon: Trophy,
          color: "bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20",
          count: "15 competitions",
        },
      ],
      upcoming: [
        {
          title: "International Mathematics Olympiad 2025",
          date: "2025-07-15",
          location: "Bath, United Kingdom",
          category: "International",
          participants: "6 students selected",
          registrationDeadline: "2025-03-01",
          description: "The most prestigious mathematics competition for high school students worldwide.",
          categoryHref: "/olympiads/international",
        },
        {
          title: "National Physics Olympiad 2025",
          date: "2025-04-20",
          location: "Tashkent, Uzbekistan",
          category: "Prestigious",
          participants: "Registration open",
          registrationDeadline: "2025-02-15",
          description: "National competition to select the best physics students for international representation.",
          categoryHref: "/olympiads/prestigious",
        },
        {
          title: "Regional Chemistry Competition",
          date: "2025-03-10",
          location: "Samarkand, Uzbekistan",
          category: "Local",
          participants: "150+ registered",
          registrationDeadline: "2025-02-01",
          description: "Regional chemistry competition for students across Central Asia.",
          categoryHref: "/olympiads/local",
        },
      ],
    },
    ru: {
      heroTitle: "Научные",
      heroHighlight: "олимпиады",
      heroDescription:
        "Откройте возможности продемонстрировать свои знания и соревноваться с сильнейшими учениками мира на престижных олимпиадах.",
      categoriesTitle: "Категории олимпиад",
      categoriesDescription:
        "Выберите одно из направлений соревнований, каждое из которых развивает академическую и научную подготовку.",
      upcomingTitle: "Предстоящие олимпиады",
      upcomingDescription: "Не упустите эти возможности для участия и демонстрации своих знаний.",
      exploreCompetitions: "Смотреть соревнования",
      registrationDeadline: "Срок регистрации",
      learnMore: "Подробнее",
      categories: [
        {
          title: "Престижные олимпиады",
          description: "Национальные соревнования и элитные международные отборы",
          href: "/olympiads/prestigious",
          icon: Trophy,
          color: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20",
          count: "12 соревнований",
        },
        {
          title: "Международные олимпиады",
          description: "Мировые научные олимпиады",
          href: "/olympiads/international",
          icon: Trophy,
          color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20",
          count: "8 соревнований",
        },
        {
          title: "Региональные международные олимпиады",
          description: "Региональные международные олимпиады в Европе, Азии и АТР",
          href: "/olympiads/mintaqaviy",
          icon: Trophy,
          color: "bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border-indigo-500/20",
          count: "13 соревнований",
        },
        {
          title: "Местные олимпиады",
          description: "Региональные и местные научные соревнования",
          href: "/olympiads/local",
          icon: Trophy,
          color: "bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20",
          count: "15 соревнований",
        },
      ],
      upcoming: [
        {
          title: "Международная математическая олимпиада 2025",
          date: "2025-07-15",
          location: "Бат, Великобритания",
          category: "Международная",
          participants: "Отобрано 6 учеников",
          registrationDeadline: "2025-03-01",
          description: "Самое престижное математическое соревнование для школьников в мире.",
          categoryHref: "/olympiads/international",
        },
        {
          title: "Национальная олимпиада по физике 2025",
          date: "2025-04-20",
          location: "Ташкент, Узбекистан",
          category: "Престижная",
          participants: "Открыта регистрация",
          registrationDeadline: "2025-02-15",
          description: "Национальное соревнование по отбору сильнейших физиков для международного представления.",
          categoryHref: "/olympiads/prestigious",
        },
        {
          title: "Региональное соревнование по химии",
          date: "2025-03-10",
          location: "Самарканд, Узбекистан",
          category: "Местная",
          participants: "150+ зарегистрировано",
          registrationDeadline: "2025-02-01",
          description: "Региональное химическое соревнование для учащихся Центральной Азии.",
          categoryHref: "/olympiads/local",
        },
      ],
    },
    uz: {
      heroTitle: "Fan",
      heroHighlight: "olimpiadalari",
      heroDescription:
        "Ilmiy bilimlaringizni namoyish etish va dunyoning eng iqtidorli o‘quvchilari bilan nufuzli olimpiadalarda bellashish imkoniyatlarini kashf eting.",
      categoriesTitle: "Olimpiada yo‘nalishlari",
      categoriesDescription:
        "Ilmiy salohiyatni oshirishga xizmat qiladigan asosiy musobaqa yo‘nalishlaridan birini tanlang.",
      upcomingTitle: "Yaqinlashib kelayotgan olimpiadalar",
      upcomingDescription:
        "Ishtirok etish va bilimingizni ko‘rsatish uchun ushbu imkoniyatlarni qo‘ldan boy bermang.",
      exploreCompetitions: "Musobaqalarni ko‘rish",
      registrationDeadline: "Ro‘yxatdan o‘tish muddati",
      learnMore: "Batafsil",
      categories: [
        {
          title: "Nufuzli olimpiadalar",
          description: "Milliy musobaqalar va elit xalqaro saralashlar",
          href: "/olympiads/prestigious",
          icon: Trophy,
          color: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20",
          count: "12 ta musobaqa",
        },
        {
          title: "Xalqaro olimpiadalar",
          description: "Dunyo bo‘ylab xalqaro fan olimpiadalari",
          href: "/olympiads/international",
          icon: Trophy,
          color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20",
          count: "8 ta musobaqa",
        },
        {
          title: "Mintaqaviy xalqaro olimpiadalar",
          description: "Yevropa, Osiyo va Osiyo-Tinch okeani mintaqasidagi xalqaro olimpiadalar",
          href: "/olympiads/mintaqaviy",
          icon: Trophy,
          color: "bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border-indigo-500/20",
          count: "13 ta musobaqa",
        },
        {
          title: "Mahalliy olimpiadalar",
          description: "Hududiy va mahalliy fan musobaqalari",
          href: "/olympiads/local",
          icon: Trophy,
          color: "bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20",
          count: "15 ta musobaqa",
        },
      ],
      upcoming: [
        {
          title: "Xalqaro matematika olimpiadasi 2025",
          date: "2025-07-15",
          location: "Bat, Buyuk Britaniya",
          category: "Xalqaro",
          participants: "6 nafar o‘quvchi saralangan",
          registrationDeadline: "2025-03-01",
          description: "Maktab o‘quvchilari uchun dunyodagi eng nufuzli matematika musobaqasi.",
          categoryHref: "/olympiads/international",
        },
        {
          title: "Milliy fizika olimpiadasi 2025",
          date: "2025-04-20",
          location: "Toshkent, O‘zbekiston",
          category: "Nufuzli",
          participants: "Ro‘yxatdan o‘tish ochiq",
          registrationDeadline: "2025-02-15",
          description: "Xalqaro ishtirok uchun eng kuchli fiziklarni saralashga qaratilgan milliy musobaqa.",
          categoryHref: "/olympiads/prestigious",
        },
        {
          title: "Mintaqaviy kimyo musobaqasi",
          date: "2025-03-10",
          location: "Samarqand, O‘zbekiston",
          category: "Mahalliy",
          participants: "150+ ro‘yxatdan o‘tgan",
          registrationDeadline: "2025-02-01",
          description: "Markaziy Osiyo o‘quvchilari uchun mintaqaviy kimyo musobaqasi.",
          categoryHref: "/olympiads/local",
        },
      ],
    },
  }[locale]

  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero Section */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {content.heroTitle} <span className="text-primary">{content.heroHighlight}</span>
              </h1>
              <p className="text-base md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Olympiad Categories */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {content.categoriesTitle}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {content.categoriesDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {content.categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card key={category.title} className={`transition-all hover:shadow-lg ${category.color}`}>
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {category.count}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {category.description}
                      </CardDescription>
                      <Button asChild className="w-full">
                        <Link href={category.href}>
                          {content.exploreCompetitions} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Olympiads */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {content.upcomingTitle}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {content.upcomingDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {content.upcoming.map((olympiad) => (
                <Card key={olympiad.title} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{olympiad.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(olympiad.date).toLocaleDateString(intlLocale)}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{olympiad.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {olympiad.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {olympiad.participants}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{olympiad.description}</p>

                    <div className="text-sm text-muted-foreground mb-4">
                      {content.registrationDeadline}: {new Date(olympiad.registrationDeadline).toLocaleDateString(intlLocale)}
                    </div>

                    <Button asChild className="w-full">
                      <Link href={olympiad.categoryHref}>{content.learnMore}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    
    </div>
  )
}
