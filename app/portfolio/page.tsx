"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            {t("portfolio.title")}{" "}
            <span className="bg-[#2F81F7] text-white px-2 py-1 md:px-3 md:py-2 inline-block">
              {t("portfolio.titleHighlight")}
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            {t("portfolio.subtitle")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 md:hover:-translate-x-1 md:hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {/* Project Image */}
                <div
                  className="relative h-48 sm:h-56 md:h-64 border-b-3 md:border-b-4 border-black overflow-hidden"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 md:p-6 space-y-3 md:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 md:px-3 md:py-1 bg-[#F8F9FA] border-2 border-black text-xs sm:text-sm font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                    <Button
                      asChild
                      className="flex-1 bg-black text-white hover:bg-black/90 border-2 border-black h-11 sm:h-12 font-bold text-sm sm:text-base"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("portfolio.demo")}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-2 border-black h-11 sm:h-12 font-bold hover:bg-black hover:text-white bg-transparent text-sm sm:text-base"
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
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto bg-[#2F81F7] border-3 md:border-4 border-black p-6 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {t("portfolio.ctaTitle")}
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 md:mb-8">{t("portfolio.ctaDesc")}</p>
          <Button
            asChild
            className="w-full sm:w-auto bg-white text-black hover:bg-white/90 border-2 border-black h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold"
          >
            <Link href="/contact">{t("portfolio.ctaButton")}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
