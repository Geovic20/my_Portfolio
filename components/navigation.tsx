"use client"

import { Mail, Menu, X, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 pt-4 md:pt-8 pb-4">
      <nav className="flex items-center justify-between bg-background border-4 border-black rounded-xl px-4 md:px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 cursor-pointer">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          <Link
            href="/"
            className="text-base lg:text-[18px] font-bold leading-5 hover:opacity-70 transition-opacity cursor-pointer"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/about"
            className="text-base lg:text-[18px] font-bold leading-5 hover:opacity-70 transition-opacity cursor-pointer"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/portfolio"
            className="text-base lg:text-[18px] font-bold leading-5 hover:opacity-70 transition-opacity cursor-pointer"
          >
            {t("nav.portfolio")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            variant="outline"
            className="border-2 border-black hover:bg-black hover:text-white rounded-sm px-3 lg:px-4 h-10 lg:h-12 min-w-11"
          >
            <Languages className="w-5 h-5 mr-1 lg:mr-2" />
            <span className="font-bold text-sm">{language === "fr" ? "EN" : "FR"}</span>
          </Button>
          <Link href="/contact" className="cursor-pointer">
            <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-4 lg:px-5 h-10 lg:h-12 min-w-11">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-background border-4 border-black rounded-xl p-4 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-bold py-2 hover:bg-gray-100 px-3 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-lg font-bold py-2 hover:bg-gray-100 px-3 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/portfolio"
              className="text-lg font-bold py-2 hover:bg-gray-100 px-3 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.portfolio")}
            </Link>

            <div className="border-t-2 border-black pt-4 mt-2 flex gap-2">
              <Button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                variant="outline"
                className="flex-1 border-2 border-black hover:bg-black hover:text-white rounded-sm h-12"
              >
                <Languages className="w-5 h-5 mr-2" />
                <span className="font-bold">{language === "fr" ? "English" : "Français"}</span>
              </Button>
              <Link href="/contact" className="flex-1 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-black text-white hover:bg-black/90 rounded-sm h-12">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
