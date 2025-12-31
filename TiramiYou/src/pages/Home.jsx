import { useState, useEffect } from "react";
import AccessibilityMenu from "../components/AccessibilityMenu";
import HomeHero from "../components/HomeHero.jsx";
import StoreGallery from "../components/StoreGallery";
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../translations.js';


/* ======================
   1️⃣ Reviews
====================== */
const reviews = [
  {
    name: "Ismar Nurkovic",
    text: "Total nette Jungs, und das beste Tiramisu der Stadt. Klare Empfehlung",
    stars: 5,
  },
  {
    name: "Herolinda Az",
    text: "Ich finde genau so eine Idee hat im Rhein-Main-Gebiet gefehlt. Das Tiramisu, vor allem das Pistazien-, Haselnuss- und Lotustiramisu hat mir und meinem Partner geschmeckt. Die restlichen Sorten, wie Raffaello- und das klassische Tiramisu werde ich auf jeden Fall auch noch testen. Die Mitarbeiter waren super freundlich, Kunden- und Serviceorientiert und auch die Location ist gelungen gewählt. Weiter so 💪🏼",
    stars: 5,
  },
  {
    name: "Arsalan Havaie",
    text: `Ich bin großer Tiramisu Fan und hatte mich daher sehr auf die Eröffnung gefreut. 
Ich hatte den Classic und Pistazie probiert und es schmeckt unglaublich gut und das Team ist überaus freundlich und charismatisch. 
War auch froh noch rechtzeitig vor Ausverkauf da gewesen zu sein und trotz der hohen Nachfrage ein Cappuccino aufs Haus bekommen. 
#mademyday
Viel Erfolg, freue mich weitere Sorten zu probieren!`,
    stars: 5,
  },
  {
    name: "Sara G.",
    text: "Das Classic Tiramisu war echt sehr lecker und die Betreiber sind super freundlich. Kann man nur weiterempfehlen!!!",
    stars: 5,
  },
  {
    name: "Irfan Nurkovic",
    text: `Ein neuer Lieblingsort in Frankfurt! Stilvolles, gemütliches Ambiente, superfreundliches Team und himmlische Desserts – das Tiramisu ist einfach perfekt: cremig, frisch und voller Geschmack. Dazu gibt’s hervorragenden Kaffee, der alles abrundet.
Fazit: Fünf Sterne in jeder Kategorie – Geschmack, Qualität, Service und Atmosphäre. Ein Muss für alle, die guten Kaffee und feine Desserts lieben!`,
    stars: 5,
  },
  {
    name: "Freazzz",
    text: "Bestes Tiramisu das ich je gegessen habe und sehr nettes Personal, komme gerne wieder",
    stars: 5,
  },
];


/* ======================
   2️⃣ Sterne
====================== */
function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.04 9.401c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
}


/* ======================
   3️⃣ Review Card
====================== */
function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 150;

  const displayText = !expanded && isLong
    ? review.text.slice(0, 150)
    : review.text;

  // Klick auf die gesamte Box nur erlaubt, wenn Text länger als 150 Zeichen
  const handleClick = () => {
    if (isLong) setExpanded(!expanded);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 cursor-pointer w-[300px] flex-shrink-0"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {review.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <Stars count={review.stars} />
        </div>
      </div>

      <p className="text-sm text-gray-600">
        {displayText}
        {isLong && !expanded && "..."}
        {isLong && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="text-pink-500 font-semibold ml-1 cursor-pointer"
          >
            {expanded ? "weniger" : "mehr"}
          </span>
        )}
      </p>
    </div>
  );
}



function ReviewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const handleNext = () => setStartIndex((prev) => (prev + 1) % reviews.length);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(reviews[(startIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Linker Pfeil */}
      <button
        onClick={handlePrev}
        className="absolute left-[-75px] top-1/2 transform -translate-y-1/2 z-10 bg-[#FF93A2] rounded-full p-4 hover:bg-[#FF7B8C] transition-all duration-300 shadow-lg hover:shadow-xl">        
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex gap-6 overflow-x-auto items-start scrollbar-none">
        {getVisibleReviews().map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>

      {/* Rechter Pfeil */}
      <button
        onClick={handleNext}
        className="absolute right-[-75px] top-1/2 transform -translate-y-1/2 z-10 bg-[#FF93A2] rounded-full p-4 hover:bg-[#FF7B8C] transition-all duration-300 shadow-lg hover:shadow-xl">
        <svg
          className="w-6 h-6 text-white rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

    </div>
  );
}


/* ======================
   4️⃣ Home Page
====================== */
export default function Home() {
  const { language } = useLanguage();
  useEffect(() => {
    document.title = "TirmaiYOU";
  }, []);

  return (
    <>
      {/* HERO */}
      <HomeHero />

      {/* BEREICHE */}
      <section className="bg-[rgb(255,240,243)] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12">
            {translations[language].more}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: translations[language].tiramisu, href: "/produkte" },
              { title: translations[language].news, href: "/news" },
              { title: translations[language].direct, href: "/anfahrt" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{item.title}</h3>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* LADEN FOTOS */}
      <StoreGallery />

      {/* GOOGLE REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold">{translations[language].good}</h3>
          <div className="flex justify-center items-center gap-2 my-2">
            <span className="text-lg font-semibold leading-none">4,9</span>
            <Stars count={5} />
          </div>

          <p className="text-sm text-gray-600">
            {translations[language].based} <strong>109 {translations[language].review}</strong>
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-6 mx-auto mt-3 opacity-80"
          />
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel />

        <AccessibilityMenu />
      </section>

    </>
  );
}
