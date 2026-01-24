import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from "@/components/hero-section";
import { ProgramsOverviewSection } from "@/components/programs-overview-section";
import { FAQSection } from "@/components/faq-section";
import { locales } from '@/i18n/request';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ProgramsOverviewSection />
        <FAQSection />
      </main>
    </div>
  );
}
