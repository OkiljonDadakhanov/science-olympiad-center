"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function FAQSection() {
  const t = useTranslations('faq')
  const tCategories = useTranslations('faq.categories')
  
  const faqs = [
    {
      category: tCategories('general'),
      question: t('questions.whatIsCenter'),
      answer: t('questions.whatIsCenterAnswer'),
    },
    {
      category: tCategories('application'),
      question: t('questions.applicationDeadline'),
      answer: t('questions.applicationDeadlineAnswer'),
    },
    {
      category: tCategories('programs'),
      question: t('questions.programDuration'),
      answer: t('questions.programDurationAnswer'),
    },
    {
      category: tCategories('application'),
      question: t('questions.applicationFee'),
      answer: t('questions.applicationFeeAnswer'),
    },
    {
      category: tCategories('programs'),
      question: t('questions.selectionProcess'),
      answer: t('questions.selectionProcessAnswer'),
    },
    {
      category: tCategories('general'),
      question: t('questions.accommodation'),
      answer: t('questions.accommodationAnswer'),
    },
  ]
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            {t('subtitle')}
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
                {t('viewAllFAQs')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
