"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, Building2 } from "lucide-react";

export interface ClientItem {
  id: number;
  image: string;
  alt: string;
}

const clientsData: ClientItem[] = [
  { id: 1, image: "/client1.jpg", alt: "Client 1" },
  { id: 2, image: "/client2.jpg", alt: "Client 2" },
  { id: 3, image: "/client3.jpg", alt: "Client 3" },
  { id: 4, image: "/client4.jpg", alt: "Client 4" },
  { id: 5, image: "/client5.jpg", alt: "Client 5" },
  { id: 6, image: "/client6.png", alt: "Client 6" },
  { id: 7, image: "/client7.png", alt: "Client 7" },
  { id: 8, image: "/client8.jpg", alt: "Client 8" },
  { id: 9, image: "/client9.jpg", alt: "Client 9" },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);

  const handleClose = useCallback(() => {
    setSelectedClient(null);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (selectedClient) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedClient, handleClose]);

  const row1 = clientsData.slice(0, 3);
  const row2 = clientsData.slice(3, 6);
  const row3 = clientsData.slice(6, 9);

  return (
    <section id="clients" className="relative overflow-hidden bg-slate-50/80 py-14 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-sky-400/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-red-400/10 blur-[130px]" />

      {/* MATCH EXACT NAVBAR CONTAINER */}
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* KOLOM KIRI: TEKS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="lg:col-span-5 z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 border border-red-100 mb-3">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              KLIEN KAMI
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 lg:text-[38px] lg:leading-[1.15]">
              Dipercaya oleh Perusahaan dari{" "}
              <span className="text-red-600">Berbagai Industri</span>
            </h2>

            <div className="mt-3 h-1 w-12 rounded-full bg-slate-900" />

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Kami berkomitmen memberikan layanan yang terpercaya, akurat, dan berdampak nyata. Terima kasih kepada para mitra dan klien yang telah mempercayakan pertumbuhan serta keamanan bisnisnya bersama kami.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="
                  group inline-flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white px-5 py-3 
                  text-xs sm:text-sm font-bold text-slate-900 shadow-xs 
                  transition-all duration-300 ease-in-out
                  hover:border-[#E53935] hover:bg-[#E53935] hover:text-white hover:shadow-lg hover:shadow-red-500/20
                  active:scale-[0.98] cursor-pointer
                "
              >
                <span>Konsultasikan Kebutuhan Anda</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
                />
              </a>
            </div>
          </motion.div>

          {/* KOLOM KANAN: CARD LOGO */}
          <div className="relative lg:col-span-7">
            <div className="hidden sm:flex flex-col gap-3 relative z-10 py-1 items-end">
              
              <div className="flex gap-3">
                {row1.map((client) => (
                  <FloatingClientCard
                    key={client.id}
                    client={client}
                    onClick={() => setSelectedClient(client)}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                {row2.map((client) => (
                  <FloatingClientCard
                    key={client.id}
                    client={client}
                    onClick={() => setSelectedClient(client)}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                {row3.map((client) => (
                  <FloatingClientCard
                    key={client.id}
                    client={client}
                    onClick={() => setSelectedClient(client)}
                  />
                ))}
              </div>

            </div>

            {/* MOBILE LAYOUT */}
            <div className="sm:hidden relative z-10 -mx-6 px-6 pt-2">
              <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
                {clientsData.map((client) => (
                  <div key={client.id} className="snap-center shrink-0 w-[140px]">
                    <FloatingClientCard
                      client={client}
                      onClick={() => setSelectedClient(client)}
                      isMobile
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER LINK */}
            <div className="mt-6 flex flex-col items-center justify-center text-center z-10">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                  <Building2 size={11} />
                </div>
                <span>Perusahaan Anda bisa menjadi mitra kami berikutnya.</span>
              </div>
              
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] transition-all hover:underline cursor-pointer"
              >
                <span>→ Konsultasikan kebutuhan bisnis Anda</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedClient && (
          <ClientLightboxModal
            client={selectedClient}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function FloatingClientCard({
  client,
  onClick,
  isMobile = false,
}: {
  client: ClientItem;
  onClick: () => void;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      onClick={onClick}
      className={`
        group relative cursor-pointer rounded-xl border border-slate-200/90 bg-white p-3 
        shadow-xs transition-all duration-300
        hover:border-red-500 hover:shadow-md hover:shadow-red-500/10
        ${isMobile ? "w-full" : "w-[125px] md:w-[135px] lg:w-[140px] xl:w-[150px]"}
      `}
    >
      <div className="relative h-11 w-full flex items-center justify-center">
        <Image
          src={client.image}
          alt={client.alt}
          fill
          className="object-contain p-0.5 filter transition-all duration-300 group-hover:brightness-105"
        />
      </div>
    </motion.div>
  );
}

function ClientLightboxModal({
  client,
  onClose,
}: {
  client: ClientItem;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border border-slate-100"
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-red-600 transition-colors cursor-pointer"
        >
          <X size={14} />
        </button>

        <div className="relative h-40 w-full flex items-center justify-center mt-2">
          <Image
            src={client.image}
            alt={client.alt}
            fill
            priority
            className="object-contain p-2"
          />
        </div>
      </motion.div>
    </div>
  );
}