import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Building2,
  Home,
  Layers,
  Search,
  Tag
} from 'lucide-react';
import { all120Pages, locationsList, servicesList } from '../data/pages120Data';
import { southDelhiLocations } from '../data/locationsData';
import { companyContact } from '../data/interiorData';

export default function CitiesHub({ onOpenConsultation }) {
  const [selectedLocality, setSelectedLocality] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter 120 pages
  const filteredPages = all120Pages.filter((page) => {
    const matchesLocality = selectedLocality === 'all' || page.locationSlug === selectedLocality;
    const matchesType = selectedType === 'all' || page.serviceType.toLowerCase() === selectedType.toLowerCase();
    const matchesSearch =
      searchTerm === '' ||
      page.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.societiesList.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesLocality && matchesType && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. TOP HEADER */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> South Delhi 120-Page Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Interior & Commercial Decor Across <span className="text-rose-500">South Delhi</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            120 dedicated, factory-backed pages covering 10 premier South Delhi enclaves and 12 distinct interior design and commercial decor specializations.
          </p>

          <div className="flex justify-center items-center gap-6 pt-4 text-xs text-slate-300 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Clock className="w-4 h-4" /> 45-Day Move-In Guarantee
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 10-Year Flat Warranty
            </span>
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" /> 100% German CNC Precision
            </span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 120 PAGES DIRECTORY & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Browse 120 Dedicated Pages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Locality & Service Directory
              </h2>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search colony, service, society..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-rose-500 bg-slate-50"
              />
            </div>
          </div>

          {/* Type Filter Buttons (All, 4 Commercial, 8 Residential) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-2">Category:</span>
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All (120 Pages)
            </button>
            <button
              onClick={() => setSelectedType('commercial')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedType === 'commercial'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              4 Commercial Services (40 Pages)
            </button>
            <button
              onClick={() => setSelectedType('residential')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedType === 'residential'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              8 Residential Services (80 Pages)
            </button>
          </div>

          {/* Locality Filter Pills (10 South Delhi Localities) */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-2">Locality:</span>
            <button
              onClick={() => setSelectedLocality('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                selectedLocality === 'all'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All 10 Localities
            </button>
            {locationsList.map((loc) => (
              <button
                key={loc.slug}
                onClick={() => setSelectedLocality(loc.slug)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                  selectedLocality === loc.slug
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredPages.length}</strong> of 120 unique pages
          </div>
        </div>

        {/* 120 Pages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPages.map((page) => (
            <Link
              key={page.slug}
              to={`/${page.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-rose-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={page.heroImage}
                  alt={page.heroTitle}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-md ${
                      page.serviceType === 'Commercial'
                        ? 'bg-amber-600/90 text-white'
                        : 'bg-rose-600/90 text-white'
                    }`}
                  >
                    {page.serviceType}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-bold">
                  <span className="flex items-center gap-1 drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    {page.locationName}
                  </span>
                  <span className="bg-slate-900/80 px-2 py-0.5 rounded-md text-[10px] text-amber-300 font-mono">
                    {page.pincode}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition leading-snug">
                    {page.serviceName} in {page.locationName}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {page.heroSubtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-900">{page.pricingOverview}</span>
                  <span className="text-rose-600 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Explore Page <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. CONSULTATION CALL TO ACTION */}
      <section className="bg-slate-900 text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-heading">
            Looking for Interior or Commercial Decor Anywhere in South Delhi?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            We provide doorstep 3D laser consultation across all 10 South Delhi enclaves: Hauz Khas, Saket, Greater Kailash, Vasant Vihar, Vasant Kunj, Defence Colony, Lajpat Nagar, Chittaranjan Park, Green Park, and South Extension.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation('South Delhi Full Home Consultation')}
              className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow-lg cursor-pointer"
            >
              Book Free Site Measurement
            </button>
            <a
              href={`tel:${companyContact.phoneRaw}`}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition border border-slate-700"
            >
              Call: {companyContact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
