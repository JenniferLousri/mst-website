// lib/whatsapp.ts

export const OFFICIAL_WA_NUMBER = "6282136010705";

export const DEFAULT_WA_MESSAGE = `Halo CV Mitra Sukses Terus.

Saya mendapatkan informasi dari website dan ingin berkonsultasi mengenai layanan perusahaan.

Nama: 
Perusahaan: 
Kebutuhan: 

Terima kasih.`;

export const getWhatsAppLink = (message: string = DEFAULT_WA_MESSAGE): string => {
  return `https://wa.me/${OFFICIAL_WA_NUMBER}?text=${encodeURIComponent(message)}`;
};