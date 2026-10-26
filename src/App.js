import React, { useState, useRef, useEffect } from 'react';
import { CONFIG } from './config/portfolioData';
import AmbientBackground from './components/AmbientBackground';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import StackSection from './components/StackSection';
import ProjectsSection from './components/ProjectsSection';
import StudioSection from './components/StudioSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ProjectModal from './components/modals/ProjectModal';
import BriefingModal from './components/modals/BriefingModal';
import CopyLinkModal from './components/modals/CopyLinkModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [briefingIdea, setBriefingIdea] = useState('');
  const [copyModalUrl, setCopyModalUrl] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef(null);

  useEffect(() => {
    document.title = `${CONFIG.nome} — Arte, código & solução`;
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const anyModalOpen = Boolean(selectedProject || briefingOpen || copyModalUrl);
    document.documentElement.style.overflow = anyModalOpen ? 'hidden' : '';
    document.body.style.overflow = anyModalOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selectedProject, briefingOpen, copyModalUrl]);

  const showToast = (message) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(message);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage('');
    }, 3400);
  };

  const handleRequestBudgetWithProject = (project) => {
    setSelectedProject(null);
    if (project) {
      setBriefingIdea(
        `Gostaria de uma solução inspirada no projeto ${project.titulo}.`
      );
    }
    setBriefingOpen(true);
  };

  return (
    <>
      <AmbientBackground />

      <div className="portfolio max-w-[460px] mx-auto" id="topo">
        <div className="container px-4">
          <Topbar />

          <main id="conteudo">
            <HeroSection onOpenBriefing={() => setBriefingOpen(true)} />
            <StackSection />
            <ProjectsSection onOpenProject={setSelectedProject} />
            <StudioSection onOpenBriefing={() => setBriefingOpen(true)} />
          </main>

          <Footer
            onShowToast={showToast}
            onOpenCopyModal={(url) => setCopyModalUrl(url)}
          />
        </div>
      </div>

      <FloatingElements toastMessage={toastMessage} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestBudgetWithProject={handleRequestBudgetWithProject}
      />

      <BriefingModal
        isOpen={briefingOpen}
        initialIdea={briefingIdea}
        onClose={() => setBriefingOpen(false)}
      />

      <CopyLinkModal
        url={copyModalUrl}
        onClose={() => setCopyModalUrl('')}
      />
    </>
  );
}
