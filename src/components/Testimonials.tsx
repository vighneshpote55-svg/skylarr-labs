import React from 'react';
import { TESTIMONIALS_DATA } from '../data/pharmaData';
import { Quote, Star, MapPin, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#EAF3EE]/40 border-y border-[#DCE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCE5DF]">
            <Award className="w-3.5 h-3.5" />
            <span>Partner Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            Hear From Our Active Franchise Partners
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            Real feedback from Medical Representatives, Area Managers, and Distributors operating exclusive Skylarr Labs PCD franchises in their respective districts.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <Card
              key={idx}
              className="bg-white border-[#DCE5DF] card-hover-effect rounded-2xl shadow-xs overflow-hidden flex flex-col justify-between"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  {/* Rating Stars and Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#D4A95D]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4A95D]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#EAF3EE]" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm text-[#17231F] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Partner Details */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                    {t.avatarInitials}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#17231F]">{t.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#19734D]" />
                    </div>
                    <span className="text-xs text-[#064E3B] font-semibold">{t.role}</span>
                    <span className="text-[11px] text-[#64716B] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#D4A95D]" />
                      {t.territory}
                    </span>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note on claims */}
        <div className="mt-8 text-center text-xs text-[#64716B]">
          <span>Note: Feedback collected from verified commercial partners with active drug licenses. Individual performance varies based on local doctor coverage and territory effort.</span>
        </div>

      </div>
    </section>
  );
};
