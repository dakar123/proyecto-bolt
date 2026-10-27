import { ChevronDown } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Hamburguesa gourmet"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/60 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent" />
      </div>

 {/* Floating burger particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 text-center md:text-left">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            100% Carne de Res Premium
          </span>
        </div>

        <h1
          className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Hambre que<br />
          <span className="shimmer-text">no perdona</span>
        </h1>

        <p
          className="mt-6 max-w-xl text-lg md:text-xl text-stone-300 leading-relaxed animate-fade-up mx-auto md:mx-0"
          style={{ animationDelay: '0.6s' }}
        >
          Hamburguesas artesanales hechas con ingredientes frescos, carne
          premium y ese toque de fuego que te va a dejar sin palabras.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-stone-950 font-bold text-lg hover:bg-amber-400 hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Ver el Menú
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-stone-600 text-stone-200 font-bold text-lg hover:border-amber-500 hover:text-amber-400 transition-all duration-300"
          >
            Conócenos
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto md:mx-0 animate-fade-up"
          style={{ animationDelay: '1s' }}
        >
          {[
            { value: '15K+', label: 'Clientes felices' },
            { value: '25+', label: 'Estilos de burger' },
            { value: '4.9★', label: 'Calificación' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-amber-500">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-stone-400 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-stone-600 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-amber-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingParticles() {
  const emojis = ['🍔', '🍟', '🥤', '🍔', '🧀', '🌶️', '🍔', '🍟'];
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {emojis.map((e, i) => (
        <span
          key={i}
          className="absolute text-3xl md:text-4xl"
          style={{
            left: `${(i * 12 + 5) % 95}%`,
            bottom: '-50px',
            animation: `float-up ${12 + i * 1.5}s linear infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        >
          {e}
        </span>
      ))}
    </div>
  );
}
