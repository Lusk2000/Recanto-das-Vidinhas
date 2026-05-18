import React from 'react';
import { Heart, PawPrint, Check, Copy, ShieldCheck } from 'lucide-react';

interface DonateProps {
  handleCopyPix: () => void;
  copiedPix: boolean;
}

export const Donate: React.FC<DonateProps> = ({ handleCopyPix, copiedPix }) => {
  return (
    <section id="doar" className="py-16 lg:py-24 bg-[#4CAF50] text-white text-center relative overflow-hidden">
      {/* Playful Background */}
      <div className="absolute top-10 left-10 text-white/20 -rotate-12"><Heart className="w-24 h-24 fill-white/20" /></div>
      <div className="absolute bottom-10 right-10 text-white/20 rotate-12"><PawPrint className="w-32 h-32" /></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
          <Heart className="w-12 h-12 text-white fill-white" />
        </div>
        <h2 className="text-4xl md:text-6xl mb-4 md:mb-6 leading-tight font-black drop-shadow-md">Eles precisam de você hoje.</h2>
        <p className="text-lg md:text-2xl text-white/95 font-bold mb-8 md:mb-12">
          Sua doação garante ração, medicamentos e estrutura para as <strong className="bg-[#FFD100] text-[#334155] px-2 py-1 md:px-3 md:py-1 rounded-lg md:rounded-xl">500 vidinhas</strong> que dependem exclusivamente do nosso recanto.
        </p>
        
        <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-[#334155] max-w-xl mx-auto border-4 md:border-8 border-[#FFD100]">
          <h3 className="text-2xl md:text-3xl font-black mb-2">Faça um PIX agora</h3>
          <p className="text-gray-500 font-bold mb-6 md:mb-8 text-base md:text-lg">Associação Recanto das Vidinhas</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F0F9FF] border-2 border-[#00AEEF]/20 p-5 rounded-2xl mb-8 gap-4">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <span className="block text-sm font-extrabold text-[#00AEEF] uppercase tracking-wider mb-1">Chave CPF</span>
              <span className="font-mono text-xl sm:text-2xl font-black text-[#334155] whitespace-nowrap">831.382.776-91</span>
            </div>
            <button 
              onClick={handleCopyPix}
              className={`w-full max-w-[200px] sm:w-auto p-4 rounded-xl transition-transform hover:scale-105 active:scale-95 flex justify-center items-center ${copiedPix ? 'bg-[#4CAF50] text-white shadow-[0_4px_0_#2E7D32]' : 'bg-[#FFD100] text-[#334155] shadow-[0_4px_0_#EAB308]'}`}
              title="Copiar PIX"
            >
              {copiedPix ? <Check className="w-7 h-7 shrink-0" /> : <Copy className="w-7 h-7 shrink-0" />}
            </button>
          </div>
          
          <button 
            onClick={handleCopyPix}
            className={`w-full max-w-[320px] mx-auto py-4 rounded-xl font-black text-[14px] sm:text-base md:text-xl uppercase tracking-widest transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap shrink-0 ${copiedPix ? 'bg-[#4CAF50] text-white' : 'bg-[#4CAF50] text-white hover:bg-[#45a049] shadow-[0_4px_0_#2E7D32] md:shadow-[0_6px_0_#2E7D32] active:translate-y-1.5 active:shadow-none'}`}
          >
            {copiedPix ? 'Chave Copiada! 💚' : 'Copiar Chave PIX'}
          </button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm md:text-lg font-bold text-white/90 bg-black/10 py-3 px-4 sm:px-6 rounded-xl inline-flex backdrop-blur-sm mx-auto max-w-[320px] sm:max-w-none text-center">
          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> <span className="leading-tight">Toda doação vai direto para a conta de Tania Pinheiro da Silva.</span>
        </div>
      </div>
    </section>
  );
};
