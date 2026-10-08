import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Gem, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  X
} from 'lucide-react';
import { jewelleryDecorData } from '../data/decorMedia';
import { companyContact } from '../data/interiorData';

export default function JewelleryDecor({ onOpenConsultation }) {
  const [activeModalItem, setActiveModalItem] = useState(null);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-rose-600 transition">Home</Link>
          <span>/</span>
          <Link to="/commercial" className="hover:text-rose-600 transition">Commercial Decor</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Jewellery Shop Decor</span>
        </div>

        {/* Hero Section with REAL Photo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold">
              <Gem className="w-4 h-4 text-rose-600" />
              <span>Luxury Gold & Diamond Showroom Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
              Luxury Jewellery Shop Decor & Showroom Architecture
            </h1>

            <p className="text-slate-600 text-sm leading-relaxed">
              We engineer specialized jewellery retail spaces with anti-theft tempered glass display counters, true-to-life 4000K gemstone lighting, individual necklace wall niche boxes, Candere-inspired classical mouldings, and private bridal VIP trial suites.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Lighting Science</span>
                <span className="font-bold text-slate-800">4000K Gemstone-True CRI 95+</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Security Features</span>
                <span className="font-bold text-slate-800">Anti-Theft Toughened Glass</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl col-span-2 sm:col-span-1">
                <span className="text-slate-400 block">Delivery Promise</span>
                <span className="font-bold text-rose-600">45-Day Handover Guaranteed</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Jewellery Shop Decor')}
                className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Jewellery Showroom 3D Consultation</span>
              </button>
              <a
                href={`tel:${companyContact.phoneRaw}`}
                className="px-5 py-3.5 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call Jewellery Decor Expert</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl bg-slate-900">
            <img
              src={jewelleryDecorData[0].image}
              alt="Jewellery Showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl text-xs flex items-center justify-between shadow">
              <span className="font-bold text-slate-900">Real Project: Gold & Diamond Showroom</span>
              <span className="text-rose-600 font-bold">100% Real Photo</span>
            </div>
          </div>
        </div>

        {/* Real Jewellery Projects Gallery */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Real Work Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
                Jewellery Showroom Counters, Wall Niches & Boutiques
              </h2>
            </div>
            <p className="text-xs text-slate-500">All photos shown are genuine projects executed by FourCube Decor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jewelleryDecorData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 group flex flex-col justify-between"
              >
                <div 
                  className="relative h-64 sm:h-72 overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setActiveModalItem(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow">
                      <Eye className="w-4 h-4 text-rose-600" /> View Project Photo
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Real Work
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalItem(project)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900"
                    >
                      Enlarge
                    </button>
                    <button
                      onClick={() => onOpenConsultation(`Jewellery Decor - ${project.title}`)}
                      className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Get Estimate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Security & Lighting Engineering Details */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Jewellery Engineering</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Precision Architecture For High-Value Retail
            </h3>
            <p className="text-xs text-slate-300 mt-2">
              Unlike normal retail shops, jewellery showrooms require specialized lighting color temperatures (CRI 95+), anti-theft counter engineering, and soundproof private negotiation spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 bg-slate-800 rounded-2xl space-y-2">
              <span className="font-bold text-white text-sm block">True-to-Life CRI 95+</span>
              <p className="text-slate-400">Custom 4000K daylight LED strips bring out maximum brilliance in diamonds, gold, and polki stones.</p>
            </div>
            <div className="p-5 bg-slate-800 rounded-2xl space-y-2">
              <span className="font-bold text-white text-sm block">12mm Toughened Glass</span>
              <p className="text-slate-400">Heavy-duty tempered glass display tops with concealed electromagnetic locking channels.</p>
            </div>
            <div className="p-5 bg-slate-800 rounded-2xl space-y-2">
              <span className="font-bold text-white text-sm block">Private VIP Suites</span>
              <p className="text-slate-400">Candere-inspired wall wainscoting with sound-dampened bridal trial mirrors and velvet comfort chairs.</p>
            </div>
            <div className="p-5 bg-slate-800 rounded-2xl space-y-2">
              <span className="font-bold text-white text-sm block">German Prefab Quality</span>
              <p className="text-slate-400">Cabinet modules prefabricated in our German machinery plant for micron fit and clean, dust-free site assembly.</p>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-100 flex flex-col max-h-[90vh]">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="h-80 sm:h-96 w-full relative bg-black shrink-0">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain bg-black"
                />
              </div>
              <div className="p-6 overflow-y-auto space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeModalItem.desc}
                </p>
                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenConsultation(`Jewellery Decor - ${activeModalItem.title}`);
                    }}
                    className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition"
                  >
                    Request Jewellery Showroom Estimate
                  </button>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="py-3 px-5 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
