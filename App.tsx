
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
        <Problem onApplyClick={openModal} />
        <Mentor onApplyClick={openModal} />
        <Method onApplyClick={openModal} />
        <Transformation onApplyClick={openModal} />
        <CTASection onApplyClick={openModal} />
        <FAQ onApplyClick={openModal} />
      </main>
      <Footer />
      
      <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
