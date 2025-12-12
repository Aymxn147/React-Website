import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>TiramiYou</Link>                     {/* So erstellt man anklickbaren Link */}
      <Link to="/produkte" style={{ margin: '0 1rem' }}>Produkte</Link>
      <Link to="/story" style={{ margin: '0 1rem' }}>Story</Link>
      <Link to="/kontakt" style={{ margin: '0 1rem' }}>Kontakt</Link>
      <Link to="/news" style={{ margin: '0 1rem' }}>News</Link>
      <Link to="/maps" style={{ margin: '0 1rem' }}>Finde Uns</Link>
    </nav>
  );
}

export default NavBar;
