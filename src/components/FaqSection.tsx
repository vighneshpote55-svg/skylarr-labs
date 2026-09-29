import React from 'react';
import { FAQS_DATA } from '../data/pharmaData';
import { HelpCircle, PhoneCall } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface FaqSectionProps {
  onScrollToForm: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            Everything you need to know about starting, managing, and scaling a Skylarr Labs PCD pharma franchise.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="bg-[#FCFDFD] p-6 sm:p-8 rounded-2xl border border-[#DCE5DF] shadow-xs">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS_DATA.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-[#DCE5DF] rounded-xl px-4 py-1 data-[state=open]:border-[#064E3B] data-[state=open]:bg-[#EAF3EE]/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-[#17231F] hover:text-[#064E3B] hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#D4A95D] font-bold">0{idx + 1}</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#64716B] leading-relaxed pt-2 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-6 rounded-xl bg-[#EAF3EE] border border-[#DCE5DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-[#064E3B]">Have a specific query regarding your territory?</div>
            <div className="text-xs text-[#64716B] mt-0.5">Our Business Development Managers are available Mon–Sat (9 AM to 7 PM).</div>
          </div>
          <button
            onClick={onScrollToForm}
            className="shrink-0 bg-[#064E3B] hover:bg-[#08634B] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Speak to BDM
          </button>
        </div>

      </div>
    </section>
  );
};
