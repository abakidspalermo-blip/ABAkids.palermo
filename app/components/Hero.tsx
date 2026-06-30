import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-violet-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TESTO */}

          <div>

            <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Centro Cognitivo-Comportamentale
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              ABAKids
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold text-pink-600 mb-6">
              Riabilitazione, Promozione Sociale e Supporto Educativo
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-10">
              Accompagniamo bambini, ragazzi, giovani adulti e le loro famiglie
              attraverso percorsi personalizzati, fondati sulle evidenze
              scientifiche e costruiti con ascolto, competenza e collaborazione.
            </p>

            <div className="flex flex-wrap gap-4">

             <a
  href="https://wa.me/393505436111?text=Ciao%20ABAKids,%20vorrei%20ricevere%20informazioni%20sui%20vostri%20servizi."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
>
  💬 Prenota una consulenza
</a>

              <a
                href="#servizi"
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold transition"
              >
                Scopri i servizi
              </a>

            </div>

          </div>

          {/* LOGO */}

          <div className="flex justify-center lg:justify-end">

            <Image
              src="/logo.png"
              alt="Logo ABAKids"
              width={450}
              height={450}
              priority
              className="w-72 md:w-96 lg:w-[450px] h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />

          </div>

        </div>

      </div>
    </section>
  );
}