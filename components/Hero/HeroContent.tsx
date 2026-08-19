"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";

export default function HeroContent() {
  // Fungsi Smooth Scroll presisi dengan Offset Navbar (80px)
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
    <div className="flex max-w-2xl flex-col items-start pt-2 sm:pt-4 lg:pt-0">
      
      {/* 1. Badge Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex items-center gap-2 rounded-full border border-red-200/80 
          bg-gradient-to-r from-red-50/90 via-blue-50/50 to-white/80 px-3.5 py-1.5 sm:px-4 
          backdrop-blur-md shadow-xs
        "
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
        </span>
        <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-slate-800 uppercase">
          Tax & Business Consulting
        </span>
      </motion.div>

      {/* 2. Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 sm:mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[54px] lg:leading-[1.12]"
      >
        <span className="font-serif block text-slate-900 font-normal">CV. MITRA SUKSES</span>
        <span className="font-serif bg-gradient-to-r from-[#2563EB] via-blue-700 to-[#E53935] bg-clip-text text-transparent italic">
          TERUS
        </span>
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-3 h-1 rounded-full bg-gradient-to-r from-red-600 via-blue-600 to-transparent"
      />

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
      >
        <strong className="font-semibold text-slate-800">Consulting Firm & Legal Administration</strong>
        <br />
        Mitra terpercaya untuk layanan perpajakan, akuntansi, dan konsultasi bisnis yang membantu Anda mengambil keputusan strategis dengan lebih percaya diri dan patuh regulasi.
      </motion.p>

      {/* 3. CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 sm:mt-8 flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
      >
        {/* Tombol Biru: Konsultasi Sekarang -> #contact */}
        <motion.a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "contact")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full 
            bg-gradient-to-r from-[#2563EB] to-blue-700 px-7 py-3.5 text-sm font-semibold text-white 
            shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 
            hover:from-[#2563EB] hover:via-blue-600 hover:to-[#E53935] 
            hover:shadow-[0_15px_30px_-5px_rgba(229,57,53,0.35)] cursor-pointer
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            Konsultasi Sekarang
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </motion.a>

        {/* Tombol Putih: Lihat Layanan -> #services */}
        <motion.a
          href="#services"
          onClick={(e) => handleScrollTo(e, "services")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-300/80 
            bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md 
            shadow-xs transition-all duration-300 hover:border-red-300 hover:bg-white hover:text-slate-900 cursor-pointer
          "
        >
          Lihat Layanan
        </motion.a>
      </motion.div>

      {/* 4. Glass Trust Highlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="
          mt-8 sm:mt-10 w-full rounded-2xl border border-white/80 bg-white/60 p-3.5 sm:p-4 
          backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05)]
          ring-1 ring-slate-900/5
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="text-base font-extrabold text-[#2563EB] block leading-tight">500+</span>
              <span className="text-[11px] font-medium text-slate-600 leading-tight block">
                Perusahaan Mempercayai Kami
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:border-l sm:border-slate-200/60 sm:pl-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
              <Scale size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">Terpadu</span>
              <span className="text-[11px] font-medium text-slate-600 leading-tight block">
                Pajak, Akuntansi & Legal
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:border-l sm:border-slate-200/60 sm:pl-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
              <Award size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">Lintas Sektor</span>
              <span className="text-[11px] font-medium text-slate-600 leading-tight block">
                Pengalaman Berbagai Industri
              </span>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
}