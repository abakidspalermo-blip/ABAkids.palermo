export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          A chi ci rivolgiamo
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Accompagniamo bambini, ragazzi, giovani adulti e le loro famiglie con
          percorsi personalizzati costruiti sulle esigenze di ciascuna persona.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-sky-soft card-hover rounded-3x1 p-8 shadow-lg hover:shadow-xl transition text-center">
            <div className="text-5xl mb-5">🧸</div>

            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Bambini
            </h3>

            <p className="text-gray-600">
              Interventi educativi individualizzati per favorire comunicazione,
              autonomie, gioco, apprendimento e benessere.
            </p>
          </div>

          <div className="bg-yellow-soft card-hover rounded-3x1 p-8 shadow-lg hover:shadow-xl transition text-center">
            <div className="text-5xl mb-5">🎒</div>

            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Ragazzi
            </h3>

            <p className="text-gray-600">
              Percorsi dedicati allo sviluppo delle abilità sociali,
              dell'autonomia personale, scolastica e relazionale.
            </p>
          </div>

          <div className="bg-purple-soft card-hover rounded-3x1 p-8 shadow-lg hover:shadow-xl transition text-center">
            <div className="text-5xl mb-5">🌱</div>

            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              Giovani adulti e famiglie
            </h3>

            <p className="text-gray-600">
              Supporto per promuovere autonomia, inclusione, qualità della vita
              e collaborazione con la famiglia in ogni fase del percorso.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}