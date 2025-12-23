
import React, { useState } from 'react';

interface FAQProps {
  onApplyClick: () => void;
}

const faqs = [
  {
    question: "Para quem é esta mentoria?",
    answer: "A mentoria é focada em casais que já possuem negócios em funcionamento. Não é um curso para quem quer começar do zero, mas sim para quem já fatura e precisa de estrutura para crescer sem destruir o relacionamento."
  },
  {
    question: "Qual tipo de negócio Joe atende?",
    answer: "O foco principal são negócios físicos ou híbridos (com presença online mas estrutura física, como clínicas, spas, lojas ou escritórios), onde a gestão operacional e societária é mais complexa."
  },
  {
    question: "O foco é na empresa ou no relacionamento?",
    answer: "Em ambos. Não existe empresa saudável com um casal em crise, e raramente um casal prospera em paz com uma empresa caótica. Trabalhamos os dois pilares de forma integrada."
  },
  {
    question: "Qual o objetivo da Sessão Diagnóstica?",
    answer: "A Sessão Diagnóstica serve para avaliarmos se o seu momento de negócio e de casal é o ideal para a nossa metodologia. É um filtro para garantir que possamos realmente entregar a transformação prometida."
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
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-2 mb-16 text-left">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.question} a={f.answer} />
          ))}
        </div>
        
        <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm">
          <p className="text-slate-600 mb-6 font-light italic">Ainda tem alguma dúvida ou sente que o seu caso é específico?</p>
          <button 
            onClick={onApplyClick}
            className="bg-[#0A192F] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg"
          >
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
