
import React from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-navy-900 font-bold tracking-tight text-xl uppercase">
          Joe Neris <span className="text-[#C5A059]">|</span> <span className="font-light hidden sm:inline">Empreendendo em Casal</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#problema" className="hover:text-[#C5A059] transition-colors">O Desafio</a>
          <a href="#mentor" className="hover:text-[#C5A059] transition-colors">O Mentor</a>
          <a href="#metodo" className="hover:text-[#C5A059] transition-colors">Método</a>
          <a href="#faq" className="hover:text-[#C5A059] transition-colors">FAQ</a>
        </nav>

        <button 
          onClick={onApplyClick}
          className="bg-[#0A192F] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Sessão Diagnóstica
        </button>
      </div>
    </header>
  );
};

export default Navbar;
