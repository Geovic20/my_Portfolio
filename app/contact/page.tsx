"use client"

import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/g%C3%A9ovic-kpossilande-1b0367292/",
      color: "bg-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Geovic20",
      color: "bg-[#333333]",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight px-4">
              {t("contact.title")}{" "}
              <span className="bg-[#2F81F7] text-white px-2 py-1 md:px-3 md:py-1 inline-block">
                {t("contact.titleHighlight")}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#393939] max-w-2xl mx-auto px-4">{t("contact.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2290190835005"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-3 md:border-4 border-black rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#25D366] text-white p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-black shrink-0">
                  <Phone className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">WhatsApp</h3>
                  <p className="text-[#393939] mb-2 md:mb-3 text-sm md:text-base">{t("contact.whatsappDesc")}</p>
                  <p className="font-mono font-bold text-sm md:text-lg break-all">+229 01 90 83 50 05</p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:kpossilandegeovic68@gmail.com"
              className="group bg-white border-3 md:border-4 border-black rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#FF6B7A] text-white p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-black shrink-0">
                  <Mail className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Email</h3>
                  <p className="text-[#393939] mb-2 md:mb-3 text-sm md:text-base">{t("contact.emailDesc")}</p>
                  <p className="font-mono font-bold text-sm md:text-lg break-all">kpossilandegeovic68@gmail.com</p>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-white border-3 md:border-4 border-black rounded-xl md:rounded-2xl p-5 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">{t("contact.socialTitle")}</h2>
            <p className="text-center text-[#393939] mb-6 md:mb-8 text-sm md:text-base px-4">
              {t("contact.socialSubtitle")}
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 border-2 border-black rounded-lg md:rounded-xl hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95"
                >
                  <div
                    className={`${social.color} text-white p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-black`}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-xs md:text-sm text-center">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-black text-white hover:bg-black/90 rounded-lg py-5 md:py-6 px-8 md:px-10 text-base md:text-lg font-semibold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all active:scale-95">
                {t("contact.backHome")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
