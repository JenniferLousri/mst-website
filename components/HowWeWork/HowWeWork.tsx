"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  MessageSquare, 
  FileSearch, 
  Lightbulb, 
  Rocket, 
  ShieldCheck 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Konsultasi Awal",
    description: "Memahami kebutuhan, tujuan, dan tantangan bisnis melalui diskusi awal.",
    icon: MessageSquare,
    accentColor: "from-blue-600 to-blue-500",
    shadowColor: "shadow-blue-500/10",
  },
  {
    number: "02",
    title: "Analisis Kebutuhan",
    description: "Melakukan evaluasi terhadap kondisi bisnis dan mengidentifikasi peluang terbaik.",
    icon: FileSearch,
    accentColor: "from-blue-700 to-indigo-600",
    shadowColor: "shadow-indigo-500/10",
  },
  {
    number: "03",
    title: "Penyusunan Solusi",
    description: "Merancang strategi dan solusi yang disesuaikan dengan kebutuhan perusahaan.",
    icon: Lightbulb,
    accentColor: "from-red-600 to-rose-500",
    shadowColor: "shadow-red-500/15",
  },
  {
    number: "04",
    title: "Implementasi",
    description: "Melaksanakan solusi secara profesional sesuai rencana yang telah disepakati.",
    icon: Rocket,
    accentColor: "from-blue-600 to-sky-500",
    shadowColor: "shadow-sky-500/10",
  },
  {
    number: "05",
    title: "Pendampingan",
    description: "Melakukan evaluasi, monitoring, dan pendampingan untuk memastikan hasil yang optimal.",
    icon: ShieldCheck,
    accentColor: "from-blue-800 to-blue-600",
    shadowColor: "shadow-blue-600/10",
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section 
      id="how-we-work"
      ref={containerRef}
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 text-slate-900"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-50/80 via-sky-50/40 to-transparent blur-[140px]" />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-bl from-red-50/40 via-rose-50/20 to-transparent blur-[120px]" />

        <div 
          className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 20%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 20%, black 100%)",
          }}
        />
      </div>

      {/* MATCH EXACT NAVBAR CONTAINER */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        
        {/* HEADER SECTION (DIKECILIN) */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
            </span>
            <span className="text-[11px] font-bold tracking-widest text-blue-700 uppercase">
              HOW WE WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            <span className="font-serif italic font-normal text-slate-800">Proses Kerja</span>{" "}
            <span className="font-serif bg-gradient-to-r from-[#2563EB] to-blue-800 bg-clip-text text-transparent">
              Kami
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-600"
          >
            Kami menerapkan proses kerja yang terstruktur untuk memastikan setiap kebutuhan bisnis ditangani secara profesional, efisien, dan tepat sasaran.
          </motion.p>
        </div>

        {/* TIMELINE SECTION (DI-COMPACT) */}
        <div className="relative mt-8 sm:mt-12 lg:mt-14">
          
          {/* CURVE SVG LINE (DESKTOP) - ADJUSTED FOR COMPACT TIMELINE */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1000 850"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#E53935" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <path
                d="M 500 40 C 800 110, 800 170, 500 210 C 200 250, 200 350, 500 380 C 800 410, 800 520, 500 550 C 200 580, 200 680, 500 720"
                stroke="#e2e8f0"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
              />

              <motion.path
                d="M 500 40 C 800 110, 800 170, 500 210 C 200 250, 200 350, 500 380 C 800 410, 800 520, 500 550 C 200 580, 200 680, 500 720"
                stroke="url(#curve-gradient)"
                strokeWidth="3"
                fill="none"
                style={{ pathLength }}
                filter="url(#glow)"
              />
            </svg>
          </div>

          {/* VERTICAL LINE (MOBILE & TABLET) */}
          <div className="pointer-events-none absolute left-4 sm:left-5 top-4 bottom-4 w-0.5 bg-slate-200 lg:hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-[#2563EB] via-red-500 to-[#2563EB]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          {/* STEPS LIST */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-0"
                >
                  
                  {/* CARD ITEM (BOX COMPACT) */}
                  <div 
                    className={`
                      ml-9 sm:ml-12 lg:ml-0 lg:col-span-5
                      ${isEven ? "lg:col-start-8 lg:order-2" : "lg:col-start-1 lg:order-1"}
                    `}
                  >
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/80 
                        bg-white/80 p-4 sm:p-5 backdrop-blur-xl shadow-md ${step.shadowColor}
                        ring-1 ring-slate-900/5 transition-all duration-300
                        hover:bg-white hover:border-slate-200/80 hover:shadow-lg max-w-md
                        ${isEven ? "lg:ml-auto" : "lg:mr-auto"}
                      `}
                    >
                      <span className="pointer-events-none absolute -right-1 -bottom-3 font-serif text-6xl sm:text-7xl font-bold tracking-tighter text-slate-100 opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:text-blue-50/80 select-none">
                        {step.number}
                      </span>

                      <div className="relative z-10 flex items-center justify-between">
                        <div
                          className={`
                            flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl 
                            bg-gradient-to-br ${step.accentColor} text-white shadow-md shadow-blue-500/10
                          `}
                        >
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                        </div>

                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold tracking-wide text-slate-500">
                          Step {step.number}
                        </span>
                      </div>

                      <div className="relative z-10 mt-3">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent transition-opacity duration-300 group-hover:via-blue-500/40" />
                    </motion.div>
                  </div>

                  {/* CENTER POINT / INDICATOR */}
                  <div 
                    className="
                      absolute left-[-10px] sm:left-[-6px] top-3 sm:top-4 
                      lg:static lg:col-span-2 lg:flex lg:justify-center lg:items-center lg:order-2
                    "
                  >
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center z-10"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-20" />
                      <span className="relative inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#2563EB] to-blue-700 text-[10px] font-bold text-white shadow-xs">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* EMPTY BALANCING COLUMN FOR DESKTOP GRID */}
                  <div 
                    className={`
                      hidden lg:block lg:col-span-5
                      ${isEven ? "lg:order-1" : "lg:order-3"}
                    `} 
                  />

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}