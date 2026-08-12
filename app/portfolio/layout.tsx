import type { Metadata } from "next"
import type React from "react"
const title = "Portfolio"
const description =
  "Une sélection de mes projets web full-stack : plateformes e-commerce, dashboards, API REST et applications métier."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title, description, url: "/portfolio" },
  twitter: { title, description },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
