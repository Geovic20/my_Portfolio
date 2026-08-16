export type Language = "fr" | "en"

/** Un nom de produit est identique partout ; seuls les termes génériques se traduisent. */
export type StackItem = string | { fr: string; en: string }

export type StackLayer = {
  id: string
  labelFr: string
  labelEn: string
  /** Couleur du bloc de catégorie. */
  accent: string
  /** Le texte posé sur cette couleur doit-il être clair ou foncé ? */
  ink: "light" | "dark"
  items: StackItem[]
}

// Ordonné comme une pile réelle : du langage vers l'infrastructure.
// Pour ajouter une techno : une entrée dans `items`, rien d'autre à toucher.
export const stack: StackLayer[] = [
  {
    id: "languages",
    labelFr: "Langages",
    labelEn: "Languages",
    accent: "#FF6B7A",
    ink: "light",
    items: ["Python", "TypeScript", "Java", "SQL", "C"],
  },
  {
    id: "backend",
    labelFr: "Back-end",
    labelEn: "Backend",
    accent: "#2F81F7",
    ink: "light",
    items: ["Django", "Django REST Framework", "FastAPI", "Node.js"],
  },
  {
    id: "frontend",
    labelFr: "Front-end",
    labelEn: "Frontend",
    accent: "#FFC224",
    ink: "dark",
    items: ["React", "Next.js"],
  },
  {
    id: "data",
    labelFr: "Données",
    labelEn: "Data",
    accent: "#6366F1",
    ink: "light",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    id: "engineering",
    labelFr: "Ingénierie",
    labelEn: "Engineering",
    accent: "#10B981",
    ink: "light",
    items: [
      { fr: "API REST", en: "REST APIs" },
      "Microservices",
      { fr: "Authentification", en: "Authentication" },
      "System Design",
    ],
  },
  {
    id: "devops",
    labelFr: "DevOps & Cloud",
    labelEn: "DevOps & Cloud",
    accent: "#F59E0B",
    ink: "dark",
    items: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "AWS"],
  },
  {
    id: "ai",
    labelFr: "IA",
    labelEn: "AI",
    accent: "#0B0B0B",
    ink: "light",
    items: ["OpenAI API", "Gemini API", "Claude API"],
  },
]

export const resolveItem = (item: StackItem, language: Language) =>
  typeof item === "string" ? item : item[language]
