import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileBottomBar from './components/MobileBottomBar';
import ConsultationModal from './components/ConsultationModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import CategoryDetail from './pages/CategoryDetail';
import PriceCalculator from './pages/PriceCalculator';
import Guides from './pages/Guides';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [activeConsultationService, setActiveConsultationService] = useState('Full Home Interiors');

  const handleOpenConsultation = (service = 'Full Home Interiors') => {
    setActiveConsultationService(service);
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/about" element={<About onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/gallery" element={<Gallery onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/category/:id" element={<CategoryDetail onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/calculator" element={<PriceCalculator onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/guides" element={<Guides onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/why-us" element={<WhyUs onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        {/* Global Floating Actions (WhatsApp Chat & Call button) */}
        <FloatingActions onOpenConsultation={() => handleOpenConsultation()} />

        {/* Mobile Fixed Bottom Navigation Bar */}
        <MobileBottomBar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Consultation Modal Triggered From Any CTA */}
        <ConsultationModal 
          isOpen={consultationModalOpen} 
          onClose={handleCloseConsultation} 
          defaultService={activeConsultationService}
        />
      </div>
    </Router>
  );
}
