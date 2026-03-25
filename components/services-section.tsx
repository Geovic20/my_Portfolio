"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      title: t("services.service1Title"),
      description: t("services.service1Desc"),
      image: "/images/web-design.svg",
    },
    {
      title: t("services.service2Title"),
      description: t("services.service2Desc"),
      image: "/images/ui-ux-design.svg",
    },
    {
      title: t("services.service3Title"),
      description: t("services.service3Desc"),
      image: "/images/product-design.svg",
    },
    {
      title: t("services.service4Title"),
      description: t("services.service4Desc"),
      image: "/images/user-research.svg",
    },
    {
      title: t("services.service5Title"),
      description: t("services.service5Desc"),
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[52px] md:leading-15 font-bold mb-3 md:mb-4 leading-tight">
              {t("services.title")}{" "}
              <span className="bg-[#FF4A60] text-white px-2 py-1 md:px-3 md:py-1 inline-block">
                {t("services.titleHighlight")}
              </span>
            </h2>
            <p className="text-[#393939] text-sm sm:text-base md:text-lg font-medium leading-relaxed md:leading-7.5 max-w-2xl mx-auto px-4">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-3xl md:rounded-4xl overflow-hidden hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-105 sm:min-h-120 flex flex-col group"
              >
                <div className="mb-4 sm:mb-6 -mx-0.75 -mt-0.75 overflow-hidden rounded-t-[21px] md:rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[21px] md:rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 flex-1 flex flex-col">
                  <h3 className="text-[22px] sm:text-[24px] md:text-[28px] leading-8 sm:leading-9 md:leading-10 font-bold mb-2 sm:mb-3 text-[#0B0B0B]">
                    {service.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-6.5 sm:leading-7 md:leading-7.5 font-medium text-[#393939]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform min-h-105 sm:min-h-120 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt={t("services.ctaTitle")}
                  width={92}
                  height={92}
                  className="w-18 h-18 sm:w-23 sm:h-23"
                />
              </div>
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] leading-8 sm:leading-9 md:leading-10 font-bold mb-3 sm:mb-4 text-[#0B0B0B]">
                {t("services.ctaTitle")}
              </h3>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-6.5 sm:leading-7 md:leading-7.5 font-medium text-[#393939] mb-6 sm:mb-8">
                {t("services.ctaDesc")}
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-2xl px-8 sm:px-12 py-5 sm:py-6 font-medium text-[16px] sm:text-[18px] w-full max-w-75 sm:max-w-85 h-14 sm:h-16">
                <Mail className="w-5 h-5 mr-2" />
                {t("services.ctaButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
