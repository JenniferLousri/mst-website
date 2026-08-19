"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#08182F] text-slate-300 overflow-hidden font-sans">
      {/* 🤌 Horizontal Gradient Divider Line (2px) */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-slate-100 to-red-600 opacity-90" />

      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1e38]/40 to-[#061224]/80" />
      </div>

      {/* FOOTER CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8 lg:pt-20 lg:pb-16"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* KOLOM 1: LOGO & DESKRIPSI */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-md shadow-black/20 ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="CV Mitra Sukses Terus Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight leading-none">
                  CV. Mitra Sukses Terus
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                  Tax • Accounting • Legal • Business
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 font-normal pt-1">
              Mitra terpercaya dalam memberikan solusi perpajakan, akuntansi,
              legalitas, dan konsultasi bisnis bagi perusahaan di Indonesia.
            </p>
          </motion.div>

          {/* KOLOM 2: PERUSAHAAN */}
          <motion.div variants={itemVariants} className="space-y-4 lg:pl-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Tentang Kami", id: "about" },
                { name: "Layanan", id: "services" },
                { name: "Cara Kerja", id: "how-we-work" },
                { name: "Klien", id: "clients" },
                { name: "Kontak", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="inline-block text-slate-400 transition-colors duration-200 hover:text-white hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* KOLOM 3: LAYANAN */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Layanan
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-slate-300 transition-colors">Perpajakan</li>
              <li className="hover:text-slate-300 transition-colors">Akuntansi & Pembukuan</li>
              <li className="hover:text-slate-300 transition-colors">Legalitas Badan Usaha</li>
              <li className="hover:text-slate-300 transition-colors">Transfer Pricing</li>
              <li className="hover:text-slate-300 transition-colors">Konsultasi Manajemen</li>
            </ul>
          </motion.div>

          {/* KOLOM 4: HUBUNGI KAMI */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Hubungi Kami
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-blue-400 shrink-0" />
                <span className="leading-snug">
                  Jl. Cakrawala Barat III No.4,<br />
                  Semarang 50149, Jawa Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +62 813 6010 0705
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <a 
                  href="mailto:mitrasuksesterus12@gmail.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  mitrasuksesterus12@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <Clock size={18} className="mt-0.5 text-red-400 shrink-0" />
                <div className="leading-snug">
                  <span className="block font-medium text-slate-300">
                    Senin – Jumat
                  </span>
                  <span className="text-xs text-slate-400">08.00 – 17.00 WIB</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* DIRECT WHATSAPP ACTION BAR */}
        <motion.div
          variants={itemVariants}
          className="mt-14 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Layanan Pelanggan & Respons Cepat
          </span>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2.5 rounded-full
              bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white
              shadow-lg shadow-emerald-500/20 transition-all duration-300
              hover:bg-[#20bd5a] hover:scale-105 hover:shadow-emerald-500/30
            "
          >
            <MessageCircle size={16} className="fill-white text-[#25D366]" />
            <span>Hubungi via WhatsApp (+62 821 3601 0705)</span>
          </a>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-70 text-slate-400"
        >
          <p>© 2026 CV. Mitra Sukses Terus. All Rights Reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            <span>Designed & Developed by</span>
            <span className="text-white font-semibold">
              CV. Mitra Sukses Terus
            </span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}