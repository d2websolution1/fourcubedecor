import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Phone, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { companyContact } from '../data/interiorData';

export default function PriceCalculator({ onOpenConsultation }) {
  // Config state
  const [bhk, setBhk] = useState('3bhk');
  const [qualityGrade, setQualityGrade] = useState('premium'); // essential, premium, luxury
  const [selectedItems, setSelectedItems] = useState({
    kitchen: true,
    livingRoomUnit: true,
    masterWardrobe: true,
    guestWardrobe: true,
    falseCeiling: true,
    painting: true,
    foyerShoeUnit: false,
    crockeryUnit: false,
    studyUnit: true
  });

  // Base pricing matrix
  const bhkMultiplier = {
    '1bhk': 0.65,
    '2bhk': 0.85,
    '3bhk': 1.0,
    '4bhk': 1.35,
    'villa': 1.8,
  };

  const qualityMultiplier = {
    essential: 0.8,
    premium: 1.0,
    luxury: 1.45,
  };

  const baseItemCosts = {
    kitchen: { title: 'Modular Kitchen (L-Shape/Parallel with Blum tandem drawers)', base: 220000 },
    livingRoomUnit: { title: 'Living Room TV Console & Fluted Acoustic Wall Panel', base: 95000 },
    masterWardrobe: { title: 'Master Bedroom Sliding/Hinged Wardrobe with Loft', base: 125000 },
    guestWardrobe: { title: 'Second Bedroom 3-Door Wardrobe with Accessories', base: 95000 },
    falseCeiling: { title: 'Designer Gypsum False Ceiling with Concealed Warm COB LEDs', base: 85000 },
    painting: { title: 'Premium Asian Paints Royale Luxury Emulsion + Primer', base: 65000 },
    foyerShoeUnit: { title: 'Foyer Shoe Console & Entryway Dresser', base: 45000 },
    crockeryUnit: { title: 'Dining Area Fluted Glass Crockery & Bar Counter', base: 75000 },
    studyUnit: { title: 'Home Office / Kids Ergonomic Study Desk & Overhead Storage', base: 55000 },
  };

  const toggleItem = (key) => {
    setSelectedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate sum
  const currentBhkMult = bhkMultiplier[bhk] || 1;
  const currentQualMult = qualityMultiplier[qualityGrade] || 1;

  let totalEstimate = 0;
  Object.keys(selectedItems).forEach(key => {
    if (selectedItems[key]) {
      totalEstimate += baseItemCosts[key].base * currentBhkMult * currentQualMult;
    }
  });

  const roundedTotal = Math.round(totalEstimate / 1000) * 1000;
  const minRange = Math.round(roundedTotal * 0.95);
  const maxRange = Math.round(roundedTotal * 1.08);

  const formatINR = (val) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const whatsappQuoteText = encodeURIComponent(
    `Hi FourCube Decor, I calculated an interior cost estimate on your website:\nHome: ${bhk.toUpperCase()}\nGrade: ${qualityGrade.toUpperCase()}\nEstimated Range: ${formatINR(minRange)} - ${formatINR(maxRange)}\nPlease share the complete itemized quotation.`
  );

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" /> Instant Estimate Tool
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Home Interior Cost Calculator
          </h1>
          <p className="text-slate-600 text-sm mt-3">
            Estimate your 1BHK, 2BHK, 3BHK, or Villa interior budget with accurate market pricing based on materials, room items, and layout dimensions.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-soft border border-slate-100 space-y-8">
            {/* Step 1: BHK Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-bold text-base text-slate-900 font-heading">
                  Select Your Floor Plan Configuration
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {[
                  { id: '1bhk', label: '1 BHK' },
                  { id: '2bhk', label: '2 BHK' },
                  { id: '3bhk', label: '3 BHK' },
                  { id: '4bhk', label: '4 BHK' },
                  { id: 'villa', label: 'Villa' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setBhk(item.id)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition border ${
                      bhk === item.id
                        ? 'border-rose-600 bg-rose-50 text-rose-700 ring-2 ring-rose-600/20 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quality & Finish Grade */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-bold text-base text-slate-900 font-heading">
                  Select Material & Hardware Package
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'essential',
                    title: 'Essential',
                    desc: 'Matte laminates, Hettich basic hinges, engineered HDHMR',
                    badge: 'Budget Friendly'
                  },
                  {
                    id: 'premium',
                    title: 'Premium (Most Popular)',
                    desc: 'High-gloss acrylic/PU finish, Blum soft-close tandem, quartz counters',
                    badge: 'Recommended'
                  },
                  {
                    id: 'luxury',
                    title: 'Luxury Elite',
                    desc: 'Fluted glass, tinted mirrors, natural veneer, motorized lifts',
                    badge: 'High-End'
                  }
                ].map(grade => (
                  <button
                    key={grade.id}
                    onClick={() => setQualityGrade(grade.id)}
                    className={`p-4 rounded-2xl text-left transition border flex flex-col justify-between ${
                      qualityGrade === grade.id
                        ? 'border-rose-600 bg-rose-50/70 text-slate-900 ring-2 ring-rose-600/20 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                        {grade.badge}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">{grade.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">{grade.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Elements Checklist */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-bold text-base text-slate-900 font-heading">
                  Include or Exclude Room Items
                </h3>
              </div>

              <div className="space-y-2.5">
                {Object.keys(baseItemCosts).map(key => {
                  const item = baseItemCosts[key];
                  const isChecked = selectedItems[key];
                  const estimatedCost = Math.round(item.base * currentBhkMult * currentQualMult);

                  return (
                    <div
                      key={key}
                      onClick={() => toggleItem(key)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                        isChecked 
                          ? 'border-rose-300 bg-white shadow-xs' 
                          : 'border-slate-200 bg-slate-50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                          isChecked ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold text-slate-800">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-900 shrink-0 ml-2">
                        {formatINR(estimatedCost)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Card (Sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Estimated Price Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                {formatINR(minRange)} - {formatINR(maxRange)}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Estimated turnkey budget for <span className="text-white font-semibold">{bhk.toUpperCase()}</span> in <span className="text-rose-400 font-semibold">{qualityGrade.toUpperCase()}</span> specifications.
              </p>

              <div className="my-6 pt-6 border-t border-slate-800 space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Selected Modular Items:</span>
                  <span className="font-bold text-white">
                    {Object.values(selectedItems).filter(Boolean).length} Inclusions
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Manufacturing Delivery:</span>
                  <span className="font-bold text-emerald-400">45-Day Handover</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Warranty:</span>
                  <span className="font-bold text-emerald-400">10-Year Assured</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Hidden Charges:</span>
                  <span className="font-bold text-emerald-400">₹0 (Zero)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${companyContact.whatsappRaw}?text=${whatsappQuoteText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Consultation to Freeze Quote</span>
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Price Match & 45-Day Delivery Guarantee</span>
              </div>
            </div>

            {/* Note box */}
            <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-2xl text-xs text-amber-900 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Need an exact quote?</strong> Our interior architect will perform laser site measurements and produce a millimeter-accurate 3D walkthrough completely free of cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
