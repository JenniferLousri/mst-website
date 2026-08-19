"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bell, LogOut } from "lucide-react";
import { Inquiry } from "@/types/types/inquiry";

interface TopNavProps {
  inquiries?: Inquiry[];
  onSelectInquiry?: (inquiry: Inquiry) => void;
}

export default function TopNav({ inquiries = [], onSelectInquiry }: TopNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const newInquiries = inquiries.filter((item) => item.status === "Baru");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/inquiries/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 sm:px-6">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="CV. MITRA SUKSES TERUS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-slate-900 leading-tight tracking-tight">
              CV. MITRA SUKSES TERUS
            </h1>
            <p className="text-[10px] font-semibold text-slate-400">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-2.5">
          {/* Notification Bell Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-xs transition-all hover:bg-slate-50 cursor-pointer"
            >
              <Bell size={15} />
              {newInquiries.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-500 text-[8px] font-black text-white ring-2 ring-white">
                  {newInquiries.length}
                </span>
              )}
            </button>

            {/* Notification Popover Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl z-50">
                <div className="border-b border-slate-100 px-3 py-1.5">
                  <h4 className="text-xs font-bold text-slate-900">
                    Notifikasi Inquiry Baru
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {newInquiries.length} permintaan butuh penanganan
                  </p>
                </div>

                <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                  {newInquiries.length === 0 ? (
                    <div className="py-4 text-center text-xs text-slate-400">
                      Tidak ada inquiry baru.
                    </div>
                  ) : (
                    newInquiries.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (onSelectInquiry) onSelectInquiry(item);
                          setIsOpen(false);
                        }}
                        className="w-full p-2.5 text-left transition-colors hover:bg-slate-50 flex flex-col gap-0.5 rounded-lg cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 truncate max-w-[130px]">
                            {item.nama}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {item.tanggal}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 truncate">
                          {item.perusahaan}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="h-4 w-px bg-slate-200" />

          {/* Admin Avatar & Logout */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
              A
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-red-600 shadow-xs transition-all hover:bg-red-50 hover:border-red-200 cursor-pointer"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}