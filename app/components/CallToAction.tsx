export default function CallToAction() {
  return (
    <section id="contatti" className="py-24 bg-gradient-to-r from-pink-300 to-violet-200">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Iniziamo questo percorso insieme
        </h2>

        <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto mb-10">
          Se desideri maggiori informazioni o vuoi prenotare un primo colloquio,
          sarò felice di ascoltare la tua situazione e costruire insieme il
          percorso più adatto alle esigenze della tua famiglia.
        </p>

        <a
  href="https://wa.me/393505436111?text=Ciao%20ABAKids,%20vorrei%20ricevere%20informazioni%20sui%20vostri%20servizi."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-violet-200 hover:bg-pink-600 hover:text-violet-200 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
>
  💬 Scrivici su whatsapp
</a>

      </div>
    </section>
  );
}