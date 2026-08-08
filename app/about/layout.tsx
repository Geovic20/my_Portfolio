import type { Metadata } from "next"
import type React from "react"

const title = "À propos"
const description =
  "Mon parcours, mes compétences front-end, back-end et DevOps, ma formation et mes certifications."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
