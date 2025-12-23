
import React from 'react';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0A192F] text-white overflow-hidden">
      {/* Luzes de fundo para profundidade e sofisticação */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#C5A059]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px]">
                Inscrições Abertas para Mentoria Individual
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
              Sua empresa <br />
              <span className="text-[#C5A059]">sem sacrificar</span> <br />
              seu casamento.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              A mentoria definitiva para casais que buscam lucrar alto com negócios físicos, sem perder a cumplicidade e a paz no relacionamento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button 
                onClick={onApplyClick}
                className="group relative overflow-hidden bg-[#C5A059] text-white px-10 py-5 rounded-sm text-lg font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-[#C5A059]/20 w-full sm:w-auto"
              >
                <span className="relative z-10 uppercase tracking-widest text-sm">Quero me candidatar</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Lado Direito: A Foto do Mentor */}
          <div className="w-full lg:w-2/5 max-w-md mx-auto">
            <div className="relative group">
              {/* Elementos decorativos de luxo */}
              <div className="absolute -inset-4 border border-white/5 rounded-sm -z-10 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#C5A059]/40 -z-10"></div>
              
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)] border border-white/10 bg-slate-800">
                <img 
                  src="mentor-joe.jpg" 
                  alt="Joe Neris - Mentor" 
                  className="w-full h-full object-cover whitescale brightness-120 group-hover:whitescale-0 group-hover:scale-105 transition-all duration-2000 ease-out"
                  onError={(e) => {
                    // Fallback se a imagem não carregar por algum motivo
                    e.currentTarget.src = "https://lh3.googleusercontent.com/pw/AP1GczMm8cGq-4MGs-nlZUsWuywKDiLpQwhsh1MFAJ_HxY2Ops4UGPVejxo-QJvE747N-LG5UwwzhW5YOyc55qeh09sYplVJqhlhCh55HFMVRn7_PFwYB3YgW9-9hHCMouRhg_EBHzGV5nO488Bfn0HfKP0jVw=w915-h1371-s-no-gm?authuser=0";
                  }}
                />
                {/* Gradiente sutil sobre a foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Tag de autoridade flutuante */}
              <div className="absolute -bottom-4 -left-4 bg-white p-6 shadow-2xl z-20 hidden md:block border-t-4 border-[#C5A059]">
                 <p className="text-[#0A192F] font-bold text-sm uppercase tracking-tighter">Foco em Resultados</p>
                 <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">E Harmonia Conjugal</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
