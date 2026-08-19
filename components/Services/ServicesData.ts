import {
  FileText,
  Calculator,
  Building2,
  FileSpreadsheet,
  ShieldAlert,
  Briefcase,
  LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scope: string[];
  importance: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "perpajakan",
    icon: FileText,
    title: "Konsultasi Perpajakan",
    shortDescription:
      "Perencanaan dan pendampingan kewajiban pajak perusahaan secara akurat dan patuh hukum.",
  fullDescription:
    "Layanan konsultasi perpajakan menyeluruh untuk membantu bisnis Anda mengoptimalkan beban pajak secara legal, meminimalkan risiko sanksi, serta memastikan seluruh kewajiban SPT bulanan dan tahunan terpenuhi sesuai regulasi terbaru.",
  scope: [
    "Penyusunan & Pelaporan SPT Masa (PPN, PPh 21, PPh 23, PPh Final)",
    "Penyusunan & Pelaporan SPT Tahunan Badan & Orang Pribadi",
    "Perencanaan Pajak Strategis (Tax Planning)",
    "Pendampingan Pemeriksaan & Restitusi Pajak",
  ],
  importance:
    "Regulasi perpajakan di Indonesia terus berkembang. Kepatuhan pajak yang tepat membebaskan perusahaan dari denda administratif serta menjaga reputasi bisnis di mata otoritas.",
},
{
  id: "akuntansi",
  icon: Calculator,
  title: "Jasa Akuntansi & Pembukuan",
  shortDescription:
    "Pencatatan keuangan yang rapi, transparan, dan sesuai standar akuntansi yang berlaku.",
  fullDescription:
    "Kami mengelola pencatatan transaksi harian hingga penyusunan laporan keuangan periodik untuk memberikan gambaran kesehatan finansial bisnis yang objektif dan siap diuji.",
  scope: [
    "Pencatatan Transaksi & Jurnal Keuangan Harian",
    "Penyusunan Laporan Laba Rugi, Neraca, & Arus Kas",
    "Rekonsiliasi Bank & Aset Perusahaan",
    "Penyiapan Laporan Keuangan untuk Auditing",
  ],
  importance:
    "Laporan keuangan yang akurat merupakan dasar utama pengambilan keputusan bisnis strategis serta syarat mutlak pengajuan pendanaan ke perbankan atau investor.",
},
{
  id: "pendirian-badan-usaha",
  icon: Building2,
  title: "Pendirian & Legalitas Badan Usaha",
  shortDescription:
    "Pengurusan pendirian PT, CV, serta perizinan usaha secara cepat, legal, dan transparan.",
  fullDescription:
    "Layanan pengurusan dokumen legalitas pendirian perusahaan mulai dari akta notaris, pengesahan Kemenkumham, NIB, hingga izin operasional spesifik sektor usaha.",
  scope: [
    "Pendirian PT Perorangan, PT Umum, & CV",
    "Pengurusan NIB (Nomor Induk Berusaha) via OSS RBA",
    "Perizinan Berusaha Berbasis Risiko & PB-UMKU",
    "Perubahan Akta & Susunan Pengurus Perusahaan",
  ],
  importance:
    "Legalitas yang sah memberikan perlindungan hukum penuh bagi pemilik usaha dan membuka akses kerja sama dengan mitra korporasi maupun pemerintah.",
},
{
  id: "tp-doc",
  icon: FileSpreadsheet,
  title: "Dokumentasi Transfer Pricing (TP Doc)",
  shortDescription:
    "Penyusunan dokumen penentuan harga transfer sesuai ketentuan PER-43/PJ/2010 dan PMK-213.",
  fullDescription:
    "Layanan pembuatan Dokumen Lokal (Local File), Dokumen Induk (Master File), dan Laporan per Negara (CbCR) untuk perusahaan yang memiliki hubungan istimewa.",
  scope: [
    "Analisis Kesebandingan & Penentuan Metode TP",
    "Penyusunan Master File & Local File",
    "Pencarian Benchmarking Data Komparabel",
    "Evaluasi Transaksi Afiliasi Perusahaan",
  ],
  importance:
    "Otoritas pajak sangat menyoroti transaksi afiliasi. TP Doc yang komprehensif meminimalkan risiko koreksi harga transfer saat pemeriksaan pajak.",
},
{
  id: "audit-review",
  icon: ShieldAlert,
  title: "Penelaahan & Kepatuhan Pajak (Tax Review)",
  shortDescription:
    "Deteksi dini potensi risiko pajak sebelum pemeriksaan resmi oleh otoritas pajak.",
  fullDescription:
    "Pemeriksaan independen terhadap pembukuan dan pemenuhan kewajiban pajak perusahaan untuk mengidentifikasi kekeliruan pencatatan atau potensi tunggakan pajak.",
  scope: [
    "Audit Kepatuhan Pajak Internal (Tax Diagnostic Review)",
    "Identifikasi Area Sengketa Pajak Potensial",
    "Rekomendasi Perbaikan Dokumen & Pembukuan",
    "Simulasi Pemeriksaan Pajak",
  ],
  importance:
    "Tindakan preventif ini membantu perusahaan mengoreksi kesalahan lebih awal sebelum ditemukan oleh pemeriksa pajak, menekan potensi denda sanksi.",
},
{
  id: "konsultasi-manajemen",
  icon: Briefcase,
  title: "Konsultasi Manajemen & Bisnis",
  shortDescription:
    "Pendampingan operasional dan restrukturisasi finansial demi efisiensi dan pertumbuhan usaha.",
  fullDescription:
    "Layanan penasihat bisnis strategis untuk membantu pimpinan perusahaan dalam mengoptimalkan struktur biaya, manajemen risiko, serta efisiensi operasional.",
  scope: [
    "Evaluasi SOTK & Efisiensi Operasional",
    "Restrukturisasi Keuangan & Anggaran",
    "Penyusunan Standar Operasional Prosedur (SOP) Keuangan",
    "Analisis Kelayakan Investasi & Bisnis",
  ],
  importance:
    "Pengelolaan internal yang rapi dan terukur memastikan bisnis dapat bertahan di tengah perubahan pasar dan siap melakukan ekspansi.",
},
];