import React, { useState, useEffect } from 'react';
import { PageType, Property } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { RealEstatePage } from './pages/RealEstatePage';
import { WeddingsPage } from './pages/WeddingsPage';
import { DomesticTravelPage } from './pages/DomesticTravelPage';
import { InternationalTravelPage } from './pages/InternationalTravelPage';
import { MicePage } from './pages/MicePage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/ConsultationModal';
import { PropertyModal } from './components/PropertyModal';
import { AiAdvisorWidget } from './components/AiAdvisorWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [hasSubmittedForm, setHasSubmittedForm] = useState<boolean>(() => {
    try {
      return localStorage.getItem('anahita_form_submitted') === 'true';
    } catch {
      return false;
    }
  });

  // Pop up contact form on initial page load / refresh if on blog page and form has not been submitted yet
  useEffect(() => {
    if (!hasSubmittedForm && currentPage === 'blog') {
      setIsConsultationOpen(true);
    }
  }, [hasSubmittedForm, currentPage]);

  // Pop up contact form whenever switching to the blog page if form has not been submitted yet
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!hasSubmittedForm && page === 'blog') {
      setIsConsultationOpen(true);
    }
  };

  const handleFormSubmitted = () => {
    setHasSubmittedForm(true);
    try {
      localStorage.setItem('anahita_form_submitted', 'true');
    } catch {
      // ignore quota / storage access errors
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onPageChange={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onPageChange={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onPageChange={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'real-estate':
        return (
          <RealEstatePage
            onPageChange={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'weddings':
        return (
          <WeddingsPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'domestic-travel':
        return (
          <DomesticTravelPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'international-travel':
        return (
          <InternationalTravelPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'mice':
        return (
          <MicePage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'gallery':
        return <GalleryPage />;
      case 'blog':
        return (
          <BlogPage
            onPageChange={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onPageChange={handlePageChange}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
          />
        );
    }
  };

  return (
    <div id="anahita-app-root" className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans flex flex-col selection:bg-[#c5a059] selection:text-black">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        onPageChange={handlePageChange}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Modals & Floating Widgets */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        
      />

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <AiAdvisorWidget />
    </div>
  );
}
