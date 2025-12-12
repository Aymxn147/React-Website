import { useEffect, useState } from 'react';
import { fetchProdukte } from '../api/api.js';

function Produkte() {
  const [produkte, setProdukte] = useState([]);

  useEffect(() => {
    fetchProdukte().then(setProdukte).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Unsere Sorten</h1>
      <h2>Sechs einzigartige Kreationen - jede ein Geschmackserlebnis</h2>
      <ul>
        {produkte.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
}

export default Produkte;

//Diese Seite viel mit Hilfe gemacht also net wundern!