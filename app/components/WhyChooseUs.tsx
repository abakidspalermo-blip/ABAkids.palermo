export default function WhyChooseUs() {
  const features = [
    {
      icon: "🧠",
      title: "Approccio basato sulle evidenze",
      text: "Ogni intervento nasce da metodologie scientificamente validate e personalizzate."
    },
    {
      icon: "❤️",
      title: "La famiglia al centro",
      text: "Collaboriamo costantemente con genitori, scuola e rete territoriale."
    },
    {
      icon: "🌈",
      title: "Equipe multidisciplinare",
      text: "Professionisti con competenze complementari lavorano insieme per un unico obiettivo."
    },
    {
      icon: "🎯",
      title: "Percorsi personalizzati",
      text: "Ogni persona è unica e merita un progetto costruito sulle proprie potenzialità."
    }
  ];

  return (
    <section className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          Perché scegliere ABAKids
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Uniamo competenza, ascolto e lavoro di squadra per accompagnare ogni persona nel proprio percorso di crescita.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-pink-600 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}