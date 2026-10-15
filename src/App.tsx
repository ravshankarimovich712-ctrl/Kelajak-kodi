import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorGlow from './components/CursorGlow';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiIntro from './components/AiIntro';
import CodingWorld from './components/CodingWorld';
import InteractiveSection from './components/InteractiveSection';
import SchoolProject from './components/SchoolProject';
import UzbekistanIt from './components/UzbekistanIt';
import ContactFooter from './components/ContactFooter';
import ScrollTopButton from './components/ScrollTopButton';
import ExportModal from './components/ExportModal';

export default function App() {
  const [exportModalOpen, setExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative selection:bg-cyan-500/30 selection:text-white">
      {/* Loading overlay */}
      <LoadingScreen />

      {/* Top scroll progress line */}
      <ScrollProgressBar />

      {/* Subtle cursor follower glow on desktop */}
      <CursorGlow />

      {/* Background Neural Network Particle Canvas */}
      <CanvasBackground />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenExport={() => setExportModalOpen(true)} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Sun'iy intellekt nima? */}
        <AiIntro />

        {/* 3. Dasturlash olami & Roadmap */}
        <CodingWorld />

        {/* 4. Interaktiv qism: Test & Mini AI Chat */}
        <InteractiveSection />

        {/* 5. Mening loyiham vitrinasi */}
        <SchoolProject />

        {/* 6. O'zbekistonda IT kelajagi */}
        <UzbekistanIt />
      </main>

      {/* 7. Aloqa va Yakuniy footer */}
      <ContactFooter onOpenExport={() => setExportModalOpen(true)} />

      {/* Scroll to Top floating action button */}
      <ScrollTopButton />

      {/* Standalone index.html Export & Guide Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />
    </div>
  );
}
