import { useState } from 'react';
import AccessibilityMenu from "../components/AccessibilityMenu";
import { useLanguage } from '../LanguageContext.jsx'; 
import { translations } from '../translations.js';

function Produkte() {
  const { language } = useLanguage();
  const [flippedIndex, setFlippedIndex] = useState(null);

  const produktListe = [
    {
      name: 'Classic',
      untertitel: translations[language].a,
      beschreibung: translations[language].a_2,
      preis: '5,90 €',
      bild: '/images/Classic.png',
      bestseller: true,
    },
    {
      name: 'Lotus Biscoff',
      untertitel: translations[language].b,
      beschreibung: translations[language].b_2,
      preis: '6,90 €',
      bild: '/images/Lotus.png',
      bestseller: true,
    },
    {
      name: 'Bueno',
      untertitel: translations[language].c,
      beschreibung: translations[language].c_2,
      preis: '6,90 €',
      bild: '/images/Bueno.png',
      bestseller: true,
    },
    {
      name: translations[language].pistachio,
      untertitel: translations[language].d,
      beschreibung: translations[language].d_2,
      preis: '7,40 €',
      bild: '/images/Pistazie.png'
    },
    {
      name: translations[language].berry,
      untertitel: translations[language].e,
      beschreibung: translations[language].e_2,
      preis: '6,90 €',
      bild: '/images/Erdbeere.png'
    },
    {
      name: 'Raffaello',
      untertitel: translations[language].f,
      beschreibung: translations[language].f_2,
      preis: '6,90 €',
      bild: '/images/Raffaello.png'
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto">

        {/* Titel */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-[#FF93A2]">
            {translations[language].tiramisu}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {translations[language].fresh}
          </p>
        </div>

        {/* Produkt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produktListe.map((produkt, index) => (
            <div
              key={index}
              className="relative w-full h-[340px] cursor-pointer perspective
                         overflow-hidden rounded-3xl
                         transition-all duration-300
                         hover:shadow-2xl hover:-translate-y-1"
              onClick={() =>
                setFlippedIndex(flippedIndex === index ? null : index)
              }
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
                  ${flippedIndex === index ? 'rotate-y-180' : ''}`}
              >
                {/* Vorderseite */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl border-2 border-[#FF93A2] p-5 shadow-xl">
                  {produkt.bestseller && (
                    <div className="absolute top-3 right-3 bg-[#FF93A2] text-white font-black px-3 py-1 rounded-full shadow-lg text-sm">
                      #{index + 1} Bestseller
                    </div>
                  )}

                  <img
                    src={produkt.bild}
                    alt={produkt.name}
                    className="w-full h-44 object-contain rounded-2xl bg-[#FFF5F7] p-4"
                  />

                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      {produkt.name}
                    </h3>
                    <p className="text-lg font-semibold mt-2 text-[#FF93A2]">
                      {produkt.preis}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {translations[language].click}
                    </p>
                  </div>
                </div>

                {/* Rückseite */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#FF93A2] rounded-3xl p-6 text-white shadow-xl flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-black mb-2">{produkt.untertitel}</h3>
                  <p className="text-lg mb-4">{produkt.beschreibung}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl border-2 border-[#FF93A2] p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#FF93A2' }}>
              {translations[language].feel}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              {translations[language].come}
            </p>
            <a
              href="/anfahrt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF93A2] text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📍 {translations[language].visit}
            </a>
            <div className="mt-4">
              <a
                href="/TiramiYou-Speisekarte.pdf"
                download="TiramiYou-Speisekarte.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#FF93A2] font-bold border-2 border-[#FF93A2] rounded-full hover:bg-[#FF93A2] hover:text-white transition-all duration-300"
              >
                📥 {translations[language].download}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flip CSS */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <AccessibilityMenu />
    </div>

  );
}

export default Produkte;
