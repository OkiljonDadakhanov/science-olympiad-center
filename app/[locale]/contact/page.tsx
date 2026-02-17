"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, UserRound } from "lucide-react"
import { useTranslations } from "next-intl"

interface FormData {
  fullName: string
  phone: string
  email: string
  subject: string
  message: string
}

interface ValidationErrors {
  fullName?: string
  phone?: string
  email?: string
  subject?: string
  message?: string
}

// Telegram configuration
const TELEGRAM_BOT_TOKEN = "8252392415:AAEp3LeItcKbZFyr7XCCJ9zcWL2mTkApkCE"
const TELEGRAM_CHAT_ID = "-5233873678"

export default function ContactPage() {
  const t = useTranslations('pages.contact')

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "+998 ",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('validation.fullNameRequired')
    }

    if (!formData.phone.trim() || formData.phone === "+998 ") {
      newErrors.phone = t('validation.phoneRequired')
    } else if (!/^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(formData.phone.replace(/\s/g, ' ').replace(/\s+/g, ' '))) {
      newErrors.phone = t('validation.phoneFormat')
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.emailInvalid')
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('validation.subjectRequired')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('validation.messageRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendToTelegram = async (): Promise<boolean> => {
    try {
      const text = `
📝 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${formData.fullName}
📞 <b>Phone:</b> ${formData.phone}
📧 <b>Email:</b> ${formData.email || "Not provided"}
📌 <b>Subject:</b> ${formData.subject}

💬 <b>Message:</b>
${formData.message}

🌐 <i>From: Science Olympiad Center Website</i>
      `.trim()

      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "HTML"
        }),
      })

      const data = await response.json()
      return data.ok
    } catch (error) {
      console.error("Error sending to Telegram:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const success = await sendToTelegram()
      if (success) {
        setIsSuccess(true)
      } else {
        alert(t('sendError'))
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert(t('sendError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setFormData({
      fullName: "",
      phone: "+998 ",
      email: "",
      subject: "",
      message: "",
    })
    setErrors({})
  }

  return (
    <div className="min-h-screen relative">
      {/* Creative Contact Background */}
      <div
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='contact' x='0' y='0' width='150' height='150' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='8' fill='%23007bff'/%3E%3Cpath d='M 30 30 L 50 50' stroke='%23007bff' stroke-width='2'/%3E%3Crect x='50' y='50' width='20' height='15' rx='2' fill='%23007bff'/%3E%3Ccircle cx='100' cy='40' r='6' fill='%23ff6b00'/%3E%3Cpath d='M 100 40 L 120 60' stroke='%23ff6b00' stroke-width='2'/%3E%3Crect x='120' y='60' width='18' height='12' rx='2' fill='%23ff6b00'/%3E%3Ccircle cx='70' cy='100' r='7' fill='%2300aaff'/%3E%3Cpath d='M 70 100 L 90 120' stroke='%2300aaff' stroke-width='2'/%3E%3Crect x='90' y='120' width='16' height='10' rx='2' fill='%2300aaff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23contact)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/80 to-orange-50/70 dark:from-background dark:via-background dark:to-background z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">{t('getInTouch')}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('getInTouchDesc')}
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{t('address')}</h3>
                          <p className="text-muted-foreground">
                            {t('addressLine1')}
                            <br />
                            {t('addressLine2')}
                            <br />
                            {t('addressLine3')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{t('phoneLabel')}</h3>
                          <p className="text-muted-foreground">
                            {t('mainOffice')}: +998 77 550 33 66
                            <br />
                            {t('admissionsLabel')}: +998 77 550 33 66
                            <br />
                            {t('internationalLabel')}: +998 77 550 33 66
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{t('emailLabel')}</h3>
                          <p className="text-muted-foreground">
                            {t('generalEmail')}: info@olympcenter.uz
                            <br />
                            {t('admissionsLabel')}: info@olympcenter.uz
                            <br />
                            {t('pressEmail')}: info@olympcenter.uz
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0">
                          <Clock className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{t('workingHours')}</h3>
                          <p className="text-muted-foreground">
                            {t('mondayFriday')}: {t('mondayFridayHours')}
                            <br />
                            {t('saturday')}: {t('saturdayHours')}
                            <br />
                            {t('sunday')}: {t('closed')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <UserRound className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{t('receptionDays')}</h3>
                          <div className="space-y-3">
                            <div>
                              <p className="font-medium">{t('directorName')}</p>
                              <p className="text-sm text-muted-foreground">{t('director')}</p>
                              <p className="text-sm text-muted-foreground">{t('receptionDays')}: {t('directorReception')}</p>
                            </div>
                            <div>
                              <p className="font-medium">{t('deputyDirectorName')}</p>
                              <p className="text-sm text-muted-foreground">{t('deputyDirector')}</p>
                              <p className="text-sm text-muted-foreground">{t('receptionDays')}: {t('deputyDirectorReception')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                      {t('sendMessage')}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {t('formDescription')}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {isSuccess ? (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">{t('thankYou')}</h3>
                        <p className="text-muted-foreground mb-6">
                          {t('successMessage')}
                        </p>
                        <Button onClick={resetForm} variant="outline">
                          {t('sendAnother')}
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">{t('fullName')} *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder={t('fullNamePlaceholder')}
                            className={errors.fullName ? "border-red-500" : ""}
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">{t('phone')} *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+998 XX XXX XX XX"
                              className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm">{errors.phone}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">{t('email')}</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder={t('emailPlaceholder')}
                              className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">{t('subject')} *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t('subjectPlaceholder')}
                            className={errors.subject ? "border-red-500" : ""}
                          />
                          {errors.subject && (
                            <p className="text-red-500 text-sm">{errors.subject}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">{t('message')} *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('messagePlaceholder')}
                            className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message}</p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                              {t('sending')}
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              {t('send')}
                            </>
                          )}
                        </Button>

                        <p className="text-sm text-muted-foreground text-center">
                          {t('responseTime')}
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                {t('visitUs')}
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                {t('visitUsDesc')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1448.8376202447862!2d69.29925176280167!3d41.34856271989727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35806832b09%3A0xe207efc2491ff8e2!2sDarvozakent%20St%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1771322958557!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('interactiveMap')}
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
