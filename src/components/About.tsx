import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#00AEEF] text-white relative overflow-hidden">
      {/* Playful Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD100]/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white text-[#00AEEF] px-5 py-2.5 rounded-full text-sm font-extrabold mb-6 shadow-md">
              <ShieldCheck className="w-5 h-5" /> Governança e Transparência
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Nossa História e Compromisso Ético</h2>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/95 font-semibold leading-relaxed">
              <p>
                Fundado pela professora <strong className="text-[#FFD100]">Tânia Pinheiro</strong> e pelo Professor <strong className="text-[#FFD100]">Popó Diniz</strong>, o projeto é mantido por uma associação civil sem fins lucrativos, gerida de forma independente.
              </p>
              <div className="bg-white/10 p-5 md:p-6 rounded-[2rem] border-2 border-white/20 backdrop-blur-sm">
                <p className="text-sm md:text-lg flex gap-3 md:gap-4 items-start">
                  <Info className="w-6 h-6 md:w-8 md:h-8 text-[#FFD100] shrink-0 mt-1" />
                  <span>
                    <strong className="block text-[#FFD100] mb-1">Nota de Conformidade:</strong> 
                    Focamos na causa animal acima de tudo. Por diretrizes éticas e legais (Lei 13.019/2014), nossa gestão financeira é auditada e independente de cargos eletivos, garantindo que cada centavo doado chegue diretamente aos animais.
                  </span>
                </p>
              </div>
              <p className="font-extrabold text-lg md:text-xl bg-[#FFD100] text-[#334155] p-5 md:p-6 rounded-[2rem] shadow-lg">
                O abrigo foi construído e é mantido com recursos próprios dos fundadores e doações da comunidade.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-0">
            <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white/20 aspect-[9/16] sm:aspect-auto sm:h-72 flex justify-center relative sm:mt-12">
              <iframe className="absolute inset-0 w-full h-full object-cover" src="https://www.youtube.com/embed/a7R3FzhvJgY?controls=0&modestbranding=1&rel=0" title="Apresentação do Projeto" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white/20 aspect-[9/16] sm:aspect-auto sm:h-72 flex justify-center relative">
              <iframe className="absolute inset-0 w-full h-full object-cover" src="https://www.youtube.com/embed/8dwzNq8R2WI?controls=0&modestbranding=1&rel=0" title="Dia a dia do Recanto" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
