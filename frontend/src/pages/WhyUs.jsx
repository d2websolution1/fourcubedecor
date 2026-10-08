import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  FileCheck, 
  Building2, 
  Hammer,
  ArrowRight
} from 'lucide-react';

export default function WhyUs({ onOpenConsultation }) {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Ironclad Promises & Warranty
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Why FourCube Decor?
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            We don't just design beautiful homes; we back our craft with industry-first service level guarantees so you can move in with total peace of mind.
          </p>
        </div>

        {/* The Two Flagship Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guarantee 1: 45 Days */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                45-Day Move-In Guarantee
              </h2>
              <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 text-xs font-bold rounded-lg">
                Or We Pay Your Rent!
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Once the final designs are signed off, our clock begins ticking. We manufacture, transport, and install your modular interiors within 45 calendar days. For every single day delayed past day 45, we compensate you directly.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict milestone tracking via client dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Predetermined installation schedules</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dust-free modular assembly in 7-10 days on site</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>Book With 45-Day Delivery Promise</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Guarantee 2: 10 Years */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                10-Year Flat Warranty
              </h2>
              <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-bold rounded-lg">
                Assured Structural Integrity
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in the longevity of what we build. All our cabinetry is manufactured using high-density moisture-resistant (HDHMR) and BWP marine-grade plywood paired with certified German hardware that withstands 200,000+ open/close cycles.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% borer and termite resistance coverage</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free replacement of defective hinges & channels</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Annual complimentary hardware health check</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>Get 10-Year Certified Warranty</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 146-Point Quality Checklist Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Rigorous Quality Engineering
            </span>
            <h3 className="text-3xl font-extrabold font-heading mt-1 text-white">
              Our 146-Point Quality Inspection
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Before any panel leaves our fabrication plant, it is scrutinized by automated laser sensors and quality supervisors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-white block">Edge Banding Adhesion</span>
              <p className="text-slate-400">Zero air bubbles or peeling along 2mm impact-proof PVC edges.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-white block">Moisture & Steam Shield</span>
              <p className="text-slate-400">Hydrophobic sealants applied across all under-sink base panels.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-white block">Load Bearing Stress Test</span>
              <p className="text-slate-400">Shelves tested up to 65 kg static weight with zero deflections.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-white block">Pre-Drilled Precision</span>
              <p className="text-slate-400">Computerized 32mm system holes eliminate on-site hammering.</p>
            </div>
          </div>
        </div>

        {/* Comparison Matrix */}
        <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Comparison: FourCube vs The Market
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Why smart homeowners avoid unorganized local carpentry
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 text-rose-600 font-bold bg-rose-50/50 rounded-t-xl">FourCube Decor</th>
                  <th className="py-3 px-4">Local Carpenters</th>
                  <th className="py-3 px-4">Freelance Contractors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Delivery Guarantee</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-rose-50/30">45 Days or Rent Paid</td>
                  <td className="py-3.5 px-4 text-slate-500">No commitment (3-6 mos)</td>
                  <td className="py-3.5 px-4 text-slate-500">Unpredictable</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Warranty</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-rose-50/30">10-Year Flat Warranty</td>
                  <td className="py-3.5 px-4 text-slate-500">Zero formal warranty</td>
                  <td className="py-3.5 px-4 text-slate-500">1 year or conditional</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Pricing Transparency</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-rose-50/30">Fixed Quote (0% Hike)</td>
                  <td className="py-3.5 px-4 text-slate-500">Escalates continuously</td>
                  <td className="py-3.5 px-4 text-slate-500">Frequent hidden charges</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Finish Quality</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-rose-50/30">German Machine Edge Band</td>
                  <td className="py-3.5 px-4 text-slate-500">Manual glue & file edge</td>
                  <td className="py-3.5 px-4 text-slate-500">Mixed quality</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">On-Site Mess & Dust</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-rose-50/30">Dust-Free (Click Assembly)</td>
                  <td className="py-3.5 px-4 text-slate-500">Weeks of sawdust & noise</td>
                  <td className="py-3.5 px-4 text-slate-500">Messy manual cutting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
