import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Building2,
  Plus,
  Minus,
  Play
} from 'lucide-react';
import { 
  navigationOfferings, 
  commercialOfferings,
  galleryItems, 
  statistics, 
  processSteps, 
  testimonials, 
  faqs, 
  companyContact,
  realDecorVideo
} from '../data/interiorData';
import { realLivingImages, realBedroomImages, realKitchenImages } from '../data/decorMedia';
import CategoryIcon from '../components/CategoryIcon';

export default function Home({ onOpenConsultation }) {
  const [heroForm, setHeroForm] = useState({
    name: '',
    phone: '',
    city: 'Gurugram',
    projectType: '3 BHK Residential',
    whatsappUpdates: true,
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!heroForm.name || !heroForm.phone) return;
    setHeroSubmitted(true);
  };

  const filteredGallery = galleryFilter === 'all' 
    ? galleryItems.slice(0, 6) 
    : galleryItems.filter(item => item.category.includes(galleryFilter)).slice(0, 6);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION (100% Real Work + Fast Booking Form) */}
      <section className="relative bg-gradient-to-b from-rose-50/60 via-white to-slate-50 pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Genuine Projects · Residential & Commercial Turnkey</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] font-heading">
                Step Into Your Dream Space in Just{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                  45 Days.
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Personalized modular kitchens, designer wardrobes, luxury jewellery showrooms, and commercial mall fitouts crafted with German machinery and certified 10-year flat warranty.
              </p>

              {/* HomeLane Style Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white shadow-soft border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">45-Day Move-In</div>
                    <div className="text-[11px] text-slate-500">Strict SLA commitment</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white shadow-soft border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">10-Year Warranty</div>
                    <div className="text-[11px] text-slate-500">Flat woodwork cover</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white shadow-soft border border-slate-100 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">100% Real Photos</div>
                    <div className="text-[11px] text-slate-500">Actual site execution</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/gallery"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition shadow flex items-center gap-2"
                >
                  <span>Explore Design Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/commercial"
                  className="px-6 py-3.5 border-2 border-slate-200 hover:border-rose-600 hover:text-rose-600 text-slate-700 font-bold text-sm rounded-xl transition flex items-center gap-2 bg-white"
                >
                  <Building2 className="w-4 h-4 text-rose-600" />
                  <span>Commercial & Shop Decor</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Lead Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  ✨ 100% Free Consultation
                </div>

                <div className="mb-5">
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    Talk to a Designer
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Book a free 3D design session for your home, shop, or office today.
                  </p>
                </div>

                {heroSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">Consultation Booked!</h4>
                    <p className="text-xs text-slate-600 mt-1.5">
                      Our designer will call you on <strong className="text-slate-800">{heroForm.phone}</strong> to confirm your slot.
                    </p>
                    <a
                      href={`https://wa.me/${companyContact.whatsappRaw}?text=Hi%20FourCube%20Decor,%20I%20just%20submitted%20my%20details%20for%20${heroForm.projectType}%20in%20${heroForm.city}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-emerald-700 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open WhatsApp Chat
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={heroForm.name}
                        onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Mobile Number
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="Enter 10-digit number"
                          pattern="[0-9]{10}"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          Property City
                        </label>
                        <select
                          value={heroForm.city}
                          onChange={(e) => setHeroForm({ ...heroForm, city: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-xs bg-white"
                        >
                          <option value="Gurugram">Gurugram</option>
                          <option value="Delhi NCR">Delhi NCR</option>
                          <option value="Noida">Noida</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Pune">Pune</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                          Project Type
                        </label>
                        <select
                          value={heroForm.projectType}
                          onChange={(e) => setHeroForm({ ...heroForm, projectType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-xs bg-white"
                        >
                          <option value="1/2/3 BHK Home">1/2/3 BHK Home</option>
                          <option value="Modular Kitchen">Modular Kitchen</option>
                          <option value="Mall Decor">Mall Decor</option>
                          <option value="Office Decor">Office Decor</option>
                          <option value="Jewellery Shop Decor">Jewellery Shop Decor</option>
                          <option value="Shop Decor">Shop Decor</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="heroWhatsappCheck"
                        checked={heroForm.whatsappUpdates}
                        onChange={(e) => setHeroForm({ ...heroForm, whatsappUpdates: e.target.checked })}
                        className="w-4 h-4 text-rose-600 rounded border-slate-300 focus:ring-rose-500"
                      />
                      <label htmlFor="heroWhatsappCheck" className="text-[11px] text-slate-600">
                        Receive 3D designs & updates on WhatsApp
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[10px] text-center text-slate-400">
                      🔒 Privacy Assured. 100% Free & No obligation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
          {statistics.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left border-b sm:border-b-0 sm:border-r last:border-0 border-slate-800 pb-4 sm:pb-0 px-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.suffix}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMMERCIAL DECOR SPOTLIGHT (The 4 New Pages Requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Commercial & Retail Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
              Commercial Decor Specialties
            </h2>
            <p className="text-slate-600 text-xs mt-1">
              Turnkey fitouts for Malls, Corporate Offices, Jewellery Showrooms & Retail Shops
            </p>
          </div>

          <Link
            to="/commercial"
            className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700"
          >
            <span>Explore All Commercial Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialOfferings.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft card-hover-lift flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow">
                  <CategoryIcon name={item.iconName} className="w-3.5 h-3.5 text-rose-600" />
                  <span>{item.title}</span>
                </div>
                <span className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  {item.badge}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Real Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. REAL PROJECT VIDEO & EXECUTION DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Turnkey Execution Video
              </span>
              <h3 className="text-3xl font-extrabold font-heading text-white">
                Real On-Site Workmanship
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Watch our trained execution team completing precision modular woodwork, illuminated wall niches, and seamless edge-banding with German automated precision.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pre-drilled 32mm system holes for dust-free on-site assembly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Original Blum & Hettich certified soft-close hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Strict 45-day guaranteed move-in handover</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation('Turnkey Project')}
                  className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-lg transition inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free 3D Plan & Site Visit</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black">
                <video
                  src={realDecorVideo}
                  controls
                  playsInline
                  className="w-full max-h-96 object-contain mx-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                ▶ Actual project site video from FourCube Decor installations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESIDENTIAL OFFERINGS (100% Real Photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Residential Woodwork
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">
            Modular Kitchens, Living & Wardrobes
          </h2>
          <p className="text-slate-600 text-xs mt-2">
            Engineered with German CNC machinery for micron accuracy and lifetime durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationOfferings.map((item) => (
            <Link
              key={item.id}
              to={`/category/${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft card-hover-lift flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                  <CategoryIcon name={item.iconName} className="w-3.5 h-3.5 text-rose-600" />
                  <span>{item.title}</span>
                </div>
                {item.tag && (
                  <span className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-800 group-hover:text-rose-600 transition font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-rose-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Designs</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. DESIGN GALLERY SHOWCASE WITH FILTER TABS */}
      <section className="bg-slate-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                100% Real Workmanship
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
                Completed Project Realizations
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setGalleryFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                galleryFilter === 'all'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setGalleryFilter('jewellery')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                galleryFilter === 'jewellery'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Jewellery Shops
            </button>
            <button
              onClick={() => setGalleryFilter('mall')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                galleryFilter === 'mall'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Mall Decor
            </button>
            <button
              onClick={() => setGalleryFilter('office')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                galleryFilter === 'office'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Office Decor
            </button>
            <button
              onClick={() => setGalleryFilter('kitchen')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                galleryFilter === 'kitchen'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Modular Kitchens
            </button>
            <button
              onClick={() => setGalleryFilter('wardrobe')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                galleryFilter === 'wardrobe'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              Wardrobes
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card card-hover-lift group border border-slate-100 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-900 shadow">
                    {item.categoryName}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-300 px-3 py-1 rounded-lg text-xs font-bold shadow">
                    {item.priceEstimate}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Finish: <span className="text-slate-800 font-semibold">{item.finish}</span>
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation(`Project - ${item.title}`)}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Get Free Quote for This Look
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS / 4-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Hassle-Free Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">
            Your Interior Journey in 4 Simple Steps
          </h2>
          <p className="text-slate-600 text-xs mt-2">
            From initial sketch to handover, experience smooth execution without contractor delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft relative flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-black text-rose-100 font-heading block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center text-xs font-semibold text-rose-600">
                <span>Phase {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">
            Loved by Over 1,500+ Happy Clients
          </h2>
          <p className="text-slate-600 text-xs mt-2">
            Real feedback from residential flat owners and retail store founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{testi.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{testi.name}</h4>
                  <p className="text-[11px] text-slate-400">{testi.location} · {testi.bhk}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 text-left font-bold text-sm text-slate-800 flex items-center justify-between hover:bg-slate-50 transition"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <Minus className="w-4 h-4 text-rose-600 shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
