import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS_LIST } from '../data/pharmaData';
import { Pill, FileSpreadsheet, Check, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProductShowcaseProps {
  onScrollToForm: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onScrollToForm }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3EE] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3">
            <Pill className="w-3.5 h-3.5" />
            <span>High-Demand Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mb-4">
            450+ DCGI-Approved Pharmaceutical Formulations
          </h2>
          <p className="text-[#64716B] text-base sm:text-lg leading-relaxed">
            Engineered with high bioavailability, packaged in premium Alu-Alu blister foil, and priced competitively to ensure high re-order rates from consulting doctors and chemists.
          </p>
        </div>

        {/* Product Visual Showcase Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden shadow-lg border border-[#DCE5DF] bg-[#FCFDFD] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-[#D4A95D] uppercase mb-2">
                Flagship Packaging Standard
              </span>
              <h3 className="text-2xl font-bold text-[#064E3B] mb-3">
                Attractive Packaging That Commands Doctor Respect
              </h3>
              <p className="text-sm text-[#64716B] leading-relaxed mb-6">
                First impressions matter in pharmaceutical marketing. Skylarr Labs products feature tamper-evident holographic mono-cartons, leak-proof amber glass/PET bottles, and high-barrier tropical blister packaging.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#17231F]">
                <span className="bg-[#EAF3EE] px-3 py-1.5 rounded-lg border border-[#DCE5DF]">✓ Alu-Alu Blister</span>
                <span className="bg-[#EAF3EE] px-3 py-1.5 rounded-lg border border-[#DCE5DF]">✓ Tamper Seals</span>
                <span className="bg-[#EAF3EE] px-3 py-1.5 rounded-lg border border-[#DCE5DF]">✓ Clear QR Verification</span>
              </div>
            </div>
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative">
              <img
                src="/images/pharma_products.jpg"
                alt="Skylarr Labs Pharmaceutical Medicine Packaging Collection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#064E3B] text-white shadow-sm'
                  : 'bg-[#EAF3EE] text-[#17231F] hover:bg-[#DCE5DF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <Card
              key={prod.id}
              className="bg-white border-[#DCE5DF] card-hover-effect rounded-xl shadow-xs overflow-hidden flex flex-col justify-between"
            >
              <CardHeader className="pb-3 bg-[#FCFDFD] border-b border-gray-100">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="bg-[#FAF3E5] border-[#F8E7C9] text-[#064E3B] text-[11px] font-semibold">
                    {prod.highlight || 'DCGI Approved'}
                  </Badge>
                  <span className="text-[11px] font-mono text-[#64716B] uppercase">{prod.category}</span>
                </div>
                <CardTitle className="text-lg font-bold text-[#064E3B]">
                  {prod.brandName}
                </CardTitle>
                <div className="text-xs font-semibold text-[#17231F] line-clamp-2">
                  {prod.composition}
                </div>
              </CardHeader>
              <CardContent className="pt-4 flex flex-col justify-between flex-1">
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-[#64716B]">
                    <span className="font-semibold text-[#17231F]">Packing:</span> {prod.packaging}
                  </div>
                  <div className="text-xs text-[#64716B] leading-relaxed">
                    <span className="font-semibold text-[#17231F]">Indication:</span> {prod.therapeuticUse}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#19734D] font-semibold">● In Stock for Immediate Dispatch</span>
                  <button
                    onClick={onScrollToForm}
                    className="text-[#064E3B] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Enquire Rate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Catalog Download Prompt */}
        <div className="mt-12 text-center p-6 bg-[#EAF3EE] rounded-2xl border border-[#DCE5DF] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#064E3B]">Want to view the full product price list?</h4>
            <p className="text-xs text-[#64716B]">Includes net rates, MRP, and composition details of all 450+ molecules.</p>
          </div>
          <Button
            onClick={onScrollToForm}
            className="bg-[#064E3B] hover:bg-[#08634B] text-white text-xs font-semibold px-5 py-2.5 h-auto shrink-0 gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Request Full Price List</span>
          </Button>
        </div>

      </div>
    </section>
  );
};
