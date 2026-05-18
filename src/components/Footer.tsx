import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { ModalContent } from '../types';
import { PRIVACY_POLICY_HTML, TERMS_OF_USE_HTML } from '../constants';

interface FooterProps {
  setModalContent: (content: ModalContent | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ setModalContent }) => {
  return (
    <footer className="bg-[#334155] text-white py-12 border-t-8 border-[#FFD100]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-xl shadow-sm">
            <img 
              src="https://i.ibb.co/LDkk6LMG/logo2.png" 
              alt="Logo Recanto das Vidinhas" 
              className="w-8 h-8 object-contain" 
            />
          </div>
          <span className="font-black text-xl tracking-tight">Recanto das Vidinhas</span>
        </div>
        
        <div className="flex gap-4">
          <a href="https://www.instagram.com/recanto_vidinhas_tp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Recanto das Vidinhas" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#334155] transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/recantodasvidinhastp" target="_blank" rel="noopener noreferrer" aria-label="Facebook do Recanto das Vidinhas" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#334155] transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-400">
          <button onClick={() => setModalContent({ title: "Termos de Uso", html: TERMS_OF_USE_HTML })} className="hover:text-white transition-colors">Termos de Uso</button>
          <button onClick={() => setModalContent({ title: "Política de Privacidade", html: PRIVACY_POLICY_HTML })} className="hover:text-white transition-colors">Política de Privacidade</button>
          <span>© 2026 Recanto das Vidinhas</span>
        </div>
      </div>
    </footer>
  );
};
