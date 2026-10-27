import { Flame, Instagram, Facebook, Twitter } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-extrabold">
                BURG<span className="text-amber-500">HOUSE</span>
              </span>
            </div>
            <p className="mt-4 text-stone-400 leading-relaxed max-w-sm">
              Hamburguesas artesanales hechas con pasión. Carne premium,
              ingredientes frescos y mucho sabor.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-950 hover:border-amber-500 transition-all duration-300"
                  aria-label="Red social"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <h4 className="font-bold uppercase tracking-wide text-sm text-stone-500 mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-wide text-sm text-stone-500 mb-4">
              Recibe ofertas
            </h4>
            <p className="text-stone-400 text-sm mb-4">
              Suscríbete y recibe promociones exclusivas.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 focus:border-amber-500 outline-none text-sm"
              />
              <button className="px-4 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400 transition-colors">
                Unirme
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>© 2026 BurgHouse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
