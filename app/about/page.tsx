"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Code2, Network, Terminal, Server, GraduationCap, Briefcase as Certificate } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { skillGroups, resolveSkill } from "@/lib/skills"

const SKILL_ICONS: Record<string, LucideIcon> = {
  fundamentals: Code2,
  architecture: Network,
  development: Terminal,
  devops: Server,
}

export default function AboutPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            {t("about.title")}{" "}
            <span className="bg-[#2F81F7] text-white px-2 py-1 md:px-3 md:py-2 inline-block">
              {t("about.titleHighlight")}
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex justify-center order-1 md:order-1">
            <div className="relative w-full max-w-70 sm:max-w-sm md:max-w-lg aspect-square border-[3px] md:border-4 border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/images/about-me.svg"
                alt={t("alt.profileIllustration")}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 512px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 order-2 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t("about.sectionTitle")}</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{t("about.description1")}</p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{t("about.description2")}</p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{t("about.description3")}</p>
          </div>
        </div>
      </section>

      {/* Skills & Stats Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            {t("about.skillsTitle")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillGroups.map((group) => {
              const Icon = SKILL_ICONS[group.id]
              return (
                <div
                  key={group.id}
                  className="bg-white border-3 md:border-4 border-black p-5 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-lg flex items-center justify-center mb-3 md:mb-4"
                    style={{ backgroundColor: group.accent }}
                  >
                    <Icon
                      className={`w-5 h-5 md:w-6 md:h-6 ${group.ink === "light" ? "text-white" : "text-black"}`}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                    {language === "fr" ? group.labelFr : group.labelEn}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => {
                      const label = resolveSkill(item, language)
                      return (
                        <li key={label} className="flex items-start gap-2.5 text-sm text-[#393939] font-medium">
                          {/* La puce reprend la couleur de la carte : le lien est visuel, pas décoratif. */}
                          <span
                            aria-hidden="true"
                            className="w-2.5 h-2.5 mt-1.5 border-2 border-black shrink-0"
                            style={{ backgroundColor: group.accent }}
                          />
                          {label}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">{t("about.educationTitle")}</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{t("about.education1Title")}</h3>
                <span className="bg-[#2F81F7] text-white px-3 py-1 text-sm font-bold border-2 border-black">
                  2023 - 2026
                </span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{t("about.education1School")}</p>
              <p className="text-gray-600 text-sm">{t("about.education1Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{t("about.education2Title")}</h3>
                <span className="bg-[#FF6B6B] text-white px-3 py-1 text-sm font-bold border-2 border-black">
                  2022
                </span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{t("about.education2School")}</p>
              <p className="text-gray-600 text-sm">{t("about.education2Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{t("about.education3Title")}</h3>
                <span className="bg-[#6366F1] text-white px-3 py-1 text-sm font-bold border-2 border-black">2019</span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{t("about.education3School")}</p>
              <p className="text-gray-600 text-sm">{t("about.education3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="container mx-auto px-4 py-16 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Certificate className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">{t("about.certificatesTitle")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#2F81F7] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert1Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert1Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert1Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#FF6B6B] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert2Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert2Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert2Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#6366F1] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert3Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert3Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert3Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#FFD93D] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert4Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert4Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("about.valuesTitle")}</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#2F81F7] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("about.value1Title")}</h3>
                <p className="text-gray-600">{t("about.value1Desc")}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B6B] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("about.value2Title")}</h3>
                <p className="text-gray-600">{t("about.value2Desc")}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("about.value3Title")}</h3>
                <p className="text-gray-600">{t("about.value3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
