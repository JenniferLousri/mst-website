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
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-36 text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50/80 via-sky-50/40 to-transparent blur-[140px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-bl from-red-50/40 via-rose-50/20 to-transparent blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-t from-blue-50/60 to-transparent blur-[130px]" />

        <div 
          className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 20%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 20%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
            </span>
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              HOW WE WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 sm:mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
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
            className="mt-3 sm:mt-4 text-sm sm:text-lg font-medium leading-relaxed text-slate-600"
          >
            Kami menerapkan proses kerja yang terstruktur untuk memastikan setiap kebutuhan bisnis ditangani secara profesional, efisien, dan tepat sasaran.
          </motion.p>
        </div>

        <div className="relative mt-12 sm:mt-20 lg:mt-28">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1000 1250"
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
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <path
                d="M 250 80 Q 750 250 750 380 T 250 680 T 750 980 T 250 1200"
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                fill="none"
              />

              <motion.path
                d="M 250 80 Q 750 250 750 380 T 250 680 T 750 980 T 250 1200"
                stroke="url(#curve-gradient)"
                strokeWidth="3.5"
                fill="none"
                style={{ pathLength }}
                filter="url(#glow)"
              />
            </svg>
          </div>

          <div className="pointer-events-none absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-slate-200 lg:hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-[#2563EB] via-red-500 to-[#2563EB]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="space-y-10 sm:space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="ml-10 sm:ml-16 w-auto lg:ml-0 lg:w-1/2">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/80 
                        bg-white/70 p-5 sm:p-8 backdrop-blur-xl shadow-xl ${step.shadowColor}
                        ring-1 ring-slate-900/5 transition-all duration-300
                        hover:bg-white hover:border-slate-200/80 hover:shadow-2xl
                        ${isEven ? "lg:mr-12" : "lg:ml-12"}
                      `}
                    >
                      <span className="pointer-events-none absolute -right-2 -bottom-4 sm:-bottom-6 font-serif text-7xl sm:text-9xl font-bold tracking-tighter text-slate-100 opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:text-blue-50/80 select-none">
                        {step.number}
                      </span>

                      <div className="relative z-10 flex items-center justify-between">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                          className={`
                            flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl 
                            bg-gradient-to-br ${step.accentColor} text-white shadow-lg shadow-blue-500/20
                          `}
                        >
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                        </motion.div>

                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold tracking-wide text-slate-500">
                          Step {step.number}
                        </span>
                      </div>

                      <div className="relative z-10 mt-4 sm:mt-6">
                        <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-base font-normal leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent transition-opacity duration-300 group-hover:via-blue-500/40" />
                    </motion.div>
                  </div>

                  <div className="absolute left-[-8px] sm:left-0 top-4 sm:top-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center lg:static lg:w-auto">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-20" />
                      <span className="relative inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#2563EB] to-blue-700 text-[10px] sm:text-xs font-bold text-white shadow-md">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}