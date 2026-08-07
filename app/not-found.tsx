"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { Home, FolderOpen } from "lucide-react"

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <Navigation />

      <section className="container mx-auto px-4 flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-[#FF6B7A] border-4 border-black px-8 py-3 md:px-12 md:py-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 md:mb-10 -rotate-2">
            <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight">404</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {t("notFound.title")}
          </h1>

          <p className="text-[#393939] text-base sm:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto">
            {t("notFound.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-8 sm:py-5 text-base md:text-lg font-semibold h-auto min-h-12"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                {t("notFound.backHome")}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-4 px-8 sm:py-5 text-base md:text-lg font-semibold h-auto min-h-12"
            >
              <Link href="/portfolio">
                <FolderOpen className="w-5 h-5 mr-2" />
                {t("notFound.viewPortfolio")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
