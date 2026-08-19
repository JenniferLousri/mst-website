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

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#F3F6FB] via-[#EFF4FA] to-[#F3F6FB] py-16 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUpVariants} className="inline-block">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/90 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-950 uppercase shadow-xs backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              TENTANG MITRA SUKSES TERUS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl lg:leading-tight"
          >
            Membangun Kepercayaan untuk Pertumbuhan Bisnis Berkelanjutan
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-600 sm:leading-relaxed"
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
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-6"
        >
          {values.map((value) => {
            const IconComponent = value.icon;

            return (
              <motion.div
                key={value.id}
                variants={fadeUpVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="
                  group relative flex flex-col justify-between overflow-hidden rounded-xl
                  border border-slate-200/80 bg-white p-5 shadow-xs
                  transition-all duration-300 hover:border-blue-600 hover:shadow-md
                  lg:p-6
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <IconComponent size={18} strokeWidth={2} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-950">
                      {value.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 transition-colors duration-200 group-hover:text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="relative mt-5 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
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