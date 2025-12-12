import { BrowserRouter, Routes, Route } from 'react-router-dom';    //--> macht Routing möglich
import TiramiYou from './pages/Home.jsx';
import Produkte from './pages/Produkte.jsx';
import Story from './pages/Story.jsx';
import Kontakt from './pages/Kontakt.jsx';
import NotFound from './pages/NotFound.jsx';
import News from './pages/News.jsx';
import Maps from './pages/Maps.jsx';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <BrowserRouter>
      <NavBar />                                                    {/* Hier wird das Menü angezeigt */}
      <Routes>                                                      {/* Liste aller Seiten */}
        <Route path="/" element={<TiramiYou />} />
        <Route path="/produkte" element={<Produkte />} />
        <Route path="/story" element={<Story />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/news" element={<News />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
