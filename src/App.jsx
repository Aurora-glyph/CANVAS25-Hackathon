import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Components
import DeityCard from './components/DeityCard';
import FluxOcean from './components/FluxOcean';
import StorySection from './components/StorySection';
import MerchSection from './components/MerchSection';
import { RevealText } from './components/RevealText';

// Assets
import csArt from './assets/cs_deity_art_1766576972264.png';
import eeeArt from './assets/eee_deity_art_1766577000552.png';
import mechArt from './assets/mech_deity_art_1766577024488.png';
import chemArt from './assets/chem_deity_art_1766577048222.png';

const departments = [
  {
    id: 'cs',
    name: 'Computer Science',
    title: 'The Digital Weaver',
    lore: 'Weaving the fabric of reality with threads of binary light. The tides of data obey our command.',
    image: csArt,
    color: 'cyan'
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics',
    title: 'The Storm Warden',
    lore: 'Harnessing the raw fury of the skies. Where lightning strikes, we build our lighthouse.',
    image: eeeArt,
    color: 'purple'
  },
  {
    id: 'mech',
    name: 'Mechanical',
    title: 'The Abyss Forged',
    lore: 'From the crushing depths, we rise. Fueled by steam, driven by gears, unbreakable as iron.',
    image: mechArt,
    color: 'orange'
  },
  {
    id: 'chem',
    name: 'Chemical',
    title: 'The Reef Alchemist',
    lore: 'Transmuting elements in the coral gardens. Nature is but a formula waiting to be rewritten.',
    image: chemArt,
    color: 'pink'
  }
];

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-bits-dark text-white selection:bg-bits-gold selection:text-black">
      {/* 3D Background */}
      <FluxOcean />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden z-10">
        <h1 className="text-6xl md:text-9xl mb-4 font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          BITS GOA
        </h1>
        <RevealText>
          <p className="text-xl md:text-2xl text-bits-cyan font-light tracking-[0.5em] uppercase mb-12 p-4 rounded-lg bg-black/10">
            Department Deities: Coastal Edition
          </p>
        </RevealText>

        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-bits-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* Story Section (Horizontal Scroll) */}
      <StorySection />

      {/* Gallery Section */}
      <section className="py-32 px-4 md:px-10 relative z-10 bg-gradient-to-b from-bits-dark/80 via-bits-dark to-bits-dark/80">
        <div className="text-center mb-24">
          <RevealText>
            <span className="text-bits-gold tracking-widest uppercase mb-2 block">The Pantheon</span>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-display text-white animate-lightning">Choose Your Path</h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
          {departments.map((dept) => (
            <DeityCard key={dept.id} {...dept} />
          ))}
        </div>
      </section>

      {/* Merch Section */}
      <MerchSection />

      {/* Footer */}
      <footer className="py-20 text-center text-gray-500 text-sm bg-black relative z-10">
        <p className="font-display text-bits-gold text-lg mb-2">BITS Pilani, Goa Campus</p>
        <p>Created for CSA Designathon.</p>
        <p className="mt-1">Made by Uttkarsh & Adrija</p>
      </footer>
    </div>
  );
}

export default App;
