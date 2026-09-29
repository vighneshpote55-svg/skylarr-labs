import React from 'react';
import { ONBOARDING_STEPS } from '../data/pharmaData';
import { CheckCircle2, ArrowRight, ListOrdered } from 'lucide-react';
import { Button } from './ui/button';

interface HowItWorksProps {
  onScrollToForm: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onScrollToForm }) => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3">
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Simple 4-Step Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            From Inquiry to First Dispatch in 4 Easy Steps
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            We have streamlined our partner onboarding process to ensure your territory is verified, documents are processed, and your initial commercial inventory arrives without delay.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {ONBOARDING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-[#FCFDFD] p-6 rounded-2xl border border-[#DCE5DF] shadow-xs flex flex-col justify-between group hover:border-[#064E3B] transition-all duration-300"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#D4A95D] font-mono group-hover:scale-110 transition-transform inline-block">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#17231F] mb-2.5 group-hover:text-[#064E3B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#64716B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#DCE5DF] text-xs text-[#064E3B] font-semibold flex items-center gap-1">
                <span>Phase {idx + 1} Completion</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={onScrollToForm}
            className="bg-[#064E3B] hover:bg-[#08634B] text-white font-semibold px-8 py-6 rounded-xl shadow-md gap-2"
          >
            <span>Start Step 1: Submit Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
};
