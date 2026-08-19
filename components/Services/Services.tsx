"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { servicesData, ServiceItem } from "./ServicesData";

// Canvas disesuaikan ke 500px x 500px agar ringkas di layar desktop
const CENTER_X = 250;
const CENTER_Y = 250;

// Koordinat Posisi Kartu (Ringkas 500x500)
const CARD_POSITIONS = [
  { top: "5px",   left: "175px", transform: "none" }, // 01: Atas Tengah
  { top: "95px",  left: "340px", transform: "none" }, // 02: Kanan Atas
  { top: "285px", left: "340px", transform: "none" }, // 03: Kanan Bawah
  { top: "375px", left: "175px", transform: "none" }, // 04: Bawah Tengah
  { top: "285px", left: "10px",  transform: "none" }, // 05: Kiri Bawah
  { top: "95px",  left: "10px",  transform: "none" }, // 06: Kiri Atas
];

// Target Garis SVG
const SVG_TARGETS = [
  { x: 250, y: 70 },
  { x: 340, y: 155 },
  { x: 340, y: 345 },
  { x: 250, y: 430 },
  { x: 160, y: 345 },
  { x: 160, y: 155 },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedService(null);
    const element = document.getElementById("contact");
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50/60 py-16 lg:py-24">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
      <div className="pointer-events-none absolute top-1/4 -left-20 h-[300px] w-[300px] rounded-full bg-sky-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* DIAGRAM WRAPPER */}
          <div className="DiagramWrapper relative w-full flex items-center justify-center lg:col-span-7">
            <div className="hidden sm:block relative w-[500px] h-[500px] shrink-0">
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <div
                  className={`h-40 w-40 rounded-full transition-all duration-500 blur-xl ${
                    isLogoHovered || hoveredServiceIndex !== null
                      ? "bg-gradient-to-tr from-red-500/25 via-sky-400/20 to-blue-600/25 scale-110"
                      : "bg-gradient-to-tr from-red-500/15 to-sky-400/15"
                  }`}
                />
              </div>

              <svg
                className="pointer-events-none absolute inset-0 z-10 h-[500px] w-[500px]"
                viewBox="0 0 500 500"
                fill="none"
              >
                <ellipse
                  cx={CENTER_X}
                  cy={CENTER_Y}
                  rx="160"
                  ry="145"
                  stroke={
                    isLogoHovered || hoveredServiceIndex !== null
                      ? "rgba(220, 38, 38, 0.45)"
                      : "rgba(203, 213, 225, 0.65)"
                  }
                  strokeWidth={isLogoHovered ? "1.5" : "1"}
                  strokeDasharray="5 5"
                  className="transition-colors duration-500"
                />

                {SVG_TARGETS.map((target, idx) => {
                  const isHovered = hoveredServiceIndex === idx;
                  const activeLine = isHovered || isLogoHovered;

                  return (
                    <g key={idx}>
                      <line
                        x1={CENTER_X}
                        y1={CENTER_Y}
                        x2={target.x}
                        y2={target.y}
                        stroke={activeLine ? "#ef4444" : "rgba(148, 163, 184, 0.35)"}
                        strokeWidth={isHovered ? "2" : "1.2"}
                        strokeDasharray={isHovered ? "none" : "3 3"}
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={target.x}
                        cy={target.y}
                        r={isHovered ? "4" : "3"}
                        className={`transition-all duration-300 ${
                          isHovered
                            ? "fill-red-600 animate-ping"
                            : "fill-slate-300"
                        }`}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* LOGO PUSAT */}
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <div
                  onMouseEnter={() => setIsLogoHovered(true)}
                  onMouseLeave={() => setIsLogoHovered(false)}
                  className="pointer-events-auto cursor-pointer group"
                >
                  <div
                    className={`
                      relative flex h-20 w-20 items-center justify-center rounded-full border border-white/80
                      bg-white/90 backdrop-blur-md shadow-xs
                      transition-all duration-500 group-hover:scale-105
                      ${
                        isLogoHovered || hoveredServiceIndex !== null
                          ? "border-red-500/60 shadow-md ring-2 ring-red-500/10"
                          : ""
                      }
                    `}
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white p-1.5 shadow-inner overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="CV Mitra Sukses Terus Logo"
                        width={55}
                        height={55}
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 KARTU LAYANAN - DIGEDEIN RINGKAS */}
              {servicesData.slice(0, 6).map((service, index) => {
                const pos = CARD_POSITIONS[index];
                const Icon = service.icon;
                const sequenceNum = String(index + 1).padStart(2, "0");
                const isHovered = hoveredServiceIndex === index;

                return (
                  <motion.div
                    key={service.id}
                    style={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      transform: pos.transform,
                    }}
                    onMouseEnter={() => setHoveredServiceIndex(index)}
                    onMouseLeave={() => setHoveredServiceIndex(null)}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onClick={() => setSelectedService(service)}
                    className={`
                      z-30 w-[150px] cursor-pointer rounded-xl border bg-white p-3 transition-all duration-300
                      ${
                        isHovered
                          ? "border-red-500 shadow-md ring-1 ring-red-500/20"
                          : "border-slate-200/90 shadow-xs hover:border-red-500"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-widest text-slate-300 group-hover:text-red-500">
                        {sequenceNum}
                      </span>
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-lg transition-colors duration-300 ${
                          isHovered
                            ? "bg-red-50 text-red-600"
                            : "bg-slate-100/80 text-slate-600"
                        }`}
                      >
                        <Icon size={13} strokeWidth={2.2} />
                      </div>
                    </div>

                    <h3
                      className={`mt-1.5 text-[11px] font-bold uppercase tracking-wide leading-tight transition-colors duration-300 ${
                        isHovered ? "text-red-600" : "text-slate-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-slate-500">
                      {service.shortDescription}
                    </p>

                    <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-1.5 text-[10px] font-bold text-slate-400">
                      <span className={isHovered ? "text-red-600" : ""}>Detail</span>
                      <ChevronRight
                        size={12}
                        className={`transition-transform duration-300 ${
                          isHovered ? "translate-x-0.5 text-red-600" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* MOBILE SLIDER */}
            <div className="sm:hidden relative z-10 w-full pt-2">
              <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
                {servicesData.map((service, index) => {
                  const Icon = service.icon;
                  const sequenceNum = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="snap-center shrink-0 w-[220px] cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-xs active:scale-[0.98] transition-transform"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-slate-300">
                          {sequenceNum}
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-600">
                          <Icon size={16} />
                        </div>
                      </div>

                      <h3 className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                        {service.shortDescription}
                      </p>

                      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] font-bold text-red-600">
                        <span>Pelajari Selengkapnya</span>
                        <ChevronRight size={13} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CONTENT WRAPPER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="ContentWrapper relative z-10 flex flex-col justify-center lg:col-span-5"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-red-50/80 px-3 py-1 text-[11px] font-bold text-red-600 shadow-xs mb-3 self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
              LAYANAN UTAMA
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 lg:leading-tight">
              Solusi Profesional yang{" "}
              <span className="italic font-normal text-red-600">Menggerakkan</span>{" "}
              Pertumbuhan Bisnis Anda
            </h2>

            <div className="mt-2.5 h-1 w-10 rounded-full bg-slate-900" />

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
              Kami menyediakan layanan terpadu di bidang pajak, akuntansi, dan legalitas untuk membantu bisnis Anda berkembang dengan aman, efisien, dan berkelanjutan.
            </p>

            <div className="mt-5 flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-xs backdrop-blur-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 font-extrabold text-base">
                6+
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900 block text-xs">
                  Cakupan Sektor Komprehensif
                </span>
                Solusi disesuaikan dengan regulasi dan kepatuhan industri Anda.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Drawer Detail Service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
            />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
              >
                <div className="flex-1 overflow-y-auto">
                  <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
                      aria-label="Tutup Drawer"
                    >
                      <X size={18} />
                    </button>

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400 border border-red-500/30">
                      <selectedService.icon size={20} strokeWidth={2} />
                    </div>

                    <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-red-400">
                      Layanan Profesional
                    </span>

                    <h3 className="mt-1 text-lg font-extrabold uppercase tracking-tight text-white">
                      {selectedService.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                      {selectedService.shortDescription}
                    </p>
                  </div>

                  <div className="p-6 space-y-5">
                    <div>
                      <h4 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        Deskripsi Lengkap
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-700">
                        {selectedService.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        Cakupan Layanan
                      </h4>
                      <ul className="mt-2.5 space-y-2">
                        {selectedService.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 text-red-600 shrink-0"
                            />
                            <span className="text-xs font-medium text-slate-800">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                      <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                        Manfaat Utama
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {selectedService.importance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200/80 bg-white p-4">
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-red-700 active:scale-[0.99] cursor-pointer"
                  >
                    Konsultasi Layanan Ini
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}