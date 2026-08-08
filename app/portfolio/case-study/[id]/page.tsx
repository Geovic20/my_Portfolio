import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { caseStudies } from "./case-studies"
import { CaseStudyView } from "./case-study-view"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const study = caseStudies[id as keyof typeof caseStudies]

  if (!study) {
    return { title: "Étude de cas introuvable" }
  }

  const url = `/portfolio/case-study/${id}`

  return {
    title: study.titleFr,
    description: study.descFr,
    alternates: { canonical: url },
    openGraph: {
      title: study.titleFr,
      description: study.descFr,
      url,
      images: [{ url: study.image, alt: study.titleFr }],
    },
    twitter: {
      title: study.titleFr,
      description: study.descFr,
      images: [study.image],
    },
  }
}

// Pre-renders one static page per existing case study.
export function generateStaticParams() {
  return Object.keys(caseStudies).map((id) => ({ id }))
}

// Any id outside generateStaticParams is a 404 resolved at routing time,
// so the shared not-found page is server-rendered instead of a blank body.
export const dynamicParams = false

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const study = caseStudies[id as keyof typeof caseStudies]

  // Resolved on the server so unknown ids answer with a real HTTP 404.
  if (!study) {
    notFound()
  }

  return <CaseStudyView study={study} />
}
