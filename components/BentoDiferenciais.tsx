
import React, { useEffect, useRef } from 'react';
// Import gsap to fix the "Cannot find name 'gsap'" error
import gsap from 'gsap';
import { DIFFERENCES } from '../constants';

const BentoDiferenciais: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="diferenciais" ref={sectionRef} className="py-24 px-6 bg-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display">Por que escolher <br /><span className="gold-text">meu serviço</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Não é apenas sobre estética. É sobre construir uma ferramenta de vendas poderosa para o seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {DIFFERENCES.map((diff, idx) => {
            const sizeClass = 
              diff.size === 'large' ? 'md:col-span-2 md:row-span-2' :
              diff.size === 'medium' ? 'md:col-span-2 md:row-span-1' :
              'md:col-span-1 md:row-span-1';

            return (
              <div 
                key={idx} 
                className={`bento-item glass p-8 rounded-[2.5rem] flex flex-col justify-between border border-white/5 hover:border-blue-500/30 transition-all group overflow-hidden relative ${sizeClass}`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.464 15.657l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414zM14.95 14.95l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414-1.414z"></path></svg>
                </div>
                
                <div>
                  <h3 className={`font-bold mb-4 font-display ${diff.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                    {diff.title}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoDiferenciais;
