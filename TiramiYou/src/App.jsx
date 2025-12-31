import { BrowserRouter, Routes, Route } from 'react-router-dom';    //--> macht Routing möglich
import TiramiYou from './pages/Home.jsx';
import Produkte from './pages/Produkte.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import News from './pages/News.jsx';
import Anfahrt from "./pages/Anfahrt.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Agb from "./pages/Agb.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";


// Globale Komponenten
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <LanguageProvider>
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
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/anfahrt" element={<Anfahrt />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<Agb />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer bleibt unten */}
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
