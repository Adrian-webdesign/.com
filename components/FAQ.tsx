
import React, { useState } from 'react';
import { FAQ } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center font-display">Dúvidas <span className="gold-text">Frequentes</span></h2>
        
        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
