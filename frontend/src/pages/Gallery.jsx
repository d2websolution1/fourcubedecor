import React, { useState } from 'react';
import { Sparkles, Eye, X, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { galleryItems, navigationOfferings } from '../data/interiorData';
import CategoryIcon from '../components/CategoryIcon';

export default function Gallery({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Inspiration Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mt-1">
            Interior Design Gallery
          </h1>
          <p className="text-slate-600 text-sm mt-3">
            Browse through hundreds of realized home interiors, modular kitchens, and custom wardrobe setups created by FourCube Decor designers.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              selectedCategory === 'all'
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>All Designs ({galleryItems.length})</span>
          </button>

          {navigationOfferings.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <CategoryIcon name={cat.iconName} className={`w-3.5 h-3.5 ${selectedCategory === cat.id ? 'text-white' : 'text-slate-500'}`} />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 group card-hover-lift flex flex-col justify-between"
            >
              <div 
                className="relative h-64 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow">
                    <Eye className="w-4 h-4 text-rose-600" /> View Details
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-900 shadow">
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
                  <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-3">
                    <span>Size: <strong className="text-slate-700">{item.size}</strong></span>
                    <span>Finish: <strong className="text-slate-700">{item.finish}</strong></span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.features.map((f, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActiveModalItem(item);
                    }}
                    className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                  >
                    Quick Preview
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold px-3 py-1.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition flex items-center gap-1 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Book This Look
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for item details */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-100 max-h-[90vh] flex flex-col">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-72 sm:h-96 w-full relative bg-black shrink-0">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-bold">
                  {activeModalItem.categoryName} · {activeModalItem.priceEstimate}
                </div>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {activeModalItem.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Recommended Area:</span>
                    <span className="font-bold text-slate-800">{activeModalItem.size}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Material & Finish:</span>
                    <span className="font-bold text-slate-800">{activeModalItem.finish}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Estimated Budget:</span>
                    <span className="font-bold text-rose-600">{activeModalItem.priceEstimate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Warranty Period:</span>
                    <span className="font-bold text-emerald-600">10-Year Assured</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Key Specifications & Inclusions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalItem.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 p-2 rounded-lg">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenConsultation();
                    }}
                    className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Book Free 3D Customization For My Home
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
