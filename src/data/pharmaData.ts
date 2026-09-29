import { ProductItem, TestimonialItem, FaqItem } from '../types';

export const STATS_DATA = [
  { value: 450, suffix: '+', label: 'Commercial Formulations', desc: 'DCGI-approved DCGI compositions across 8 therapeutic divisions' },
  { value: 28, suffix: '+', label: 'States & UTs Covered', desc: 'Growing pan-India network of dedicated PCD franchise partners' },
  { value: 99, suffix: '.4%', label: 'On-Time Dispatch SLA', desc: 'Orders packed and shipped within 24–48 hours from central warehouse' },
  { value: 15, suffix: '+', label: 'Years Experience', desc: 'Manufacturing excellence and ethical pharmaceutical marketing support' },
];

export const STATES_AND_DISTRICTS: Record<string, string[]> = {
  "Maharashtra": ["Pune", "Nagpur", "Nashik", "Chhatrapati Sambhajinagar", "Thane", "Kolhapur", "Solapur", "Amravati", "Nanded", "Jalgaon"],
  "Uttar Pradesh": ["Lucknow", "Varanasi", "Kanpur", "Agra", "Prayagraj", "Gorakhpur", "Meerut", "Bareilly", "Aligarh", "Moradabad"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Mehsana"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Sikar", "Sri Ganganagar"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai", "Katihar"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Belagavi", "Mangaluru", "Davanagere", "Ballari", "Vijayapura", "Shivamogga", "Tumakuru"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul"],
  "West Bengal": ["Kolkata", "Howrah", "Siliguri", "Asansol", "Durgapur", "Bardhaman", "Malda", "Bahrampur", "Kharagpur", "Haldia"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Pathankot", "Moga", "Abohar"],
  "Haryana": ["Faridabad", "Gurugram", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Kannur", "Alappuzha", "Kottayam", "Palakkad", "Malappuram"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Dhubri", "Diphu"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kadapa", "Kakinada", "Anantapur"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahabubnagar", "Nalgonda", "Adilabad", "Suryapet"]
};

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All Formulations" },
  { id: "antibiotics", label: "Antibiotics & General" },
  { id: "cardio-diabetic", label: "Cardiac & Diabetic" },
  { id: "pediatric", label: "Pediatric Care" },
  { id: "derma", label: "Dermatology" },
  { id: "gastro", label: "Gastro & Hepato" },
  { id: "nutra", label: "Nutraceuticals" }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "prod-1",
    brandName: "SKYLAPOD-200",
    composition: "Cefpodoxime Proxetil 200mg",
    category: "antibiotics",
    packaging: "10x10 Alu-Alu Blister",
    therapeuticUse: "Broad spectrum 3rd gen cephalosporin antibiotic for RTI, UTI & Skin infections",
    highlight: "High Physician Demand"
  },
  {
    id: "prod-2",
    brandName: "SKYLACLAV-625 LB",
    composition: "Amoxicillin 500mg + Clavulanic Acid 125mg + Lactic Acid Bacillus",
    category: "antibiotics",
    packaging: "10x1x6 Strip in Mono Carton",
    therapeuticUse: "Beta-lactamase resistant antibiotic with gut-friendly probiotics",
    highlight: "Flagship Molecule"
  },
  {
    id: "prod-3",
    brandName: "TELMASON-40 AM",
    composition: "Telmisartan 40mg + Amlodipine 5mg",
    category: "cardio-diabetic",
    packaging: "10x10 Alu-Alu Blister",
    therapeuticUse: "Synergistic dual action for essential hypertension management",
    highlight: "Cardiology Preferred"
  },
  {
    id: "prod-4",
    brandName: "GLICLASKY-M",
    composition: "Gliclazide 80mg + Metformin HCl 500mg (SR)",
    category: "cardio-diabetic",
    packaging: "10x10 Blister Pack",
    therapeuticUse: "Balanced dual agent for Type 2 Diabetes Glycemic Control",
    highlight: "Sustained Release"
  },
  {
    id: "prod-5",
    brandName: "SKYDROP-COLD",
    composition: "Paracetamol 125mg + Phenylephrine 2.5mg + Chlorpheniramine Maleate 1mg / ml",
    category: "pediatric",
    packaging: "15ml Amber Glass Bottle with Calibrated Dropper",
    therapeuticUse: "Infant cold, fever, and nasal congestion relief with strawberry flavour",
    highlight: "Paediatric Choice"
  },
  {
    id: "prod-6",
    brandName: "SKYCEF-O DRY SYRUP",
    composition: "Cefixime 50mg / 5ml with Sterile Purified Water",
    category: "pediatric",
    packaging: "30ml Pet Bottle with Measuring Cup",
    therapeuticUse: "Effective antibiotic for pediatric ear, throat, and chest infections",
    highlight: "With Purified Water"
  },
  {
    id: "prod-7",
    brandName: "LULISKY CREAM",
    composition: "Luliconazole 1.0% w/w",
    category: "derma",
    packaging: "30g Lami Tube with Tamper Seal",
    therapeuticUse: "Potent topical antifungal for Tinea pedis, cruris, and corporis",
    highlight: "Fast Skin Penetration"
  },
  {
    id: "prod-8",
    brandName: "CLOBISKY-GM OINTMENT",
    composition: "Clobetasol Propionate 0.05% + Gentamicin 0.1% + Miconazole 2.0%",
    category: "derma",
    packaging: "20g Tube in Outer Box",
    therapeuticUse: "Triple-action anti-inflammatory, antibacterial & antifungal formula",
    highlight: "High Margin"
  },
  {
    id: "prod-9",
    brandName: "PANTASKY-DSR",
    composition: "Pantoprazole 40mg + Domperidone 30mg (SR)",
    category: "gastro",
    packaging: "10x10 Alu-Alu Packing",
    therapeuticUse: "Proton pump inhibitor with prokinetic agent for GERD & hyperacidity",
    highlight: "Doctor's Choice"
  },
  {
    id: "prod-10",
    brandName: "SKYCAL-D3 FORTE",
    composition: "Calcium Carbonate 1250mg (eq to Elemental Calcium 500mg) + Vitamin D3 2000 IU",
    category: "nutra",
    packaging: "10x15 Blister Pack",
    therapeuticUse: "High-absorption calcium supplement for bone density & osteoporosis support",
    highlight: "Nutraceutical Grade"
  },
  {
    id: "prod-11",
    brandName: "SKYNERV-CD3",
    composition: "Methylcobalamin 1500mcg + Alpha Lipoic Acid 100mg + Pyridoxine + Folic Acid",
    category: "nutra",
    packaging: "10x10 Alu-Alu Blister",
    therapeuticUse: "Comprehensive neurotropic formula for diabetic peripheral neuropathy",
    highlight: "High Re-Order Rate"
  },
  {
    id: "prod-12",
    brandName: "RABISKY-LS",
    composition: "Rabeprazole Sodium 20mg + Levosulpiride 75mg (SR)",
    category: "gastro",
    packaging: "10x10 Alu-Alu Blister",
    therapeuticUse: "Advanced formula for refractory GERD, irritable bowel & dyspepsia",
    highlight: "Fast Symptom Relief"
  }
];

