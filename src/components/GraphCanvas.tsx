"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; z: number; energy: number };
type Pulse = { from: number; to: number; t: number; hops: number };

const LINK_DIST = 150;
const COLORS = ["56,225,255", "139,123,255", "255,111,181"];

/**
 * Drifting graph whose edges carry "messages" that propagate from node to
 * node — a visual nod to message passing in graph world models.
 */
export default function GraphCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let running = true;
    let lastSpawn = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.max(36, Math.round((width * height) / 13000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        z: 0.4 + Math.random() * 0.6,
        energy: 0,
      }));
      pulses = [];
    };

    const neighbors = (i: number) => {
      const a = nodes[i];
      const out: number[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const dx = a.x - nodes[j].x;
        const dy = a.y - nodes[j].y;
        if (dx * dx + dy * dy < LINK_DIST * LINK_DIST) out.push(j);
      }
      return out;
    };

    const spawn = (from: number, hops: number) => {
      const ns = neighbors(from);
      if (!ns.length) return;
      const to = ns[Math.floor(Math.random() * ns.length)];
      pulses.push({ from, to, t: 0, hops });
    };

    const step = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx * n.z;
          n.y += n.vy * n.z;
        }
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 140 * 140) {
          n.energy = Math.min(1, n.energy + 0.05);
          const f = (1 - Math.sqrt(d2) / 140) * 0.6;
          n.x += (dx / (Math.sqrt(d2) + 0.01)) * f;
          n.y += (dy / (Math.sqrt(d2) + 0.01)) * f;
        }
        n.energy *= 0.975;
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK_DIST * LINK_DIST) continue;
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.4 * Math.min(a.z, b.z);
          const boost = Math.max(a.energy, b.energy) * 0.5;
          ctx.strokeStyle = `rgba(160,172,255,${alpha + boost * alpha * 3})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Message pulses
      if (!reduceMotion && time - lastSpawn > 450 && pulses.length < 26) {
        spawn(Math.floor(Math.random() * nodes.length), 4);
        lastSpawn = time;
      }
      const next: Pulse[] = [];
      for (const p of pulses) {
        p.t += 0.018;
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) continue;
        if (p.t >= 1) {
          b.energy = 1;
          if (p.hops > 0 && pulses.length + next.length < 40) {
            const ns = neighbors(p.to).filter((n) => n !== p.from);
            const fan = Math.random() < 0.3 ? 2 : 1;
            for (let k = 0; k < Math.min(fan, ns.length); k++) {
              next.push({ from: p.to, to: ns[Math.floor(Math.random() * ns.length)], t: 0, hops: p.hops - 1 });
            }
          }
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const color = COLORS[p.hops % COLORS.length];
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
        g.addColorStop(0, `rgba(${color},0.9)`);
        g.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(${color},0.55)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        next.push(p);
      }
      pulses = next;

      // Nodes
      for (const n of nodes) {
        const r = 1.2 + n.z * 1.6 + n.energy * 2.5;
        if (n.energy > 0.05) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
          g.addColorStop(0, `rgba(56,225,255,${0.35 * n.energy})`);
          g.addColorStop(1, "rgba(56,225,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${200 + n.energy * 55},${215 + n.energy * 40},255,${0.55 + n.z * 0.45})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running && !reduceMotion) raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = (e: PointerEvent) => {
      // Touch has no hover: forget the last touch point once the finger lifts.
      if (e.type === "pointerout" && e.relatedTarget) return;
      mouse.x = mouse.y = -9999;
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") onLeave(e);
    };

    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        raf = requestAnimationFrame(step);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });

    resize();
    raf = requestAnimationFrame(step);
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) requestAnimationFrame(step);
    });
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave);
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
