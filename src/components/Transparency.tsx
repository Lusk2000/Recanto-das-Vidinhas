import React from 'react';
import { CheckCircle2, ArrowRight, Smartphone, PawPrint, MapPin, FileText, Download } from 'lucide-react';

export const Transparency: React.FC = () => {
  return (
    <section id="transparencia" className="py-16 lg:py-24 bg-[#FEFCE8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 font-black text-[#334155]">Portal da Transparência</h2>
          <p className="text-lg md:text-xl text-[#475569] font-semibold">
            Acreditamos que a confiança é a base de qualquer doação. Mantemos nossas contas e documentos abertos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Parceiro Master */}
          <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border-4 border-[#FFD100]/30 hover:border-[#FFD100] transition-colors flex flex-col">
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 bg-[#FFD100]/20 text-[#D97706] px-4 py-2 rounded-full text-sm font-extrabold mb-4 md:mb-6">
                <CheckCircle2 className="w-5 h-5" /> Parceiro Master
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#334155] mb-2">Mart Minas</h3>
              <p className="text-[#00AEEF] font-extrabold text-lg md:text-xl mb-4 md:mb-6">Projeto Troco Solidário</p>
              <p className="text-[#475569] text-base md:text-lg font-semibold leading-relaxed mb-6 md:mb-8">
                Neste incrível projeto, o troco arredondado das suas compras se transforma diretamente em ração, saúde e estrutura. Uma corrente de solidariedade da Terra do Padre Victor que se tornou vital para a manutenção do nosso recanto.
              </p>
            </div>
            <div className="mt-auto">
              <a 
                href="https://www.martminas.com.br/projetos-sociais" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-[#F0F9FF] text-[#00AEEF] border-2 border-[#00AEEF]/20 font-extrabold text-base md:text-lg px-6 py-3.5 rounded-2xl hover:bg-[#00AEEF] hover:text-white transition-all active:scale-95"
              >
                Conheça o Projeto <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nota Fiscal Mineira */}
          <div className="bg-[#00AEEF] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="inline-flex items-center gap-2 bg-white text-[#00AEEF] px-4 py-2 rounded-full text-sm font-extrabold mb-4 md:mb-6 shadow-sm">
              <Smartphone className="w-5 h-5" /> Doação Passiva
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8">Doe sem colocar a mão no bolso</h3>
            
            <ul className="space-y-4 md:space-y-5 font-bold text-base md:text-lg text-white/95">
              <li className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFD100] text-[#334155] flex items-center justify-center font-black shrink-0 shadow-sm">1</div>
                Baixe o app Nota Fiscal Mineira
              </li>
              <li className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFD100] text-[#334155] flex items-center justify-center font-black shrink-0 shadow-sm">2</div>
                Cadastre-se
              </li>
              <li className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFD100] text-[#334155] flex items-center justify-center font-black shrink-0 shadow-sm">3</div>
                Escolha <strong className="text-[#FFD100] ml-1">ASSOCIAÇÃO RECANTO DAS VIDINHAS</strong>
              </li>
              <li className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFD100] text-[#334155] flex items-center justify-center font-black shrink-0 shadow-sm">4</div>
                Peça CPF na nota em cada compra
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-10 rounded-[2.5rem] border-4 border-[#F0F9FF] shadow-sm">
            <h3 className="text-2xl font-black text-[#334155] mb-8 flex items-center gap-3">
              <PawPrint className="w-8 h-8 text-[#00AEEF]" /> Dados da Associação
            </h3>
            <div className="space-y-6">
              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                <p className="text-sm text-gray-500 font-extrabold uppercase tracking-wider mb-1">Razão Social</p>
                <p className="font-black text-lg sm:text-xl text-[#334155]">Associação Recanto das Vidinhas - TP/MG</p>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                <p className="text-sm text-gray-500 font-extrabold uppercase tracking-wider mb-1">CNPJ</p>
                <p className="font-mono font-black text-xl sm:text-2xl text-[#00AEEF] whitespace-nowrap">45.414.370/0001-03</p>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                <p className="text-sm text-gray-500 font-extrabold uppercase tracking-wider mb-1">Localização</p>
                <p className="font-bold text-[#475569] flex items-start gap-2 text-lg">
                  <MapPin className="w-6 h-6 text-[#FF4B4B] shrink-0 mt-0.5" />
                  Sítio Estrela Guia - Zona Rural<br/>Três Pontas - MG, 37192-899
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <a href="https://docs.google.com/document/d/1mYmnASXox6HxzieQxgQURKpUJjbvj5y4/edit?usp=sharing&ouid=111727054501630390738&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="shrink-0 group flex items-center justify-between bg-white hover:bg-[#FFD100] p-6 rounded-[2rem] transition-all shadow-sm border-2 border-gray-100 hover:border-[#FFD100]">
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F9FF] p-3 rounded-xl group-hover:bg-white transition-colors">
                  <FileText className="text-[#00AEEF] w-6 h-6" />
                </div>
                <span className="font-extrabold text-lg text-[#334155]">Termo de Guarda Responsável</span>
              </div>
              <Download className="text-gray-400 group-hover:text-[#334155] transition-colors w-6 h-6" />
            </a>

            <div className="flex-grow w-full bg-white rounded-[2rem] shadow-sm border-2 border-gray-100 overflow-hidden relative min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.152027458841!2d-45.5280385!3d-21.3839178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca81577e25174d%3A0x3ad13e88b333386c!2sRecanto%20das%20Vidinhas%20TP!5e0!3m2!1spt-BR!2sbr!4v1778249797714!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Localização do Recanto das Vidinhas"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
