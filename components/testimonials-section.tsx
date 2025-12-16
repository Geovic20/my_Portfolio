"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: {
      fr: "Géovic a développé notre plateforme e-commerce de A à Z. Son expertise technique et sa capacité à comprendre nos besoins ont été exceptionnelles. Le résultat dépasse nos attentes !",
      en: "Géovic developed our e-commerce platform from A to Z. His technical expertise and ability to understand our needs were exceptional. The result exceeds our expectations!",
    },
    name: "Sophie Martin",
    title: {
      fr: "Directrice Marketing chez TechCorp",
      en: "Marketing Director at TechCorp",
    },
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
  },
  {
    quote: {
      fr: "Un développeur full-stack talentueux qui maîtrise parfaitement son sujet. Géovic a livré notre application dans les délais avec un code propre et maintenable. Je recommande vivement !",
      en: "A talented full-stack developer who perfectly masters his subject. Géovic delivered our application on time with clean and maintainable code. Highly recommended!",
    },
    name: "Marc Dubois",
    title: {
      fr: "CTO chez StartupLab",
      en: "CTO at StartupLab",
    },
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
  },
  {
    quote: {
      fr: "Collaborer avec Géovic a été un véritable plaisir. Sa communication claire, son professionnalisme et ses compétences techniques font de lui un partenaire idéal pour tout projet web complexe.",
      en: "Collaborating with Géovic was a real pleasure. His clear communication, professionalism and technical skills make him an ideal partner for any complex web project.",
    },
    name: "Laura Chen",
    title: {
      fr: "Chef de Projet chez Digital Agency",
      en: "Project Manager at Digital Agency",
    },
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
  },
]

export function TestimonialsSection() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            {t("testimonials.title")}
            <br />
            {t("testimonials.about")}{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">{t("testimonials.work")}</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">{t("testimonials.subtitle")}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-72 lg:pr-72 transition-opacity duration-300">
              <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                  alt="Quote"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div className="md:max-w-[65%]">
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                  {currentTestimonial.quote[language]}
                </p>

                <div>
                  <div className="font-bold text-base md:text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-600 text-sm md:text-base">{currentTestimonial.title[language]}</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full overflow-hidden hidden lg:block">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt="Client testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white border-4 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#2F81F7]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white border-4 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
