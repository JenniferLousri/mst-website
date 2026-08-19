"use client";

import { Eye, Trash2 } from "lucide-react";
import { Inquiry, InquiryStatus } from "@/types/types/inquiry";

interface InquiryTableProps {
  inquiries: Inquiry[];
  activeInquiryId: number | null;
  onView: (inquiry: Inquiry) => void;
  onDelete: (id: number) => void;
  currentPage: number;
  totalPages: number;
  totalFilteredItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function InquiryTable({
  inquiries,
  activeInquiryId,
  onView,
  onDelete,
  currentPage,
  totalPages,
  totalFilteredItems,
  pageSize,
  onPageChange,
}: InquiryTableProps) {
  const getBadgeStyle = (status: InquiryStatus) => {
    switch (status) {
      case "Baru":
        return "bg-amber-50 text-amber-700 border-amber-200/80";
      case "Diproses":
        return "bg-blue-50 text-blue-700 border-blue-200/80";
      case "Selesai":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const startItem = totalFilteredItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalFilteredItems);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-600">
          <thead className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            <tr>
              <th className="py-3.5 px-4 text-center w-12">No.</th>
              <th className="py-3.5 px-4">Nama</th>
              <th className="py-3.5 px-4">Perusahaan</th>
              <th className="py-3.5 px-4">Layanan</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4">Tanggal</th>
              <th className="py-3.5 px-4 text-center w-28">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {inquiries.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-sm font-medium text-slate-400"
                >
                  Tidak ada data inquiry yang ditemukan.
                </td>
              </tr>
            ) : (
              inquiries.map((item, index) => {
                const isActive = activeInquiryId === item.id;
                const rowNumber = startItem + index;
                return (
                  <tr
                    key={item.id}
                    className={`transition-colors ${
                      isActive ? "bg-blue-50/40" : "hover:bg-slate-50/60"
                    }`}
                  >
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                      {rowNumber}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {item.nama}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {item.perusahaan}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {item.layanan}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-[11px] font-extrabold ${getBadgeStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      {item.tanggal}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => onView(item)}
                          title="View Detail"
                          className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          }`}
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => onDelete(item.id)}
                          title="Delete"
                          className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all hover:bg-red-100"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Table Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
        <span>
          Menampilkan {startItem} - {endItem} dari {totalFilteredItems} data
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="h-8 w-8 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-8 w-8 rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages || totalPages === 0}
            className="h-8 w-8 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}