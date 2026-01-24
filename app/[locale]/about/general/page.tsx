"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function GeneralInformationPage() {
  const t = useTranslations('pages.about.general');

  const stats = [
    { icon: Users, labelKey: "stats.activeStudents", value: "15,000+", href: "/about/winners" },
    { icon: Award, labelKey: "stats.internationalMedals", value: "60+", href: "/about/winners" },
    { icon: Globe, labelKey: "stats.partnerCountries", value: "3+", href: "/about/partners" },
    { icon: BookOpen, labelKey: "stats.programsCourses", value: "40+", href: "/programs/mathematics" },
  ];

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
                  <li>• International English Language Olympiad — <strong>7 medals (7 Silver)</strong>, 5 Cups</li>
                  <li>• International Geography Olympiad — <strong>2 medals (2 Bronze)</strong></li>
                  <li>• International Economics Olympiad — <strong>2 medals (1 Silver, 1 Bronze)</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('regionalContinental')}
                </h3>
                <ul className="space-y-3">
                  <li>• Zhautykov International Olympiad — <strong>19 medals (2 Gold, 5 Silver, 12 Bronze)</strong></li>
                  <li>• Caucasus Mathematics Olympiad — <strong>7 medals (4 Gold, 1 Silver, 2 Bronze)</strong></li>
                  <li>• Balkan Mathematics Olympiad — <strong>5 medals (1 Gold, 4 Silver)</strong></li>
                  <li>• Junior Balkan Mathematical Olympiad — <strong>6 medals (3 Gold, 2 Silver, 1 Bronze)</strong></li>
                  <li>• International Mathematics Competition — <strong>7 medals (3 Silver, 4 Bronze)</strong></li>
                  <li>• International Mendeleev Chemistry Olympiad — <strong>7 medals (3 Gold, 2 Silver, 2 Bronze)</strong></li>
                  <li>• International Young Naturalists' Olympiad — <strong>3 medals (3 Bronze)</strong></li>
                  <li>• Asian Physics Olympiad — <strong>1 medal (Bronze)</strong></li>
                  <li>• Asia-Pacific Informatics Olympiad — <strong>3 medals (3 Bronze)</strong></li>
                  <li>• Abu Rayhan Beruni International Chemistry Olympiad — <strong>19 medals (6 Gold, 8 Silver, 5 Bronze)</strong></li>
                  <li>• Al-Khwarizmi International Math & Informatics Olympiad — <strong>50 medals (7 Gold, 13 Silver, 30 Bronze)</strong></li>
                  <li>• European Girls' Informatics Olympiad — <strong>2 medals (2 Bronze)</strong></li>
                  <li>• European Girls' Mathematical Olympiad — <strong>3 medals (1 Silver, 2 Bronze)</strong></li>
                  <li>• Asia-Pacific Mathematics Olympiad — <strong>6 medals (1 Gold, 2 Silver, 3 Bronze)</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('prestigiousInternational')}
                </h3>
                <ul className="space-y-3">
                  <li>• International Chemistry Olympiad (IChO) — <strong>4 medals (2 Gold, 2 Silver)</strong></li>
                  <li>• International Mathematical Olympiad (IMO) — <strong>5 medals (4 Silver, 1 Bronze)</strong></li>
                  <li>• International Olympiad in Informatics (IOI) — <strong>2 medals (1 Silver, 1 Bronze)</strong></li>
                  <li>• International Physics Olympiad (IPhO) — <strong>2 medals (2 Bronze)</strong></li>
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
                <p>Developed mechanisms for coordinating Olympiads nationwide through a unified digital platform. The "Olympiad Management System" was launched, registering over 10,000 students digitally.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">2024:</h3>
                <p>Expanded with international training programs in mathematics, physics, informatics, and robotics. Over 200 teachers participated in seminars, and the first "Forum of Gifted Youth" hosted 500 students and 80 trainers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">2025:</h3>
                <p>Signed memoranda with Olympiad training centers in Turkey, South Korea, and Kazakhstan. Uzbek students achieved record-breaking results at international Olympiads. The National Olympiad Network was launched.</p>
                <ul className="mt-4 space-y-1">
                  <li>• IMO – 4 Silver, 1 Bronze</li>
                  <li>• IOI – 1 Silver, 1 Bronze</li>
                  <li>• WMI – 3 Gold, 3 Silver, 4 Bronze</li>
                  <li>• IChO – 4 Gold, 2 Silver, 7 Bronze</li>
                  <li>• ZIO – 2 Gold, 5 Silver, 12 Bronze</li>
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
                <li>Engage gifted students and teachers nationwide.</li>
                <li>Create equal opportunities for all students to realize their potential.</li>
                <li>Involve talented students in research and intellectual activities.</li>
                <li>Systematize Olympiad preparation and evaluation mechanisms.</li>
                <li>Enhance science education through modern methodologies.</li>
                <li>Promote transparency, openness, and efficiency in education management.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardTitle className="text-2xl">{t('strategicPrinciples')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-6">
              <div>
                <h4 className="font-semibold text-foreground">Supporting the Best</h4>
                <p>Focus on mentor–student systems, long-term engagement, and supporting winners' academic growth.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Leadership</h4>
                <p>Develop leadership, responsibility, communication, and project management among students.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Continuity of Knowledge</h4>
                <p>Integrate modern educational technologies to ensure ongoing improvement.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Exchange and Integration</h4>
                <p>Combine national and international best practices to improve teaching and learning quality.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-muted">
              <CardTitle className="text-2xl">{t('futureDirections')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-4">
              <p>By 2026, the Center plans to establish the "Olympiad Academy," create international methodological labs, and form a national Olympiad brand.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Science and Technology Synergy:</strong> Combining innovation, research, and analytical development.</li>
                <li><strong>Uniting Talented Youth:</strong> Strengthening collaboration and creativity across disciplines.</li>
                <li><strong>Broadening Horizons:</strong> Offering master classes, seminars, and expert-led lab sessions.</li>
                <li><strong>Transparency and Fairness:</strong> Ensuring open, merit-based student selection.</li>
                <li><strong>Fostering Creativity:</strong> Encouraging innovation and social impact through team projects.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardTitle className="text-2xl">{t('boardOfTrustees')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-3">
              <p><strong>Chairperson:</strong> President of the Republic of Uzbekistan</p>
              <p><strong>Deputy Chairperson:</strong> Minister of Preschool and School Education</p>
              <p><strong>Secretary:</strong> Director of the Agency for Specialized Educational Institutions</p>
              <p className="font-semibold mt-4">Members include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>President of the Academy of Sciences</li>
                <li>Minister of Digital Technologies</li>
                <li>Minister of Innovative Development</li>
                <li>Rector of Tashkent State University</li>
                <li>Director of Presidential Schools in Tashkent</li>
                <li>Laureates and trainers from international Olympiads</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                The Board defines strategic directions and oversees international cooperation. Its work follows Presidential Decree No. PQ-346 (Sept 30, 2024).
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-muted">
              <CardTitle className="text-2xl">{t('legalDocuments')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-muted-foreground space-y-3">
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Charter:</strong> Defines legal status, objectives, and management structure.</li>
                <li><strong>License:</strong> Authorizes organization of educational and international preparatory programs.</li>
                <li><strong>Certificate of State Registration:</strong> Confirms registration as a state institution under the Ministry of Justice.</li>
                <li>
                  <strong>Activity Reports:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>2023 – Introduced new Olympiad formats and guidelines.</li>
                    <li>2024 – National Program for International Olympiad Preparation (6 gold, 9 silver, 11 bronze).</li>
                    <li>2025 – Established regional centers, launched National Olympiad Network, and signed cooperation MoUs with Turkey, Korea, and Kazakhstan.</li>
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
