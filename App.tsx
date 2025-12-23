
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mentor from './components/Mentor';
import Method from './components/Method';
import Transformation from './components/Transformation';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onApplyClick={openModal} />
      <main>
        <Hero onApplyClick={openModal} />
        <div id="problema">
          <Problem onApplyClick={openModal} />
        </div>
        <div id="mentor">
          <Mentor onApplyClick={openModal} />
        </div>
        <div id="metodo">
          <Method onApplyClick={openModal} />
        </div>
        <Transformation onApplyClick={openModal} />
        <CTASection onApplyClick={openModal} />
        <div id="faq">
          <FAQ onApplyClick={openModal} />
        </div>
      </main>
      <Footer />
      
      <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
