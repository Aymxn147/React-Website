import { useState, useEffect } from "react";

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [bigCursor, setBigCursor] = useState(false);
  const [language, setLanguage] = useState("de");

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
      document.body.classList.add("big-cursor");
    } else {
      document.body.classList.remove("big-cursor");
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
  aria-label="Barrierefreiheit"
>
  <img
    /*src="images/accessibility.png"            <-- Ist von freepik.com. Darf man nur nutzen wenn man es irgendwo nennt. Such Alternative!!!
    alt="Accessibility"
    className="w-9 h-9 filter invert"*/
  />
</button>


      {/* Panel */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-xl p-5 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">
          Barrierefreiheit
        </h3>

        {/* Schriftgröße */}
        <div className="mb-5">
          <p className="text-sm font-medium mb-2">
            Textgröße
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
            Sprache
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
            Weitere Funktionen
          </p>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={bigCursor}
              onChange={() => setBigCursor(!bigCursor)}
            />
            Großer Mauszeiger
          </label>
        </div>

        {/* Reset */}
        <button
          onClick={resetAll}
          className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-lg transition"
        >
          Alles zurücksetzen
        </button>
      </div>
    </>
  );
}