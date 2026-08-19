export type InquiryStatus = "Baru" | "Diproses" | "Selesai" | string;

export interface Inquiry {
  id: number;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
  // Aliases/Getters untuk kompatibilitas UI yang sudah ada tanpa perlu ubah UI
  nama?: string;
  perusahaan?: string;
  whatsapp?: string;
  layanan?: string;
  pesan?: string;
  tanggal?: string;
  waktuDetail?: string;
}