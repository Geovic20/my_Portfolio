export function LogoMarquee() {
  const items = [
    { logo: "/html5-logo.png", alt: "HTML5" },
    { logo: "/css3-logo.png", alt: "CSS3" },
    { logo: "/react-js-logo.jpg", alt: "React.js" },
    { logo: "/nextjs-logo.png", alt: "Next.js" },
    { logo: "/nodejs-logo.png", alt: "Node.js" },
    { logo: "/python-django-logo.jpg", alt: "Python (Django)" },
    { logo: "/java-logo.png", alt: "Java" },
    { logo: "/sql-database-logo.png", alt: "SQL" },
    { logo: "/docker-logo.png", alt: "Docker" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img key={index} src={item.logo || "/placeholder.svg"} alt={item.alt} className="h-12 w-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
