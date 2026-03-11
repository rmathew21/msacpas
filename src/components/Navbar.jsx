import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const links = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/95'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-forest-800 font-serif text-lg font-bold tracking-tight">Samuel CPA</span>
            <span className="text-sage-500 text-xs tracking-[0.2em] uppercase">PLLC</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 pb-0.5 border-b-2 ${
                    isActive
                      ? 'text-forest-700 border-forest-600'
                      : 'text-gray-600 border-transparent hover:text-forest-700 hover:border-forest-300'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone CTA */}
          <a href="tel:2815649500" className="hidden md:flex items-center gap-2 text-forest-700 text-sm font-medium hover:text-forest-900 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (281) 564-9500
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-forest-800"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-widest uppercase font-medium py-2 border-b border-gray-50 ${
                  isActive ? 'text-forest-700' : 'text-gray-600'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href="tel:2815649500" className="text-forest-700 text-sm font-medium pt-2">(281) 564-9500</a>
        </nav>
      </div>
    </header>
  );
}
