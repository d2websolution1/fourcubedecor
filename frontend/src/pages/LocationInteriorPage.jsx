import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
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
  Info,
  Play
} from 'lucide-react';
import { southDelhiLocations, getLocationBySlug, getServiceByPath, realDecorVideo } from '../data/locationsData';
import { 
  realKitchenImages, 
  realLivingImages, 
  realWardrobeImages, 
  officeDecorData, 
  jewelleryDecorData, 
  mallDecorData 
} from '../data/decorMedia';
import { companyContact } from '../data/interiorData';

export default function LocationInteriorPage({ onOpenConsultation, locationSlug, serviceKey }) {
  const { slug, service } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Find location by prop, or slug param, or current location pathname
  const effectiveSlug = locationSlug || slug || location.pathname;
  const locationData = getLocationBySlug(effectiveSlug) || southDelhiLocations[0];

  // Determine current service (e.g. 'interior-design', 'modular-kitchen', 'wardrobes-storage', etc.)
  const effectiveService = serviceKey || service || getServiceByPath(location.pathname);

  const [activeTab, setActiveTab] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedBhk, setSelectedBhk] = useState('3bhk');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Scroll to top on slug change or path change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveFaq(null);
  }, [locationData.slug, location.pathname]);

  const serviceConfigs = {
    'modular-kitchen': {
      label: 'Modular Kitchen',
      heroTag: `#1 Rated German Modular Kitchens in ${locationData.name}`,
      heroTitle: `Modular Kitchen in`,
      heroDesc: `German-precision modular kitchens, high-gloss acrylic finishes, seamless quartz counters, and Blum soft-close tandem drawers tailored for ${locationData.name}. 10-year flat warranty with 45-day guaranteed handover.`,
      heroImage: realKitchenImages[0].image,
      ctaText: `Book Free Modular Kitchen Session in ${locationData.name}`
    },
    'wardrobes-storage': {
      label: 'Modular Wardrobes & Storage',
      heroTag: `#1 Rated Floor-to-Ceiling Wardrobes in ${locationData.name}`,
      heroTitle: `Luxury Modular Wardrobes in`,
      heroDesc: `Custom sliding, hinged, and walk-in wardrobe designs tailored for ${locationData.name} apartments and builder floors. High-gloss acrylic, HDHMR core and anti-bending aluminum stiffeners.`,
      heroImage: realWardrobeImages[0].image,
      ctaText: `Book Free Wardrobe Design in ${locationData.name}`
    },
    'living-room-tv': {
      label: 'Living Room & TV Units',
      heroTag: `Luxury Fluted & Marble TV Walls in ${locationData.name}`,
      heroTitle: `Living Room & TV Units in`,
      heroDesc: `Bookmatched marble TV walls, acoustic fluted oak panelling, and bespoke living room interior styling for homes in ${locationData.name}. Delivered in 45 days.`,
      heroImage: realLivingImages[1].image,
      ctaText: `Book Living Room Consultation in ${locationData.name}`
    },
    'commercial-office': {
      label: 'Commercial & Office',
      heroTag: `Turnkey Office Interior Fitouts in ${locationData.name}`,
      heroTitle: `Commercial & Office Interiors in`,
      heroDesc: `Director cabins, boardroom acoustic panelling, and turnkey corporate office fitouts across ${locationData.name} business districts.`,
      heroImage: officeDecorData[0].image,
      ctaText: `Book Office Fitout Consultation in ${locationData.name}`
    },
    'jewellery-shop': {
      label: 'Jewellery & Shop Decor',
      heroTag: `High-Security Retail Boutiques in ${locationData.name}`,
      heroTitle: `Jewellery & Boutique Shop Decor in`,
      heroDesc: `High-security tempered glass display counters, 4000K daylight gemstone lighting, and luxury retail showroom design in ${locationData.name}.`,
      heroImage: jewelleryDecorData[0].image,
      ctaText: `Book Retail Showroom Consultation in ${locationData.name}`
    },
    'exhibition-mall': {
      label: 'Exhibition & Mall Decor',
      heroTag: `Mall Showrooms & Brand Kiosks in ${locationData.name}`,
      heroTitle: `Mall & Exhibition Decor in`,
      heroDesc: `Turnkey shopping mall flagship showroom fitouts, atrium brand pods, and exhibition stall setups across ${locationData.name}.`,
      heroImage: mallDecorData[0].image,
      ctaText: `Book Mall Decor Consultation in ${locationData.name}`
    },
    'turnkey-renovation': {
      label: 'Turnkey Renovation',
      heroTag: `45-Day Turnkey Home Renovation in ${locationData.name}`,
      heroTitle: `Turnkey Home Renovation in`,
      heroDesc: `Complete builder floor and apartment renovation in ${locationData.name}. From civil alterations and German modular woodwork to false ceiling and turnkey handover.`,
      heroImage: locationData.heroImage,
      ctaText: `Book Turnkey Renovation Visit in ${locationData.name}`
    },
    'interior-design': {
      label: 'Interior Design',
      heroTag: `#1 Rated Turnkey Interior Designers in ${locationData.name}`,
      heroTitle: `Best Interior Designers in`,
      heroDesc: `${locationData.tagline}. German factory precision woodwork, 100% real on-site executions, and a guaranteed 45-day move-in SLA.`,
      heroImage: locationData.heroImage,
      ctaText: `Book Free 3D Design Session in ${locationData.name}`
    }
  };

  const activeConfig = serviceConfigs[effectiveService] || serviceConfigs['interior-design'];

  const bhkDetails = {
    '1bhk': {
      title: '1 BHK / Studio Modular Interior',
      range: locationData.avgCostSummary.bhk1,
      items: ['1 Modular Kitchen (Acrylic / Laminate)', '1 Sliding Wardrobe with Lofts', 'Compact TV Unit & Floating Shelf', 'False Ceiling & LED Downlights', 'German Blum Soft-Close Hinges']
    },
    '2bhk': {
      title: '2 BHK Complete Home Package',
      range: locationData.avgCostSummary.bhk2,
      items: ['L-Shape / Parallel Modular Kitchen', '2 Full Height Wardrobes (Hinged / Sliding)', 'Living Room Marble TV Console', 'False Ceiling in Living & Bedrooms', 'Dust-Free 45-Day Assembly']
    },
    '3bhk': {
      title: '3 BHK Premium Builder Floor Interior',
      range: locationData.avgCostSummary.bhk3,
      items: ['Luxury Modular Kitchen with Quartz Counter', '3 Floor-to-Ceiling Wardrobes with Dressing Suite', 'Statuario Marble & Fluted Wood TV Feature', 'Master Bedroom Tufted Acoustic Headboard', 'Full Turnkey Electrical & Cove Lights']
    },
    '4bhk': {
      title: '4 BHK / Duplex / Penthouse Suite',
      range: locationData.avgCostSummary.bhk4,
      items: ['Island Modular Kitchen with Tinted Glass Lofts', '4 Custom Wardrobes + Walk-in Closet', 'Electric Vapor Fireplace & Double TV Walls', 'Puja Room / Mandir CNC Backlit Unit', '10-Year Comprehensive Flat Warranty']
    },
    'commercial': {
      title: 'Commercial / Retail / Jewellery Showroom',
      range: locationData.avgCostSummary.commercial,
      items: ['High-Security Tempered Glass Counters', '4000K Daylight Gemstone Profile Lighting', 'Wall Wainscoting & Backlit Brand Displays', 'POS Cash Wrap & Director Executive Cabins', 'Fast-Track Handover for Quick Launch']
    }
  };

  const currentBhk = bhkDetails[selectedBhk];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* 1. Breadcrumbs & Top Notification */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 py-2.5 px-4 sm:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="text-slate-400 hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/cities" className="text-slate-400 hover:text-white transition">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">South Delhi</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">{locationData.name}</span>
            {effectiveService !== 'interior-design' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-rose-400 font-medium">{activeConfig.label}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Serving Pin Code: {locationData.pincode}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Locality Quick Switcher Bar (HomeLane Style City Selector) */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-600" /> South Delhi Locations:
            </span>
            {southDelhiLocations.map((loc) => {
              const isActive = loc.slug === locationData.slug;
              const targetUrl = `/${effectiveService}-in-${loc.slug}`;
              return (
                <Link
                  key={loc.slug}
                  to={targetUrl}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition shrink-0 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {loc.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Hero Section (HomeLane Ahmedabad Inspired Architecture) */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background photo with gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={activeConfig.heroImage} 
            alt={`${activeConfig.label} in ${locationData.name}`} 
            className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Local Context */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{activeConfig.heroTag}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight text-white">
                {activeConfig.heroTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-200">{locationData.name}</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {activeConfig.heroDesc}
              </p>

              {/* Statistics Counters Banner (HomeLane Style: 400+ Projects, 15+ Designers, etc.) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                  <span className="block text-2xl font-black text-amber-300 font-heading">
                    {locationData.stats.projectsDone}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Projects Done</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                  <span className="block text-2xl font-black text-rose-400 font-heading">
                    {locationData.stats.turnaroundDays}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Move-In SLA</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                  <span className="block text-2xl font-black text-emerald-400 font-heading">
                    {locationData.stats.warrantyYears}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Flat Warranty</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                  <span className="block text-2xl font-black text-amber-300 font-heading flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    {locationData.stats.rating}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Client Rating</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenConsultation(`Interior Design in ${locationData.name}`)}
                  className="px-7 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 transform active:scale-95 group"
                >
                  <span>Book Free 3D Design Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20am%20looking%20for%20an%20interior%20designer%20in%20${encodeURIComponent(locationData.name)},%20South%20Delhi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Design Expert</span>
                </a>
              </div>
            </div>

            {/* Right Column: Instant Estimate & Project Summary Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-white/30 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                      Local Experience Hub
                    </span>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      {locationData.name} Studio Network
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  We provide personalized doorstep site visits with laser measurements across all sectors & blocks of {locationData.name}.
                </p>

                {/* Popular areas in this locality */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">Top Service Localities in {locationData.name}:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {locationData.popularSocieties.map((soc, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        ✓ {soc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Consultation Form Trigger */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">Get a Free 3D Plan & Exact Cost Estimate</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Zero consultation fee. Get modular kitchen, wardrobe & living room 3D render with fixed pricing within 24 hours.
                  </p>
                  <button
                    onClick={() => onOpenConsultation(`Estimate for ${locationData.name}`)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-1.5"
                  >
                    <span>Request Free Site Visit in {locationData.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Overview & Architectural Insights */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 px-3 py-1 bg-rose-50 rounded-full">
              Locality Spotlight
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Designing Spaces Tailored to {locationData.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {locationData.overview}
            </p>
          </div>

          {/* 3 Pillars of German Modular Excellence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-300 transition hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                45-Day Strict Move-In SLA
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No endless delays. Our computer-automated edge-banding and flat-pack manufacturing ensure your {locationData.name} home is fully assembled in 45 days or we pay delay compensation.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-300 transition hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                10-Year Flat Replacement Warranty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Built with termite-proof BWP plywood and high-density HDHMR. We provide an authentic warranty certificate covering borer, termite, and hardware delamination.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-300 transition hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2 font-heading">
                100% Real German Workmanship
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero manual hand-sawing in your home. All panels are precision-milled with CNC pre-drilling and certified Blum, Hettich, and Hafele soft-close runners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cost Estimator Guide by BHK in {locationData.name} */}
      <section className="py-14 sm:py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Pricing Transparency
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Estimated Interior Cost in {locationData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select your property configuration below to preview typical investment ranges with materials and scope:
            </p>
          </div>

          {/* BHK Selector Pills */}
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8">
            {[
              { id: '1bhk', label: '1 BHK' },
              { id: '2bhk', label: '2 BHK' },
              { id: '3bhk', label: '3 BHK Builder Floor' },
              { id: '4bhk', label: '4 BHK / Duplex' },
              { id: 'commercial', label: 'Commercial / Retail' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedBhk(tab.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                  selectedBhk === tab.id
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active BHK Detail Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Typical Budget in {locationData.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                  {currentBhk.title}
                </h3>
              </div>
              <div className="bg-rose-50 border border-rose-200 px-5 py-3 rounded-2xl text-center sm:text-right">
                <span className="text-xs text-rose-700 font-medium block">Estimated Range</span>
                <span className="text-2xl font-black text-rose-600 font-heading">{currentBhk.range}</span>
              </div>
            </div>

            <div className="py-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                What's Included in This Package:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {currentBhk.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                * Exact pricing varies based on chosen finish (Acrylic / PU / Veneer) and carpet area.
              </p>
              <button
                onClick={() => onOpenConsultation(`${currentBhk.title} in ${locationData.name}`)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <span>Get Exact Quote for My Floor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Project Showcase for {locationData.name} */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                100% Real Workmanship
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">
                Real Finished Spaces in {locationData.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Every photo shown below is an actual on-site project crafted by FourCube Decor. No 3D mockups pretending to be real.
              </p>
            </div>

            <Link
              to="/gallery"
              className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group"
            >
              <span>Explore All Real Gallery Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid of Real Rooms */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.featuredRooms.map((room, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {room.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-rose-600 transition font-heading">
                      {room.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {room.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {room.specs.map((spec, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenConsultation(`${room.title} in ${locationData.name}`)}
                      className="w-full py-2 bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-800 text-xs font-bold rounded-lg transition"
                    >
                      Book Similar Design
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Real Video Showcase: On-Site Craftsmanship */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 text-rose-300 text-xs font-bold">
                <Play className="w-3.5 h-3.5 fill-rose-400 text-rose-400" /> Real Project Video
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading leading-tight text-white">
                See Our Real On-Site Handover in South Delhi
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Watch how our automated German factory woodwork transforms residences and commercial showrooms across {locationData.name}. No fake CGI renders—this is 100% genuine FourCube Decor workmanship.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated German Edge-Banding with zero bubbling</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dust-free modular assembly completed within 7 to 10 days on site</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>10-year official warranty certificate handed over at move-in</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black aspect-video relative group">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={locationData.heroImage}
                >
                  <source src={realDecorVideo} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Comparison Table: FourCube Decor vs Local Contractors in {locationData.name} */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Honest Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              FourCube Decor vs Local Contractors in {locationData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Why 1,500+ South Delhi homeowners trust our factory-precision model over unorganized local carpenters:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 sm:p-5 font-bold">Feature / Milestone</th>
                  <th className="p-4 sm:p-5 font-bold bg-rose-600 text-white">FourCube Decor</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-400">Local Unorganized Carpenters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Project Delivery SLA</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">Guaranteed 45-Day Handover</td>
                  <td className="p-4 sm:p-5 text-slate-500">4 to 6 months delay with constant excuses</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Manufacturing Quality</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">German CNC Automated Factory</td>
                  <td className="p-4 sm:p-5 text-slate-500">Manual hand sawing & chipping on site</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Warranty Protection</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">10-Year Flat Replacement Warranty</td>
                  <td className="p-4 sm:p-5 text-slate-500">Zero warranty once final payment is made</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Price Certainty</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">100% Fixed Quote (No Escalations)</td>
                  <td className="p-4 sm:p-5 text-slate-500">20% to 40% frequent mid-work price escalation</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">3D Design Visualization</td>
                  <td className="p-4 sm:p-5 font-bold text-rose-600 bg-rose-50/50">Interactive 3D Virtual Walkthrough</td>
                  <td className="p-4 sm:p-5 text-slate-500">Hand drawings & guesswork on blank walls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Commercial & Retail Highlights in {locationData.name} */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Commercial & Retail Fitouts
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Commercial Spaces & Showrooms in {locationData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Besides luxury residences, we execute turnkey retail showrooms, jewellery boutiques, and corporate office cabins across South Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locationData.commercialHighlights.map((comm, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col group">
                <div className="h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={comm.image} 
                    alt={comm.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 font-heading">{comm.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{comm.desc}</p>
                  </div>
                  <button
                    onClick={() => onOpenConsultation(`Commercial Fitout in ${locationData.name}`)}
                    className="mt-4 w-full py-2.5 bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold rounded-xl transition"
                  >
                    Consult for Commercial Fitout
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Local Testimonials from {locationData.name} */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Verified Client Stories
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              What Homeowners in {locationData.name} Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read real feedback from residents who entrusted their spaces to FourCube Decor:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {locationData.reviews.map((rev, idx) => (
              <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{rev.review}"
                </p>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 font-heading">{rev.name}</h4>
                    <span className="text-[11px] text-slate-500">{rev.colony}</span>
                  </div>
                  <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Localized FAQs Accordion for {locationData.name} */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              FAQs for Home Interiors in {locationData.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Everything you need to know about timelines, warranties, and process in {locationData.name}:
            </p>
          </div>

          <div className="space-y-3">
            {locationData.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-rose-600 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-rose-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Bottom Consultation Banner */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Ready to Build Your Dream Space in {locationData.name}?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
            Schedule a Free 3D Design Session in {locationData.name}
          </h2>
          <p className="text-rose-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our senior interior architect will visit your site with laser meters, design your 3D plan, and give you a fixed quote with no hidden charges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation(`Free 3D Consultation for ${locationData.name}`)}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-rose-50 text-rose-700 font-bold text-sm rounded-xl transition shadow-xl"
            >
              Book Free Site Visit
            </button>
            <a
              href={`tel:${companyContact.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-rose-700/80 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyContact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
