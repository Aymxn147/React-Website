import { useState, useEffect, useRef} from 'react';
import { Menu, X, MapPin, Home as HomeIcon, Cake, Users, Newspaper, Phone } from 'lucide-react';
import logoImage from '../src/assets/TiramiYOU.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  const navItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Unsere Tiramisu', href: '/produkte', icon: Cake },
    { name: 'Anfahrt', href: '/anfahrt', icon: MapPin },
    { name: 'Über uns', href: '/about', icon: Users },
    { name: 'Kontakt', href: '/contact', icon: Phone },
    { name: 'News', href: '/news', icon: Newspaper }
  ];

  return (
    <>
      <nav
        className={`absolute top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ${
          scrolled ? 'shadow-2xl py-3' : 'shadow-xl py-4'
        } backdrop-blur-md rounded-full`}
        style={{
          backgroundColor: '#FF93A2',
          borderColor: '#FF93A2',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        <div className="w-full px-6 sm:px-8 lg:px-10 relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <img
                src={logoImage}
                alt="TiramiYou Logo"
                className="h-16 md:h-20 w-auto shadow-xl group-hover:scale-105 transition-transform duration-300 rounded-3xl"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-white font-semibold transition-colors duration-200 group flex items-center gap-1.5"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FEF6CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-1 rounded-full group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: '#FEF6CC' }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full transition-colors"
              style={{ color: 'white'}}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md lg:hidden z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 rounded-3xl shadow-2xl" style={{ backgroundColor: '#FF93A2' }}>
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 text-white hover:bg-white/20 rounded-2xl font-semibold transition-all duration-200 flex items-center gap-2"
                style={{
                  animation: isOpen ? `slideDown 0.3s ease-out ${index * 30}ms both` : 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FEF6CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
