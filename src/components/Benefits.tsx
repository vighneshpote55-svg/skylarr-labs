import React from 'react';
import { FRANCHISE_BENEFITS } from '../data/pharmaData';
import { ShieldCheck, TrendingUp, Briefcase, Award, Truck, UserCheck, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

interface BenefitsProps {
  onScrollToForm: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onScrollToForm }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#064E3B]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#064E3B]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#064E3B]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#064E3B]" />;
      case 'Truck': return <Truck className="w-6 h-6 text-[#064E3B]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#064E3B]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#064E3B]" />;
    }
  };

  return (
    <section id="benefits" className="py-20 bg-[#EAF3EE]/40 border-y border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE5DF]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Skylarr Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Built to Maximize Your Pharma Business Success
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            We eliminate the standard headaches of PCD pharma distribution—delays, stock shortages, cross-territory poaching, and poor marketing support—so you can focus solely on building physician relationships.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FRANCHISE_BENEFITS.map((benefit, idx) => (
            <Card
              key={idx}
              className="bg-white border-[#DCE5DF] card-hover-effect rounded-2xl shadow-xs overflow-hidden flex flex-col justify-between group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3EE] group-hover:bg-[#064E3B] flex items-center justify-center transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">
                      {getIcon(benefit.icon)}
                    </span>
                  </div>
                  <Badge variant="secondary" className="bg-[#FAF3E5] text-[#064E3B] border border-[#F8E7C9] text-xs font-semibold px-2.5 py-0.5">
                    {benefit.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-[#17231F] group-hover:text-[#064E3B] transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-[#64716B] leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#064E3B] to-[#022C22] rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-2xl font-bold text-[#F8E7C9] mb-2">
              Ready to secure exclusive rights for your district?
            </h3>
            <p className="text-sm text-emerald-200 leading-relaxed">
              District allocations are processed on a first-come, first-evaluated basis. Check current vacant territories now.
            </p>
          </div>
          <button
            onClick={onScrollToForm}
            className="shrink-0 bg-[#F8E7C9] hover:bg-white text-[#064E3B] font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm uppercase tracking-wide cursor-pointer"
          >
            Apply for District Monopoly
          </button>
        </div>

      </div>
    </section>
  );
};
