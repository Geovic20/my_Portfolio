"use client"

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6 order-2 md:order-1">
          <h1 className="text-[32px] leading-[40px] sm:text-[42px] sm:leading-[50px] md:text-[56px] md:leading-[65px] lg:text-[72px] font-bold lg:leading-[85px]">
            {t("hero.greeting")}{" "}
            <span className="bg-[#FF6B7A] text-white px-2 py-1 md:px-3 md:py-1 inline-block">{t("hero.name")}</span>,{" "}
            <span className="bg-[#2F81F7] text-white px-2 py-1 md:px-3 md:py-1 inline-block">{t("hero.title")}</span>
          </h1>

          <p className="text-[#393939] text-[15px] sm:text-[16px] md:text-[18px] font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] max-w-xl">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-7 pt-2 md:pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-6 sm:py-5 sm:px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto min-h-[48px] sm:min-w-[200px] md:min-w-[240px]">
                <Mail className="w-5 h-5 mr-2" />
                {t("hero.cta1")}
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-4 px-6 sm:py-5 sm:px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto min-h-[48px] sm:min-w-[200px] md:min-w-[240px]"
              >
                <FolderOpen className="w-5 h-5 mr-2" />
                {t("hero.cta2")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-2xl md:rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
