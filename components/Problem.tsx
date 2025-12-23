
import React from 'react';

interface ProblemProps {
  onApplyClick: () => void;
}

const Problem: React.FC<ProblemProps> = ({ onApplyClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A empresa fatura, mas o casal paga o preço?
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Muitos casais vivem o dilema de ver o faturamento subir enquanto a conexão emocional despenca. A empresa depende 100% de vocês, e sem clareza de quem faz o quê, o estresse do balanço vira a briga no jantar.
              </p>
              <p>
                A falta de processos claros e papéis definidos faz com que as discussões do negócio invadam o quarto, minando a cumplicidade que um dia foi o alicerce de tudo.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-[#C5A059] pl-6 py-2 italic font-medium text-slate-800 text-xl">
                  "Não é falta de amor. É falta de estrutura."
                </blockquote>
              </div>
            </div>
            <button 
              onClick={onApplyClick}
              className="bg-[#0A192F] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              Quero me candidatar
            </button>
          </div>
          <div className="bg-slate-100 rounded-sm aspect-[4/3] relative overflow-hidden flex items-center justify-center">
             <img 
               src="https://lh3.googleusercontent.com/pw/AP1GczNMN8J3PZ8g_V4YcIUgWDgdbI7Y-Dw0DGb_S-mNYAxuKRmcFrRis05g9e5Nbf_92v6_u_MnjhGFZe9riva4Zn5QJbAXECbSvKhzHsHRAeGv3memjFr1NFv0wtbCcCDWqtRP41fr9KUinM3_6CReXBOUEA=w915-h1371-s-no-gm?authuser=0" 
               alt="Casal em ambiente corporativo" 
               className="object-cover w-full h-full whitescale opacity-80"
             />
             <div className="absolute inset-0 bg-navy-900/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
