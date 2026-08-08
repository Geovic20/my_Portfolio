import type { Metadata } from "next"
import type React from "react"
import { siteConfig } from "@/lib/site"

const title = "Portfolio"
const description =
  "Une sélection de mes projets web full-stack : plateformes e-commerce, dashboards, API REST et applications métier."

export const metadata: Metadata = {
  // Re-declared here so nested case-study pages keep the "| name" suffix.
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: { title, description, url: "/portfolio" },
  twitter: { title, description },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
