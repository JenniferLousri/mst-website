"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FloatingCard from "./FloatingCard";

const slides = [
  {
    image: "/hero-1.jpg",
    card: {
      title: "Business Advisory",
      subtitle: "Strategic Consulting",
      status: "VERIFIED",
      type: "advisory" as const,
      items: ["Tax Planning", "Financial Review", "Business Growth"],
    },
  },
  {
    image: "/hero-2.webp",
    card: {
      title: "Tax Compliance",
      subtitle: "Professional Service",
      status: "VERIFIED",
      type: "tax" as const,
      items: ["Annual Tax Return", "Monthly Reporting", "Corporate Tax"],
    },
  },
];

export default function HeroImage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[active];

  return (
    <div className="relative flex w-full items-center justify-center lg:w-auto lg:justify-end mt-4 lg:mt-0">
      
      {/* Glow Merah Tipis Spesifik di Belakang Floating Card */}
      <div className="pointer-events-none absolute -left-10 top-1/2 z-10 h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] -translate-y-1/2 rounded-full bg-red-500/18 blur-[70px] sm:blur-[90px]" />

      {/* Floating Card */}
      <div className="absolute left-2 xs:left-0 sm:-left-12 lg:-left-16 top-1/2 z-30 -translate-y-1/2 max-w-[calc(100%-16px)] xs:max-w-none">
        <FloatingCard
          title={current.card.title}
          subtitle={current.card.subtitle}
          status={current.card.status}
          items={current.card.items}
          active={true}
          type={current.card.type}
        />
      </div>

      {/* Frame Foto Utama */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="
          relative z-20 w-full overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/90 
          bg-white/40 p-1.5 sm:p-2 backdrop-blur-md 
          shadow-[0_20px_50px_-10px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/5
        "
      >
        <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={current.image}
                alt={current.card.title}
                width={720}
                height={480}
                priority
                className="h-[320px] xs:h-[380px] sm:h-[500px] w-full lg:w-[680px] object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}