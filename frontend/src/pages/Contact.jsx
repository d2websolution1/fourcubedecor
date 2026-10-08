import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { companyContact } from '../data/interiorData';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from '../components/SocialIcons';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Gurugram',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setSubmitted(true);
  };

  const studios = [
    {
      city: 'Gurugram (Flagship Experience Studio)',
      address: 'Level 4, DLF Cyber City, Building 9A, DLF Phase 2, Gurugram, Haryana 122002',
      phone: '+91 98765 43210',
      timing: 'Mon - Sun: 10:00 AM - 8:30 PM'
    },
    {
      city: 'Bengaluru (South Studio)',
      address: 'Plot 42, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
      phone: '+91 98765 43211',
      timing: 'Mon - Sun: 10:00 AM - 8:30 PM'
    },
    {
      city: 'Mumbai (Western Hub)',
      address: 'Crystal Plaza, New Link Road, Opposite Infinity Mall, Andheri West, Mumbai, MH 400053',
      phone: '+91 98765 43212',
      timing: 'Mon - Sun: 10:00 AM - 8:30 PM'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Visit Us Or Talk to An Expert
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Get in Touch With FourCube Decor
          </h1>
          <p className="text-slate-600 text-sm">
            Whether you want to visit our live materials experience center or schedule a home visit, we are here 7 days a week.
          </p>
        </div>

        {/* Contact Form & Direct Communication Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick Actions & Studios */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons */}
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 space-y-4">
              <h3 className="font-bold text-base text-slate-900 font-heading">
                Instant Direct Assistance
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${companyContact.phoneRaw}`}
                  className="p-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition flex flex-col items-center justify-center text-center gap-2 border border-rose-200"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>Call Us Directly</span>
                  <span className="text-[11px] text-rose-600 font-medium">{companyContact.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20want%20to%20connect%20regarding%20interior%20design.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition flex flex-col items-center justify-center text-center gap-2 border border-emerald-200"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>WhatsApp Chat</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Quick 5-min replies</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500 block mb-2">
                  Connect on Social Media
                </span>
                <div className="flex gap-2">
                  <a
                    href={companyContact.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-700 transition"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyContact.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-700 transition"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyContact.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-700 transition"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyContact.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-700 transition"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Studios list */}
            <div className="space-y-3">
              <h3 className="font-bold text-base text-slate-900 font-heading">
                Experience Studios Near You
              </h3>
              {studios.map((st, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-soft space-y-2 text-xs">
                  <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{st.city}</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-5">{st.address}</p>
                  <div className="pl-5 pt-1 text-slate-500 flex flex-wrap gap-x-4">
                    <span>📞 {st.phone}</span>
                    <span>🕒 {st.timing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-soft border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Drop your requirement and floor details. Our design architect will reach out with customized suggestions.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-heading">Message Sent Successfully!</h4>
                <p className="text-slate-600 text-xs max-w-md mx-auto">
                  Thank you, <strong>{contactForm.name}</strong>. We have received your inquiry. One of our senior architects will reach out to you at <strong>{contactForm.phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20just%20sent%20an%20enquiry%20regarding%20interior%20design%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-xs shadow hover:bg-emerald-700 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continue on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      City of Residence
                    </label>
                    <select
                      value={contactForm.city}
                      onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                    >
                      <option value="Gurugram">Gurugram</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Noida">Noida</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Describe Your Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your home (BHK, carpet area, modular kitchen requirements, expected move-in date)..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
