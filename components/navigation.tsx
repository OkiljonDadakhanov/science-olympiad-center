"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/routing"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLocale, useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const t = useTranslations('nav')
  const locale = useLocale() as "en" | "ru" | "uz"
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const localized = {
    en: {
      logo: "Science Olympiad Center",
      missionDescription: "Identifying talented students and fostering their interest in science through olympiads.",
      joinPrograms: "Join Our Programs",
      joinProgramsDescription: "Start your journey to international science olympiad success.",
      about: {
        organizationInfo: "Information about our educational organization",
        generalInformation: "Overview of our center and activities",
        winners: "Our successful olympiad champions",
        boardOfTrustees: "Our governing board and leadership",
        expertCouncil: "Academic experts and advisors",
        documents: "Official documents and policies",
        partners: "Our institutional partnerships",
      },
      apply: {
        selectionCriteria: "Requirements and evaluation process",
        onlineApplication: "Submit your application online",
        requiredDocuments: "List of necessary documents",
        rulesOfStay: "Program rules and regulations",
        faq: "Frequently asked questions",
      },
      programs: {
        mathematics: "Advanced mathematical problem solving and competition preparation",
        physics: "Theoretical and experimental physics olympiad training",
        chemistry: "Chemical analysis and laboratory skills development",
        biology: "Life sciences and biological research methodologies",
        computerScience: "Programming, algorithms, and computational thinking",
      },
      olympiads: {
        prestigious: "National competitions and elite international qualifiers",
        international: "Global science olympiad competitions worldwide",
        local: "Regional and local science competitions",
        regional: "Regional international olympiads across Europe, Asia and the Asia-Pacific",
      },
    },
    ru: {
      logo: "Центр научных олимпиад",
      missionDescription: "Выявляем талантливых учеников и развиваем их интерес к науке через олимпиады.",
      joinPrograms: "Присоединиться к программам",
      joinProgramsDescription: "Начните путь к международному успеху в научных олимпиадах.",
      about: {
        organizationInfo: "Информация о нашей образовательной организации",
        generalInformation: "Обзор центра и направлений деятельности",
        winners: "Наши успешные победители олимпиад",
        boardOfTrustees: "Руководящий попечительский совет",
        expertCouncil: "Академические эксперты и советники",
        documents: "Официальные документы и положения",
        partners: "Наши институциональные партнёры",
      },
      apply: {
        selectionCriteria: "Требования и порядок оценки",
        onlineApplication: "Подайте заявку онлайн",
        requiredDocuments: "Список необходимых документов",
        rulesOfStay: "Правила программы и пребывания",
        faq: "Часто задаваемые вопросы",
      },
      programs: {
        mathematics: "Углублённая подготовка по математике и решению олимпиадных задач",
        physics: "Теоретическая и экспериментальная подготовка по физике",
        chemistry: "Развитие навыков химического анализа и лабораторной практики",
        biology: "Науки о жизни и методологии биологических исследований",
        computerScience: "Программирование, алгоритмы и вычислительное мышление",
      },
      olympiads: {
        prestigious: "Национальные соревнования и отбор на элитные международные олимпиады",
        international: "Международные научные олимпиады по всему миру",
        local: "Региональные и местные научные соревнования",
        regional: "Региональные международные олимпиады в Европе, Азии и АТР",
      },
    },
    uz: {
      logo: "Fan olimpiadalari markazi",
      missionDescription: "Iqtidorli o‘quvchilarni aniqlab, olimpiadalar orqali ularning fanlarga qiziqishini rivojlantiramiz.",
      joinPrograms: "Dasturlarga qo‘shiling",
      joinProgramsDescription: "Xalqaro fan olimpiadalaridagi muvaffaqiyat sari yo‘lingizni boshlang.",
      about: {
        organizationInfo: "Ta’lim tashkilotimiz haqida ma’lumot",
        generalInformation: "Markaz va faoliyatlarimiz haqida umumiy ko‘rinish",
        winners: "Muvaffaqiyatli olimpiada g‘oliblarimiz",
        boardOfTrustees: "Boshqaruv kuzatuv kengashi va rahbariyat",
        expertCouncil: "Akademik ekspertlar va maslahatchilar",
        documents: "Rasmiy hujjatlar va siyosatlar",
        partners: "Institutsional hamkorlarimiz",
      },
      apply: {
        selectionCriteria: "Talablar va baholash jarayoni",
        onlineApplication: "Arizangizni onlayn yuboring",
        requiredDocuments: "Kerakli hujjatlar ro‘yxati",
        rulesOfStay: "Dastur qoidalari va tartiblar",
        faq: "Ko‘p beriladigan savollar",
      },
      programs: {
        mathematics: "Murakkab matematik masalalar yechish va musobaqa tayyorgarligi",
        physics: "Nazariy va amaliy fizika olimpiadasi tayyorgarligi",
        chemistry: "Kimyoviy tahlil va laboratoriya ko‘nikmalarini rivojlantirish",
        biology: "Hayot fanlari va biologik tadqiqot metodologiyalari",
        computerScience: "Dasturlash, algoritmlar va hisoblash tafakkuri",
      },
      olympiads: {
        prestigious: "Milliy musobaqalar va nufuzli xalqaro saralash bosqichlari",
        international: "Butun dunyo bo‘ylab xalqaro fan olimpiadalari",
        local: "Hududiy va mahalliy fan musobaqalari",
        regional: "Yevropa, Osiyo va Osiyo-Tinch okeani mintaqasidagi xalqaro olimpiadalar",
      },
    },
  }[locale]

  const programs = [
    { title: t('mathematics'), href: "/programs/mathematics", description: localized.programs.mathematics },
    { title: t('physics'), href: "/programs/physics", description: localized.programs.physics },
    { title: t('chemistry'), href: "/programs/chemistry", description: localized.programs.chemistry },
    { title: t('biology'), href: "/programs/biology", description: localized.programs.biology },
    { title: t('computerScience'), href: "/programs/computer-science", description: localized.programs.computerScience },
  ]

  const olympiads = [
    { title: t('prestigiousOlympiads'), href: "/olympiads/prestigious", description: localized.olympiads.prestigious },
    { title: t('internationalOlympiads'), href: "/olympiads/international", description: localized.olympiads.international },
    { title: t('localOlympiads'), href: "/olympiads/local", description: localized.olympiads.local },
    { title: t('regionalInternationalOlympiads'), href: "/olympiads/mintaqaviy", description: localized.olympiads.regional },
  ]

  const aboutUsItems = [
    { title: t('organizationInfo'), href: "/about/organization", description: localized.about.organizationInfo },
    { title: t('generalInformation'), href: "/about/general", description: localized.about.generalInformation },
    { title: t('winners'), href: "/about/winners", description: localized.about.winners },
    { title: t('boardOfTrustees'), href: "/about/board", description: localized.about.boardOfTrustees },
    { title: t('expertCouncil'), href: "/about/expert-council", description: localized.about.expertCouncil },
    { title: t('documents'), href: "/about/documents", description: localized.about.documents },
    { title: t('partners'), href: "/about/partners", description: localized.about.partners },
  ]

  const applyItems = [
    { title: t('selectionCriteria'), href: "/apply/criteria", description: localized.apply.selectionCriteria },
    { title: t('onlineApplication'), href: "/apply/online", description: localized.apply.onlineApplication },
    { title: t('requiredDocuments'), href: "/apply/documents", description: localized.apply.requiredDocuments },
    { title: t('rulesOfStay'), href: "/apply/rules", description: localized.apply.rulesOfStay },
    { title: t('faq'), href: "/apply/faq", description: localized.apply.faq },
  ]

  // Auto-expand submenu based on current route
  useEffect(() => {
    if (isOpen && pathname) {
      // Remove locale prefix for matching
      const pathWithoutLocale = pathname.replace(/^\/(uz|en|ru)/, '') || '/'
      if (pathWithoutLocale.startsWith("/about")) {
        setOpenSubmenu("about")
      } else if (pathWithoutLocale.startsWith("/apply")) {
        setOpenSubmenu("apply")
      } else if (pathWithoutLocale.startsWith("/programs")) {
        setOpenSubmenu("programs")
      } else if (pathWithoutLocale.startsWith("/olympiads")) {
        setOpenSubmenu("olympiads")
      }
    }
  }, [isOpen, pathname])

  return (
    <header className="sticky top-0 z-[60] w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Image src="/images/logo.png" alt={localized.logo} width={36} height={36} className="h-8 w-auto sm:h-10" />
          <span className="hidden sm:block font-bold text-sm lg:text-xl text-primary truncate">{localized.logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="relative z-[60] hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('aboutUs')}</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about/mission"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">{t('ourMission')}</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {localized.missionDescription}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {aboutUsItems.map((item) => (
                    <ListItem key={item.title} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('howToApply')}</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/10 to-orange-500/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/apply"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">{localized.joinPrograms}</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {localized.joinProgramsDescription}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {applyItems.map((item) => (
                    <ListItem key={item.title} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('programs')}</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programs.map((program) => (
                    <ListItem key={program.title} title={program.title} href={program.href}>
                      {program.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('olympiads')}</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {olympiads.map((olympiad) => (
                    <ListItem key={olympiad.title} title={olympiad.title} href={olympiad.href}>
                      {olympiad.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/news">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('newsEvents')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" >
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('contact')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Keep the viewport anchored to the bottom of the nav */}
          <NavigationMenuViewport className="absolute left-0 top-full w-full -mt-px" />
        </NavigationMenu>

        {/* Language Switcher & Theme Toggle */}
        <div className="hidden md:flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
            {/* About Us with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>{t('aboutUs')}</span>
                {openSubmenu === "about" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "about" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  <Link
                    href="/about/mission"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm rounded-md transition-colors",
                      pathname?.includes("/about/mission")
                        ? "text-primary font-medium bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {t('ourMission')}
                  </Link>
                  {aboutUsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname?.includes(item.href)
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* How to Apply with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "apply" ? null : "apply")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>{t('howToApply')}</span>
                {openSubmenu === "apply" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "apply" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  {applyItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname?.includes(item.href)
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "programs" ? null : "programs")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>{t('programs')}</span>
                {openSubmenu === "programs" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "programs" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname?.includes(program.href)
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Olympiads with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "olympiads" ? null : "olympiads")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>{t('olympiads')}</span>
                {openSubmenu === "olympiads" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "olympiads" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  {olympiads.map((olympiad) => (
                    <Link
                      key={olympiad.href}
                      href={olympiad.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname?.includes(olympiad.href)
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {olympiad.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple links without submenu */}
            <Link
              href="/news"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-3 text-base font-medium rounded-md transition-colors",
                pathname?.includes("/news")
                  ? "text-primary bg-accent"
                  : "hover:bg-accent"
              )}
            >
              {t('newsEvents')}
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-3 text-base font-medium rounded-md transition-colors",
                pathname?.includes("/contact")
                  ? "text-primary bg-accent"
                  : "hover:bg-accent"
              )}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
