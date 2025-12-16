"use client"

import { Mail, Phone, Linkedin, Instagram, Facebook, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "bg-[#0077B5]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "bg-[#1877F2]",
    },
    {
      name: "Snapchat",
      icon: Send,
      url: "https://snapchat.com",
      color: "bg-[#FFFC00]",
      textColor: "text-black",
    },
    {
      name: "TikTok",
      icon: Send,
      url: "https://tiktok.com",
      color: "bg-black",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("contact.title")}{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">{t("contact.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-[#393939] max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/22901908350"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-4 border-black rounded-2xl p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#25D366] text-white p-4 rounded-xl border-2 border-black">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-[#393939] mb-3">{t("contact.whatsappDesc")}</p>
                  <p className="font-mono font-bold text-lg">+229 01 90 83 50 05</p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:kpossilandegeovic68@gmail.com"
              className="group bg-white border-4 border-black rounded-2xl p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6B7A] text-white p-4 rounded-xl border-2 border-black">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Email</h3>
                  <p className="text-[#393939] mb-3">{t("contact.emailDesc")}</p>
                  <p className="font-mono font-bold text-lg break-all">kpossilandegeovic68@gmail.com</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Networks */}
          <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-6 text-center">{t("contact.socialTitle")}</h2>
            <p className="text-center text-[#393939] mb-8">{t("contact.socialSubtitle")}</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 border-2 border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                >
                  <div
                    className={`${social.color} ${social.textColor || "text-white"} p-4 rounded-xl border-2 border-black`}
                  >
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button className="bg-black text-white hover:bg-black/90 rounded-lg py-6 px-10 text-lg font-semibold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                {t("contact.backHome")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
