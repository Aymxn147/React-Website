import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Seiten fürs Routing
import TiramiYou from './pages/Home.jsx';
import Produkte from './pages/Produkte.jsx';
import Story from './pages/Story.jsx';
import Kontakt from './pages/Kontakt.jsx';
import NotFound from './pages/NotFound.jsx';
import News from './pages/News.jsx';
import Maps from './pages/Maps.jsx';
import Anfahrt from "./Anfahrt.jsx";


// Globale Komponenten
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        {/* Header bleibt oben */}
        <Header />

        {/* Inhalt wächst dynamisch */}
        <main className="flex-grow pt-28">

          {/* Routing Bereich */}
          <Routes>
            <Route path="/" element={<TiramiYou />} />
            <Route path="/produkte" element={<Produkte />} />
            <Route path="/story" element={<Story />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/news" element={<News />} />
            <Route path="/anfahrt" element={<Anfahrt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer bleibt unten */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
