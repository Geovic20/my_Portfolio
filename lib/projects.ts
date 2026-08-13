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

// ⚠️ CONTENU PROVISOIRE — projets d'exemple, à remplacer par les vrais.
// Pour ajouter un projet : copier un bloc, remplir les champs, c'est tout.
// Les deux pages (accueil et /portfolio) en dérivent automatiquement.
export const projects: Project[] = [
  {
    slug: "e-commerce",
    featured: true,
    titleFr: "E-Commerce Platform",
    titleEn: "E-Commerce Platform",
    descFr: "Une plateforme e-commerce complète avec panier, paiement en ligne et gestion des commandes.",
    descEn:
      "A complete e-commerce platform with shopping cart management, secure payment and order management system.",
    tagFr: "Full Stack",
    tagEn: "Full Stack",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    image: "/modern-ecommerce-interface.png",
    accent: "#2F81F7",
  },
  {
    slug: "gestion-projets",
    featured: true,
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
    slug: "portfolio-photographe",
    titleFr: "Portfolio Photographe",
    titleEn: "Photographer Portfolio",
    descFr: "Site vitrine élégant avec galerie d'images, formulaire de contact et système de réservation.",
    descEn: "Elegant showcase website with image gallery, contact form and booking system.",
    tagFr: "Site vitrine",
    tagEn: "Showcase",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/photography-portfolio.png",
    accent: "#6366F1",
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
  {
    slug: "dashboard-analytics",
    titleFr: "Dashboard Analytics",
    titleEn: "Analytics Dashboard",
    descFr: "Tableau de bord interactif avec graphiques en temps réel, filtres avancés et export de données.",
    descEn: "Interactive dashboard with real-time charts, advanced filters and data export.",
    tagFr: "Data",
    tagEn: "Data",
    technologies: ["React.js", "D3.js", "Java", "MySQL"],
    image: "/analytics-dashboard.png",
    accent: "#F59E0B",
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
