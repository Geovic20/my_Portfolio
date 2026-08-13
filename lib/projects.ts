export type Language = "fr" | "en"

export type Project = {
  /** Identifiant stable, utilisé comme clé React. */
  slug: string
  /** Mis en avant sur la page d'accueil (2 recommandés). */
  featured?: boolean
  titleFr: string
  titleEn: string
  descFr: string
  descEn: string
  /** Étiquette courte affichée sur la carte d'accueil. */
  tagFr: string
  tagEn: string
  technologies: string[]
  /** Chemin depuis /public. */
  image: string
  /** Couleur de fond derrière l'image sur la page Portfolio. */
  accent: string
  /** Omettre s'il n'y a pas de dépôt public : le bouton disparaît. */
  githubUrl?: string
  /** Omettre s'il n'y a pas de démo en ligne : le bouton disparaît. */
  demoUrl?: string
}

// Pour ajouter un projet : copier un bloc, remplir les champs, c'est tout.
// Les deux pages (accueil et /portfolio) en dérivent automatiquement.
//
// Les vrais projets sont en tête ; les exemples restants sont regroupés
// en fin de liste, sous un séparateur.
export const projects: Project[] = [
  {
    slug: "portfolio-cecile-goudou",
    featured: true,
    titleFr: "Portfolio journaliste",
    titleEn: "Journalist portfolio",
    descFr: "Portfolio élégant avec galerie d'images de Cécile Goudou, journaliste et reporter d'images.",
    descEn: "Elegant portfolio with image gallery by Cécile Goudou, journalist and photojournalist.",
    tagFr: "Portfolio",
    tagEn: "Portfolio",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    image: "/cecile_portfolio.png",
    accent: "#6366F1",
    demoUrl: "https://www.cecilegoudou.com",
    githubUrl: "https://github.com/Mario-sh/portfolio-de-c-cile-GOUDOU", // githubUrl : dépôt inaccessible publiquement (404) — à réactiver s'il devient public.
  },
  {
    slug: "gc-tech",
    featured: true,
    titleFr: "Plateforme de commerce électronique",
    titleEn: "E-commerce platform",
    descFr:
      "G&C Tech est une plateforme d'e-commerce haut de gamme et performante pour la vente d'électronique, développée avec les dernières technologies web modernes.",
    descEn:
      "G&C Tech is a high-end, high-performance e-commerce platform for selling electronics, developed with the latest modern web technologies.",
    tagFr: "Plateforme e-commerce",
    tagEn: "E-commerce platform",
    technologies: ["React", "Tailwind CSS", "Motion", "FedaPay", "Supabase"],
    image: "/gc-tech.png",
    accent: "#2F81F7",
    githubUrl: "https://github.com/Geovic20/G-C-Tech",
    demoUrl: "https://gc-tech-xi.vercel.app",
  },
  {
    slug: "portfolio-personnel",
    titleFr: "Portfolio développeur web",
    titleEn: "Web developer portfolio",
    descFr:
      "Portfolio moderne, ludique et haut de gamme, conçu avec une esthétique néo-brutaliste (style dessin/papier). Il se distingue par des contrastes élevés, des bordures noires affirmées, des ombres géométriques plates et une colorimétrie dynamique.",
    descEn:
      "A modern, playful and high-end portfolio, designed with a neo-brutalist aesthetic (drawing/paper style). It stands out through high contrast, bold black borders, flat geometric shadows and dynamic colours.",
    tagFr: "Portfolio",
    tagEn: "Portfolio",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/neo-brutalist.png",
    accent: "#6366F1",
    githubUrl: "https://github.com/Geovic20/my_Portfolio",
    demoUrl: "https://geovickpossilande.com",
  },
  // ───── À PARTIR D'ICI : exemples provisoires, à remplacer ─────
  {
    slug: "gestion-projets",
    titleFr: "Application de Gestion de Projets",
    titleEn: "Project Management Application",
    descFr: "Outil de collaboration pour équipes avec tableau Kanban, chat en temps réel et suivi du temps.",
    descEn: "Collaboration tool for teams with Kanban board, real-time chat and time tracking.",
    tagFr: "Application web",
    tagEn: "Web App",
    technologies: ["Next.js", "Python", "Django", "WebSocket"],
    image: "/project-management-dashboard.png",
    accent: "#FF6B6B",
  },
  {
    slug: "api-microservices",
    titleFr: "API REST Microservices",
    titleEn: "REST API Microservices",
    descFr:
      "Architecture microservices avec authentification JWT, gestion des utilisateurs et documentation Swagger.",
    descEn: "Microservices architecture with JWT authentication, user management and Swagger documentation.",
    tagFr: "Back-end",
    tagEn: "Back-end",
    technologies: ["Node.js", "Docker", "PostgreSQL", "Redis"],
    image: "/api-microservices-architecture-diagram.jpg",
    accent: "#FFD93D",
  },
  {
    slug: "fitness-mobile",
    titleFr: "Application Mobile Fitness",
    titleEn: "Fitness Mobile App",
    descFr: "Application de suivi d'entraînement avec statistiques, objectifs personnalisés et partage social.",
    descEn: "Workout tracking application with statistics, personalized goals and social sharing.",
    tagFr: "Mobile",
    tagEn: "Mobile",
    technologies: ["React Native", "Firebase", "Node.js"],
    image: "/fitness-app-interface.png",
    accent: "#10B981",
  },
]

/** Résout les champs bilingues d'un projet pour la langue courante. */
export function localizeProject(project: Project, language: Language) {
  return {
    ...project,
    title: language === "fr" ? project.titleFr : project.titleEn,
    description: language === "fr" ? project.descFr : project.descEn,
    tag: language === "fr" ? project.tagFr : project.tagEn,
  }
}

export const featuredProjects = projects.filter((project) => project.featured)
