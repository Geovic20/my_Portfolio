"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import type { CaseStudy } from "./case-studies"

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const { language } = useLanguage()
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
          <div className="relative w-full h-75 md:h-125 border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src={study.image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
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
                <span className="shrink-0 w-8 h-8 bg-red-500 text-white font-bold flex items-center justify-center rounded-full">
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
                <span className="shrink-0 w-8 h-8 bg-blue-500 text-white font-bold flex items-center justify-center rounded-full">
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
