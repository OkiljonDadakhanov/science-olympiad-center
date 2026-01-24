"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { partners } from "@/data/partners"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We are proud to collaborate with leading universities and
            organizations that share our commitment to advancing science
            education and innovation.
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-2xl">Partner Institutions</CardTitle>
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
                      Visit Website
                    </a>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Interested in partnering with us? Let’s build the future of science
            education together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Partnership Inquiry
            </button>
            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
