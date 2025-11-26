import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './views/Hero';
import Work from './views/Work';
import About from './views/About';
import Contact from './views/Contact';
import ProjectDetail from './views/ProjectDetail';
import { PROJECTS } from './constants';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProjectId]);

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    setCurrentView('project');
  };

  const handleBackToWork = () => {
    setSelectedProjectId(null);
    setCurrentView('work');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Hero key="hero" onExplore={() => setCurrentView('work')} />;
      case 'work':
        return <Work key="work" onProjectSelect={handleProjectSelect} />;
      case 'about':
        return <About key="about" />;
      case 'contact':
        return <Contact key="contact" />;
      case 'project':
        const project = PROJECTS.find(p => p.id === selectedProjectId);
        if (!project) return <Work key="work" onProjectSelect={handleProjectSelect} />;
        return <ProjectDetail key="project-detail" project={project} onBack={handleBackToWork} />;
      default:
        return <Hero key="hero" onExplore={() => setCurrentView('work')} />;
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-slate-100 selection:bg-white selection:text-black md:cursor-none overflow-x-hidden">
      <CustomCursor />
      
      {currentView !== 'project' && (
        <Navigation currentView={currentView} onChangeView={setCurrentView} />
      )}

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>
    </div>
  );
}

export default App;