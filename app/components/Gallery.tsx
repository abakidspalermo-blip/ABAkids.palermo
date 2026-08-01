"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/centro1.jpg",
  "/images/centro2.jpg",
  "/images/centro3.jpg",
  "/images/centro4.jpg",
  "/images/centro5.jpg",
  "/images/centro6.jpg",
  "/images/centro7.jpg",
  "/images/centro8.jpg",
  "/images/centro9.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="ambienti"
      className="py-24 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600">
          I nostri ambienti
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Ambienti luminosi, accoglienti e progettati per favorire il
          benessere, il gioco e l'apprendimento di bambini, ragazzi e famiglie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {images.map((img, index) => (

            <div
              key={index}
              onClick={() => setSelected(index)}
              className="cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={img}
                alt={`Ambiente ${index + 1}`}
                width={700}
                height={500}
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />
            </div>

          ))}

        </div>

        {selected !== null && (

          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelected(null)}
          >

            <button
              className="absolute top-8 right-8 text-white text-5xl"
            >
              ×
            </button>

            <Image
              src={images[selected]}
              alt=""
              width={1400}
              height={900}
              className="max-h-[90vh] w-auto rounded-2xl"
            />

          </div>

        )}

      </div>
    </section>
  );
}