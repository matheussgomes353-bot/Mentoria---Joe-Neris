
import React from 'react';

interface CTASectionProps {
  onApplyClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onApplyClick }) => {
  return (
    <section id="apply" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-sm shadow-sm">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight italic">
            Prontos para o próximo nível?
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            A Mentoria 'Empreendendo em Casal' não é para todos. As vagas são limitadas e o processo é seletivo para garantir que cada casal mentorado receba a atenção e o resultado que buscam.
          </p>
          <div className="space-y-6">
            <button 
              onClick={onApplyClick}
              className="w-full sm:w-auto bg-[#0A192F] text-white px-10 py-5 rounded-sm text-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
            >
              Quero me candidatar à Mentoria
            </button>
            <p className="text-sm text-slate-400">
              Ao clicar, você será redirecionado para preencher um formulário diagnóstico inicial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
