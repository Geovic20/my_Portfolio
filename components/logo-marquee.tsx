import Image from "next/image"

export function LogoMarquee() {
  const items = [
    { logo: "/html5-logo.png", alt: "HTML5" },
    { logo: "/css3-logo.png", alt: "CSS3" },
    { logo: "/react-js-logo.png", alt: "React.js" },
    { logo: "/nextjs-logo.png", alt: "Next.js" },
    { logo: "/nodejs-logo.png", alt: "Node.js" },
    { logo: "/python-django-logo.png", alt: "Python (Django)" },
    { logo: "/java-logo.png", alt: "Java" },
    { logo: "/sql-database-logo.png", alt: "SQL" },
    { logo: "/docker-logo.png", alt: "Docker" },
  ]

  const repeatedItems = [...items, ...items]

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-slate-950/80 via-slate-900/80 to-slate-950/80 p-8 shadow-2xl ring-1 ring-white/10">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-slate-950 to-transparent" />

      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400">Technologies</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Stack de compétences</h2>
      </div>

      <div className="space-y-5">
        <div className="flex min-w-[200%] gap-6 animate-marquee whitespace-nowrap">
          {repeatedItems.map((item, index) => (
            <div key={`top-${index}`} className="flex h-36 min-w-[320px] items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:scale-105 hover:bg-white/25">
              <Image src={item.logo} alt={item.alt} width={320} height={160} className="h-28 w-auto object-contain" priority={index < items.length} />
            </div>
          ))}
        </div>

        <div className="flex min-w-[200%] gap-6 animate-marquee-reverse whitespace-nowrap">
          {repeatedItems.map((item, index) => (
            <div key={`bottom-${index}`} className="flex h-36 min-w-[320px] items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:scale-105 hover:bg-white/25">
              <Image src={item.logo} alt={item.alt} width={320} height={160} className="h-28 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
