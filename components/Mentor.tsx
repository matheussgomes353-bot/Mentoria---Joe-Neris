
import React from 'react';

interface MentorProps {
  onApplyClick: () => void;
}

const Mentor: React.FC<MentorProps> = ({ onApplyClick }) => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Coluna da Imagem */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#C5A059]/20 -z-0"></div>
              
              <div className="aspect-[3/4] bg-[#0A192F] rounded-sm overflow-hidden relative shadow-[40px_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5 z-10 group">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNWoo8aK1BqN-S7KQrZLSyHYntGndi93-qOmJV0HTdAL0l_31wj_U379ouxRtyTq8zKU72Wdch_m-EGB2Ggb0GN1wkeGz118mCoe2OoXY4uG0-PbHrvlWROu3gH4hlUJhSz7p1xmNoxp6266VvFKjdTJA=w915-h1371-s-no-gm?authuser=0" 
                  alt="Joe Neris - Especialista em Negócios de Casal" 
                  className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.95] transition-transform duration-[4s] group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "mentor-joe.jpg";
                    e.currentTarget.classList.remove('grayscale');
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                  <p className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4 text-[#C5A059]">Fundador do Método</p>
                  <p className="text-6xl font-bold font-serif leading-none tracking-tight">Joe Neris</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-slate-200 -z-10"></div>
            </div>
          </div>
          
          {/* Coluna de Texto */}
          <div className="w-full lg:w-7/12">
            <div className="max-w-xl">
              <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-6 block">Autoridade & Experiência Real</span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 leading-[1.1]">
                A clareza de quem <br /><span className="text-[#C5A059] italic font-serif">vive</span> o que ensina.
              </h2>
              <div className="space-y-8 text-slate-600 text-xl leading-relaxed font-light mb-12">
                <p>
                  Joe Neris não é apenas um teórico. Ele é empresário e sócio de sua esposa em uma rede de spas de alto padrão. Ele entende na pele o peso de cada decisão tomada em conjunto.
                </p>
                <p>
                  Sua mentoria foi desenhada para casais que já faturam, mas sentem que o crescimento do negócio está cobrando um preço alto demais na intimidade e na saúde mental do casal.
                </p>
                
                <div className="pt-4">
                  <div className="bg-white p-8 border-l-[8px] border-[#C5A059] shadow-sm relative">
                    <p className="font-bold text-slate-900 italic text-xl leading-snug relative z-10 font-serif">
                      "O sucesso do seu CNPJ não pode custar a felicidade do seu CPF."
                    </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={onApplyClick}
                className="bg-[#C5A059] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
              >
                Quero me candidatar
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Mentor;
