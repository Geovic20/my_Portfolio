export type Language = "fr" | "en"

/** Un terme technique identique dans les deux langues reste une simple chaîne. */
export type SkillItem = string | { fr: string; en: string }

export type SkillGroup = {
  id: string
  labelFr: string
  labelEn: string
  /** Couleur du pictogramme et des puces de la carte. */
  accent: string
  /** Le pictogramme posé sur cette couleur doit-il être clair ou foncé ? */
  ink: "light" | "dark"
  items: SkillItem[]
}

// Des fondamentaux vers l'exploitation : l'ordre suit la progression du récit
// « Mon Parcours ».
export const skillGroups: SkillGroup[] = [
  {
    id: "fundamentals",
    labelFr: "Fondamentaux",
    labelEn: "Fundamentals",
    accent: "#2F81F7",
    ink: "light",
    items: [
      "Clean Code",
      "SOLID",
      "Design Patterns",
      { fr: "Tests", en: "Testing" },
      { fr: "Revue de code", en: "Code Review" },
    ],
  },
  {
    id: "architecture",
    labelFr: "Architecture & System Design",
    labelEn: "Architecture & System Design",
    accent: "#FF6B6B",
    ink: "light",
    items: [
      { fr: "API REST", en: "REST APIs" },
      { fr: "Architecture modulaire", en: "Modular architecture" },
      "Microservices",
      { fr: "Conception de bases de données", en: "Database Design" },
      { fr: "Scalabilité", en: "Scalability" },
    ],
  },
  {
    id: "development",
    labelFr: "Développement",
    labelEn: "Development",
    accent: "#6366F1",
    ink: "light",
    items: ["Python", "Django", "React", "TypeScript", "PostgreSQL"],
  },
  {
    id: "devops",
    labelFr: "DevOps",
    labelEn: "DevOps",
    accent: "#FFD93D",
    ink: "dark",
    items: ["Git", "Docker", "CI/CD", "Linux", "Cloud"],
  },
]

export const resolveSkill = (item: SkillItem, language: Language) =>
  typeof item === "string" ? item : item[language]
