"use client";

import { motion, Variants } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

type ValueCard = {
  id: string;
  icon: typeof Award;
  title: string;
  description: string;
};

const values: ValueCard[] = [
  {
    id: "expertise",
    icon: Award,
    title: "Profesionalisme Berpengalaman",
    description:
      "Dukungan tim ahli profesional yang andal dan berpengalaman dalam menangani kebutuhan bisnis Anda.",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Integritas & Kepatuhan",
    description:
      "Setiap solusi disusun sesuai dengan regulasi perpajakan dan standar etika hukum yang berlaku.",
  },
  {
    id: "client-centered",
    icon: Users,
    title: "Berorientasi pada Klien",
    description:
      "Memahami keunikan setiap lini bisnis untuk menghadirkan pendekatan layanan yang tepat sasaran.",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Pertumbuhan Berkelanjutan",
    description:
      "Membantu memperkuat fondasi legalitas dan keuangan demi kelangsungan bisnis jangka panjang.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

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

export default function About() {
  return (
    // ID 'about' ditambahkan di sini
    <section id="about" className="relative bg-gradient-to-b from-[#F3F6FB] via-[#EFF4FA] to-[#F3F6FB] py-28 lg:py-40">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUpVariants} className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/90 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-950 uppercase shadow-xs backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              TENTANG MITRA SUKSES TERUS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]"
          >
            Membangun Kepercayaan untuk Pertumbuhan Bisnis Berkelanjutan
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="mt-6 space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-7"
          >
            <p>
              CV. Mitra Sukses Terus hadir mendampingi perusahaan dalam mengelola
              perpajakan, akuntansi, dan kepatuhan legalitas secara strategis dan terukur.
            </p>
            <p className="text-slate-500">
              Kami berkomitmen membangun kemitraan jangka panjang melalui solusi praktis
              yang memastikan keamanan regulasi serta kelancaran operasional usaha Anda.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:gap-8"
        >
          {values.map((value) => {
            const IconComponent = value.icon;

            return (
              <motion.div
                key={value.id}
                variants={fadeUpVariants}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
                  group relative flex flex-col justify-between overflow-hidden rounded-2xl
                  border border-slate-200/80 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)]
                  transition-all duration-300 hover:border-blue-600 hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.15)]
                  lg:p-8
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                      <IconComponent size={22} strokeWidth={2} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-950">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500 transition-colors duration-200 group-hover:text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="relative mt-7 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}