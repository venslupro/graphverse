import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";

export const alt = "GraphVerse — Graph World Models";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Deterministic pseudo-random graph so the image is stable across builds.
function graph() {
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const nodes = Array.from({ length: 46 }, () => ({ x: 560 + rnd() * 640, y: rnd() * 630 }));
  const edges: [number, number][] = [];
  nodes.forEach((a, i) =>
    nodes.forEach((b, j) => {
      if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 140) edges.push([i, j]);
    }),
  );
  return { nodes, edges };
}

export default function OgImage() {
  const { nodes, edges } = graph();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 80% 30%, #1f1a4d 0%, #0b1026 60%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <svg width="1200" height="630" style={{ position: "absolute", inset: 0 }}>
          {edges.map(([i, j]) => (
            <line
              key={`${i}-${j}`}
              x1={nodes[i].x}
              y1={nodes[i].y}
              x2={nodes[j].x}
              y2={nodes[j].y}
              stroke="rgba(139,150,255,0.35)"
              strokeWidth="1.2"
            />
          ))}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={i % 7 === 0 ? 6 : 3} fill={i % 7 === 0 ? "#38e1ff" : "#c8d0ff"} />
          ))}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", width: 760 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#38e1ff" }}>GRAPHVERSE</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginTop: 24 }}>Graph World Models</div>
          <div style={{ fontSize: 30, color: "#8b93b0", marginTop: 28, lineHeight: 1.4 }}>
            The open hub bridging graph neural networks and world-model dynamics.
          </div>
          <div style={{ fontSize: 24, color: "#c8d0ff", marginTop: 40 }}>venslu.pro@gmail.com</div>
        </div>
      </div>
    ),
    size,
  );
}
