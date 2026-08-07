"use client"

import { Mail, Menu, X, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/portfolio", labelKey: "nav.portfolio" },
]

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // "/" must match exactly, the others also cover their sub-routes
  // (e.g. /portfolio/case-study/1 keeps "Portfolio" active).
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  const isContactActive = pathname.startsWith("/contact")

  return (
    <div className="container mx-auto px-4 pt-4 md:pt-8 pb-4">
      <nav className="flex items-center justify-between bg-background border-4 border-black rounded-xl px-4 md:px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/" className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 cursor-pointer">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-1 justify-center">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-1.5 rounded-sm border-2 text-base lg:text-[18px] font-bold leading-5 transition-all cursor-pointer ${
                  active
                    ? "bg-[#2F81F7] text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "border-transparent hover:opacity-70"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
          <Button
            asChild
            className={`rounded-sm px-4 lg:px-5 h-10 lg:h-12 min-w-11 border-2 ${
              isContactActive
                ? "bg-[#2F81F7] text-white hover:bg-[#2F81F7]/90 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "bg-black text-white hover:bg-black/90 border-transparent"
            }`}
          >
            <Link href="/contact" aria-current={isContactActive ? "page" : undefined} aria-label="Contact">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-background border-4 border-black rounded-xl p-4 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-lg font-bold py-2 px-3 rounded-lg border-2 transition-colors cursor-pointer ${
                    active
                      ? "bg-[#2F81F7] text-white border-black"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              )
            })}

            <div className="border-t-2 border-black pt-4 mt-2 flex gap-2">
              <Button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                variant="outline"
                className="flex-1 border-2 border-black hover:bg-black hover:text-white rounded-sm h-12"
              >
                <Languages className="w-5 h-5 mr-2" />
                <span className="font-bold">{language === "fr" ? "English" : "Français"}</span>
              </Button>
              <Button
                asChild
                className={`flex-1 rounded-sm h-12 border-2 ${
                  isContactActive
                    ? "bg-[#2F81F7] text-white hover:bg-[#2F81F7]/90 border-black"
                    : "bg-black text-white hover:bg-black/90 border-transparent"
                }`}
              >
                <Link
                  href="/contact"
                  aria-current={isContactActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
