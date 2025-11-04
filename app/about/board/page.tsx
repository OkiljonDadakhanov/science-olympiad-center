import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { boardMembers } from "@/data/board-members";

export default function BoardOfTrusteesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
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
          <div className="space-y-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center md:justify-start">
                      {member.image ? (
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100 flex items-center justify-center">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full object-top [transform:rotate(0deg)]"
                            style={{
                              objectPosition: "center top",
                              transform: "rotate(0deg)",
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    <div className="md:w-3/4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {member.name}
                          </h3>
                          <Badge variant="secondary" className="mb-3">
                            {member.position}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-800">
                            Background:{" "}
                          </span>
                          <span className="text-gray-600">
                            {member.background}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Expertise:{" "}
                          </span>
                          <span className="text-gray-600">
                            {member.expertise}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Experience:{" "}
                          </span>
                          <span className="text-gray-600">
                            {member.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Contact the Board</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">
                      board@scienceolympiad.uz
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">+998 71 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-800">Address</div>
                    <div className="text-gray-600">Tashkent, Uzbekistan</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
