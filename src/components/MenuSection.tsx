import { useState } from 'react';
import { Flame, Plus } from 'lucide-react';

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  spicy?: boolean;
};

const burgers: MenuItem[] = [
  {
    name: 'Clásica Supreme',
    description: 'Doble carne de res, queso cheddar, lechuga, tomate y salsa secreta.',
    price: 8.5,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Más vendida',
  },
  {
    name: 'Bacon Inferno',
    description: 'Triple carne, bacon crujiente, queso fundido y salsa picante.',
    price: 11.0,
    image: 'https://images.pexels.com/photos/28966660/pexels-photo-28966660.jpeg?auto=compress&cs=tinysrgb&w=800',
    spicy: true,
    tag: 'Nueva',
  },
  {
    name: 'Cheddar Dream',
    description: 'Carne premium, cheddar caramelizado, cebolla confitada y pan brioche.',
    price: 9.5,
    image: 'https://images.pexels.com/photos/15146667/pexels-photo-15146667.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Smokehouse BBQ',
    description: 'Carne ahumada, salsa BBQ casera, bacon, aros de cebolla y queso.',
    price: 10.5,
    image: 'https://images.pexels.com/photos/2267538/pexels-photo-2267538.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Double Cheese',
    description: 'Doble queso americano, doble carne, pepinillos y mostaza dijon.',
    price: 9.0,
    image: 'https://images.pexels.com/photos/4080534/pexels-photo-4080534.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Gourmet Deluxe',
    description: 'Carne Wagyu, queso gruyère, rúcula, tomate seco y aioli trufado.',
    price: 14.0,
    image: 'https://images.pexels.com/photos/3727243/pexels-photo-3727243.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Premium',
  },
];

const sides: MenuItem[] = [
  {
    name: 'Papas Clásicas',
    description: 'Crujientes papas fritas doradas con sal marina.',
    price: 3.5,
    image: 'https://images.pexels.com/photos/7731983/pexels-photo-7731983.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Papas con Queso',
    description: 'Papas bañadas en queso cheddar fundido y bacon.',
    price: 5.0,
    image: 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Loaded Fries',
    description: 'Papas con salsa secreta, cebolla caramelizada y queso doble.',
    price: 6.0,
    image: 'https://images.pexels.com/photos/8272619/pexels-photo-8272619.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const drinks: MenuItem[] = [
  {
    name: 'Chocolate Shake',
    description: 'Batido de chocolate cremoso con crema batida y cereza.',
    price: 4.5,
    image: 'https://images.pexels.com/photos/27626320/pexels-photo-27626320.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Freak Shake',
    description: 'Batido decorado con dulces, galletas y sirope. Pura locura.',
    price: 6.5,
    image: 'https://images.pexels.com/photos/6463666/pexels-photo-6463666.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Instagramable',
  },
  {
    name: 'Classic Shake',
    description: 'Batido de vainilla clásico, espeso y delicioso.',
    price: 4.0,
    image: 'https://images.pexels.com/photos/14662100/pexels-photo-14662100.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = [
  { key: 'burgers', label: 'Hamburguesas', items: burgers },
  { key: 'sides', label: 'Acompañamientos', items: sides },
  { key: 'drinks', label: 'Bebidas', items: drinks },
] as const;

export default function MenuSection() {
  const [active, setActive] = useState<(typeof categories)[number]['key']>('burgers');
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="relative py-24 bg-stone-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Nuestro Menú
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            Elige tu <span className="text-amber-500">tentación</span>
          </h2>
          <p className="mt-4 text-stone-400 max-w-xl mx-auto">
            Cada hamburguesa se prepara al momento con ingredientes frescos del día.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center gap-3 flex-wrap reveal">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                active === cat.key
                  ? 'bg-amber-500 text-stone-950 scale-105 shadow-lg shadow-amber-500/30'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div key={active} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article
      className="group relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />

        {item.tag && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wide">
            {item.tag}
          </span>
        )}
        {item.spicy && (
          <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold">
            <Flame className="w-3.5 h-3.5" /> Picante
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors">
            {item.name}
          </h3>
          <span className="text-2xl font-black text-amber-500 whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-sm text-stone-400 leading-relaxed">
          {item.description}
        </p>
        <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors group/btn">
          <span className="w-7 h-7 rounded-full bg-amber-500/15 flex items-center justify-center group-hover/btn:bg-amber-500 transition-colors">
            <Plus className="w-4 h-4 text-amber-500 group-hover/btn:text-stone-950 transition-colors" />
          </span>
          Añadir al pedido
        </button>
      </div>
    </article>
  );
}
