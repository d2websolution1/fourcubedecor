import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Star,
  MapPin,
  Maximize2
} from 'lucide-react';
import { exhibitionServicesData } from '../data/servicesData';
import { companyContact } from '../data/interiorData';

export default function Services({ onOpenConsultation }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const venues = [
    { name: 'Pragati Maidan (IECC)', city: 'New Delhi', note: 'Approved Super-Fabricator' },
    { name: 'Yashobhoomi (IICC)', city: 'Dwarka, Delhi', note: 'Certified Stall Contractor' },
    { name: 'India Expo Mart (IEML)', city: 'Greater Noida', note: 'Preferred Turnkey Partner' },
    { name: 'BEC (NESCO)', city: 'Mumbai', note: 'Pan-India Deployment' },
    { name: 'BIEC', city: 'Bengaluru', note: 'Full Logistic Support' },
    { name: 'HITEX Exhibition Centre', city: 'Hyderabad', note: 'On-Site Engineering Crew' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.18),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>India’s Leading Turnkey Exhibition & Interior Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-heading">
              Our Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-500">
                Services & Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From award-winning custom & modular trade show booths at Pragati Maidan and Yashobhoomi to turnkey executive office interiors and grand corporate event stages. Engineered with German precision and delivered with certified SLAs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation('Exhibition Booth Design')}
                className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-rose-600/30 hover:shadow-xl flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
                <span>Request Free 3D Stall Design & Quote</span>
              </button>

              <a
                href={`https://wa.me/${companyContact.whatsappRaw}?text=${encodeURIComponent('Hi FourCube Decor, I want a quick quote for exhibition booth / interior services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-3xl font-black text-rose-400 font-heading">500+</div>
              <div className="text-xs text-slate-400 mt-0.5">Exhibition Stands Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400 font-heading">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Venue & ITPO Compliant</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400 font-heading">45-Day</div>
              <div className="text-xs text-slate-400 mt-0.5">Turnkey Interior SLA</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400 font-heading">Pan-India</div>
              <div className="text-xs text-slate-400 mt-0.5">Delhi · Mumbai · Bengaluru</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST - CARDS MATCHING REFERENCE WEBSITE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitionServicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-700 shadow">
                  {service.badge}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-rose-400 block mb-0.5">
                    {service.tag}
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-heading">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Specs Pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  {service.specs.slice(0, 2).map((sp, i) => (
                    <div key={i} className="bg-slate-50 p-2 rounded-lg">
                      <div className="text-[10px] text-slate-500 font-semibold">{sp.label}</div>
                      <div className="text-xs font-bold text-slate-800 truncate">{sp.value}</div>
                    </div>
                  ))}
                </div>

                {/* Features Checkpoints */}
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAJOR EXHIBITION VENUES SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              National Infrastructure Coverage
            </span>
            <h2 className="text-3xl font-black font-heading text-white">
              Approved Fabrication Across India’s Premier Convention Centers
            </h2>
            <p className="text-sm text-slate-300">
              FourCube Decor holds official contractor registrations and structural compliance approvals across India’s major exhibition grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venues.map((venue, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-rose-600/30 text-rose-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{venue.name}</h4>
                  <p className="text-xs text-slate-400">{venue.city}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded">
                    {venue.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TURNKEY 4-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Zero Hassle Execution
          </span>
          <h2 className="text-3xl font-black font-heading text-slate-900 mt-1">
            Our 4-Step Turnkey Delivery Process
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            From your preliminary brief to on-site handover 24 hours prior to exhibitor entry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: '3D Concept & Layout',
              desc: 'Tailored 3D architectural renders, elevation drawings, materials mood-board, and clear fixed quotation.'
            },
            {
              num: '02',
              title: 'Venue & Fire Approvals',
              desc: 'We secure structural stability certificates, electrical load sanctions, and organizer permissions.'
            },
            {
              num: '03',
              title: 'Factory Prefabrication',
              desc: '80% of woodwork and frames pre-assembled in our German-engineered plant for pristine finishes.'
            },
            {
              num: '04',
              title: 'On-Site Handover & Support',
              desc: 'Fast assembly on-site with 24/7 stand technician support throughout your trade fair duration.'
            }
          ].map((st, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <span className="text-3xl font-black text-rose-600/30 font-heading block mb-2">{st.num}</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">{st.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DIRECT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Exhibition & Interior Specialists
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading">
              Have an upcoming trade show or office project?
            </h2>
            <p className="text-sm text-rose-100">
              Share your stall dimensions or carpet area. Our senior exhibition architect will provide a custom 3D design and quotation within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenConsultation('Exhibition / Interior Services')}
              className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition"
            >
              Get Free 3D Plan & Quote
            </button>
            <a
              href={`tel:${companyContact.phoneRaw}`}
              className="px-6 py-3.5 border-2 border-white/60 hover:border-white text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
