
import React from 'react';

interface CTASectionProps {
  onApplyClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onApplyClick }) => {
  return (
    <section id="apply" className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-sm shadow-sm">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight italic">
            Prontos para organizar o legado?
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            A Mentoria 'Empreendendo em Família' não é para todos os negócios. Filtramos apenas aqueles que já faturam e estão prontos para profissionalizar as relações e a gestão.
          </p>
          <div className="space-y-6">
            <button 
              onClick={onApplyClick}
              className="w-full sm:w-auto bg-[#0A192F] text-white px-10 py-5 rounded-sm text-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
            >
              Falar com Joe Neris no WhatsApp
            </button>
            <p className="text-sm text-slate-400">
              Ao clicar, você será redirecionado para o WhatsApp oficial para uma breve triagem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
