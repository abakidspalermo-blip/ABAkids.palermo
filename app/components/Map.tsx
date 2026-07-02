export default function Map() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          Dove trovarci
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Saremo felici di accoglierti presso il nostro centro.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Informazioni */}
          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold text-pink-600">
                📍 Indirizzo
              </h3>

              <p className="text-gray-700">
                Via Tommaso Marcellini 8/H
                <br />
                Palermo
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-sky-600">
                📞 Telefono
              </h3>

              <p className="text-gray-700">
                350 543 6111
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-violet-600">
                ✉️ Email
              </h3>

              <p className="text-gray-700">
                ABAkids.palermo@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-600">
                🕘 Orari
              </h3>

              <p className="text-gray-700">
                Lunedì - Venerdì
                <br />
                08:30 - 19:30
              </p>
            </div>
<a
  href="https://maps.google.com/?q=Via+Tommaso+Marcellini+8/H+Palermo"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105"
>
  📍 Apri in Google Maps
</a>
          </div>

          {/* Mappa */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <iframe
              src="https://maps.google.com/maps?q=Via%20Tommaso%20Marcellini%208/H%20Palermo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  );
}