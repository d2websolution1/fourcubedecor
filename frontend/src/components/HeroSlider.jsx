import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
  Award,
  Phone,
  MessageCircle,
  Building2,
  CheckCircle2,
  Star
} from 'lucide-react';
import { companyContact } from '../data/interiorData';

const slides = [
  {
    id: 1,
    badge: '🏆 India’s Premier Exhibition Fabricator',
    title: 'Exhibition Stall Design & Fabrication',
    highlight: 'in Pragati Maidan & Yashobhoomi',
    subtitle: 'Award-winning bespoke custom & double-storey trade show booths engineered to dominate the exhibition floor. Free photorealistic 3D stall design, venue compliance, and zero-delay on-site handover.',
    image: '/services/hero_exhibition_booth.jpg',
    stats: [
      { label: 'Booths Built', val: '500+' },
      { label: 'Venue SLA', val: '100% On-Time' },
      { label: 'Approvals', val: 'ITPO & IICC' }
    ],
    primaryBtn: { text: 'Book Free 3D Stall Design', action: 'consultation', service: 'Custom Booth Design' },
    secondaryBtn: { text: 'Explore All Booths', link: '/services' }
  },
  {
    id: 2,
    badge: '⚡ Reconfigurable & Eco-Smart Systems',
    title: 'Modular Trade Show Booths',
    highlight: '& Multi-City Expo Displays',
    subtitle: 'High-tensile aluminium matrix frames with seamless SEG tension fabric graphics. Scalable across 3x3m to 12x6m with 6-hour tool-free deployment, saving 50% in recurring logistics.',
    image: '/services/modular-booth-design.jpg',
    stats: [
      { label: 'Assembly Time', val: 'Under 6 Hours' },
      { label: 'Weight Saving', val: '65% Lighter' },
      { label: 'Reusability', val: '15+ Expos' }
    ],
    primaryBtn: { text: 'Explore Modular Booths', link: '/services/modular-booth-design' },
    secondaryBtn: { text: 'WhatsApp Quick Quote', action: 'whatsapp', service: 'Modular Booths' }
  },
  {
    id: 3,
    badge: '🏢 Commercial & Retail Specialists',
    title: 'Luxury Commercial, Mall',
    highlight: '& High-Security Showrooms',
    subtitle: 'Turnkey optical boutiques, jewellery showrooms with 4000K daylight gemstone illumination, and corporate headquarters crafted with German automated machinery and guaranteed 45-day move-in.',
    image: '/services/luxury_office_interior.jpg',
    stats: [
      { label: 'Handover SLA', val: 'Strict 45 Days' },
      { label: 'Woodwork Cover', val: '10-Year Flat' },
      { label: 'Machinery', val: 'German CNC' }
    ],
    primaryBtn: { text: 'Explore Commercial Decor', link: '/commercial' },
    secondaryBtn: { text: 'View Real Gallery', link: '/gallery' }
  },
  {
    id: 4,
    badge: '🌐 Mega Delegations & Keynote Staging',
    title: 'Country Pavilions & Corporate',
    highlight: 'Event Stage Production',
    subtitle: 'Multi-exhibitor mega pavilions for national councils (MSME, EEPC, FIEO), curved ultra-HD LED video walls, intelligent beam lighting, and turnkey 360-degree corporate conference staging.',
    image: '/services/country_pavilion_booth.jpg',
    stats: [
      { label: 'Scale Capacity', val: '100 - 2,000m²' },
      { label: 'AV Technology', val: 'Curved P2.6 LED' },
      { label: 'Coverage', val: 'South Delhi & NCR' }
    ],
    primaryBtn: { text: 'Explore Pavilions & Events', link: '/services/country-pavilion-booth-design' },
    secondaryBtn: { text: 'Book Free 3D Plan', action: 'consultation', service: 'Country Pavilion & Events' }
  }
];

export default function HeroSlider({ onOpenConsultation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 3500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950 text-white select-none min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center"
    >
      {/* Background Slides with Cross-Fade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          {/* High-Res Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transform transition-transform duration-5000 ease-out ${idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
          />

          {/* Luxury Dark Gradient Overlays for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
        </div>
      ))}

      {/* Slide Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
        <div key={active.id} className="max-w-4xl space-y-5 sm:space-y-6 animate-fade-in">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/25 border border-rose-500/40 text-amber-300 text-xs font-bold tracking-wide backdrop-blur-md animate-fade-in shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{active.badge}</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] font-heading drop-shadow-md">
            {active.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-500">
              {active.highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
            {active.subtitle}
          </p>

          {/* Micro Stats Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {active.stats.map((st, i) => (
              <div
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 shadow-sm"
              >
                <span className="text-amber-300 font-extrabold text-sm font-heading">{st.val}</span>
                <span className="text-slate-300 text-xs font-medium">{st.label}</span>
              </div>
            ))}
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {active.primaryBtn.action === 'consultation' ? (
              <button
                onClick={() => onOpenConsultation(active.primaryBtn.service)}
                className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-rose-600/40 hover:shadow-2xl hover:shadow-rose-600/60 transform active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
                <span>{active.primaryBtn.text}</span>
              </button>
            ) : (
              <Link
                to={active.primaryBtn.link}
                className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-rose-600/40 hover:shadow-2xl hover:shadow-rose-600/60 transform active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
                <span>{active.primaryBtn.text}</span>
              </Link>
            )}

            {active.secondaryBtn.action === 'whatsapp' ? (
              <a
                href={`https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent(`Hi FourCube Decor, I want a quick quote for ${active.secondaryBtn.service}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl backdrop-blur-md transition shadow flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{active.secondaryBtn.text}</span>
              </a>
            ) : active.secondaryBtn.action === 'consultation' ? (
              <button
                onClick={() => onOpenConsultation(active.secondaryBtn.service)}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-2 cursor-pointer"
              >
                <span>{active.secondaryBtn.text}</span>
                <ArrowRight className="w-4 h-4 text-rose-400" />
              </button>
            ) : (
              <Link
                to={active.secondaryBtn.link}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-2"
              >
                <span>{active.secondaryBtn.text}</span>
                <ArrowRight className="w-4 h-4 text-rose-400" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls: Left & Right Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-rose-600/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-rose-600/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Bar: Indicators & Slide Counter */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer overflow-hidden relative ${
                idx === currentSlide
                  ? 'w-10 sm:w-12 bg-white/20'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
            >
              {idx === currentSlide && (
                <div
                  key={`progress-${currentSlide}`}
                  className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full animate-hero-progress"
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-xs font-mono font-bold text-slate-300 bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          0{currentSlide + 1} / 0{slides.length}
        </div>
      </div>
    </div>
  );
}
