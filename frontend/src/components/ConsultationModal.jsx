import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Sparkles, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { companyContact } from '../data/interiorData';
import logoImg from '../assets/forhomedecor.png';

export default function ConsultationModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Delhi NCR',
    bhk: '3 BHK',
    service: defaultService || 'Full Home Interiors',
    whatsappUpdates: true,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getWhatsappUrl = () => {
    const text = `Hi FourCube Decor, I want to book a free 3D design consultation!\n\n📋 *My Details:*\n• *Name:* ${formData.name}\n• *Phone:* +91 ${formData.phone}\n• *City:* ${formData.city}\n• *Configuration:* ${formData.bhk}\n• *Service Required:* ${formData.service}\n\nPlease share customized 3D designs and cost estimate.`;
    return `https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);

    const waUrl = getWhatsappUrl();
    // Redirect immediately to WhatsApp
    try {
      const newWin = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = waUrl;
      }
    } catch {
      window.location.href = waUrl;
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in transition-all">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with Gradient & Floating Elements */}
        <div className="bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 p-6 sm:p-7 text-white relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute right-20 -bottom-10 w-36 h-36 bg-amber-400/15 rounded-full blur-xl pointer-events-none"></div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/15 transition-all transform hover:rotate-90 duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2.5">
            <div className="bg-white p-1.5 rounded-xl shadow-md transform hover:scale-105 transition-transform">
              <img src={logoImg} alt="FourCube Decor" className="h-8 w-auto object-contain" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-amber-200 border border-white/20 animate-float">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Free 3D Consultation
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Book Your Free 3D Design Session
          </h3>
          <p className="text-rose-100 text-xs sm:text-sm mt-1 leading-relaxed">
            Meet our senior interior architect & get an instant 3D layout + transparent cost quote.
          </p>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/20 text-[11px] sm:text-xs text-rose-100 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>45-Day Move-in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>10-Yr Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Zero Hidden Cost</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6 px-4 space-y-4 animate-scale-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 animate-bounce">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1">
                  ✓ Redirecting to WhatsApp
                </span>
                <h4 className="text-2xl font-extrabold text-slate-800 font-heading">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-slate-600 mt-2 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Your consultation request is submitted. WhatsApp chat is opening so you can directly connect with our senior interior designer.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-xs text-emerald-900 max-w-md mx-auto text-left space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Enquiry Summary sent to WhatsApp:</span>
                </div>
                <p>• <strong>Contact:</strong> +91 {formData.phone} ({formData.city})</p>
                <p>• <strong>Scope:</strong> {formData.bhk} — {formData.service}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3.5 border border-slate-200 rounded-xl text-slate-700 font-semibold text-xs hover:bg-slate-50 transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-500 text-sm transition-all shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="flex rounded-xl shadow-sm overflow-hidden border border-slate-200 focus-within:ring-2 focus-within:ring-rose-500/30 focus-within:border-rose-500 transition-all">
                    <span className="inline-flex items-center px-3.5 bg-slate-50 text-slate-600 text-sm font-bold border-r border-slate-200">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property City / Area
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-500 text-sm bg-white transition-all shadow-sm"
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="South Delhi">South Delhi</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Noida">Noida</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Space Configuration
                  </label>
                  <select
                    value={formData.bhk}
                    onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-500 text-sm bg-white transition-all shadow-sm"
                  >
                    <option value="1 BHK">1 BHK Apartment</option>
                    <option value="2 BHK">2 BHK Apartment / Floor</option>
                    <option value="3 BHK">3 BHK Luxury Home</option>
                    <option value="4+ BHK / Villa">4+ BHK / Villa</option>
                    <option value="Builder Floor">Builder Floor</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Jewellery / Retail Shop">Jewellery / Retail Shop</option>
                    <option value="Mall / Showroom">Mall / Showroom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Scope of Work
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-500 text-sm bg-white transition-all shadow-sm"
                  >
                    <option value="Full Home Interiors">Full Home Interiors (Turnkey)</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                    <option value="Living Room & TV Units">Living Room & TV Units</option>
                    <option value="Bedrooms & Wardrobes">Bedrooms & Wardrobes</option>
                    <option value="Commercial Office Fitout">Commercial Office Fitout</option>
                    <option value="Jewellery & Shop Decor">Jewellery & Shop Decor</option>
                    <option value="Mall & Retail Kiosk">Mall & Retail Kiosk</option>
                    <option value="Renovation & Upgrades">Full Renovation & Upgrades</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modalWhatsapp"
                  checked={formData.whatsappUpdates}
                  onChange={(e) => setFormData({ ...formData, whatsappUpdates: e.target.checked })}
                  className="w-4 h-4 text-rose-600 rounded border-slate-300 focus:ring-rose-500"
                />
                <label htmlFor="modalWhatsapp" className="text-xs text-slate-600 select-none">
                  Get instant 3D layout options and transparent quote on WhatsApp
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold rounded-2xl transition shadow-lg shadow-rose-600/35 hover:shadow-xl hover:shadow-rose-600/45 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer glow-btn"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book Free Consultation & Connect on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-slate-400">
                🔒 100% Free Consultation · No Obligation · Direct WhatsApp Expert Connection
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
