
import React from 'react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display">Como <span className="gold-text">funciona</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Um processo simples e transparente para garantir que sua landing page seja entregue com perfeição.</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0"></div>

          <div className="space-y-12">
            {PROCESS.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full lg:text-right">
                  <div className={`lg:px-12 ${idx % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <h3 className="text-xl font-bold mb-2 gold-text">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  {idx + 1}
                </div>

                <div className="flex-1 w-full hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
