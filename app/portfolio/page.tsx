"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function PortfolioPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: t("portfolio.project1Title"),
      description: t("portfolio.project1Desc"),
      image: "/modern-ecommerce-interface.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      bgColor: "#2F81F7",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: t("portfolio.project2Title"),
      description: t("portfolio.project2Desc"),
      image: "/project-management-dashboard.png",
      technologies: ["Next.js", "Python", "Django", "WebSocket"],
      bgColor: "#FF6B6B",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: t("portfolio.project3Title"),
      description: t("portfolio.project3Desc"),
      image: "/photography-portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      bgColor: "#6366F1",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: t("portfolio.project4Title"),
      description: t("portfolio.project4Desc"),
      image: "/api-microservices-architecture-diagram.jpg",
      technologies: ["Node.js", "Docker", "PostgreSQL", "Redis"],
      bgColor: "#FFD93D",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: t("portfolio.project5Title"),
      description: t("portfolio.project5Desc"),
      image: "/fitness-app-interface.png",
      technologies: ["React Native", "Firebase", "Node.js"],
      bgColor: "#10B981",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: t("portfolio.project6Title"),
      description: t("portfolio.project6Desc"),
      image: "/analytics-dashboard.png",
      technologies: ["React.js", "D3.js", "Java", "MySQL"],
      bgColor: "#F59E0B",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t("portfolio.title")}{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-2 inline-block">{t("portfolio.titleHighlight")}</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {/* Project Image */}
                <div
                  className="relative h-64 border-b-4 border-black overflow-hidden"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#F8F9FA] border-2 border-black text-sm font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      className="flex-1 bg-black text-white hover:bg-black/90 border-2 border-black h-12 font-bold"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("portfolio.demo")}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-2 border-black h-12 font-bold hover:bg-black hover:text-white bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t("portfolio.code")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-[#2F81F7] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("portfolio.ctaTitle")}</h2>
          <p className="text-white/90 text-lg mb-8">{t("portfolio.ctaDesc")}</p>
          <Button
            asChild
            className="bg-white text-black hover:bg-white/90 border-2 border-black h-14 px-8 text-lg font-bold"
          >
            <a href="#contact">{t("portfolio.ctaButton")}</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
