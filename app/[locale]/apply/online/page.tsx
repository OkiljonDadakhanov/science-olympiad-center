"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Upload, Send } from "lucide-react"
import { useLocale } from "next-intl"

export default function OnlineApplicationPage() {
  const locale = useLocale() as "en" | "ru" | "uz"
  const content = {
    en: {
      title: "Online Application",
      subtitle: "Complete your application to join our science olympiad training programs",
      guideTitle: "Application Guidelines",
      guides: [
        "Please fill out all required fields marked with an asterisk (*)",
        "You can save your progress and return later to complete the application",
        "Application deadline: January 31, 2025",
        "You will receive a confirmation email after submission",
      ],
      sections: {
        personal: "Personal Information",
        academic: "Academic Information",
        competition: "Competition Experience",
        statement: "Personal Statement",
        upload: "Document Upload",
      },
      submit: "Submit Application",
      saveDraft: "Save Draft",
      help: "Need help? Contact us at",
      terms: "I agree to the terms and conditions and privacy policy of the Science Olympiad Center *",
      updates: "I would like to receive updates about programs and events",
      placeholders: {
        firstName: "Enter your first name",
        lastName: "Enter your last name",
        selectGender: "Select gender",
        address: "Enter your full address",
        phone: "+998 XX XXX XX XX",
        email: "your.email@example.com",
        school: "Name of your current school",
        selectGrade: "Select grade",
        gpa: "e.g., 4.5",
        competitions: "List olympiads/competitions you have participated in, with dates and results",
        achievements: "Describe awards, honors, or special recognitions",
        motivation: "Explain your motivation and goals for joining this program",
        strengths: "Describe your strongest subjects and problem-solving abilities",
        uploadHint: "Click to upload or drag and drop",
      },
      labels: {
        firstName: "First Name *",
        lastName: "Last Name *",
        dob: "Date of Birth *",
        gender: "Gender *",
        address: "Address *",
        phone: "Phone Number *",
        email: "Email Address *",
        school: "Current School *",
        grade: "Current Grade *",
        gpa: "Overall GPA *",
        subjects: "Preferred Subject Areas * (Select all that apply)",
        competitions: "Previous Competition Participation",
        achievements: "Academic Achievements",
        motivation: "Why do you want to join our program? *",
        strengths: "What are your academic strengths?",
        transcripts: "Academic Transcripts *",
        recommendations: "Recommendation Letters",
      },
      genders: { male: "Male", female: "Female", other: "Other" },
      grades: ["6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade"],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"],
      uploadFormatsOne: "PDF, JPG, PNG (max 5MB)",
      uploadFormatsMany: "PDF, JPG, PNG (max 5MB each)",
    },
    ru: {
      title: "Онлайн-заявка",
      subtitle: "Заполните заявку для участия в программах подготовки к научным олимпиадам",
      guideTitle: "Рекомендации по заполнению",
      guides: [
        "Заполните все обязательные поля, отмеченные звездочкой (*)",
        "Вы можете сохранить черновик и вернуться позже",
        "Срок подачи: 31 января 2025 года",
        "После отправки вы получите подтверждение по email",
      ],
      sections: {
        personal: "Личная информация",
        academic: "Академическая информация",
        competition: "Опыт участия в соревнованиях",
        statement: "Мотивационное письмо",
        upload: "Загрузка документов",
      },
      submit: "Отправить заявку",
      saveDraft: "Сохранить черновик",
      help: "Нужна помощь? Напишите нам:",
      terms: "Я согласен(на) с условиями и политикой конфиденциальности Центра научных олимпиад *",
      updates: "Хочу получать обновления о программах и событиях",
      placeholders: {
        firstName: "Введите имя",
        lastName: "Введите фамилию",
        selectGender: "Выберите пол",
        address: "Введите полный адрес",
        phone: "+998 XX XXX XX XX",
        email: "your.email@example.com",
        school: "Название текущей школы",
        selectGrade: "Выберите класс",
        gpa: "например, 4.5",
        competitions: "Укажите олимпиады и конкурсы, где вы участвовали, с датами и результатами",
        achievements: "Опишите награды и достижения",
        motivation: "Опишите мотивацию и цели участия в программе",
        strengths: "Опишите сильные учебные стороны и навыки решения задач",
        uploadHint: "Нажмите для загрузки или перетащите файл",
      },
      labels: {
        firstName: "Имя *",
        lastName: "Фамилия *",
        dob: "Дата рождения *",
        gender: "Пол *",
        address: "Адрес *",
        phone: "Номер телефона *",
        email: "Email *",
        school: "Текущая школа *",
        grade: "Текущий класс *",
        gpa: "Средний балл (GPA) *",
        subjects: "Предпочтительные предметы * (можно выбрать несколько)",
        competitions: "Предыдущий опыт участия",
        achievements: "Академические достижения",
        motivation: "Почему вы хотите присоединиться к программе? *",
        strengths: "Каковы ваши сильные учебные стороны?",
        transcripts: "Табель/транскрипт *",
        recommendations: "Рекомендательные письма",
      },
      genders: { male: "Мужской", female: "Женский", other: "Другое" },
      grades: ["6 класс", "7 класс", "8 класс", "9 класс", "10 класс", "11 класс"],
      subjects: ["Математика", "Физика", "Химия", "Биология", "Информатика"],
      uploadFormatsOne: "PDF, JPG, PNG (до 5MB)",
      uploadFormatsMany: "PDF, JPG, PNG (до 5MB каждый)",
    },
    uz: {
      title: "Onlayn ariza",
      subtitle: "Fan olimpiadasi tayyorgarlik dasturlariga qo‘shilish uchun arizani to‘ldiring",
      guideTitle: "Ariza bo‘yicha ko‘rsatmalar",
      guides: [
        "Yulduzcha (*) bilan belgilangan barcha majburiy maydonlarni to‘ldiring",
        "Arizani saqlab, keyinroq davom ettirishingiz mumkin",
        "Ariza topshirish muddati: 2025-yil 31-yanvar",
        "Yuborganingizdan so‘ng tasdiqlovchi email yuboriladi",
      ],
      sections: {
        personal: "Shaxsiy ma’lumotlar",
        academic: "Akademik ma’lumotlar",
        competition: "Musobaqa tajribasi",
        statement: "Shaxsiy bayonot",
        upload: "Hujjatlarni yuklash",
      },
      submit: "Arizani yuborish",
      saveDraft: "Qoralama saqlash",
      help: "Yordam kerakmi? Biz bilan bog‘laning:",
      terms: "Fan olimpiadalari markazining shartlari va maxfiylik siyosatiga roziman *",
      updates: "Dasturlar va tadbirlar bo‘yicha yangiliklarni olishni xohlayman",
      placeholders: {
        firstName: "Ismingizni kiriting",
        lastName: "Familiyangizni kiriting",
        selectGender: "Jinsni tanlang",
        address: "To‘liq manzilingizni kiriting",
        phone: "+998 XX XXX XX XX",
        email: "your.email@example.com",
        school: "Joriy maktab nomi",
        selectGrade: "Sinfni tanlang",
        gpa: "masalan, 4.5",
        competitions: "Qatnashgan olimpiada va tanlovlaringizni sana/natijalar bilan yozing",
        achievements: "Mukofot va yutuqlaringizni yozing",
        motivation: "Nega ushbu dasturga qo‘shilmoqchisiz? Maqsadlaringizni yozing",
        strengths: "Kuchli fanlaringiz va masala yechish ko‘nikmalaringizni yozing",
        uploadHint: "Yuklash uchun bosing yoki faylni sudrab olib keling",
      },
      labels: {
        firstName: "Ism *",
        lastName: "Familiya *",
        dob: "Tug‘ilgan sana *",
        gender: "Jins *",
        address: "Manzil *",
        phone: "Telefon raqami *",
        email: "Email manzil *",
        school: "Joriy maktab *",
        grade: "Joriy sinf *",
        gpa: "Umumiy GPA *",
        subjects: "Qiziqqan fan yo‘nalishlari * (bir nechtasini tanlash mumkin)",
        competitions: "Oldingi musobaqalardagi ishtirok",
        achievements: "Akademik yutuqlar",
        motivation: "Nega dasturga qo‘shilmoqchisiz? *",
        strengths: "Qaysi fanlarda kuchli tomoningiz bor?",
        transcripts: "Akademik baholar varaqasi *",
        recommendations: "Tavsiyanomalar",
      },
      genders: { male: "Erkak", female: "Ayol", other: "Boshqa" },
      grades: ["6-sinf", "7-sinf", "8-sinf", "9-sinf", "10-sinf", "11-sinf"],
      subjects: ["Matematika", "Fizika", "Kimyo", "Biologiya", "Informatika"],
      uploadFormatsOne: "PDF, JPG, PNG (maks 5MB)",
      uploadFormatsMany: "PDF, JPG, PNG (har biri maks 5MB)",
    },
  }[locale]

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bg/online-application.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-white/75 z-[1]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">{content.guideTitle}</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  {content.guides.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-xl">{content.sections.personal}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{content.labels.firstName}</Label>
                    <Input id="firstName" placeholder={content.placeholders.firstName} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{content.labels.lastName}</Label>
                    <Input id="lastName" placeholder={content.placeholders.lastName} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">{content.labels.dob}</Label>
                    <Input id="dateOfBirth" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="gender">{content.labels.gender}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={content.placeholders.selectGender} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">{content.genders.male}</SelectItem>
                        <SelectItem value="female">{content.genders.female}</SelectItem>
                        <SelectItem value="other">{content.genders.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">{content.labels.address}</Label>
                  <Textarea id="address" placeholder={content.placeholders.address} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">{content.labels.phone}</Label>
                    <Input id="phone" placeholder={content.placeholders.phone} />
                  </div>
                  <div>
                    <Label htmlFor="email">{content.labels.email}</Label>
                    <Input id="email" type="email" placeholder={content.placeholders.email} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-xl">{content.sections.academic}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="school">{content.labels.school}</Label>
                  <Input id="school" placeholder={content.placeholders.school} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="grade">{content.labels.grade}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={content.placeholders.selectGrade} />
                      </SelectTrigger>
                      <SelectContent>
                        {content.grades.map((grade, index) => (
                          <SelectItem key={grade} value={String(index + 6)}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gpa">{content.labels.gpa}</Label>
                    <Input id="gpa" placeholder={content.placeholders.gpa} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subjects">{content.labels.subjects}</Label>
                  <div className="grid md:grid-cols-3 gap-4 mt-2">
                    {content.subjects.map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox id={subject.toLowerCase()} />
                        <Label htmlFor={subject.toLowerCase()}>{subject}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardTitle className="text-xl">{content.sections.competition}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="competitions">{content.labels.competitions}</Label>
                  <Textarea
                    id="competitions"
                    placeholder={content.placeholders.competitions}
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="achievements">{content.labels.achievements}</Label>
                  <Textarea
                    id="achievements"
                    placeholder={content.placeholders.achievements}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardTitle className="text-xl">{content.sections.statement}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="motivation">{content.labels.motivation}</Label>
                  <Textarea
                    id="motivation"
                    placeholder={content.placeholders.motivation}
                    rows={5}
                  />
                </div>
                <div>
                  <Label htmlFor="strengths">{content.labels.strengths}</Label>
                  <Textarea
                    id="strengths"
                    placeholder={content.placeholders.strengths}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                <CardTitle className="text-xl">{content.sections.upload}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label>{content.labels.transcripts}</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">{content.placeholders.uploadHint}</p>
                    <p className="text-sm text-gray-500">{content.uploadFormatsOne}</p>
                  </div>
                </div>
                <div>
                  <Label>{content.labels.recommendations}</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">{content.placeholders.uploadHint}</p>
                    <p className="text-sm text-gray-500">{content.uploadFormatsMany}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      {content.terms}
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="updates" />
                    <Label htmlFor="updates" className="text-sm">
                      {content.updates}
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                {content.saveDraft}
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                <Send className="w-4 h-4 mr-2" />
                {content.submit}
              </Button>
            </div>
          </form>

          <div className="text-center mt-8 text-gray-600">
            <p>
              {content.help}{" "}
              <a href="mailto:info@olympcenter.uz" className="text-orange-500 hover:underline">
                info@olympcenter.uz
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
