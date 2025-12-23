
import React from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-navy-900 font-bold tracking-tight text-xl uppercase">
          Joe Neris <span className="text-[#C5A059]">|</span> <span className="font-light">Empreendendo em Casal</span>
        </div>
        <button 
          onClick={onApplyClick}
          className="hidden md:block bg-[#0A192F] text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Sessão Diagnóstica
        </button>
      </div>
    </header>
  );
};

export default Navbar;
