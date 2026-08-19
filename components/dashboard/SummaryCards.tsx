"use client";

import { FileText, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Inquiry } from "@/types/types/inquiry";

interface SummaryCardsProps {
  inquiries: Inquiry[];
}

export default function SummaryCards({ inquiries }: SummaryCardsProps) {
  const total = inquiries.length;
  const baru = inquiries.filter((i) => i.status === "Baru").length;
  const diproses = inquiries.filter((i) => i.status === "Diproses").length;
  const selesai = inquiries.filter((i) => i.status === "Selesai").length;

  const cards = [
    {
      title: "Total Inquiry",
      value: total,
      subtext: "Semua waktu",
      icon: FileText,
      iconColor: "text-blue-600 bg-blue-50",
      borderColor: "border-slate-200/80",
    },
    {
      title: "Inquiry Baru",
      value: baru,
      subtext: "Menunggu respon",
      icon: AlertCircle,
      iconColor: "text-amber-600 bg-amber-50",
      borderColor: "border-amber-200/80 bg-amber-50/20",
    },
    {
      title: "Diproses",
      value: diproses,
      subtext: "Sedang ditindaklanjuti",
      icon: Clock,
      iconColor: "text-blue-600 bg-blue-50",
      borderColor: "border-slate-200/80",
    },
    {
      title: "Selesai",
      value: selesai,
      subtext: "Selesai ditangani",
      icon: CheckCircle2,
      iconColor: "text-emerald-600 bg-emerald-50",
      borderColor: "border-slate-200/80",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`flex items-start justify-between rounded-xl border ${card.borderColor} bg-white p-3.5 shadow-xs transition-shadow hover:shadow-sm`}
          >
            <div>
              <p className="text-[11px] font-semibold text-slate-500">{card.title}</p>
              <p className="mt-0.5 text-xl font-extrabold text-slate-900 sm:text-2xl">
                {card.value}
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                {card.subtext}
              </p>
            </div>
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${card.iconColor}`}
            >
              <Icon size={16} strokeWidth={2.2} />
            </div>
          </div>
        );
      })}
    </div>
  );
}