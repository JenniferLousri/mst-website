"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Building2,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Loader2,
  Info,
  X,
} from "lucide-react";
import { OFFICIAL_WA_NUMBER } from "@/lib/whatsapp";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stats = [
  { icon: Users, value: "100+", label: "Klien Korporasi" },
  { icon: Award, value: "99%", label: "Tingkat Kepuasan" },
  { icon: ShieldCheck, value: "100%", label: "Kepatuhan Hukum" },
  { icon: Building2, value: "10+", label: "Tahun Pengalaman" },
];

const faqs = [
  {
    question: "Berapa lama proses konsultasi awal perpajakan & akuntansi?",
    answer:
      "Konsultasi awal biasanya berlangsung selama 30–60 menit via WhatsApp, Online Meeting, atau tatap muka di kantor kami di Semarang untuk menganalisis kebutuhan spesifik perusahaan Anda.",
  },
  {
    question: "Apakah layanan konsultasi dapat disesuaikan dengan skala usaha kami?",
    answer:
      "Ya, kami melayani berbagai skala usaha mulai dari UMKM, Perusahaan Berkembang, hingga Korporasi besar dengan solusi paket yang fleksibel.",
  },
  {
    question: "Bagaimana sistem kerahasiaan data keuangan dan pajak kami?",
    answer:
      "Kerahasiaan data adalah prioritas utama kami. Seluruh dokumen dan informasi finansial Anda dilindungi oleh Perjanjian Kerahasiaan (NDA) yang mengikat secara hukum.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan inquiry");
      }

      setIsModalOpen(true);
    } catch (error) {
      console.error("Gagal mengirim data ke database:", error);
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenWhatsApp = () => {
    const waMessage = `Halo CV Mitra Sukses Terus.

Saya mendapatkan informasi dari website dan ingin berkonsultasi.

Nama:
${formData.name}

Perusahaan:
${formData.company || "-"}

Email:
${formData.email}

Nomor WhatsApp:
${formData.phone}

Layanan:
${formData.service}

Pesan:
${formData.message}

Terima kasih.`;

    const waUrl = `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodeURIComponent(
      waMessage
    )}`;

    window.open(waUrl, "_blank");
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const getQuickWaLink = () => {
    const quickMessage = `Halo CV Mitra Sukses Terus.

Saya ingin berkonsultasi mengenai layanan perusahaan.

Terima kasih.`;
    return `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodeURIComponent(
      quickMessage
    )}`;
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="relative bg-slate-900/5 py-12 sm:py-16 lg:py-20 overflow-hidden font-sans">
      
      {/* ================================================== */}
      {/* BACKGROUND DECORATION ASLI (100% DIKEMBALIKAN) */}
      {/* ================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Mesh Gradient 1: Smooth Blue Light from Bottom-Left */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-sky-300/10 blur-[130px]"
        />

        {/* Mesh Gradient 2: Soft Red Light from Top-Right */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-red-500/25 via-rose-400/15 to-amber-300/10 blur-[140px]"
        />

        {/* Radial Glow Putih di belakang Form Area */}
        <div className="absolute top-1/3 right-10 h-[500px] w-[600px] rounded-full bg-white/60 blur-[100px]" />

        {/* Dotted Pattern Tipis */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12]"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Curved SVG Lines Background Decorative */}
        <svg
          className="absolute inset-0 h-full w-full stroke-slate-300/40 opacity-30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="contact-grid"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        
        {/* HEADER SECTION (UKURAN DIKECILIN) */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-red-600 mb-3 shadow-xs backdrop-blur-md"
          >
            <Sparkles size={12} className="text-red-600 animate-pulse" />
            <span>Hubungi Kami</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-tight"
          >
            Mari Diskusikan Masa Depan & Legalitas Bisnis Anda
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-600"
          >
            Konsultasikan kebutuhan pajak, pembukuan akuntansi, hingga legalitas perusahaan Anda bersama konsultan berpengalaman dari CV. Mitra Sukses Terus.
          </motion.p>
        </div>

        {/* STATS HIGHLIGHT GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 p-3.5 sm:p-4 text-center shadow-xs backdrop-blur-md transition-all hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-2">
                <stat.icon size={16} />
              </div>
              <span className="text-xl font-extrabold text-slate-900">{stat.value}</span>
              <span className="mt-0.5 text-[11px] font-semibold text-slate-500">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE: INFORMASI KANTOR RESMI */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="lg:col-span-5 space-y-4"
          >
            {/* CARD INFO UTAMA */}
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 shadow-lg shadow-slate-900/5 backdrop-blur-md space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  Kantor Operasional
                </h3>
                <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                  CV. Mitra Sukses Terus — Semarang, Jawa Tengah
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                {/* ALAMAT */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 shadow-xs">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Alamat Utama</h4>
                    <p className="mt-0.5 leading-relaxed text-slate-600">
                      Jl. Cakrawala Barat III No.4,<br />
                      Semarang 50149, Jawa Tengah, Indonesia
                    </p>
                  </div>
                </div>

                {/* TELEPON & WA */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Telepon / WhatsApp</h4>
                    <a
                      href={getQuickWaLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
                    >
                      +62 821 3601 0705
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Email Resmi</h4>
                    <a
                      href="mailto:mitrasuksesterus12@gmail.com"
                      className="mt-0.5 inline-block font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      mitrasuksesterus12@gmail.com
                    </a>
                  </div>
                </div>

                {/* JAM OPERASIONAL */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 shadow-xs">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Jam Kerja Kantor</h4>
                    <p className="mt-0.5 leading-relaxed text-slate-600">
                      Senin – Jumat • <span className="font-bold text-slate-900">08.00 – 17.00 WIB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU HIJAU WHATSAPP */}
            <a
              href={getQuickWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between rounded-2xl sm:rounded-3xl
                bg-emerald-500 p-4 sm:p-5 text-white shadow-md shadow-emerald-500/20
                transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30
                hover:-translate-y-0.5 cursor-pointer
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                  <MessageCircle size={22} className="fill-white text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Butuh Respon Cepat?</h4>
                  <p className="text-[11px] text-emerald-100 font-medium mt-0.5">Chat langsung via WhatsApp resmi</p>
                </div>
              </div>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT SIDE: FORMULIR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-5 sm:p-7 shadow-lg shadow-slate-900/5 backdrop-blur-md"
          >
            <div className="mb-5">
              <h3 className="text-xl font-bold text-slate-900">
                Kirim Pesan Konsultasi
              </h3>
              <p className="mt-0.5 text-xs text-slate-500">
                Isi formulir di bawah ini, tim kami akan merespons maksimal dalam 1x24 jam kerja.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nama Perusahaan / PT / CV
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Contoh: PT Sukses Bersama"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nomor WhatsApp / Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08123456789"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Layanan yang Diperlukan *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10 cursor-pointer"
                >
                  <option value="">-- Pilih Layanan --</option>
                  <option value="Perpajakan">Layanan Perpajakan (SPT, Tax Audit, PPh/PPN)</option>
                  <option value="Akuntansi & Pembukuan">Akuntansi & Laporan Keuangan</option>
                  <option value="Legalitas Badan Usaha">Pendirian & Legalitas Badan Usaha</option>
                  <option value="Transfer Pricing">Dokumentasi Transfer Pricing (TP Doc)</option>
                  <option value="Konsultasi Manajemen">Konsultasi Manajemen & Bisnis</option>
                  <option value="Lainnya">Lainnya / Konsultasi Umum</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Detail Pesan / Pertanyaan *
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan gambaran singkat kebutuhan atau kendala perusahaan Anda..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full inline-flex items-center justify-center gap-2 rounded-xl
                  bg-red-600 px-6 py-3 text-xs sm:text-sm font-bold text-white
                  shadow-md shadow-red-600/20 transition-all duration-300
                  hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30
                  hover:-translate-y-0.5 active:translate-y-0 cursor-pointer
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Memproses Data...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Kirim Permintaan Konsultasi</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* EMBED MAPS SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mt-10 rounded-2xl overflow-hidden border border-slate-200/80 bg-white/90 p-2 shadow-lg shadow-slate-900/5 backdrop-blur-md"
        >
          <div className="relative h-[280px] sm:h-[320px] w-full rounded-xl overflow-hidden bg-slate-100">
            <iframe
              title="Peta Lokasi CV Mitra Sukses Terus"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.334469730303!2d110.3842133!3d-6.9698282!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f4d34f2d2bb7%3A0x6b63d9172bf4db24!2sJl.%20Cakrawala%20Barat%20III%20No.4%2C%20Tawangsari%2C%20Kec.%20Semarang%20Barat%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050149!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* FAQ ACCORDION SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Jawaban ringkas seputar proses konsultasi dan kerjasama dengan kami
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/80 bg-white/90 overflow-hidden shadow-xs backdrop-blur-md transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-4 text-left text-xs sm:text-sm font-bold text-slate-900 outline-none focus:bg-slate-50 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-red-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 p-4 pt-2 text-xs sm:text-sm leading-relaxed text-slate-600 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* MODERN SUCCESS DIALOG / MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[440px] rounded-2xl bg-white p-5 sm:p-6 shadow-2xl border border-slate-100 text-center text-slate-900"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                aria-label="Tutup Dialog"
              >
                <X size={18} />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-500 mb-4 shadow-inner">
                <CheckCircle2 size={40} className="stroke-[2.2]" />
              </div>

              <h3
                id="modal-title"
                className="text-xl font-bold tracking-tight text-slate-900"
              >
                Permintaan Berhasil Dikirim
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Terima kasih telah menghubungi CV Mitra Sukses Terus. Permintaan konsultasi Anda telah berhasil kami terima. Tim kami akan segera meninjau data Anda dan menghubungi Anda melalui WhatsApp atau email.
              </p>

              <div className="mt-4 rounded-xl bg-sky-50/80 border border-sky-100 p-3 text-left flex items-start gap-2.5 text-sky-900">
                <Info size={18} className="shrink-0 text-sky-600 mt-0.5" />
                <div className="text-[11px] leading-relaxed space-y-0.5">
                  <p className="font-bold text-sky-950">
                    Jam Operasional
                  </p>
                  <p className="font-semibold text-sky-900">
                    Senin–Jumat • 08.00–17.00 WIB
                  </p>
                  <p className="text-sky-700/90 pt-1 border-t border-sky-200/60">
                    Permintaan di luar jam operasional diproses pada hari kerja berikutnya.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="
                    w-full py-2.5 px-3 rounded-lg text-xs font-bold text-slate-700
                    bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer
                    outline-none
                  "
                >
                  Tutup
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="
                    w-full py-2.5 px-3 rounded-lg text-xs font-bold text-white
                    bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20
                    transition-all cursor-pointer flex items-center justify-center gap-1.5
                    outline-none
                  "
                >
                  <MessageCircle size={15} className="fill-white" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}