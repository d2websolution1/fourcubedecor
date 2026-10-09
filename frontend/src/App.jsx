import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreFooterCta from './components/PreFooterCta';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ConsultationModal from './components/ConsultationModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import CategoryDetail from './pages/CategoryDetail';
import Guides from './pages/Guides';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';

// Location-Based Interior Designer Pages (South Delhi)
import LocationInteriorPage from './pages/LocationInteriorPage';
import CitiesHub from './pages/CitiesHub';

// New Commercial Decor Pages
import Commercial from './pages/Commercial';
import MallDecor from './pages/MallDecor';
import OfficeDecor from './pages/OfficeDecor';
import JewelleryDecor from './pages/JewelleryDecor';
import ShopDecor from './pages/ShopDecor';

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
        {/* Navigation Bar with Commercial Decor Dropdown */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/about" element={<About onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/gallery" element={<Gallery onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/category/:id" element={<CategoryDetail onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            {/* Commercial Decor Routes */}
            <Route path="/commercial" element={<Commercial onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/commercial/mall-decor" element={<MallDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/mall-decor" element={<MallDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            <Route path="/commercial/office-decor" element={<OfficeDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/office-decor" element={<OfficeDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            <Route path="/commercial/jewellery-shop-decor" element={<JewelleryDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/jewellery-decor" element={<JewelleryDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            <Route path="/commercial/shop-decor" element={<ShopDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/shop-decor" element={<ShopDecor onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            <Route path="/calculator" element={<Navigate to="/commercial" replace />} />

            {/* Location-Based Interior Designer Routes (South Delhi & Cities Hub) */}
            <Route path="/cities" element={<CitiesHub onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/cities/interior-designers-:slug" element={<LocationInteriorPage onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-:slug" element={<LocationInteriorPage onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            {/* Direct Named Locality Routes for Saket, Hauz Khas, GK, Vasant Kunj, South Ext, Mehrauli, Lajpat Nagar */}
            <Route path="/interior-designers-saket" element={<LocationInteriorPage locationSlug="saket" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-hauz-khas" element={<LocationInteriorPage locationSlug="hauz-khas" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-greater-kailash" element={<LocationInteriorPage locationSlug="greater-kailash" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-vasant-kunj" element={<LocationInteriorPage locationSlug="vasant-kunj" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-south-extension" element={<LocationInteriorPage locationSlug="south-extension" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-mehrauli" element={<LocationInteriorPage locationSlug="mehrauli" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/interior-designers-lajpat-nagar" element={<LocationInteriorPage locationSlug="lajpat-nagar" onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />

            <Route path="/guides" element={<Guides onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/why-us" element={<WhyUs onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Pre-Footer Transform Your Space CTA Section */}
        <PreFooterCta onOpenConsultation={() => handleOpenConsultation()} />

        {/* Footer */}
        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        {/* Global Floating Actions (WhatsApp Chat & Call button - Hidden on mobile for clutter-free scrolling) */}
        <FloatingActions onOpenConsultation={() => handleOpenConsultation()} />

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
