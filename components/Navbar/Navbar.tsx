"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "home" },
  { name: "Tentang Kami", href: "about" },
  { name: "Layanan", href: "services" },
  { name: "Klien", href: "clients" },
  { name: "Cara Kerja", href: "how-we-work" },
  { name: "Kontak", href: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: id === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-xs py-2 border-b border-slate-200/60"
          : "bg-transparent py-2.5 sm:py-3.5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* LOGO AREA */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-xs border border-slate-200/80 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="CV Mitra Sukses Terus Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-wide text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                MITRA SUKSES TERUS
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-normal">
                Tax & Business Consultant
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600 animate-in fade-in duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-blue-700 active:scale-95 cursor-pointer"
            >
              Hubungi Kami
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-6 pt-3 pb-5 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="mt-2 flex w-full items-center justify-center rounded-lg bg-blue-600 py-2.5 text-center text-xs font-bold text-white shadow-xs active:scale-95"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}