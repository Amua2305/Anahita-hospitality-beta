import React, { useState } from 'react';
import { Property } from '../types';
import { X, Star, MapPin, Building, TrendingUp, Check, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onOpenConsultation }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!property) return null;

  const images = property.galleryImages.length > 0 ? property.galleryImages : [property.image];

  return (
    <div id="property-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="property-modal-dialog"
        className="bg-[#0e1420] border border-[#c5a059]/40 rounded-xs shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative text-slate-200 p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          id="btn-close-property-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-black/50 hover:bg-black rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Gallery Preview */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xs border border-slate-800 group">
              <img
                src={images[activeImageIdx]}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xs border border-[#c5a059]/30 text-amber-300 text-xs font-medium uppercase tracking-widest">
                {property.category}
              </div>

              {images.length > 1 && (
                <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="pointer-events-auto p-1.5 bg-black/60 hover:bg-black text-white rounded-full transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="pointer-events-auto p-1.5 bg-black/60 hover:bg-black text-white rounded-full transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-16 w-24 shrink-0 rounded-xs overflow-hidden border transition-all ${
                      activeImageIdx === idx ? 'border-[#c5a059] ring-1 ring-[#c5a059]' : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Performance Metrics Box */}
            <div className="bg-[#121824] p-4 rounded-xs border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
                Venue & Accommodation Capacity
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#080c14] p-2.5 rounded-xs border border-slate-800">
                  <span className="text-slate-400 text-[10px] block uppercase">Keys / Villas</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{property.keysCount}</span>
                </div>
                <div className="bg-[#080c14] p-2.5 rounded-xs border border-slate-800">
                  <span className="text-slate-400 text-[10px] block uppercase">Guest Satisfaction</span>
                  <span className="text-amber-300 font-bold text-sm mt-0.5 block">{property.occupancyRate}</span>
                </div>
                <div className="bg-[#080c14] p-2.5 rounded-xs border border-slate-800">
                  <span className="text-slate-400 text-[10px] block uppercase">Guest Rating</span>
                  <span className="text-emerald-400 font-bold text-sm mt-0.5 block">{property.roiIncrease}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Property Details */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.location}</span>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    <span>{property.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white font-semibold mt-1">
                  {property.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Architectural Curation: {property.architect}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-b border-slate-800 py-3">
                {property.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-slate-200 font-semibold mb-3">
                  Property Highlights & Curated Amenities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {property.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="btn-property-modal-audit"
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full sm:flex-1 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Inquire For Booking / Event</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
