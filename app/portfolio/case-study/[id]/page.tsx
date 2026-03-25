"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useParams } from "next/navigation"

const caseStudies = {
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

export default function CaseStudyPage() {
  const { language } = useLanguage()
  const params = useParams()
  const id = params.id as string
  
  const study = caseStudies[id as keyof typeof caseStudies]
  
  if (!study) {
    return (
      <main className="min-h-screen bg-[#FFFFFF]">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-600 mb-8">{language === "fr" ? "Étude de cas non trouvée" : "Case study not found"}</p>
          <Link href="/portfolio">
            <Button className="bg-black text-white">
              {language === "fr" ? "Retour au portfolio" : "Back to portfolio"}
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const title = language === "fr" ? study.titleFr : study.titleEn
  const desc = language === "fr" ? study.descFr : study.descEn
  const duration = language === "fr" ? study.durationFr : study.durationEn
  const role = language === "fr" ? study.roleFr : study.roleEn
  const challenges = language === "fr" ? study.challengesFr : study.challengesEn
  const solutions = language === "fr" ? study.solutionsFr : study.solutionsEn
  const results = language === "fr" ? study.resultsFr : study.resultsEn

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {language === "fr" ? "Retour au portfolio" : "Back to portfolio"}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl">{desc}</p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">{role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">{study.teamSize} {language === "fr" ? "personnes" : "people"}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild className="bg-black text-white hover:bg-black/90 border-2 border-black">
              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === "fr" ? "Voir la démo" : "View Demo"}
              </a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-black hover:bg-black hover:text-white">
              <a href={study.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {language === "fr" ? "Voir le code" : "View Code"}
              </a>
            </Button>
          </div>

          {/* Project Image */}
          <div className="relative w-full h-[300px] md:h-[500px] border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src={study.image} alt={title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {language === "fr" ? "Technologies utilisées" : "Technologies Used"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {study.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-[#F8F9FA] border-2 border-black font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {language === "fr" ? "Défis rencontrés" : "Challenges Faced"}
          </h2>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-red-50 border-2 border-black rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white font-bold flex items-center justify-center rounded-full">
                  {index + 1}
                </span>
                <p className="text-gray-700">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {language === "fr" ? "Solutions apportées" : "Solutions Provided"}
          </h2>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-blue-50 border-2 border-black rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white font-bold flex items-center justify-center rounded-full">
                  {index + 1}
                </span>
                <p className="text-gray-700">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {language === "fr" ? "Résultats obtenus" : "Results Achieved"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="p-6 bg-green-50 border-2 border-black rounded-lg text-center">
                <p className="text-gray-700 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-[#2F81F7] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {language === "fr" ? "Vous avez un projet similaire ?" : "Have a similar project?"}
          </h2>
          <p className="text-white/90 mb-8">
            {language === "fr" ? "Discutons de comment je peux vous aider à le réaliser." : "Let's discuss how I can help you make it happen."}
          </p>
          <Button asChild className="bg-white text-black hover:bg-white/90 border-2 border-black font-bold">
            <Link href="/contact">
              {language === "fr" ? "Me contacter" : "Contact me"}
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
