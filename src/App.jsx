import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import WorkSection from './components/WorkSection';
import ReelWall from './components/ReelWall';
import ServicesSection from './components/ServicesSection';
import ManifestoSection from './components/ManifestoSection';
import HighlightsSection from './components/HighlightsSection';
import CollectiveSection from './components/CollectiveSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-rd-black text-white">
      {/* Premium Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero — full viewport */}
        <Hero />

        {/* 2. Marquee Banner */}
        <MarqueeBanner />

        {/* 3. Selected Work */}
        <ScrollReveal delay={60}>
          <WorkSection />
        </ScrollReveal>

        {/* 4. Frames From The Floor (Reel Wall) */}
        <ScrollReveal delay={60}>
          <ReelWall />
        </ScrollReveal>

        {/* 5. Services */}
        <ScrollReveal delay={60}>
          <ServicesSection />
        </ScrollReveal>

        {/* 5. Manifesto */}
        <ScrollReveal delay={60}>
          <ManifestoSection />
        </ScrollReveal>

        {/* 6. Highlights */}
        <ScrollReveal delay={60}>
          <HighlightsSection />
        </ScrollReveal>

        {/* 7. The Collective */}
        <ScrollReveal delay={60}>
          <CollectiveSection />
        </ScrollReveal>

        {/* 8. Contact */}
        <ScrollReveal delay={60}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal delay={80}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
