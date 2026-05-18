import React from 'react';
import { Heart, Menu, X, AlertCircle, ShieldCheck, Info } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  scrollTo 
}) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <img 
            src="https://i.ibb.co/LDkk6LMG/logo2.png" 
            alt="Logo Recanto das Vidinhas" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-sm" 
          />
          <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#00AEEF]">
            Recanto das Vidinhas
          </span>
        </div>
        
        {/* Desktop Nav */}
        <nav aria-label="Menu principal" className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('emergencia')} className="text-[15px] font-bold text-[#334155] hover:text-[#FF4B4B] transition-colors">Urgência</button>
          <button onClick={() => scrollTo('sobre')} className="text-[15px] font-bold text-[#334155] hover:text-[#00AEEF] transition-colors">Governança</button>
          <button onClick={() => scrollTo('transparencia')} className="text-[15px] font-bold text-[#334155] hover:text-[#00AEEF] transition-colors">Transparência</button>
          <a href="https://protetores.recantodasvidinhas.com.br" target="_blank" rel="noopener noreferrer" className="bg-[#4CAF50] text-white px-6 py-3 rounded-full text-[15px] font-extrabold hover:bg-[#45a049] transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_4px_0_#2E7D32] active:translate-y-1 active:shadow-none">
            <Heart className="w-5 h-5 fill-white" /> Doe Agora
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#00AEEF] bg-white p-2 rounded-xl shadow-sm" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav aria-label="Menu móvel" className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-3 rounded-b-3xl transition-all">
          <button onClick={() => scrollTo('emergencia')} className="text-left text-[15px] font-bold py-3 px-4 rounded-xl text-[#334155] hover:bg-gray-50 flex items-center gap-3 transition-colors"><AlertCircle className="w-5 h-5 text-[#FF4B4B] shrink-0"/> Urgência</button>
          <button onClick={() => scrollTo('sobre')} className="text-left text-[15px] font-bold py-3 px-4 rounded-xl text-[#334155] hover:bg-gray-50 flex items-center gap-3 transition-colors"><ShieldCheck className="w-5 h-5 text-[#00AEEF] shrink-0"/> Governança</button>
          <button onClick={() => scrollTo('transparencia')} className="text-left text-[15px] font-bold py-3 px-4 rounded-xl text-[#334155] hover:bg-gray-50 flex items-center gap-3 transition-colors"><Info className="w-5 h-5 text-[#FFD100] shrink-0"/> Transparência</button>
          <a href="https://protetores.recantodasvidinhas.com.br" target="_blank" rel="noopener noreferrer" className="bg-[#4CAF50] text-white px-4 py-4 rounded-xl text-[15px] font-extrabold flex items-center justify-center gap-2 mt-2 shadow-[0_4px_0_#2E7D32] active:translate-y-1 active:shadow-none whitespace-nowrap">
            <Heart className="w-5 h-5 fill-white shrink-0" /> Doe Agora
          </a>
        </nav>
      )}
    </header>
  );
};
