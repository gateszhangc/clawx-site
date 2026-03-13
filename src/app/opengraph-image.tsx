import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #faf6ef 0%, #f4f0e8 52%, #eef7d6 100%)",
          color: "#101827",
          fontFamily: "Arial",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -40,
            top: 60,
            width: 280,
            height: 280,
            borderRadius: 999,
            background: "rgba(190,246,128,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 40,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(59,130,246,0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(16,24,39,0.12)",
              }}
            >
              CX
            </div>
            ClawX
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                fontSize: 84,
                lineHeight: 0.92,
                fontWeight: 800,
                letterSpacing: "-0.08em",
                maxWidth: 820,
              }}
            >
              Deploy ClawX in 1 minute.
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.35,
                maxWidth: 860,
                color: "#4f5b70",
              }}
            >
              Local-first AI research assistant for continuous monitoring,
              summaries, and multi-channel delivery.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#4f5b70",
            }}
          >
            <div>Open source. Self-hosted. Built on OpenClaw.</div>
            <div
              style={{
                padding: "14px 22px",
                borderRadius: 999,
                background: "#bef680",
                color: "#101827",
                fontWeight: 700,
              }}
            >
              Deploy now
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
