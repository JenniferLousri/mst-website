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
        relative w-[240px] sm:w-[250px] lg:w-[260px] rounded-xl border border-white/90 
        bg-white/80 p-3.5 lg:p-4 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.15)] 
        backdrop-blur-xl ring-1 ring-slate-900/5 transition-all duration-300
      "
    >
      <div className="flex items-start justify-between border-b border-slate-200/60 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/80 text-[#2563EB] shadow-xs border border-blue-200/50">
            {type === "advisory" ? (
              <Briefcase size={16} className="text-[#2563EB]" />
            ) : (
              <FileCheck size={16} className="text-red-600" />
            )}
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-900 leading-snug">
              {title}
            </h3>
            <p className="text-[10px] font-medium text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2.5 space-y-1.5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[#2563EB] shrink-0" />
            <span className="text-[11px] font-semibold text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-slate-500">
            Status Compliance
          </span>
          <span
            className="
              inline-flex items-center gap-1 rounded-full bg-emerald-500/15 
              px-2 py-0.5 text-[9px] lg:text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-600/30
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            ✓ VERIFIED
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"
            />
          </div>
          <span className="text-[9px] font-bold text-slate-600">100%</span>
        </div>
      </div>
    </motion.div>
  );
}