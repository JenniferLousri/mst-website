"use client";

import { useMotionValue, useSpring } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
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
      className="relative min-h-[80vh] w-full overflow-hidden bg-slate-50/50 py-8 lg:py-12 flex items-center pt-24 lg:pt-28"
    >
      <HeroBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />

      {/* Memberikan margin samping yang lebih lega dengan max-w-6xl dan px-8 lg:px-16 */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <HeroContent />
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}