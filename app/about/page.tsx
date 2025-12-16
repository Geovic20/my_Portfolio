"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { User, Award, Code, Briefcase, GraduationCap, Briefcase as Certificate } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t("about.title")}{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-2 inline-block">{t("about.titleHighlight")}</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Image src="/images/about-me.svg" alt="Profile illustration" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t("about.sectionTitle")}</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{t("about.description1")}</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{t("about.description2")}</p>
          </div>
        </div>
      </section>

      {/* Skills & Stats Section */}
      <section className="container mx-auto px-4 py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("about.skillsTitle")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-[#2F81F7] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("about.frontend")}</h3>
              <p className="text-gray-600 text-sm">{t("about.frontendDesc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-[#FF6B6B] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("about.backend")}</h3>
              <p className="text-gray-600 text-sm">{t("about.backendDesc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-[#6366F1] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("about.devops")}</h3>
              <p className="text-gray-600 text-sm">{t("about.devopsDesc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-[#FFD93D] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("about.softskills")}</h3>
              <p className="text-gray-600 text-sm">{t("about.softskillsDesc")}</p>
            </div>
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
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{t("about.education1Title")}</h3>
                <span className="bg-[#2F81F7] text-white px-3 py-1 text-sm font-bold border-2 border-black">
                  2022 - 2024
                </span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{t("about.education1School")}</p>
              <p className="text-gray-600 text-sm">{t("about.education1Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{t("about.education2Title")}</h3>
                <span className="bg-[#FF6B6B] text-white px-3 py-1 text-sm font-bold border-2 border-black">
                  2019 - 2022
                </span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{t("about.education2School")}</p>
              <p className="text-gray-600 text-sm">{t("about.education2Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
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
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#2F81F7] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert1Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert1Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert1Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#FF6B6B] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert2Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert2Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert2Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-12 h-12 bg-[#6366F1] border-2 border-black rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t("about.cert3Title")}</h3>
              <p className="text-gray-600 text-sm mb-3">{t("about.cert3Org")}</p>
              <p className="text-gray-600 text-sm">{t("about.cert3Desc")}</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
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
              <div className="w-5 h-5 bg-[#2F81F7] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("about.value1Title")}</h3>
                <p className="text-gray-600">{t("about.value1Desc")}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B6B] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t("about.value2Title")}</h3>
                <p className="text-gray-600">{t("about.value2Desc")}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
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
