
import React, { useState } from 'react';

interface FAQProps {
  onApplyClick: () => void;
}

const faqs = [
  {
    question: "Essa mentoria é para qualquer empresa familiar?",
    answer: "Não. É focada em empresas em funcionamento, com faturamento recorrente e que enfrentam conflitos reais de crescimento decorrentes da mistura entre laços afetivos e gestão empresarial."
  },
  {
    question: "É para famílias grandes ou pequenas?",
    answer: "Atendemos qualquer estrutura familiar (pais, filhos, irmãos, parentes) que trabalhe junta no dia a dia do negócio e queira profissionalizar essa relação."
  },
  {
    question: "Vamos falar mais de família ou de empresa?",
    answer: "O foco é na empresa. Acreditamos que uma empresa mal estruturada é o que destrói relações familiares. Ao organizar o negócio, a harmonia familiar é a consequência direta."
  },
  {
    question: "Isso é terapia familiar?",
    answer: "Não. É uma mentoria estritamente empresarial. Embora tenha um impacto emocional positivo gigantesco, o trabalho é técnico: processos, papéis, hierarquia e estratégia."
  }
];

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-800">{q}</span>
        <span className={`transform transition-transform ${open ? 'rotate-180' : ''} text-[#C5A059]`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ onApplyClick }) => {
  return (
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 reveal">Dúvidas Frequentes</h2>
        <div className="space-y-2 mb-16 text-left">
          {faqs.map((f, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <FAQItem q={f.question} a={f.answer} />
            </div>
          ))}
        </div>
        
        <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm reveal" style={{ transitionDelay: '400ms' }}>
          <p className="text-slate-600 mb-6 font-light italic">Sua dúvida é muito específica para o seu negócio familiar?</p>
          <button 
            onClick={onApplyClick}
            className="bg-[#0A192F] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg"
          >
            Aplicar para Sessão Diagnóstica
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
