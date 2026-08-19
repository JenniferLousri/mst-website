"use client";

import { motion } from "framer-motion";

const clientLogos = [
  { name: "PT", type: "text", label: "PT" },
  { name: "CV", type: "text", label: "CV" },
  { name: "UD", type: "text", label: "UD" },
  { name: "Telkom Indonesia", type: "badge", color: "text-red-600", label: "Telkom Indonesia" },
  { name: "Mandiri", type: "badge", color: "text-blue-800 font-bold italic", label: "mandırı" },
  { name: "BCA", type: "badge", color: "text-blue-700 font-extrabold", label: "BCA" },
];

export default function ClientLogos() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {clientLogos.map((client, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -3, scale: 1.03 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="
            group flex h-10 items-center justify-center rounded-xl border border-white/80 
            bg-white/50 px-4 py-2 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] 
            backdrop-blur-md transition-all duration-300 hover:border-blue-300/80 
            hover:bg-white/90 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.12)]
          "
        >
          <span
            className={`
              text-xs font-semibold tracking-wide transition-all duration-300 
              grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 
              ${client.color || "text-slate-700"}
            `}
          >
            {client.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}