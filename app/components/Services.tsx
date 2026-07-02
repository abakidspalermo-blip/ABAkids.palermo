"use client";

import { useState } from "react";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: "🧩",
      title: "Terapia Comportamentale ABA",
      text: "Interventi personalizzati basati sull'Analisi del Comportamento Applicata.",
      items: [
        "Valutazione iniziale",
        "Programmi individualizzati",
        "Intervento domiciliare",
        "Intervento scolastico",
        "Parent Training",
        "Terapia di gruppo",
        "Supervisione BCBA"
      ],
            showIntro: true,
    },
    {
      icon: "🗣️",
      title: "Logopedia",
      text: "Percorsi dedicati allo sviluppo della comunicazione e del linguaggio.",
      items: [
        "Valutazione logopedica",
        "Linguaggio",
        "Comunicazione",
        "Deglutizione",
        "Supporto ai genitori"
      ]
    },
    {
      icon: "🤸",
      title: "Neuropsicomotricità",
      text: "Attività finalizzate allo sviluppo motorio, cognitivo e relazionale.",
      items: [
        "Motricità",
        "Coordinazione",
        "Gioco",
        "Autonomie",
        "Percorsi individualizzati"
      ]
    },
    {
      icon: "🦿",
      title: "Fisioterapia",
      text: "Percorsi riabilitativi per migliorare il movimento e l'autonomia.",
      items: [
        "Valutazione",
        "Riabilitazione",
        "Mobilità",
        "Postura",
        "Autonomia"
      ]
    },
    {
      icon: "🧠",
      title: "Supporto Psicologico",
      text: "Sostegno psicologico per bambini, ragazzi e famiglie.",
      items: [
        "Colloqui clinici",
        "Supporto emotivo",
        "Consulenza familiare",
        "Gestione comportamentale"
      ]
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parent Training",
      text: "Coinvolgimento attivo della famiglia durante tutto il percorso.",
      items: [
        "Incontri con i genitori",
        "Strategie educative",
        "Gestione delle difficoltà",
        "Supporto continuo"
      ]
    },
    {
      icon: "🎨",
      title: "Laboratori Creativi",
      text: "Attività inclusive per favorire socializzazione ed espressione.",
      items: [
        "Arte",
        "Musica",
        "Manipolazione",
        "Attività di gruppo"
      ]
    },
    {
      icon: "📚",
      title: "Potenziamento Cognitivo",
      text: "Interventi per sviluppare attenzione, memoria e apprendimento.",
      items: [
        "Attenzione",
        "Memoria",
        "Metodo di studio",
        "Apprendimento"
      ]
    },
    {
      icon: "🏡",
      title: "Autonomie Personali",
      text: "Percorsi per incrementare indipendenza e qualità della vita.",
      items: [
        "Igiene personale",
        "Alimentazione",
        "Organizzazione",
        "Autonomia domestica"
      ]
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

          {services.map((service, index) => {
  const backgrounds = [
    "bg-pink-soft",
    "bg-sky-soft",
    "bg-yellow-soft",
    "bg-purple-soft",
  ];
  const borders = [
  "border-t-4 border-pink-400",
  "border-t-4 border-sky-400",
  "border-t-4 border-yellow-400",
  "border-t-4 border-violet-400",
];
const titleColors = [
  "text-pink-600",
  "text-sky-600",
  "text-yellow-600",
  "text-violet-600",
];
  return (

            <div
  key={service.title}
  onClick={() => {
    console.log("CLICK", service.title);
    setSelectedService(service);
  }}
  className={`cursor-pointer
${backgrounds[index % 4]}
${borders[index % 4]}
card-hover
rounded-3xl
p-8
overflow-hidden`}
>
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className={`text-2xl font-bold ${titleColors[index % 4]} mb-4`}>
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.text}
              </p>
            </div>

          );

            })}

        </div>

      </div>

      <ServiceModal
  open={selectedService !== null}
  onClose={() => setSelectedService(null)}
  title={selectedService?.title || ""}
  description={selectedService?.text || ""}
  items={selectedService?.items || []}
  showIntro={selectedService?.showIntro}
/>

    </section>
  );
}