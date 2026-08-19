"use client";

import { useMotionValue, useSpring } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  // Mouse position tracking untuk Micro Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] w-full overflow-hidden bg-slate-50/50 py-12 lg:py-20 flex items-center pt-28"
    >
      {/* 1. Multi-layered Ambient Background */}
      <HeroBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />

      {/* 2. Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column Kiri: Content & Branding (Span 6) */}
          <div className="lg:col-span-6">
            <HeroContent />
          </div>

          {/* Column Kanan: Image Frame & Floating Glass Card (Span 6) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroImage />
          </div>

        </div>
      </div>
    </section>
  );
}