export const FRANCHISE_BENEFITS = [
  {
    title: "Territory Monopoly Rights",
    description: "Exclusive legal marketing rights in your designated district. Zero internal competition from Skylarr Labs ensures you reap 100% rewards from your doctor detailing.",
    badge: "Contract Guaranteed",
    icon: "ShieldCheck"
  },
  {
    title: "Attractive Profit Margins",
    description: "Direct manufacturer net rates allow you to build healthy distributor and chemist margins while retaining strong operational profitability.",
    badge: "Maximum ROI",
    icon: "TrendingUp"
  },
  {
    title: "Comprehensive Marketing Kit",
    description: "Free physician visual aids, catch covers, product glossary, order booking pads, MR detailing bags, reminder cards, and clinical gifts.",
    badge: "Free of Cost",
    icon: "Briefcase"
  },
  {
    title: "WHO-GMP Certified Formulations",
    description: "All products manufactured in inspected, state-of-the-art facilities with strict IP/BP/USP standards, batch stability tests, and premium Alu-Alu blister packaging.",
    badge: "Standard of Care",
    icon: "Award"
  },
  {
    title: "Rapid 24-48h Dispatch",
    description: "Centrally maintained buffer inventory ensures your stock orders are packed and dispatched via trusted express pharma transport without supply disruptions.",
    badge: "Supply Guarantee",
    icon: "Truck"
  },
  {
    title: "Dedicated BDM Support",
    description: "A seasoned Business Development Manager assists with territory clearance, product selection, doctor profiling strategies, and ongoing order management.",
    badge: "1-on-1 Guidance",
    icon: "UserCheck"
  }
];

export const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Territory Availability Check",
    description: "Fill the enquiry form with your desired district and state. Our team verifies if monopoly rights for your district are currently open."
  },
  {
    step: "02",
    title: "BDM Consultation & Price List",
    description: "Our regional BDM contacts you to share the product catalogue, net rate list, margin calculator, and customized product mix."
  },
  {
    step: "03",
    title: "Documentation & Franchise Agreement",
    description: "Submit simple Drug License and GST details. Sign the mutual monopoly agreement establishing your exclusive territory rights."
  },
  {
    step: "04",
    title: "First Stock Dispatch & Marketing Kit",
    description: "Your initial product inventory is dispatched along with complimentary physician visual aids, promotional inputs, and detailing collateral."
  }
];

