import React, { useState } from 'react';
import { PageType } from '../types';
import { GLOBAL_OFFICES } from '../data/mockData';
import { Sparkles, Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Globe } from 'lucide-react';

interface ContactPageProps {
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenConsultation }) => {
  const [activeOffice, setActiveOffice] = useState(GLOBAL_OFFICES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Real Estate Inquiry',
    assetValue: '$10M - $50M',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page" className="w-full bg-[#0b0f17] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section id="contact-hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Anahita"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#0b0f17]/80 to-[#0b0f17]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#121824] text-amber-200 text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Direct Concierge & Advisory Desk</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-luxury text-white font-medium leading-tight">
            Let's Start a Conversation
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Our Senior Partners and Asset Principals are available for sovereign consultations regarding property management, branding, or asset acquisition.
          </p>
        </div>
      </section>

      {/* DIRECT CONTACT CARDS */}
      <section id="contact-cards" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0e1420] border border-slate-800 p-6 rounded-xs space-y-3">
          <Phone className="w-6 h-6 text-[#c5a059]" />
          <h3 className="text-base font-serif-luxury text-white font-semibold">Direct Line</h3>
          <p className="text-xs text-slate-400">Immediate assistance for private owners and guests.</p>
          <a href="tel:+917303907800" className="text-xs text-amber-200 font-semibold hover:underline block pt-1">
            +91 7303907800
          </a>
        </div>

        <div className="bg-[#0e1420] border border-slate-800 p-6 rounded-xs space-y-3">
          <Mail className="w-6 h-6 text-[#c5a059]" />
          <h3 className="text-base font-serif-luxury text-white font-semibold">For Query Information</h3>
          <p className="text-xs text-slate-400">Full-service travel planning and wedding coordination, tailored to your vision.</p>
          <a href="mailto:advisory@anahitahospitality.com" className="text-xs text-amber-200 font-semibold hover:underline block pt-1">
            info.anahitahospitality@gmail.com
          </a>
        </div>

        <div className="bg-[#0e1420] border border-slate-800 p-6 rounded-xs space-y-3">
          <Phone className="w-6 h-6 text-[#c5a059]" />
          <h3 className="text-base font-serif-luxury text-white font-semibold">Contact</h3>
          <p className="text-xs text-slate-400">Full-service travel planning and wedding coordination, tailored to your vision.</p>
          <a href="mailto:press@anahitahospitality.com" className="text-xs text-amber-200 font-semibold hover:underline block pt-1">
            +91 7303907800
          </a>
        </div>
      </section>

      {/* INQUIRY FORM & GLOBAL HUBS */}
      <section id="contact-form-section" className="py-16 bg-[#070a10] border-t border-b border-amber-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <div className="bg-[#0e1420] border border-[#c5a059]/30 p-8 rounded-xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Direct Submission
              </span>
              
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-serif-luxury text-white font-semibold">Inquiry Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, {formData.fullName}. A senior principal from our {formData.inquiryType} division will reach out within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#c5a059] text-[#0b0f17] text-xs font-semibold uppercase tracking-wider rounded-xs mt-4">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victor Montgomery"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-2.5 outline-none rounded-xs"/>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="v.montgomery@estate.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-2.5 outline-none rounded-xs"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-2.5 outline-none rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-2.5 outline-none rounded-xs">
                        
                      <option value="Select Option">Select Option</option>
                      <option value="Real Estate Inquiry">Real Estate Acquisition / Listing</option>
                      <option value="Destination Wedding">Destination Wedding & Celebrations</option>
                      <option value="Luxury Travel">Domestic & International Travel</option>
                      <option value="MICE Event">MICE & Corporate Events</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Property Location / Country</label>
                  <input
                    type="text"
                    placeholder="e.g. Positano, Italy or Malé, Maldives"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-2.5 outline-none rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Message / Specific Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Outline key count, current performance, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-2.5 outline-none rounded-xs resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>Sovereign non-disclosure standards guaranteed.</span>
                </div>

                <button
                  id="btn-submit-contact-form"
                  type="submit"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-semibold uppercase tracking-[0.2em] text-xs rounded-xs transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Executive Headquarters */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Headquarters
              </span>
              <h2 className="text-2xl font-serif-luxury text-white font-medium mt-1">
                Executive Headquarters
              </h2>
            </div>

            {GLOBAL_OFFICES.length > 1 && (
              <div className="flex gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
                {GLOBAL_OFFICES.map((office) => (
                  <button
                    key={office.city}
                    onClick={() => setActiveOffice(office)}
                    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
                      activeOffice.city === office.city
                        ? 'bg-[#c5a059] text-[#0b0f17]'
                        : 'bg-[#121824] text-slate-400 hover:text-white'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>
            )}

            <div className="bg-[#121824] border border-slate-800 rounded-xs overflow-hidden space-y-4 p-6">
              <div className="h-48 rounded-xs overflow-hidden relative">
                <img src={activeOffice.image} alt={activeOffice.city} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-xs border border-[#c5a059]/30 text-amber-200 text-xs font-semibold">
                  {activeOffice.city}
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <h3 className="text-xl font-serif-luxury text-white font-semibold">
                  Anahita Hospitality ({activeOffice.city})
                </h3>
                <p className="text-slate-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>{activeOffice.address}</span>
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>{activeOffice.phone}</span>
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>{activeOffice.email}</span>
                </p>
                <p className="text-amber-200/80 flex items-center gap-2 pt-1 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Timezone: {activeOffice.timezone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
