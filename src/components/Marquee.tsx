import { Star } from 'lucide-react';

const items = [
  'Carne 100% Res',
  'Pan Artesanal',
  'Ingredientes Frescos',
  'Salsas Caseras',
  'Vegetales Orgánicos',
  'Queso Fundido',
  'Carne 100% Res',
  'Pan Artesanal',
  'Ingredientes Frescos',
  'Salsas Caseras',
  'Vegetales Orgánicos',
  'Queso Fundido',
];

export default function Marquee() {
  return (
    <div className="relative bg-amber-500 text-stone-950 py-4 overflow-hidden border-y-4 border-stone-950">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-6">
            <span className="text-xl md:text-2xl font-black uppercase tracking-tight">
              {item}
            </span>
            <Star className="w-5 h-5 fill-stone-950" />
          </div>
        ))}
      </div>
    </div>
  );
}
