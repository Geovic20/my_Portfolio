import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

const StackIcon = ({ src }: { src: string }) => (
  <div className="relative w-full h-full">
    <Image
      src={src}
      alt=""
      fill
      className="object-contain"
      sizes="56px"
    />
  </div>
)

export default function Home() {
  const techStack = [
    { id: 1, name: "HTML5", icon: <StackIcon src="/html5-logo.png" /> },
    { id: 2, name: "CSS3", icon: <StackIcon src="/css3-logo.png" /> },
    { id: 3, name: "Python", icon: <StackIcon src="/Python.png" /> },
    { id: 4, name: "Java", icon: <StackIcon src="/Java.png" /> },
    { id: 5, name: "C", icon: <StackIcon src="/C.png" /> },
    { id: 6, name: "C++", icon: <StackIcon src={encodeURI("/C++ (CPlusPlus).png")} /> },
    { id: 7, name: "JavaScript", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    )},
    { id: 8, name: "React", icon: <StackIcon src="/react-js-logo.png" /> },
    { id: 9, name: "Node.js", icon: <StackIcon src="/Node.js.png" />},
    { id: 10, name: "Next.js", icon: <StackIcon src={encodeURI("/Next.js.png")} /> },
    { id: 11, name: "Vue.js", icon: <StackIcon src="/Vue.js.png" /> },    
    { id: 12, name: "Tailwind CSS", icon: (     
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    )},
    { id: 13, name: "Django", icon: <StackIcon src="/Django.png" /> },
    { id: 14, name: "Django REST", icon: <StackIcon src={encodeURI("/Django REST.png")} /> },
    { id: 15, name: "Flask", icon: <StackIcon src="/Flask.png" /> },
    { id: 16, name: "FastAPI", icon: <StackIcon src="/FastAPI.png" /> },
    { id: 17, name: "PostgreSQL", icon: <StackIcon src="/PostgresSQL.png" /> },
    { id: 18, name: "MySQL", icon: <StackIcon src="/MySQL.png" /> },
    { id: 19, name: "MongoDB", icon: <StackIcon src="/MongoDB.png" /> },
    { id: 20, name: "Docker", icon: <StackIcon src="/Docker.png" /> },
    { id: 21, name: "GitHub", icon: <StackIcon src="/GitHub.png" /> },
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <TechStackSection items={techStack} />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
