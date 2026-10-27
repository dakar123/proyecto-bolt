import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import MenuSection from '@/components/MenuSection';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-stone-950">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <MenuSection />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
