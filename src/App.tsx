import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, PawPrint, Home, ArrowRight, Menu, X, CheckCircle2, MapPin, Instagram, Facebook, FileText, Download, Smartphone, ShieldCheck, AlertCircle, Copy, Check, Sun, Info } from 'lucide-react';

// Cores da Paleta Baseada no Logo:
// Verde: #8CC63F (Usaremos #4CAF50 para melhor contraste em botões)
// Amarelo: #FFD100
// Azul: #00AEEF
// Vermelho (Alerta): #FF4B4B

const privacyPolicyHTML = `<h2><span style="color: rgb(68, 68, 68);">Política Privacidade</span></h2><p><span style="color: rgb(68, 68, 68);">A sua privacidade é importante para nós. É política do Recanto das Vidinhas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.recantodasvidinhas.com.br">Recanto das Vidinhas</a>, e outros sites que possuímos e operamos.</span></p><p><span style="color: rgb(68, 68, 68);">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</span></p><p><span style="color: rgb(68, 68, 68);">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</span></p><p><span style="color: rgb(68, 68, 68);">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</span></p><p><span style="color: rgb(68, 68, 68);">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas </span><a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(68, 68, 68);">políticas de privacidade</a><span style="color: rgb(68, 68, 68);">.</span></p><p><span style="color: rgb(68, 68, 68);">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</span></p><p><span style="color: rgb(68, 68, 68);">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</span></p><ul style="list-style-type: disc; margin-left: 20px; color: rgb(68, 68, 68);"><li><span style="color: rgb(68, 68, 68);">O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</span></li><li><span style="color: rgb(68, 68, 68);">Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</span></li><li><span style="color: rgb(68, 68, 68);">Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</span></li><li><span style="color: rgb(68, 68, 68);">Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</span></li></ul><p><br></p><h3><span style="color: rgb(68, 68, 68);">Compromisso do Usuário</span></h3><p><span style="color: rgb(68, 68, 68);">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Recanto das Vidinhas oferece no site e com caráter enunciativo, mas não limitativo:</span></p><ul style="list-style-type: disc; margin-left: 20px; color: rgb(68, 68, 68);"><li><span style="color: rgb(68, 68, 68);">A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span></li><li><span style="color: rgb(68, 68, 68);">B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span></li><li><span style="color: rgb(68, 68, 68);">C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Recanto das Vidinhas, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span></li></ul><h3><span style="color: rgb(68, 68, 68);">Mais informações</span></h3><p><span style="color: rgb(68, 68, 68);">Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</span></p><p><span style="color: rgb(68, 68, 68);">Esta política é efetiva a partir de 6 May 2026 15:02</span></p>`;

