import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Gurugram',
    bhk: '3 BHK',
    service: defaultService || 'Full Home Interiors',
    whatsappUpdates: true,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FourCube Decor, I would like to book a free design consultation.\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nRequirement: ${formData.bhk} - ${formData.service}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Free Design Consultation
          </div>
          <h3 className="text-2xl font-bold font-heading">Book Your Free 3D Design Session</h3>
          <p className="text-rose-100 text-sm mt-1">
            Meet our senior interior architect & get instant 3D layout + personalized cost estimation.
          </p>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/20 text-xs text-rose-100">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>45-Day Handover</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>10-Yr Warranty</span>
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Zero Hidden Cost</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 font-heading">Thank You, {formData.name}!</h4>
              <p className="text-slate-600 mt-2 text-sm max-w-md mx-auto">
                Our interior specialist will contact you on <span className="font-semibold text-slate-900">{formData.phone}</span> within 15 minutes to schedule your free consultation.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl transition shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp Now
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-3 border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-r-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Property City
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm bg-white"
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Noida">Noida</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Home Configuration
                  </label>
                  <select
                    value={formData.bhk}
                    onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm bg-white"
                  >
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4+ BHK / Villa">4+ BHK / Villa</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Commercial / Office">Commercial / Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Scope of Work
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm bg-white"
                  >
                    <option value="Full Home Interiors">Full Home Interiors</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                    <option value="Living Room & Dining">Living Room & Dining</option>
                    <option value="Bedrooms & Wardrobes">Bedrooms & Wardrobes</option>
                    <option value="Space Saving Solutions">Space Saving Solutions</option>
                    <option value="Renovation & Upgrade">Renovation & Upgrade</option>
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
                <label htmlFor="modalWhatsapp" className="text-xs text-slate-600">
                  Send 3D designs, quote estimates and project updates on WhatsApp
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Book Free Design Consultation
              </button>

              <p className="text-center text-[11px] text-slate-400">
                🔒 We respect your privacy. No spam. 100% Free & No obligation.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
