"use client";

import { useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
}

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  isDeleting = false,
}: DeleteConfirmModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isDeleting) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isDeleting, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => {
          if (!isDeleting) onClose();
        }}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 shadow-xl transition-all">
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          disabled={isDeleting}
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50"
        >
          <X size={15} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Warning Icon Badge */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-4 ring-red-50/50 mb-3">
            <AlertTriangle size={20} />
          </div>

          <h3 className="text-sm font-extrabold text-slate-900">
            Hapus Inquiry?
          </h3>

          <p className="mt-1.5 text-[11px] font-medium text-slate-500 leading-relaxed">
            Apakah Anda yakin ingin menghapus inquiry ini? Tindakan ini tidak dapat dibatalkan.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex w-full items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isDeleting}
              className="flex-1 rounded-lg border border-slate-200/90 bg-white py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={isDeleting}
              className="flex-1 inline-flex items-center justify-center rounded-lg bg-red-600 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-red-700 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isDeleting ? "Menghapus..." : "Hapus"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}