import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Skylarr Labs, I am interested in inquiring about PCD Pharma Franchise monopoly rights for my district. Please share details."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Theme Toggle (Switch between Dark & White mode anytime) */}
      <div className="pointer-events-auto shadow-lg rounded-xl">
        <ThemeToggle className="w-10 h-10 rounded-full" />
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white dark:bg-[#121C17] text-[#064E3B] dark:text-[#34D399] border border-[#DCE5DF] dark:border-[#1E3026] shadow-lg flex items-center justify-center hover:bg-[#EAF3EE] dark:hover:bg-[#16241D] transition-all cursor-pointer hover:-translate-y-0.5"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+919876543210"
        className="pointer-events-auto sm:hidden w-12 h-12 rounded-full bg-[#064E3B] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-all"
        title="Call BDM Desk"
      >
        <Phone className="w-5 h-5 text-[#F8E7C9]" />
      </a>

      {/* Floating WhatsApp Action with Tooltip Pill */}
      <a
        href={`https://wa.me/919876543210?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2.5 bg-[#19734D] hover:bg-[#13593B] text-white py-3 px-4 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 border-2 border-white dark:border-[#1E3026]"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat with BDM
        </span>
      </a>

    </div>
  );
};
