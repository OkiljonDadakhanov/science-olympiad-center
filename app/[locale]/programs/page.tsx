"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Atom, Microscope, Code, Zap, ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useLocale } from "next-intl"

export default function ProgramsPage() {
  const locale = useLocale() as "en" | "ru" | "uz"

  const content = {
    en: {
      heroTitle: "Our",
      heroHighlight: "Programs",
      heroDescription:
        "Comprehensive training programs designed to prepare exceptional students for national and international science olympiads across multiple disciplines.",
      topicsTitle: "Key Topics Covered:",
      learnMore: "Learn More",
      featuresTitle: "What Makes Our Programs Special",
      featuresDescription: "Our comprehensive approach ensures students receive world-class training and support.",
      features: [
        {
          title: "Expert Instructors",
          description: "Learn from experienced educators and researchers with proven track records in olympiad training.",
          icon: Users,
        },
        {
          title: "Comprehensive Curriculum",
          description: "Carefully designed curriculum covering all aspects needed for olympiad success.",
          icon: BookOpen,
        },
        {
          title: "Proven Results",
          description: "Our students consistently achieve top rankings in national and international competitions.",
          icon: Award,
        },
        {
          title: "Intensive Training",
          description: "Rigorous training sessions designed to push students to their full potential.",
          icon: Zap,
        },
      ],
      programs: [
        {
          id: "mathematics",
          title: "Mathematics",
          icon: Calculator,
          description: "Advanced mathematical problem solving and competition preparation",
          longDescription:
            "Our mathematics program focuses on developing analytical thinking, problem-solving skills, and mathematical intuition. Students work on challenging problems from algebra, geometry, number theory, and combinatorics.",
          duration: "12 months",
          level: "Advanced",
          students: "50+",
          achievements: "15 International Medals",
          topics: ["Algebra", "Geometry", "Number Theory", "Combinatorics", "Mathematical Analysis"],
          href: "/programs/mathematics",
        },
        {
          id: "physics",
          title: "Physics",
          icon: Zap,
          description: "Theoretical and experimental physics olympiad training",
          longDescription:
            "Comprehensive physics training covering mechanics, thermodynamics, electromagnetism, optics, and modern physics. Includes both theoretical problem-solving and hands-on laboratory work.",
          duration: "12 months",
          level: "Advanced",
          students: "45+",
          achievements: "12 International Medals",
          topics: ["Classical Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
          href: "/programs/physics",
        },
        {
          id: "chemistry",
          title: "Chemistry",
          icon: Atom,
          description: "Chemical analysis and laboratory skills development",
          longDescription:
            "In-depth chemistry program covering organic, inorganic, physical, and analytical chemistry. Students gain extensive laboratory experience and develop strong analytical skills.",
          duration: "12 months",
          level: "Advanced",
          students: "40+",
          achievements: "10 International Medals",
          topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry"],
          href: "/programs/chemistry",
        },
        {
          id: "biology",
          title: "Biology",
          icon: Microscope,
          description: "Life sciences and biological research methodologies",
          longDescription:
            "Comprehensive biology program covering molecular biology, genetics, ecology, anatomy, and physiology. Emphasis on research methodologies and scientific inquiry.",
          duration: "12 months",
          level: "Advanced",
          students: "35+",
          achievements: "8 International Medals",
          topics: ["Molecular Biology", "Genetics", "Ecology", "Anatomy & Physiology", "Evolution"],
          href: "/programs/biology",
        },
        {
          id: "computer-science",
          title: "Computer Science",
          icon: Code,
          description: "Programming, algorithms, and computational thinking",
          longDescription:
            "Advanced computer science program focusing on algorithms, data structures, programming languages, and computational problem-solving. Preparation for programming contests and informatics olympiads.",
          duration: "12 months",
          level: "Advanced",
          students: "60+",
          achievements: "18 International Medals",
          topics: ["Algorithms", "Data Structures", "Programming Languages", "Computational Geometry", "Graph Theory"],
          href: "/programs/computer-science",
        },
      ],
    },
    ru: {
      heroTitle: "Наши",
      heroHighlight: "программы",
      heroDescription:
        "Комплексные программы подготовки, направленные на подготовку талантливых учащихся к национальным и международным научным олимпиадам.",
      topicsTitle: "Ключевые темы:",
      learnMore: "Подробнее",
      featuresTitle: "Почему наши программы эффективны",
      featuresDescription: "Мы обеспечиваем системный подход, качественную подготовку и сильную академическую поддержку.",
      features: [
        {
          title: "Опытные преподаватели",
          description: "Обучение у наставников и исследователей с подтверждёнными результатами подготовки олимпиадников.",
          icon: Users,
        },
        {
          title: "Комплексная программа",
          description: "Продуманная учебная структура, охватывающая все важные аспекты олимпиадной подготовки.",
          icon: BookOpen,
        },
        {
          title: "Подтверждённые результаты",
          description: "Наши ученики регулярно занимают призовые места на национальных и международных олимпиадах.",
          icon: Award,
        },
        {
          title: "Интенсивная подготовка",
          description: "Сильные тренировочные занятия, развивающие максимум потенциала каждого ученика.",
          icon: Zap,
        },
      ],
      programs: [
        {
          id: "mathematics",
          title: "Математика",
          icon: Calculator,
          description: "Углублённое решение задач и подготовка к олимпиадам",
          longDescription:
            "Программа развивает аналитическое мышление, навыки решения нестандартных задач и математическую интуицию. Ученики работают с алгеброй, геометрией, теорией чисел и комбинаторикой.",
          duration: "12 месяцев",
          level: "Продвинутый",
          students: "50+",
          achievements: "15 международных медалей",
          topics: ["Алгебра", "Геометрия", "Теория чисел", "Комбинаторика", "Математический анализ"],
          href: "/programs/mathematics",
        },
        {
          id: "physics",
          title: "Физика",
          icon: Zap,
          description: "Теоретическая и экспериментальная олимпиадная подготовка по физике",
          longDescription:
            "Комплексная программа по механике, термодинамике, электромагнетизму, оптике и современной физике. Включает теоретические разборы и практические лабораторные занятия.",
          duration: "12 месяцев",
          level: "Продвинутый",
          students: "45+",
          achievements: "12 международных медалей",
          topics: ["Классическая механика", "Термодинамика", "Электромагнетизм", "Оптика", "Современная физика"],
          href: "/programs/physics",
        },
        {
          id: "chemistry",
          title: "Химия",
          icon: Atom,
          description: "Развитие навыков химического анализа и лабораторной практики",
          longDescription:
            "Углублённая программа по органической, неорганической, физической и аналитической химии. Учащиеся получают практический лабораторный опыт и развивают аналитическое мышление.",
          duration: "12 месяцев",
          level: "Продвинутый",
          students: "40+",
          achievements: "10 международных медалей",
          topics: ["Органическая химия", "Неорганическая химия", "Физическая химия", "Аналитическая химия", "Биохимия"],
          href: "/programs/chemistry",
        },
        {
          id: "biology",
          title: "Биология",
          icon: Microscope,
          description: "Науки о жизни и методы биологических исследований",
          longDescription:
            "Комплексная программа по молекулярной биологии, генетике, экологии, анатомии и физиологии с упором на исследовательские навыки и научное мышление.",
          duration: "12 месяцев",
          level: "Продвинутый",
          students: "35+",
          achievements: "8 международных медалей",
          topics: ["Молекулярная биология", "Генетика", "Экология", "Анатомия и физиология", "Эволюция"],
          href: "/programs/biology",
        },
        {
          id: "computer-science",
          title: "Информатика",
          icon: Code,
          description: "Программирование, алгоритмы и вычислительное мышление",
          longDescription:
            "Программа по информатике с фокусом на алгоритмы, структуры данных, языки программирования и олимпиадное решение задач. Подготовка к соревнованиям по программированию.",
          duration: "12 месяцев",
          level: "Продвинутый",
          students: "60+",
          achievements: "18 международных медалей",
          topics: ["Алгоритмы", "Структуры данных", "Языки программирования", "Вычислительная геометрия", "Теория графов"],
          href: "/programs/computer-science",
        },
      ],
    },
    uz: {
      heroTitle: "Bizning",
      heroHighlight: "dasturlarimiz",
      heroDescription:
        "Iqtidorli o‘quvchilarni milliy va xalqaro fan olimpiadalariga tayyorlash uchun mo‘ljallangan keng qamrovli tayyorgarlik dasturlari.",
      topicsTitle: "Asosiy mavzular:",
      learnMore: "Batafsil",
      featuresTitle: "Dasturlarimizning ustunliklari",
      featuresDescription: "Tizimli yondashuv orqali o‘quvchilarga yuqori darajadagi tayyorgarlik va qo‘llab-quvvatlash beramiz.",
      features: [
        {
          title: "Tajribali ustozlar",
          description: "Olimpiada tayyorgarligida natija ko‘rsatgan pedagog va mutaxassislardan ta’lim oling.",
          icon: Users,
        },
        {
          title: "Keng qamrovli o‘quv reja",
          description: "Olimpiadadagi muvaffaqiyat uchun zarur bo‘lgan barcha yo‘nalishlarni qamrab olgan dastur.",
          icon: BookOpen,
        },
        {
          title: "Amalda isbotlangan natijalar",
          description: "O‘quvchilarimiz milliy va xalqaro musobaqalarda muntazam yuqori natija qayd etadi.",
          icon: Award,
        },
        {
          title: "Intensiv tayyorgarlik",
          description: "Har bir o‘quvchining salohiyatini to‘liq ochishga qaratilgan kuchli mashg‘ulotlar.",
          icon: Zap,
        },
      ],
      programs: [
        {
          id: "mathematics",
          title: "Matematika",
          icon: Calculator,
          description: "Murakkab masalalar yechish va musobaqa tayyorgarligi",
          longDescription:
            "Ushbu dastur tahliliy fikrlash, nostandart masala yechish ko‘nikmasi va matematik intuitsiyani rivojlantiradi. O‘quvchilar algebra, geometriya, sonlar nazariyasi va kombinatorika bo‘yicha ishlaydi.",
          duration: "12 oy",
          level: "Yuqori daraja",
          students: "50+",
          achievements: "15 xalqaro medal",
          topics: ["Algebra", "Geometriya", "Sonlar nazariyasi", "Kombinatorika", "Matematik analiz"],
          href: "/programs/mathematics",
        },
        {
          id: "physics",
          title: "Fizika",
          icon: Zap,
          description: "Nazariy va amaliy fizika olimpiadasi tayyorgarligi",
          longDescription:
            "Mexanika, termodinamika, elektromagnetizm, optika va zamonaviy fizikani qamrab olgan kompleks tayyorgarlik. Nazariy masalalar va laboratoriya mashg‘ulotlarini o‘z ichiga oladi.",
          duration: "12 oy",
          level: "Yuqori daraja",
          students: "45+",
          achievements: "12 xalqaro medal",
          topics: ["Klassik mexanika", "Termodinamika", "Elektromagnetizm", "Optika", "Zamonaviy fizika"],
          href: "/programs/physics",
        },
        {
          id: "chemistry",
          title: "Kimyo",
          icon: Atom,
          description: "Kimyoviy tahlil va laboratoriya ko‘nikmalarini rivojlantirish",
          longDescription:
            "Organik, noorganik, fizik va analitik kimyoni qamrab olgan chuqurlashtirilgan dastur. O‘quvchilar laboratoriya tajribasini oshirib, tahliliy fikrlashni rivojlantiradi.",
          duration: "12 oy",
          level: "Yuqori daraja",
          students: "40+",
          achievements: "10 xalqaro medal",
          topics: ["Organik kimyo", "Noorganik kimyo", "Fizik kimyo", "Analitik kimyo", "Biokimyo"],
          href: "/programs/chemistry",
        },
        {
          id: "biology",
          title: "Biologiya",
          icon: Microscope,
          description: "Hayot fanlari va biologik tadqiqot metodologiyalari",
          longDescription:
            "Molekulyar biologiya, genetika, ekologiya, anatomiya va fiziologiyani qamrab olgan kompleks dastur. Ilmiy izlanish usullari va tadqiqot ko‘nikmalariga urg‘u beriladi.",
          duration: "12 oy",
          level: "Yuqori daraja",
          students: "35+",
          achievements: "8 xalqaro medal",
          topics: ["Molekulyar biologiya", "Genetika", "Ekologiya", "Anatomiya va fiziologiya", "Evolyutsiya"],
          href: "/programs/biology",
        },
        {
          id: "computer-science",
          title: "Informatika",
          icon: Code,
          description: "Dasturlash, algoritmlar va hisoblash tafakkuri",
          longDescription:
            "Algoritmlar, ma’lumotlar tuzilmalari, dasturlash tillari va olimpiada darajasidagi masalalar yechimiga yo‘naltirilgan ilg‘or informatika dasturi.",
          duration: "12 oy",
          level: "Yuqori daraja",
          students: "60+",
          achievements: "18 xalqaro medal",
          topics: ["Algoritmlar", "Ma’lumotlar tuzilmalari", "Dasturlash tillari", "Hisoblash geometriyasi", "Graflar nazariyasi"],
          href: "/programs/computer-science",
        },
      ],
    },
  }[locale]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-14 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {content.heroTitle} <span className="text-primary">{content.heroHighlight}</span>
              </h1>
              <p className="text-base md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {content.programs.map((program) => {
                const IconComponent = program.icon
                return (
                  <Card
                    key={program.id}
                    className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold">{program.title}</CardTitle>
                          <CardDescription className="text-base">{program.description}</CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          <Clock className="h-3 w-3 mr-1" />
                          {program.duration}
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          <BookOpen className="h-3 w-3 mr-1" />
                          {program.level}
                        </Badge>
                        <Badge variant="outline">
                          <Users className="h-3 w-3 mr-1" />
                          {program.students}
                        </Badge>
                        <Badge variant="outline" className="text-primary border-primary/20">
                          <Award className="h-3 w-3 mr-1" />
                          {program.achievements}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{program.longDescription}</p>

                      <div>
                        <h4 className="font-semibold mb-3">{content.topicsTitle}</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={program.href}>
                          {content.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {content.featuresTitle}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {content.featuresDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.features.map((feature) => (
                <Card key={feature.title} className="text-center border-primary/10">
                  <CardContent className="pt-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
