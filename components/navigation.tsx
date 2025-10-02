"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const programs = [
  { title: "Mathematics", href: "/programs/mathematics", description: "Advanced mathematical problem solving and competition preparation" },
  { title: "Physics", href: "/programs/physics", description: "Theoretical and experimental physics olympiad training" },
  { title: "Chemistry", href: "/programs/chemistry", description: "Chemical analysis and laboratory skills development" },
  { title: "Biology", href: "/programs/biology", description: "Life sciences and biological research methodologies" },
  { title: "Computer Science", href: "/programs/computer-science", description: "Programming, algorithms, and computational thinking" },
]

const olympiads = [
  { title: "Prestigious Olympiads", href: "/olympiads/prestigious", description: "National competitions and elite international qualifiers" },
  { title: "International Olympiads", href: "/olympiads/international", description: "Global science olympiad competitions worldwide" },
  { title: "Local Olympiads", href: "/olympiads/local", description: "Regional and local science competitions" },
]

const aboutUsItems = [
  { title: "Organization Info", href: "/about/organization", description: "Information about our educational organization" },
  { title: "General Information", href: "/about/general", description: "Overview of our center and activities" },
  { title: "Winners", href: "/about/winners", description: "Our successful olympiad champions" },
  { title: "Board of Trustees", href: "/about/board", description: "Our governing board and leadership" },
  { title: "Expert Council", href: "/about/expert-council", description: "Academic experts and advisors" },
  { title: "Documents", href: "/about/documents", description: "Official documents and policies" },
  { title: "Partners", href: "/about/partners", description: "Our institutional partnerships" },
]

const applyItems = [
  { title: "Selection Criteria", href: "/apply/criteria", description: "Requirements and evaluation process" },
  { title: "Online Application", href: "/apply/online", description: "Submit your application online" },
  { title: "Required Documents", href: "/apply/documents", description: "List of necessary documents" },
  { title: "Rules of Stay", href: "/apply/rules", description: "Program rules and regulations" },
  { title: "FAQ", href: "/apply/faq", description: "Frequently asked questions" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[60] w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between border-b">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/images/logo.png" alt="Science Olympiad Center" width={40} height={40} className="h-10 w-auto" />
          <span className="font-bold text-xl text-primary">Science Olympiad Center</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="relative z-[60] hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Our Mission</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Identifying talented students and fostering their interest in science through olympiads.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {aboutUsItems.map((item) => (
                    <ListItem key={item.title} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>How to Apply</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/10 to-orange-500/20 p-6 no-underline outline-none focus:shadow-md"
                        href="/apply"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Join Our Programs</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Start your journey to international science olympiad success.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {applyItems.map((item) => (
                    <ListItem key={item.title} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programs.map((program) => (
                    <ListItem key={program.title} title={program.title} href={program.href}>
                      {program.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Olympiads</NavigationMenuTrigger>
              <NavigationMenuContent className="-mt-px pointer-events-auto">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {olympiads.map((olympiad) => (
                    <ListItem key={olympiad.title} title={olympiad.title} href={olympiad.href}>
                      {olympiad.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/news" passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  News & Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Keep the viewport anchored to the bottom of the nav */}
          <NavigationMenuViewport className="absolute left-0 top-full w-full -mt-px" />
        </NavigationMenu>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
            <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              About Us
            </Link>
            <Link href="/apply" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              How to Apply
            </Link>
            <Link href="/programs" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Programs
            </Link>
            <Link href="/olympiads" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Olympiads
            </Link>
            <Link href="/news" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              News & Events
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
