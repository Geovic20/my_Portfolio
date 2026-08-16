"use client"

import { useLanguage } from "@/contexts/language-context"
import { stack, resolveItem } from "@/lib/stack"

// Chaque couche est une bande de la pile : bloc de catégorie coloré à gauche,
// technologies à droite. L'ensemble forme un seul objet empilé plutôt que
// sept cartes flottantes — d'où l'ombre unique portée par le conteneur.
export function TechStackSection() {
  const { t, language } = useLanguage()

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-black mb-10 md:mb-14 tracking-tight">
          {t("home.stackTitle")}
        </h2>

        <dl className="grid md:grid-cols-[minmax(160px,200px)_1fr] border-3 md:border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
          {stack.map((layer, index) => {
            // En colonne (mobile), chaque bande commence par son étiquette : le dd
            // porte donc toujours une bordure haute. En deux colonnes, l'étiquette
            // et les technos sont sur la même ligne : bordure seulement entre bandes.
            const first = index === 0
            return (
              <div key={layer.id} className="contents">
                <dt
                  className={`flex items-center px-5 py-3 md:py-5 font-black uppercase tracking-wider text-sm md:text-base border-black md:border-r-4 ${
                    first ? "" : "border-t-3 md:border-t-4"
                  } ${layer.ink === "light" ? "text-white" : "text-black"}`}
                  style={{ backgroundColor: layer.accent }}
                >
                  {language === "fr" ? layer.labelFr : layer.labelEn}
                </dt>
                <dd
                  className={`flex flex-wrap content-center gap-2 px-4 py-4 md:px-6 md:py-5 border-black border-t-3 ${
                    first ? "md:border-t-0" : "md:border-t-4"
                  }`}
                >
                  {layer.items.map((item) => {
                    const label = resolveItem(item, language)
                    return (
                      <span
                        key={label}
                        className="px-3 py-1.5 bg-[#F8F9FA] border-2 border-black text-sm md:text-base font-bold"
                      >
                        {label}
                      </span>
                    )
                  })}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
