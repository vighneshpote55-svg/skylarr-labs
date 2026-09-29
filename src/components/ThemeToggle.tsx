import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to White (Light) Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to White (Light) Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center justify-center h-10 px-3 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
        isDark
          ? 'bg-[#16261F] border-[#1F382C] text-[#F8E7C9] hover:bg-[#1D3229] hover:text-amber-300 shadow-sm'
          : 'bg-[#EAF3EE] border-[#DCE5DF] text-[#064E3B] hover:bg-[#DCECE3] shadow-xs'
      } ${className}`}
    >
      <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center">
        {/* Sun Icon (shown in dark mode) */}
        <Sun
          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-300 transition-all duration-300 transform ${
            isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0 absolute'
          }`}
        />
        {/* Moon Icon (shown in light mode) */}
        <Moon
          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#064E3B] transition-all duration-300 transform ${
            isDark ? '-rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </div>
      {showLabel && (
        <span className="ml-2 text-xs font-semibold tracking-wide">
          {isDark ? 'White Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
