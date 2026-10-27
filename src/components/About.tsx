import { Award, Leaf, Flame, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Carne Premium',
    text: 'Solo usamos cortes seleccionados de res, molidos frescos cada día.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes Frescos',
    text: 'Vegetales orgánicos de productores locales, cosechados en temporada.',
  },
  {
    icon: Flame,
    title: 'Al Momento',
    text: 'Todo se cocina a la parrilla cuando pides, nada congelado ni recalentado.',
  },
  {
    icon: Clock,
    title: 'Servicio Rápido',
    text: 'Tu pedido listo en menos de 15 minutos, sin sacrificar la calidad.',
  },
];

const ABOUT_IMG =
  'https://images.pexels.com/photos/6111948/pexels-photo-6111948.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative reveal">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={ABOUT_IMG}
              alt="Hamburguesas frescas"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-amber-500 text-stone-950 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="text-4xl font-black">+10</div>
            <div className="text-sm font-bold uppercase tracking-wide">
              Años de sabor
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="reveal">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
              Nuestra Historia
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Pasión por la <span className="text-amber-500">buena comida</span>
            </h2>
          </div>

          <p className="mt-6 text-stone-300 text-lg leading-relaxed reveal">
            Nacimos en 2015 con una idea simple: crear la mejor hamburguesa de la
            ciudad. Sin atajos, sin ingredientes congelados, sin salsas
            envasadas. Solo carne premium, pan artesanal y mucho amor por lo que
            hacemos.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal flex gap-4 p-5 rounded-2xl bg-stone-950/50 border border-stone-800 hover:border-amber-500/40 transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{f.title}</h3>
                  <p className="mt-1 text-sm text-stone-400 leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
