
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass p-12 lg:p-20 rounded-[4rem] text-center border border-white/10 relative overflow-hidden group">
        {/* Animated Background Decor */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-900/20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-display leading-tight">
            Pronto para colocar seu negócio online <br />
            <span className="gold-text">do jeito certo?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Se você precisa de uma landing page profissional para atrair clientes e gerar resultados reais, entre em contato agora.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5531996294010"
              className="px-12 py-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
            >
              Solicitar Orçamento Grátis
            </a>
            <a 
              href="https://wa.me/5531996294010"
              className="px-12 py-6 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
            >
              Conversar via WhatsApp
            </a>
          </div>
          
          <p className="mt-12 text-sm text-gray-500 font-medium tracking-widest uppercase">
            Atendimento exclusivo para todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
