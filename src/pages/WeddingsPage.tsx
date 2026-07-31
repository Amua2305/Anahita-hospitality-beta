import React, { useState } from 'react';
import { WEDDING_PACKAGES } from '../data/mockData';
import { WeddingPackage } from '../types';
import { Sparkles, Heart, Crown, Calendar, Users, MapPin, Music, Camera, Utensils, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Calculator, Send } from 'lucide-react';

interface WeddingsPageProps {
  onOpenConsultation: () => void;
}

export const WeddingsPage: React.FC<WeddingsPageProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePackageModal, setActivePackageModal] = useState<WeddingPackage | null>(null);

  // Estimator State
  const [estGuests, setEstGuests] = useState<number>(200);
  const [estVenueType, setEstVenueType] = useState<string>('Royal Palace');
  const [estDays, setEstDays] = useState<number>(3);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Royal Floral Architecture & Sets',
    'Michelin & Royal Heritage Catering',
    'Guest Hospitality & VVIP Airport Escorts'
  ]);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const categories = ['All', 'Royal Palace', 'Beachfront Resort', 'Heritage Fort', 'International Riviera'];

  const filteredPackages = selectedCategory === 'All'
    ? WEDDING_PACKAGES
    : WEDDING_PACKAGES.filter(p => p.category === selectedCategory);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const calculateEstimate = () => {
    let basePerGuest = 1200; // $1200 per guest standard ultra-lux
    if (estVenueType === 'Royal Palace') basePerGuest = 1800;
    if (estVenueType === 'International Riviera') basePerGuest = 2500;
    if (estVenueType === 'Heritage Fort') basePerGuest = 1500;

    let dayMultiplier = estDays * 0.85;
    let servicesAddon = selectedServices.length * 250;

    let estMin = Math.round((basePerGuest + servicesAddon) * estGuests * dayMultiplier / 1000) * 1000;
    let estMax = Math.round(estMin * 1.35 / 1000) * 1000;

    return { estMin, estMax };
  };

  const { estMin, estMax } = calculateEstimate();

  return (
    <div className="pt-24 pb-20 bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
            alt="Royal Luxury Wedding"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17] via-transparent to-[#0b0f17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121824] border border-[#c5a059]/40 text-[#c5a059] text-xs uppercase tracking-[0.25em] mb-6 shadow-xl">
              <Crown className="w-3.5 h-3.5" />
              <span>Grand Weddings & Celebrations</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight mb-6">
              Destination Wedding Planning <br />
              <span className="italic font-light text-[#c5a059]">& Royal Celebrations</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Partnering with premier wedding experts (Vision Vivaah standard), Anahita plans unforgettable wedding celebrations in royal Indian palaces, Maldivian sandbanks, and Amalfi Coast cliffside estates.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#c5a059] text-[#0b0f17] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#e2c887] transition-all shadow-xl shadow-[#c5a059]/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Wedding Dates</span>
              </button>
              <a
                href="#wedding-estimator"
                className="px-6 py-3.5 border border-amber-900/40 bg-[#121824]/60 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-xs hover:border-[#c5a059] transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#c5a059]" />
                <span>Estimate Wedding Cost</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Pillars Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-900/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Complete Turnkey Curation
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
            Every Detail Handcrafted to Perfection
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            From royal palace permissions and custom stage architecture to Michelin-level culinary feasts and celebrity artist curations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Crown,
              title: 'Royal Venue & Palace Buyouts',
              desc: 'Exclusive private takeovers of heritage forts in Udaipur, Jaipur, Jodhpur, and private island sanctuaries in the Maldives or Europe.'
            },
            {
              icon: Sparkles,
              title: 'Bespoke Theme & Decor Sets',
              desc: 'Intricate floral architecture, 3D projection mapping, ambient lighting design, and immersive Sangeet stage production.'
            },
            {
              icon: Utensils,
              title: 'Michelin & Heritage Gastronomy',
              desc: 'Curated dining menus blending authentic Royal Marwari, Italian fine-dining, and Asian fusion with international mixology bars.'
            },
            {
              icon: Music,
              title: 'Celebrity Artists & DJ Lineups',
              desc: 'Exclusive booking of top Bollywood performers, international symphony orchestras, live acoustic acts, and world-class DJs.'
            },
            {
              icon: Users,
              title: 'VVIP Guest Hospitality Concierge',
              desc: 'Airport tarmac escorts, luxury motorcade logistics, personalized welcome hampers, and 24/7 room butler service for guests.'
            },
            {
              icon: Camera,
              title: 'Cinematic Storytelling & PR',
              desc: 'Renowned international fashion photographers, drone cinematographers, live high-definition broadcasting, and private media control.'
            }
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#121824] p-8 border border-slate-800/80 hover:border-[#c5a059]/50 transition-all group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-[#0b0f17] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0b0f17] transition-all">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-white mb-3 group-hover:text-[#c5a059] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Wedding Destinations Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Sovereign Destinations
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
              Signature Wedding Collections
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all rounded-xs border ${
                  selectedCategory === cat
                    ? 'bg-[#c5a059] text-[#0b0f17] font-bold border-[#c5a059]'
                    : 'bg-[#121824] text-slate-300 border-slate-800 hover:border-[#c5a059]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#121824] border border-slate-800/80 overflow-hidden hover:border-[#c5a059]/60 transition-all flex flex-col group shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0b0f17]/90 backdrop-blur-md text-[#c5a059] text-[10px] uppercase tracking-widest font-bold border border-[#c5a059]/30">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 bg-black/60 backdrop-blur-md p-2.5 rounded-xs border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                    {pkg.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                    {pkg.guestCapacity}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl text-white mb-3 group-hover:text-[#c5a059] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pkg.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider block">Est. Investment</span>
                    <span className="text-sm font-serif-luxury text-[#c5a059] font-medium">{pkg.startingPrice}</span>
                  </div>
                  <button
                    onClick={() => setActivePackageModal(pkg)}
                    className="px-5 py-2.5 bg-[#0b0f17] hover:bg-[#c5a059] text-slate-200 hover:text-[#0b0f17] text-xs uppercase tracking-wider font-semibold border border-[#c5a059]/40 transition-all flex items-center gap-2"
                  >
                    <span>View Wedding Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Wedding Budget & Scope Estimator */}
      <section id="wedding-estimator" className="py-20 bg-[#0e1420] border-y border-amber-900/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium flex items-center justify-center gap-2">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Planning Tool
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
              Custom Wedding Budget & Scope Planner
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Configure your expected guest count, venue archetype, and preferred bespoke services for an instant scope orientation.
            </p>
          </div>

          <div className="bg-[#121824] p-8 sm:p-10 border border-slate-800 shadow-2xl rounded-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
              {/* Guest Count */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                  Expected Guests ({estGuests})
                </label>
                <input
                  type="range"
                  min="50"
                  max="800"
                  step="25"
                  value={estGuests}
                  onChange={(e) => setEstGuests(Number(e.target.value))}
                  className="w-full accent-[#c5a059] bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>50 Guests</span>
                  <span>400 Guests</span>
                  <span>800+ Guests</span>
                </div>
              </div>

              {/* Venue Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                  Venue Archetype
                </label>
                <select
                  value={estVenueType}
                  onChange={(e) => setEstVenueType(e.target.value)}
                  className="w-full bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-2.5 text-xs font-medium focus:border-[#c5a059] focus:outline-none"
                >
                  <option value="Royal Palace">Royal Palace (Udaipur / Jaipur)</option>
                  <option value="Heritage Fort">Heritage Fort (Jodhpur / Jaisalmer)</option>
                  <option value="Beachfront Resort">Beachfront Resort (Maldives / Goa)</option>
                  <option value="International Riviera">International Riviera (Italy / France)</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                  Celebration Duration
                </label>
                <select
                  value={estDays}
                  onChange={(e) => setEstDays(Number(e.target.value))}
                  className="w-full bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-2.5 text-xs font-medium focus:border-[#c5a059] focus:outline-none"
                >
                  <option value="2">2 Days (Intimate Soirée)</option>
                  <option value="3">3 Days (Grand Wedding)</option>
                  <option value="4">4 Days (Extended Royal Festival)</option>
                </select>
              </div>
            </div>

            {/* Service Checkboxes */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-4">
                Include Turnkey Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Royal Floral Architecture & Sets',
                  'Michelin & Royal Heritage Catering',
                  'Celebrity Artist & DJ Curation',
                  'Guest Hospitality & VVIP Airport Escorts',
                  'Private Charter Flights & Helicopter Transport',
                  'Cinematic Photography & Drone Film'
                ].map((srv) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-3 text-left text-xs rounded-xs border transition-all flex items-center gap-2.5 ${
                        isChecked
                          ? 'bg-[#c5a059]/10 border-[#c5a059] text-white font-medium'
                          : 'bg-[#0b0f17] border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#c5a059] border-[#c5a059] text-[#0b0f17]' : 'border-slate-700'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span>{srv}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Output Display */}
            <div className="bg-[#0b0f17] p-6 border border-[#c5a059]/30 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] block font-medium">Estimated Turnkey Budget Guidance</span>
                <div className="text-2xl sm:text-3xl font-serif-luxury text-white mt-1">
                  ${estMin.toLocaleString()} – ${estMax.toLocaleString()} USD
                </div>
                <p className="text-slate-400 text-xs mt-1 font-light">
                  Includes full venue management, hospitality concierge, decor sets & guest logistics for {estGuests} guests over {estDays} days.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full md:w-auto px-6 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-xl"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Wedding Brief</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {activePackageModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121824] border border-[#c5a059]/50 max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePackageModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <div className="inline-block px-3 py-1 bg-[#c5a059]/20 text-[#c5a059] text-[10px] uppercase font-bold tracking-widest mb-3 border border-[#c5a059]/30">
              {activePackageModal.category}
            </div>
            <h3 className="font-serif-luxury text-2xl text-white mb-2">{activePackageModal.title}</h3>
            <p className="text-slate-400 text-xs mb-4">{activePackageModal.location} • {activePackageModal.guestCapacity}</p>

            <img
              src={activePackageModal.image}
              alt={activePackageModal.title}
              className="w-full h-56 object-cover rounded-xs mb-4 border border-slate-800"
            />

            <p className="text-slate-300 text-sm font-light mb-6 leading-relaxed">
              {activePackageModal.description}
            </p>

            <h4 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">Key Turnkey Highlights</h4>
            <div className="space-y-2 mb-8">
              {activePackageModal.highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActivePackageModal(null);
                  onOpenConsultation();
                }}
                className="flex-1 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-widest text-center"
              >
                Inquire For Dates & Royal Pricing
              </button>
              <button
                onClick={() => setActivePackageModal(null)}
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
