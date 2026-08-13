function resolveSiteUrl(): string {
  // Explicit override — set this once a custom domain is wired up.
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "")
  }
  // Injected automatically by Vercel on production deployments.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  // Preview deployments.
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://localhost:3000"
}

export const siteUrl = resolveSiteUrl()

export const siteConfig = {
  name: "KPOSSILANDE Géovic",
  jobTitle: "Développeur Full-Stack & aspirant ingénieur logiciel",
  url: siteUrl,
  locale: "fr_FR",
  description:
    "Je conçois et développe des logiciels fiables, maintenables et évolutifs, de l'interface utilisateur aux systèmes backend. React, Next.js, Node.js, Django.",
  descriptionEn:
    "I design and develop reliable, maintainable and scalable software, from user interfaces to backend systems. React, Next.js, Node.js, Django.",
  keywords: [
    "KPOSSILANDE Géovic",
    "développeur full-stack",
    "développeur web",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Python",
    "TypeScript",
    "portfolio",
  ],
  // One CV per language: the download follows the language the visitor is reading.
  cv: {
    fr: "/cv-kpossilande-geovic-fr.pdf",
    en: "/cv-kpossilande-geovic-en.pdf",
  },
  github: "https://github.com/Geovic20",
  linkedin: "https://www.linkedin.com/in/g%C3%A9ovic-kpossilande-00a31a30b/",
} as const
