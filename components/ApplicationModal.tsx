
import React, { useState, useEffect } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    businessType: '',
    revenue: '',
    decisionMaking: '',
    name: '',
    phone: ''
  });

  // Reset state when modal closes/opens
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
        setIsSubmitting(false);
        setFormData({
          businessType: '',
          revenue: '',
          decisionMaking: '',
          name: '',
          phone: ''
        });
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    const whatsappUrl = "https://wa.me/5591981178118?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20mentoria%20EM%20FAM%C3%8DLIA%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A%23PROTOCOLODEATENDIMENTOFAMILIA2026";
    
    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1200);
  };

  const revenueOptions = [
    "Até R$ 20.000",
    "R$ 20.000 a R$ 100.000",
    "R$ 100.000 a R$ 500.000",
    "Acima de R$ 500.000"
  ];

  // Estilo de input para fundo escuro sofisticado
  const inputClasses = "w-full px-4 py-4 bg-[#333333] border-2 border-transparent border-t-[#C5A059] text-white font-bold text-lg rounded-sm focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all placeholder:text-slate-500 placeholder:font-normal";

  const motivationalPhrases = {
    1: "Vocês já deram o passo que a maioria ignora: admitir que o sucesso da empresa não pode custar a paz da família. Vamos desenhar esse novo caminho.",
    2: "A clareza que vocês buscam está na organização. Cada resposta aqui nos ajuda a entender como profissionalizar o seu legado familiar.",
    3: "Quase lá. Você está a segundos de garantir prioridade para uma das poucas vagas seletivas. Sua família sentirá o impacto dessa decisão profissional ainda este mês."
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay Navy Translúcido original */}
      <div 
        className="absolute inset-0 bg-[#0A192F]/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl overflow-hidden transition-all duration-300 transform scale-100">
        
        <div className="bg-slate-50 border-b border-slate-100 px-8 py-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Sessão Diagnóstica Família</h3>
            {!isSuccess && <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Passo {step} de 3</p>}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!isSuccess && (
          <div className="h-1.5 w-full bg-slate-100">
            <div 
              className="h-full bg-[#C5A059] transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Aplicação Enviada!</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                Excelente escolha, <strong>{formData.name.split(' ')[0]}</strong>! Redirecionando para o WhatsApp para darmos prioridade ao seu negócio familiar...
              </p>
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-3 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-8 p-4 bg-[#C5A059]/10 border-l-4 border-[#C5A059] text-slate-800 text-sm leading-relaxed font-medium">
                {motivationalPhrases[step as keyof typeof motivationalPhrases]}
              </div>

              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-base font-bold text-slate-800 mb-3">Qual o tipo do negócio físico da família?</label>
                    <input 
                      required
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="Ex: Rede de lojas, Clínica, Indústria..."
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-slate-800 mb-3">Faturamento mensal médio do grupo?</label>
                    <select 
                      required
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="" className="text-slate-400">Selecione uma faixa</option>
                      {revenueOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-[#333333] text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <button 
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.businessType || !formData.revenue}
                    className="w-full bg-[#0A192F] text-white py-5 rounded-sm text-lg font-bold disabled:opacity-50 transition-all hover:bg-slate-800 shadow-lg"
                  >
                    Próximo Passo
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-base font-bold text-slate-800 mb-3">Qual o maior conflito familiar hoje?</label>
                    <textarea 
                      required
                      name="decisionMaking"
                      value={formData.decisionMaking}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Mistura de papéis? Conflito geracional? Falta de processos?"
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="w-1/3 border border-slate-200 text-slate-600 py-4 rounded-sm font-bold hover:bg-slate-50 transition-colors"
                    >
                      Voltar
                    </button>
                    <button 
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.decisionMaking}
                      className="w-2/3 bg-[#0A192F] text-white py-4 rounded-sm font-bold transition-all hover:bg-slate-800 shadow-lg"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base font-bold text-slate-800 mb-3">Seu Nome Completo?</label>
                      <input 
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-base font-bold text-slate-800 mb-3">WhatsApp de contato?</label>
                      <input 
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="w-1/3 border border-slate-200 text-slate-600 py-4 rounded-sm font-bold hover:bg-slate-50 transition-colors"
                    >
                      Voltar
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.phone}
                      className="w-2/3 bg-[#C5A059] text-white py-4 rounded-sm font-bold transition-all hover:bg-[#b08d48] flex items-center justify-center shadow-lg"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : "Finalizar Candidatura"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
