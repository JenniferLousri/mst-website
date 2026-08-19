"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroBackgroundProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function HeroBackground({ mouseX, mouseY }: HeroBackgroundProps) {
  const bgX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);
  const orbitX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const orbitY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-slate-50/50" />
      
      {/* Noise Texture Tipis */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* LARGE AMBIENT RADIAL GRADIENTS (+25% Intensitas) */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0">
        {/* Blue Glow Kiri Bawah (Naik dari opacity 18% ke 26%) */}
        <div className="absolute -bottom-28 -left-16 h-[680px] w-[680px] rounded-full bg-gradient-to-tr from-blue-600/26 via-sky-500/12 to-transparent blur-[130px]" />

        {/* Red Glow Kanan Atas (Naik dari opacity 14% ke 22%) */}
        <div className="absolute -top-28 -right-16 h-[720px] w-[720px] rounded-full bg-gradient-to-bl from-red-500/22 via-rose-400/08 to-transparent blur-[140px]" />

        {/* Warm White Center Glow */}
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[110px]" />
      </motion.div>

      {/* DOTTED GRID PATTERNS */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-35"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 10%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 10%, black 100%)",
        }}
      />

      {/* CURVED ORBIT SVG LINES */}
      <motion.svg
        style={{ x: orbitX, y: orbitY }}
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <ellipse
          cx="1100"
          cy="450"
          rx="520"
          ry="380"
          transform="rotate(-15 1100 450)"
          stroke="url(#red-orbit-grad)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <ellipse
          cx="400"
          cy="550"
          rx="600"
          ry="400"
          transform="rotate(12 400 550)"
          stroke="url(#blue-orbit-grad)"
          strokeWidth="1.5"
        />

        <defs>
          <linearGradient id="red-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E53935" stopOpacity="0" />
            <stop offset="50%" stopColor="#E53935" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="blue-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}