import { MapPin, Navigation } from "lucide-react";
import AccessibilityMenu from "../components/AccessibilityMenu.jsx";
import { useLanguage } from '../LanguageContext.jsx'; 
import { translations } from '../translations.js';

export default function Anfahrt() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen py-12 px-6 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto">

        {/* Titel */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-[#FF93A2]">
            {translations[language].best}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            {translations[language].here}
          </p>
        </div>

        {/* 2 Spalten Layout */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Linke Seite */}
          <div className="rounded-3xl p-8 bg-white shadow-xl border-2 border-[#FF93A2]">

            {/* Icon + Titel */}
            <div className="text-center flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#FF93A2]">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {translations[language].location}
              </h2>
            </div>

            {/* Adresse */}
            <div className="mb-8 text-center">
              <p className="text-base font-bold mb-3 text-[#FF93A2]">
                {translations[language].addr}
              </p>
              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                Schneckenhofstraße 7<br />
                60596 Frankfurt am Main
              </p>
            </div>

            {/* Öffnungszeiten */}
            <div className="mb-8">
              <p className="text-base font-bold mb-4 text-[#FF93A2] text-center">
                {translations[language].open}
              </p>

              <div className="space-y-3 text-gray-700 text-base">
                <div className="flex justify-between">
                  <span>{translations[language].mo} – {translations[language].do}</span>
                  <span className="font-semibold">15:00 – 20:30</span>
                </div>

                <div className="flex justify-between">
                  <span>{translations[language].fr}</span>
                  <span className="font-semibold">15:30 – 22:00</span>
                </div>

                <div className="flex justify-between">
                  <span>{translations[language].sa}</span>
                  <span className="font-semibold">14:00 – 22:30</span>
                </div>

                <div className="flex justify-between">
                  <span>{translations[language].su}</span>
                  <span className="font-semibold">14:00 – 21:30</span>
                </div>
              </div>
            </div>

            {/* Route Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Schneckenhofstraße+7,+60596+Frankfurt+am+Main"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FF93A2] text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Navigation className="w-5 h-5" />
              {translations[language].route}
            </a>
          </div>

          {/* Rechte Seite - Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#FF93A2]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.188041031707!2d8.677045076839727!3d50.101487212428246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0d3bf15a2ef1%3A0x948374785e1d121c!2sTiramiYOU!5e0!3m2!1sde!2sde!4v1765642641207!5m2!1sde!2sde"
              width="100%"
              height="100%"
              className="min-h-[350px] md:min-h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
      <AccessibilityMenu />
    </div>
    
  );
}
