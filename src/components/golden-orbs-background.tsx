"use client";

import { useEffect, useRef } from "react";

export default function GoldenOrbsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        mouseRef.current.x = t.clientX;
        mouseRef.current.y = t.clientY;
      }
    };
    window.addEventListener("touchmove", handleTouch, { passive: true });

    const orbs = [
      { x: 0, y: 0, radius: 500, color: "212, 168, 83", speedX: 0.15, speedY: 0.1, baseOpacity: 0.25 },
      { x: 0, y: 0, radius: 400, color: "232, 195, 90", speedX: -0.12, speedY: 0.08, baseOpacity: 0.2 },
      { x: 0, y: 0, radius: 350, color: "245, 197, 66", speedX: 0.18, speedY: -0.14, baseOpacity: 0.18 },
      { x: 0, y: 0, radius: 300, color: "184, 134, 11", speedX: -0.08, speedY: -0.11, baseOpacity: 0.15 },
    ];

    orbs.forEach((o) => {
      o.x = Math.random() * canvas.width;
      o.y = Math.random() * canvas.height;
    });

    let id: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const orb of orbs) {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        const dx = mouseRef.current.x - orb.x;
        const dy = mouseRef.current.y - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = orb.radius * 2;
        let opacityBoost = 0;
        if (dist < maxDist) {
          opacityBoost = (1 - dist / maxDist) * 0.15;
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.baseOpacity + opacityBoost})`);
        gradient.addColorStop(0.4, `rgba(${orb.color}, ${(orb.baseOpacity + opacityBoost) * 0.35})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      }

      id = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      if (id) cancelAnimationFrame(id);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
