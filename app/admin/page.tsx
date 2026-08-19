"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import TopNav from "@/components/dashboard/TopNav";
import SummaryCards from "@/components/dashboard/SummaryCards";
import SearchToolbar from "@/components/dashboard/SearchToolbar";
import InquiryTable from "@/components/dashboard/InquiryTable";
import InquiryDrawer from "@/components/dashboard/InquiryDrawer";
import DeleteConfirmModal from "@/components/dashboard/DeleteConfirmModal";
import { Inquiry, InquiryStatus } from "@/types/types/inquiry";

export default function AdminDashboardPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [dateFilter, setDateFilter] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // State Delete Confirmation Modal
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Helper untuk memformat tanggal
  const formatDate = (isoString: string) => {
    if (!isoString) return "-";
    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch {
      return isoString;
    }
  };

  // Helper mapping response DB ke format properti UI
  const mapInquiryData = (item: any): Inquiry => {
    const formattedDate = formatDate(item.createdAt);
    return {
      ...item,
      nama: item.fullName || item.nama || "-",
      perusahaan: item.company || item.perusahaan || "-",
      whatsapp: item.phone || item.whatsapp || "-",
      layanan: item.service || item.layanan || "-",
      pesan: item.message || item.pesan || "-",
      tanggal: formattedDate,
      waktuDetail: formattedDate,
    };
  };

  // Fetch Data dari GET /api/inquiries
  const fetchInquiries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/inquiries");
      if (!res.ok) {
        throw new Error("Gagal mengambil data inquiry.");
      }
      const data = await res.json();
      const mappedData: Inquiry[] = Array.isArray(data)
        ? data.map(mapInquiryData)
        : [];

      setInquiries(mappedData);

      if (mappedData.length > 0) {
        setSelectedInquiry((prev) => {
          if (!prev) return mappedData[0];
          const updated = mappedData.find((i) => i.id === prev.id);
          return updated || mappedData[0];
        });
      } else {
        setSelectedInquiry(null);
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat memuat data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  // Filter Logic
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const nama = item.fullName || item.nama || "";
      const perusahaan = item.company || item.perusahaan || "";
      const layanan = item.service || item.layanan || "";
      const email = item.email || "";

      const matchesSearch =
        nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        perusahaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        layanan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "Semua" || item.status === statusFilter;

      let matchesDate = true;
      if (dateFilter !== "Semua" && item.createdAt) {
        const itemDate = new Date(item.createdAt);
        const now = new Date();

        if (dateFilter === "Hari Ini") {
          matchesDate = itemDate.toDateString() === now.toDateString();
        } else if (dateFilter === "7 Hari Terakhir") {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(now.getDate() - 7);
          matchesDate = itemDate >= sevenDaysAgo;
        } else if (dateFilter === "30 Hari Terakhir") {
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(now.getDate() - 30);
          matchesDate = itemDate >= thirtyDaysAgo;
        }
      }

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [inquiries, searchTerm, statusFilter, dateFilter]);

  // Reset pagination ke page 1 saat filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, dateFilter]);

  // Pagination Calculations
  const totalFilteredItems = filteredInquiries.length;
  const totalPages = Math.ceil(totalFilteredItems / pageSize);

  const paginatedInquiries = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredInquiries.slice(start, start + pageSize);
  }, [filteredInquiries, currentPage, pageSize]);

  // Handlers
  const handleView = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
  };

  const handleDeleteClick = (id: number) => {
    setDeletingId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deletingId) return;

    try {
      setIsDeleting(true);
      setError(null);

      const res = await fetch(`/api/inquiries?id=${deletingId}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Gagal menghapus inquiry.");
      }

      setInquiries((prev) => prev.filter((item) => item.id !== deletingId));
      if (selectedInquiry?.id === deletingId) {
        setSelectedInquiry(null);
      }

      setDeleteModalOpen(false);
      setDeletingId(null);
    } catch (err: any) {
      console.error("Gagal menghapus inquiry:", err);
      setError(err.message || "Gagal menghapus inquiry. Silakan coba lagi.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSaveStatus = async (id: number, newStatus: InquiryStatus) => {
    try {
      setError(null);

      const res = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status: newStatus,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Gagal menyimpan perubahan status.");
      }

      setInquiries((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );

      if (selectedInquiry?.id === id) {
        setSelectedInquiry((prev) =>
          prev ? { ...prev, status: newStatus } : null
        );
      }
    } catch (err: any) {
      console.error("Gagal memperbarui status:", err);
      setError(err.message || "Gagal memperbarui status. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-slate-800 antialiased">
      {/* Top Navbar */}
      <TopNav inquiries={inquiries} onSelectInquiry={handleView} />

      {/* Main Container */}
      <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Dashboard Inquiry
          </h2>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Kelola dan pantau semua permintaan konsultasi dari website.
          </p>
        </div>

        {/* Ringkasan Statistik Cards */}
        <section className="mb-8">
          <SummaryCards inquiries={inquiries} />
        </section>

        {/* Error State Banner Minimalist */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
            {error}
          </div>
        )}

        {/* Content Layout: Table + Side Drawer */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Main Content Area (Toolbar + Table) */}
          <div className="flex-1 space-y-4">
            <SearchToolbar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              dateFilter={dateFilter}
              setDateFilter={setDateFilter}
            />

            {/* Loading Indicator / Table */}
            {loading ? (
              <div className="flex h-64 items-center justify-center rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600"></div>
                  <span>Memuat data inquiry...</span>
                </div>
              </div>
            ) : (
              <InquiryTable
                inquiries={paginatedInquiries}
                activeInquiryId={selectedInquiry?.id || null}
                onView={handleView}
                onDelete={handleDeleteClick}
                currentPage={currentPage}
                totalPages={totalPages}
                totalFilteredItems={totalFilteredItems}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </div>

          {/* Right Side Detail Drawer */}
          {selectedInquiry && (
            <InquiryDrawer
              inquiry={selectedInquiry}
              onClose={() => setSelectedInquiry(null)}
              onSaveStatus={handleSaveStatus}
            />
          )}
        </div>
      </main>

      {/* Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setDeletingId(null);
        }}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
}