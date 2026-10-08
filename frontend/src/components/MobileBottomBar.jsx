import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { companyContact } from '../data/interiorData';

export default function MobileBottomBar({ onOpenConsultation }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg">
      <a
        href={`tel:${companyContact.phoneRaw}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition"
      >
        <Phone className="w-4 h-4 text-rose-600 mb-0.5" />
        <span>Call Now</span>
      </a>

      <a
        href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20want%20to%20consult%20regarding%20home%20interiors.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition"
      >
        <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenConsultation}
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-600/30"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Free Quote</span>
      </button>
    </div>
  );
}
