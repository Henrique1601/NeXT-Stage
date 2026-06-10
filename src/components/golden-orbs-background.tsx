"use client";

import { useEffect, useRef } from "react";

export default function GoldenOrbsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const orbs = [
      { x: 0, y: 0, radius: 500, color: "212, 168, 83", speedX: 0.15, speedY: 0.1 },
      { x: 0, y: 0, radius: 400, color: "232, 195, 90", speedX: -0.12, speedY: 0.08 },
      { x: 0, y: 0, radius: 350, color: "245, 197, 66", speedX: 0.18, speedY: -0.14 },
      { x: 0, y: 0, radius: 300, color: "184, 134, 11", speedX: -0.08, speedY: -0.11 },
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

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.25)`);
        gradient.addColorStop(0.4, `rgba(${orb.color}, 0.08)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      }

      id = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
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
