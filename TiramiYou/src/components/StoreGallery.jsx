import { useState } from "react";

const storeImages = [
    "/images/pic2.png",
    "/images/pic2.png",
    "/images/pic2.png",
    "/images/pic2.png",
    "/images/pic1.png",
];

export default function StoreGallery() {
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
                Unser Laden
            </h2>

            {/* Hauptkarussell */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 z-10"
            >
                ◀
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

            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 z-10"
            >
                ▶
            </button>

            {/* Modal mit synchronisiertem Hauptkarussell */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        onClick={handleModalPrev}
                        className="absolute left-5 text-white text-3xl font-bold z-20"
                    >
                        ◀
                    </button>

                    <img
                        src={storeImages[selectedIndex]}
                        alt="Enlarged"
                        className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={handleModalNext}
                        className="absolute right-5 text-white text-3xl font-bold z-20"
                    >
                        ▶
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
