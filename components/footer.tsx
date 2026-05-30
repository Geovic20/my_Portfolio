import { Instagram, Linkedin, Mail, Phone, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">KPOSSILANDE Géovic</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Développeur Full-Stack passionné par la création d&apos;applications web modernes et performantes.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/g%C3%A9ovic-kpossilande-1b0367292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Geovic20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors cursor-pointer">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors cursor-pointer">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors cursor-pointer">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:kpossilandegeovic68@gmail.com" className="hover:text-white transition-colors break-all cursor-pointer">
                    kpossilandegeovic68@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+2290190835005" className="hover:text-white transition-colors cursor-pointer">
                    +229 01 90 83 50 05
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} KPOSSILANDE Géovic - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
