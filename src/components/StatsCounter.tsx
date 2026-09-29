import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { STATS_DATA } from '../data/pharmaData';

export const StatsCounter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Directly render numbers without animation
      counterRefs.current.forEach((el, index) => {
        if (el) el.innerText = STATS_DATA[index].value.toString();
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATS_DATA.forEach((stat, index) => {
            const targetEl = counterRefs.current[index];
            if (!targetEl) return;

            const counterObj = { val: 0 };
            animate(counterObj, {
              val: stat.value,
              duration: 2000,
              ease: 'outExpo',
              onUpdate: () => {
                if (targetEl) {
                  targetEl.innerText = Math.floor(counterObj.val).toString();
                }
              }
            });
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative z-10 py-12 bg-[#064E3B] text-white overflow-hidden shadow-inner">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/60">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}>
              <div className="flex items-baseline justify-center text-4xl sm:text-5xl font-black text-[#F8E7C9] tracking-tight mb-2">
                <span ref={(el) => { counterRefs.current[idx] = el; }}>
                  {hasAnimated ? stat.value : '0'}
                </span>
                <span className="text-[#D4A95D] font-extrabold">{stat.suffix}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs text-emerald-200/80 max-w-[200px] leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
