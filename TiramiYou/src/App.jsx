import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Anfahrt from "./Anfahrt.jsx";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28"> {/* flex-grow nimmt allen verfügbaren Platz */}
        <Anfahrt />
      </main>
      <Footer />
    </div>
  );
}

export default App;
