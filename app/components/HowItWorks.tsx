export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-16">
          Come lavoriamo
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-violet-200 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="font-bold text-xl mb-3">
              Primo colloquio
            </h3>
            <p className="text-gray-600">
              Ascolto della famiglia e raccolta delle informazioni.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-violet-200 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="font-bold text-xl mb-3">
              Valutazione
            </h3>
            <p className="text-gray-600">
              Valutazione funzionale, cognitiva e comportamentale.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-violet-200 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="font-bold text-xl mb-3">
              Intervento
            </h3>
            <p className="text-gray-600">
              Programma personalizzato costruito insieme alla famiglia.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-violet-200 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              4
            </div>
            <h3 className="font-bold text-xl mb-3">
              Monitoraggio
            </h3>
            <p className="text-gray-600">
              Verifica continua dei progressi e aggiornamento degli obiettivi.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}