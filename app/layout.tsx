import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Onest } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { IntroLoader } from "@/components/intro-loader"
import { siteConfig, siteUrl } from "@/lib/site"
import { Analytics } from "@vercel/analytics/next"

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        <LanguageProvider>
          <IntroLoader>{children}</IntroLoader>
        </LanguageProvider>
        {/* Injects the tracking beacon only on Vercel deployments; it is inert
            locally and adds nothing to the page in development. */}
        <Analytics />
      </body>
    </html>
  )
}

