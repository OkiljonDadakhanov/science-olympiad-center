"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
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
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
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
  { title: "Regional International Olympiads", href: "/olympiads/mintaqaviy", description: "Regional international olympiads across Europe, Asia and the Asia-Pacific" },
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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  // Auto-expand submenu based on current route
  useEffect(() => {
    if (isOpen && pathname) {
      if (pathname.startsWith("/about")) {
        setOpenSubmenu("about")
      } else if (pathname.startsWith("/apply")) {
        setOpenSubmenu("apply")
      } else if (pathname.startsWith("/programs")) {
        setOpenSubmenu("programs")
      } else if (pathname.startsWith("/olympiads")) {
        setOpenSubmenu("olympiads")
      }
    }
  }, [isOpen, pathname])

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
                        href="/about/mission"
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
              <Link href="/news">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  News & Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" >
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
        <div className="md:hidden border-t bg-background">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* About Us with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>About Us</span>
                {openSubmenu === "about" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "about" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  <Link
                    href="/about/mission"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm rounded-md transition-colors",
                      pathname === "/about/mission"
                        ? "text-primary font-medium bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    Our Mission
                  </Link>
                  {aboutUsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname === item.href
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* How to Apply with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "apply" ? null : "apply")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>How to Apply</span>
                {openSubmenu === "apply" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "apply" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  {applyItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname === item.href
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "programs" ? null : "programs")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>Programs</span>
                {openSubmenu === "programs" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "programs" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname === program.href
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Olympiads with submenu */}
            <div>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === "olympiads" ? null : "olympiads")}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
              >
                <span>Olympiads</span>
                {openSubmenu === "olympiads" ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {openSubmenu === "olympiads" && (
                <div className="pl-4 pb-2 space-y-1 mt-1 border-l-2 border-muted">
                  {olympiads.map((olympiad) => (
                    <Link
                      key={olympiad.href}
                      href={olympiad.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 text-sm rounded-md transition-colors",
                        pathname === olympiad.href
                          ? "text-primary font-medium bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {olympiad.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple links without submenu */}
            <Link
              href="/news"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-3 text-base font-medium rounded-md transition-colors",
                pathname?.startsWith("/news")
                  ? "text-primary bg-accent"
                  : "hover:bg-accent"
              )}
            >
              News & Events
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-3 text-base font-medium rounded-md transition-colors",
                pathname === "/contact"
                  ? "text-primary bg-accent"
                  : "hover:bg-accent"
              )}
            >
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
