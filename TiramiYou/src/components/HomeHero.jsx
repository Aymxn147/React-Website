import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../translations.js';

const heroSlides = [
  { type: "image", src: "/images/pic1.png" },
  { type: "image", src: "/images/pic2.png" },
  // { type: "video", src: "/videos/hero1.mp4" }, // Aktivieren wenn Video vorhanden
];

export default function HomeHero() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Wechselt alle 5 Sekunden
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFF5F7' }}>
      
      {/* Hintergrund Dekoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex w-full items-center justify-between px-12 lg:px-16"> {/*<-- HIER!!!*/}
        
        {/* Links - Text & Logo */}
        <div className="text-center lg:text-left space-y-8">
          <img 
            src="/images/logo.png" 
            alt="TiramiYou Logo" 
            className="h-32 md:h-40 mx-auto lg:mx-0 drop-shadow-xl"
          />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            {translations[language].spoonful}<br />
            <span style={{ color: '#FF93A2' }}>{translations[language].happy}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-lg mx-auto lg:mx-0">
            {translations[language].cozy}<br />
            {translations[language].yum}
          </p>
        </div>

        {/* Rechts - Diashow */}
        <div className="relative h-[550px] lg:h-[650px] w-[750px] lg:w-[1200px]"> {/*<-- HIER!!!*/}
          {/* Slideshow Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#FF93A2' }}>
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.type === 'image' ? (
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={slide.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  />
                )}
              </div>
            ))}
          </div>

          {/* Slide Indicators (Punkte) */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8' 
                    : 'bg-pink-300'
                }`}
                style={index === currentSlide ? { backgroundColor: '#FF93A2' } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}