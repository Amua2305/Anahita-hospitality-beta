import React from 'react';
import { PageType } from '../types';
import { SERVICES } from '../data/mockData';
import { Sparkles, Crown, Compass, Globe, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange, onOpenConsultation }) => {
  return (
    <div id="services-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="services-hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
            alt="Anahita Experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#0b0f17]/80 to-[#0b0f17]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#121824] text-amber-200 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Real Estate • Weddings • Travel • MICE Events</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-luxury text-white font-medium leading-tight">
            Our Core Services & Divisions
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            From prime luxury real estate acquisitions and royal palace weddings to heritage tours, international holidays, and corporate MICE events.
          </p>
        </div>
      </section>

      {/* SPECIALIZED DIVISIONS CARD GRID */}
      <section id="specialized-divisions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-900/20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Dedicated Divisions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-1">
            Explore Our 5 Service Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            {
              page: 'real-estate' as PageType,
              title: 'Luxury Real Estate',
              badge: 'Estate Consultant',
              desc: 'Luxury beachfront villas, mountain retreats, boutique resort acquisitions & land development plots.',
              image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
            },
            {
              page: 'weddings' as PageType,
              title: 'Weddings & Celebrations',
              badge: 'Wedding',
              desc: 'Royal palace weddings in Udaipur, Amalfi Coast cliffside celebrations & Maldivian beach ceremonies.',
              image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
            },
            {
              page: 'domestic-travel' as PageType,
              title: 'Domestic Travel',
              badge: 'Domestic Destination',
              desc: 'Maharajas’ Express luxury trains, Rajasthan royal palace stays & Kerala backwater houseboat cruises.',
              image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
            },
            {
              page: 'international-travel' as PageType,
              title: 'International Travel',
              badge: 'international holidays',
              desc: 'Maldives overwater villas, Amalfi Coast superyachts, Kyoto cultural tours & Alpine ski chalets.',
              image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
            },
            {
              page: 'mice' as PageType,
              title: 'MICE & Corporate Events',
              badge: 'MICEpro Standard',
              desc: 'Executive board meetings, employee incentive retreats, large conventions & luxury product launches.',
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
            }
          ].map((item) => (
            <div
              key={item.page}
              onClick={() => onPageChange(item.page)}
              className="bg-[#121824] border border-slate-800 hover:border-[#c5a059] transition-all cursor-pointer group flex flex-col justify-between overflow-hidden shadow-xl rounded-xs"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#c5a059] font-bold border border-[#c5a059]/30">
                  {item.badge}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg text-white group-hover:text-[#c5a059] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-[#c5a059] font-medium">
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE SERVICES */}
      <section id="services-grid" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0e1420] border border-slate-800 p-8 sm:p-10 rounded-xs ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                {idx === 0 && <Crown className="w-4 h-4" />}
                {idx === 1 && <Compass className="w-4 h-4" />}
                {idx === 2 && <Globe className="w-4 h-4" />}
                {idx === 3 && <Briefcase className="w-4 h-4" />}
                <span>Pillar 0{idx + 1}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif-luxury text-white font-medium leading-tight">
                {srv.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {srv.subtitle}
              </p>

              <p className="text-xs text-slate-400 leading-relaxed">
                {srv.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Key Deliverables:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {srv.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#121824] border-l-2 border-[#c5a059] text-xs text-amber-200 font-medium">
                Standard of Excellence: {srv.metric}
              </div>

              <button
                id={`btn-inquire-service-${srv.id}`}
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all inline-flex items-center gap-2"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className={`relative h-80 sm:h-[420px] rounded-xs overflow-hidden border border-slate-800 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img
                src={srv.image}
                alt={srv.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1420] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        ))}
      </section>

      {/* REAL ESTATE SPOTLIGHT BANNER */}
      <section id="services-realestate-banner" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#121824] via-[#1a2233] to-[#0e1420] border border-[#c5a059]/40 p-8 sm:p-12 rounded-xs flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
              <Sparkles className="w-4 h-4" />
              <span>Flagship Division</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white">
              Anahita Prime Real Estate & Assets
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Discover private beachfront estates, commercial hotel buyouts, mountain chalets, and land parcels on our dedicated Real Estate portal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => onPageChange('real-estate')}
              className="px-8 py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-[0.2em] rounded-xs shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Real Estate Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* READY TO PLAN */}
      <section id="services-cta-banner" className="py-20 px-4 text-center bg-[#070a10] border-t border-amber-900/20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
            Ready to Plan Your Next Grand Event or Luxury Journey?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Our luxury travel, wedding, and corporate event directors are available for private consultations.
          </p>
          <button
            id="btn-services-consultation"
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs shadow-2xl transition-all"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
