import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/data";

export const runtime = "edge";

export const alt = `${SITE_CONFIG.name} - Full Stack Developer Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(10, 10, 10, 0) 70%)",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#7c3aed",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              PRAVIN.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.8)", fontWeight: 600 }}>
              Open for Opportunities
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#a78bfa",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Full Stack Developer · AI Workflows
          </span>

          <h1
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            Pravin Dipak Pagar
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#a3a3a3",
              lineHeight: 1.4,
              maxWidth: "900px",
              margin: 0,
            }}
          >
            Building high-performance web & mobile platforms, real-time collaboration engines, and agentic AI workflows.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          {["Next.js", "React Native", "TypeScript", "LangChain", "WebSockets", "Node.js", "MongoDB"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

