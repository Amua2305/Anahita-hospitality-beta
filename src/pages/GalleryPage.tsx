import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryCategory } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const CATEGORIES: ('All' | GalleryCategory)[] = ['All', 'Hotels', 'Weddings', 'Events', 'Travel'];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | GalleryCategory>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem =
    activeLightboxIndex !== null && activeLightboxIndex >= 0 && activeLightboxIndex < filteredItems.length
      ? filteredItems[activeLightboxIndex]
      : null;

  const handleLightboxNavigate = (direction: 'next' | 'prev') => {
    if (activeLightboxIndex === null || filteredItems.length === 0) return;
    if (direction === 'next') {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    } else {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleLightboxNavigate('next');
      if (e.key === 'ArrowLeft') handleLightboxNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <div id="gallery-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans min-h-screen">
      {/* HEADER SECTION */}
      <section id="gallery-header" className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
              Photo Gallery
            </h1>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#c5a059] text-[#0b0f17] shadow-lg shadow-[#c5a059]/20'
                    : 'bg-[#121824] text-slate-300 hover:text-white hover:bg-[#1a2233] border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY IMAGES GRID */}
      <section id="gallery-grid-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative aspect-4/3 rounded-xs overflow-hidden border border-slate-800 hover:border-[#c5a059] bg-[#0e1420] cursor-pointer transition-all duration-300 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.category}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Subtle overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-3.5 left-3.5 bg-[#0b0f17]/85 backdrop-blur-md px-3 py-1 rounded-xs border border-[#c5a059]/40 text-[#c5a059] text-[11px] font-bold uppercase tracking-wider shadow">
                {item.category}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3.5 right-3.5 p-2 bg-black/70 text-white rounded-xs border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLEAN FULLSCREEN LIGHTBOX */}
      {activeItem && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in select-none"
        >
          {/* Close Button */}
          <button
            id="btn-close-lightbox"
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 z-20 p-2.5 text-slate-300 hover:text-white bg-black/60 hover:bg-black rounded-full border border-white/20 transition-all"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            id="btn-lightbox-prev"
            onClick={() => handleLightboxNavigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#0b0f17] rounded-full border border-white/20 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            id="btn-lightbox-next"
            onClick={() => handleLightboxNavigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-[#c5a059] text-white hover:text-[#0b0f17] rounded-full border border-white/20 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Category Pill Only */}
          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center justify-center space-y-3">
            <div className="relative max-h-[82vh] w-auto overflow-hidden rounded-xs border border-slate-800 bg-black flex items-center justify-center shadow-2xl">
              <img
                src={activeItem.image}
                alt={activeItem.category}
                className="max-h-[82vh] max-w-[90vw] object-contain"
              />
            </div>

            {/* Clean Category Label */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#121824] border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-widest rounded-xs">
                {activeItem.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


