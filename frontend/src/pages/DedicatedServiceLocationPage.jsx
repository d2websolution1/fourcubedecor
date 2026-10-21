import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Award,
  ChevronRight,
  Building2,
  Layers,
  ChevronDown,
  HelpCircle,
  Home,
  Tag,
  Check,
  Maximize2,
  X,
  Briefcase,
  Gem,
  ShoppingBag,
  ChefHat,
  Sofa,
  BedDouble,
  Lock,
  Shield,
  Zap,
  CalendarCheck,
  Cpu,
  FileCheck,
  Eye,
  Compass,
  Ruler,
  Sliders
} from 'lucide-react';
import { getPageBySlug, all120Pages, locationsList, servicesList } from '../data/pages120Data';
import { companyContact } from '../data/interiorData';

export default function DedicatedServiceLocationPage({ onOpenConsultation }) {
  const { pageSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract clean slug from param or pathname
  const rawPath = pageSlug || location.pathname.replace(/^\//, '').replace(/\/$/, '');
  
  // Find page data from 120 pages dataset, or fallback to first page
  const page = getPageBySlug(rawPath) || all120Pages[0];

  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  // Update SEO Document Title and scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page && page.metaTitle) {
      document.title = page.metaTitle;
    }
    setActiveFaq(null);
    setSelectedImage(null);
    setActiveTab(0);
  }, [page.slug]);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleConsultationClick = (tierTitle = '') => {
    const serviceLabel = `${page.serviceName} in ${page.locationName}${tierTitle ? ` (${tierTitle})` : ''}`;
    onOpenConsultation(serviceLabel);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FourCube Decor, I am looking for ${page.serviceName} in ${page.locationName}, South Delhi. Please share design layout & cost quotation.`
  );
  const whatsappUrl = `https://wa.me/${companyContact.whatsappRaw}?text=${whatsappMessage}`;

  // Find other services in this same location (11 links)
  const otherServicesInThisLocation = all120Pages.filter(
    (p) => p.locationSlug === page.locationSlug && p.slug !== page.slug
  );

  // Find this same service across the other 9 locations
  const sameServiceInOtherLocations = all120Pages.filter(
    (p) => p.serviceKey === page.serviceKey && p.slug !== page.slug
  );

  // Determine structural archetype based on service key
  const getLayoutArchetype = (serviceKey) => {
    switch (serviceKey) {
      case 'jewellery-decor':
      case 'jewellery-shop-decor':
        return 'jewellery';
      case 'mall-decor':
      case 'shop-decor':
        return 'commercial';
      case 'office-decor':
      case 'home-office':
        return 'corporate';
      case 'modular-kitchen':
      case 'living-room':
        return 'kitchen-living';
      case 'bedroom':
      case 'wardrobe':
      case 'space-saving':
      case 'bathroom':
      case 'home-interiors':
      default:
        return 'turnkey-residential';
    }
  };

  const archetype = getLayoutArchetype(page.serviceKey);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20 overflow-x-hidden">
      
      {/* 1. BREADCRUMBS BAR WITH GLOW PIN */}
      <div className="bg-slate-900/95 backdrop-blur-md text-slate-300 border-b border-slate-800 text-xs py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-rose-400 flex items-center gap-1 transition">
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/cities" className="hover:text-rose-400 transition">
              South Delhi
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">{page.locationName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-extrabold">{page.serviceName}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pincode: {page.pincode}
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ARCHETYPE 1: COMMERCIAL RETAIL & MALL EXPERIENCE (MALL DECOR & SHOP DECOR) */}
      {/* ========================================================================= */}
      {archetype === 'commercial' && (
        <>
          {/* Hero: Emerald Commercial Powerhouse with Live Ticker */}
          <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-20 lg:py-24 border-b border-emerald-900/30 overflow-hidden">
            <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wide backdrop-blur-md">
                      <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" /> Commercial Architecture
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                      {page.locationName} Business District
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12]">
                    {page.serviceName}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-500">
                      in {page.locationName}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {page.heroSubtitle}
                  </p>

                  {/* Commercial Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {page.stats.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center hover:border-emerald-500/40 transition">
                        <div className="text-emerald-400 font-black text-lg font-heading">{st.val}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => handleConsultationClick()}
                      className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-emerald-900/40 transform active:scale-95 transition flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>Book Free 3D Commercial Fitout Plan</span>
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Instant WhatsApp Quote</span>
                    </a>
                  </div>
                </div>

                {/* Hero Showcase Vitrine Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl group bg-slate-900">
                    <img
                      src={page.heroImage}
                      alt={page.heroTitle}
                      className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Class-0 Fire NOC & Mall SLA Compliant</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Deployed at {page.clientReview.society}, {page.locationName}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                        Commercial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spatial Circulation & CAD Elevation Breakdown */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Storefront & Circulation Engineering
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                  Spatial Planning & Customer Journey in {page.locationName}
                </h2>
                <p className="text-slate-600 text-sm">
                  Commercial retail spaces require precise traffic loop planning, optimum display illumination, and durable scratch-proof surfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">High-Traffic Aisle Widths</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Minimum 1.5m aisle clearance engineered to prevent customer congestion during peak South Delhi shopping hours.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">98+ CRI Display Vitrines</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    True-tone colour rendition optics to showcase merchandise textures, fabrics, and fine finishes with zero glare.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Overnight Tool-Free Handover</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Precision CNC factory pre-drilling enables rapid mall night-shift fitout, meeting venue handover SLAs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* ARCHETYPE 2: ULTRA-LUXE JEWELLERY BOUTIQUE & HIGH-SECURITY VAULT          */}
      {/* ========================================================================= */}
      {archetype === 'jewellery' && (
        <>
          {/* Hero: Obsidian & Champagne Gold Vault Atmosphere */}
          <section className="relative bg-black text-white py-14 sm:py-20 lg:py-24 border-b border-amber-900/40 overflow-hidden">
            <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Gem className="w-3.5 h-3.5 text-amber-400" /> High-Security Jewellery Architecture
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12]">
                    {page.serviceName}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-500">
                      in {page.locationName}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {page.heroSubtitle}
                  </p>

                  {/* Security Highlights Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {page.stats.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-zinc-950 border border-amber-900/30 text-center hover:border-amber-400/50 transition">
                        <div className="text-amber-400 font-black text-lg font-heading">{st.val}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => handleConsultationClick('Jewellery VIP')}
                      className="px-6 py-3.5 bg-gradient-to-r from-amber-600 via-amber-700 to-rose-700 hover:from-amber-700 hover:to-rose-800 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-amber-900/40 transform active:scale-95 transition flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span>Book VIP Jewellery Salon Consultation</span>
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-amber-300 font-bold text-xs sm:text-sm rounded-xl border border-amber-500/30 transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-amber-400" />
                      <span>WhatsApp Showroom Quote</span>
                    </a>
                  </div>
                </div>

                {/* Hero Showcase Vitrine Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl bg-zinc-950 group">
                    <img
                      src={page.heroImage}
                      alt={page.heroTitle}
                      className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <Lock className="w-4 h-4 text-amber-400" />
                          <span>12mm Toughened Anti-Burglary Glass</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Custom Jewellery Salon in {page.locationName}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                        High-Security
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dual-Zone Security Architecture Breakdown */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black text-white rounded-3xl p-8 sm:p-12 border border-amber-900/40 space-y-8 shadow-2xl">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Vault & Display Science
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
                  Dual-Zone Security Architecture: {page.locationName}
                </h2>
                <p className="text-slate-300 text-sm">
                  We balance front-of-house luxury bridal presentation with back-of-house military-grade security vault protection.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                    <Gem className="w-5 h-5" />
                    <span>Zone 1: Luxury Presentation & VIP Bridal Suites</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                    <li>• 4000K daylight gemstone illumination (98+ CRI) that reveals the true fire of diamonds and gold.</li>
                    <li>• Velvet-lined customer negotiation trays with recessed warm perimeter LED glow.</li>
                    <li>• Private bridal suites with tri-fold mirrors, champagne hospitality counters, and soundproof panelling.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                    <Shield className="w-5 h-5" />
                    <span>Zone 2: Back-of-House Vault & Biometric Access</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                    <li>• Magnetic interlocking airlock security doors preventing simultaneous open states.</li>
                    <li>• Concealed Class-A vault wall integration with reinforced steel backing plates.</li>
                    <li>• Silent panic alarm button raceways wired directly beneath each consultation workstation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* ARCHETYPE 3: CORPORATE OFFICE & HOME OFFICE WORKPLACE (BLUE / SAPPHIRE)   */}
      {/* ========================================================================= */}
      {archetype === 'corporate' && (
        <>
          {/* Hero: Sapphire Executive Corporate Layout */}
          <section className="relative bg-slate-950 text-white py-14 sm:py-20 lg:py-24 border-b border-blue-900/30 overflow-hidden">
            <div className="absolute top-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      <Briefcase className="w-3.5 h-3.5 text-blue-400" /> Executive Workspace Architecture
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                      NRC 0.85 Acoustic Sound-Dampening
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12]">
                    {page.serviceName}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                      in {page.locationName}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {page.heroSubtitle}
                  </p>

                  {/* Office Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {page.stats.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-blue-500/40 transition">
                        <div className="text-cyan-400 font-black text-lg font-heading">{st.val}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => handleConsultationClick('Office Fitout')}
                      className="px-6 py-3.5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-blue-900/40 transform active:scale-95 transition flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-cyan-200" />
                      <span>Request Turnkey Office CAD Layout</span>
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-cyan-400" />
                      <span>WhatsApp Office Estimate</span>
                    </a>
                  </div>
                </div>

                {/* Hero Vitrine Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-slate-900 group">
                    <img
                      src={page.heroImage}
                      alt={page.heroTitle}
                      className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span>Ergonomic BIFMA & Acoustic Standards</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Corporate Suites in {page.locationName}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-[10px] font-bold">
                        Corporate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workplace Zoning Breakdown */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Acoustic & Cable Management Blueprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                  FourCube Workplace Zoning Matrix: {page.locationName}
                </h2>
                <p className="text-slate-600 text-sm">
                  Eliminating boardroom echo, tangled cable clutter, and ergonomic fatigue with factory-engineered modular joinery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-600">Zone A</span>
                  <h4 className="text-sm font-bold text-slate-900">MD & Director Cabin</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Acoustic fluted oak panelling, floating veneer desk with pop-up power modules and biometric drawers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-600">Zone B</span>
                  <h4 className="text-sm font-bold text-slate-900">Boardroom Video Wall</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NRC 0.85 sound-absorbing fabric louvers, hidden AV cable raceways, and non-glare presentation lighting.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-600">Zone C</span>
                  <h4 className="text-sm font-bold text-slate-900">Workstation Bays</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Heavy-duty cold-rolled steel desk frames, frosted acoustic modesty partitions, and under-desk cable baskets.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-600">Zone D</span>
                  <h4 className="text-sm font-bold text-slate-900">Reception & Lounge</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Statuario marble transaction counter, backlit 3D acrylic branding, and comfortable client waiting banquettes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* ARCHETYPE 4: GERMAN MODULAR KITCHEN & LIVING ROOM (ROSE / HIGH GLOSS)     */}
      {/* ========================================================================= */}
      {archetype === 'kitchen-living' && (
        <>
          {/* Hero: Precision German Engineering */}
          <section className="relative bg-slate-950 text-white py-14 sm:py-20 lg:py-24 border-b border-rose-900/30 overflow-hidden">
            <div className="absolute top-0 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      <ChefHat className="w-3.5 h-3.5 text-rose-400" /> German Precision Joinery
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                      Blum 100,000 Cycle Guarantee
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12]">
                    {page.serviceName}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-500">
                      in {page.locationName}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {page.heroSubtitle}
                  </p>

                  {/* Kitchen & Living Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {page.stats.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-rose-500/40 transition">
                        <div className="text-amber-400 font-black text-lg font-heading">{st.val}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => handleConsultationClick('Modular Kitchen')}
                      className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-rose-900/40 transform active:scale-95 transition flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Book Free 3D Kitchen & Living Layout</span>
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Modular Quote</span>
                    </a>
                  </div>
                </div>

                {/* Hero Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl bg-slate-900 group">
                    <img
                      src={page.heroImage}
                      alt={page.heroTitle}
                      className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-400" />
                          <span>Action TESA Boiling Water Resistant Core</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Installed in {page.clientReview.society}, {page.locationName}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                        10-Yr Cover
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Layout Variations Selector (Tabs) */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    Interactive Layout Selector
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                    Engineered Layout Configurations for {page.locationName} Homes
                  </h2>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-100 pb-4">
                {[
                  'Island Gourmet Kitchen / Marble Wall',
                  'Parallel Chef Kitchen / Fluted Oak',
                  'L-Shaped Ergonomic / CNC Screen',
                  'U-Shaped Glass / Floating Credenza'
                ].map((tabLabel, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      activeTab === idx
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tabLabel}
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeTab === 0 && 'Island Gourmet Kitchen with Waterfall Quartz Counter'}
                    {activeTab === 1 && 'Parallel Chef Kitchen with Dual Counter Workstations'}
                    {activeTab === 2 && 'L-Shaped Kitchen with Blind-Corner Magic Carousel'}
                    {activeTab === 3 && 'U-Shaped Luxury Layout with Integrated Glass Lofts'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Designed specifically for South Delhi builder floor dimensions in {page.locationName}. Combines Austrian Blum Aventos bi-fold lift-up cabinets with seamless tandembox deep-pan drawers, ensuring every inch is utilized ergonomically.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Zero-maintenance scratch-resistant acrylic and PU lacquer options</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Dedicated spice racks, cutleries and bottle pullouts</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={page.galleryImages[activeTab % page.galleryImages.length].url}
                    alt="Active Kitchen Layout"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* ARCHETYPE 5: TURNKEY 45-DAY FULL HOME & BEDROOM SUITES (PURPLE / LUXE)    */}
      {/* ========================================================================= */}
      {archetype === 'turnkey-residential' && (
        <>
          {/* Hero: 45-Day Strict Move-In Turnkey Banner */}
          <section className="relative bg-slate-950 text-white py-14 sm:py-20 lg:py-24 border-b border-purple-900/30 overflow-hidden">
            <div className="absolute top-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      <CalendarCheck className="w-3.5 h-3.5 text-purple-400" /> Guaranteed 45-Day Move-In SLA
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                      10-Year Flat Warranty
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12]">
                    {page.serviceName}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-300 to-amber-400">
                      in {page.locationName}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {page.heroSubtitle}
                  </p>

                  {/* Turnkey Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {page.stats.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-purple-500/40 transition">
                        <div className="text-amber-400 font-black text-lg font-heading">{st.val}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => handleConsultationClick('Turnkey Home')}
                      className="px-6 py-3.5 bg-gradient-to-r from-purple-600 via-purple-700 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-purple-900/40 transform active:scale-95 transition flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-purple-200" />
                      <span>Book Free 3D Full Home Consultation</span>
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Turnkey Quote</span>
                    </a>
                  </div>
                </div>

                {/* Hero Vitrine Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl bg-slate-900 group">
                    <img
                      src={page.heroImage}
                      alt={page.heroTitle}
                      className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-400" />
                          <span>Turnkey Execution SLA: 45 Days Strict</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Installed at {page.clientReview.society}, {page.locationName}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                        Turnkey
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 45-Day Step-by-Step Handover Roadmap */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Strict Handover Methodology
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                  The FourCube 45-Day Milestone Roadmap: {page.locationName}
                </h2>
                <p className="text-slate-600 text-sm">
                  Legally backed completion timeline. Our German CNC factory handles 85% of joinery prefabrication off-site to prevent dust and delays in your society.
                </p>
              </div>

              {/* 5 Milestone Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Days 1 - 7</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    3D laser site survey, floorplan mapping & VR design sign-off.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Days 8 - 22</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    German CNC factory pre-fabrication, edge banding & Blum fittings.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Days 23 - 35</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    On-site electrical, false ceiling channels & plumbing rough-in.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                    04
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Days 36 - 42</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Dust-free flat-pack rapid modular assembly & lighting fixture install.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                    05
                  </div>
                  <h4 className="text-xs font-bold text-emerald-900">Days 43 - 45</h4>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    140-point quality audit, deep cleaning & final key handover.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* COMMON HIGH-CLASS SECTIONS: GALLERY, PRICING, TESTIMONIAL, LOCAL FAQS     */}
      {/* ========================================================================= */}

      {/* PHOTO SHOWCASE GALLERY WITH HIGH-CLASS HOVER ZOOM */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Site Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-slate-900">
            Real Site Executions: {page.serviceName} in {page.locationName}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            100% authentic on-site photographs of bespoke woodwork and joinery crafted for clients in {page.locationName}.
          </p>
        </div>

        {/* Gallery Grid with interactive zoom preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.galleryImages.map((imgObj, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(imgObj.url)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl luxury-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={imgObj.url}
                  alt={imgObj.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition">
                    {imgObj.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {imgObj.caption}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>FourCube Work</span>
                  <span className="text-rose-600 font-bold flex items-center gap-1">
                    Click to view <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSPARENT PRICING & COST ESTIMATES */}
      <section className="py-14 sm:py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold">
              <Tag className="w-3.5 h-3.5" />
              <span>Transparent Pricing Table</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-slate-900">
              Estimated {page.serviceName} Cost in {page.locationName}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Average pricing breakdown for spaces across {page.locationName}. Rates include 3D renders, German hardware, and factory installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl luxury-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold">
                    Tier 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 min-h-[44px]">
                    {tier.tier}
                  </h4>
                  <div className="text-2xl font-black text-slate-900 font-heading">
                    {tier.cost}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Timeline: {tier.duration}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {tier.highlight}
                  </p>
                </div>

                <button
                  onClick={() => handleConsultationClick(tier.tier)}
                  className="w-full mt-6 py-2.5 bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select & Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED SOUTH DELHI CLIENT TESTIMONIAL */}
      <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-xs text-slate-400 font-bold ml-2">Verified South Delhi Homeowner</span>
            </div>

            <blockquote className="text-base sm:text-xl font-medium text-slate-200 leading-relaxed italic">
              "{page.clientReview.quote}"
            </blockquote>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  {page.clientReview.clientName}
                </h4>
                <p className="text-xs text-amber-400 font-medium">
                  {page.clientReview.role} • {page.clientReview.society}, {page.locationName}
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Handover SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL FAQS ACCORDION */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Locality Queries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            Frequently Asked Questions: {page.serviceName} in {page.locationName}
          </h2>
        </div>

        <div className="space-y-4">
          {page.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 font-bold text-sm sm:text-base text-slate-900 hover:text-rose-600 transition flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transform transition-transform ${
                    activeFaq === idx ? 'rotate-180 text-rose-600' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEO SILO CROSS-LINKS (CLUSTER LINKING) */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Other Services in This Locality */}
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-rose-600" />
              <span>Explore Other Interior & Commercial Services in {page.locationName}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherServicesInThisLocation.map((relPage) => (
                <Link
                  key={relPage.slug}
                  to={`/${relPage.slug}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-xs font-semibold text-slate-700 hover:text-rose-700 transition flex items-center justify-between"
                >
                  <span className="truncate">{relPage.serviceName}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Same Service Across Other South Delhi Localities */}
          <div>
            <h3 className="text-lg font-black font-heading text-slate-900 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>{page.serviceName} in Other South Delhi Enclaves</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {sameServiceInOtherLocations.map((relPage) => (
                <Link
                  key={relPage.slug}
                  to={`/${relPage.slug}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-xs font-semibold text-slate-700 hover:text-amber-800 transition flex items-center justify-between"
                >
                  <span className="truncate">{relPage.locationName}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PRE-FOOTER DIRECT CALL & WHATSAPP BAR */}
      <section className="bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black font-heading">
              Planning {page.serviceName} in {page.locationName}?
            </h3>
            <p className="text-xs sm:text-sm text-rose-100">
              Get an accurate 3D design layout & itemized bill of quantities with our strict 45-day move-in SLA.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${companyContact.phoneRaw}`}
              className="px-6 py-3 bg-white text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-slate-100 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-600" />
              <span>Call: {companyContact.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-950 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-slate-900 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-rose-400 p-2 cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Project zoom preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
