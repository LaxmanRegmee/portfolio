import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Recognition } from './components/sections/Recognition';
import { Contact } from './components/sections/Contact';
import { MarqueeText } from './components/MarqueeText';
import { useSmooth } from './hooks/useSmooth';

function App() {
  useSmooth();

  return (
    <div className="bg-[#0c0c0c] text-white">
      <MarqueeText />
      <Header />
      <main data-scroll-container>
        <Hero />
        <Work />
        <About />
        <Recognition />
        <Contact />
      </main>
    </div>
  );
}

export default App;