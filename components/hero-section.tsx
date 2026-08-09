"use client"

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    /* Sized against the viewport height so the whole hero — heading, text and
       both CTAs — stays above the fold on a laptop screen. 8rem is the navbar. */
    <section className="container mx-auto px-4 py-6 md:min-h-[calc(100svh-8rem)] md:flex md:items-center">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="space-y-4 md:space-y-5 order-2 md:order-1">
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(1.9rem, min(4.6vw, 6.4vh), 3.4rem)",
              lineHeight: 1.12,
            }}
          >
            {t("hero.greeting")} {t("hero.name")},{" "}
            <span className="bg-[#2F81F7] text-white px-2 py-1 md:px-3 inline-block">{t("hero.title")}</span>
          </h1>

          <p
            className="text-[#393939] font-medium max-w-xl"
            style={{ fontSize: "clamp(0.9rem, 1.75vh, 1.125rem)", lineHeight: 1.6 }}
          >
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 pt-1 md:pt-2">
            <Button
              asChild
              className="w-full sm:w-auto bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-3 px-6 sm:py-4 sm:px-8 md:px-12 text-base md:text-lg font-semibold h-auto min-h-12 sm:min-w-48"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                {t("hero.cta1")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-3 px-6 sm:py-4 sm:px-8 md:px-12 text-base md:text-lg font-semibold h-auto min-h-12 sm:min-w-48"
            >
              <Link href="/portfolio">
                <FolderOpen className="w-5 h-5 mr-2" />
                {t("hero.cta2")}
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          {/* Capped by viewport height too, so a short screen shrinks the
              portrait instead of pushing the CTAs below the fold. */}
          <div className="relative w-full aspect-square max-w-[min(100%,17rem,34svh)] sm:max-w-[min(100%,20rem,40svh)] md:max-w-[min(100%,28rem,46svh)] bg-[#FDB927] border-4 border-black rounded-2xl md:rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt={t("alt.heroAvatar")}
              fill
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 448px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
