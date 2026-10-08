import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { navigationOfferings, companyContact } from '../data/interiorData';
import CategoryIcon from './CategoryIcon';

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offeringsDropdownOpen, setOfferingsDropdownOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOfferingsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOfferingsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOfferingsDropdownOpen(false);
    }, 200);
  };

  // Split offerings into left and right columns matching user's reference screenshot
  const leftOfferings = [
    navigationOfferings.find(o => o.id === 'home-interiors'),
    navigationOfferings.find(o => o.id === 'living-room'),
    navigationOfferings.find(o => o.id === 'wardrobe'),
    navigationOfferings.find(o => o.id === 'home-office'),
  ].filter(Boolean);

  const rightOfferings = [
    navigationOfferings.find(o => o.id === 'modular-kitchen'),
    navigationOfferings.find(o => o.id === 'bedroom'),
    navigationOfferings.find(o => o.id === 'space-saving'),
    navigationOfferings.find(o => o.id === 'bathroom'),
  ].filter(Boolean);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      {/* Top micro bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Guaranteed 45-Day Move-In</span>
          </div>
          <span className="hidden md:inline text-slate-600">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>10-Year Flat Warranty</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={`tel:${companyContact.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Phone className="w-3 h-3 text-rose-400" />
            <span>Call: {companyContact.phone}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20am%20interested%20in%20home%20interiors.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition font-medium"
          >
            <MessageCircle className="w-3 h-3" />
            <span className="hidden sm:inline">WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-600/20 group-hover:scale-105 transition">
              {/* Isometric 3D Cube Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900 font-heading">
                Four<span className="text-rose-600">Cube</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                Decor & Interiors
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Offerings / Design Gallery Mega Menu on HOVER */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition ${
                  offeringsDropdownOpen || location.pathname.startsWith('/category') || location.pathname === '/gallery'
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
                }`}
                onClick={() => setOfferingsDropdownOpen(!offeringsDropdownOpen)}
              >
                <span>Design Gallery</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${offeringsDropdownOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </button>

              {/* MEGA MENU DROPDOWN (Matches screenshot layout) */}
              {offeringsDropdownOpen && (
                <div className="absolute top-full left-0 w-[780px] bg-white rounded-2xl shadow-mega border border-slate-100 p-6 grid grid-cols-12 gap-6 animate-fade-in z-50">
                  {/* Left Column (Home Interiors, Living Room, Wardrobe, Home Office) */}
                  <div className="col-span-5 space-y-1 pr-4 border-r border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">
                      Home Spaces
                    </p>
                    {leftOfferings.map((item) => (
                      <Link
                        key={item.id}
                        to={`/category/${item.id}`}
                        className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-rose-50/80 transition"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-rose-600 group-hover:text-white transition shrink-0 mt-0.5">
                          <CategoryIcon name={item.iconName} className="w-5 h-5 group-hover:text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 group-hover:text-rose-600 transition flex items-center gap-2">
                            {item.title}
                            {item.tag && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-rose-100 text-rose-700 rounded-md">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column (Modular Kitchen, Bedroom, Space Saving, Bathroom) */}
                  <div className="col-span-4 space-y-1 pr-4 border-r border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">
                      Modular Solutions
                    </p>
                    {rightOfferings.map((item) => (
                      <Link
                        key={item.id}
                        to={`/category/${item.id}`}
                        className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-rose-50/80 transition"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-rose-600 group-hover:text-white transition shrink-0 mt-0.5">
                          <CategoryIcon name={item.iconName} className="w-5 h-5 group-hover:text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 group-hover:text-rose-600 transition flex items-center gap-2">
                            {item.title}
                            {item.tag && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-md">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega Menu Promo Card */}
                  <div className="col-span-3 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-rose-600 rounded-full mb-2">
                        Full Gallery
                      </span>
                      <h4 className="font-bold text-sm text-white font-heading">
                        500+ Design Inspirations
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Filter by 2BHK, 3BHK, modular kitchens & custom wardrobes.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700 space-y-2">
                      <Link
                        to="/gallery"
                        className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1"
                      >
                        Browse All Designs <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={onOpenConsultation}
                        className="w-full text-center text-xs font-bold py-2 px-3 bg-rose-600 hover:bg-rose-700 rounded-lg text-white transition shadow"
                      >
                        Get Free 3D Plan
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/calculator"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/calculator' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              Price Calculator
            </Link>

            <Link
              to="/guides"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/guides' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              Design Guides
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/about' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/why-us"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/why-us' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              Why Us
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/contact' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyContact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50/50 font-semibold text-xs transition"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-rose-600/25 transition hover:shadow-lg hover:shadow-rose-600/35 transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-rose-600 text-white font-medium text-xs rounded-lg flex items-center gap-1 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 max-h-[85vh] overflow-y-auto px-5 py-6 space-y-4 shadow-2xl">
          <div className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              Home
            </Link>

            {/* Mobile Collapsible Offerings */}
            <div>
              <button
                onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
              >
                <span>Design Gallery & Offerings</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOfferingsOpen ? 'rotate-180 text-rose-600' : ''}`} />
              </button>

              {mobileOfferingsOpen && (
                <div className="pl-4 pr-2 py-2 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 rounded-xl my-1">
                  {navigationOfferings.map((item) => (
                    <Link
                      key={item.id}
                      to={`/category/${item.id}`}
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white text-slate-700 text-xs font-semibold"
                    >
                      <CategoryIcon name={item.iconName} className="w-4 h-4 text-rose-600" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <Link
                    to="/gallery"
                    className="flex items-center gap-2 p-2 rounded-lg bg-rose-100/60 text-rose-700 text-xs font-bold col-span-full mt-1"
                  >
                    <span>View All 500+ Design Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/calculator"
              className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              Price Calculator
            </Link>

            <Link
              to="/guides"
              className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              Design Guides & Styles
            </Link>

            <Link
              to="/about"
              className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              About Us
            </Link>

            <Link
              to="/why-us"
              className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              Why Choose FourCube (10-Yr Warranty)
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30"
            >
              <Sparkles className="w-4 h-4" />
              Book Free 3D Design Session
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${companyContact.phoneRaw}`}
                className="py-2.5 px-3 border border-slate-200 rounded-xl flex items-center justify-center gap-2 text-slate-700 font-semibold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20want%20to%20know%20more.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-600 text-white rounded-xl flex items-center justify-center gap-2 font-semibold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
