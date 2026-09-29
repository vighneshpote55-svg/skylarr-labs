import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#022C22] text-white border-t border-[#064E3B]">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Official Corporate Logo for Dark Background */}
              <img
                src="/skylarr-logo-dark@2x.png"
                alt="Skylarr Labs ®"
                className="h-14 sm:h-16 w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>

            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Skylarr Labs is an ethical pharmaceutical healthcare enterprise delivering WHO-GMP certified formulations across India. We empower field professionals, stockists, and entrepreneurs with exclusive district monopoly rights and high-yield PCD franchise models.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="bg-[#064E3B] px-3 py-1.5 rounded-lg border border-emerald-800 text-[11px] font-semibold text-[#F8E7C9] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F8E7C9]" />
                <span>WHO-GMP & GLP Compliant Units</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8E7C9] mb-4">
              Franchise Modules
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li><a href="#overview" className="hover:text-white transition-colors">Corporate Infrastructure</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Exclusive Monopoly Rights</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">4-Step Onboarding</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">450+ Molecule Range</a></li>
              <li><a href="#marketing-kit" className="hover:text-white transition-colors">Complimentary Detailing Kit</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Franchise FAQ & Policies</a></li>
            </ul>
          </div>

          {/* Col 4: Therapeutic Divisions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8E7C9] mb-4">
              Key Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li><span className="hover:text-white transition-colors">Cardio-Diabetic Care</span></li>
              <li><span className="hover:text-white transition-colors">Antibiotics & Anti-Infectives</span></li>
              <li><span className="hover:text-white transition-colors">Pediatric Suspensions & Drops</span></li>
              <li><span className="hover:text-white transition-colors">Dermatology & Cosmeceuticals</span></li>
              <li><span className="hover:text-white transition-colors">Gastro & Hepato Formulations</span></li>
              <li><span className="hover:text-white transition-colors">Nutraceutical Supplements</span></li>
            </ul>
          </div>

          {/* Col 5: Head Office & BDM Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8E7C9] mb-4">
              Corporate Desk
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A95D] shrink-0 mt-0.5" />
                <span>Plot No. 48-A, Phase-II, Industrial Area, Chandigarh & Solan Pharma Corridor, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A95D] shrink-0" />
                <span>BDM Desk: <a href="tel:+919876543210" className="text-white font-semibold hover:underline">+91 98765 43210</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A95D] shrink-0" />
                <span>support@skylarrlabs.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Statutory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-emerald-900/60 text-[11px] text-emerald-200/60 space-y-2">
          <p>
            <strong>Regulatory Notice:</strong> Skylarr Labs operates in strict compliance with the Drugs and Cosmetics Act, 1940 and rules framed thereunder. PCD Pharma Franchise rights and stock distribution require a valid Wholesale Drug License (Form 20B/21B) and GSTIN. Territory monopoly is subject to prior vacancy check and mutual agreement execution.
          </p>
          <p>
            <strong>Content & Ethics Policy:</strong> All product indications, compositions, and packing details are intended solely for medical professionals and licensed distribution partners. We do not publish unsubstantiated revenue guarantees. Individual business performance depends on localized doctor detailing and market execution.
          </p>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div>
            © {new Date().getFullYear()} Skylarr Labs Pharmaceuticals Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Notice
            </button>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Franchise Terms
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-[#121C17] text-[#17231F] dark:text-[#F1F5F3] border-[#DCE5DF] dark:border-[#1E3026] p-6 rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#064E3B] dark:text-[#34D399]">
              Privacy & Lead Data Notice
            </DialogTitle>
            <DialogDescription className="text-xs text-[#64716B] dark:text-[#94A89E]">
              How Skylarr Labs handles your inquiry information.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-xs text-[#64716B] dark:text-[#94A89E] leading-relaxed pt-2">
            <p>
              1. <strong>Purpose of Collection:</strong> Information submitted through our franchise lead form (Name, Phone, State, District, Profession, Experience) is used exclusively for verifying territory availability and sharing commercial pricing.
            </p>
            <p>
              2. <strong>No Third-Party Sharing:</strong> We do not sell, rent, or lease your personal contact details to external lead aggregators or marketing agencies.
            </p>
            <p>
              3. <strong>Data Security:</strong> Submissions are secured via encrypted transit and stored in protected enterprise databases with restricted access for authorized Business Development Managers only.
            </p>
            <p>
              4. <strong>Right to Opt-Out:</strong> You may request the modification or deletion of your franchise inquiry at any time by emailing us at privacy@skylarrlabs.com.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Franchise Terms Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-[#121C17] text-[#17231F] dark:text-[#F1F5F3] border-[#DCE5DF] dark:border-[#1E3026] p-6 rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#064E3B] dark:text-[#34D399]">
              Franchise Operating Guidelines
            </DialogTitle>
            <DialogDescription className="text-xs text-[#64716B] dark:text-[#94A89E]">
              Standard terms governing territory allocation and brand distribution.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-xs text-[#64716B] dark:text-[#94A89E] leading-relaxed pt-2">
            <p>
              1. <strong>Monopoly Rights:</strong> Assigned exclusively for the agreed district boundaries. The partner agrees not to supply Skylarr Labs products outside their approved zone.
            </p>
            <p>
              2. <strong>Payment & Dispatch:</strong> First orders are executed on 100% advance or approved transport pay-on-delivery terms. Regular dispatches are processed within 24 to 48 hours.
            </p>
            <p>
              3. <strong>Breakage & Expiry:</strong> Standard industry breakage/leakage claims reported within 72 hours of transport delivery with supporting photographs will be credited in the next billing cycle.
            </p>
            <p>
              4. <strong>Documentation:</strong> Valid Wholesale Drug License (Form 20B/21B) and GST certificate must be submitted prior to the release of the first commercial billing.
            </p>
          </div>
        </DialogContent>
      </Dialog>

    </footer>
  );
};
