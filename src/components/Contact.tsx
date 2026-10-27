import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Dirección', value: 'Av. Principal 123, Centro' },
  { icon: Phone, label: 'Teléfono', value: '+34 600 123 456' },
  { icon: Mail, label: 'Email', value: 'hola@burghouse.com' },
  { icon: Clock, label: 'Horario', value: 'Lun-Dom: 12:00 - 23:00' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-stone-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Contacto
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            Pide o <span className="text-amber-500">reserva</span>
          </h2>
          <p className="mt-4 text-stone-400 max-w-xl mx-auto">
            ¿Listo para probar la mejor hamburguesa? Escríbenos o visítanos.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {info.map((item, i) => (
              <div
                key={item.label}
                className="reveal flex items-start gap-4 p-6 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-stone-500">
                    {item.label}
                  </div>
                  <div className="mt-1 font-semibold text-stone-100">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="reveal sm:col-span-2 rounded-2xl overflow-hidden h-56 bg-stone-950 border border-stone-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-2 animate-bounce" />
                  <p className="text-stone-400 text-sm">Estamos en el centro de la ciudad</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radar-gradient] bg-stone-950" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08), transparent 70%)',
              }} />
            </div>
          </div>

          {/* Form */}
          <div className="reveal p-8 rounded-3xl bg-stone-950/60 border border-stone-800">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tucorreo@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntanos qué necesitas..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-500 text-stone-950 font-bold text-lg hover:bg-amber-400 hover:scale-[1.02] transition-all duration-300"
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
