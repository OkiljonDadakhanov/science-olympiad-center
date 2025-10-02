"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const faqs = [
  {
    category: "General",
    question: "What is the Science Olympiad Center?",
    answer:
      "The Science Olympiad Center is Uzbekistan's premier institution for identifying, training, and supporting talented students in science competitions. We prepare students for national and international olympiads in mathematics, physics, chemistry, biology, and computer science.",
  },
  {
    category: "Application",
    question: "When is the application deadline?",
    answer:
      "The application deadline for 2025 programs is January 31, 2025. We recommend submitting your application early as spots are limited and filled on a competitive basis.",
  },
  {
    category: "Programs",
    question: "How long are the training programs?",
    answer:
      "Program duration varies by subject: Mathematics (6 months), Physics (8 months), Chemistry (7 months), Biology (9 months), and Computer Science (5 months). All programs include intensive training and competition preparation.",
  },
  {
    category: "Application",
    question: "Is there an application fee?",
    answer:
      "No, there is no application fee. Our programs are completely free for selected students, including training, materials, and competition participation.",
  },
  {
    category: "Programs",
    question: "What is the selection process?",
    answer:
      "Selection involves application review, subject-specific assessments, expert evaluation, and interviews. We consider academic performance (40%), problem-solving skills (30%), competition experience (20%), and motivation (10%).",
  },
  {
    category: "General",
    question: "Are there accommodation facilities?",
    answer:
      "Yes, we provide accommodation for students from outside Tashkent. Our residential facilities include dormitories, dining halls, study rooms, and recreational areas, all supervised by qualified staff.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Find answers to common questions about our programs, application process, and admission requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-primary/10">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{faq.category}</Badge>
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/apply/faq">
                View All FAQs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
