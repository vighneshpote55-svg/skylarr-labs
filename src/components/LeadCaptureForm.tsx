import React, { useState } from 'react';
import { STATES_AND_DISTRICTS } from '../data/pharmaData';
import { LeadFormData, StoredLead } from '../types';
import { ShieldCheck, Send, CheckCircle2, AlertCircle, Phone, MapPin, User, Clock, FileCheck } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LeadCaptureFormProps {
  selectedProfession?: string;
  onSuccess: (lead: StoredLead) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ selectedProfession, onSuccess }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    state: 'Maharashtra',
    district: STATES_AND_DISTRICTS['Maharashtra'][0] || '',
    profession: selectedProfession || 'Medical Representative (MR)',
    pharmaExperience: '3-5 years',
    investmentRange: '₹50,000 to ₹1,00,000',
    hasDrugLicense: 'Yes, Active Drug License & GST',
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update district when state changes
  const handleStateChange = (stateName: string) => {
    const districts = STATES_AND_DISTRICTS[stateName] || [];
    setFormData(prev => ({
      ...prev,
      state: stateName,
      district: districts[0] || ''
    }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter your full name (minimum 3 characters)';
    }

    // Clean phone number
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.state) {
      errs.state = 'Please select your state';
    }

    if (!formData.district) {
      errs.district = 'Please select your district';
    }

    if (!formData.consent) {
      errs.consent = 'You must consent to receive franchise details & callback';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getBdmForRegion = (state: string) => {
    const west = ['Maharashtra', 'Gujarat', 'Rajasthan'];
    const north = ['Uttar Pradesh', 'Punjab', 'Haryana'];
    const south = ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana', 'Kerala'];

    if (west.includes(state)) {
      return { name: "Vikram R. Shinde", phone: "+91 98765 12341", region: "West Zone Desk" };
    } else if (north.includes(state)) {
      return { name: "Anand K. Sharma", phone: "+91 98765 12342", region: "North Zone Desk" };
    } else if (south.includes(state)) {
      return { name: "K. Murali Mohan", phone: "+91 98765 12343", region: "South Zone Desk" };
    } else {
      return { name: "Amitava Sen", phone: "+91 98765 12344", region: "East & Central Zone Desk" };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate unique reference code SL-XXXXXX
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      const refCode = `SL-${randomCode}`;
      const assignedBdm = getBdmForRegion(formData.state);

      const newLead: StoredLead = {
        ...formData,
        id: crypto.randomUUID ? crypto.randomUUID() : `lead-${Date.now()}`,
        referenceCode: refCode,
        createdAt: new Date().toISOString(),
        assignedBdm,
        status: 'assigned',
      };

      // Save to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('skylarr_leads') || '[]');
        existing.unshift(newLead);
        localStorage.setItem('skylarr_leads', JSON.stringify(existing));
      } catch (err) {
        console.error('Failed to store lead', err);
      }

      setIsSubmitting(false);
      onSuccess(newLead);
    }, 900);
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-b from-white via-[#EAF3EE]/30 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE5DF]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Territory Monopoly Allocation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Apply for Exclusive Franchise Rights in Your District
          </h2>
          <p className="text-[#64716B] text-base leading-relaxed">
            Fill in your preferred territory details below. Our regional Business Development Manager will check district vacancy and share the product rate list within 2 hours.
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-white border-[#DCE5DF] shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-[#064E3B] text-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-[#F8E7C9]">
                  Franchise Application & Territory Verification
                </CardTitle>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                  Guaranteed 100% data confidentiality. No spam; verified BDM callback only.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#022C22] px-3.5 py-1.5 rounded-lg border border-emerald-700/60 shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#F8E7C9]" />
                <span className="text-xs font-medium text-emerald-200">ISO/GMP Verified Lead</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#B42318]">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g. Ramesh K. Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`h-12 rounded-xl text-sm ${errors.fullName ? 'border-[#B42318] focus-visible:ring-[#B42318]' : 'border-[#DCE5DF]'}`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#B42318] mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    Mobile Number (WhatsApp Preferred) <span className="text-[#B42318]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64716B]">
                      +91
                    </span>
                    <Input
                      type="tel"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`h-12 pl-12 rounded-xl text-sm ${errors.phone ? 'border-[#B42318] focus-visible:ring-[#B42318]' : 'border-[#DCE5DF]'}`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-[#B42318] mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Territory Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    State for Franchise <span className="text-[#B42318]">*</span>
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="w-full h-12 px-3.5 rounded-xl border border-[#DCE5DF] bg-white text-sm text-[#17231F] font-medium focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  >
                    {Object.keys(STATES_AND_DISTRICTS).map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    Target District <span className="text-[#B42318]">*</span>
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full h-12 px-3.5 rounded-xl border border-[#DCE5DF] bg-white text-sm text-[#17231F] font-medium focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  >
                    {(STATES_AND_DISTRICTS[formData.state] || []).map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Professional Background */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    Current Profession
                  </label>
                  <select
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full h-12 px-3 rounded-xl border border-[#DCE5DF] bg-white text-xs sm:text-sm text-[#17231F] font-medium focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  >
                    <option value="Medical Representative (MR)">Medical Representative (MR)</option>
                    <option value="Area Sales Manager (ASM)">Area Sales Manager (ASM)</option>
                    <option value="Regional Sales Manager (RSM)">Regional Sales Manager (RSM)</option>
                    <option value="Pharma Stockist / Wholesaler">Pharma Stockist / Wholesaler</option>
                    <option value="Chemist / Retail Pharmacy">Chemist / Retail Pharmacy</option>
                    <option value="Healthcare Entrepreneur">Healthcare Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    Pharma Field Experience
                  </label>
                  <select
                    value={formData.pharmaExperience}
                    onChange={(e) => setFormData({ ...formData, pharmaExperience: e.target.value })}
                    className="w-full h-12 px-3 rounded-xl border border-[#DCE5DF] bg-white text-xs sm:text-sm text-[#17231F] font-medium focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  >
                    <option value="Fresher / Entering Pharma">Fresher / Entering Pharma</option>
                    <option value="1-3 years">1â€“3 years</option>
                    <option value="3-5 years">3â€“5 years</option>
                    <option value="5-10 years">5â€“10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                    Investment Budget
                  </label>
                  <select
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                    className="w-full h-12 px-3 rounded-xl border border-[#DCE5DF] bg-white text-xs sm:text-sm text-[#17231F] font-medium focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  >
                    <option value="₹40,000 to ₹75,000">₹40,000 to ₹75,000 (Starter)</option>
                    <option value="₹75,000 to ₹1,50,000">₹75,000 to ₹1,50,000 (Standard)</option>
                    <option value="₹1,50,000 to ₹3,00,000">₹1,50,000 to ₹3,00,000 (Multi-division)</option>
                    <option value="₹3,00,000+">₹3,00,000+ (Exclusive Territory Hub)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Drug License Status */}
              <div>
                <label className="block text-xs font-bold text-[#17231F] uppercase tracking-wider mb-2">
                  Drug License (DL 20B/21B) & GST Status
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Yes, Active Drug License & GST",
                    "Applied / In-Process",
                    "Need Guidance / Starting New"
                  ].map((status) => (
                    <label
                      key={status}
                      className={`flex items-center gap-2.5 p-3.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                        formData.hasDrugLicense === status
                          ? 'border-[#064E3B] bg-[#EAF3EE] text-[#064E3B]'
                          : 'border-[#DCE5DF] text-[#64716B] hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="drugLicense"
                        checked={formData.hasDrugLicense === status}
                        onChange={() => setFormData({ ...formData, hasDrugLicense: status })}
                        className="accent-[#064E3B]"
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#064E3B] rounded"
                  />
                  <span className="text-xs text-[#64716B] leading-relaxed">
                    I authorize Skylarr Labs to verify territory availability in <strong className="text-[#17231F]">{formData.district}, {formData.state}</strong> and contact me via phone/WhatsApp with product catalogues and franchise net pricing.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-[#B42318] mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#064E3B] hover:bg-[#08634B] text-white text-base font-bold py-6 rounded-xl shadow-lg shadow-emerald-950/20 gap-3 group transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Checking Territory Vacancy...
                    </span>
                  ) : (
                    <>
                      <span>Submit Application & Check Territory</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                <div className="text-center mt-3 text-[11px] text-[#64716B]">
                  ðŸ”’ Direct ERP Registration â€¢ Unique Reference Code (`SL-XXXXXX`) issued immediately
                </div>
              </div>

            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
