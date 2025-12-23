
import React from 'react';

interface MethodProps {
  onApplyClick: () => void;
}

const pillars = [
  {
    num: "01",
    title: "Clareza de Papéis",
    description: "Definição técnica de quem lidera cada área. O fim das sobreposições que geram discussões desnecessárias."
  },
  {
    num: "02",
    title: "Separação Saudável",
    description: "Rituais de transição para garantir que o estresse do balanço não entre pela porta do quarto."
  },
  {
    num: "03",
    title: "Decisão Estratégica",
    description: "Critérios objetivos que substituem o emocional. Menos reatividade, mais visão de longo prazo."
  },
  {
    num: "04",
    title: "Estrutura de Crescimento",
    description: "Processos que permitem a escala sem exigir que o casal se esgote na operação diária."
  }
];

const Method: React.FC<MethodProps> = ({ onApplyClick }) => {
  return (
    <section id="metodo" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4 block">A Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Um caminho estruturado para o lucro e a paz.
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm lg:text-right font-light">
            Não é sobre trabalhar mais, é sobre trabalhar com a estrutura certa para o seu momento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100 mb-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-10 border-r border-b border-slate-100 hover:bg-slate-50 transition-all group relative overflow-hidden">
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

        <div className="flex justify-center">
          <button 
            onClick={onApplyClick}
            className="bg-[#0A192F] text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
          >
            Quero me candidatar à Mentoria
          </button>
        </div>
      </div>
    </section>
  );
};

export default Method;
