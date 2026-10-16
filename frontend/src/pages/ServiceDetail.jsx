import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  CheckCircle,
  Phone,
  MessageCircle,
  Building2,
  Boxes,
  Globe,
  Briefcase,
  PackageCheck,
  Tv,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Layers,
  MapPin
} from 'lucide-react';
import { exhibitionServicesData, getServiceBySlug } from '../data/servicesData';
import { companyContact } from '../data/interiorData';

export default function ServiceDetail({ onOpenConsultation }) {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);

  // If service is not found, redirect to main services
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = exhibitionServicesData.filter(s => s.id !== service.id);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. BREADCRUMBS & HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.22),transparent_55%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-rose-400 font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{service.badge} · {service.tag}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading text-white">
                {service.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-500">
                  in India & Worldwide
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {service.specs.map((sp, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{sp.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{sp.value}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-rose-600/30 hover:shadow-xl flex items-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
                  <span>Request Free 3D Design & Quote</span>
                </button>

                <a
                  href={`https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent(`Hi FourCube Decor, I am interested in ${service.title}. Please share portfolio and cost estimate.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900 group">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{service.title}</span>
                    <span className="text-[10px] bg-rose-600 text-white font-bold px-2 py-0.5 rounded">100% Real Project</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Engineered & fabricated turnkey by FourCube Decor in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES & ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            {/* Features Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Key Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1">
                  Why Brands Choose FourCube Decor for {service.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition"
                  >
                    <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Breakdown */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Comprehensive Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1">
                  What We Deliver Under {service.title}
                </h2>
              </div>

              <div className="space-y-4">
                {service.deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                        {del.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                      {del.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Got Questions?
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between bg-slate-50/50 hover:bg-slate-50 transition"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180 text-rose-600' : ''}`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Consultation Form Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-xl space-y-5 sticky top-28">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-2.5 py-0.5 rounded-full">
                  Fast 24H Turnaround
                </span>
                <h3 className="text-xl font-black font-heading text-white mt-2">
                  Get Free 3D Design & Cost Quote
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Consult directly with our Senior Exhibition Architect for {service.title}.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free photorealistic 3D stall renders</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pragati Maidan & Yashobhoomi approvals</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent itemized Bill of Quantities</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="w-full py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-lg transition"
                >
                  Book Free 3D Consultation
                </button>
                <a
                  href={`tel:${companyContact.phoneRaw}`}
                  className="w-full py-2.5 border border-slate-700 hover:border-slate-500 rounded-xl flex items-center justify-center gap-2 text-slate-300 text-xs font-semibold transition"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                  <span>Direct Call: {companyContact.phone}</span>
                </a>
              </div>

              {/* Other Services Navigation List */}
              <div className="pt-4 border-t border-slate-700">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Other Services
                </span>
                <div className="space-y-1">
                  {otherServices.map((oth) => (
                    <Link
                      key={oth.id}
                      to={`/services/${oth.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition"
                    >
                      <span className="truncate">{oth.title}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
