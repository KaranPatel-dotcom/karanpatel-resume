import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import ImpactAndCulture from './components/ImpactAndCulture';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ImpactAndCulture />
        <Experience />
        <Education />
        <Skills />
        <Recommendations />
        <Contact />
      </main>

      <Footer />
      
      {/* Interactive AI Assistant Floating Button/Modal */}
      <AiChat />
    </div>
  );
};

export default App;