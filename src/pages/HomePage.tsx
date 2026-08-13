import React, { useState } from 'react';
import { PageType, Property } from '../types';
import { SIGNATURE_PROPERTIES, SERVICES, PROCESS_STEPS } from '../data/mockData';
import {
  Sparkles,
  ArrowRight,
  Building2,
  TrendingUp,
  
  MapPin,
  Calendar,
  ShieldCheck,
  Award,
  Globe2,
  ChevronRight,
  Compass,
  CheckCircle2,
  Eye
} from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: PageType) => void;
  onOpenConsultation: () => void;
  onSelectProperty: (property: Property) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange, onOpenConsultation, onSelectProperty }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const propertyCategories = ['All', 'Resort', 'Villa', 'Sanctuary', 'Lodge', 'Estate'];

  const filteredProperties =
    selectedCategory === 'All'
      ? SIGNATURE_PROPERTIES
      : SIGNATURE_PROPERTIES.filter((p) => p.category === selectedCategory);

  return (
    <div id="home-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="hero-section" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ"
            alt="Overwater Luxury Resort Maldives"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,16,0.8)_100%)]" />
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0b0f17]/80 backdrop-blur-md shadow-xl text-amber-200 text-xs uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Luxury Hotels • Grand Weddings • Custom Travel • Corporate Events</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-medium tracking-tight text-white leading-[1.1]">
            Where Luxury Management Meets <br className="hidden sm:inline" />
            <span className="gold-gradient-text font-normal italic">Unforgettable Experiences</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            We manage luxury hotels and resorts, plan royal weddings, organize corporate conferences, and design personalized domestic and international tours.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="btn-hero-explore-properties"
              onClick={() => {
                const elem = document.getElementById('specialized-wings-home') || document.getElementById('signature-properties-section');
                elem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs sgihadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
              <span>Explore Our Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="btn-hero-consultation"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 border border-[#c5a059]/60 hover:bg-[#c5a059]/10 text-[#c5a059] hover:text-amber-200 text-xs font-semibold uppercase tracking-[0.2em] rounded-xs backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT US SUMMARY */}
      <section id="about-summary-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080c14] border-t border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            About Our Company
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium leading-tight">
            16+ Years of Excellence in Hospitality & Travel
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Founded on trust, quality service, and high standards, Anahita is a reliable partner for luxury hotel owners, wedding couples, and travelers worldwide.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We help hotel owners grow their profits while creating unforgettable, stress-free travel and celebration experiences for every guest.
          </p>

          <div className="pt-2">
            <button
              id="btn-home-learn-story"
              onClick={() => onPageChange('about')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059] hover:text-amber-200 transition-colors group"
            >
              <span>Read Our Full Story</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SPECIALIZED EXPERIENCE DIVISIONS */}
      <section id="specialized-wings-home" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Our Key Divisions
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium mt-1">
              Real Estate, Weddings & Travel
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md font-light">
            Explore our dedicated divisions for royal weddings, India heritage tours, global holidays, and corporate MICE events, luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            {
              page: 'weddings' as PageType,
              title: 'Weddings & Celebrations',
              badge: 'Weddings',
              desc: 'Royal palace weddings in Udaipur, cliffside celebrations on the Amalfi Coast & Maldivian beach ceremonies.',
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
              desc: 'Maldives overwater villas, Amalfi Coast yachts, Kyoto cultural tours & Alpine ski chalets.',
              image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
            },
            {
              page: 'mice' as PageType,
              title: 'MICE & Corporate Events',
              badge: 'MICE',
              desc: 'Executive board meetings, employee incentive retreats, large global conventions & product launches.',
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
            },
            {
              page: 'real-estate' as PageType,
              title: 'Luxury Real Estate',
              badge: 'Estate Consultant',
              desc: 'Luxury villas, mountain retreats, boutique resort buyouts & land development plots.',
              image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
            }
          ].map((wing) => (
            <div
              key={wing.page}
              onClick={() => onPageChange(wing.page)}
              className="bg-[#121824] border border-slate-800 hover:border-[#c5a059] transition-all cursor-pointer group flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={wing.image}
                  alt={wing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#c5a059] font-bold border border-[#c5a059]/30">
                  {wing.badge}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl text-white group-hover:text-[#c5a059] transition-colors mb-2">
                    {wing.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                    {wing.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#c5a059] font-medium">
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BESPOKE SERVICES OVERVIEW */}
      <section id="services-summary-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Services We Provide
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
            Comprehensive Management & Experience Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From daily hotel management to marketing, guest services, and property design, we cover all your hospitality needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#121824] border border-slate-800 hover:border-[#c5a059]/60 p-6 rounded-xs space-y-4 group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#080c14] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#0b0f17] transition-all">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif-luxury text-white font-semibold group-hover:text-amber-200 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{srv.subtitle}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-[11px] text-[#c5a059] font-medium mb-3">{srv.metric}</p>
                <button
                  onClick={() => onPageChange('services')}
                  className="text-[11px] uppercase tracking-widest text-slate-300 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      {/* THE ANAHITA DISTINCTION */}
      <section id="why-choose-us-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            The Anahita Hospitality
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
            Why Discerning Clients Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#0e1420] p-6 rounded-xs border border-slate-800 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#c5a059]" />
            <h3 className="text-lg font-serif-luxury text-white font-semibold">Absolute Privacy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every wedding, private holiday, and executive conference is safeguarded by strict confidentiality protocols.
            </p>
          </div>

          <div className="bg-[#0e1420] p-6 rounded-xs border border-slate-800 space-y-3">
            <TrendingUp className="w-8 h-8 text-[#c5a059]" />
            <h3 className="text-lg font-serif-luxury text-white font-semibold">Tailored Excellence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Custom theme decor, royal palace setups, private jet charters, and handpicked luxury itineraries.
            </p>
          </div>

          <div className="bg-[#0e1420] p-6 rounded-xs border border-slate-800 space-y-3">
            <Award className="w-8 h-8 text-[#c5a059]" />
            <h3 className="text-lg font-serif-luxury text-white font-semibold">5-Star Culinary & Hospitality</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              European-trained butler standards, royal heritage gastronomy, and Michelin-inspired dining experiences.
            </p>
          </div>

          <div className="bg-[#0e1420] p-6 rounded-xs border border-slate-800 space-y-3">
            <Globe2 className="w-8 h-8 text-[#c5a059]" />
            <h3 className="text-lg font-serif-luxury text-white font-semibold">Global Access Network</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Exclusive partnerships with royal Indian palaces, luxury train operators, private islands, and top venue destinations.
            </p>
          </div>
        </div>
      </section>

      {/* 4-STEP METHODOLOGY */}
      <section id="methodology-section" className="py-24 bg-[#070a10] border-t border-b border-amber-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
              The 4-Step Anahita Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-[#121824] p-6 rounded-xs border border-slate-800 space-y-4 relative group">
                <span className="text-4xl font-serif-luxury font-bold text-[#c5a059]/30 group-hover:text-[#c5a059] transition-colors">
                  {step.step}
                </span>
                <h3 className="text-lg font-serif-luxury text-white font-semibold">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA BANNER */}
      <section id="home-cta-banner" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#121824] via-[#1c2638] to-[#121824] border-t border-amber-900/30 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold">
            Begin Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
            Plan Your Grand Event or Luxury Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Connect with our team to create royal weddings, bespoke travel itineraries, or high-impact corporate MICE events.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              id="btn-home-cta-consultation"
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs shadow-2xl transition-all"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
