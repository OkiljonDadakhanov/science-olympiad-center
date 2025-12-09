"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen } from "lucide-react";
import Link from "next/link";

export default function GeneralInformationPage() {
  const stats = [
    { icon: Users, label: "Active Students", value: "15,000+" },
    { icon: Award, label: "International Medals", value: "60+" },
    { icon: Globe, label: "Partner Countries", value: "3+" },
    { icon: BookOpen, label: "Programs & Courses", value: "40+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              General Information
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The Science Olympiad Center is a state educational institution
              under the Agency for Specialized Educational Institutions of the
              Ministry of Preschool and School Education of the Republic of
              Uzbekistan.
            </p>
          </div>
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              let linkHref = "";
              if (stat.label === "Active Students" || stat.label === "International Medals") {
                linkHref = "/about/winners";
              } else if (stat.label === "Partner Countries") {
                linkHref = "/about/partners";
              } else if (stat.label === "Programs & Courses") {
                linkHref = "/programs/mathematics";
              }

              const cardContent = (
                <Card key={index} className={`border-0 shadow-lg text-center ${linkHref ? "hover:shadow-xl transition-all duration-300 cursor-pointer" : ""}`}>
                  <CardContent className="p-6">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );

              return linkHref ? (
                <Link key={index} href={linkHref} className="block">
                  {cardContent}
                </Link>
              ) : (
                cardContent
              );
            })}
          </div>
          {/* ⭐ NEW: Olympiad Statistics */}
          <Card className="border-0 shadow-lg mb-12">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Olympiad Statistics</CardTitle>
            </CardHeader>

            <CardContent className="p-8 text-gray-700 space-y-10">
              {/* International Olympiads */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  International Olympiads
                </h3>

                <ul className="space-y-3">
                  <li>
                    • International English Language Olympiad —
                    <strong> 7 medals (7 Silver)</strong>, 5 Cups
                  </li>
                  <li>
                    • International Geography Olympiad —
                    <strong> 2 medals (2 Bronze)</strong>
                  </li>
                  <li>
                    • International Economics Olympiad —
                    <strong> 2 medals (1 Silver, 1 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/FEJDF5k7N8Y?si=Zn9KUtcTbepizapo"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Regional & Continental Olympiads */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Regional & Continental Olympiads
                </h3>

                <ul className="space-y-3">
                  <li>
                    • Zhautykov International Olympiad —
                    <strong> 19 medals (2 Gold, 5 Silver, 12 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/EaZS4KPeB7c?si=jVVGjTT1hq1GlVeS"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • Caucasus Mathematics Olympiad —
                    <strong> 7 medals (4 Gold, 1 Silver, 2 Bronze)</strong>
                  </li>
                  <li>
                    • Balkan Mathematics Olympiad —
                    <strong> 5 medals (1 Gold, 4 Silver)</strong>{" "}
                    <Link
                      href="https://youtu.be/QgyTj6eaoUk?si=scX16Sx1lLD9wZDh"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • Junior Balkan Mathematical Olympiad —
                    <strong> 6 medals (3 Gold, 2 Silver, 1 Bronze)</strong>
                  </li>
                  <li>
                    • International Mathematics Competition —
                    <strong> 7 medals (3 Silver, 4 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/VvEyoI6uurI?si=8lB9Bi7CTqp6sAEp"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • International Mendeleev Chemistry Olympiad —
                    <strong> 7 medals (3 Gold, 2 Silver, 2 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/VvEyoI6uurI?si=jR5i2CpsgxXd0J76"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • International Young Naturalists' Olympiad —
                    <strong> 3 medals (3 Bronze)</strong>
                  </li>
                  <li>
                    • Asian Physics Olympiad —<strong> 1 medal (Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/Au6Id8OSVOU?si=zKwgBiqFCoXSdSwP"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • Asia-Pacific Informatics Olympiad —
                    <strong> 3 medals (3 Bronze)</strong> — online
                  </li>
                  <li>
                    • Abu Rayhan Beruni International Chemistry Olympiad —
                    <strong> 19 medals (6 Gold, 8 Silver, 5 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/7QikXF8q4Sw?si=bhuiTnml8Ikelqng"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • Al-Khwarizmi International Math & Informatics Olympiad —
                    <strong> 50 medals (7 Gold, 13 Silver, 30 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/ScYvMlvo6sY?si=gYQgmZX_CZkmf67I"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • European Girls' Informatics Olympiad —
                    <strong> 2 medals (2 Bronze)</strong>{" "}
                    <Link
                      href="https://youtu.be/dnMynhU1xu0?si=xiZP1J5neU3Zt_KY"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • European Girls' Mathematical Olympiad —
                    <strong> 3 medals (1 Silver, 2 Bronze)</strong>
                  </li>
                  <li>
                    • Asia-Pacific Mathematics Olympiad —
                    <strong> 6 medals (1 Gold, 2 Silver, 3 Bronze)</strong> —
                    online
                  </li>
                </ul>
              </div>

              {/* Prestigious Olympiads */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Prestigious International Olympiads
                </h3>

                <ul className="space-y-3">
                  <li>
                    • International Chemistry Olympiad (IChO) —
                    <strong> 4 medals (2 Gold, 2 Silver)</strong>
                  </li>
                  <li>
                    • International Mathematical Olympiad (IMO) —
                    <strong> 5 medals (4 Silver, 1 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/IJCkuajAB3Y?si=E5h90g5QZr-sU9Dq"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                  <li>
                    • International Olympiad in Informatics (IOI) —
                    <strong> 2 medals (1 Silver, 1 Bronze)</strong>
                  </li>
                  <li>
                    • International Physics Olympiad (IPhO) —
                    <strong> 2 medals (2 Bronze)</strong>{" "}
                    <Link
                      href="https://www.youtube.com/live/AiFh1CuJlFM?si=JUBnhFhSVMJumD53"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Watch
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* --- Rest of your existing content continues unchanged --- */}
          {/* About the Center */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              <CardTitle className="text-2xl">About the Center</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-gray-700 space-y-4">
              <p>
                The Science Olympiad Center is an educational and organizational
                institution established as a state organization under the Agency
                for Specialized Educational Institutions of the Ministry of
                Preschool and School Education.
              </p>
              <p>
                The Center operates based on the advanced initiatives of the
                President of the Republic of Uzbekistan with the goal of
                identifying gifted students, developing their scientific
                potential, and preparing internationally competitive
                specialists.
              </p>
              <p>
                Its mission is to establish a system for early identification,
                development, and international preparation of talented students
                through science olympiads, competitions, and academic challenges
                under the guidance of qualified mentors.
              </p>
            </CardContent>
          </Card>
          {/* (Your entire remaining page stays the same...) */}
          {/* Development Stages */}{" "}
          <Card className="border-0 shadow-lg">
            {" "}
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              {" "}
              <CardTitle className="text-2xl">
                Stages of Development and Achievements
              </CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent className="p-8 text-gray-700 space-y-6">
              {" "}
              <div>
                {" "}
                <h3 className="font-semibold text-lg text-gray-900">
                  2023:
                </h3>{" "}
                <p>
                  {" "}
                  Developed mechanisms for coordinating Olympiads nationwide
                  through a unified digital platform. The “Olympiad Management
                  System” was launched, registering over 10,000 students
                  digitally.{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-lg text-gray-900">
                  2024:
                </h3>{" "}
                <p>
                  {" "}
                  Expanded with international training programs in mathematics,
                  physics, informatics, and robotics. Over 200 teachers
                  participated in seminars, and the first “Forum of Gifted
                  Youth” hosted 500 students and 80 trainers.{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-lg text-gray-900">
                  2025 (Current Year):
                </h3>{" "}
                <p>
                  {" "}
                  Signed memoranda with Olympiad training centers in Turkey,
                  South Korea, and Kazakhstan. Uzbek students achieved
                  record-breaking results at international Olympiads. The
                  National Olympiad Network was launched.{" "}
                </p>{" "}
                <ul className="mt-4 space-y-1">
                  {" "}
                  <li>• IMO – 4 Silver, 1 Bronze</li>{" "}
                  <li>• IOI – 1 Silver, 1 Bronze</li>{" "}
                  <li>• WMI – 3 Gold, 3 Silver, 4 Bronze</li>{" "}
                  <li>• IChO – 4 Gold, 2 Silver, 7 Bronze</li>{" "}
                  <li>• ZIO – 2 Gold, 5 Silver, 12 Bronze</li>{" "}
                </ul>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>{" "}
          {/* Key Objectives */}{" "}
          <Card className="border-0 shadow-lg">
            {" "}
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              {" "}
              <CardTitle className="text-2xl">Key Objectives</CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent className="p-8 text-gray-700 space-y-3">
              {" "}
              <ul className="list-disc pl-6 space-y-2">
                {" "}
                <li>Engage gifted students and teachers nationwide.</li>{" "}
                <li>
                  Create equal opportunities for all students to realize their
                  potential.
                </li>{" "}
                <li>
                  Involve talented students in research and intellectual
                  activities.
                </li>{" "}
                <li>
                  Systematize Olympiad preparation and evaluation mechanisms.
                </li>{" "}
                <li>Enhance science education through modern methodologies.</li>{" "}
                <li>
                  Promote transparency, openness, and efficiency in education
                  management.
                </li>{" "}
              </ul>{" "}
            </CardContent>{" "}
          </Card>{" "}
          {/* Strategic Principles */}{" "}
          <Card className="border-0 shadow-lg">
            {" "}
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              {" "}
              <CardTitle className="text-2xl">
                Strategic Principles
              </CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent className="p-8 text-gray-700 space-y-6">
              {" "}
              <div>
                {" "}
                <h4 className="font-semibold text-gray-900">
                  Supporting the Best
                </h4>{" "}
                <p>
                  Focus on mentor–student systems, long-term engagement, and
                  supporting winners’ academic growth.
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="font-semibold text-gray-900">Leadership</h4>{" "}
                <p>
                  Develop leadership, responsibility, communication, and project
                  management among students.
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="font-semibold text-gray-900">
                  Continuity of Knowledge
                </h4>{" "}
                <p>
                  Integrate modern educational technologies to ensure ongoing
                  improvement.
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h4 className="font-semibold text-gray-900">
                  Exchange and Integration
                </h4>{" "}
                <p>
                  Combine national and international best practices to improve
                  teaching and learning quality.
                </p>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>{" "}
          {/* Future Directions */}{" "}
          <Card className="border-0 shadow-lg">
            {" "}
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              {" "}
              <CardTitle className="text-2xl">Future Directions</CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent className="p-8 text-gray-700 space-y-4">
              {" "}
              <p>
                {" "}
                By 2026, the Center plans to establish the “Olympiad Academy,”
                create international methodological labs, and form a national
                Olympiad brand.{" "}
              </p>{" "}
              <ul className="list-disc pl-6 space-y-2">
                {" "}
                <li>
                  <strong>Science and Technology Synergy:</strong> Combining
                  innovation, research, and analytical development.
                </li>{" "}
                <li>
                  <strong>Uniting Talented Youth:</strong> Strengthening
                  collaboration and creativity across disciplines.
                </li>{" "}
                <li>
                  <strong>Broadening Horizons:</strong> Offering master classes,
                  seminars, and expert-led lab sessions.
                </li>{" "}
                <li>
                  <strong>Transparency and Fairness:</strong> Ensuring open,
                  merit-based student selection.
                </li>{" "}
                <li>
                  <strong>Fostering Creativity:</strong> Encouraging innovation
                  and social impact through team projects.
                </li>{" "}
              </ul>{" "}
            </CardContent>{" "}
          </Card>{" "}
          {/* Board of Trustees */}{" "}
          <Card className="border-0 shadow-lg">
            {" "}
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              {" "}
              <CardTitle className="text-2xl">Board of Trustees</CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent className="p-8 text-gray-700 space-y-3">
              {" "}
              <p>
                <strong>Chairperson:</strong> President of the Republic of
                Uzbekistan
              </p>{" "}
              <p>
                <strong>Deputy Chairperson:</strong> Minister of Preschool and
                School Education
              </p>{" "}
              <p>
                <strong>Secretary:</strong> Director of the Agency for
                Specialized Educational Institutions
              </p>{" "}
              <p className="font-semibold mt-4">Members include:</p>{" "}
              <ul className="list-disc pl-6 space-y-1">
                {" "}
                <li>President of the Academy of Sciences</li>{" "}
                <li>Minister of Digital Technologies</li>{" "}
                <li>Minister of Innovative Development</li>{" "}
                <li>Rector of Tashkent State University</li>{" "}
                <li>Director of Presidential Schools in Tashkent</li>{" "}
                <li>Laureates and trainers from international Olympiads</li>{" "}
              </ul>{" "}
              <p className="text-sm text-gray-600 mt-4">
                {" "}
                The Board defines strategic directions and oversees
                international cooperation. Its work follows Presidential Decree
                No. PQ-346 (Sept 30, 2024).{" "}
              </p>{" "}
            </CardContent>{" "}
          </Card>{" "}
          {/* Legal Documents */}{" "}
          <Card className="border-0 shadow-lg">
            {" "}
            <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
              {" "}
              <CardTitle className="text-2xl">
                Legal Documents of the Center
              </CardTitle>{" "}
            </CardHeader>{" "}
            <CardContent className="p-8 text-gray-700 space-y-3">
              {" "}
              <ol className="list-decimal pl-6 space-y-2">
                {" "}
                <li>
                  <strong>Charter:</strong> Defines legal status, objectives,
                  and management structure.
                </li>{" "}
                <li>
                  <strong>License:</strong> Authorizes organization of
                  educational and international preparatory programs.
                </li>{" "}
                <li>
                  <strong>Certificate of State Registration:</strong> Confirms
                  registration as a state institution under the Ministry of
                  Justice.
                </li>{" "}
                <li>
                  {" "}
                  <strong>Activity Reports:</strong>{" "}
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    {" "}
                    <li>
                      2023 – Introduced new Olympiad formats and guidelines.
                    </li>{" "}
                    <li>
                      2024 – National Program for International Olympiad
                      Preparation (6 gold, 9 silver, 11 bronze).
                    </li>{" "}
                    <li>
                      2025 – Established regional centers, launched National
                      Olympiad Network, and signed cooperation MoUs with Turkey,
                      Korea, and Kazakhstan.
                    </li>{" "}
                  </ul>{" "}
                </li>{" "}
              </ol>{" "}
            </CardContent>{" "}
          </Card>
        </div>
      </div>
    </div>
  );
}
