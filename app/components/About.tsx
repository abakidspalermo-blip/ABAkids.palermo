import Image from "next/image";

export default function About() {
  return (
    <section id="chi-siamo" className="py-24 bg-gradient-to-r from-pink-50 to-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* FOTO */}

      <div className="flex justify-center">
        <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-white max-w-md">
          <Image
                      src="/alessia.jpg"
                      alt="Dott.ssa Alessia Fontana"
                      width={300}
                      height={350}
                      className="rounded-3xl shadow-xl object-cover border-8 border-white"
                      priority
                    />
        </div>
      </div>

      {/* TESTO */}

      <div>

        <h2 className="text-5xl font-bold text-pink-700 mb-4">
          Dott.ssa Alessia Fontana
        </h2>

        <p className="text-xl text-gray-700 font-medium mb-8">
          Tecnico della Riabilitazione Psichiatrica <br />
          Analista del Comportamento (ABA)
        </p>

        <p className="text-gray-600 leading-8 mb-6">
          Sono specializzata negli interventi basati sull'Analisi del
          Comportamento Applicata (ABA) e accompagno bambini, ragazzi,
          giovani adulti e le loro famiglie nella costruzione di percorsi
          personalizzati, fondati sull'ascolto, sulla collaborazione e sulle
          evidenze scientifiche.
        </p>

        <p className="text-gray-600 leading-8 mb-8">
          Credo che ogni persona abbia risorse e potenzialità da valorizzare.
          Per questo lavoro in stretta collaborazione con la famiglia, la
          scuola e l'équipe multidisciplinare, costruendo interventi su misura
          che promuovano autonomia, benessere e qualità della vita.
        </p>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white rounded-2xl shadow p-4">
            🧠 Analisi del Comportamento
          </div>

          <div className="bg-white rounded-2xl shadow p-4">
            👨‍👩‍👧 Parent Training
          </div>

          <div className="bg-white rounded-2xl shadow p-4">
            🏫 Collaborazione con la scuola
          </div>

          <div className="bg-white rounded-2xl shadow p-4">
            🌈 Bambini, ragazzi e giovani adulti
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
  );
}