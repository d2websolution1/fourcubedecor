import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { southDelhiLocations } from '../data/locationsData';
import { companyContact } from '../data/interiorData';

export default function CitiesHub({ onOpenConsultation }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Turnkey Experience Studios
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Interior Designers Across <span className="text-rose-500">South Delhi</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            FourCube Decor delivers luxury modular kitchens, wardrobes, and full home transformations with German-automated factory precision across prime South Delhi residential enclaves.
          </p>

          <div className="flex justify-center items-center gap-6 pt-4 text-xs text-slate-300 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Clock className="w-4 h-4" /> 45-Day Move-In Guarantee
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 10-Year Flat Warranty
            </span>
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> 100% German Factory Finish
            </span>
          </div>
        </div>
      </section>

      {/* Grid of South Delhi Localities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Select Your Locality
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Featured South Delhi Locations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {southDelhiLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/interior-designers-${loc.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={loc.heroImage}
                  alt={`Interior Designers in ${loc.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      {loc.district} · {loc.pincode}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">
                      Interior Designers in {loc.name}
                    </h3>
                  </div>
                  <span className="text-xs bg-rose-600 text-white font-bold px-2.5 py-1 rounded-full shrink-0 shadow">
                    {loc.stats.projectsDone} Done
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {loc.overview}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Average 3 BHK Cost:</span>
                    <span className="font-bold text-slate-900">{loc.avgCostSummary.bhk3}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Delivery Guarantee:</span>
                    <span className="font-bold text-emerald-600">{loc.stats.turnaroundDays}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-rose-600 group-hover:text-rose-700">
                  <span>Explore {loc.name} Designs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="bg-slate-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-heading">
            Live in Another Part of Delhi NCR?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            We provide doorstep 3D laser consultation across Delhi NCR including Central Delhi, West Delhi, Gurugram, and Noida.
          </p>
          <button
            onClick={() => onOpenConsultation('Delhi NCR Full Home Consultation')}
            className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow-lg"
          >
            Book Free Site Measurement
          </button>
        </div>
      </section>
    </div>
  );
}
