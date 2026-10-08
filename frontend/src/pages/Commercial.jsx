import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Briefcase, 
  Gem, 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Play
} from 'lucide-react';
import { commercialOfferings } from '../data/interiorData';
import { realDecorVideo } from '../data/decorMedia';
import CategoryIcon from '../components/CategoryIcon';

export default function Commercial({ onOpenConsultation }) {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" /> Commercial Architecture & Fitouts
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Commercial Decor Solutions
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Turnkey commercial interior design and execution for Malls, Corporate Offices, Luxury Jewellery Showrooms, and Retail Shops. Handed over with strict 45-day SLAs and 10-year warranty.
          </p>
        </div>

        {/* The 4 Commercial Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercialOfferings.map((offering) => (
            <div
              key={offering.id}
              className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 group flex flex-col justify-between card-hover-lift"
            >
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <img
                  src={offering.heroImage}
                  alt={offering.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold text-slate-900 flex items-center gap-2 shadow">
                  <CategoryIcon name={offering.iconName} className="w-4 h-4 text-rose-600" />
                  <span>{offering.title}</span>
                </div>
                <span className="absolute top-4 right-4 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  {offering.badge}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-heading">{offering.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {offering.description}
                </p>

                <div className="space-y-1.5 bg-slate-50 p-4 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Deliverables:
                  </span>
                  {offering.subcategories.slice(0, 3).map((sub, idx) => (
                    <div key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to={offering.path}
                    className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white text-center font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <span>View {offering.title} Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onOpenConsultation(`Commercial - ${offering.title}`)}
                    className="px-4 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Video Showcase (From User's decor folder!) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Behind The Scenes Execution
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-white">
                Real Turnkey Workmanship On Site
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Watch our execution team in action installing modular cabinetry, high security display counters, and precision edge-banded panelling with zero on-site hassle.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>10-Year Assured Warranty on all structural carpentry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Strict 45-day guaranteed completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  <span>Certified Blum / Hettich precision fittings</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation('Commercial Fitout Inquiry')}
                  className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Site Survey & 3D Estimation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black relative">
                <video
                  src={realDecorVideo}
                  controls
                  playsInline
                  className="w-full max-h-96 object-contain mx-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                ▶ Actual project site video from FourCube Decor installations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
