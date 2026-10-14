import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          border: "1.5px solid #8B5CF6",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: 900,
            color: "#FFFFFF",
            display: "flex",
            alignItems: "baseline",
            letterSpacing: "-1px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          P<span style={{ color: "#8B5CF6", fontSize: "16px", marginLeft: "1px" }}>.</span>
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}

