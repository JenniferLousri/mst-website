"use client";

import { motion } from "framer-motion";
import { Briefcase, FileCheck, CheckCircle2 } from "lucide-react";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  status: string;
  items: string[];
  active?: boolean;
  type?: "advisory" | "tax";
}

export default function FloatingCard({
  title,
  subtitle,
  items,
  type = "advisory",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="
        relative w-[280px] sm:w-[320px] rounded-2xl border border-white/80 
        bg-white/70 p-5 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] 
        backdrop-blur-xl ring-1 ring-slate-900/5 transition-all duration-300
      "
    >
      {/* Header Card: Icon + Title & Subtitle */}
      <div className="flex items-start justify-between border-b border-slate-200/60 pb-3.5">
        <div className="flex items-center gap-3">
          {/* Icon Box dengan aksen biru/merah */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/80 text-[#2563EB] shadow-xs border border-blue-200/50">
            {type === "advisory" ? (
              <Briefcase size={20} className="text-[#2563EB]" />
            ) : (
              <FileCheck size={20} className="text-red-600" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              {title}
            </h3>
            <p className="text-xs font-medium text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Item List / Feature Checklist */}
      <div className="mt-3.5 space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <CheckCircle2 size={15} className="text-[#2563EB] shrink-0" />
            <span className="text-xs font-semibold text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Card: Status Row & Progress Bar */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-slate-500">
            Status Compliance
          </span>

          {/* Status Badge Hijau Modern (✓ VERIFIED) */}
          <span
            className="
              inline-flex items-center gap-1 rounded-full bg-emerald-500/15 
              px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-600/30
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            ✓ VERIFIED
          </span>
        </div>

        {/* Mini Status Indicator Bar */}
        <div className="mt-2.5 flex items-center gap-2">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"
            />
          </div>
          <span className="text-[10px] font-bold text-slate-600">100%</span>
        </div>
      </div>
    </motion.div>
  );
}