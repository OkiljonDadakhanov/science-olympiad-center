import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import "../globals.css";
import { ClientLayout } from "../client-layout";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/request';
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Science Olympiad Center - Nurturing Future Scientists",
  description:
    "Identifying talented students, supporting them, and fostering their interest in science through olympiads and competitions.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`font-sans ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <ClientLayout>
              <Navigation />
              {children}
              <Footer />
            </ClientLayout>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
