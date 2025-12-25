import { useState } from "react";
import AccessibilityMenu from "../components/AccessibilityMenu";

/* ======================
   1️⃣ Reviews
====================== */
const reviews = [
  {
    name: "Tan Nguyen",
    text: "Wirklich schöner kleiner Laden. Die Mitarbeiter waren super nett und höflich. Das Tiramisu war unnormal lecker...",
    stars: 5,
  },
  {
    name: "Azra Tas",
    text: "Wir sind auf TikTok drauf gestoßen und musste unbedingt hierhin! Sehr lecker, super Auswahl...",
    stars: 5,
  },
  {
    name: "Sadiq BG",
    text: "Ein absoluter Geheimtipp in Sachsenhausen! Tiramiyu hebt Tiramisu auf ein ganz neues Level...",
    stars: 5,
  },
  {
    name: "Jannick Schneider",
    text: "Alles tip top. Noch nie einen Laden gesehen, der komplett auf Tiramisu spezialisiert ist...",
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

  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {review.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <Stars count={review.stars} />
        </div>
      </div>

      <p
        onClick={() => setExpanded(!expanded)}
        className={`text-sm text-gray-600 cursor-pointer ${expanded ? "" : "line-clamp-3"
          }`}
      >
        {review.text}
      </p>
    </div>
  );
}

/* ======================
   4️⃣ Home Page
====================== */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-20">

        <img
          src="/images/logo.png"
          alt="Logo"
          className="mx-auto h-64 object-contain shadow-md rounded-full"
        />

        <div className="text-center mt-6">
          <span className="inline-block bg-[rgb(255,186,197)] text-white font-semibold px-6 py-2 rounded-full shadow">
            Neu in Frankfurt
          </span>
        </div>

        <div className="text-center py-20 px-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight">
            Dein Löffel <br />
            <span className="text-[rgb(245,130,148)]">Glück</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
            Minimalistisch. Gemütlich. Unwiderstehlich lecker.
          </p>
        </div>

      </section>



{/* BEREICHE */}
<section className="bg-[rgb(255,240,243)] py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12">
      Entdecke mehr
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Unsere Tiramisu's", href: "/tiramisu" },
        { title: "News", href: "/news" },
        { title: "Anfahrt", href: "/anfahrt" },
        { title: "Kontakt", href: "/kontakt" },
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
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Unser Laden
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/images/pic1.png"
            alt="Pic1"
            className="rounded-2xl h-64 w-full object-cover shadow"
          />
          <img
            src="/images/pic2.png"
            alt="Pic2"
            className="rounded-2xl h-64 w-full object-cover shadow"
          />
          <img
            src="/images/pic2.png"
            alt="Pic2"
            className="rounded-2xl h-64 w-full object-cover shadow"
          />
        </div>

      </section>

      {/* GOOGLE REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold">SEHR GUT</h3>
          <div className="flex justify-center items-center gap-2 my-2">
            <span className="text-lg font-semibold leading-none">
              4,9
            </span>

            <Stars count={5} />
          </div>

          <p className="text-sm text-gray-600">
            Basierend auf <strong>97 Bewertungen</strong>
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-6 mx-auto mt-3 opacity-80"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        <AccessibilityMenu />
      </section>

      {/* ACCESSIBILITY */}
      <AccessibilityMenu />
    </>
  );
}
