import React, { useState } from 'react';
import { Sparkles, Eye, X, ArrowRight, ShieldCheck, Check, Building2, Gem, ShoppingBag, Briefcase } from 'lucide-react';
import { galleryItems, navigationOfferings, commercialOfferings } from '../data/interiorData';
import CategoryIcon from '../components/CategoryIcon';

export default function Gallery({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filters = [
    { id: 'all', title: `All Projects (${galleryItems.length})`, icon: 'Sparkles' },
    { id: 'jewellery-shop-decor', title: 'Jewellery Shop', icon: 'Gem' },
    { id: 'mall-decor', title: 'Mall Decor', icon: 'Building' },
    { id: 'office-decor', title: 'Office Decor', icon: 'Briefcase' },
    { id: 'shop-decor', title: 'Shop Decor', icon: 'ShoppingBag' },
    { id: 'modular-kitchen', title: 'Modular Kitchen', icon: 'ChefHat' },
    { id: 'living-room', title: 'Living Room', icon: 'Sofa' },
    { id: 'bedroom', title: 'Bedroom', icon: 'BedDouble' },
    { id: 'wardrobe', title: 'Wardrobe', icon: 'DoorClosed' },
    { id: 'bathroom', title: 'Bathroom', icon: 'Bath' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => {
        const cat = item.category.toLowerCase();
        if (selectedCategory === 'jewellery-shop-decor') return cat.includes('jewel');
        if (selectedCategory === 'mall-decor') return cat.includes('mall');
        if (selectedCategory === 'office-decor') return cat.includes('office');
        if (selectedCategory === 'shop-decor') return cat.includes('shop') && !cat.includes('jewel');
        if (selectedCategory === 'modular-kitchen') return cat.includes('kitchen');
        if (selectedCategory === 'living-room') return cat.includes('living');
        if (selectedCategory === 'bedroom') return cat.includes('bed');
        if (selectedCategory === 'wardrobe') return cat.includes('wardrobe');
        if (selectedCategory === 'bathroom') return cat.includes('bath');
        return cat.includes(selectedCategory);
      });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            100% Genuine Project Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading mt-1">
            Real Work Gallery
          </h1>
          <p className="text-slate-600 text-sm mt-3">
            Explore authentic photos of completed modular kitchens, master bedrooms, wardrobes, luxury jewellery showrooms, mall outlets, and commercial spaces crafted by FourCube Decor.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedCategory(f.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                selectedCategory === f.id
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <CategoryIcon name={f.icon} className={`w-3.5 h-3.5 ${selectedCategory === f.id ? 'text-white' : 'text-slate-500'}`} />
              <span>{f.title}</span>
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
                className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow">
                    <Eye className="w-4 h-4 text-rose-600" /> View Project
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-900 shadow">
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
                    onClick={() => setActiveModalItem(item)}
                    className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                  >
                    Quick Preview
                  </button>
                  <button
                    onClick={() => onOpenConsultation(`Design - ${item.title}`)}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
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
                  className="w-full h-full object-contain bg-black"
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
                    <span className="text-slate-400 block">Material & Finish:</span>
                    <span className="font-bold text-slate-800">{activeModalItem.finish}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Warranty Period:</span>
                    <span className="font-bold text-emerald-600">10-Year Assured</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Estimated Timeline:</span>
                    <span className="font-bold text-slate-800">45-Day Guaranteed Handover</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Design Session:</span>
                    <span className="font-bold text-rose-600">Free 3D Layout</span>
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
                      onOpenConsultation(`Gallery - ${activeModalItem.title}`);
                    }}
                    className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Book Free 3D Customization For My Space
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
