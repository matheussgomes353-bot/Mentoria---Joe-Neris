
import React from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logotipo / Branding */}
        <div className="text-slate-900 font-bold tracking-tight text-base sm:text-lg md:text-xl uppercase truncate pr-4">
          Joe Neris <span className="text-[#C5A059]">|</span> <span className="font-light hidden sm:inline">Empreendendo em Família</span>
        </div>

        {/* Apenas o botão de ação principal */}
        <button 
          onClick={onApplyClick}
          className="flex-shrink-0 bg-[#0A192F] text-white px-4 sm:px-6 py-2.5 rounded-sm text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Falar com Especialista
        </button>
      </div>
    </header>
  );
};

export default Navbar;
