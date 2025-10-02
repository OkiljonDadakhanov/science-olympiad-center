"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle, Users, Clock, Award } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    { icon: Users, label: "General Questions", count: 8 },
    { icon: Clock, label: "Application Process", count: 6 },
    { icon: Award, label: "Programs & Training", count: 7 },
    { icon: HelpCircle, label: "Technical Support", count: 4 },
  ]

  const faqs = [
    {
      category: "General",
      question: "What is the Science Olympiad Center?",
      answer:
        "The Science Olympiad Center is Uzbekistan's premier institution for identifying, training, and supporting talented students in science competitions. We prepare students for national and international olympiads in mathematics, physics, chemistry, biology, and computer science.",
    },
    {
      category: "General",
      question: "Who can apply to the Science Olympiad Center?",
      answer:
        "Students aged 10-18 years who demonstrate exceptional ability in mathematics and sciences can apply. We welcome applications from all regions of Uzbekistan, regardless of school type or background.",
    },
    {
      category: "Application",
      question: "When is the application deadline?",
      answer:
        "The application deadline for 2025 programs is January 31, 2025. We recommend submitting your application early as spots are limited and filled on a competitive basis.",
    },
    {
      category: "Application",
      question: "What documents do I need to submit?",
      answer:
        "Required documents include academic transcripts, recommendation letters, personal statement, birth certificate, medical certificate, and parent consent form. Optional documents include competition certificates and academic portfolio.",
    },
    {
      category: "Application",
      question: "Is there an application fee?",
      answer:
        "No, there is no application fee. Our programs are completely free for selected students, including training, materials, and competition participation.",
    },
    {
      category: "Programs",
      question: "How long are the training programs?",
      answer:
        "Program duration varies by subject: Mathematics (6 months), Physics (8 months), Chemistry (7 months), Biology (9 months), and Computer Science (5 months). All programs include intensive training and competition preparation.",
    },
    {
      category: "Programs",
      question: "Where do the training sessions take place?",
      answer:
        "Training sessions are held at our main center in Tashkent, with additional regional centers in Samarkand, Bukhara, and Fergana. We also offer online components for students from remote areas.",
    },
    {
      category: "Programs",
      question: "What is the selection process?",
      answer:
        "Selection involves application review, subject-specific assessments, expert evaluation, and interviews. We consider academic performance (40%), problem-solving skills (30%), competition experience (20%), and motivation (10%).",
    },
    {
      category: "Programs",
      question: "Can I apply for multiple subjects?",
      answer:
        "Yes, you can indicate interest in multiple subjects, but you will be selected for one primary subject based on your strengths and our assessment. Cross-subject learning is encouraged in our programs.",
    },
    {
      category: "Technical",
      question: "How do I submit my online application?",
      answer:
        "Complete the online application form on our website, upload all required documents, and submit before the deadline. You will receive a confirmation email with your application reference number.",
    },
    {
      category: "Technical",
      question: "What file formats are accepted for documents?",
      answer:
        "We accept PDF, JPG, and PNG formats. PDF is preferred for text documents. Maximum file size is 5MB per document. Ensure all documents are clear and legible.",
    },
    {
      category: "General",
      question: "Are there accommodation facilities?",
      answer:
        "Yes, we provide accommodation for students from outside Tashkent. Our residential facilities include dormitories, dining halls, study rooms, and recreational areas, all supervised by qualified staff.",
    },
    {
      category: "General",
      question: "What support is provided to families?",
      answer:
        "We provide comprehensive support including regular progress reports, parent meetings, counseling services, and 24/7 communication channels. Families are kept informed throughout the program.",
    },
    {
      category: "Programs",
      question: "What happens after completing the program?",
      answer:
        "Successful graduates join our national teams for international competitions. We also provide university placement assistance, scholarship opportunities, and continued mentorship for academic and career development.",
    },
    {
      category: "Application",
      question: "Can I reapply if not selected?",
      answer:
        "Yes, you can reapply in subsequent years. We encourage students to continue developing their skills and reapply. Many successful students were accepted on their second or third application.",
    },
    {
      category: "Programs",
      question: "Are there any costs for families?",
      answer:
        "Our core programs are completely free. Families may need to cover transportation to/from the center and personal expenses. Financial assistance is available for families with demonstrated need.",
    },
    {
      category: "Technical",
      question: "How can I track my application status?",
      answer:
        "Use your application reference number to check status on our website. You will also receive email updates at key stages: application received, under review, assessment scheduled, and final decision.",
    },
    {
      category: "General",
      question: "What makes your program different from others?",
      answer:
        "Our program combines world-class faculty, proven methodology, international partnerships, and comprehensive support. We have a 95% success rate in international competitions and strong university placement record.",
    },
    {
      category: "Technical",
      question: "Who can I contact for technical help?",
      answer:
        "For technical issues with the application portal, email tech-support@scienceolympiad.uz or call +998 71 123-45-67. Our support team is available Monday-Friday, 9 AM - 6 PM.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our programs, application process, and admission requirements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {faqCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <category.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{category.count}</div>
                  <div className="text-gray-600">{category.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{faq.category}</Badge>
                      <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
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
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg mt-12">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Our admissions team is here to help with any questions about
                  our programs or application process.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                    <p className="text-gray-600 text-sm mb-3">Get detailed answers via email</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Send Email
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                    <p className="text-gray-600 text-sm mb-3">Chat with our admissions team</p>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Start Chat
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
                    <p className="text-gray-600 text-sm mb-3">Speak directly with an advisor</p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
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
