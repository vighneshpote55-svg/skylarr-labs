import React from 'react';
import { CheckCircle2, Play, Building2, FlaskConical, Award, Shield, FileCheck } from 'lucide-react';
import { Button } from './ui/button';

interface CompanyOverviewProps {
  onOpenVideo: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onOpenVideo }) => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile & Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Engineered for Clinical Efficacy. Backed by Reliable Supply.
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            Skylarr Labs is an established pharmaceutical enterprise committed to delivering high-efficacy formulations to healthcare professionals across India. Our PCD franchise framework guarantees operational autonomy and long-term brand equity.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Video Preview Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DCE5DF] bg-slate-900 aspect-16/10 group cursor-pointer" onClick={onOpenVideo}>
              <img
                src="/images/warehouse_logistics.jpg"
                alt="Skylarr Labs Central Warehouse & Distribution Hub"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#064E3B]/90 text-[#F8E7C9] flex items-center justify-center shadow-2xl border-2 border-[#F8E7C9] group-hover:scale-110 group-hover:bg-[#064E3B] transition-transform duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#F8E7C9] translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div>
                  <div className="font-semibold text-sm text-[#F8E7C9]">Virtual Walkthrough: Skylarr Labs Hub</div>
                  <div className="text-slate-300 text-xs">Cleanrooms, Formulation Testing & High-Speed Dispatch</div>
                </div>
                <span className="bg-black/60 px-2.5 py-1 rounded text-[11px] font-mono border border-white/20">
                  03:15 MIN
                </span>
              </div>
            </div>

            {/* Quality assurance pill row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-[#EAF3EE] p-3 rounded-xl border border-[#DCE5DF] text-center">
                <Award className="w-5 h-5 text-[#064E3B] mx-auto mb-1" />
                <div className="text-xs font-bold text-[#064E3B]">WHO-GMP</div>
                <div className="text-[10px] text-[#64716B]">Certified Units</div>
              </div>
              <div className="bg-[#EAF3EE] p-3 rounded-xl border border-[#DCE5DF] text-center">
                <FlaskConical className="w-5 h-5 text-[#064E3B] mx-auto mb-1" />
                <div className="text-xs font-bold text-[#064E3B]">GLP Approved</div>
                <div className="text-[10px] text-[#64716B]">Testing Labs</div>
              </div>
              <div className="bg-[#EAF3EE] p-3 rounded-xl border border-[#DCE5DF] text-center">
                <FileCheck className="w-5 h-5 text-[#064E3B] mx-auto mb-1" />
                <div className="text-xs font-bold text-[#064E3B]">DCGI Formulations</div>
                <div className="text-[10px] text-[#64716B]">Approved Molecules</div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#17231F] mb-6">
              Why Doctors Trust and Prescribe Skylarr Labs Formulations
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#17231F] mb-1">
                    Uncompromising Bioavailability & Stability
                  </h4>
                  <p className="text-sm text-[#64716B] leading-relaxed">
                    Every batch undergoes stringent accelerated stability chamber testing (Zone IVB compliance). We utilize high-barrier Alu-Alu blister foil and premium PVDC films to withstand varied Indian climatic conditions without deterioration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#17231F] mb-1">
                    Transparent Ethical Business Practices
                  </h4>
                  <p className="text-sm text-[#64716B] leading-relaxed">
                    We uphold unambiguous territory rights with stamped agreements. No sudden rate hikes, no unauthorized billing in allotted postal codes, and zero hidden logistic surcharges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#17231F] mb-1">
                    Complete Marketing & Physician Detailing Armamentarium
                  </h4>
                  <p className="text-sm text-[#64716B] leading-relaxed">
                    We equip your ground operations with comprehensive detailing aids, scientific literature, leave-behind cards, doctor samples, and branded promotional gifts that give your representatives immediate credibility with key prescribers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE5DF]">
              <Button
                variant="outline"
                onClick={onOpenVideo}
                className="border-[#064E3B] text-[#064E3B] hover:bg-[#EAF3EE] gap-2 font-semibold"
              >
                <Play className="w-4 h-4 fill-[#064E3B]" />
                <span>Watch Company Overview Video</span>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
