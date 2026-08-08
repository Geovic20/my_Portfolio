import type { Metadata } from "next"
import type React from "react"

const title = "Contact"
const description =
  "Discutons de votre projet web. Joignable par WhatsApp, e-mail, LinkedIn ou GitHub."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
