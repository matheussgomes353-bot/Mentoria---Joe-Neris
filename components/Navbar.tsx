
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
