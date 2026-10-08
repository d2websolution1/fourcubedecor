import React from 'react';
import { ShieldCheck, Award, Users, Factory, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { statistics } from '../data/interiorData';

export default function About({ onOpenConsultation }) {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Crafting Dream Spaces Since 2018
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            About FourCube Decor
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            We are redefining residential interior design in India by combining architectural brilliance with German industrial automation, fixed transparent pricing, and our strict 45-day move-in guarantee.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              Why We Founded FourCube Decor
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every year, thousands of homeowners experience extreme frustration with local interior contractors: carpenter delays running into 6 months, unexplainable budget overruns, peeling laminates within 2 years, and dust-ridden homes during manual sawing.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              FourCube Decor was built to solve this exact problem. By shifting woodwork fabrication to robotic German factory lines, using pre-drilled hardware fittings from Blum and Hettich, and deploying dedicated project managers on-site, we turn interior design into a stress-free, joyous experience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-rose-50/60 rounded-xl">
                <span className="text-2xl font-black text-rose-600 font-heading block">1,500+</span>
                <span className="text-xs text-slate-600 font-medium">Turnkey Homes Completed</span>
              </div>
              <div className="p-3 bg-amber-50/60 rounded-xl">
                <span className="text-2xl font-black text-amber-600 font-heading block">100%</span>
                <span className="text-xs text-slate-600 font-medium">Dust-Free Onsite Assembly</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96">
            <img
              src="/decor/WhatsApp%20Image%202026-10-08%20at%205.02.03%20PM.jpeg"
              alt="FourCube Decor Studio Work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs bg-white/20 backdrop-blur-md p-3.5 rounded-xl border border-white/20">
              "Every corner of your home deserves the same precision and passion that goes into a work of art."
            </div>
          </div>
        </div>

        {/* Pillars of Excellence */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Our Core Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
              What Sets FourCube Decor Apart
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">German CNC Precision</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computerized edge banding and automated drills eliminate human errors, ensuring millimeter accuracy and zero gaps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">10-Year Assured Warranty</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We back our modular cabinetry with a 10-year flat replacement warranty covering borer, termite, and hardware issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Zero Hidden Charges</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                What you see in our quotation is exactly what you pay. No sudden site surcharges or unexpected material upgrades.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Ready to Experience the FourCube Difference?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book your free consultation with our senior architects and get a customized 3D layout for your flat.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-lg transition inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Free 3D Design Session</span>
          </button>
        </div>
      </div>
    </div>
  );
}
