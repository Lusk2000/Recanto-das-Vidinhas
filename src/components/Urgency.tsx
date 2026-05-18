import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Heart } from 'lucide-react';

export const Urgency: React.FC = () => {
  return (
    <section id="emergencia" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Urgency & Progress Bar */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FF4B4B]/10 text-[#FF4B4B] px-5 py-2.5 rounded-full text-sm font-extrabold">
              <AlertCircle className="w-5 h-5" /> Situação de Urgência
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#334155] leading-tight">Nosso Limite de Vagas</h2>
            <p className="text-lg md:text-xl text-[#475569] font-semibold leading-relaxed">
              Nossa estrutura foi planejada para 200 cães, mas o amor não fecha portas. Hoje abrigamos <strong className="text-[#FF4B4B] bg-[#FF4B4B]/10 px-2 py-0.5 rounded-lg">mais de 500 animais resgatados</strong>.
            </p>

            {/* Progress Bar (250% Capacity) */}
            <div className="bg-[#FEFCE8] p-8 rounded-[2rem] border-4 border-[#FFD100]/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD100]/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="flex justify-between text-sm font-extrabold mb-4 relative z-10">
                <span className="text-[#00AEEF]">Capacidade Ideal (200)</span>
                <span className="text-[#FF4B4B]">Lotação Atual (500+)</span>
              </div>
              
              <div className="relative w-full h-10 bg-white rounded-full overflow-hidden border-4 border-gray-100 shadow-inner relative z-10">
                {/* The bar is completely full and red to show it's over capacity */}
                <div className="absolute top-0 left-0 h-full bg-[#FF4B4B] w-full flex items-center justify-end pr-4" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)' }}>
                  <span className="text-white text-xs font-black tracking-wider drop-shadow-md">250% DA CAPACIDADE</span>
                </div>
                {/* Marker for ideal capacity at 40% (200 out of 500) */}
                <div className="absolute top-0 left-[40%] h-full border-l-4 border-dashed border-white z-10 shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 relative z-10">
                <div className="bg-white p-4 md:p-5 rounded-2xl border-2 border-[#00AEEF]/20 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#00AEEF]">200</div>
                  <div className="text-xs font-extrabold text-gray-500 uppercase mt-1 md:mt-2">Capacidade Ideal</div>
                </div>
                <div className="bg-[#FF4B4B] p-4 md:p-5 rounded-2xl shadow-md text-center transform scale-105">
                  <div className="text-2xl md:text-3xl font-black text-white">500+</div>
                  <div className="text-xs font-extrabold text-white/90 uppercase mt-1 md:mt-2">População Atual</div>
                </div>
                <div className="bg-white p-4 md:p-5 rounded-2xl border-2 border-[#FFD100]/50 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#E67E22]">80</div>
                  <div className="text-xs font-extrabold text-gray-500 uppercase mt-1 md:mt-2">Do Antigo Canil</div>
                </div>
              </div>
            </div>

            <p className="text-xl font-extrabold text-[#00AEEF] bg-[#00AEEF]/10 p-6 rounded-3xl">
              Empresas e doadores, precisamos de vocês para manter a dignidade destas 500 vidinhas.
            </p>
          </motion.div>

          {/* Right: Identifiable Victim Effect */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-[#F0F9FF]">
              <div className="p-6 md:p-8 bg-[#F8FAFC]">
                <div className="inline-flex items-center gap-2 bg-[#FFD100] px-4 py-2 rounded-full text-sm font-extrabold text-[#334155] shadow-sm mb-4">
                  <Heart className="w-4 h-4 fill-[#FF4B4B] text-[#FF4B4B]" /> Uma História de Amor
                </div>
                <div 
                  className="w-full relative aspect-[9/16] md:aspect-video overflow-hidden rounded-[2rem] md:rounded-2xl bg-black shadow-2xl border-4 border-[#00AEEF]/20"
                >
                  <iframe 
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/ajHrxbDwMxc?controls=1&modestbranding=1&rel=0&iv_load_policy=3" 
                    title="História do Vovô Zino" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  {/* Smartphone Overlay for Mobile Story vibe */}
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-black/10 rounded-[2rem] md:hidden"></div>
                </div>

                <p className="text-[#475569] mb-6 md:mb-8 font-semibold leading-relaxed text-base md:text-lg">
                  Recanto das VIDINHAS é um abrigo para animais recolhidos por maus tratos. Seja também a esperança das dezenas de animais que recebem uma segunda chance no nosso recanto. Sua doação garante que eles continuem recebendo cuidados diários.
                </p>
                <a href="https://protetores.recantodasvidinhas.com.br" target="_blank" rel="noopener noreferrer" className="w-full max-w-[320px] mx-auto sm:max-w-none bg-[#FFD100] text-[#334155] py-4 px-4 sm:px-6 rounded-xl font-extrabold text-[15px] sm:text-lg hover:bg-[#facc15] transition-transform hover:scale-105 shadow-[0_4px_0_#EAB308] active:translate-y-1 active:shadow-none flex justify-center items-center gap-2 whitespace-nowrap">
                  Ajudar o Recanto das Vidinhas <Heart className="w-5 h-5 fill-[#FF4B4B] text-[#FF4B4B] shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
