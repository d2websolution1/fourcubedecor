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
  ArrowRight,
  Building2,
  Briefcase,
  Gem,
  ShoppingBag,
  MapPin
} from 'lucide-react';
import { navigationOfferings, commercialOfferings, companyContact } from '../data/interiorData';
import { southDelhiLocations } from '../data/locationsData';
import CategoryIcon from './CategoryIcon';
import logoImg from '../assets/forhomedecor.png';

export default function Navbar({ onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offeringsDropdownOpen, setOfferingsDropdownOpen] = useState(false);
  const [commercialDropdownOpen, setCommercialDropdownOpen] = useState(false);
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
  const location = useLocation();

  const offeringsTimeoutRef = useRef(null);
  const commercialTimeoutRef = useRef(null);
  const citiesTimeoutRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOfferingsDropdownOpen(false);
    setCommercialDropdownOpen(false);
    setCitiesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOfferingsMouseEnter = () => {
    if (offeringsTimeoutRef.current) clearTimeout(offeringsTimeoutRef.current);
    setOfferingsDropdownOpen(true);
  };

  const handleOfferingsMouseLeave = () => {
    offeringsTimeoutRef.current = setTimeout(() => {
      setOfferingsDropdownOpen(false);
    }, 200);
  };

  const handleCommercialMouseEnter = () => {
    if (commercialTimeoutRef.current) clearTimeout(commercialTimeoutRef.current);
    setCommercialDropdownOpen(true);
  };

  const handleCommercialMouseLeave = () => {
    commercialTimeoutRef.current = setTimeout(() => {
      setCommercialDropdownOpen(false);
    }, 200);
  };

  const handleCitiesMouseEnter = () => {
    if (citiesTimeoutRef.current) clearTimeout(citiesTimeoutRef.current);
    setCitiesDropdownOpen(true);
  };

  const handleCitiesMouseLeave = () => {
    citiesTimeoutRef.current = setTimeout(() => {
      setCitiesDropdownOpen(false);
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
            href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20am%20interested%20in%20home%20and%20commercial%20interiors.`}
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
          <Link to="/" className="flex items-center gap-3 group py-1">
            <img 
              src={logoImg} 
              alt="FourCube Decor" 
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
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

            {/* 1. Design Gallery / Residential Mega Menu on HOVER */}
            <div 
              className="relative"
              onMouseEnter={handleOfferingsMouseEnter}
              onMouseLeave={handleOfferingsMouseLeave}
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

              {offeringsDropdownOpen && (
                <div className="absolute top-full left-0 w-[780px] bg-white rounded-2xl shadow-mega border border-slate-100 p-6 grid grid-cols-12 gap-6 animate-fade-in z-50">
                  {/* Left Column */}
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

                  {/* Right Column */}
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
                        100% Real Work
                      </span>
                      <h4 className="font-bold text-sm text-white font-heading">
                        All Real Photos
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Actual on-site completed projects from our German factory.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700 space-y-2">
                      <Link
                        to="/gallery"
                        className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1"
                      >
                        View Full Gallery <ArrowRight className="w-3.5 h-3.5" />
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

            {/* 2. NEW COMMERCIAL DECOR MEGA MENU ON HOVER (Replaced Price Calculator) */}
            <div 
              className="relative"
              onMouseEnter={handleCommercialMouseEnter}
              onMouseLeave={handleCommercialMouseLeave}
            >
              <Link
                to="/commercial"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition ${
                  commercialDropdownOpen || location.pathname.startsWith('/commercial')
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
                }`}
              >
                <span>Commercial Decor</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${commercialDropdownOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </Link>

              {/* Commercial Hover Dropdown Card */}
              {commercialDropdownOpen && (
                <div className="absolute top-full left-0 w-[640px] bg-white rounded-2xl shadow-mega border border-slate-100 p-5 grid grid-cols-2 gap-3 animate-fade-in z-50">
                  <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Commercial Fitouts
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">
                        Turnkey Commercial & Retail Solutions
                      </h4>
                    </div>
                    <Link
                      to="/commercial"
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                    >
                      Overview <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {commercialOfferings.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-rose-50/80 transition border border-transparent hover:border-rose-100"
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                        <img 
                          src={item.heroImage} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-slate-800 group-hover:text-rose-600 transition">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. CITIES & SOUTH DELHI LOCATIONS DROPDOWN (Matching HomeLane reference) */}
            <div 
              className="relative"
              onMouseEnter={handleCitiesMouseEnter}
              onMouseLeave={handleCitiesMouseLeave}
            >
              <Link
                to="/cities"
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition ${
                  citiesDropdownOpen || location.pathname.startsWith('/cities') || location.pathname.startsWith('/interior-designers-')
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
                }`}
              >
                <span>Cities</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${citiesDropdownOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </Link>

              {citiesDropdownOpen && (
                <div className="absolute top-full left-0 w-[560px] bg-white rounded-2xl shadow-mega border border-slate-100 p-5 animate-fade-in z-50">
                  <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-rose-600" />
                        <h4 className="text-sm font-bold text-slate-900 font-heading">
                          South Delhi Localities & Experience Studios
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Guaranteed 45-day move-in & 10-year warranty in South Delhi
                      </p>
                    </div>
                    <Link
                      to="/cities"
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                    >
                      All Locations <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* 2-Column Grid of South Delhi Localities */}
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    {southDelhiLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/interior-designers-${loc.slug}`}
                        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-rose-50/80 transition border border-transparent hover:border-rose-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose-600 group-hover:text-white transition">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-800 group-hover:text-rose-600 transition flex items-center gap-1">
                            <span>{loc.name}</span>
                            <span className="text-[9px] px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded font-normal">
                              {loc.pincode}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            {loc.popularSocieties[0]}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Promo bar */}
                  <div className="mt-3 pt-3 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-3 rounded-b-2xl flex items-center justify-between">
                    <span className="text-[11px] text-slate-600 font-medium">
                      Need doorstep laser measurement in South Delhi?
                    </span>
                    <button
                      onClick={() => {
                        setCitiesDropdownOpen(false);
                        onOpenConsultation('South Delhi Site Visit');
                      }}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200"
                    >
                      Book Free Site Visit
                    </button>
                  </div>
                </div>
              )}
            </div>

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
              to="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                location.pathname === '/contact' ? 'text-rose-600 bg-rose-50' : 'text-slate-700 hover:text-rose-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs with generous spacing from Contact link */}
          <div className="hidden lg:flex items-center gap-3 ml-6 xl:ml-10">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-rose-600/25 transition hover:shadow-lg hover:shadow-rose-600/35 transform active:scale-95"
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

            {/* Mobile Collapsible Cities & South Delhi Locations */}
            <div>
              <button
                onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>Cities & Locations (South Delhi)</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCitiesOpen ? 'rotate-180 text-rose-600' : ''}`} />
              </button>

              {mobileCitiesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                  {southDelhiLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/interior-designers-${loc.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white text-slate-700 text-xs font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>Interior Designers in {loc.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-normal">
                        {loc.pincode}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/cities"
                    className="flex items-center gap-2 p-2 rounded-lg bg-rose-100/60 text-rose-700 text-xs font-bold mt-1"
                  >
                    <span>View All South Delhi Locations</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Collapsible Commercial Decor */}
            <div>
              <button
                onClick={() => setMobileCommercialOpen(!mobileCommercialOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-rose-600" />
                  <span>Commercial Decor</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCommercialOpen ? 'rotate-180 text-rose-600' : ''}`} />
              </button>

              {mobileCommercialOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                  {commercialOfferings.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white text-slate-700 text-xs font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <CategoryIcon name={item.iconName} className="w-4 h-4 text-rose-600" />
                        <span>{item.title}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded font-bold">
                        {item.badge}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/commercial"
                    className="flex items-center gap-2 p-2 rounded-lg bg-rose-100/60 text-rose-700 text-xs font-bold mt-1"
                  >
                    <span>View All Commercial Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Collapsible Offerings */}
            <div>
              <button
                onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
              >
                <span>Residential Design Gallery</span>
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
                    <span>View All 100% Real Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </Link>
                </div>
              )}
            </div>

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
