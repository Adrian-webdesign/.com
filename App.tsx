
import React, { useEffect } from 'react';
// Import gsap and ScrollTrigger to fix missing name errors
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoDiferenciais from './components/BentoDiferenciais';
import Services from './components/Services';
import Process from './components/Process';
import FAQSection from './components/FAQ';
import CTA from './components/CTA';

const App: React.FC = () => {
  useEffect(() => {
    // Initial reveal animation for sections
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Faixa de Autoridade / Marquee */}
        <div className="py-12 border-y border-white/5 overflow-hidden bg-darker/50">
          <div className="flex whitespace-nowrap animate-marquee">
             <div className="flex items-center gap-16 px-8 shrink-0">
               {[1,2,3,4,5,6,7,8].map(i => (
                 <span key={i} className="text-2xl font-bold font-display opacity-20 hover:opacity-100 transition-opacity cursor-default">
                    {i % 2 === 0 ? 'ADRIAN ALMEIDA' : 'DESIGN ESTRATÉGICO'}
                 </span>
               ))}
             </div>
             {/* Repeat for seamless loop */}
             <div className="flex items-center gap-16 px-8 shrink-0">
               {[1,2,3,4,5,6,7,8].map(i => (
                 <span key={i} className="text-2xl font-bold font-display opacity-20 hover:opacity-100 transition-opacity cursor-default">
                    {i % 2 === 0 ? 'ADRIAN ALMEIDA' : 'DESIGN ESTRATÉGICO'}
                 </span>
               ))}
             </div>
          </div>
        </div>

        <section id="sobre" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass border border-white/10 relative z-10">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2000" alt="Work Desk" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-[3rem] -z-0 opacity-20 blur-[50px]"></div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-display">Sobre <span className="gold-text">mim</span></h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Sou <span className="text-white font-bold">Adrian Almeida</span>, website designer especializado em landing pages de alta conversão. Meu foco é criar páginas estratégicas que comuniquem valor, gerem confiança e levem o visitante à ação imediata.
                </p>
                <p>
                  Trabalho com processos simples, comunicação clara e soluções pensadas para negócios que querem crescer no digital de forma profissional e eficiente.
                </p>
                <p>
                  Atendo exclusivamente o Brasil, entregando sites já publicados, prontos para captar clientes e fortalecer sua presença online.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="px-6 py-4 glass border border-white/10 rounded-2xl">
                  <span className="block text-2xl font-bold text-white">100%</span>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Comprometimento</span>
                </div>
                <div className="px-6 py-4 glass border border-white/10 rounded-2xl">
                  <span className="block text-2xl font-bold text-white">Brasileiro</span>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Nativo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <BentoDiferenciais />
        <Process />
        <FAQSection />
        <CTA />
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">A</div>
            <span className="font-bold font-display">ADRIAN ALMEIDA</span>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; 2026 Adrian Almeida. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/adrian.webdesign" target="_blank" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/5531996294010" target="_blank" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
