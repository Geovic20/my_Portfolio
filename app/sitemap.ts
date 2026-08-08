import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"
import { caseStudies } from "./portfolio/case-study/[id]/case-studies"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ]

  const studies: MetadataRoute.Sitemap = Object.keys(caseStudies).map((id) => ({
    url: `${siteUrl}/portfolio/case-study/${id}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...pages, ...studies]
}
