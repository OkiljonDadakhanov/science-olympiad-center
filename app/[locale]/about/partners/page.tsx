"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { partners } from "@/data/partners"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "next-intl"

export default function PartnersPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const content = {
    en: {
      title: "Our Partners",
      subtitle:
        "We are proud to collaborate with leading universities and organizations that share our commitment to advancing science education and innovation.",
      institutions: "Partner Institutions",
      visit: "Visit Website",
      footerText: "Interested in partnering with us? Let’s build the future of science education together.",
      inquiry: "Partnership Inquiry",
      guide: "Download Partnership Guide",
    },
    ru: {
      title: "Наши партнёры",
      subtitle:
        "Мы сотрудничаем с ведущими университетами и организациями, которые разделяют нашу миссию развития научного образования и инноваций.",
      institutions: "Партнёрские учреждения",
      visit: "Открыть сайт",
      footerText: "Хотите стать нашим партнёром? Давайте вместе развивать будущее научного образования.",
      inquiry: "Партнёрский запрос",
      guide: "Скачать партнёрский гид",
    },
    uz: {
      title: "Hamkorlarimiz",
      subtitle:
        "Biz ilm-fan ta’limi va innovatsiyalarni rivojlantirish yo‘lidagi maqsadlarimizni qo‘llab-quvvatlaydigan yetakchi universitet va tashkilotlar bilan hamkorlik qilamiz.",
      institutions: "Hamkor tashkilotlar",
      visit: "Veb-saytga o‘tish",
      footerText: "Biz bilan hamkorlik qilmoqchimisiz? Keling, fan ta’limi kelajagini birga quramiz.",
      inquiry: "Hamkorlik so‘rovi",
      guide: "Hamkorlik yo‘riqnomasini yuklab olish",
    },
  }[locale]

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg/partners.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            {content.subtitle}
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-2xl">{content.institutions}</CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-200 bg-gray-50 flex items-center justify-center">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={96}
                        height={96}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <div className="text-2xl font-bold text-gray-400">
                        {partner.name[0]}
                      </div>
                    )}
                  </div>

                  <h4 className="font-semibold text-gray-900 text-lg mb-2">
                    {partner.name}
                  </h4>

                  {partner.website && (
                    <a
                      href={partner.website.startsWith("http")
                        ? partner.website
                        : `https://${partner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {content.visit}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {content.footerText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              {content.inquiry}
            </button>
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              {content.guide}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
