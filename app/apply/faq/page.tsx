"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle, Users, Clock, Award } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const faqs = [
    // GENERAL INFORMATION
    {
      category: "General Information",
      question: "What is the Science Olympiad Center?",
      answer: `The Science Olympiad Center is a state educational institution operating under the Agency for Specialized Educational Institutions of the Ministry of Preschool and School Education of the Republic of Uzbekistan.

Established pursuant to Resolution of the Cabinet of Ministers No. 562 (September 9, 2021) and Presidential Decree PQ–346 (September 30, 2024), the Center’s mission is to identify, nurture, and develop talented students in science and technology disciplines through structured olympiad preparation, research-based training, and international collaboration.`,
    },
    {
      category: "General Information",
      question: "Who can apply to the Science Olympiad Center?",
      answer: `Students aged 10 to 18 demonstrating exceptional abilities in mathematics, physics, chemistry, biology, or computer science are eligible. Applications are open to all students across Uzbekistan, regardless of region, school type, or social background.`,
    },
    {
      category: "General Information",
      question: "Are the programs free of charge?",
      answer: `Yes. All programs are fully funded by the state. Selected students receive free training, accommodation, educational materials, and international competition support.`,
    },
    {
      category: "General Information",
      question: "Are accommodation and meals provided?",
      answer: `Yes. The Center offers modern dormitory facilities, study halls, and dining services for students coming from outside Tashkent. All facilities are managed under continuous academic and medical supervision.`,
    },

    // APPLICATION PROCESS
    {
      category: "Application Process",
      question: "When is the application deadline?",
      answer: `Applications for the 2025 academic year must be submitted by January 31, 2025. Early submission is encouraged due to limited capacity and competitive selection.`,
    },
    {
      category: "Application Process",
      question: "What documents are required?",
      answer: `Applicants must submit the following:
• Academic transcripts (last 2 years)
• Birth certificate or passport copy
• Two recommendation letters
• Personal statement (500–1000 words)
• Medical certificate (issued within 6 months)
• Parent/guardian consent form

Optional: competition certificates or academic portfolio.`,
    },
    {
      category: "Application Process",
      question: "Is there an application fee?",
      answer: `No. The application and all training programs are provided free of charge.`,
    },
    {
      category: "Application Process",
      question: "How can I submit my application?",
      answer: `Complete the online application form at www.olympiads.uz, upload all required documents, and submit before the deadline. You will receive a confirmation email with your reference number.`,
    },

    // PROGRAMS & TRAINING
    {
      category: "Programs & Training",
      question: "What subjects are offered?",
      answer: `The Center provides specialized olympiad training in:
• Mathematics
• Physics
• Chemistry
• Biology
• Informatics and Information Technologies

Each discipline aligns with international olympiad standards (IMO, IPhO, IChO, IBO, IOI).`,
    },
    {
      category: "Programs & Training",
      question: "Where are the training sessions held?",
      answer: `Training takes place at the main center in Tashkent and regional branches in Samarkand, Bukhara, and Fergana. Online training modules are available for remote participants.`,
    },
    {
      category: "Programs & Training",
      question: "What is the selection process?",
      answer: `Selection is based on:
• Academic performance – 40%
• Problem-solving skills – 30%
• Competition experience – 20%
• Motivation and commitment – 10%

Applicants undergo document screening, written subject tests, and expert interviews.`,
    },
    {
      category: "Programs & Training",
      question: "Can I apply for multiple subjects?",
      answer: `Yes. Students may apply for multiple subjects but will be selected for one primary specialization based on their demonstrated strength.`,
    },
    {
      category: "Programs & Training",
      question: "What happens after completing the program?",
      answer: `Outstanding graduates are invited to join the National Olympiad Team of Uzbekistan and represent the country in international competitions.

Graduates also receive mentorship, scholarship recommendations, and university application support.`,
    },

    // TECHNICAL SUPPORT
    {
      category: "Technical Support",
      question: "How can I track my application status?",
      answer: `Use your application reference number on our official website. Email updates are provided at each stage — submission, review, assessment scheduling, and final decision.`,
    },
    {
      category: "Technical Support",
      question: "What document formats are accepted?",
      answer: `Documents must be in PDF, JPG, or PNG (PDF preferred). File size must not exceed 5 MB per document.`,
    },
    {
      category: "Technical Support",
      question: "Who can I contact for technical support?",
      answer: `For assistance with the online application platform:

📧 techsupport@olympiads.uz
📞 (+998) 71 123 45 67

Support is available Monday – Friday, 09:00 – 18:00.`,
    },
  ]

  // Automatically count categories
  const faqCategories = [
    {
      icon: Users,
      label: "General Information",
      count: faqs.filter(f => f.category === "General Information").length,
    },
    {
      icon: Clock,
      label: "Application Process",
      count: faqs.filter(f => f.category === "Application Process").length,
    },
    {
      icon: Award,
      label: "Programs & Training",
      count: faqs.filter(f => f.category === "Programs & Training").length,
    },
    {
      icon: HelpCircle,
      label: "Technical Support",
      count: faqs.filter(f => f.category === "Technical Support").length,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions (FAQ)
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find detailed answers to the most common questions regarding the Science Olympiad Center’s educational programs, admission process, and operational framework.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {faqCategories.map((cat, idx) => (
              <Card key={idx} className="border-0 shadow-md bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <cat.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                  <div className="text-3xl font-bold">{cat.count}</div>
                  <p className="text-gray-600 mt-1">{cat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md bg-white/90 backdrop-blur"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-blue-600">
                        {faq.category}
                      </Badge>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {faq.question}
                      </h3>
                    </div>

                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <Card className="border-0 shadow-xl mt-16 bg-white/90 backdrop-blur">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-xl">
              <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 mb-10">
                  Our team is here to help you with admissions, programs, and technical questions.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HelpCircle className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      Get detailed responses directly to your inbox.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Send Email
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      Talk directly with our admissions team.
                    </p>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                      Start Chat
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      Speak to an advisor directly.
                    </p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
