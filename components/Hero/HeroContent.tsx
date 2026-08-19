"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";

export default function HeroContent() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <div className="flex max-w-lg flex-col items-start pt-1 sm:pt-2 lg:pt-0">
      {/* BADGE TOP (COMPACT) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex items-center gap-1.5 rounded-full border border-red-200/80 
          bg-gradient-to-r from-red-50/90 via-blue-50/50 to-white/80 px-2.5 py-0.5 sm:px-3 
          backdrop-blur-md shadow-xs
        "
      >
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600" />
        </span>
        <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider text-slate-800 uppercase">
          Tax & Business Consulting
        </span>
      </motion.div>

      {/* MAIN HEADLINE (DIBERIKAN UKURAN LEBIH BESAR & TEGAS) */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.12]"
      >
        <span className="font-serif block text-slate-900 font-normal">CV. MITRA SUKSES</span>
        <span className="font-serif bg-gradient-to-r from-[#2563EB] via-blue-700 to-[#E53935] bg-clip-text text-transparent italic">
          TERUS
        </span>
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "56px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-2.5 h-1 rounded-full bg-gradient-to-r from-red-600 via-blue-600 to-transparent"
      />

      {/* DESKRIPSI (TETAP COMPACT) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 max-w-md"
      >
        <strong className="font-semibold text-slate-800">Consulting Firm & Legal Administration</strong>
        <br />
        Mitra terpercaya untuk layanan perpajakan, akuntansi, dan konsultasi bisnis yang membantu Anda mengambil keputusan strategis dengan lebih percaya diri dan patuh regulasi.
      </motion.p>

      {/* ACTION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 sm:mt-5 flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
      >
        <motion.a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "contact")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full 
            bg-gradient-to-r from-[#2563EB] to-blue-700 px-5 py-2.5 text-xs font-semibold text-white 
            shadow-[0_8px_20px_-5px_rgba(37,99,235,0.35)] transition-all duration-300 
            hover:from-[#2563EB] hover:via-blue-600 hover:to-[#E53935] 
            hover:shadow-[0_12px_25px_-5px_rgba(229,57,53,0.3)] cursor-pointer
          "
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Konsultasi Sekarang
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </motion.a>

        <motion.a
          href="#services"
          onClick={(e) => handleScrollTo(e, "services")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300/80 
            bg-white/70 px-5 py-2.5 text-xs font-semibold text-slate-700 backdrop-blur-md 
            shadow-xs transition-all duration-300 hover:border-red-300 hover:bg-white hover:text-slate-900 cursor-pointer
          "
        >
          Lihat Layanan
        </motion.a>
      </motion.div>

      {/* STATS CARD BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="
          mt-5 sm:mt-6 w-full rounded-xl border border-white/80 bg-white/60 p-2.5 sm:p-3 
          backdrop-blur-xl shadow-[0_8px_25px_-5px_rgba(15,23,42,0.04)]
          ring-1 ring-slate-900/5
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 border border-red-100">
              <ShieldCheck size={14} />
            </div>
            <div>
              <span className="text-xs font-extrabold text-[#2563EB] block leading-tight">500+</span>
              <span className="text-[10px] font-medium text-slate-600 leading-tight block">
                Perusahaan Mempercayai Kami
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:border-l sm:border-slate-200/60 sm:pl-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 border border-red-100">
              <Scale size={14} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-900 block leading-tight">Terpadu</span>
              <span className="text-[10px] font-medium text-slate-600 leading-tight block">
                Pajak, Akuntansi & Legal
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:border-l sm:border-slate-200/60 sm:pl-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 border border-red-100">
              <Award size={14} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-900 block leading-tight">Lintas Sektor</span>
              <span className="text-[10px] font-medium text-slate-600 leading-tight block">
                Pengalaman Berbagai Industri
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}