const termsOfUseHTML = `<h2><span style="color: rgb(68, 68, 68);">1. Termos</span></h2><p><span style="color: rgb(68, 68, 68);">Ao acessar ao site <a href="https://www.recantodasvidinhas.com.br">Recanto das Vidinhas</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</span></p><h2><span style="color: rgb(68, 68, 68);">2. Uso de Licença</span></h2><p><span style="color: rgb(68, 68, 68);">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Recanto das Vidinhas , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </span></p><ol style="list-style-type: decimal; margin-left: 20px; color: rgb(68, 68, 68);"><li><span style="color: rgb(68, 68, 68);">modificar ou copiar os materiais; </span></li><li><span style="color: rgb(68, 68, 68);">usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </span></li><li><span style="color: rgb(68, 68, 68);">tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Recanto das Vidinhas; </span></li><li><span style="color: rgb(68, 68, 68);">remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </span></li><li><span style="color: rgb(68, 68, 68);">transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</span></li></ol><p><span style="color: rgb(68, 68, 68);">Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Recanto das Vidinhas a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</span></p><h2><span style="color: rgb(68, 68, 68);">3. Isenção de responsabilidade</span></h2><ol style="list-style-type: decimal; margin-left: 20px; color: rgb(68, 68, 68);"><li><span style="color: rgb(68, 68, 68);">Os materiais no site da Recanto das Vidinhas são fornecidos 'como estão'. Recanto das Vidinhas não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</span></li><li><span style="color: rgb(68, 68, 68);">Além disso, o Recanto das Vidinhas não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</span></li></ol><h2><span style="color: rgb(68, 68, 68);">4. Limitações</span></h2><p><span style="color: rgb(68, 68, 68);">Em nenhum caso o Recanto das Vidinhas ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Recanto das Vidinhas, mesmo que Recanto das Vidinhas ou um representante autorizado da Recanto das Vidinhas tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</span></p><h2><span style="color: rgb(68, 68, 68);">5. Precisão dos materiais</span></h2><p><span style="color: rgb(68, 68, 68);">Os materiais exibidos no site da Recanto das Vidinhas podem incluir erros técnicos, tipográficos ou fotográficos. Recanto das Vidinhas não garante que qualquer material em seu site seja preciso, completo ou atual. Recanto das Vidinhas pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Recanto das Vidinhas não se compromete a atualizar os materiais.</span></p><h2><span style="color: rgb(68, 68, 68);">6. Links</span></h2><p><span style="color: rgb(68, 68, 68);">O Recanto das Vidinhas não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Recanto das Vidinhas do site. O uso de qualquer site vinculado é por conta e risco do usuário.</span></p><p><br></p><h3><span style="color: rgb(68, 68, 68);">Modificações</span></h3><p><span style="color: rgb(68, 68, 68);">O Recanto das Vidinhas pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</span></p><h3><span style="color: rgb(68, 68, 68);">Lei aplicável</span></h3><p><span style="color: rgb(68, 68, 68);">Estes termos e condições são regidos e interpretados de acordo com as leis do Recanto das Vidinhas e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</span></p>`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, html: string} | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText("45414370000103");
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-[#334155] font-sans selection:bg-[#FFD100] selection:text-[#334155] overflow-x-hidden">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 bg-white">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F0F9FF"></path>
        </svg>
      </div>

      {/* Situação de Urgência & Identifiable Victim Effect */}
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
                    className="w-full flex justify-center mb-6 overflow-hidden rounded-2xl bg-black relative"
                  >
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/ajHrxbDwMxc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0" title="História do Vovô Zino" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#00AEEF"></path>
        </svg>
      </div>

      {/* Nossa História e Compromisso Ético (Compliance) */}
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
              <div className="bg-black rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/20 aspect-[3/4] sm:aspect-auto sm:h-72 flex justify-center relative sm:mt-12">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/a7R3FzhvJgY?controls=0&modestbranding=1&rel=0" title="Apresentação do Projeto" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="bg-black rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/20 aspect-[3/4] sm:aspect-auto sm:h-72 flex justify-center relative">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8dwzNq8R2WI?controls=0&modestbranding=1&rel=0" title="Dia a dia do Recanto" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none bg-[#00AEEF]">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FEFCE8"></path>
        </svg>
      </div>

      {/* Parceiros, NFM e Transparência */}
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
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none bg-[#FEFCE8]">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#4CAF50"></path>
        </svg>
      </div>

      {/* CTA Section (Doar via PIX) */}
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

      {/* Footer */}
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
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#334155] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD100] hover:text-[#334155] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-center md:text-right text-gray-400 text-sm font-bold">
            <div className="flex gap-4 justify-center md:justify-end mb-2">
              <button onClick={() => setModalContent({ title: "Termos de Uso", html: termsOfUseHTML })} className="hover:text-white transition-colors">Termos de Uso</button>
              <button onClick={() => setModalContent({ title: "Política de Privacidade", html: privacyPolicyHTML })} className="hover:text-white transition-colors">Política de Privacidade</button>
            </div>
            <p>&copy; 2026 Associação Recanto das Vidinhas - Instituição Sem Fins Lucrativos.</p>
          </div>
        </div>
      </footer>

      {/* Modal para Termos e Privacidade */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F0F9FF]">
              <h2 className="text-2xl font-black text-[#334155]">{modalContent.title}</h2>
              <button onClick={() => setModalContent(null)} className="p-2 bg-white rounded-full text-gray-500 hover:text-red-500 shadow-sm hover:bg-gray-50 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div 
              className="p-6 md:p-10 overflow-y-auto prose prose-slate max-w-none text-[#475569] leading-relaxed 
                         prose-headings:text-[#334155] prose-headings:font-black prose-h2:text-2xl prose-h3:text-xl 
                         prose-a:text-[#00AEEF] prose-a:font-bold hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: modalContent.html }} 
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
