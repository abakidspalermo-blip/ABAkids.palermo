export default function FirstConsultation() {
  return (
    <section
      id="prima-consulenza"
      className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-sky-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[40px] border-4 border-pink-200 bg-white/80 shadow-sm px-8 py-14 text-center">

          {/* Arcobaleno decorativo */}
          <div className="text-5xl mb-6">
            🌈
          </div>

          {/* Titolo */}
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 leading-tight">
            Primo colloquio gratuito
          </h2>

          {/* Decorazione */}
          <div className="w-24 h-1.5 bg-pink-300 rounded-full mx-auto mt-6 mb-8" />

          {/* Testo */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-8">
              Un primo momento di incontro e ascolto dedicato alla famiglia,
              per conoscerci, comprendere le vostre esigenze e valutare
              insieme il percorso più adatto.
            </p>

            <p className="text-lg md:text-xl font-semibold text-sky-500 mt-5">
              Senza impegno, con cura e attenzione.
            </p>
          </div>

          {/* Pulsante */}
          <a
            href="#contatti"
            className="inline-flex items-center justify-center mt-9 px-8 py-4 rounded-full bg-sky-400 text-white font-semibold text-lg shadow-md hover:bg-sky-500 hover:scale-105 transition-all duration-300"
          >
            Prenota il tuo primo incontro
          </a>

        </div>
      </div>
    </section>
  );
}