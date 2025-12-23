
import React from 'react';

interface ProblemProps {
  onApplyClick: () => void;
}

const Problem: React.FC<ProblemProps> = ({ onApplyClick }) => {
  return (
    <section id="problema" className="relative py-8 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A empresa cresce, mas a família paga o preço?
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                A empresa funciona, vende e cresce... mas tudo depende da família. Sem uma separação clara entre a casa e o caixa, o papel de pai vira o de gestor e o de filho vira o de funcionário, gerando mágoas acumuladas.
              </p>
              <p>
                As decisões são tomadas na emoção e os conflitos do negócio atravessam o almoço de domingo. O medo silencioso é real: se a empresa continuar assim, alguém vai se machucar.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-[#C5A059] pl-6 py-2 italic font-medium text-slate-800 text-xl">
                  "O problema não é a família trabalhar junta. O problema é trabalhar sem estrutura."
                </blockquote>
              </div>
            </div>
            <button 
              onClick={onApplyClick}
              className="bg-[#0A192F] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              Aplicar para Sessão Diagnóstica
            </button>
          </div>
          <div className="reveal-right bg-slate-100 rounded-sm aspect-[4/3] relative overflow-hidden flex items-center justify-center">
             <img 
               src="https://lh3.googleusercontent.com/pw/AP1GczNMN8J3PZ8g_V4YcIUgWDgdbI7Y-Dw0DGb_S-mNYAxuKRmcFrRis05g9e5Nbf_92v6_u_MnjhGFZe9riva4Zn5QJbAXECbSvKhzHsHRAeGv3memjFr1NFv0wtbCcCDWqtRP41fr9KUinM3_6CReXBOUEA=w915-h1371-s-no-gm?authuser=0" 
               alt="Reunião de família e negócios" 
               className="object-cover w-full h-full shadow-inner transition-transform duration-700 hover:scale-105"
             />
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-2">
        <div className="animate-bounce-subtle flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-slate-400">Conheça o Mentor</span>
          <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Problem;
