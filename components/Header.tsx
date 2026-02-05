
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">A</div>
          <span className="text-xl font-bold tracking-tighter text-white font-display">ADRIAN<span className="gold-text">ALMEIDA</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
          <a href="#processo" className="hover:text-white transition-colors">Processo</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <a 
          href="https://wa.me/5531996294010" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
};

export default Header;
