'use client';
import { useEffect, useRef } from 'react';

const ORBS = [
  { cx: 0.22, cy: 0.40, rx: 0.22, ry: 0.16, phase: 0.00, speed: 0.00030, color: [110, 55, 195], alpha: 0.22 },
  { cx: 0.76, cy: 0.58, rx: 0.16, ry: 0.24, phase: 2.10, speed: 0.00021, color: [85,  35, 165], alpha: 0.19 },
  { cx: 0.50, cy: 0.22, rx: 0.28, ry: 0.13, phase: 4.20, speed: 0.00036, color: [150, 90, 225], alpha: 0.18 },
  { cx: 0.62, cy: 0.74, rx: 0.13, ry: 0.22, phase: 1.05, speed: 0.00017, color: [75,  30, 150], alpha: 0.15 },
  { cx: 0.15, cy: 0.70, rx: 0.10, ry: 0.18, phase: 3.30, speed: 0.00025, color: [130, 70, 210], alpha: 0.13 },
];

export default function HeroBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    let raf;

    const draw = (ts) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (const orb of ORBS) {
        const t = ts * orb.speed + orb.phase;
        const x = (orb.cx + Math.sin(t) * orb.rx) * w;
        const y = (orb.cy + Math.cos(t * 0.71) * orb.ry) * h;
        const r = Math.min(w, h) * 0.52;

        const [rc, gc, bc] = orb.color;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0,    `rgba(${rc},${gc},${bc},${orb.alpha})`);
        grad.addColorStop(0.40, `rgba(${rc},${gc},${bc},${(orb.alpha * 0.35).toFixed(3)})`);
        grad.addColorStop(1,    `rgba(${rc},${gc},${bc},0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
