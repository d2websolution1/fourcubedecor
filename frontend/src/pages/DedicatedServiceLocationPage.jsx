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
  X
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

  // Update SEO Document Title and scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page && page.metaTitle) {
      document.title = page.metaTitle;
    }
    setActiveFaq(null);
    setSelectedImage(null);
  }, [page.slug]);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleConsultationClick = (tierTitle = '') => {
    const serviceLabel = `${page.serviceName} in ${page.locationName}${tierTitle ? ` (${tierTitle})` : ''}`;
    onOpenConsultation(serviceLabel);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FourCube Decor, I am looking for ${page.serviceName} in ${page.locationName}, South Delhi. Please share design catalogue & cost quotation.`
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

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      {/* 1. BREADCRUMBS BAR */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 text-xs py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-rose-400 flex items-center gap-1 transition">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <Link to="/cities" className="hover:text-rose-400 transition">
            South Delhi Localities
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-amber-400 font-semibold">{page.locationName}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-white font-bold">{page.serviceName}</span>
        </div>
      </div>

      {/* 2. ULTRA-LUXURY HERO BANNER */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-slate-800">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge & Locality Tag */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/25 border border-rose-500/40 text-rose-300 text-xs font-bold tracking-wide backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{page.heroTag}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{page.locationName}, South Delhi ({page.pincode})</span>
                </div>
              </div>

              {/* H1 Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black font-heading tracking-tight text-white leading-[1.15]">
                {page.serviceName}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-500">
                  in {page.locationName}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {page.heroSubtitle}
              </p>

              {/* 4 Stats Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {page.stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md text-center"
                  >
                    <div className="text-amber-400 font-extrabold text-base sm:text-lg font-heading">
                      {st.val}
                    </div>
                    <div className="text-slate-400 text-[11px] font-medium mt-0.5 leading-tight">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleConsultationClick()}
                  className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-rose-600/30 hover:shadow-2xl hover:shadow-rose-600/50 transform active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Book Free 3D Plan in {page.locationName}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl backdrop-blur-md transition shadow flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Cost Estimate</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Subcontracting
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  10-Year Flat Warranty
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  Strict Handover SLA
                </span>
              </div>
            </div>

            {/* Right Hero Image Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src={page.heroImage}
                  alt={`${page.serviceName} in ${page.locationName}`}
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Overlaid Verified Stamp */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>FourCube German Factory Quality</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Installed for {page.clientReview.society}, {page.locationName}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                    Verified Work
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. REAL PHOTO SHOWCASE GALLERY */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Site Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-slate-900">
            Recent {page.serviceName} Executions in {page.locationName}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            100% authentic on-site photographs of bespoke woodwork and joinery crafted for homes and retail establishments in {page.locationName}.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.galleryImages.map((imgObj, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(imgObj.url)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={imgObj.url}
                  alt={imgObj.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
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

      {/* 4. ARCHITECTURAL BLUEPRINT & LOCALITY OVERVIEW */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Locality Blueprint</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
                {page.aboutTitle}
              </h2>
              {page.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Societies Served in This Locality */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
                  Key Societies & Enclaves Served in {page.locationName}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {page.societiesList.map((soc, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium"
                    >
                      {soc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Showcase Card on Right */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-sm text-white">{page.clientReview.rating}.0 / 5.0 Rating</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono font-bold">
                    Pin: {page.pincode}
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white">
                    {page.projectShowcase.title}
                  </h4>
                  <img
                    src={page.projectShowcase.image}
                    alt={page.projectShowcase.title}
                    className="w-full h-48 object-cover rounded-xl border border-slate-700"
                  />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {page.projectShowcase.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleConsultationClick('Project Showcase')}
                  className="w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Request Similar Layout in {page.locationName}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS & CORE FEATURES */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Factory Engineering Standards</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-slate-900">
            Why Our {page.serviceName} Leads in {page.locationName}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every joinery module is crafted with high-tensile core substrates and genuine German fittings for decades of flawless operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {page.features.map((feat, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-3 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING & COST ESTIMATES */}
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
            <p className="text-slate-600 text-sm sm:text-base">
              Average pricing breakdown for residential and commercial spaces across {page.locationName}. Rates include 3D renders, German hardware, and factory installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

      {/* 7. VERIFIED SOUTH DELHI CLIENT TESTIMONIAL */}
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

      {/* 8. LOCAL FAQS ACCORDION */}
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

      {/* 9. SEO SILO CROSS-LINKS (CLUSTER LINKING) */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* A. Other Services in This Locality */}
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

          {/* B. Same Service Across Other South Delhi Localities */}
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

      {/* 10. PRE-FOOTER DIRECT CALL & WHATSAPP BAR */}
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
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
