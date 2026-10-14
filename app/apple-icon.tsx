import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #141419 0%, #070709 100%)",
          borderRadius: "40px",
          border: "4px solid #8B5CF6",
          position: "relative",
          boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)",
        }}
      >
        <span
          style={{
            fontSize: "112px",
            fontWeight: 900,
            color: "#FFFFFF",
            display: "flex",
            alignItems: "baseline",
            letterSpacing: "-4px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          P<span style={{ color: "#8B5CF6", fontSize: "90px", marginLeft: "2px" }}>.</span>
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}

