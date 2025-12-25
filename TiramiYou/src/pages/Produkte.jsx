import { useEffect, useState } from 'react';

function Produkte() {
  const [produkte, setProdukte] = useState([]);

  // Beispiel-Produkte (später durch echte API ersetzen)
  const produktListe = [
    { name: 'Classic Tiramisu', preis: '5,90 €', bild: '/src/assets/Classic.png' },
    { name: 'Classic Tiramisu', preis: '5,90 €', bild: '/src/assets/Classic.png' },
    { name: 'Classic Tiramisu', preis: '5,90 €', bild: '/src/assets/Classic.png' },
    { name: 'Classic Tiramisu', preis: '5,90 €', bild: '/src/assets/Classic.png' },
    { name: 'Classic Tiramisu', preis: '5,90 €', bild: '/src/assets/Classic.png' },
    { name: 'Classic Tiramisu', preis: '5,90 €', bild: '/src/assets/Classic.png' }
  ];

  return (
    <div className="min-h-screen py-12 px-6" style={{backgroundColor: '#FFF5F7'}}>
      <div className="max-w-6xl mx-auto">
        
        {/* Titel */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: '#FF93A2' }}>
            Unsere Tiramisus
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            Frisch zubereitet mit Liebe
          </p>
        </div>

        {/* Produkte Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {produktListe.map((produkt, index) => (
            <div 
              key={index}
              className='bg-white rounded-3xl shadow-xl border-2 border-[#FF93A2] p-4 hover:scale-105 transition-transform duration-300'
            >
              <div>
                <img 
                  src={produkt.bild} 
                  alt={produkt.name} 
                  className='w-full h-48 object-contain rounded-2xl bg-gray-50'
                />
                <h3 className='text-xl font-bold mt-4 text-gray-900'>{produkt.name}</h3>
                <p className='text-lg font-semibold mt-2' style={{ color: '#FF93A2' }}>{produkt.preis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produkte;