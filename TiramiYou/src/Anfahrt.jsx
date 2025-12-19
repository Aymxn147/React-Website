import { MapPin, Navigation } from 'lucide-react';

export default function Anfahrt() {
  return (
    <div className="min-h-screen py-12 px-6" style={{ backgroundColor: '#FFF5F7' }}>
      <div className="max-w-6xl mx-auto">
        {/* Titel */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-2" style={{ color: '#FF93A2' }}>
            Die Besten Tiramisus der Stadt!
          </h1>
          <p className="text-gray-600">Findest du nur Hier:</p>
        </div>

        {/* 2 Spalten Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Linke Seite - Info Box */}
          <div className="rounded-3xl p-8 bg-white shadow-xl" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#FF93A2' }}>
            {/* Icon + Titel */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF93A2' }}>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Unser Standort</h2>
            </div>

            {/* Adresse */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-2" style={{ color: '#FF93A2' }}>Adresse</p>
              <p className="text-lg font-semibold text-gray-900">
                Schneckenhofstraße 7<br />
                60596 Frankfurt am Main
              </p>
            </div>

            {/* Öffnungszeiten */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3" style={{ color: '#FF93A2' }}>Öffnungszeiten</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Mo - Do</span>
                  <span className="font-semibold">15:00 - 20:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Freitag</span>
                  <span className="font-semibold">15:30 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-semibold">14:00 - 22:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span className="font-semibold">14:00 - 21:30</span>
                </div>
              </div>
            </div>

            {/* Route Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Schneckenhofstraße+7,+60596+Frankfurt+am+Main"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
              style={{ backgroundColor: '#FF93A2' }}
            >
              <Navigation className="w-5 h-5" />
              Route planen
            </a>
          </div>

          {/* Rechte Seite - Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#FF93A2' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.188041031707!2d8.677045076839727!3d50.101487212428246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0d3bf15a2ef1%3A0x948374785e1d121c!2sTiramiYOU!5e0!3m2!1sde!2sde!4v1765642641207!5m2!1sde!2sde"
              width="100%"
              height="100%"
              className="min-h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}