
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display">O que <span className="gold-text">eu faço</span></h2>
            <p className="text-gray-400 max-w-xl">
              Soluções completas para transformar sua presença digital em uma máquina de gerar leads.
            </p>
          </div>
          <a href="https://wa.me/5531996294010" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Ver portfólio completo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-10 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-blue-500/20 transition-all group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
