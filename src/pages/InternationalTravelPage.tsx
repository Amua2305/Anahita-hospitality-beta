import React, { useState } from 'react';
import { TRAVEL_DESTINATIONS } from '../data/mockData';
import { TravelDestination } from '../types';
import { Globe, Plane, MapPin, Calendar, Clock, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Anchor, Sun, Send } from 'lucide-react';

interface InternationalTravelPageProps {
  onOpenConsultation: () => void;
}

export const InternationalTravelPage: React.FC<InternationalTravelPageProps> = ({ onOpenConsultation }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeTravelModal, setActiveTravelModal] = useState<TravelDestination | null>(null);

  // Filter international items only
  const internationalJourneys = TRAVEL_DESTINATIONS.filter(t => !t.isDomestic);

  const regions = ['All', 'Europe', 'Maldives & Asia'];

  const filteredJourneys = selectedRegion === 'All'
    ? internationalJourneys
    : internationalJourneys.filter(t => t.region === selectedRegion);

  return (
    <div className="pt-24 pb-20 bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000"
            alt="Ultra-Luxury International Travel"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17] via-transparent to-[#0b0f17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121824] border border-[#c5a059]/40 text-[#c5a059] text-xs uppercase tracking-[0.25em] mb-6 shadow-xl">
              <Globe className="w-3.5 h-3.5" />
              <span>Outbound Global Ultra-Luxury Expeditions</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight mb-6">
              Private Islands, Superyacht Charters <br />
              <span className="italic font-light text-[#c5a059]">& Alpine Hideaways</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Bespoke international journeys tailored for discerning travelers. From private Maldivian island takeovers and Amalfi Coast yachting to Kyoto Zen tea sanctuaries and Courchevel ski-in/ski-out chalets.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#c5a059] text-[#0b0f17] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#e2c887] transition-all shadow-xl shadow-[#c5a059]/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Design Custom Global Itinerary</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Concierge Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-900/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Global Service Standards
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
            White-Glove International Concierge
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            Sovereign diplomacy protocols, private aviation, Michelin dining allocations, and European butler service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Plane,
              title: 'Private Jet Charters',
              desc: 'Point-to-point long-range Bombardier and Gulfstream private jet charters with tarmac VIP customs clearance.'
            },
            {
              icon: Anchor,
              title: 'Superyacht Charters',
              desc: '50m+ megayacht charters across Amalfi, St. Tropez, Monaco, and Maldivian atolls with full crew and private chefs.'
            },
            {
              icon: Sun,
              title: 'Private Island Takeovers',
              desc: 'Complete island buyouts for total privacy, tailored security details, and 24/7 personalized butler service.'
            },
            {
              icon: ShieldCheck,
              title: 'Diplomatic Visa & VIP Fast-Track',
              desc: 'Expedited diplomatic visa processing, airport meet-and-assist, and multi-currency wealth concierge.'
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
              Worldwide Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
              Signature International Hideaways
            </h2>
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all rounded-xs border ${
                  selectedRegion === r
                    ? 'bg-[#c5a059] text-[#0b0f17] font-bold border-[#c5a059]'
                    : 'bg-[#121824] text-slate-300 border-slate-800 hover:border-[#c5a059]/50'
                }`}
              >
                {r}
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
                    <span className="text-[10px] uppercase text-[#c5a059] tracking-widest font-semibold block">Curated Highlights</span>
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
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider block">Signature Service</span>
                    <span className="text-xs text-slate-300 font-medium">{item.exclusiveAccess}</span>
                  </div>
                  <button
                    onClick={() => setActiveTravelModal(item)}
                    className="px-5 py-2.5 bg-[#0b0f17] hover:bg-[#c5a059] text-slate-200 hover:text-[#0b0f17] text-xs uppercase tracking-wider font-semibold border border-[#c5a059]/40 transition-all flex items-center gap-2 shrink-0 ml-4"
                  >
                    <span>View Expedition</span>
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

            <h4 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">Highlights & VIP Inclusions</h4>
            <div className="space-y-2 mb-8">
              {activeTravelModal.itineraryHighlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#0b0f17] border border-[#c5a059]/30 mb-6">
              <span className="text-[10px] uppercase text-[#c5a059] tracking-widest font-semibold block">Sovereign Concierge Standard</span>
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
                Inquire For Dates & Custom Charter
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
