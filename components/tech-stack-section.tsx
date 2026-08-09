"use client"

import { useLanguage } from "@/contexts/language-context"
import { RulerCarousel, type TechStack } from "@/components/ruler-carousel"

// Thin client wrapper: the heading needs translations, but the icon list is
// built in the server page so its images stay server-rendered.
export function TechStackSection({ items }: { items: TechStack[] }) {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12">
      <h2 className="text-3xl md:text-4xl font-black text-center text-black mb-12 tracking-tight">
        {t("home.stackTitle")}
      </h2>
      <RulerCarousel originalItems={items} />
    </section>
  )
}