export const TARGET_PERSONAS = [
  {
    role: "Medical Representatives (MRs)",
    hook: "Transition from Employee to Business Owner",
    points: [
      "Leverage your existing doctor relationships to build your own asset",
      "Earn substantial profit margins rather than fixed monthly commissions",
      "Gain full operational autonomy and flexible work hours",
      "Backed by ready promotional tools designed specifically for physician detailing"
    ],
    badge: "Most Popular Transition"
  },
  {
    role: "Area & Regional Managers (ASMs / RMs)",
    hook: "Scale a Multi-District Pharma Distribution Network",
    points: [
      "Deploy your team leadership skills to manage multiple franchise clusters",
      "Higher credit terms and volume incentives on bulk procurement",
      "Direct access to top management for custom molecule launches",
      "Exclusive multi-district territory allocation available on performance"
    ],
    badge: "High Growth Potential"
  },
  {
    role: "Pharma Stockists & Chemists",
    hook: "Maximize Counter Margins with Proprietary Brands",
    points: [
      "Replace third-party margin leakage with your own PCD monopoly lines",
      "Zero dead-stock risk with fast-moving general & pediatric formulations",
      "Supply nearby doctors and clinics with competitive pricing",
      "No heavy corporate targets; re-order as per your local counter velocity"
    ],
    badge: "Direct Retail Synergy"
  },
  {
    role: "New Pharma Entrepreneurs",
    hook: "Low-Risk Entry into India's Booming Pharma Industry",
    points: [
      "Complete guidance on drug license acquisition and GST compliance",
      "Curated initial order kit of top 25 high-turnover essential medicines",
      "Dedicated BDM support to train your sales personnel",
      "Predictable startup investment starting with comfortable working capital"
    ],
    badge: "Low Barrier to Entry"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Rajesh S. Deshmukh",
    role: "Franchise Partner (3+ Years)",
    territory: "Pune & Satara, Maharashtra",
    experience: "Ex-Area Sales Manager (11 yrs)",
    quote: "Switching from an ASM role to Skylarr Labs franchise was the best career decision. The packaging quality of SKYLAPOD and TELMASON is top tier, doctors readily accept the brand, and orders are consistently dispatched within 24 hours.",
    avatarInitials: "RD"
  },
  {
    name: "Sunil K. Agarwal",
    role: "PCD Partner (2+ Years)",
    territory: "Lucknow & Barabanki, Uttar Pradesh",
    experience: "Pharma Distributor (8 yrs)",
    quote: "Skylarr Labs strictly respects monopoly territory rights. I have never faced unauthorized cross-billing in my district. Their promotional input kit—especially the spiral visual aids and doctor reminder cards—makes physician detailing seamless.",
    avatarInitials: "SA"
  },
  {
    name: "Dr. Arvind Patel",
    role: "Franchise Associate (4+ Years)",
    territory: "Surat & Navsari, Gujarat",
    experience: "Healthcare Entrepreneur",
    quote: "What stands out about Skylarr Labs is the product stability and transparent net pricing. There are no hidden charges, batch expiry replacements are handled professionally, and my assigned BDM is always available on call.",
    avatarInitials: "AP"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: "Franchise Basics",
    question: "What is the minimum investment required to start a Skylarr Labs franchise?",
    answer: "You can start comfortably with an initial product inventory purchase of ₹40,000 to ₹75,000 depending on the number of products you choose to launch. We do not charge franchise fees or royalty; 100% of your investment goes into commercial saleable stock and complimentary promotional materials."
  },
  {
    category: "Legal & Eligibility",
    question: "Are a Drug License and GST number mandatory to apply?",
    answer: "Yes, as per Indian pharmaceutical regulations (Drugs & Cosmetics Act), a valid Wholesale Drug License (DL 20B/21B) and GST registration are required to bill and distribute medicines. If you are currently an MR in the process of applying for your license, you can reserve your territory while your documentation is completed."
  },
  {
    category: "Territory Rights",
    question: "How does Skylarr Labs protect my monopoly territory rights?",
    answer: "Every franchise agreement clearly specifies your allotted district boundaries. We enter your territory in our central ERP system, which automatically blocks any other party from ordering or shipping Skylarr Labs brands into your designated postal codes."
  },
  {
    category: "Promotional Support",
    question: "What promotional materials are provided free of cost with the initial order?",
    answer: "Every partner receives: (1) Heavy spiral-bound physician visual aid flipbook, (2) Catch covers for doctor samples, (3) Product glossary & detailing guide, (4) Visiting cards, (5) Order booking pads, (6) MR leatherette bag, and (7) Doctor gifts tailored to your specialty targets."
  },
  {
    category: "Logistics & Delivery",
    question: "How long does stock dispatch take after an order is placed?",
    answer: "Standard orders received before 2:00 PM are packed and handed over to our verified express transport or courier partners on the same day. For most tier-1 and tier-2 cities across India, delivery takes between 2 to 4 business days."
  },
  {
    category: "Product Range",
    question: "Can I add more products to my franchise portfolio later?",
    answer: "Yes, as your business grows and your relationships with physicians expand across different specialties (Pediatrics, Cardiology, Gynecology, Derma), you can easily add new products from our 450+ formulations at your regular net rates."
  }
];
