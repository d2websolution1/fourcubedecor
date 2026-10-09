import React, { useState } from 'react';
import { MessageCircle, Phone, X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { companyContact } from '../data/interiorData';
import logoImg from '../assets/forhomedecor.png';

export default function FloatingActions({ onOpenConsultation }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'I want a price estimate for my 2BHK/3BHK',
    'I need a modular kitchen quote',
    'Want to book a free home measurement visit',
    'Do you deliver in 45 days?'
  ];

  const handleSendPrompt = (text) => {
    const url = `https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSendCustom = (e) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleSendPrompt(customMsg);
    setCustomMsg('');
    setChatOpen(false);
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-5 z-40 flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Chat Popup Box */}
      {chatOpen && (
        <div className="pointer-events-auto w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in mb-2">
          {/* Top header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 shadow">
                  <img src={logoImg} alt="FourCube Decor" className="w-full h-full object-contain" />
                </div>
                <span className="w-3 h-3 bg-emerald-400 border-2 border-white rounded-full absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h5 className="font-bold text-sm">FourCube Decor Assistant</h5>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>● Online</span> · Typically replies in under 5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat bubbles */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs max-h-72 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-slate-700 max-w-[85%] border border-slate-100">
              👋 Hello! Welcome to <strong>FourCube Decor</strong>. Looking to design your dream home or modular kitchen?
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-slate-700 max-w-[85%] border border-slate-100">
              Click any quick question below or type your requirement to chat with our senior interior specialist on WhatsApp:
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5 pt-1">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-medium transition flex items-center justify-between"
                >
                  <span>{prompt}</span>
                  <Send className="w-3 h-3 shrink-0 ml-1 text-emerald-600" />
                </button>
              ))}
            </div>
          </div>

          {/* Input field */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type message on WhatsApp..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Action Buttons Floating Column */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Floating Call Button */}
        <a
          href={`tel:${companyContact.phoneRaw}`}
          title="Call Now"
          className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl hover:bg-slate-800 hover:scale-105 transition-all group relative"
        >
          <Phone className="w-5 h-5 text-rose-400 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 whitespace-nowrap px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Call {companyContact.phone}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          title="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all relative group cursor-pointer"
          aria-label="WhatsApp Chat"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 relative z-10" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white z-20">
            1
          </span>
          <span className="absolute right-16 whitespace-nowrap px-3 py-1.5 bg-emerald-800 text-white text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none z-20">
            💬 Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
