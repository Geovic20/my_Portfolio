"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

type TranslationNode = string | { [key: string]: TranslationNode }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguage(savedLanguage)
    }
  }, [])

  // The root layout renders lang="fr" on the server; keep the DOM in sync once
  // the stored preference is known, otherwise screen readers read English text
  // with French phonetics.
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  // Falls back to the key itself when a translation is missing, so an oversight
  // shows up on screen instead of rendering an empty string.
  const t = (key: string): string => {
    let node: TranslationNode | undefined = translations[language]

    for (const part of key.split(".")) {
      if (typeof node !== "object" || node === null) return key
      node = node[part]
    }
    return typeof node === "string" ? node : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    home: {
      stackTitle: "STACK TECHNOLOGIQUE",
    },
    carousel: {
      label: "Stack technologique",
      previous: "Technologie précédente",
      next: "Technologie suivante",
    },
    footer: {
      tagline:
        "Développeur Full-Stack passionné par la création d'applications web modernes et performantes.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "Tous droits réservés",
      linkedin: "Profil LinkedIn",
      github: "Profil GitHub",
    },
    caseStudy: {
      back: "Retour au portfolio",
      people: "personnes",
      demo: "Voir la démo",
      code: "Voir le code",
      technologies: "Technologies utilisées",
      challenges: "Défis rencontrés",
      solutions: "Solutions apportées",
      results: "Résultats obtenus",
      ctaTitle: "Vous avez un projet similaire ?",
      ctaDesc: "Discutons de comment je peux vous aider à le réaliser.",
      ctaButton: "Me contacter",
    },
    alt: {
      heroAvatar: "Illustration du personnage",
      aboutIllustration: "Illustration à propos",
      profileIllustration: "Illustration de profil",
    },
    aboutSection: {
      title: "Qui se cache derrière",
      titleHighlight: "ce travail ?",
      description:
        "Je suis un développeur full-stack passionné par la création d'applications web modernes et performantes. J'interviens aussi bien sur le front-end que sur le back-end, avec une attention particulière portée à la qualité du code, à la sécurité et à l'expérience utilisateur.",
      experience: "+3 ans d'expérience",
      experienceDesc: "Une expérience construite à travers des projets personnels, académiques et professionnels.",
      projects: "Plusieurs projets web réalisés",
      projectsDesc: "Plateformes e-commerce, dashboards, APIs, plateformes web et solutions sur mesure.",
      cta: "En savoir plus",
    },
    notFound: {
      title: "Cette page n'existe pas",
      description:
        "Le lien est peut-être cassé, ou la page a été déplacée. Pas de panique : tout le reste du site est à un clic d'ici.",
      backHome: "Retour à l'accueil",
      viewPortfolio: "Voir le portfolio",
    },
    contact: {
      title: "Me",
      titleHighlight: "contacter",
      subtitle: "Choisissez votre moyen de contact préféré pour discuter de votre projet web.",
      whatsappDesc: "Envoyez-moi un message sur WhatsApp",
      emailDesc: "Envoyez-moi un e-mail",
      socialTitle: "Mes Réseaux Sociaux",
      socialSubtitle: "Retrouvez-moi également sur mes différents réseaux sociaux",
      backHome: "Retour à l'accueil",
    },
    hero: {
      greeting: "Heyy ! Je suis",
      name: "KPOSSILANDE Géovic",
      title: "Développeur Full-Stack & Problem Solver",
      location: "",
      description:
        "Je conçois et développe des solutions web complètes, des interfaces utilisateur élégantes aux systèmes backend robustes. Je me concentre sur la performance, la sécurité et l'architecture évolutive.",
      cta1: "Me contacter",
      cta2: "Voir le portfolio",
    },
    services: {
      title: "Mes services de",
      titleHighlight: "développement web",
      subtitle: "Je propose des solutions complètes pour vos projets web, du front-end au back-end.",
      service1Title: "Développement Front-End",
      service1Desc:
        "Création d'interfaces utilisateur modernes et réactives avec React, Next.js et Tailwind CSS pour une expérience utilisateur optimale.",
      service2Title: "Développement Back-End",
      service2Desc:
        "Conception d'API REST robustes et de systèmes serveur avec Node.js, Python (Django) ou Java pour des applications performantes.",
      service3Title: "Applications Full Stack",
      service3Desc:
        "Développement complet d'applications web de bout en bout, de la conception à la mise en production avec les technologies modernes.",
      service4Title: "Intégration de Bases de Données",
      service4Desc:
        "Conception et optimisation de bases de données SQL avec migrations, requêtes performantes et gestion sécurisée des données.",
      service5Title: "DevOps & Déploiement",
      service5Desc:
        "Conteneurisation avec Docker, intégration continue (CI/CD) et déploiement d'applications sur des serveurs cloud.",
      ctaTitle: "Me contacter",
      ctaDesc:
        "Vous avez besoin d'un autre service ? Contactez-moi, il y a de fortes chances que je puisse vous aider !",
      ctaButton: "Me contacter",
    },
    about: {
      title: "À propos de",
      titleHighlight: "moi",
      subtitle: "Développeur Full Stack passionné par la création d'applications web modernes et performantes.",
      sectionTitle: "Mon Parcours",
      description1:
        "Passionné par le développement web et les nouvelles technologies, je me spécialise dans la création d'applications web modernes utilisant les dernières technologies du marché.",
      description2:
        "Mon expertise couvre à la fois le front-end et le back-end, me permettant de créer des solutions complètes et performantes adaptées aux besoins de chaque projet.",
      skillsTitle: "Mes Compétences",
      frontend: "Front-End",
      frontendDesc:
        "HTML5, CSS3, React.js, Next.js avec une attention particulière au design et à l'expérience utilisateur.",
      backend: "Back-End",
      backendDesc: "Node.js, Python (Django), Java avec une maîtrise des bases de données SQL et des API REST.",
      devops: "DevOps",
      devopsDesc: "Docker, CI/CD, déploiement et maintenance d'applications en production.",
      softskills: "Soft Skills",
      softskillsDesc: "Travail d'équipe, communication efficace, gestion de projet et résolution de problèmes.",
      educationTitle: "Cursus Scolaire",
      education1Title: "Licence en Informatique",
      education1School: "Institut de Formation et de Recherche en Informatique (IFRI)",
      education1Desc: "Spécialisation en développement web et mobile, architecture logicielle et gestion de projets.",
      education2Title: "Baccalauréat scientifique",
      education2School: "Collège Catholique Père Aupiais",
      education2Desc:
        "Bac C avec mention 'Bien'.",
      education3Title: "Brevet d'Etudes du Premier Cycle (BEPC)",
      education3School: "Collège Catholique Père Aupiais",
      education3Desc: "BEPC scientifique'.",
      certificatesTitle: "Certificats & Formations",
      cert1Title: "React Developer Certification",
      cert1Org: "Meta - 2023",
      cert1Desc:
        "Certification avancée en développement React incluant hooks, context API et optimisation des performances.",
      cert2Title: "Full Stack Web Development",
      cert2Org: "Udemy - 2022",
      cert2Desc: "Formation complète couvrant Node.js, Express, MongoDB et le déploiement d'applications.",
      cert3Title: "Docker & Kubernetes",
      cert3Org: "Docker Inc. - 2023",
      cert3Desc: "Maîtrise des conteneurs, orchestration et déploiement d'applications en production.",
      cert4Title: "Python & Django Framework",
      cert4Org: "Coursera - 2022",
      cert4Desc: "Développement d'applications web avec Django, REST API et authentification.",
      valuesTitle: "Mes Valeurs",
      value1Title: "Qualité du code",
      value1Desc:
        "Je m'efforce de produire un code propre, maintenable et suivant les meilleures pratiques de l'industrie.",
      value2Title: "Apprentissage continu",
      value2Desc:
        "Le domaine du développement web évolue constamment, je reste donc toujours à jour avec les dernières technologies.",
      value3Title: "Collaboration",
      value3Desc: "Je crois fermement au travail d'équipe et à la communication ouverte pour mener à bien les projets.",
    },
    portfolio: {
      title: "Mon",
      titleHighlight: "Portfolio",
      subtitle:
        "Découvrez une sélection de mes projets récents qui démontrent mes compétences en développement web full stack.",
      project1Title: "E-Commerce Platform",
      project1Desc: "Une plateforme e-commerce complète avec panier, paiement en ligne et gestion des commandes.",
      project2Title: "Application de Gestion de Projets",
      project2Desc: "Outil de collaboration pour équipes avec tableau Kanban, chat en temps réel et suivi du temps.",
      project3Title: "Portfolio Photographe",
      project3Desc: "Site vitrine élégant avec galerie d'images, formulaire de contact et système de réservation.",
      project4Title: "API REST Microservices",
      project4Desc:
        "Architecture microservices avec authentification JWT, gestion des utilisateurs et documentation Swagger.",
      project5Title: "Application Mobile Fitness",
      project5Desc: "Application de suivi d'entraînement avec statistiques, objectifs personnalisés et partage social.",
      project6Title: "Dashboard Analytics",
      project6Desc: "Tableau de bord interactif avec graphiques en temps réel, filtres avancés et export de données.",
      demo: "Démo",
      code: "Code",
      ctaTitle: "Vous avez un projet en tête ?",
      ctaDesc: "N'hésitez pas à me contacter pour discuter de votre prochain projet web.",
      ctaButton: "Me Contacter",
    },
    testimonials: {
      title: "Ce que mes clients disent",
      about: "à propos de",
      work: "mon travail",
      subtitle: "Découvrez les retours de clients satisfaits qui ont collaboré avec moi sur leurs projets web.",
    },
    portfolioPreview: {
      title: "Jetez un œil à mon",
      titleHighlight: "portfolio",
      project1Title: "Plateforme E-Commerce",
      project1Desc:
        "Développement complet d'une plateforme e-commerce avec gestion du panier, paiement sécurisé et système de gestion des commandes.",
      project2Title: "Application de Gestion de Projets",
      project2Desc:
        "Outil de collaboration pour équipes avec tableau Kanban interactif, chat en temps réel et suivi du temps de travail.",
      caseStudy: "Voir l'étude de cas",
      browseAll: "Voir tout le portfolio",
    },
    experience: {
      title: "Jetez un œil à mon",
      titleHighlight: "expérience",
      description:
        "Mon parcours dans le développement web combine formation académique solide et projets concrets qui m'ont permis de développer mes compétences techniques et humaines.",
      exp1Period: "Jan 2026 - Présent",
      exp1Title: "Développeur full stack freelance",
      exp1Desc:
        "Développement d'applications web complètes utilisant React, Next.js pour le front-end et Node.js, Django pour le back-end. Mise en place d'API REST et intégration de bases de données.",
      exp2Period: "Mar 2025 - Déc 2025",
      exp2Title: "Stage Développeur full stack : Ministère de la Santé",
      exp2Desc:
        "Conception et intégration d'interfaces avec Angular et java ; Participation à la refonte du site institutionnel du ministère ; Collaboration avec l'équipe IT pour les tests et le déploiement.",
      exp3Period: "Mar 2024 - Sep 2024",
      exp3Title: "Développeur Front-End : Ministère de l'Économie et des Finances",
      exp3Desc:
        "Conception et intégration de pages web avec Next.js et laravel ; Participation à la refonte du site institutionnel du ministère ; Collaboration avec l'équipe IT pour les tests et le déploiement.",
      exp4Period: "Août 2023 - Nov 2023",
      exp4Title: "Stagiaire Dev Web : QCT Technologies",
      exp4Desc:
        "Participation au développement de sites web et applications. Apprentissage des bonnes pratiques de développement, travail en équipe et utilisation de Git pour le contrôle de version.",
      cta: "Télécharger mon CV",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    home: {
      stackTitle: "TECH STACK",
    },
    carousel: {
      label: "Tech stack",
      previous: "Previous technology",
      next: "Next technology",
    },
    footer: {
      tagline:
        "Full-Stack developer passionate about building modern, high-performance web applications.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "All rights reserved",
      linkedin: "LinkedIn profile",
      github: "GitHub profile",
    },
    caseStudy: {
      back: "Back to portfolio",
      people: "people",
      demo: "View demo",
      code: "View code",
      technologies: "Technologies used",
      challenges: "Challenges faced",
      solutions: "Solutions provided",
      results: "Results achieved",
      ctaTitle: "Have a similar project?",
      ctaDesc: "Let's discuss how I can help you make it happen.",
      ctaButton: "Contact me",
    },
    alt: {
      heroAvatar: "Character illustration",
      aboutIllustration: "About illustration",
      profileIllustration: "Profile illustration",
    },
    aboutSection: {
      title: "Who is behind",
      titleHighlight: "this work?",
      description:
        "I am a full-stack developer passionate about creating modern and high-performance web applications. I work on both front-end and back-end, with special attention to code quality, security, and user experience.",
      experience: "+3 years of experience",
      experienceDesc: "Experience built through personal, academic, and professional projects.",
      projects: "Several web projects completed",
      projectsDesc: "E-commerce platforms, dashboards, APIs, web platforms and custom solutions.",
      cta: "More about me",
    },
    notFound: {
      title: "This page doesn't exist",
      description:
        "The link may be broken, or the page has moved. No worries: the rest of the site is one click away.",
      backHome: "Back to home",
      viewPortfolio: "View portfolio",
    },
    contact: {
      title: "Get in",
      titleHighlight: "touch",
      subtitle: "Choose your preferred contact method to discuss your web project.",
      whatsappDesc: "Send me a message on WhatsApp",
      emailDesc: "Send me an email",
      socialTitle: "My Social Networks",
      socialSubtitle: "Find me also on my different social networks",
      backHome: "Back to home",
    },
    hero: {
      greeting: "Heyy ! I'm",
      name: "KPOSSILANDE Géovic",
      title: "Full-Stack Developer & Problem Solver",
      location: "",
      description:
        "I design and develop complete web solutions, from clean user interfaces to robust backend systems. I focus on performance, security, and scalable architecture.",
      cta1: "Get in touch",
      cta2: "View portfolio",
    },
    services: {
      title: "My web development",
      titleHighlight: "services",
      subtitle: "I offer complete solutions for your web projects, from front-end to back-end.",
      service1Title: "Front-End Development",
      service1Desc:
        "Creating modern and responsive user interfaces with React, Next.js and Tailwind CSS for an optimal user experience.",
      service2Title: "Back-End Development",
      service2Desc:
        "Designing robust REST APIs and server systems with Node.js, Python (Django) or Java for high-performance applications.",
      service3Title: "Full Stack Applications",
      service3Desc:
        "Complete end-to-end web application development, from design to production deployment with modern technologies.",
      service4Title: "Database Integration",
      service4Desc:
        "Designing and optimizing SQL databases with migrations, efficient queries and secure data management.",
      service5Title: "DevOps & Deployment",
      service5Desc:
        "Containerization with Docker, continuous integration (CI/CD) and application deployment on cloud servers.",
      ctaTitle: "Get in touch",
      ctaDesc: "Looking for another service? Get in touch with me, there is a high chance that I will be able to help!",
      ctaButton: "Get in touch",
    },
    about: {
      title: "About",
      titleHighlight: "me",
      subtitle: "Full Stack Developer passionate about creating modern and high-performance web applications.",
      sectionTitle: "My Journey",
      description1:
        "Passionate about web development and new technologies, I specialize in creating modern web applications using the latest market technologies.",
      description2:
        "My expertise covers both front-end and back-end, allowing me to create complete and high-performance solutions tailored to each project's needs.",
      skillsTitle: "My Skills",
      frontend: "Front-End",
      frontendDesc: "HTML5, CSS3, React.js, Next.js with special attention to design and user experience.",
      backend: "Back-End",
      backendDesc: "Node.js, Python (Django), Java with mastery of SQL databases and REST APIs.",
      devops: "DevOps",
      devopsDesc: "Docker, CI/CD, deployment and maintenance of production applications.",
      softskills: "Soft Skills",
      softskillsDesc: "Teamwork, effective communication, project management and problem solving.",
      educationTitle: "Education",
      education1Title: "Master's in Computer Science",
      education1School: "University of Technology",
      education1Desc: "Specialization in web and mobile development, software architecture and project management.",
      education2Title: "Bachelor's in Computer Science",
      education2School: "University of Sciences",
      education2Desc: "General training in computer science covering databases, networks and programming.",
      education3Title: "Scientific Baccalaureate",
      education3School: "General High School",
      education3Desc: "Specialty in Mathematics and Engineering Sciences, with honors.",
      certificatesTitle: "Certificates & Training",
      cert1Title: "React Developer Certification",
      cert1Org: "Meta - 2023",
      cert1Desc:
        "Advanced certification in React development including hooks, context API and performance optimization.",
      cert2Title: "Full Stack Web Development",
      cert2Org: "Udemy - 2022",
      cert2Desc: "Complete training covering Node.js, Express, MongoDB and application deployment.",
      cert3Title: "Docker & Kubernetes",
      cert3Org: "Docker Inc. - 2023",
      cert3Desc: "Mastery of containers, orchestration and deployment of production applications.",
      cert4Title: "Python & Django Framework",
      cert4Org: "Coursera - 2022",
      cert4Desc: "Web application development with Django, REST API and authentication.",
      valuesTitle: "My Values",
      value1Title: "Code Quality",
      value1Desc: "I strive to produce clean, maintainable code following industry best practices.",
      value2Title: "Continuous Learning",
      value2Desc:
        "The field of web development is constantly evolving, so I always stay up to date with the latest technologies.",
      value3Title: "Collaboration",
      value3Desc: "I strongly believe in teamwork and open communication to successfully complete projects.",
    },
    portfolio: {
      title: "My",
      titleHighlight: "Portfolio",
      subtitle: "Discover a selection of my recent projects that demonstrate my full stack web development skills.",
      project1Title: "E-Commerce Platform",
      project1Desc:
        "A complete e-commerce platform with shopping cart management, secure payment and order management system.",
      project2Title: "Project Management Application",
      project2Desc: "Collaboration tool for teams with Kanban board, real-time chat and time tracking.",
      project3Title: "Photographer Portfolio",
      project3Desc: "Elegant showcase website with image gallery, contact form and booking system.",
      project4Title: "REST API Microservices",
      project4Desc: "Microservices architecture with JWT authentication, user management and Swagger documentation.",
      project5Title: "Fitness Mobile App",
      project5Desc: "Workout tracking application with statistics, personalized goals and social sharing.",
      project6Title: "Analytics Dashboard",
      project6Desc: "Interactive dashboard with real-time charts, advanced filters and data export.",
      demo: "Demo",
      code: "Code",
      ctaTitle: "Have a project in mind?",
      ctaDesc: "Don't hesitate to contact me to discuss your next web project.",
      ctaButton: "Contact Me",
    },
    testimonials: {
      title: "What my clients say",
      about: "about",
      work: "my work",
      subtitle: "Discover feedback from satisfied clients who have worked with me on their web projects.",
    },
    portfolioPreview: {
      title: "Take a look at my",
      titleHighlight: "portfolio",
      project1Title: "E-Commerce Platform",
      project1Desc:
        "Complete development of an e-commerce platform with shopping cart management, secure payment and order management system.",
      project2Title: "Project Management Application",
      project2Desc:
        "Collaboration tool for teams with interactive Kanban board, real-time chat and work time tracking.",
      caseStudy: "View case study",
      browseAll: "Browse all portfolio",
    },
    experience: {
      title: "Take a look at my",
      titleHighlight: "past experience",
      description:
        "My journey in web development combines solid academic training and concrete projects that allowed me to develop my technical and human skills.",
      exp1Period: "Jan 2026 - Present",
      exp1Title: "Freelance full stack developer",
      exp1Desc:
        "Development of complete web applications using React, Next.js for front-end and Node.js, Django for back-end. Implementation of REST APIs and database integration.",
      exp2Period: "Mar 2025 - Dec 2025",
      exp2Title: "Full-stack developer internship: Ministry of Health",
      exp2Desc:
        "Design and integration of interfaces with Angular and Java; Participation in the redesign of the ministry's institutional website; Collaboration with the IT team for testing and deployment.",
      exp3Period: "Mar 2024 - Sep 2024",
      exp3Title: "Front-End Developer : Ministère de l'Économie et des Finances",
      exp3Desc:
        "Design and integration of web pages with Next.js and laravel; Participation in the redesign of the ministry's institutional website; Collaboration with the IT team for testing and deployment.",
      exp4Period: "Aug 2023 - Nov 2023",
      exp4Title: "Web Developer Intern : QCT Technologies",
      exp4Desc:
        "Participation in the development of websites and applications. Learning development best practices, teamwork and using Git for version control.",
      cta: "See full resume",
    },
  },
}
