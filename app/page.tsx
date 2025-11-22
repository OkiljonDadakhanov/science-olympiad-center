import { HeroSection } from "@/components/hero-section"
import { NewsEventsSection } from "@/components/news-events-section"
import { ProgramsOverviewSection } from "@/components/programs-overview-section"
import { FAQSection } from "@/components/faq-section"
// import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      <main>
        <HeroSection />
        <NewsEventsSection />
        <ProgramsOverviewSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
      </main>
    
    </div>
  )
}
