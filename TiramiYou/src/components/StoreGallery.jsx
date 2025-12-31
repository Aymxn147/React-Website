import { useState } from "react";
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../translations.js';

const storeImages = [
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic1.png",
    "/images/pic2.png",
];

export default function StoreGallery() {
    const { language } = useLanguage();
    const [selectedIndex, setSelectedIndex] = useState(null); // Index für Modal
    const [startIndex, setStartIndex] = useState(0); // Index für Hauptkarussell
    const visibleCount = 4; // Anzahl Bilder sichtbar

    // Hauptkarussell Buttons
    const handlePrev = () => {
        setStartIndex((prev) =>
            (prev - 1 + storeImages.length) % storeImages.length
        );
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % storeImages.length);
    };

    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            visible.push(storeImages[(startIndex + i) % storeImages.length]);
        }
        return visible;
    };

    const handleModalPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => {
            const newIndex = (prev - 1 + storeImages.length) % storeImages.length;
            if (newIndex < startIndex) setStartIndex(newIndex);
            return newIndex;
        });
    };

    const handleModalNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => {
            const newIndex = (prev + 1) % storeImages.length;
            if (newIndex >= startIndex + visibleCount) setStartIndex(newIndex - visibleCount + 1);
            return newIndex;
        });
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-20 relative">
            <h2 className="text-2xl font-semibold text-center mb-10">
                {translations[language].store}
            </h2>

            {/* Hauptkarussell */}
            {/* Linker Pfeil */}
            <button
                onClick={handlePrev}
                className="absolute left-[-50px] top-[280px] transform -translate-y-1/2 z-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full p-4 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="flex gap-4 overflow-hidden">
                {getVisibleImages().map((src, i) => {
                    const globalIndex = (startIndex + i) % storeImages.length;
                    return (
                        <img
                            key={i}
                            src={src}
                            alt={`Store ${i}`}
                            className="rounded-2xl h-64 w-64 object-cover shadow flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setSelectedIndex(globalIndex)}
                        />
                    );
                })}
            </div>

            {/* Rechter Pfeil */}
            <button
                onClick={handleNext}
                className="absolute right-[0px] top-[280px] transform -translate-y-1/2 z-10 bg-gradient-to-l from-pink-400 to-pink-500 rounded-full p-4 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <svg
                    className="w-6 h-6 text-white rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Modal mit synchronisiertem Hauptkarussell */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Linker Pfeil */}
                    <button
                        onClick={handleModalPrev}
                        className="absolute left-[100px] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full p-4 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <img
                        src={storeImages[selectedIndex]}
                        alt="Enlarged"
                        className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Rechter Pfeil */}
                    <button
                        onClick={handleModalNext}
                        className="absolute right-[100px] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-l from-pink-400 to-pink-500 rounded-full p-4 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg
                            className="w-6 h-6 text-white rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute top-5 right-5 text-white text-3xl font-bold"
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
}
