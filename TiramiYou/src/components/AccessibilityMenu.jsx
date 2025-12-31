import { useState, useEffect } from "react";
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations.js';

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [bigCursor, setBigCursor] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Schriftgröße anwenden
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // Sprache anwenden
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Großer Mauszeiger
  useEffect(() => {
    if (bigCursor) {
      document.body.style.cursor = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 24 24\" fill=\"white\" stroke=\"black\" stroke-width=\"1\"><path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"/></svg>') 12 12, auto";

      // Für interaktive Elemente
      const style = document.createElement('style');
      style.id = 'big-cursor-style';
      {/*GRÖßE VON CURSOR IM BIG-MODE (und Hover)*/ }
      style.textContent = `
        * { 
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="white" stroke="black" stroke-width="1"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') 12 12, auto !important;
        }
        button:hover, a:hover, input:hover, select:hover {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="rgb(236, 72, 153)" stroke="white" stroke-width="1"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') 14 14, pointer !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      document.body.style.cursor = "";
      const style = document.getElementById('big-cursor-style');
      if (style) style.remove();
    }
  }, [bigCursor]);

  // Reset
  function resetAll() {
    setFontSize(100);
    setBigCursor(false);
    setLanguage("de");
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
     bg-[rgb(255,147,162)] hover:bg-[rgb(245,130,148)]
     text-white shadow-lg flex items-center justify-center transition"
        aria-label={translations[language].accessibility}
      >
        <img
          src="images/accessibility.png"
          alt="Accessibility"
          className="w-9 h-9 filter invert"
        />
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-xl p-5 transition-all duration-300 ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <h3 className="text-lg font-semibold mb-4">
          {translations[language].accessibility}
        </h3>

        {/* Schriftgröße */}
        <div className="mb-5">
          <p className="text-sm font-medium mb-2">
            {translations[language].textSize}
          </p>
          <input
            type="range"
            min="90"
            max="130"
            step="5"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-1">
            {fontSize}%
          </p>
        </div>

        {/* Sprache */}
        <div className="mb-5">
          <p className="text-sm font-medium mb-2">
            {translations[language].language}
          </p>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="de">Deutsch</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Weitere Funktionen */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">
            {translations[language].otherFeatures}
          </p>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={bigCursor}
              onChange={() => setBigCursor(!bigCursor)}
            />
            {translations[language].bigCursor}
          </label>
        </div>

        {/* Reset */}
        <button
          onClick={resetAll}
          className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-lg transition"
        >
          {translations[language].reset}
        </button>
      </div>
    </>
  );
}