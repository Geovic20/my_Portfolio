"use client"

import { Linkedin, Mail, Phone, Github } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: "/", labelKey: "nav.home" },
    { href: "/about", labelKey: "nav.about" },
    { href: "/portfolio", labelKey: "nav.portfolio" },
    { href: "/contact", labelKey: "nav.contact" },
  ]

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{siteConfig.name}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{t("footer.tagline")}</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.linkedin")}
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.github")}
                  className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-bold mb-4">{t("footer.navTitle")}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors cursor-pointer">
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">{t("footer.contactTitle")}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-white transition-colors break-all cursor-pointer"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone.tel}`}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {siteConfig.phone.display}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name} - {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
