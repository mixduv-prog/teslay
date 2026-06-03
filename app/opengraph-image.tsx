import { ImageResponse } from "next/og";

export const alt = "Voltage — Comparateur de voitures électriques";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 90,
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg,#34d399,#22d3ee 55%,#6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            ⚡
          </div>
          <div style={{ fontSize: 44, fontWeight: 600, fontFamily: "serif" }}>Voltage</div>
        </div>
        <div style={{ fontSize: 78, fontWeight: 500, lineHeight: 1.05, fontFamily: "serif" }}>
          Comparateur de
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 500,
            lineHeight: 1.05,
            fontFamily: "serif",
            background: "linear-gradient(100deg,#34d399,#22d3ee 60%,#818cf8)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          voitures électriques
        </div>
        <div style={{ marginTop: 44, fontSize: 30, color: "#94a3b8" }}>
          105 modèles & versions · autonomie, batterie, prix · France 2026
        </div>
      </div>
    ),
    { ...size },
  );
}
