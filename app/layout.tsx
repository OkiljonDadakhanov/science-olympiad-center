import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "./client-layout"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { headers } from "next/headers" // ✅ import this

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Science Olympiad Center - Nurturing Future Scientists",
  description:
    "Identifying talented students, supporting them, and fostering their interest in science through olympiads and competitions.",
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable}`}>
        <ClientLayout>
          <Navigation />
          {children}
          <Footer />
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  )
}

