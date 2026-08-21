import React, { useState } from 'react';
import { PageType } from '../types';
import { Send, MapPin, Mail, Phone, CheckCircle, ArrowUpRight, Instagram, Linkedin, Globe, Facebook } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onPageChange: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange, onOpenConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'real-estate', label: 'Luxury Real Estate' },
    { id: 'services', label: 'Services Overview' },
    { id: 'weddings', label: 'Weddings & Celebrations' },
    { id: 'domestic-travel', label: 'Domestic Travel' },
    { id: 'international-travel', label: 'International Travel' },
    { id: 'mice', label: 'MICE & Corporate Events' },
    { id: 'gallery', label: 'Visual Gallery' },
    { id: 'blog', label: 'Blog & Journal' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <footer id="main-footer" className="bg-[#070a10] border-t border-amber-900/20 text-slate-400 font-sans">
      {/* Top Newsletter CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-[#0b0f17] via-[#121824] to-[#0b0f17] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              Sovereign Insights
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white font-medium mt-1">
              Join Our Inner Circle
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Receive quarterly luxury hospitality reports, yield optimization benchmarks, and private off-market property curation portfolios.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div id="newsletter-subscribed-msg" className="flex items-center gap-2 bg-[#122417] border border-emerald-600/40 text-emerald-400 px-6 py-3 rounded-xs text-xs font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>You are now subscribed to Anahita Hospitality.</span>
              </div>
            ) : (
              <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-xs text-slate-100 px-4 py-3 outline-none transition-all flex-grow rounded-xs placeholder-slate-500"
                />
                <button
                  id="btn-footer-subscribe"
                  type="submit"
                  className="bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-semibold uppercase text-xs tracking-wider px-6 py-3 transition-all flex items-center justify-center gap-2 rounded-xs whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center">
            <Logo size="xl" variant="full" />
          </div>
          
          <div className="pt-2 flex items-center gap-3 text-slate-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/anahitahospitality?igsh=Z281NTZpaWVuNGdk" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61593311800882" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://anahitahospitality.com" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-slate-200 font-semibold border-b border-amber-900/30 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-nav-link-${link.id}`}
                  onClick={() => {
                    onPageChange(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#c5a059]/60" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Hubs */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-slate-200 font-semibold border-b border-amber-900/30 pb-2">
            Global Hubs
          </h4>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-white font-medium text-xs">Noida Uttar Pradesh (HQ)</p>
              <a
                href="https://www.google.com/maps/place/Anahita+Hospitality+Pvt.+Ltd./@28.5847196,77.3115818,851m/data=!3m1!1e3!4m6!3m5!1s0x390ce5bc8fdb27f5:0x24195e185460e40b!8m2!3d28.584756!4d77.3137054!16s%2Fg%2F11zddz_2xb?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#c5a059] text-[11px] inline-flex items-center gap-1 transition-colors group mt-1"
              >
                <MapPin className="w-3 h-3 text-[#c5a059] shrink-0" />
                <span className="group-hover:underline">Building No B-88, Office No T104,Sector-2, Near Noida Sector 15 Metro. </span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bespoke Inquiry Desk */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-slate-200 font-semibold border-b border-amber-900/30 pb-2">
            Contact Us
          </h4>
          <p className="text-xs text-slate-400">
            Speak directly with our Expert team and give us an opportunity to make your any event Memorable and Unforgatable.
          </p>
          <div className="space-y-2 text-xs pt-1">
            <a
              href="tel:+91 8840129250"
              className="flex items-center gap-2 text-slate-300 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>+91 8840129250</span>
            </a>
            <a
              href="mailto:info.anahitahospitality@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-[#c5a059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="break-all">info.anahitahospitality@gmail.com</span>
            </a>
          </div>

          <button
            id="btn-footer-consultation"
            onClick={onOpenConsultation}
            className="w-full mt-2 py-2.5 px-4 border border-[#c5a059]/60 hover:bg-[#c5a059] text-[#c5a059] hover:text-[#0b0f17] text-xs uppercase font-semibold tracking-wider transition-all rounded-xs text-center"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/80 bg-[#05080e] py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Anahita Hospitality. All rights reserved. Developed by AddWeb</p>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Anahita Privacy Policy: All client communication and property records are managed under sovereign non-disclosure standards."); }} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Anahita Terms of Curation: Services governed under sovereign asset advisory standards."); }} className="hover:text-slate-300 transition-colors">Terms of Curation</a>
            <a href="#nda" onClick={(e) => { e.preventDefault(); alert("Off-Market Confidentiality Protocol available upon request."); }} className="hover:text-slate-300 transition-colors">Off-Market Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
