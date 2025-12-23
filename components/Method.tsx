
import React from 'react';

interface MethodProps {
  onApplyClick: () => void;
}

const pillars = [
  {
    num: "01",
    title: "Clareza de Papéis",
    description: "Cada familiar sabe exatamente sua função e limite de autoridade. O fim das sobreposições que geram discussões."
  },
  {
    num: "02",
    title: "Separação Saudável",
    description: "Família é família, empresa é empresa. Criamos os limites para que o domingo volte a ser de descanso."
  },
  {
    num: "03",
    title: "Critério Decisório",
    description: "Decisões baseadas em estratégia e indicadores, não no humor do dia ou em vínculos emocionais."
  },
  {
    num: "04",
    title: "Estrutura de Crescimento",
    description: "Processos que permitem a escala sem exigir que a família se esgote na operação diária."
  }
];

const Method: React.FC<MethodProps> = ({ onApplyClick }) => {
  return (
    <section id="metodo" className="relative py-8 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4 block">O Método</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              A Mentoria que estrutura o lucro e preserva a união.
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm lg:text-right font-light">
            Não tentamos consertar pessoas. Estruturamos papéis para que a empresa cresça sem destruir relações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100 mb-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="reveal p-8 border-r border-b border-slate-100 hover:bg-slate-50 transition-all group relative overflow-hidden"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <span className="text-6xl font-bold text-slate-100 absolute -top-2 -right-2 group-hover:text-[#C5A059]/10 transition-colors">
                {pillar.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#C5A059] transition-colors italic font-serif">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C5A059] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal" style={{ transitionDelay: '600ms' }}>
          <button 
            onClick={onApplyClick}
            className="bg-[#0A192F] text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
          >
            Aplicar para Sessão Diagnóstica
          </button>
        </div>
      </div>

      <div className="flex justify-center pb-2">
        <div className="animate-bounce-subtle flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-slate-400">Próximo Passo</span>
          <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Method;
