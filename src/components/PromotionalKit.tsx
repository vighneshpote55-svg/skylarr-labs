import React from 'react';
import { Briefcase, CheckCircle2, BookOpen, Gift, FileText, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface PromotionalKitProps {
  onScrollToForm: () => void;
}

export const PromotionalKit: React.FC<PromotionalKitProps> = ({ onScrollToForm }) => {
  const kitItems = [
    {
      title: "Hardbound Spiral Visual Aid",
      desc: "Full-colour, multi-page scientific detailing flipbook with high-resolution anatomical illustrations and clinical charts to detail physicians with authority."
    },
    {
      title: "Physician Sample Catch-Covers",
      desc: "Branded, protective sampling folders to present complimentary physician trial tablets and capsules professionally during clinic visits."
    },
    {
      title: "Executive Leatherette MR Bag",
      desc: "Heavy-duty, weather-resistant detailing bag with dedicated compartments for product samples, literatures, and prescription pads."
    },
    {
      title: "Reminder Cards & Leave-Behinds (M-Cards)",
      desc: "Compact brand recall cards left on doctor consultation desks to keep your products top-of-mind during prescription generation."
    },
    {
      title: "Visiting Cards & Order Booking Pads",
      desc: "Customized with your name, phone number, and franchise address to establish professional identity with both doctors and chemists."
    },
    {
      title: "Doctor Gifts & Promotional Novelties",
      desc: "Seasonal clinical inputs, executive pens, prescription pads, and clinic wall calendars tailored to consultant physician preferences."
    }
  ];

  return (
    <section id="marketing-kit" className="py-20 bg-[#EAF3EE]/40 border-y border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE5DF]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Comprehensive Marketing Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Everything You Need to Detail Doctors from Day 1
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            We don't just supply medicine boxes. Every Skylarr Labs franchise partner receives an exhaustive suite of physician detailing collateral completely free of cost with their initial commercial order.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-16/10">
              <img
                src="/images/promotional_kit.jpg"
                alt="Skylarr Labs Free Marketing & Detailing Kit for Franchise Partners"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#DCE5DF] text-xs text-[#64716B] flex items-center justify-between">
              <span className="font-semibold text-[#17231F]">
                Included Free with Initial Order (₹40,000+ MOQ)
              </span>
              <span className="bg-[#FAF3E5] text-[#064E3B] px-2.5 py-1 rounded font-bold">
                100% Free of Cost
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Tool Breakdown */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {kitItems.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#DCE5DF] shadow-2xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#17231F] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#64716B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={onScrollToForm}
                className="w-full sm:w-auto bg-[#064E3B] hover:bg-[#08634B] text-white font-semibold text-sm px-7 py-3 h-auto rounded-xl gap-2 shadow-sm"
              >
                <span>Request Sample Marketing Kit</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
