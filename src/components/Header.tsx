import React, { useState } from 'react';
import { Phone, Shield, Menu, X, ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenLookup: () => void;
  onScrollToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLookup, onScrollToForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Why Skylarr", href: "#overview" },
    { label: "Franchise Benefits", href: "#benefits" },
    { label: "How It Works", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "Marketing Kit", href: "#marketing-kit" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-200">
      {/* Top Notification Bar */}
      <div className="bg-[#022C22] text-[#F8E7C9] text-xs py-2 px-4 border-b border-[#064E3B]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#19734D] animate-pulse"></span>
            <span className="font-medium tracking-wide">Pan-India PCD Pharma Franchise Allotments Open (2026–27)</span>
            <span className="hidden md:inline text-emerald-300">| Exclusive District Monopoly Rights</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <Phone className="w-3.5 h-3.5 text-[#F8E7C9]" />
              BDM Desk: <a href="tel:+919876543210" className="hover:underline font-semibold text-[#F8E7C9]">+91 98765 43210</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Skylarr Labs Official Logo */}
            <a href="#" className="flex items-center gap-3 group py-1" aria-label="Skylarr Labs Home">
              {/* Light Mode Logo (Green Petals + Royal Blue Text) */}
              <img
                src="/skylarr-logo@2x.png"
                alt="Skylarr Labs ®"
                className="h-12 sm:h-14 w-auto object-contain dark:hidden transition-transform duration-200 group-hover:scale-105"
              />
              {/* Dark Mode Logo (Green Petals + Crisp White Text) */}
              <img
                src="/skylarr-logo-dark@2x.png"
                alt="Skylarr Labs ®"
                className="h-12 sm:h-14 w-auto object-contain hidden dark:block transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#17231F] dark:text-[#E2EAE5] hover:text-[#064E3B] dark:hover:text-[#34D399] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#064E3B] dark:after:bg-[#34D399] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons & Theme Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle (Dark Mode / White Mode) */}
              <ThemeToggle />

              <Button
                variant="outline"
                size="sm"
                onClick={onOpenLookup}
                className="hidden sm:inline-flex text-xs font-medium border-[#DCE5DF] dark:border-[#1E3026] text-[#17231F] dark:text-[#E2EAE5] hover:bg-[#EAF3EE] dark:hover:bg-[#16241D] hover:text-[#064E3B] dark:hover:text-[#34D399] gap-1.5 h-10 px-3.5"
              >
                <Search className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#34D399]" />
                Track Lead
              </Button>

              <Button
                onClick={onScrollToForm}
                className="bg-[#064E3B] hover:bg-[#08634B] dark:bg-[#10B981] dark:hover:bg-[#059669] text-white dark:text-[#022C22] shadow-sm shadow-emerald-900/30 text-sm font-semibold h-10 px-4 sm:px-5 gap-2 group transition-all"
              >
                <span>Claim Territory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Mobile Menu Toggle */}
              <div className="flex items-center lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-[#064E3B] dark:text-[#34D399]"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#121C17] border-b border-[#DCE5DF] dark:border-[#1E3026] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100 dark:border-[#1E3026]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64716B] dark:text-[#94A89E]">
                Display Theme
              </span>
              <ThemeToggle showLabel />
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#17231F] dark:text-[#E2EAE5] hover:text-[#064E3B] dark:hover:text-[#34D399] py-2 border-b border-gray-100 dark:border-[#1E3026]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2.5 pt-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLookup();
                  }}
                  className="w-full justify-center gap-2 border-[#DCE5DF] dark:border-[#1E3026] text-[#17231F] dark:text-[#E2EAE5]"
                >
                  <Search className="w-4 h-4 text-[#064E3B] dark:text-[#34D399]" />
                  Track Lead Reference
                </Button>
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToForm();
                  }}
                  className="w-full justify-center bg-[#064E3B] hover:bg-[#08634B] dark:bg-[#10B981] dark:hover:bg-[#059669] text-white dark:text-[#022C22] gap-2 font-semibold"
                >
                  Claim Territory & Get Price List
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
