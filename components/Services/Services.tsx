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

// Canvas diperluas ke 680px x 680px agar ruang sangat lega
const CENTER_X = 340;
const CENTER_Y = 340;

// Koordinat Posisi Kartu (Dilebarkan secara radial, tidak menumpuk)
const CARD_POSITIONS = [
  { top: "10px",  left: "250px", transform: "none" }, // 01: Atas Tengah
  { top: "140px", left: "475px", transform: "none" }, // 02: Kanan Atas
  { top: "380px", left: "475px", transform: "none" }, // 03: Kanan Bawah
  { top: "510px", left: "250px", transform: "none" }, // 04: Bawah Tengah
  { top: "380px", left: "25px",  transform: "none" }, // 05: Kiri Bawah
  { top: "140px", left: "25px",  transform: "none" }, // 06: Kiri Atas
];

// Target Garis SVG yang mengarah ke pusat kartu
const SVG_TARGETS = [
  { x: 340, y: 110 },
  { x: 475, y: 220 },
  { x: 475, y: 460 },
  { x: 340, y: 570 },
  { x: 205, y: 460 },
  { x: 205, y: 220 },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50/60 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
      <div className="pointer-events-none absolute top-1/4 -left-20 h-[450px] w-[450px] rounded-full bg-sky-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(680px,1fr)_minmax(420px,480px)] lg:gap-[40px]">
          
          {/* DIAGRAM WRAPPER */}
          <div className="DiagramWrapper relative w-full flex items-center justify-center lg:justify-start">
            <div className="hidden sm:block relative w-[680px] h-[680px] shrink-0">
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <div
                  className={`h-56 w-56 rounded-full transition-all duration-500 blur-2xl ${
                    isLogoHovered || hoveredServiceIndex !== null
                      ? "bg-gradient-to-tr from-red-500/25 via-sky-400/20 to-blue-600/25 scale-110"
                      : "bg-gradient-to-tr from-red-500/15 to-sky-400/15"
                  }`}
                />
              </div>

              <svg
                className="pointer-events-none absolute inset-0 z-10 h-[680px] w-[680px]"
                viewBox="0 0 680 680"
                fill="none"
              >
                {/* Lingkaran Garis Putus-Putus yang Diperbesar */}
                <ellipse
                  cx={CENTER_X}
                  cy={CENTER_Y}
                  rx="220"
                  ry="200"
                  stroke={
                    isLogoHovered || hoveredServiceIndex !== null
                      ? "rgba(220, 38, 38, 0.45)"
                      : "rgba(203, 213, 225, 0.65)"
                  }
                  strokeWidth={isLogoHovered ? "2" : "1.2"}
                  strokeDasharray="6 6"
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
                        strokeWidth={isHovered ? "2.5" : "1.5"}
                        strokeDasharray={isHovered ? "none" : "4 4"}
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={target.x}
                        cy={target.y}
                        r={isHovered ? "5" : "3.5"}
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
                      relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/80
                      bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.1)]
                      transition-all duration-500 group-hover:scale-105
                      ${
                        isLogoHovered || hoveredServiceIndex !== null
                          ? "border-red-500/60 shadow-[0_16px_40px_rgba(220,38,38,0.2)] ring-4 ring-red-500/10"
                          : ""
                      }
                    `}
                  >
                    <div
                      className={`absolute -inset-1.5 rounded-full bg-gradient-to-r from-red-500 via-sky-400 to-blue-600 opacity-20 transition-all duration-500 blur-md ${
                        isLogoHovered || hoveredServiceIndex !== null
                          ? "opacity-60 scale-105 animate-pulse"
                          : ""
                      }`}
                    />
                    <div className="relative flex h-22 w-22 items-center justify-center rounded-full bg-white/95 p-2 shadow-inner overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="CV Mitra Sukses Terus Logo"
                        width={75}
                        height={75}
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 KARTU LAYANAN - JUDUL DI-CAPS LOCK & DIGEDEIN */}
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
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onClick={() => setSelectedService(service)}
                    className={`
                      z-30 w-[180px] cursor-pointer rounded-2xl border bg-white p-4 transition-all duration-300
                      ${
                        isHovered
                          ? "border-red-500 shadow-[0_16px_32px_rgba(220,38,38,0.18)] ring-2 ring-red-500/20"
                          : "border-slate-200/90 shadow-[0_6px_16px_rgba(15,23,42,0.06)] hover:border-red-500"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-red-500">
                        {sequenceNum}
                      </span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors duration-300 ${
                          isHovered
                            ? "bg-red-50 text-red-600"
                            : "bg-slate-100/80 text-slate-600"
                        }`}
                      >
                        <Icon size={16} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* JUDUL LAYANAN (CAPS LOCK & DIGEDEIN & TEBAL) */}
                    <h3
                      className={`mt-2.5 text-xs sm:text-sm font-black uppercase tracking-wide leading-snug transition-colors duration-300 ${
                        isHovered ? "text-red-600" : "text-slate-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                      {service.shortDescription}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] font-extrabold text-slate-400">
                      <span className={isHovered ? "text-red-600" : ""}>Detail</span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-300 ${
                          isHovered ? "translate-x-1 text-red-600" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* MOBILE TAMPILAN SLIDER */}
            <div className="sm:hidden relative z-10 w-full pt-2">
              <div className="flex gap-3.5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
                {servicesData.map((service, index) => {
                  const Icon = service.icon;
                  const sequenceNum = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="snap-center shrink-0 w-[240px] xs:w-[260px] cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 xs:p-5 shadow-sm active:scale-[0.98] transition-transform"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-black text-slate-300">
                          {sequenceNum}
                        </span>
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-red-50 text-red-600">
                          <Icon size={18} />
                        </div>
                      </div>

                      <h3 className="mt-2.5 text-xs sm:text-base font-black uppercase tracking-wide text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {service.shortDescription}
                      </p>

                      <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-2.5 text-xs font-bold text-red-600">
                        <span>Pelajari Selengkapnya</span>
                        <ChevronRight size={15} />
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
            className="ContentWrapper relative z-10 flex flex-col justify-center max-w-[520px] justify-self-end lg:pl-[10px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50/80 px-3.5 py-1 text-xs font-bold text-red-600 shadow-xs mb-3 sm:mb-4 self-start">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              LAYANAN UTAMA
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 lg:leading-[1.18]">
              Solusi Profesional yang{" "}
              <span className="italic font-normal text-red-600">Menggerakkan</span>{" "}
              Pertumbuhan Bisnis Anda
            </h2>

            <div className="mt-3 sm:mt-4 h-1 w-12 rounded-full bg-slate-900" />

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-600">
              Kami menyediakan layanan terpadu di bidang pajak, akuntansi, dan legalitas untuk membantu bisnis Anda berkembang dengan aman, efisien, dan berkelanjutan.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 sm:p-5 shadow-xs backdrop-blur-xs">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 font-black text-lg sm:text-xl">
                6+
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                  Cakupan Sektor Komprehensif
                </span>
                Solusi disesuaikan dengan regulasi dan kepatuhan industri Anda.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide-over Drawer Detail Service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
            />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-xl bg-white shadow-2xl flex flex-col justify-between"
              >
                <div className="flex-1 overflow-y-auto">
                  <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 text-white">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-5 right-5 sm:top-6 sm:right-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
                      aria-label="Tutup Drawer"
                    >
                      <X size={20} />
                    </button>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
                      <selectedService.icon size={24} strokeWidth={2} />
                    </div>

                    <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-red-400">
                      Layanan Profesional
                    </span>

                    <h3 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                      {selectedService.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedService.shortDescription}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                    <div>
                      <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                        Deskripsi Lengkap
                      </h4>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                        {selectedService.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                        Cakupan Layanan
                      </h4>
                      <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                        {selectedService.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 text-red-600 shrink-0"
                            />
                            <span className="text-xs sm:text-sm font-medium text-slate-800">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5">
                      <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                        Manfaat Utama
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                        {selectedService.importance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200/80 bg-white p-4 sm:p-6">
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-red-600/20 transition-all duration-200 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.99] cursor-pointer"
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