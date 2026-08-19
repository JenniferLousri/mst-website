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
      <div className="pointer-events-none absolute -left-6 top-1/2 z-10 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-red-500/18 blur-[60px]" />

      <div className="absolute -left-3 sm:-left-6 lg:-left-6 bottom-4 sm:bottom-6 z-30 max-w-[calc(100%-16px)] xs:max-w-none">
        <FloatingCard
          title={current.card.title}
          subtitle={current.card.subtitle}
          status={current.card.status}
          items={current.card.items}
          active={true}
          type={current.card.type}
        />
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="
          relative z-20 w-full overflow-hidden rounded-[24px] lg:rounded-[28px] border border-white/90 
          bg-white/40 p-1.5 backdrop-blur-md 
          shadow-[0_20px_50px_-10px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/5
        "
      >
        <div className="relative overflow-hidden rounded-[20px] lg:rounded-[24px] w-full">
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
                width={560}
                height={380}
                priority
                className="h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[390px] w-full lg:w-[460px] xl:w-[480px] object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}