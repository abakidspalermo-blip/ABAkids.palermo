"use client";

type ServiceModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  items: string[];
};

export default function ServiceModal({
  open,
  onClose,
  title,
  description,
  items,
}: ServiceModalProps) {
  console.log(open);
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-pink-500"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          {title}
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
          {description}
        </p>

        <h3 className="font-semibold text-lg mb-3">
          Cosa comprende
        </h3>

        <ul className="space-y-3 mb-8">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span>✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-pink-50 rounded-2xl p-5 mb-6">
          <h4 className="font-bold text-pink-600 mb-2">
            💗 Come iniziare?
          </h4>

          <p className="text-gray-700">
            Ogni percorso ABAKids inizia con un colloquio
            conoscitivo durante il quale ascoltiamo la famiglia,
            analizziamo i bisogni del bambino e definiamo insieme
            gli obiettivi dell'intervento.
          </p>
        </div>

        <a
          href="https://wa.me/393505436111?text=Ciao%20ABAKids,%20vorrei%20ricevere%20informazioni."
          target="_blank"
          className="block text-center bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full font-semibold transition"
        >
          📲 Richiedi informazioni su WhatsApp
        </a>
      </div>
    </div>
  );
}