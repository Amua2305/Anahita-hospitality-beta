import React, { useState } from 'react';
import { PageType } from '../types';
import { TEAM_MEMBERS, GLOBAL_OFFICES } from '../data/mockData';
import { Sparkles, ShieldCheck, Award, Globe, Building2, MapPin, CheckCircle, Clock } from 'lucide-react';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onPageChange: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange, onOpenConsultation }) => {
  const [activeOffice, setActiveOffice] = useState(GLOBAL_OFFICES[0]);

  return (
    <div id="about-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="about-hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
            alt="Anahita Legacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#0b0f17]/80 to-[#0b0f17]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
          <div className="mb-2">
            <Logo variant="full" size="xl" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#121824] text-amber-200 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Our Story & Principles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-luxury text-white font-medium leading-tight">
            Our Legacy, Your Future
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            For 16 years, Anahita Hospitality has provided top-tier hotel management, luxury wedding planning, and tailored travel experiences across prime global destinations.
          </p>
        </div>
      </section>

      {/* A JOURNEY OF REFINEMENT */}
      <section id="about-journey-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[480px] w-full overflow-hidden rounded-xs border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
                alt="Refinement and Elegance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#121824] border border-[#c5a059] p-6 rounded-xs shadow-2xl hidden sm:block max-w-xs">
              <span className="text-3xl font-serif-luxury font-bold text-amber-200 block">16+ Years</span>
              <p className="text-xs text-slate-300 mt-1">
                Delivering 5-star hospitality, luxury travel, and grand events across Asia, and the Middle East.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white font-medium">
              Built for Quality, Reliability, and Unforgettable Moments
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Anahita was founded to offer personalized attention and genuine care in hospitality and travel, avoiding cookie-cutter approaches.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every property we manage and event we plan receives our total dedication—combining fine dining, trained staff, and smart management to deliver memorable guest stays and strong business results.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div>
                <p className="text-white font-semibold">100% Client Privacy</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Strict confidentiality guaranteed</p>
              </div>
              <div>
                <p className="text-white font-semibold">5-Star Trained Staff</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Professional hospitality team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDED ON INTEGRITY - CORE VALUES */}
      <section id="about-values-section" className="py-24 bg-[#070a10] border-t border-b border-amber-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Our Core Values
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
              Founded on Trust & Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#121824] p-8 rounded-xs border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#080c14] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-luxury text-white font-semibold">Privacy & Security</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We handle every event, private stay, and financial transaction with utmost privacy and security.
              </p>
            </div>

            <div className="bg-[#121824] p-8 rounded-xs border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#080c14] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-luxury text-white font-semibold">Highest Standards</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We do not compromise on quality. Every meal, room setup, and guest interaction is carefully audited.
              </p>
            </div>

            <div className="bg-[#121824] p-8 rounded-xs border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#080c14] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-luxury text-white font-semibold">Cultural Respect</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We honor local traditions, architecture, and environmental sustainability in every destination.
              </p>
            </div>

            <div className="bg-[#121824] p-8 rounded-xs border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#080c14] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif-luxury text-white font-semibold">Modern Innovation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Using modern technology, eco-friendly systems, and smart revenue tools to enhance guest comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE VISIONARIES (LEADERSHIP TEAM) */}
      {/*<section id="about-team-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
            The Visionaries
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A seasoned executive leadership team combining decades of experience from luxury hotel brands, real estate investment banking, and architectural design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-[#0e1420] border border-slate-800 rounded-xs overflow-hidden group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1420] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-[#c5a059] font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>{member.location}</span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-serif-luxury text-white font-semibold">{member.name}</h3>
                <p className="text-xs text-[#c5a059] font-medium">{member.role}</p>
                <p className="text-xs text-slate-400 pt-2 border-t border-slate-800 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>*/}

      {/* HEADQUARTERS */}
      <section id="about-global-footprint" className="py-24 bg-[#070a10] border-t border-amber-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Headquarters
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
              Executive Headquarters
            </h2>
            <p className="text-xs text-slate-400">
              Based in Delhi NCR, managing luxury hotel operations, destination weddings, bespoke travel, and corporate events.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#121824] border border-slate-800 rounded-xs overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-full relative">
              <img
                src={activeOffice.image}
                alt={activeOffice.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 space-y-4 flex flex-col justify-center">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold">
                  Corporate HQ
                </span>
                <h3 className="text-2xl font-serif-luxury text-white font-semibold">
                  Anahita Hospitality ({activeOffice.city})
                </h3>
                <p className="text-xs text-slate-400">{activeOffice.country}</p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <p><strong className="text-slate-500">Address:</strong> {activeOffice.address}</p>
                <p><strong className="text-slate-500">Phone:</strong> {activeOffice.phone}</p>
                <p><strong className="text-slate-500">Email:</strong> {activeOffice.email}</p>
                <div className="flex items-center gap-1.5 text-amber-200 text-xs pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Timezone: {activeOffice.timezone}</span>
                </div>
              </div>

              <button
                id="btn-about-office-contact"
                onClick={() => onPageChange('contact')}
                className="w-full py-2.5 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-semibold uppercase text-xs tracking-wider rounded-xs transition-all"
              >
                Contact Headquarters
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
