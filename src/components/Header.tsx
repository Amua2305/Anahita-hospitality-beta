import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Sparkles, Calendar, Menu, X, PhoneCall, ChevronRight, Search } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const mainNavItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
  ];

  const subServices: { id: PageType; label: string; desc: string }[] = [
    { id: 'services', label: 'Services Overview', desc: 'Explore Our Complete Range of Core Services' },
    { id: 'real-estate', label: 'Luxury Real Estate', desc: 'Villas, Private Islands & Resort Acquisitions' },
    { id: 'weddings', label: 'Weddings & Celebrations', desc: 'Royal Palaces, Riviera & Island Weddings' },
    { id: 'domestic-travel', label: 'Domestic Travel', desc: 'Luxury Trains, Palaces & Backwaters' },
    { id: 'international-travel', label: 'International Travel', desc: 'Private Islands, Amalfi & Alpine Charters' },
    { id: 'mice', label: 'MICE & Corporate', desc: 'Meetings, Incentives, Keynotes & Expos' },
  ];

  const handleNavClick = (page: PageType) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = ['services', 'real-estate', 'weddings', 'domestic-travel', 'international-travel', 'mice'].includes(currentPage);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-amber-900/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center group text-left focus:outline-none"
        >
          <Logo size="md" variant="full" />
        </button>

        {/* Desktop Nav Items */}
        <nav id="desktop-navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {mainNavItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 lg:px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all relative ${
                  isActive
                    ? 'text-[#c5a059] font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#c5a059] rounded-full" />
                )}
              </button>
            );
          })}

          {/* Services & Divisions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              id="nav-link-services-dropdown"
              onClick={() => handleNavClick('services')}
              className={`px-3 lg:px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all relative flex items-center gap-1 ${
                isServicesActive
                  ? 'text-[#c5a059] font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Services & Experiences</span>
              <span className="text-[10px] text-[#c5a059]">▾</span>
              {isServicesActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#c5a059] rounded-full" />
              )}
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-[#0e1420] border border-amber-900/30 shadow-2xl p-2 rounded-xs animate-in fade-in slide-in-from-top-2 duration-150">
                {subServices.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleNavClick(sub.id)}
                    className={`w-full text-left p-2.5 transition-all rounded-xs flex flex-col group ${
                      currentPage === sub.id
                        ? 'bg-[#121824] border-l-2 border-[#c5a059]'
                        : 'hover:bg-[#121824]'
                    }`}
                  >
                    <span className={`text-xs uppercase tracking-wider font-semibold ${
                      currentPage === sub.id ? 'text-[#c5a059]' : 'text-slate-200 group-hover:text-[#c5a059]'
                    }`}>
                      {sub.label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-light mt-0.5">
                      {sub.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            id="nav-link-gallery"
            onClick={() => handleNavClick('gallery')}
            className={`px-3 lg:px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all relative ${
              currentPage === 'gallery'
                ? 'text-[#c5a059] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Gallery
            {currentPage === 'gallery' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-blog"
            onClick={() => handleNavClick('blog')}
            className={`px-3 lg:px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all relative ${
              currentPage === 'blog'
                ? 'text-[#c5a059] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Blog
            {currentPage === 'blog' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-contact"
            onClick={() => handleNavClick('contact')}
            className={`px-3 lg:px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all relative ${
              currentPage === 'contact'
                ? 'text-[#c5a059] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
            {currentPage === 'contact' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#c5a059] rounded-full" />
            )}
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:+91 8840129250"
            id="nav-phone-quick"
            className="text-slate-400 hover:text-[#c5a059] text-xs font-medium tracking-wider flex items-center gap-2 transition-colors pr-2 border-r border-slate-800"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="hidden lg:inline">+91 8840129250</span>
          </a>

          <button
            id="btn-open-consultation-header"
            onClick={onOpenConsultation}
            className="relative group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0b0f17] bg-[#c5a059] hover:bg-[#e2c887] transition-all rounded-xs shadow-lg shadow-[#c5a059]/20"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0b0f17]" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="btn-open-consultation-mobile-quick"
            onClick={onOpenConsultation}
            className="p-2 text-xs bg-[#c5a059] text-[#0b0f17] font-semibold rounded-xs"
            title="Book Consultation"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a059]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-menu" className="md:hidden bg-[#0e1420] border-b border-amber-900/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'Our Story' },
              { id: 'real-estate', label: 'Luxury Real Estate' },
              { id: 'services', label: 'Services Overview' },
              { id: 'weddings', label: 'Weddings & Celebrations' },
              { id: 'domestic-travel', label: 'Domestic Travel' },
              { id: 'international-travel', label: 'International Travel' },
              { id: 'mice', label: 'MICE & Corporate' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'blog', label: 'Blog & Journal' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id as PageType)}
                className={`text-left py-2 px-3 text-xs font-medium uppercase tracking-[0.2em] flex items-center justify-between border-b border-slate-800/80 ${
                  currentPage === item.id
                    ? 'text-[#c5a059] font-bold bg-[#121824]'
                    : 'text-slate-200 hover:text-[#c5a059]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              id="btn-mobile-consultation"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 bg-[#c5a059] text-[#0b0f17] text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 rounded-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
            <a
              href="tel:+97143889100"
              id="btn-mobile-call"
              className="w-full py-2.5 px-4 text-center border border-slate-700 text-slate-300 hover:text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Call Concierge (+91 8840129250)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
