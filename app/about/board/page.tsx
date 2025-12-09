"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { boardMembers } from "@/data/board-members";
import { FadingBackground } from "@/components/fading-bg";

export default function BoardOfTrusteesPage() {
  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/main-bg.jpg" height={400} />
      <div className="relative bg-gradient-to-br from-orange-50/98 via-white/95 to-blue-50/98 backdrop-blur-sm min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Board of Trustees
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our Board of Trustees comprises distinguished professionals who
              lead various departments and ensure the excellence of our
              educational initiatives.
            </p>
          </div>

          {/* Board Members */}
          <div className="space-y-10">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm border border-gray-100"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="md:w-1/3 flex justify-center">
                      {member.image ? (
                        <div className="w-56 h-64 rounded-xl overflow-hidden border-[6px] border-white shadow-2xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={224}
                            height={256}
                            className="object-cover object-center w-full h-full"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-56 h-64 bg-gradient-to-br from-orange-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    <div className="md:w-2/3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                            {member.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-3"
                          >
                            {member.position}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4 text-gray-700">
                        <div>
                          <span className="font-semibold text-gray-900">
                            Background:
                          </span>{" "}
                          {member.background}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            Expertise:
                          </span>{" "}
                          {member.expertise}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            Work Experience:
                          </span>{" "}
                          {member.experience}
                        </div>
                        {member.education && member.education.length > 0 && (
                          <div>
                            <span className="font-semibold text-gray-900">
                              Education:
                            </span>
                            <ul className="mt-2 space-y-1 ml-4">
                              {member.education.map((edu, idx) => (
                                <li key={idx} className="text-sm">
                                  • {edu}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-lg mt-12 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <CardTitle className="text-2xl font-semibold">
                Contact the Board
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-7 h-7 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">
                      board@scienceolympiad.uz
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-7 h-7 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+998 77 550 33 66</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-7 h-7 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">Tashkent, Uzbekistan</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
