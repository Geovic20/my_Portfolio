import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RulerCarousel, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, NodeIcon, TailwindIcon } from "@/components/ruler-carousel"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const techStack = [
    { id: 1, name: "HTML5", icon: <HtmlIcon /> },
    { id: 2, name: "CSS3", icon: <CssIcon /> },
    { id: 3, name: "JavaScript", icon: <JavascriptIcon /> },
    { id: 4, name: "React", icon: <ReactIcon /> },
    { id: 5, name: "Node.js", icon: <NodeIcon /> },
    { id: 6, name: "Tailwind", icon: <TailwindIcon /> },
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <div className="w-full py-12">
        <h2 className="text-3xl md:text-4xl font-black text-center text-black mb-12 tracking-tight">
          STACK TECHNOLOGIQUE
        </h2>
        <RulerCarousel originalItems={techStack} />
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
