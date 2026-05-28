export function LogoMarquee() {
  const technologies = [
    { name: "HTML5", color: "rgba(227, 79, 38, 0.1)" },
    { name: "CSS3", color: "rgba(21, 114, 182, 0.1)" },
    { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
    { name: "Next.js", color: "rgba(0, 0, 0, 0.1)" },
    { name: "Node.js", color: "rgba(51, 153, 51, 0.1)" },
    { name: "Python (Django)", color: "rgba(55, 118, 171, 0.1)" },
    { name: "Python (Flask)", color: "rgba(55, 118, 171, 0.1)" },
    { name: "Python (FastAPI)", color: "rgba(55, 118, 171, 0.1)" },
    { name: "Java", color: "rgba(237, 139, 0, 0.1)" },
    { name: "SQL", color: "rgba(51, 103, 145, 0.1)" },
    { name: "Docker", color: "rgba(36, 150, 237, 0.1)" },
  ]

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-slate-950/80 via-slate-900/80 to-slate-950/80 p-8 shadow-2xl ring-1 ring-white/10">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400">Technologies</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Stack de compétences</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {technologies.map((tech, index) => (
          <div key={index} className="flex h-16 items-center justify-center rounded-2xl border border-white/10 p-4 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:scale-105 hover:bg-white/25" style={{ backgroundColor: tech.color }}>
            <span className="text-center text-sm font-medium text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
