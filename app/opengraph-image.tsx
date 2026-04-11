import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Breefy — Générateur de briefs SEO par IA";
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
          fontSize: 48,
          background: "#fafaf8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 18,
              background: "#22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 56,
              fontWeight: 700,
              fontFamily: "serif",
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#1a1a1a",
              fontFamily: "serif",
            }}
          >
            Breefy
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#1a1a1a",
            textAlign: "center",
            lineHeight: 1.1,
            fontFamily: "serif",
            marginBottom: 20,
          }}
        >
          Des briefs SEO parfaits
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#22c55e",
            textAlign: "center",
            lineHeight: 1.1,
            fontFamily: "serif",
          }}
        >
          en 30 secondes
        </div>
        <div
          style={{
            marginTop: 50,
            fontSize: 28,
            color: "#666",
            textAlign: "center",
          }}
        >
          Générateur de briefs SEO par IA · getbreefy.com
        </div>
      </div>
    ),
    { ...size }
  );
}
