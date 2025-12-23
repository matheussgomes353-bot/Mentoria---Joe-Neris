
import React from 'react';

interface TransformationProps {
  onApplyClick: () => void;
}

const features = [
  {
    title: "Papéis Claros",
    desc: "Cada um sabe exatamente seu domínio e responsabilidades."
  },
  {
    title: "Empresa Previsível",
    desc: "Processos que rodam sozinhos e trazem segurança financeira."
  },
  {
    title: "Decisões com Critério",
    desc: "Fim das discussões baseadas apenas no cansaço ou emoção."
  },
  {
    title: "Mais Tempo e Lucro",
    desc: "Eficiência que libera agenda para a vida pessoal e lazer."
  },
  {
    title: "Relacionamento Preservado",
    desc: "O casal volta a ser casal, não apenas sócios estressados."
  }
];

const Transformation: React.FC<TransformationProps> = ({ onApplyClick }) => {
  return (
    <section className="py-24 bg-[#0A192F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
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
                    <p className="text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={onApplyClick}
              className="bg-[#C5A059] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-2xl shadow-[#C5A059]/20"
            >
              Quero me candidatar
            </button>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-2xl font-serif text-[#C5A059] italic">
                Empresa saudável + casal alinhado.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden">
                <img src="https://picsum.photos/seed/biz1/400/400" alt="Work 1" className="w-full h-full object-cover opacity-60 grayscale" />
              </div>
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden translate-y-8">
                <img src="https://picsum.photos/seed/biz2/400/400" alt="Work 2" className="w-full h-full object-cover opacity-60 grayscale" />
              </div>
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden -translate-y-8">
                <img src="https://picsum.photos/seed/biz3/400/400" alt="Work 3" className="w-full h-full object-cover opacity-60 grayscale" />
              </div>
              <div className="aspect-square bg-slate-800 rounded-sm overflow-hidden">
                <img src="https://picsum.photos/seed/biz4/400/400" alt="Work 4" className="w-full h-full object-cover opacity-60 grayscale" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
