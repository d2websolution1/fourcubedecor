import React from 'react';
import { Sparkles, ArrowRight, Lightbulb, CheckCircle2, BookOpen } from 'lucide-react';
import { styleGuides } from '../data/interiorData';

export default function Guides({ onOpenConsultation }) {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" /> Design Knowledge & Inspiration
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Interior Design Guides & Style Handbook
          </h1>
          <p className="text-slate-600 text-sm mt-3">
            Expert decor ideas, space planning secrets, and trending architectural styles curated by FourCube Decor interior architects.
          </p>
        </div>

        {/* Style Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {styleGuides.map((style) => (
            <div
              key={style.id}
              className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-heading">{style.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {style.desc}
                </p>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Key Design Rules:
                  </span>
                  {style.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize This Theme For My Space</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Architect's Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mt-1">
              Top 3 Interior Golden Rules Before You Start
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-amber-400 font-black text-xl">01</span>
              <h4 className="font-bold text-base text-white">The Kitchen Work Triangle</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Position your refrigerator, sink, and cooking hob in a comfortable triangle with unobstructed pathways between 4 to 9 feet.
              </p>
            </div>

            <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-amber-400 font-black text-xl">02</span>
              <h4 className="font-bold text-base text-white">Layered Lighting Dynamics</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Never rely on a single central light. Blend ambient false ceiling coves, task under-cabinet LED profiles, and decorative pendant lights.
              </p>
            </div>

            <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-amber-400 font-black text-xl">03</span>
              <h4 className="font-bold text-base text-white">Vertical Space Utilization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extend wardrobes all the way to ceiling height with lofts to store seasonal suitcases and quilts without wasting vertical volume.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow-lg inline-flex items-center gap-2"
            >
              <span>Get Free Tailored Design Recommendations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
