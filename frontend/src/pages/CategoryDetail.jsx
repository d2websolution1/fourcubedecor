import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Check, Clock, Phone, ChevronRight } from 'lucide-react';
import { navigationOfferings, galleryItems, companyContact } from '../data/interiorData';
import CategoryIcon from '../components/CategoryIcon';

export default function CategoryDetail({ onOpenConsultation }) {
  const { id } = useParams();
  
  // Find current offering
  const currentOffering = navigationOfferings.find(o => o.id === id) || navigationOfferings[0];
  
  // Find items belonging to this category
  const relatedGallery = galleryItems.filter(item => item.category === currentOffering.id);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-rose-600 transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/gallery" className="hover:text-rose-600 transition">Offerings</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{currentOffering.title}</span>
        </div>

        {/* Category Hero Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold">
              <CategoryIcon name={currentOffering.iconName} className="w-4 h-4 text-rose-600" />
              <span>Premium Modular Customization</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Customized {currentOffering.title} Designs
            </h1>

            <p className="text-slate-600 text-sm leading-relaxed">
              {currentOffering.description}. Engineered to maximize every cubic inch of storage with ergonomic hardware, certified damp-proof materials, and high-gloss or super-matte finishes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Lead Time</span>
                <span className="font-bold text-slate-800">45 Days Guaranteed</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Warranty</span>
                <span className="font-bold text-slate-800">10-Year Assured</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl col-span-2 sm:col-span-1">
                <span className="text-slate-400 block">Design Session</span>
                <span className="font-bold text-rose-600">Free 3D Layout</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Design Consultation</span>
              </button>
              <a
                href={`tel:${companyContact.phoneRaw}`}
                className="px-5 py-3 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Talk to Designer</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={currentOffering.image}
              alt={currentOffering.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl text-xs flex items-center justify-between shadow">
              <span className="font-bold text-slate-800">Laser-Cut German Finishes</span>
              <span className="text-rose-600 font-bold">100% Custom Sizes</span>
            </div>
          </div>
        </div>

        {/* Subcategories / Layout Variants */}
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4">
            Popular {currentOffering.title} Layouts & Variants
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {currentOffering.subcategories.map((sub, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 hover:border-rose-400 hover:bg-rose-50/40 transition group cursor-pointer"
                onClick={onOpenConsultation}
              >
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mb-2 group-hover:bg-rose-600 group-hover:text-white transition">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-sm text-slate-800 group-hover:text-rose-600 transition">
                  {sub}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1">
                  Custom sized to fit your floor layout seamlessly.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery for this category */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Featured {currentOffering.title} Realizations
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Installed in verified homeowner apartments
              </p>
            </div>
            <Link
              to="/gallery"
              className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
            >
              <span>View All Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGallery.length > 0 ? (
              relatedGallery.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 group flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-300 px-3 py-1 rounded-lg text-xs font-bold">
                      {item.priceEstimate}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-base text-slate-900 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Dimensions: <strong>{item.size}</strong> · Finish: <strong>{item.finish}</strong>
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.features.map((f, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={onOpenConsultation}
                      className="w-full mt-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Get Free Estimate For This Design
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // Fallback gallery items
              galleryItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 group flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.finish}</p>
                    <button
                      onClick={onOpenConsultation}
                      className="w-full mt-4 py-2 bg-rose-50 text-rose-700 font-bold text-xs rounded-xl"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Other Offerings Links */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl">
          <h3 className="text-xl font-bold font-heading mb-4">
            Explore Other Interior Spaces
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {navigationOfferings.filter(o => o.id !== currentOffering.id).slice(0, 4).map((other) => (
              <Link
                key={other.id}
                to={`/category/${other.id}`}
                className="p-3 bg-slate-800/80 hover:bg-rose-700 rounded-xl transition flex items-center gap-2.5 text-xs font-semibold"
              >
                <CategoryIcon name={other.iconName} className="w-4 h-4 text-amber-300" />
                <span>{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
