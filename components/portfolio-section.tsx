"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function PortfolioSection() {
  const { t } = useLanguage()

  const projects = [
    {
      id: "1",
      title: t("portfolioPreview.project1Title"),
      description: t("portfolioPreview.project1Desc"),
      tag: "Full Stack",
      image: "/modern-ecommerce-interface.png",
    },
    {
      id: "2",
      title: t("portfolioPreview.project2Title"),
      description: t("portfolioPreview.project2Desc"),
      tag: "Web App",
      image: "/project-management-dashboard.png",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("portfolioPreview.title")} <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              {t("portfolioPreview.titleHighlight")}
            </span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <Link
                  href={`/portfolio/case-study/${project.id}`}
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  {t("portfolioPreview.caseStudy")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative overflow-hidden min-h-[250px] md:min-h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/portfolio">
            <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {t("portfolioPreview.browseAll")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
