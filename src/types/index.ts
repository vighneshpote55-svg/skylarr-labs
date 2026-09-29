export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  state: string;
  district: string;
  profession: string;
  pharmaExperience: string;
  investmentRange: string;
  hasDrugLicense: string;
  consent: boolean;
}

export interface StoredLead extends LeadFormData {
  id: string;
  referenceCode: string;
  createdAt: string;
  assignedBdm: {
    name: string;
    phone: string;
    region: string;
  };
  status: 'new' | 'assigned' | 'contacted' | 'qualified';
}

export interface ProductItem {
  id: string;
  brandName: string;
  composition: string;
  category: string;
  packaging: string;
  therapeuticUse: string;
  highlight?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  territory: string;
  experience: string;
  quote: string;
  avatarInitials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
