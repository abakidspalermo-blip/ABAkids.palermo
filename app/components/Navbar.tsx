import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ABAkids"
            width={55}
            height={55}
          />
          <span className="text-2xl font-bold text-pink-600">
            ABAkids
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#servizi">Servizi</a>
          <a href="#chisono">Chi siamo</a>
          <a href="#contatti">Contatti</a>
        </nav>

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg transition">
          Prenota una consulenza
        </button>

      </div>
    </header>
  );
}