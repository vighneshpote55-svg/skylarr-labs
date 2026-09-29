import React from 'react';
import { TARGET_PERSONAS } from '../data/pharmaData';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface WhoCanApplyProps {
  onSelectProfession: (profession: string) => void;
}

export const WhoCanApply: React.FC<WhoCanApplyProps> = ({ onSelectProfession }) => {
  return (
    <section className="py-20 bg-[#EAF3EE]/40 border-y border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE5DF]">
            <Users className="w-3.5 h-3.5" />
            <span>Eligibility & Partner Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Is a Skylarr Labs Franchise Right for You?
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            Whether you are an experienced field representative, an ambitious regional manager, or an established chemist, our commercial model is designed to multiply your earning potential.
          </p>
        </div>

        {/* 4 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TARGET_PERSONAS.map((persona, idx) => (
            <Card
              key={idx}
              className="bg-white border-[#DCE5DF] card-hover-effect rounded-2xl shadow-xs overflow-hidden flex flex-col justify-between"
            >
              <CardHeader className="pb-3 border-b border-gray-100 bg-[#FCFDFD]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="border-[#064E3B] text-[#064E3B] text-xs font-semibold px-2.5 py-0.5">
                    {persona.badge}
                  </Badge>
                  <span className="text-xs font-mono text-[#64716B]">Profile 0{idx + 1}</span>
                </div>
                <CardTitle className="text-xl font-bold text-[#17231F]">
                  {persona.role}
                </CardTitle>
                <div className="text-sm font-medium text-[#08634B]">
                  {persona.hook}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  {persona.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-[#17231F]">
                      <CheckCircle2 className="w-4 h-4 text-[#19734D] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectProfession(persona.role)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#DCE5DF] hover:border-[#064E3B] hover:bg-[#EAF3EE] text-[#064E3B] text-xs font-bold transition-all uppercase tracking-wider cursor-pointer"
                >
                  <span>Apply as {persona.role.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
