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

// New Exhibition & Interior Services Pages
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

// Location-Based Interior Designer Pages (South Delhi)
import LocationInteriorPage from './pages/LocationInteriorPage';
import CitiesHub from './pages/CitiesHub';
import DedicatedServiceLocationPage from './pages/DedicatedServiceLocationPage';

// Commercial Decor Pages
import Commercial from './pages/Commercial';
import MallDecor from './pages/MallDecor';
import OfficeDecor from './pages/OfficeDecor';
import JewelleryDecor from './pages/JewelleryDecor';
import ShopDecor from './pages/ShopDecor';

// Data for Location & Category Routes
import { southDelhiLocations } from './data/locationsData';
import { footerServiceLinks } from './data/seoFooterData';
import { all120Pages } from './data/pages120Data';

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
        {/* Navigation Bar with Services & Commercial Dropdowns */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            
            {/* Exhibition & Interior Services Routes */}
            <Route path="/services" element={<Services onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            <Route path="/services/:slug" element={<ServiceDetail onOpenConsultation={(svc) => handleOpenConsultation(svc)} />} />
            
            {/* Reference Aliases for Instant Match */}
            <Route path="/services/modular-booth-design-in-india" element={<Navigate to="/services/modular-booth-design" replace />} />
            <Route path="/services/custom-trade-show-booth-design-india" element={<Navigate to="/services/custom-booth-design" replace />} />
            <Route path="/services/two-storey-booth-design-in-india" element={<Navigate to="/services/double-storey-booth-design" replace />} />
            <Route path="/services/country-pavilion-exhibition-booth-design-india" element={<Navigate to="/services/country-pavilion-booth-design" replace />} />
            <Route path="/services/portable-exhibition-stand-builder-india" element={<Navigate to="/services/portable-booth-design" replace />} />
            <Route path="/services/corporate-event-management-services-india" element={<Navigate to="/services/event-management-services" replace />} />

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

            {/* 120 DEDICATED UNIQUE SERVICE X LOCATION PAGES */}
            {all120Pages.map((page) => (
              <Route
                key={page.slug}
                path={`/${page.slug}`}
                element={<DedicatedServiceLocationPage onOpenConsultation={(svc) => handleOpenConsultation(svc)} />}
              />
            ))}

            {/* Aliases for Alternative Service Prefixes */}
            {all120Pages.map((page) => {
              const aliases = [];
              if (page.serviceSlug === 'jewellery-decor') {
                aliases.push(`jewellery-shop-decor-in-${page.locationSlug}`);
                aliases.push(`jewellery-shop-in-${page.locationSlug}`);
              }
              if (page.serviceSlug === 'wardrobe') {
                aliases.push(`wardrobes-storage-in-${page.locationSlug}`);
              }
              if (page.serviceSlug === 'space-saving') {
                aliases.push(`space-saving-furniture-in-${page.locationSlug}`);
              }
              if (page.serviceSlug === 'bathroom') {
                aliases.push(`bathroom-decor-in-${page.locationSlug}`);
              }
              if (page.serviceSlug === 'living-room') {
                aliases.push(`living-room-tv-in-${page.locationSlug}`);
              }
              if (page.serviceSlug === 'office-decor') {
                aliases.push(`commercial-office-in-${page.locationSlug}`);
              }
              return aliases.map((alias) => (
                <Route
                  key={alias}
                  path={`/${alias}`}
                  element={<Navigate to={`/${page.slug}`} replace />}
                />
              ));
            })}

            {/* Direct Named Locality Routes */}
            {southDelhiLocations.map((loc) => (
              <Route
                key={`interior-designers-${loc.slug}`}
                path={`/interior-designers-${loc.slug}`}
                element={
                  <LocationInteriorPage
                    locationSlug={loc.slug}
                    serviceKey="interior-design"
                    onOpenConsultation={(svc) => handleOpenConsultation(svc)}
                  />
                }
              />
            ))}


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

        {/* Global Floating Actions */}
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
