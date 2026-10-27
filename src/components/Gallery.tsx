const images = [
  { src: 'https://images.pexels.com/photos/3727243/pexels-photo-3727243.jpeg?auto=compress&cs=tinysrgb&w=800', span: 'lg:row-span-2', h: 'h-64 lg:h-full' },
  { src: 'https://images.pexels.com/photos/11812583/pexels-photo-11812583.jpeg?auto=compress&cs=tinysrgb&w=800', span: '', h: 'h-64' },
  { src: 'https://images.pexels.com/photos/7731983/pexels-photo-7731983.jpeg?auto=compress&cs=tinysrgb&w=800', span: '', h: 'h-64' },
  { src: 'https://images.pexels.com/photos/27626320/pexels-photo-27626320.jpeg?auto=compress&cs=tinysrgb&w=800', span: 'lg:row-span-2', h: 'h-64 lg:h-full' },
  { src: 'https://images.pexels.com/photos/4080534/pexels-photo-4080534.jpeg?auto=compress&cs=tinysrgb&w=800', span: '', h: 'h-64' },
  { src: 'https://images.pexels.com/photos/8272619/pexels-photo-8272619.jpeg?auto=compress&cs=tinysrgb&w=800', span: '', h: 'h-64' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Galería
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            Un festín para los <span className="text-amber-500">ojos</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:auto-rows-[16rem]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden ${img.span} ${img.h} reveal`}
            >
              <img
                src={img.src}
                alt={`Galería ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                  BurgHouse
                </span>
                <p className="text-stone-100 font-bold text-lg">Delicia {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
