import React from 'react';
import { ShieldCheck, Award, ArrowRight, Play, CheckCircle2, MapPin, Sparkles, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HeroProps {
  onScrollToForm: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm, onOpenVideo }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#EAF3EE]/40 via-white to-white">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] hero-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EE] border border-[#DCE5DF] text-[#064E3B] text-xs font-semibold mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A95D]" />
              <span>Exclusive PCD Pharma Franchise Opportunity</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]"></span>
              <span className="text-[#08634B]">Monopoly Rights 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#064E3B] leading-[1.15] mb-6">
              Build Your Own Pharma Business with <span className="underline decoration-[#F8E7C9] decoration-wavy decoration-2">Guaranteed Monopoly</span> Territory Rights.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#64716B] leading-relaxed mb-8 max-w-2xl font-normal">
              Partner directly with <strong className="text-[#17231F] font-semibold">Skylarr Labs</strong>. Access over 450+ DCGI & WHO-GMP certified formulations, direct manufacturer net margins, complete physician detailing collateral, and dedicated BDM operational support.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {[
                "100% District Monopoly Rights",
                "WHO-GMP Certified Quality Formulations",
                "Complimentary Detailing Bag & Visual Aid",
                "Guaranteed 24â€“48h Dispatch SLA"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#17231F] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#19734D] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={onScrollToForm}
                className="bg-[#064E3B] hover:bg-[#08634B] text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-emerald-950/20 gap-3 group transition-all"
              >
                <span>Check Territory Availability</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenVideo}
                className="border-[#DCE5DF] bg-white hover:bg-[#EAF3EE] text-[#064E3B] font-semibold text-base px-6 py-6 rounded-xl gap-2.5 shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-[#064E3B] translate-x-0.5" />
                </div>
                <span>Watch Facility Tour</span>
              </Button>
            </div>

            {/* Bottom mini-social proof */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-[#DCE5DF]/80 w-full text-xs text-[#64716B]">
              <div className="flex -space-x-2">
                {['M', 'R', 'P', 'S'].map((letter, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-[10px] ring-2 ring-white">
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[#17231F]">Trusted by 350+ Franchise Partners</span>
                <span>Active distribution across 28 Indian States & Union Territories</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#064E3B]/20 via-[#F8E7C9]/40 to-transparent blur-lg -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-16/11">
                <img
                  src="/images/hero_facility.jpg"
                  alt="Skylarr Labs Corporate Facility & WHO-GMP Formulation Laboratory"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* In-image caption tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <Building2 className="w-4 h-4 text-[#F8E7C9]" />
                    <span className="text-xs font-medium">WHO-GMP Compliant Manufacturing</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#F8E7C9] bg-[#064E3B]/80 px-2 py-1 rounded">
                    DCGI Approved
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Monopoly Guarantee */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-[#DCE5DF] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EAF3EE] flex items-center justify-center text-[#064E3B]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#064E3B] uppercase tracking-wider">Territory Safety</div>
                  <div className="text-xs font-semibold text-[#17231F]">1 Partner per District</div>
                </div>
              </div>

              {/* Floating Badge 2: Dispatch Guarantee */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-[#DCE5DF] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF3E5] flex items-center justify-center text-[#D4A95D]">
                  <Award className="w-6 h-6 text-[#064E3B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#064E3B] uppercase tracking-wider">Fast Turnaround</div>
                  <div className="text-xs font-semibold text-[#17231F]">Same-Day Dispatch SLA</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
