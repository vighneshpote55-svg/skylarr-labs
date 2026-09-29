import React from 'react';
import { Play, Video, Eye, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface PromotionalMediaProps {
  onOpenVideo: () => void;
}

export const PromotionalMedia: React.FC<PromotionalMediaProps> = ({ onOpenVideo }) => {
  const mediaItems = [
    {
      title: "Cleanroom Formulation & Tableting",
      duration: "02:15",
      type: "Facility Tour",
      img: "/images/hero_facility.jpg"
    },
    {
      title: "Alu-Alu High Speed Blister Packaging",
      duration: "01:45",
      type: "Quality Control",
      img: "/images/pharma_products.jpg"
    },
    {
      title: "Express Pharma Dispatch & Cold-Chain",
      duration: "03:10",
      type: "Logistics Hub",
      img: "/images/warehouse_logistics.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Behind the Formulations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            See Skylarr Labs in Action
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            Take a transparent look inside our manufacturing processes, strict quality control tests, and modern automated logistics operations.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              onClick={onOpenVideo}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-[#DCE5DF] bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#064E3B]/90 text-[#F8E7C9] flex items-center justify-center shadow-lg border border-[#F8E7C9]/40 group-hover:scale-115 transition-transform duration-200">
                    <Play className="w-5 h-5 fill-[#F8E7C9] translate-x-0.5" />
                  </div>
                </div>

                {/* Badge tags */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-white border border-white/20">
                  {item.type}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-white">
                  {item.duration}
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-[#17231F] group-hover:text-[#064E3B] transition-colors">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs text-[#64716B]">
                  <span>Click to view video</span>
                  <span className="text-[#064E3B] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Watch <Play className="w-2.5 h-2.5 fill-[#064E3B]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
