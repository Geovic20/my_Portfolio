"use client"

import { Mail, ChevronDown, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-background border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </Link>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link href="/" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t("nav.about")}
          </Link>
          <Link href="/portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t("nav.portfolio")}
          </Link>
          <button className="flex items-center gap-1 text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t("nav.pages")}
            <ChevronDown className="w-4 h-4" />
          </button>
          <a href="#cart" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t("nav.cart")}(0)
          </a>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            variant="outline"
            className="border-2 border-black hover:bg-black hover:text-white rounded-sm px-4 h-12 min-w-[48px]"
          >
            <Languages className="w-5 h-5 mr-2" />
            <span className="font-bold text-sm">{language === "fr" ? "EN" : "FR"}</span>
          </Button>
          <Link href="/contact">
            <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px]">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
