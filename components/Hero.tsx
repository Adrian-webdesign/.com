
import React, { useEffect, useRef } from 'react';
// Import gsap to fix the "Cannot find name 'gsap'" error
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
      
      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="hero-content text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass gold-border mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Web Design Estratégico</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 font-display">
            Landing Pages que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">transformam</span> visitantes em clientes
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Design estratégico, conversão real e presença digital profissional. Crio páginas rápidas e eficientes para negócios que precisam vender mais.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://wa.me/5531996294010"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="https://wa.me/5531996294010"
              className="w-full sm:w-auto px-10 py-5 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Client" className="w-10 h-10 rounded-full border-2 border-dark" />
              ))}
            </div>
            <p className="text-sm text-gray-400">
              <span className="text-white font-bold">+50 projetos</span> entregues com foco total em conversão.
            </p>
          </div>
        </div>

        <div className="hero-image relative hidden lg:block">
          <div className="relative z-10 glass p-4 rounded-[2rem] border border-white/10 shadow-2xl rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Design Preview" 
              className="rounded-[1.5rem] w-full"
            />
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-2xl flex flex-col items-center justify-center border border-white/10 animate-bounce delay-700">
            <span className="text-2xl font-bold text-blue-500">98%</span>
            <span className="text-[10px] text-gray-400 uppercase font-bold">Conversão</span>
          </div>
          <div className="absolute -bottom-10 -left-10 px-6 py-4 glass rounded-2xl border border-white/10">
            <span className="text-sm font-bold text-white">Adrian Almeida</span>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-500 text-xs">★</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
