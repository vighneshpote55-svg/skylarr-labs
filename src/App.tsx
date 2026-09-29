import React, { useState } from 'react';
import { StoredLead } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { CompanyOverview } from './components/CompanyOverview';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { WhoCanApply } from './components/WhoCanApply';
import { ProductShowcase } from './components/ProductShowcase';
import { PromotionalKit } from './components/PromotionalKit';
import { PromotionalMedia } from './components/PromotionalMedia';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { InquiryLookupModal } from './components/InquiryLookupModal';
import { VideoModal } from './components/VideoModal';
import { FloatingActions } from './components/FloatingActions';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [successLead, setSuccessLead] = useState<StoredLead | null>(null);
  const [lookupOpen, setLookupOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState('Medical Representative (MR)');

  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProfession = (prof: string) => {
    setSelectedProfession(prof);
    scrollToForm();
  };

  const handleLeadSuccess = (lead: StoredLead) => {
    setSuccessLead(lead);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFDFD] dark:bg-[#0A110D] text-[#17231F] dark:text-[#F1F5F3] transition-colors duration-200 selection:bg-[#F8E7C9] selection:text-[#064E3B]">
      {/* 1. Header & Navigation */}
      <Header
        onOpenLookup={() => setLookupOpen(true)}
        onScrollToForm={scrollToForm}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onScrollToForm={scrollToForm}
          onOpenVideo={() => setVideoOpen(true)}
        />

        {/* 3. Verified Trust Statistics (Anime.js) */}
        <StatsCounter />

        {/* 4. Company Overview & Manufacturing Infrastructure */}
        <CompanyOverview
          onOpenVideo={() => setVideoOpen(true)}
        />

        {/* 5. Franchise Benefits Matrix */}
        <Benefits
          onScrollToForm={scrollToForm}
        />

        {/* 6. How It Works (4-Step Onboarding Process) */}
        <HowItWorks
          onScrollToForm={scrollToForm}
        />

        {/* 7. Who Can Apply (Persona Matcher) */}
        <WhoCanApply
          onSelectProfession={handleSelectProfession}
        />

        {/* 8. Product Categories & Formulations Showcase */}
        <ProductShowcase
          onScrollToForm={scrollToForm}
        />

        {/* 9. Partner Support & Detailing Collateral Kit */}
        <PromotionalKit
          onScrollToForm={scrollToForm}
        />

        {/* 10. Behind the Scenes Media & Facility Walkthrough */}
        <PromotionalMedia
          onOpenVideo={() => setVideoOpen(true)}
        />

        {/* 11. Approved Partner Testimonials */}
        <Testimonials />

        {/* 12. FAQ Accordion */}
        <FaqSection
          onScrollToForm={scrollToForm}
        />

        {/* 13. Qualified Lead Capture Form & Territory Router */}
        <LeadCaptureForm
          selectedProfession={selectedProfession}
          onSuccess={handleLeadSuccess}
        />
      </main>

      {/* 14. Footer with Regulatory Disclaimers & Policies */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp, Call, Scroll-to-Top) */}
      <FloatingActions />

      {/* Modals & Dialogs */}
      <SuccessModal
        lead={successLead}
        isOpen={!!successLead}
        onClose={() => setSuccessLead(null)}
      />

      <InquiryLookupModal
        isOpen={lookupOpen}
        onClose={() => setLookupOpen(false)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      <Toaster position="top-right" />
    </div>
  );
}
