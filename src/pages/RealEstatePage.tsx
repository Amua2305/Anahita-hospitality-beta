import React, { useState } from 'react';
import { PageType } from '../types';
import {
  Building2,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Home,
  KeyRound,
  TrendingUp,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Edit3,
  Award
} from 'lucide-react';

interface RealEstatePageProps {
  onOpenConsultation: () => void;
  onPageChange?: (page: PageType) => void;
}

export const RealEstatePage: React.FC<RealEstatePageProps> = ({ onOpenConsultation }) => {
  // Configurable external real estate website URL state (persisted in localStorage if edited)
  const [realEstateUrl, setRealEstateUrl] = useState<string>(() => {
    return localStorage.getItem('anahita_realestate_url') || 'https://realestate.anahitahospitality.com';
  });
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [tempUrlInput, setTempUrlInput] = useState(realEstateUrl);
  const [copied, setCopied] = useState(false);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let formatted = tempUrlInput.trim();
    if (formatted && !formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = 'https://' + formatted;
    }
    if (formatted) {
      setRealEstateUrl(formatted);
      localStorage.setItem('anahita_realestate_url', formatted);
    }
    setIsEditingUrl(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(realEstateUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Sample Featured Real Estate Asset Showcase
  const REAL_ESTATE_LISTINGS = [
    {
      id: 're-1',
      title: 'The Riviera Oceanfront Estate',
      location: 'Goa, India • Cliffside Beachfront',
      category: 'Private Luxury Villa',
      price: '₹42,000,000 (Bespoke Inquiry)',
      specs: '6 Bed • 8 Bath • 14,500 sq.ft',
      roi: '8.4% Estimated Yield',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      description: 'Ultra-prime architectural masterpiece overlooking the Arabian Sea with private infinity edge pool, helipad access, and smart home automation.',
      tags: ['Ocean View', 'Private Helipad', 'Turnkey Furnished', 'Infinity Pool']
    },
    {
      id: 're-2',
      title: 'Anahita Boutique Resort & Spa Acquisition',
      location: 'Udaipur, Rajasthan • Lake Facing',
      category: 'Commercial Hospitality Asset',
      price: 'Bespoke Portfolio Buyout',
      specs: '32 Luxury Keys • 4.2 Acres',
      roi: '12.8% Annual Yield',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      description: 'Fully operational Mewari palace-inspired heritage resort with private lake ghats, banquet lawns, and turnkey management contract available.',
      tags: ['Heritage Architecture', 'Commercial License', 'Lake Ghats', 'High Yield']
    },
    {
      id: 're-3',
      title: 'Maldives Private Island Plot & Villa Reserve',
      location: 'Noonu Atoll, Maldives',
      category: 'Private Island Land & Villas',
      price: '$8,500,000 USD',
      specs: '3 Oceanfront Plots • 22,000 sq.ft Built',
      roi: '10.5% ROI Rental Pool',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
      description: 'Exclusive sovereign lease land parcel with custom overwater architecture plans, deep water yacht anchorage, and solar energy grid.',
      tags: ['Sovereign Lease', 'Yacht Anchorage', 'Eco-Grid', 'Private Beach']
    },
    {
      id: 're-4',
      title: 'The Himalayan Alpine Sanctuary & Chalets',
      location: 'Manali, Himachal Pradesh',
      category: 'Luxury Mountain Estate',
      price: '₹18,500,000',
      specs: '4 Cedar Chalets • 2.8 Acres',
      roi: '9.2% Seasonal Yield',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      description: 'Private gated pine estate with heated plunge pools, organic orchards, and panoramic views of snow-capped peaks.',
      tags: ['Gated Estate', 'Heated Pools', 'Cedar Woodwork', 'Helipad Access']
    }
  ];

  return (
    <div id="real-estate-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="real-estate-hero" className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 border-b border-amber-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Anahita Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#0b0f17]/85 to-[#0b0f17]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#121824] text-amber-200 text-xs uppercase tracking-[0.25em]">
            <Building2 className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Anahita Prime Real Estate & Property Advisory</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-luxury text-white font-medium leading-tight">
            Exclusive Luxury Real Estate & Prime Property Asset Curation
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            From ultra-prime beachfront villas and mountain sanctuaries to boutique hotel acquisitions and resort development plots across India and international destinations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={realEstateUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-hero-visit-realestate-portal"
              className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-[0.2em] rounded-xs shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>Launch Real Estate Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="btn-hero-inquire-realestate"
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-[#121824] hover:bg-slate-800 border border-[#c5a059]/40 text-amber-200 text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>Private Asset Advisory</span>
            </button>
          </div>
        </div>
      </section>

      {/* DEDICATED REAL ESTATE WEBSITE DIRECT LINK CARD BANNER */}
      <section id="real-estate-website-banner" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#121824] via-[#1a2233] to-[#121824] border border-[#c5a059]/40 p-6 sm:p-10 rounded-xs shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
                <Globe className="w-4 h-4" />
                <span>Dedicated Real Estate Platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                Visit Our Custom Real Estate Website
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Explore our full digital portfolio, virtual property tours, floor plans, financial yield breakdown calculators, and direct agent booking systems on our standalone Real Estate website.
              </p>

              {/* Display Current URL & Quick Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="bg-[#080c14] border border-slate-700/80 px-4 py-2 rounded-xs flex items-center gap-2 text-xs text-amber-200 font-mono max-w-full overflow-hidden">
                  <ExternalLink className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span className="truncate">{realEstateUrl}</span>
                </div>

                <button
                  id="btn-copy-realestate-url"
                  onClick={handleCopy}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xs transition-colors flex items-center gap-1.5"
                  title="Copy Link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Link'}</span>
                </button>

                <button
                  id="btn-edit-realestate-url"
                  onClick={() => setIsEditingUrl(true)}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-medium rounded-xs transition-colors flex items-center gap-1.5"
                  title="Update Website Link"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Update Link</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={realEstateUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-visit-realestate-portal-main"
                className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-[0.2em] rounded-xs shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Visit Real Estate Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal / Inline Edit for Real Estate Website Link */}
        {isEditingUrl && (
          <div className="mt-4 p-5 bg-[#0e1420] border border-[#c5a059] rounded-xs animate-in fade-in duration-200">
            <form onSubmit={handleSaveUrl} className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                  Set Your Custom Real Estate Website URL:
                </label>
                <button
                  type="button"
                  onClick={() => setIsEditingUrl(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={tempUrlInput}
                  onChange={(e) => setTempUrlInput(e.target.value)}
                  placeholder="e.g. https://realestate.anahitahospitality.com or your website URL"
                  className="flex-1 bg-[#080c14] border border-slate-700 text-xs text-white px-4 py-2.5 rounded-xs focus:border-[#c5a059] outline-none font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-wider rounded-xs"
                >
                  Save URL
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                This link will be used across all "Visit Real Estate Website" buttons on this portal.
              </p>
            </form>
          </div>
        )}
      </section>

      {/* CORE REAL ESTATE SERVICES PILLARS */}
      <section id="real-estate-pillars" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-900/20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
            Real Estate Services
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-1">
            End-to-End Prime Real Estate Solutions
          </h2>
          <p className="text-slate-400 text-xs mt-2 font-light">
            Providing high-net-worth investors, family offices, and luxury homebuyers with unmatched property curation and asset management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Home className="w-6 h-6 text-[#c5a059]" />,
              title: 'Luxury Residential Estates',
              desc: 'Bespoke coastal villas, heritage royal havelis, cliffside mansions, and high-end penthouses.'
            },
            {
              icon: <Building2 className="w-6 h-6 text-[#c5a059]" />,
              title: 'Hospitality Assets',
              desc: 'Boutique resort buyouts, hotel development sites, overwater sanctuaries, and eco-lodges.'
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-[#c5a059]" />,
              title: 'Yield Optimization',
              desc: 'Integrating private properties into luxury rental pools to generate high annual ROI yields.'
            },
            {
              icon: <KeyRound className="w-6 h-6 text-[#c5a059]" />,
              title: 'Private Off-Market Deals',
              desc: 'Confidential asset curation for ultra-high-net-worth individuals, royal families, and institutional funds.'
            }
          ].map((pillar, i) => (
            <div
              key={i}
              className="bg-[#121824] border border-slate-800 p-6 rounded-xs hover:border-[#c5a059]/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xs bg-[#1a2233] border border-[#c5a059]/30 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-serif-luxury text-lg text-white group-hover:text-[#c5a059] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-[#c5a059]">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTY LISTINGS */}
      <section id="real-estate-listings" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Curated Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-1">
              Featured Real Estate Assets
            </h2>
          </div>
          <a
            href={realEstateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#121824] hover:bg-slate-800 border border-[#c5a059]/40 text-amber-200 text-xs uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
          >
            <span>View All Listings on Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REAL_ESTATE_LISTINGS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e1420] border border-slate-800 hover:border-[#c5a059] transition-all rounded-xs overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-[#c5a059] font-bold border border-[#c5a059]/30">
                  {item.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0b0f17]/90 backdrop-blur-md px-3 py-1.5 text-xs text-amber-200 font-semibold border border-amber-900/40">
                  {item.price}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-white group-hover:text-[#c5a059] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                    <span className="bg-[#121824] px-2.5 py-1 rounded-xs border border-slate-800 text-amber-200/90">
                      {item.specs}
                    </span>
                    <span className="bg-[#121824] px-2.5 py-1 rounded-xs border border-slate-800 text-emerald-400">
                      {item.roi}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-[#1a2233] text-slate-300 px-2 py-0.5 rounded-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Prospectus</span>
                  </button>

                  <a
                    href={realEstateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-[#c5a059] transition-colors flex items-center gap-1"
                  >
                    <span>View Detail</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="real-estate-cta" className="py-20 px-4 text-center bg-[#070a10] border-t border-amber-900/20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#121824] border border-[#c5a059]/40 flex items-center justify-center mx-auto text-[#c5a059]">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white font-medium">
            Acquire or List Prime Real Estate with Anahita
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our private real estate advisory team handles discrete acquisitions, luxury property valuation, and global marketing for extraordinary real estate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="btn-realestate-bottom-consultation"
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] text-xs font-bold uppercase tracking-[0.2em] rounded-xs shadow-2xl transition-all"
            >
              Schedule Private Asset Consultation
            </button>
            <a
              href={realEstateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#121824] hover:bg-slate-800 border border-slate-700 text-amber-200 text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all inline-flex items-center gap-2"
            >
              <span>Explore Real Estate Website</span>
              <ExternalLink className="w-4 h-4 text-[#c5a059]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
