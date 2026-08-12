import React, { useState } from 'react';
import { MICE_SERVICES } from '../data/mockData';
import { MiceService } from '../types';
import { Briefcase, Building2, Users, Calendar, Award, Send, CheckCircle2, ArrowRight, ShieldCheck, Cpu, ChevronRight, FileText, Calculator } from 'lucide-react';

interface MicePageProps {
  onOpenConsultation: () => void;
}

export const MicePage: React.FC<MicePageProps> = ({ onOpenConsultation }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeMiceModal, setActiveMiceModal] = useState<MiceService | null>(null);

  // MICE RFQ Form State
  const [rfqEventType, setRfqEventType] = useState<string>('Incentives & Retreats');
  const [rfqDelegates, setRfqDelegates] = useState<number>(150);
  const [rfqDestination, setRfqDestination] = useState<string>('Maldives Island Takeover');
  const [rfqTechRequirement, setRfqTechRequirement] = useState<string>('Hybrid Streaming & 3D Stage Setup');
  const [rfqSubmitted, setRfqSubmitted] = useState<boolean>(false);

  const categories = ['All', 'Meetings', 'Incentives', 'Conferences', 'Exhibitions'];

  const filteredServices = selectedType === 'All'
    ? MICE_SERVICES
    : MICE_SERVICES.filter(m => m.type === selectedType);

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="MICE Corporate Business Events"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17] via-transparent to-[#0b0f17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121824] border border-[#c5a059]/40 text-[#c5a059] text-xs uppercase tracking-[0.25em] mb-6 shadow-xl">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate MICE & Business Events</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight mb-6">
              Meetings, Incentives, Conferences <br />
              <span className="italic font-light text-[#c5a059]">& Product Exhibitions</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Benchmarked against premier event managers (MICE), Anahita provides complete management for board meetings, team incentive trips, global corporate conferences, and product expos.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#c5a059] text-[#0b0f17] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs hover:bg-[#e2c887] transition-all shadow-xl shadow-[#c5a059]/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Corporate Proposal</span>
              </button>
              <a
                href="#rfq-builder"
                className="px-6 py-3.5 border border-amber-900/40 bg-[#121824]/60 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-xs hover:border-[#c5a059] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#c5a059]" />
                <span>Build MICE RFP Brief</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MICE 4 Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-900/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Core Event Disciplines
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
            The MICE Capabilities Matrix
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            Sovereign execution across four critical corporate engagement pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              letter: 'M',
              title: 'Meetings',
              desc: 'Confidential C-suite board meetings, strategy retreats, and shareholder assemblies in private 5-star salons.'
            },
            {
              letter: 'I',
              title: 'Incentives',
              desc: 'Transformative reward journeys for top performers, channel partners, and key clients on private island takeovers.'
            },
            {
              letter: 'C',
              title: 'Conferences',
              desc: 'Global annual general summits, leadership keynotes, and hybrid international tech conventions.'
            },
            {
              letter: 'E',
              title: 'Exhibitions',
              desc: 'Bespoke pavilion architecture for luxury watch expos, supercar unveilings, and high-tech trade showcases.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#121824] p-8 border border-slate-800/80 hover:border-[#c5a059]/50 transition-all relative group">
              <div className="text-4xl font-serif-luxury text-[#c5a059] font-bold mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.letter}
              </div>
              <h3 className="font-serif-luxury text-xl text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MICE Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-900/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Enterprise Offerings
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
              Corporate Event Management
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedType(c)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all rounded-xs border ${
                  selectedType === c
                    ? 'bg-[#c5a059] text-[#0b0f17] font-bold border-[#c5a059]'
                    : 'bg-[#121824] text-slate-300 border-slate-800 hover:border-[#c5a059]/50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#121824] border border-slate-800/80 overflow-hidden hover:border-[#c5a059]/60 transition-all flex flex-col group shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0b0f17]/90 backdrop-blur-md text-[#c5a059] text-[10px] uppercase tracking-widest font-bold border border-[#c5a059]/30">
                    {service.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-slate-200 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xs border border-white/10 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{service.capacity}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl text-white mb-1 group-hover:text-[#c5a059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#c5a059] font-medium mb-4">{service.subtitle}</p>
                  <p className="text-slate-400 text-sm font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase text-slate-400 tracking-widest font-semibold block">Deliverables & Tech Integration</span>
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider block">Impact Benchmark</span>
                    <span className="text-xs text-[#c5a059] font-medium">{service.caseStudyMetric}</span>
                  </div>
                  <button
                    onClick={() => setActiveMiceModal(service)}
                    className="px-5 py-2.5 bg-[#0b0f17] hover:bg-[#c5a059] text-slate-200 hover:text-[#0b0f17] text-xs uppercase tracking-wider font-semibold border border-[#c5a059]/40 transition-all flex items-center gap-2 shrink-0 ml-4"
                  >
                    <span>View Event Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive MICE RFQ Builder */}
      <section id="rfq-builder" className="py-20 bg-[#0e1420]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium flex items-center justify-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              Corporate RFQ Dispatch
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-2">
              Request MICE Proposal & Scope
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-light">
              Submit your corporate brief for an instant preliminary scope review and formal proposal draft within 24 hours.
            </p>
          </div>

          <div className="bg-[#121824] p-8 sm:p-10 border border-slate-800 shadow-2xl rounded-xs">
            {rfqSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059] flex items-center justify-center text-[#c5a059] mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-white mb-2">Corporate Brief Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto font-light mb-6">
                  Thank you. Our Senior MICE Director is reviewing your event specifications for <span className="text-[#c5a059] font-medium">{rfqEventType}</span> ({rfqDelegates} delegates) in <span className="text-[#c5a059] font-medium">{rfqDestination}</span>.
                </p>
                <button
                  onClick={() => setRfqSubmitted(false)}
                  className="px-6 py-2.5 border border-slate-700 text-slate-300 text-xs uppercase"
                >
                  Submit Another RFP
                </button>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Event Type
                    </label>
                    <select
                      value={rfqEventType}
                      onChange={(e) => setRfqEventType(e.target.value)}
                      className="w-full bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-3 text-xs focus:border-[#c5a059] focus:outline-none"
                    >
                      <option value="Incentives & Retreats">Incentive Journey & High Performer Retreat</option>
                      <option value="Board Meeting">C-Suite / Governance Board Meeting</option>
                      <option value="Annual Conference">Global Corporate Conference & Keynotes</option>
                      <option value="Product Exhibition">Luxury Product Launch & Exhibition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Delegate Count ({rfqDelegates})
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="1000"
                      step="20"
                      value={rfqDelegates}
                      onChange={(e) => setRfqDelegates(Number(e.target.value))}
                      className="w-full accent-[#c5a059] bg-slate-800 h-2 rounded-lg cursor-pointer mt-3"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Preferred Destination
                    </label>
                    <select
                      value={rfqDestination}
                      onChange={(e) => setRfqDestination(e.target.value)}
                      className="w-full bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-3 text-xs focus:border-[#c5a059] focus:outline-none"
                    >
                      <option value="Maldives Island Takeover">Maldives Private Island Takeover</option>
                      <option value="Dubai DIFC & Desert Resort">Dubai DIFC & Luxury Desert Resort</option>
                      <option value="Udaipur Lake Palace">Udaipur Royal Lake Palace</option>
                      <option value="Amalfi Coast Superyacht">Amalfi Coast Superyacht Charter</option>
                      <option value="London Mayfair / Paris">London Mayfair or Paris Salon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                      Production & AV Requirement
                    </label>
                    <select
                      value={rfqTechRequirement}
                      onChange={(e) => setRfqTechRequirement(e.target.value)}
                      className="w-full bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-3 text-xs focus:border-[#c5a059] focus:outline-none"
                    >
                      <option value="Hybrid Streaming & 3D Stage Setup">Hybrid Live Stream & 3D LED Stage</option>
                      <option value="High Security Encrypted Audio">Encrypted C-Suite Confidential Audio</option>
                      <option value="Full Pavilion Architecture">Custom Pavilion & Booth Buildout</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2">
                    Company Name & Work Email
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="e.g., Apex Sovereign Capital"
                      className="bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-3 text-xs focus:border-[#c5a059] focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="executive@company.com"
                      className="bg-[#0b0f17] border border-slate-700 text-slate-200 px-4 py-3 text-xs focus:border-[#c5a059] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c5a059]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Corporate RFP Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MICE Detail Modal */}
      {activeMiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121824] border border-[#c5a059]/50 max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveMiceModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <div className="inline-block px-3 py-1 bg-[#c5a059]/20 text-[#c5a059] text-[10px] uppercase font-bold tracking-widest mb-3 border border-[#c5a059]/30">
              {activeMiceModal.type} • Capacity: {activeMiceModal.capacity}
            </div>
            <h3 className="font-serif-luxury text-2xl text-white mb-2">{activeMiceModal.title}</h3>
            <p className="text-xs text-[#c5a059] mb-4">{activeMiceModal.subtitle}</p>

            <img
              src={activeMiceModal.image}
              alt={activeMiceModal.title}
              className="w-full h-56 object-cover rounded-xs mb-4 border border-slate-800"
            />

            <p className="text-slate-300 text-sm font-light mb-6 leading-relaxed">
              {activeMiceModal.description}
            </p>

            <h4 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">Key Technical & Logistic Inclusions</h4>
            <div className="space-y-2 mb-8">
              {activeMiceModal.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveMiceModal(null);
                  onOpenConsultation();
                }}
                className="flex-1 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-widest text-center"
              >
                Request Proposal & Date Feasibility
              </button>
              <button
                onClick={() => setActiveMiceModal(null)}
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
