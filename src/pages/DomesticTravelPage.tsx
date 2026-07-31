import React, { useState } from 'react';
import { TRAVEL_DESTINATIONS } from '../data/mockData';
import { TravelDestination } from '../types';
import { Compass, Train, MapPin, Calendar, Clock, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Sparkles, Send, Filter } from 'lucide-react';

interface DomesticTravelPageProps {
  onOpenConsultation: () => void;
}

export const DomesticTravelPage: React.FC<DomesticTravelPageProps> = ({ onOpenConsultation }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeTravelModal, setActiveTravelModal] = useState<TravelDestination | null>(null);

  // Filter domestic items only
  const domesticJourneys = TRAVEL_DESTINATIONS.filter(t => t.isDomestic);

  const types = ['All', 'Luxury Train', 'Palace', 'Wellness', 'Yacht'];

  const filteredJourneys = selectedType === 'All'
    ? domesticJourneys
    : domesticJourneys.filter(t => t.type === selectedType);

  return (
    <div className="pt-24 pb-20 bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Domestic Travel"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17] via-transparent to-[#0b0f17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121824] border border-[#c5a059]/40 text-[#c5a059] text-xs uppercase tracking-[0.25em] mb-6 shadow-xl">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Domestic Journeys & Escapes</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight mb-6">
              Heritage Palaces, Luxury Trains <br />
              <span className="italic font-light text-[#c5a059]">& Himalayan Sanctuaries</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Rediscover the splendor of domestic heritage with bespoke access to Maharajas’ Express presidential suites, royal palace sanctuaries in Rajasthan, private Kerala houseboat charters, and Himalayan wellness retreats.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#c5a059] text-[#0b0f17] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#e2c887] transition-all shadow-xl shadow-[#c5a059]/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Domestic Itinerary</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Travel Types Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-900/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Bespoke Domestic Pillars
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
            The Anahita Domestic Travel Advantage
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            Privileged entry, private aviation charters, and dedicated travel concierges at every point of your itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Train,
              title: 'Luxury Train Expeditions',
              subtitle: 'Maharajas’ Express & Palace on Wheels',
              desc: 'Presidential suite bookings, private champagne receptions at Taj Mahal, and private escorts at every station.'
            },
            {
              icon: MapPin,
              title: 'Royal Heritage Circuits',
              desc: 'Exclusive after-hours access to royal palace archives in Udaipur, Jaipur, Jodhpur, and private meetings with historians.'
            },
            {
              icon: Sparkles,
              title: 'Himalayan Wellness & Ayurveda',
              desc: 'Custom medical detoxes, private yoga masters, Tibetan energy healing, and pristine mountain air retreats.'
            },
            {
              icon: Compass,
              title: 'Private Jet & Charter Logistics',
              desc: 'Direct helicopter transfers to remote sanctuaries, tarmac VVIP clearance, and luxury chauffeur fleets.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#121824] p-6 border border-slate-800/80 hover:border-[#c5a059]/50 transition-all">
              <div className="w-10 h-10 rounded-full bg-[#0b0f17] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-lg text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journeys Collection */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Curated Expeditions
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
              Signature Domestic Itineraries
            </h2>
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all rounded-xs border ${
                  selectedType === t
                    ? 'bg-[#c5a059] text-[#0b0f17] font-bold border-[#c5a059]'
                    : 'bg-[#121824] text-slate-300 border-slate-800 hover:border-[#c5a059]/50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJourneys.map((item) => (
            <div
              key={item.id}
              className="bg-[#121824] border border-slate-800/80 overflow-hidden hover:border-[#c5a059]/60 transition-all flex flex-col group shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-[#0b0f17]/90 backdrop-blur-md text-[#c5a059] text-[10px] uppercase tracking-widest font-bold border border-[#c5a059]/30">
                    {item.region}
                  </span>
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-slate-200 text-[10px] uppercase tracking-widest font-bold border border-white/20">
                    {item.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-slate-200 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/10 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl text-white mb-3 group-hover:text-[#c5a059] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase text-[#c5a059] tracking-widest font-semibold block">Itinerary Highlights</span>
                    {item.itineraryHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider block">Exclusive Inclusion</span>
                    <span className="text-xs text-slate-300 font-medium">{item.exclusiveAccess}</span>
                  </div>
                  <button
                    onClick={() => setActiveTravelModal(item)}
                    className="px-5 py-2.5 bg-[#0b0f17] hover:bg-[#c5a059] text-slate-200 hover:text-[#0b0f17] text-xs uppercase tracking-wider font-semibold border border-[#c5a059]/40 transition-all flex items-center gap-2 shrink-0 ml-4"
                  >
                    <span>View Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Modal */}
      {activeTravelModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121824] border border-[#c5a059]/50 max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveTravelModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <div className="inline-block px-3 py-1 bg-[#c5a059]/20 text-[#c5a059] text-[10px] uppercase font-bold tracking-widest mb-3 border border-[#c5a059]/30">
              {activeTravelModal.region} • {activeTravelModal.duration}
            </div>
            <h3 className="font-serif-luxury text-2xl text-white mb-2">{activeTravelModal.title}</h3>

            <img
              src={activeTravelModal.image}
              alt={activeTravelModal.title}
              className="w-full h-56 object-cover rounded-xs mb-4 border border-slate-800"
            />

            <p className="text-slate-300 text-sm font-light mb-6 leading-relaxed">
              {activeTravelModal.description}
            </p>

            <h4 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">Highlights & Bespoke Access</h4>
            <div className="space-y-2 mb-8">
              {activeTravelModal.itineraryHighlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#0b0f17] border border-[#c5a059]/30 mb-6">
              <span className="text-[10px] uppercase text-[#c5a059] tracking-widest font-semibold block">Exclusive Concierge Guarantee</span>
              <p className="text-xs text-slate-300 mt-1">{activeTravelModal.exclusiveAccess}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveTravelModal(null);
                  onOpenConsultation();
                }}
                className="flex-1 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-widest text-center"
              >
                Inquire For Dates & Custom Itinerary
              </button>
              <button
                onClick={() => setActiveTravelModal(null)}
                className="px-4 py-3 border border-slate-700 text-slate-300 text-xs uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
