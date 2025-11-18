import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
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
              Nurturing future scientists through world-class olympiad training and international competitions.
              Identifying talent, fostering excellence, and building Uzbekistan's scientific potential.
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
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/about/mission" className="block text-muted-foreground hover:text-primary transition-colors">
                Mission & Vision
              </Link>
              <Link href="/about/team" className="block text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link href="/programs" className="block text-muted-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="/competitions" className="block text-muted-foreground hover:text-primary transition-colors">
                Competitions
              </Link>
              <Link href="/news" className="block text-muted-foreground hover:text-primary transition-colors">
                News
              </Link>
              <Link href="/events" className="block text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Programs</h3>
            <div className="space-y-3">
              <Link
                href="/programs/mathematics"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Mathematics
              </Link>
              <Link
                href="/programs/physics"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Physics
              </Link>
              <Link
                href="/programs/chemistry"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Chemistry
              </Link>
              <Link
                href="/programs/biology"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Biology
              </Link>
              <Link
                href="/programs/computer-science"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Computer Science
              </Link>
              <Link
                href="/competitions/national"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                National Olympiads
              </Link>
              <Link
                href="/competitions/international"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                International Competitions
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
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
                <span className="text-muted-foreground">info@scienceolympiad.uz</span>
              </div>
            </div>

            <div>
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
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2024 Science Olympiad Center. All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
