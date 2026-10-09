import React from 'react';
import { Phone, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { companyContact } from '../data/interiorData';

export default function PreFooterCta({ onOpenConsultation }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-rose-700/30 transform hover:shadow-rose-900/20 transition-all duration-300">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/3 -top-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 border border-white/20 animate-float">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Transform Your Space Today
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Get a Free 3D Interior Plan & Transparent Cost Quote
              </h3>
              <p className="mt-3 text-rose-100 text-sm sm:text-base leading-relaxed">
                Connect with FourCube Decor designers. Walk through your customized 3D home render and get a fixed quotation with no hidden costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-white hover:bg-rose-50 text-rose-700 font-bold text-sm rounded-xl transition shadow-lg shadow-black/20 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer hover:scale-105 duration-200"
              >
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent('Hi FourCube Decor, I want to book a free 3D design consultation and get a cost quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-emerald-900/30 border border-emerald-400/40 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
