
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mentor from './components/Mentor';
import Method from './components/Method';
import Transformation from './components/Transformation';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Link oficial e único para centralizar a manutenção
  const whatsappUrl = "https://wa.me/5591981178118?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20mentoria%20EM%20FAM%C3%8DLIA%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A%0A%23PROTOCOLODEATENDIMENTOFAMILIA2026";

  const handleApply = () => {
    // Abrir em nova aba é melhor para retenção do usuário na página
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onApplyClick={handleApply} />
      <main>
        <Hero onApplyClick={handleApply} />
        <Problem onApplyClick={handleApply} />
        <Mentor onApplyClick={handleApply} />
        <Method onApplyClick={handleApply} />
        <Transformation onApplyClick={handleApply} />
        <CTASection onApplyClick={handleApply} />
        <FAQ onApplyClick={handleApply} />
      </main>
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default App;
