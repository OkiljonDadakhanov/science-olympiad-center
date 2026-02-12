"use client"

import { Link } from "@/i18n/routing"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Science Olympiad Center"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-primary">Science Olympiad Center</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('quickLinks')}</h3>
            <div className="space-y-3">
              <Link href="/about/general" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('aboutUs')}
              </Link>
              <Link href="/about/mission" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('missionVision')}
              </Link>
              <Link href="/about/team" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('ourTeam')}
              </Link>
              {/* <Link href="/programs" className="block text-muted-foreground hover:text-primary transition-colors">
                Programs
              </Link> */}
              {/* <Link href="/competitions" className="block text-muted-foreground hover:text-primary transition-colors">
                Competitions
              </Link> */}
              <Link href="/news" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('news')}
              </Link>
              {/* <Link href="/events" className="block text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link> */}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('programs')}</h3>
            <div className="space-y-3">
              <Link
                href="/programs/mathematics"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {tNav('mathematics')}
              </Link>
              <Link
                href="/programs/physics"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {tNav('physics')}
              </Link>
              <Link
                href="/programs/chemistry"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {tNav('chemistry')}
              </Link>
              <Link
                href="/programs/biology"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {tNav('biology')}
              </Link>
              <Link
                href="/programs/computer-science"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {tNav('computerScience')}
              </Link>
              <Link
                href="/competitions/national"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nationalOlympiads')}
              </Link>
              <Link
                href="/competitions/international"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t('internationalCompetitions')}
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('stayConnected')}</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Science Olympiad Center</p>
                  <p>Tashkent, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+998 77 550 33 66</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@olympcenter.uz</span>
              </div>
            </div>

            {/* <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Get updates on competitions, events, and achievements.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">{t('copyright')}</div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              {t('termsOfService')}
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
