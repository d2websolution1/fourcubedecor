import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Activity, 
  Calculator, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Layers, 
  Building2, 
  Zap, 
  SlidersHorizontal 
} from 'lucide-react';
import { companyContact } from '../data/interiorData';

const LIVE_UPDATES = [
  {
    venue: 'Pragati Maidan (IECC)',
    tag: 'Active Fabrication',
    detail: '140m² Multi-Country Pavilion stall assembly in Hall 14',
    time: '4 mins ago',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
  },
  {
    venue: 'IICC Yashobhoomi Dwarka',
    tag: '3D Approval Passed',
    detail: 'Double-storey 72m² mezzanine booth structural fire compliance cleared',
    time: '12 mins ago',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30'
  },
  {
    venue: 'South Delhi (GK-1)',
    tag: 'Interior Handover',
    detail: '3 BHK German CNC modular kitchen & acoustic living completed on Day 41',
    time: '28 mins ago',
    badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30'
  },
  {
    venue: 'BEC Mumbai & Bangalore',
    tag: 'Modular Dispatch',
    detail: 'Flat-pack aluminium tension fabric matrix frames dispatched via air-cargo',
    time: '45 mins ago',
    badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30'
  }
];

export default function RealtimeDecorHub({ onOpenConsultation }) {
  const [activeUpdateIdx, setActiveUpdateIdx] = useState(0);
  const [calcTab, setCalcTab] = useState('exhibition'); // 'exhibition' | 'interior'

  // Exhibition Calculator States
  const [boothType, setBoothType] = useState('custom'); // 'custom' | 'modular' | 'double_storey'
  const [boothArea, setBoothArea] = useState(36); // sqm
  const [includeLedWall, setIncludeLedWall] = useState(true);
  const [includeVipLounge, setIncludeVipLounge] = useState(true);

  // Interior Calculator States
  const [interiorType, setInteriorType] = useState('3bhk');
  const [interiorGrade, setInteriorGrade] = useState('premium'); // 'essential' | 'premium' | 'luxury'

  // Rotating Live Ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUpdateIdx((prev) => (prev + 1) % LIVE_UPDATES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Real-time calculation logic for Exhibition
  const getExhibitionPricing = () => {
    let ratePerSqm = 6500; // Base custom woodwork
    if (boothType === 'modular') ratePerSqm = 4800;
    if (boothType === 'double_storey') ratePerSqm = 11500;

    let baseCost = boothArea * ratePerSqm;
    let ledCost = includeLedWall ? (boothArea >= 54 ? 85000 : 55000) : 0;
    let loungeCost = includeVipLounge ? (boothType === 'double_storey' ? 95000 : 45000) : 0;

    const total = baseCost + ledCost + loungeCost;
    const minVal = Math.round((total * 0.95) / 5000) * 5000;
    const maxVal = Math.round((total * 1.1) / 5000) * 5000;

    return { minVal, maxVal, total };
  };

  // Real-time calculation logic for Interior
  const getInteriorPricing = () => {
    const baseMap = {
      '2bhk': 650000,
      '3bhk': 950000,
      '4bhk': 1450000,
      'commercial': 800000
    };
    const multMap = {
      essential: 0.85,
      premium: 1.0,
      luxury: 1.45
    };
    const base = baseMap[interiorType] * multMap[interiorGrade];
    const minVal = Math.round((base * 0.95) / 10000) * 10000;
    const maxVal = Math.round((base * 1.12) / 10000) * 10000;
    return { minVal, maxVal, total: base };
  };

  const expoPrice = getExhibitionPricing();
  const interiorPrice = getInteriorPricing();

  const formatINR = (val) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const currentUpdate = LIVE_UPDATES[activeUpdateIdx];

  const handleShareExhibitionQuote = () => {
    const typeLabel = boothType === 'custom' ? 'Custom Woodwork' : boothType === 'modular' ? 'Eco Modular SEG' : 'Double Storey Mezzanine';
    const text = `Hi FourCube Decor, I calculated an Exhibition Booth estimate on your website:\n\n🎪 *Booth Type:* ${typeLabel}\n📐 *Floor Area:* ${boothArea} sq.m\n📺 *Curved LED Video Wall:* ${includeLedWall ? 'Yes' : 'No'}\n🛋️ *Private VIP Lounge:* ${includeVipLounge ? 'Yes' : 'No'}\n💰 *Live Estimated Cost:* ${formatINR(expoPrice.minVal)} - ${formatINR(expoPrice.maxVal)}\n\nPlease share 3D floor layout options & venue submission documents.`;
    window.open(`https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleShareInteriorQuote = () => {
    const typeLabel = interiorType === 'commercial' ? 'Commercial / Showroom' : interiorType.toUpperCase();
    const text = `Hi FourCube Decor, I calculated an Interior Cost estimate on your website:\n\n🏡 *Space:* ${typeLabel}\n✨ *Quality Finish:* ${interiorGrade.toUpperCase()} (German Hardware & Plywood)\n💰 *Live Estimated Cost:* ${formatINR(interiorPrice.minVal)} - ${formatINR(interiorPrice.maxVal)}\n\nPlease share the detailed BOQ & schedule a free laser measurement visit.`;
    window.open(`https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      {/* 1. REAL-TIME LIVE ACTIVITY BAR */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-rose-600/10 via-amber-500/5 to-transparent pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left Live Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 font-mono">
                <Activity className="w-3.5 h-3.5" /> LIVE DECOR & EXPO PRODUCTION
              </span>
              <div className="text-xs font-bold text-slate-300">
                German Joinery Hub · Manesar & South Delhi
              </div>
            </div>
          </div>

          {/* Rotating Live Event Feed */}
          <div className="flex-1 min-w-0 bg-slate-950/70 rounded-xl px-4 py-2.5 border border-slate-800/80 flex items-center justify-between gap-3">
            <div className="min-w-0 flex items-center gap-2.5">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${currentUpdate.badgeColor}`}>
                {currentUpdate.tag}
              </span>
              <span className="text-xs font-bold text-amber-300 shrink-0">
                {currentUpdate.venue}:
              </span>
              <p className="text-xs text-slate-300 truncate">
                {currentUpdate.detail}
              </p>
            </div>
            <span className="text-[10px] text-slate-400 font-mono shrink-0 hidden sm:inline">
              {currentUpdate.time}
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 shrink-0 text-right">
            <div>
              <div className="text-xs font-black text-white font-mono">540+ STALLS</div>
              <div className="text-[10px] text-slate-400">100% ITPO Handover</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-800" />
            <div className="hidden sm:block">
              <div className="text-xs font-black text-amber-400 font-mono">45-DAY SLA</div>
              <div className="text-[10px] text-slate-400">Strict Move-In Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. REAL-TIME INTERACTIVE COST & SPECIFICATION ESTIMATOR */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header with Luxury Gradient Accent */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wide mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Real-Time Estimation Engine</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Instant Decor & Exhibition Stall Cost Estimator
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Get live, transparent pricing based on current material rates, venue compliance (ITPO / Yashobhoomi), and German factory prefabrication.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="bg-slate-800/80 p-1.5 rounded-2xl flex items-center shrink-0 border border-slate-700">
              <button
                onClick={() => setCalcTab('exhibition')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-2 ${
                  calcTab === 'exhibition'
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Exhibition Stalls</span>
              </button>
              <button
                onClick={() => setCalcTab('interior')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-2 ${
                  calcTab === 'interior'
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Home & Commercial</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {calcTab === 'exhibition' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls (Col 7) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Stall Architecture Type */}
                <div>
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block mb-2.5">
                    1. Select Booth Architecture
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'custom', name: 'Custom Woodwork', badge: 'Flagship Stall', desc: 'CNC woodwork, 3D acrylic & VIP zone' },
                      { id: 'modular', name: 'Modular SEG System', badge: 'Eco Reusable', desc: 'Aluminium matrix with 6hr fast setup' },
                      { id: 'double_storey', name: 'Double Storey Mezzanine', badge: 'Mega 2-Storey', desc: 'Structural staircase & VIP lounge' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setBoothType(type.id)}
                        className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          boothType === type.id
                            ? 'border-rose-600 bg-rose-50/60 ring-2 ring-rose-600/20 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            boothType === type.id ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {type.badge}
                          </span>
                          <h4 className="font-bold text-xs text-slate-900 mt-2 font-heading">{type.name}</h4>
                          <p className="text-[11px] text-slate-500 mt-1 leading-tight">{type.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stall Area Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                      2. Floor Area (Square Meters)
                    </label>
                    <span className="text-sm font-extrabold text-rose-600 font-mono bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-200">
                      {boothArea} m² ({Math.round(boothArea * 10.764)} sq.ft)
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[18, 36, 54, 72, 100].map((area) => (
                      <button
                        key={area}
                        onClick={() => setBoothArea(area)}
                        className={`py-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                          boothArea === area
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {area} m²
                      </button>
                    ))}
                  </div>
                </div>

                {/* Value-Add Inclusions */}
                <div>
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block mb-2.5">
                    3. Premium Inclusions
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                      includeLedWall ? 'bg-emerald-50/70 border-emerald-300' : 'bg-white border-slate-200'
                    }`}>
                      <input
                        type="checkbox"
                        checked={includeLedWall}
                        onChange={(e) => setIncludeLedWall(e.target.checked)}
                        className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Curved P2.6 Ultra-HD LED Wall</div>
                        <div className="text-[10px] text-slate-500">Video playback & dynamic brand staging</div>
                      </div>
                    </label>

                    <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                      includeVipLounge ? 'bg-emerald-50/70 border-emerald-300' : 'bg-white border-slate-200'
                    }`}>
                      <input
                        type="checkbox"
                        checked={includeVipLounge}
                        onChange={(e) => setIncludeVipLounge(e.target.checked)}
                        className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Private VIP Negotiation Suite</div>
                        <div className="text-[10px] text-slate-500">Sound-dampened meeting room + lockable bar</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Price Calculation Output Box (Col 5) */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-5 relative">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      REAL-TIME QUOTE ESTIMATE
                    </span>
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-emerald-400" />
                      Live Verified
                    </span>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 font-medium">Estimated Budget Range:</div>
                    <div className="text-3xl sm:text-4xl font-black text-amber-300 font-heading mt-1">
                      {formatINR(expoPrice.minVal)} - {formatINR(expoPrice.maxVal)}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      *Includes factory prefabrication, transportation & on-site assembly.
                    </div>
                  </div>

                  {/* Included SLA checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>ITPO / Yashobhoomi venue approvals & fire certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Free photorealistic 3D stall renders & elevation plans</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Guaranteed handover 24 hours prior to expo badge entry</span>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-2">
                    <button
                      onClick={handleShareExhibitionQuote}
                      className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Get Official Quotation on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => onOpenConsultation(`Exhibition Booth ${boothArea}m²`)}
                      className="w-full mt-2.5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Book Free 3D Design Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Interior Controls (Col 7) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Space Type */}
                <div>
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block mb-2.5">
                    1. Select Space Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: '2bhk', label: '2 BHK Home', desc: 'Compact luxury' },
                      { id: '3bhk', label: '3 BHK Home', desc: 'Premium floor' },
                      { id: '4bhk', label: '4 BHK / Villa', desc: 'Bespoke estate' },
                      { id: 'commercial', label: 'Retail / Showroom', desc: 'Optical/Jewellery' }
                    ].map((sp) => (
                      <button
                        key={sp.id}
                        onClick={() => setInteriorType(sp.id)}
                        className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                          interiorType === sp.id
                            ? 'border-rose-600 bg-rose-50/60 ring-2 ring-rose-600/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-xs text-slate-900 font-heading">{sp.label}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{sp.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quality Grade */}
                <div>
                  <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block mb-2.5">
                    2. Select Material & Finish Grade
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'essential', name: 'Essential', spec: 'Commercial ply + Merino laminate', badge: 'Standard' },
                      { id: 'premium', name: 'German Premium', spec: 'BWR ply + Hafele/Blum hardware', badge: 'Most Popular' },
                      { id: 'luxury', name: 'Italian Luxury', spec: 'Duco paint + Louvers + Quartz', badge: 'Ultra-Luxury' }
                    ].map((gr) => (
                      <button
                        key={gr.id}
                        onClick={() => setInteriorGrade(gr.id)}
                        className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                          interiorGrade === gr.id
                            ? 'border-rose-600 bg-rose-50/60 ring-2 ring-rose-600/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          interiorGrade === gr.id ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {gr.badge}
                        </span>
                        <div className="font-bold text-xs text-slate-900 mt-2 font-heading">{gr.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{gr.spec}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Deliverables summary */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-800 mb-2">Scope of Work Included:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div>• Modular kitchen with Blum soft-close</div>
                    <div>• Gypsum false ceiling + warm COB LEDs</div>
                    <div>• Floor-to-ceiling wardrobes with loft</div>
                    <div>• Asian Paints Royale luxury emulsion</div>
                  </div>
                </div>
              </div>

              {/* Price Calculation Output Box (Col 5) */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-5 relative">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      INTERIOR COST ESTIMATE
                    </span>
                    <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      45-Day Move-In
                    </span>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 font-medium">Estimated Turnkey Budget:</div>
                    <div className="text-3xl sm:text-4xl font-black text-amber-300 font-heading mt-1">
                      {formatINR(interiorPrice.minVal)} - {formatINR(interiorPrice.maxVal)}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      *Includes factory carpentry, hardware, ceiling & full installation.
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>10-Year flat warranty on German factory joinery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Guaranteed 45-day move-in with daily project updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Free doorstep laser site measurement in South Delhi</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleShareInteriorQuote}
                      className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Estimate to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => onOpenConsultation(`Interior Fitout: ${interiorType}`)}
                      className="w-full mt-2.5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Schedule Free Site Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
