"use client";

import { useState, useEffect } from "react";
import {
  X,
  User,
  Building2,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Clock,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Inquiry, InquiryStatus } from "@/types/types/inquiry";

interface InquiryDrawerProps {
  inquiry: Inquiry | null;
  onClose: () => void;
  onSaveStatus: (id: number, newStatus: InquiryStatus) => void;
}

export default function InquiryDrawer({
  inquiry,
  onClose,
  onSaveStatus,
}: InquiryDrawerProps) {
  const [selectedStatus, setSelectedStatus] = useState<InquiryStatus>("Baru");

  useEffect(() => {
    if (inquiry) {
      setSelectedStatus(inquiry.status);
    }
  }, [inquiry]);

  if (!inquiry) return null;

  const handleSave = () => {
    onSaveStatus(inquiry.id, selectedStatus);
  };

  return (
    <aside className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all lg:w-[380px] shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <h3 className="text-base font-extrabold text-slate-900">
          Detail Inquiry
        </h3>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body List Details */}
      <div className="p-5 space-y-4 text-xs overflow-y-auto max-h-[calc(100vh-280px)]">
        {/* Nama */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <User size={14} className="text-slate-400" />
            <span>Nama</span>
          </div>
          <p className="font-bold text-slate-900 pl-6 text-sm">
            {inquiry.nama}
          </p>
        </div>

        {/* Perusahaan */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <Building2 size={14} className="text-slate-400" />
            <span>Perusahaan</span>
          </div>
          <p className="font-semibold text-slate-800 pl-6">
            {inquiry.perusahaan}
          </p>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <Mail size={14} className="text-slate-400" />
            <span>Email</span>
          </div>
          <p className="font-semibold text-blue-600 pl-6 underline underline-offset-2">
            {inquiry.email}
          </p>
        </div>

        {/* WhatsApp */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <Phone size={14} className="text-slate-400" />
            <span>Nomor WhatsApp</span>
          </div>
          <p className="font-semibold text-slate-800 pl-6">
            {inquiry.whatsapp}
          </p>
        </div>

        {/* Layanan */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <Briefcase size={14} className="text-slate-400" />
            <span>Layanan yang Diperlukan</span>
          </div>
          <p className="font-bold text-slate-900 pl-6">{inquiry.layanan}</p>
        </div>

        {/* Pesan */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <MessageSquare size={14} className="text-slate-400" />
            <span>Pesan / Pertanyaan</span>
          </div>
          <p className="mt-1.5 rounded-xl bg-slate-50 p-3 leading-relaxed text-slate-600 border border-slate-100 ml-6">
            {inquiry.pesan}
          </p>
        </div>

        {/* Edit Status Dropdown */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1.5">
            <Clock size={14} className="text-slate-400" />
            <span>Status</span>
          </div>
          <div className="relative ml-6">
            <select
              value={selectedStatus}
              onChange={(e) =>
                setSelectedStatus(e.target.value as InquiryStatus)
              }
              className="w-full appearance-none rounded-xl border border-amber-300 bg-amber-50/50 py-2.5 px-3 text-xs font-bold text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
            >
              <option value="Baru">Baru</option>
              <option value="Diproses">Diproses</option>
              <option value="Selesai">Selesai</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-700"
            />
          </div>
        </div>

        {/* Tanggal Diterima */}
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-semibold mb-1">
            <Calendar size={14} className="text-slate-400" />
            <span>Tanggal Diterima</span>
          </div>
          <p className="font-semibold text-slate-700 pl-6">
            {inquiry.waktuDetail || inquiry.tanggal}
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center gap-3 border-t border-slate-100 p-4">
        <button
          onClick={onClose}
          className="flex-1 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Tutup
        </button>
        <button
          onClick={handleSave}
          className="flex-1 rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-blue-700 active:scale-95"
        >
          Simpan Perubahan
        </button>
      </div>
    </aside>
  );
}