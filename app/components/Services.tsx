export default function Services() {
  const services = [
    {
      icon: "🧩",
      title: "Terapia Comportamentale ABA",
      text: "Interventi personalizzati basati sull'Analisi del Comportamento Applicata."
    },
    {
      icon: "🗣️",
      title: "Logopedia",
      text: "Percorsi dedicati allo sviluppo della comunicazione e del linguaggio."
    },
    {
      icon: "🤸",
      title: "Neuropsicomotricità",
      text: "Attività finalizzate allo sviluppo motorio, cognitivo e relazionale."
    },
    {
      icon: "🦿",
      title: "Fisioterapia",
      text: "Percorsi riabilitativi per migliorare il movimento e l'autonomia."
    },
    {
      icon: "🧠",
      title: "Supporto Psicologico",
      text: "Sostegno psicologico per bambini, ragazzi e famiglie."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parent Training",
      text: "Coinvolgimento attivo della famiglia durante tutto il percorso."
    },
    {
      icon: "🎨",
      title: "Laboratori Creativi",
      text: "Attività inclusive per favorire socializzazione ed espressione."
    },
    {
      icon: "📚",
      title: "Potenziamento Cognitivo",
      text: "Interventi per sviluppare attenzione, memoria e apprendimento."
    },
    {
      icon: "🏡",
      title: "Autonomie Personali",
      text: "Percorsi per incrementare indipendenza e qualità della vita."
    }
  ];

  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          I nostri servizi
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Un'équipe multidisciplinare che accompagna bambini, ragazzi, giovani adulti e famiglie con percorsi costruiti sulle esigenze di ciascuno.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-pink-600 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}