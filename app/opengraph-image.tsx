import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`

// Satori (the renderer behind ImageResponse) only ships a regular weight, so the
// neo-brutalist look leans on solid colour blocks and hard shadows, not font weight.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          padding: "72px",
          border: "16px solid #0B0B0B",
        }}
      >
        <div style={{ display: "flex", marginBottom: "36px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#FF6B7A",
              color: "#FFFFFF",
              fontSize: "76px",
              padding: "14px 30px",
              border: "6px solid #0B0B0B",
              boxShadow: "12px 12px 0px 0px #0B0B0B",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#2F81F7",
              color: "#FFFFFF",
              fontSize: "60px",
              padding: "14px 30px",
              border: "6px solid #0B0B0B",
              boxShadow: "12px 12px 0px 0px #0B0B0B",
            }}
          >
            {siteConfig.jobTitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#393939",
            lineHeight: 1.45,
            maxWidth: "880px",
          }}
        >
          React · Next.js · Node.js · Django · PostgreSQL · Docker
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: "52px" }}>
          <div
            style={{
              display: "flex",
              width: "28px",
              height: "28px",
              backgroundColor: "#FFC224",
              border: "5px solid #0B0B0B",
              marginRight: "18px",
            }}
          />
          <div style={{ display: "flex", fontSize: "28px", color: "#0B0B0B" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
