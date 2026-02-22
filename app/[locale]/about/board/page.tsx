"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { boardMembers } from "@/data/board-members";
import { FadingBackground } from "@/components/fading-bg";
import { useLocale } from "next-intl";

export default function BoardOfTrusteesPage() {
  const locale = useLocale() as "en" | "ru" | "uz";
  const content = {
    en: {
      title: "Board of Trustees",
      description:
        "Our Board of Trustees comprises distinguished professionals who lead key departments and support the quality of our educational initiatives.",
      background: "Background:",
      expertise: "Expertise:",
      experience: "Work Experience:",
      education: "Education:",
      contactTitle: "Contact the Board",
      email: "Email",
      phone: "Phone",
      address: "Address",
      city: "Tashkent, Uzbekistan",
    },
    ru: {
      title: "Попечительский совет",
      description:
        "Попечительский совет объединяет опытных специалистов, которые курируют ключевые направления и поддерживают высокие стандарты образовательных инициатив.",
      background: "Профиль:",
      expertise: "Компетенции:",
      experience: "Стаж работы:",
      education: "Образование:",
      contactTitle: "Связаться с советом",
      email: "Email",
      phone: "Телефон",
      address: "Адрес",
      city: "Ташкент, Узбекистан",
    },
    uz: {
      title: "Kuzatuv kengashi",
      description:
        "Kuzatuv kengashi markazning asosiy yo‘nalishlarini boshqarishda tajribali mutaxassislar ishtirokini ta’minlaydi va ta’lim sifatini qo‘llab-quvvatlaydi.",
      background: "Faoliyat yo‘nalishi:",
      expertise: "Mutaxassisligi:",
      experience: "Ish tajribasi:",
      education: "Ta’lim:",
      contactTitle: "Kengash bilan aloqa",
      email: "Email",
      phone: "Telefon",
      address: "Manzil",
      city: "Toshkent, O‘zbekiston",
    },
  }[locale];

  const localizedMemberFields = {
    en: {},
    ru: {
      "Shermatov Turaboy Yusupboevich": {
        position: "Директор",
        background: "Опытный руководитель в сфере образовательного менеджмента и международных академических программ.",
        expertise: "Образовательное лидерство, международные программы, стратегическое планирование",
      },
      "Tuxtayev Davron Dilmurot ugli": {
        position: "Заместитель директора",
        background: "Педагог и администратор, специализирующийся на академическом управлении и развитии учащихся.",
        expertise: "Академическое администрирование, развитие учащихся, образовательные программы",
      },
      "Aripov Jahongir Alimovich": {
        position: "Главный HR-специалист",
        background: "Специалист по управлению персоналом с большим опытом работы в образовательных учреждениях.",
        expertise: "HR-менеджмент, организационное развитие, обучение персонала",
      },
      "Ishmuradov Shovhiddin Ilhomovich": {
        position: "Руководитель отдела организации национальных научных олимпиад и конкурсов",
        background: "Координатор академических соревнований с опытом организации мероприятий и работы с учащимися.",
        expertise: "Управление олимпиадами, академические соревнования, организация мероприятий",
      },
      "Jumaev Tursunboy Khusen ogli": {
        position: "Руководитель отдела подготовки материалов, мониторинга и онлайн-олимпиад",
        background: "Эксперт по системам оценивания и цифровым платформам олимпиад.",
        expertise: "E-learning платформы, онлайн-олимпиады, разработка учебного контента",
      },
      "Tuychiev Fayyoz Farhod ugli": {
        position: "Руководитель отдела отбора и подготовки к международным олимпиадам",
        background: "Педагог, специализирующийся на подготовке учащихся к международным STEM-соревнованиям.",
        expertise: "STEM-образование, олимпиадная подготовка, международный академический коучинг",
      },
      "Tadjieva Nargiza Rustamovna": {
        position: "Руководитель отдела методических разработок и учебных материалов",
        background: "Специалист в области подготовки преподавателей и разработки учебных программ STEM.",
        expertise: "Педагогические инновации, дизайн учебных программ, развитие компетенций учителей",
      },
      "Turaeva Tamanno Ochilovna": {
        position: "Руководитель отдела цифровых медиа",
        background: "Эксперт в сфере медиакоммуникаций, PR и управления цифровыми образовательными ресурсами.",
        expertise: "Цифровые медиастратегии, общественные коммуникации, образовательные медиа",
      },
      "Choliev Abduvali Abdulasam ugli": {
        position: "Руководитель бухгалтерии",
        background: "Квалифицированный бухгалтер с опытом финансовой отчётности и бюджетирования.",
        expertise: "Бухгалтерский учёт, финансовый менеджмент, аудит и комплаенс",
      },
    },
    uz: {
      "Shermatov Turaboy Yusupboevich": {
        position: "Direktor",
        background: "Ta’lim boshqaruvi va xalqaro akademik dasturlar bo‘yicha tajribali rahbar.",
        expertise: "Ta’lim liderligi, xalqaro dasturlar, strategik rejalashtirish",
      },
      "Tuxtayev Davron Dilmurot ugli": {
        position: "Direktor o‘rinbosari",
        background: "Akademik boshqaruv va o‘quvchilar rivoji yo‘nalishida tajribaga ega pedagog.",
        expertise: "Akademik boshqaruv, o‘quvchilar rivoji, ta’lim dasturlari",
      },
      "Aripov Jahongir Alimovich": {
        position: "Bosh HR mutaxassisi",
        background: "Ta’lim muassasalarida ko‘p yillik tajribaga ega inson resurslari mutaxassisi.",
        expertise: "HR boshqaruvi, tashkilot rivoji, xodimlarni tayyorlash",
      },
      "Ishmuradov Shovhiddin Ilhomovich": {
        position: "Milliy fan olimpiadalari va tanlovlarini tashkil etish bo‘limi boshlig‘i",
        background: "Akademik tanlovlarni muvofiqlashtirish va tadbir logistikasida tajribali mutaxassis.",
        expertise: "Olimpiada boshqaruvi, akademik musobaqalar, tadbirlarni tashkil etish",
      },
      "Jumaev Tursunboy Khusen ogli": {
        position: "Olimpiada materiallari, monitoring va onlayn olimpiadalar bo‘limi boshlig‘i",
        background: "Baholash tizimlari va raqamli olimpiada platformalari bo‘yicha ekspert.",
        expertise: "E-learning platformalari, onlayn olimpiadalar, o‘quv kontenti ishlab chiqish",
      },
      "Tuychiev Fayyoz Farhod ugli": {
        position: "Xalqaro fan olimpiadalariga saralash va tayyorlash bo‘limi boshlig‘i",
        background: "O‘quvchilarni xalqaro STEM musobaqalariga tayyorlashda ixtisoslashgan pedagog.",
        expertise: "STEM ta’limi, olimpiada tayyorgarligi, xalqaro akademik murabbiylik",
      },
      "Tadjieva Nargiza Rustamovna": {
        position: "Metodik qo‘llanmalar va o‘quv materiallari bo‘limi boshlig‘i",
        background: "O‘qituvchilarni tayyorlash va STEM o‘quv dasturlarini rivojlantirish bo‘yicha mutaxassis.",
        expertise: "Pedagogik innovatsiyalar, o‘quv dasturi dizayni, o‘qituvchi salohiyatini oshirish",
      },
      "Turaeva Tamanno Ochilovna": {
        position: "Raqamli media bo‘limi boshlig‘i",
        background: "Media kommunikatsiya, PR va raqamli ta’lim resurslari boshqaruvida tajribali mutaxassis.",
        expertise: "Raqamli media strategiyasi, jamoatchilik bilan aloqalar, ta’lim media kontenti",
      },
      "Choliev Abduvali Abdulasam ugli": {
        position: "Buxgalteriya bo‘limi boshlig‘i",
        background: "Moliyaviy hisobot va byudjetlashtirish bo‘yicha tajribali sertifikatlangan buxgalter.",
        expertise: "Buxgalteriya hisobi, moliyaviy boshqaruv, audit va muvofiqlik",
      },
    },
  }[locale] as Record<string, { position?: string; background?: string; expertise?: string }>;

  const localizedMembers = boardMembers.map((member) => {
    const translated = localizedMemberFields[member.name] || {};
    return {
      ...member,
      ...translated,
    };
  });

  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/main-bg.jpg" height={400} />
      <div className="relative bg-gradient-to-br from-orange-50/98 via-white/95 to-blue-50/98 backdrop-blur-sm min-h-screen">
        {/* Gerb Background Images - 3 duplicates */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Left */}
          <div className="absolute top-10 left-10 hidden lg:block">
            <Image
              src="/gerb.png"
              alt="Coat of Arms"
              width={600}
              height={600}
              className="opacity-8 object-contain w-[50vw] h-[50vh] max-w-[600px] max-h-[600px]"
              priority
            />
          </div>
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/gerb.png"
              alt="Coat of Arms"
              width={800}
              height={800}
              className="opacity-10 object-contain w-[80vw] h-[80vh] max-w-[1000px] max-h-[1000px]"
              priority
            />
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-10 right-10 hidden lg:block">
            <Image
              src="/gerb.png"
              alt="Coat of Arms"
              width={600}
              height={600}
              className="opacity-8 object-contain w-[50vw] h-[50vh] max-w-[600px] max-h-[600px]"
              priority
            />
          </div>
        </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>

          {/* Board Members */}
          <div className="space-y-10">
            {localizedMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm border border-gray-100"
              >
                <CardContent className="p-5 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="md:w-1/3 flex justify-center">
                      {member.image ? (
                        <div className="w-44 h-52 md:w-56 md:h-64 rounded-xl overflow-hidden border-[6px] border-white shadow-2xl bg-gray-100 hover:scale-[1.02] transition-transform duration-300">
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
                        <div className="w-44 h-52 md:w-56 md:h-64 bg-gradient-to-br from-orange-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
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
                          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
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
                            {content.background}
                          </span>{" "}
                          {member.background}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            {content.expertise}
                          </span>{" "}
                          {member.expertise}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">
                            {content.experience}
                          </span>{" "}
                          {member.experience}
                        </div>
                        {member.education && member.education.length > 0 && (
                          <div>
                            <span className="font-semibold text-gray-900">
                              {content.education}
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
                {content.contactTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-7 h-7 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">{content.email}</div>
                    <div className="text-gray-600">
                      info@olympcenter.uz
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-7 h-7 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">{content.phone}</div>
                    <div className="text-gray-600">+998 77 550 33 66</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-7 h-7 text-orange-500" />
                  <div>
                    <div className="font-semibold text-gray-900">{content.address}</div>
                    <div className="text-gray-600">{content.city}</div>
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
