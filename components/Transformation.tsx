
import React from 'react';

interface TransformationProps {
  onApplyClick: () => void;
}

const features = [
  {
    title: "Hierarquia Profissional",
    desc: "Pais, filhos e parentes respeitam as posições técnicas dentro do negócio."
  },
  {
    title: "Decisões Estratégicas",
    desc: "Menos reatividade emocional, mais visão de longo prazo para o patrimônio."
  },
  {
    title: "Redução de Conflitos",
    desc: "Fim das brigas por falta de clareza sobre quem faz o quê."
  },
  {
    title: "Crescimento Sustentável",
    desc: "Escala real sem depender de vínculos emocionais ou favores."
  },
  {
    title: "Família Preservada",
    desc: "O almoço de domingo volta a ser sobre conexão, não sobre boletos."
  }
];

const Transformation: React.FC<TransformationProps> = ({ onApplyClick }) => {
  return (
    <section id="transformacao" className="relative py-24 bg-[#0A192F] text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 reveal-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">O que muda na prática.</h2>
            <div className="space-y-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059] flex-shrink-0 mt-1 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0A192F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{f.title}</h4>
                    <p className="text-slate-400 font-light">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={onApplyClick}
              className="bg-[#C5A059] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-2xl shadow-[#C5A059]/20"
            >
              Aplicar para Sessão Diagnóstica
            </button>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-2xl font-serif text-[#C5A059] italic">
                Empresa organizada + família preservada.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative reveal-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=600&auto=format&fit=crop" 
                  alt="Profissionalismo no negócio" 
                  className="w-full h-full object-cover whitescale hover:whitescale-0 transition-all duration-700" 
                />
              </div>
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden translate-y-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&h=600&auto=format&fit=crop" 
                  alt="Harmonia familiar" 
                  className="w-full h-full object-cover whitescale hover:whitescale-0 transition-all duration-700" 
                />
              </div>
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden -translate-y-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=600&auto=format&fit=crop" 
                  alt="Planejamento estratégico" 
                  className="w-full h-full object-cover whitescale hover:whitescale-0 transition-all duration-700" 
                />
              </div>
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&h=600&auto=format&fit=crop" 
                  alt="Gestão de resultados" 
                  className="w-full h-full object-cover whitescale hover:whitescale-0 transition-all duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seta de Interatividade (Apenas visual) */}
      <div className="flex justify-center pb-8 opacity-70">
        <div className="animate-bounce-subtle flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-slate-400">Dúvidas Frequentes</span>
          <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
