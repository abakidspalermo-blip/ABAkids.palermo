import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LOGO */}

          <div>
            <Image
              src="/logo.png"
              alt="ABAKids"
              width={170}
              height={170}
              className="mb-6"
            />

            <p className="text-slate-300 leading-7">
              Centro Cognitivo-Comportamentale di Riabilitazione,
              Promozione Sociale e Supporto Educativo.
            </p>
          </div>

          {/* CONTATTI */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Contatti
            </h3>

            <div className="space-y-3 text-slate-300">

              <p>📞 +39 3505436111 - 3334175316 </p>

              <p>✉️ abakids.palermo@gmail.com</p>

              <p>📍 Via Tommaso Marcellini 8/H Palermo </p>

            </div>

          </div>

          {/* LINK */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Navigazione
            </h3>

            <div className="space-y-3">

              <a href="#" className="block hover:text-pink-300 transition">
                Home
              </a>

              <a href="#" className="block hover:text-pink-300 transition">
                Servizi
              </a>

              <a href="#" className="block hover:text-pink-300 transition">
                Contatti
              </a>

              <a href="#" className="block hover:text-pink-300 transition">
                Privacy Policy
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">

          ©️ {new Date().getFullYear()} ABAKids • Tutti i diritti riservati

        </div>

      </div>

    </footer>
  );
}