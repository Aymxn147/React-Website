import { BrowserRouter, Routes, Route } from 'react-router-dom';    //--> macht Routing möglich
import Home from './pages/Home.jsx';
import Produkte from './pages/Produkte.jsx';
import Kontakt from './pages/Kontakt.jsx';
import NotFound from './pages/NotFound.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />                                                    {/* Hier wird das Menü angezeigt */}
      <Routes>                                                      {/* Liste aller Seiten */}
        <Route path="/" element={<Home />} />
        <Route path="/produkte" element={<Produkte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
