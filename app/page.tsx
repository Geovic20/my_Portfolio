import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { OrbitingSkills } from "@/components/orbiting-skills"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <div className="w-full px-4 md:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          STACK TECHNOLOGIQUE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
          <LogoMarquee />
          <OrbitingSkills />
        </div>
      </div>
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
