import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Sparkles, Filter, Maximize2, X, ChevronLeft, ChevronRight, Instagram, MapPin } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hotels', 'Villas', 'Weddings', 'Events', 'Travel'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleLightboxNavigate = (direction: 'next' | 'prev') => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeLightboxItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveLightboxItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveLightboxItem(filteredItems[prevIndex]);
    }
  };

  return (
    <div id="gallery-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="gallery-hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ"
            alt="Gallery Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#0b0f17]/80 to-[#0b0f17]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#121824] text-amber-200 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Visual Curation & Stories</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-luxury text-white font-medium leading-tight">
            A Visual Journey through Excellence
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            An immersive glimpse into our private properties, bespoke events, and extraordinary guest moments across the globe.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] rounded-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#c5a059] text-[#0b0f17] shadow-lg'
                    : 'bg-[#121824] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY MASONRY GRID */}
      <section id="gallery-masonry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative h-80 rounded-xs overflow-hidden border border-slate-800 hover:border-[#c5a059] cursor-pointer transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xs border border-[#c5a059]/30 text-amber-300 text-[10px] font-semibold uppercase tracking-widest">
                {item.category}
              </div>

              <div className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#0b0f17] rounded-full transition-all opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-1 text-[11px] text-[#c5a059]">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-lg font-serif-luxury text-white font-semibold">{item.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div id="lightbox-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 animate-in fade-in duration-200">
          <button
            id="btn-close-lightbox"
            onClick={() => setActiveLightboxItem(null)}
            className="absolute top-6 right-6 z-20 p-3 text-slate-300 hover:text-white bg-black/50 hover:bg-black rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav prev */}
          <button
            id="btn-lightbox-prev"
            onClick={() => handleLightboxNavigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#0b0f17] rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Nav next */}
          <button
            id="btn-lightbox-next"
            onClick={() => handleLightboxNavigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#0b0f17] rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <div className="relative max-h-[70vh] w-full overflow-hidden rounded-xs border border-slate-800 flex items-center justify-center bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="text-center space-y-1 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#c5a059]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeLightboxItem.location}</span>
                <span className="text-slate-600">•</span>
                <span className="uppercase text-[10px] tracking-widest">{activeLightboxItem.category}</span>
              </div>
              <h3 className="text-2xl font-serif-luxury text-white font-semibold">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{activeLightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* SOCIAL CANVAS GRID */}
      <section id="social-canvas-section" className="py-20 bg-[#070a10] border-t border-amber-900/20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>#AnahitaExcellence</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-luxury text-white font-medium">
              Follow Our Luxury Journey
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
              <div key={idx} className="h-40 rounded-xs overflow-hidden relative group">
                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-amber-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
