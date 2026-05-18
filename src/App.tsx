import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ModalContent, SectionId } from './types';
import { PIX_KEY } from './constants';

const Urgency = lazy(() => import('./components/Urgency').then(m => ({ default: m.Urgency })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Transparency = lazy(() => import('./components/Transparency').then(m => ({ default: m.Transparency })));
const Donate = lazy(() => import('./components/Donate').then(m => ({ default: m.Donate })));

function SectionLoader() {
  return <div className="h-96 w-full animate-pulse bg-gray-100/50 rounded-3xl mb-12" />;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: SectionId | string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const handleCopyPix = useCallback(() => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#F0F9FF] text-[#334155] font-sans selection:bg-[#FFD100] selection:text-[#334155] overflow-x-hidden">
        <Header 
          isScrolled={isScrolled} 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          scrollTo={scrollTo} 
        />

        <main>
          <Hero scrollTo={scrollTo} />
          
          <Suspense fallback={<SectionLoader />}>
            {/* Wave Divider */}
            <div className="w-full overflow-hidden leading-none rotate-180 bg-white">
              <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F0F9FF"></path>
              </svg>
            </div>

            <Urgency />

            {/* Wave Divider */}
            <div className="w-full overflow-hidden leading-none bg-white">
              <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#00AEEF"></path>
              </svg>
            </div>

            <About />

            {/* Wave Divider */}
            <div className="w-full overflow-hidden leading-none bg-[#00AEEF]">
              <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FEFCE8"></path>
              </svg>
            </div>

            <Transparency />

            {/* Wave Divider */}
            <div className="w-full overflow-hidden leading-none bg-[#FEFCE8]">
              <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#4CAF50"></path>
              </svg>
            </div>

            <Donate copiedPix={copiedPix} handleCopyPix={handleCopyPix} />
          </Suspense>
        </main>

        <Footer setModalContent={setModalContent} />

        <Modal 
          modalContent={modalContent} 
          onClose={() => setModalContent(null)} 
        />
      </div>
    </ErrorBoundary>
  );
}
