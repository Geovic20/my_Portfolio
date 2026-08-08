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
  jobTitle: "Développeur Full-Stack",
  url: siteUrl,
  locale: "fr_FR",
  description:
    "Développeur full-stack : je conçois et développe des applications web complètes, des interfaces React et Next.js aux API Node.js et Django. Performance, sécurité et architecture évolutive.",
  descriptionEn:
    "Full-stack developer: I design and build complete web applications, from React and Next.js interfaces to Node.js and Django APIs. Performance, security and scalable architecture.",
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
  github: "https://github.com/Geovic20",
  linkedin: "https://www.linkedin.com/in/g%C3%A9ovic-kpossilande-1b0367292/",
} as const
