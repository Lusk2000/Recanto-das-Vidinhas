import React from 'react';
import { motion } from 'motion/react';
import { Heart, PawPrint, Home, Sun } from 'lucide-react';

interface HeroProps {
  scrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#F0F9FF]">
      {/* Playful Background Elements */}
      <div className="absolute top-20 left-10 text-[#00AEEF]/10 rotate-12"><PawPrint className="w-32 h-32" /></div>
      <div className="absolute bottom-20 right-10 text-[#FFD100]/20 -rotate-12"><Sun className="w-40 h-40" /></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FFD100] text-[#334155] px-5 py-2.5 rounded-full text-sm font-extrabold mb-6 shadow-sm">
              <Heart className="w-4 h-4 fill-[#FF4B4B] text-[#FF4B4B]" /> Feito com muito amor
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#00AEEF] mb-4 md:mb-6 leading-[1.1] drop-shadow-sm">
              Ajudando Três Pontas a salvar vidinhas há mais de 10 anos.
            </h1>
            <p className="text-lg md:text-2xl text-[#475569] font-semibold mb-8 md:mb-10 leading-relaxed">
              O Recanto das Vidinhas é fruto de amor e esforço comunitário. Hoje, enfrentamos nosso maior desafio: cuidar de <span className="bg-[#FFD100] px-2 py-1 rounded-lg text-[#334155]">500 vidas</span> com recursos limitados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mx-auto sm:mx-0 w-full">
              <a href="https://protetores.recantodasvidinhas.com.br" target="_blank" rel="noopener noreferrer" className="w-full max-w-[320px] mx-auto sm:mx-0 sm:w-auto sm:max-w-none bg-[#4CAF50] text-white px-4 sm:px-8 py-4 rounded-xl text-[15px] sm:text-lg font-extrabold hover:bg-[#45a049] transition-transform hover:scale-105 shadow-[0_4px_0_#2E7D32] md:shadow-[0_6px_0_#2E7D32] active:translate-y-1.5 active:shadow-none flex items-center justify-center gap-2 whitespace-nowrap">
                Quero Contribuir <Heart className="w-5 h-5 fill-white shrink-0" />
              </a>
              <button onClick={() => scrollTo('sobre')} className="w-full max-w-[320px] mx-auto sm:mx-0 sm:w-auto sm:max-w-none bg-white text-[#00AEEF] border-2 border-[#00AEEF] px-4 sm:px-8 py-4 rounded-xl text-[15px] sm:text-lg font-extrabold hover:bg-[#F0F9FF] transition-transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                Ver Animais <PawPrint className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#FFD100] rounded-[3rem] rotate-6 scale-105"></div>
            <img 
              src="https://i.ibb.co/Ps8TFdtD/Whats-App-Image-2026-04-20-at-19-12-03.jpg" 
              alt="Cão feliz resgatado pelo Recanto das Vidinhas" 
              className="relative rounded-[3rem] w-full h-[600px] object-cover border-8 border-white shadow-2xl"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              width="600"
              height="600"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-4 border-4 border-[#F0F9FF]">
              <div className="bg-[#00AEEF] p-3 rounded-2xl text-white">
                <Home className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500">Nosso Lar</p>
                <p className="text-xl font-black text-[#334155]">500+ Vidinhas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
