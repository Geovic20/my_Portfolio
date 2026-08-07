export const caseStudies = {
  "1": {
    titleFr: "Plateforme E-Commerce",
    titleEn: "E-Commerce Platform",
    descFr: "Développement complet d'une plateforme e-commerce avec gestion du panier, paiement sécurisé et système de gestion des commandes.",
    descEn: "Complete development of an e-commerce platform with shopping cart management, secure payment and order management system.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
    durationFr: "3 mois",
    durationEn: "3 months",
    roleFr: "Développeur Full Stack",
    roleEn: "Full Stack Developer",
    teamSize: "3",
    challengesFr: [
      "Intégration d'un système de paiement sécurisé avec Stripe",
      "Gestion en temps réel du stock et des commandes",
      "Optimisation des performances pour un catalogue de plus de 1000 produits"
    ],
    challengesEn: [
      "Integration of a secure payment system with Stripe",
      "Real-time stock and order management",
      "Performance optimization for a catalog of over 1000 products"
    ],
    solutionsFr: [
      "Mise en place d'une architecture microservices pour une meilleure scalabilité",
      "Utilisation de Redis pour le cache et les sessions",
      "Implémentation d'un CDN pour les images produits"
    ],
    solutionsEn: [
      "Implementation of a microservices architecture for better scalability",
      "Use of Redis for caching and sessions",
      "Implementation of a CDN for product images"
    ],
    resultsFr: [
      "Temps de chargement réduit de 60%",
      "Taux de conversion augmenté de 25%",
      "Zéro temps d'arrêt depuis le lancement"
    ],
    resultsEn: [
      "Loading time reduced by 60%",
      "Conversion rate increased by 25%",
      "Zero downtime since launch"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  "2": {
    titleFr: "Application de Gestion de Projets",
    titleEn: "Project Management Application",
    descFr: "Outil de collaboration pour équipes avec tableau Kanban interactif, chat en temps réel et suivi du temps de travail.",
    descEn: "Collaboration tool for teams with interactive Kanban board, real-time chat and work time tracking.",
    image: "/project-management-dashboard.png",
    technologies: ["Next.js", "Python", "Django", "WebSocket", "PostgreSQL", "Docker"],
    durationFr: "4 mois",
    durationEn: "4 months",
    roleFr: "Développeur Full Stack",
    roleEn: "Full Stack Developer",
    teamSize: "4",
    challengesFr: [
      "Synchronisation en temps réel entre plusieurs utilisateurs",
      "Gestion des permissions et des rôles complexes",
      "Interface drag-and-drop fluide pour le Kanban"
    ],
    challengesEn: [
      "Real-time synchronization between multiple users",
      "Complex permission and role management",
      "Smooth drag-and-drop interface for Kanban"
    ],
    solutionsFr: [
      "Utilisation de WebSockets pour les mises à jour en temps réel",
      "Système de permissions basé sur les rôles (RBAC)",
      "Optimisation avec React DnD et virtualisation"
    ],
    solutionsEn: [
      "Use of WebSockets for real-time updates",
      "Role-based access control system (RBAC)",
      "Optimization with React DnD and virtualization"
    ],
    resultsFr: [
      "Adoption par plus de 50 équipes en 2 mois",
      "Productivité des équipes augmentée de 35%",
      "Note de satisfaction utilisateur de 4.8/5"
    ],
    resultsEn: [
      "Adoption by over 50 teams in 2 months",
      "Team productivity increased by 35%",
      "User satisfaction rating of 4.8/5"
    ],
    demoUrl: "#",
    githubUrl: "#"
  }
}

export type CaseStudy = (typeof caseStudies)[keyof typeof caseStudies]
