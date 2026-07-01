"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ABAkids"
            width={48}
            height={48}
          />
          <span className="text-xl md:text-2xl font-bold text-pink-600">
            ABAkids
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#servizi">Servizi</a>
          <a href="#chi-siamo">Chi siamo</a>
          <a href="#contatti">Contatti</a>
        </nav>

        {/* Bottone Desktop */}
        <a
          href="https://wa.me/393505436111?text=Ciao%20ABAKids,%20vorrei%20ricevere%20informazioni."
          target="_blank"
          className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg transition"
        >
          Prenota una consulenza
        </a>

        {/* Bottone Hamburger Mobile */}
        <button
          className="md:hidden text-3xl text-pink-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 shadow-lg">
          <nav className="flex flex-col p-6 space-y-5 text-lg text-gray-700 font-medium">

            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>

            <a href="#servizi" onClick={() => setIsMenuOpen(false)}>
              Servizi
            </a>

            <a href="#chi-siamo" onClick={() => setIsMenuOpen(false)}>
              Chi siamo
            </a>

            <a href="#contatti" onClick={() => setIsMenuOpen(false)}>
              Contatti
            </a>

            <a
              href="https://wa.me/393505436111?text=Ciao%20ABAKids,%20vorrei%20ricevere%20informazioni."
              target="_blank"
              className="bg-pink-500 text-white text-center py-3 rounded-full"
            >
              Prenota una consulenza
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}