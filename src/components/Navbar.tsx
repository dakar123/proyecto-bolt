import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/90 backdrop-blur-md py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Flame className="w-8 h-8 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-extrabold tracking-tight">
            BURG<span className="text-amber-500">HOUSE</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400 hover:scale-105 transition-all duration-300 animate-pulse-glow"
        >
          Pedir Ahora
        </a>

        <button
          className="md:hidden text-stone-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 pt-4 pb-6 bg-stone-950/95 backdrop-blur-md">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-stone-300 hover:text-amber-400 transition-colors text-lg font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-500 text-stone-950 font-bold text-sm"
            >
              Pedir Ahora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
