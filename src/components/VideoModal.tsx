import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    let interval: any;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl bg-black border-zinc-800 text-white p-0 overflow-hidden rounded-2xl shadow-2xl">
        
        {/* Video Screen Area */}
        <div className="relative aspect-16/9 bg-zinc-950 flex items-center justify-center overflow-hidden">
          <img
            src="/images/warehouse_logistics.jpg"
            alt="Skylarr Labs Facility Video Preview"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

          {/* Center Play/Pause indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-16 h-16 rounded-full bg-[#064E3B]/90 text-[#F8E7C9] flex items-center justify-center border-2 border-[#F8E7C9] hover:scale-110 transition-transform cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-[#F8E7C9]" />
            ) : (
              <Play className="w-7 h-7 fill-[#F8E7C9] translate-x-0.5" />
            )}
          </button>

          {/* Top Title Overlay */}
          <div className="absolute top-4 left-4 right-12 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-bold tracking-wide text-sm">Skylarr Labs Corporate & Operational Walkthrough</span>
            </div>
            <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#F8E7C9]">
              WHO-GMP Facility
            </span>
          </div>

          {/* Bottom Custom Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            {/* Scrubber Progress Bar */}
            <div
              className="w-full h-1.5 bg-zinc-700 rounded-full mb-3 cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                setProgress((clickX / rect.width) * 100);
              }}
            >
              <div
                className="h-full bg-[#D4A95D] transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between text-xs text-zinc-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  <span className="text-[10px]">{isMuted ? 'Muted (Browser Compliant)' : 'Audio On'}</span>
                </button>

                <span className="font-mono text-[11px] text-zinc-400">
                  {Math.floor((progress / 100) * 195)}s / 195s
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[#F8E7C9] bg-[#064E3B] px-2 py-0.5 rounded font-medium">
                  HD 1080p
                </span>
                <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>

        </div>

        {/* Video Details Description */}
        <div className="p-5 bg-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 border-t border-zinc-800">
          <div>
            <div className="font-bold text-sm text-white mb-1">
              Virtual Facility Inspection Tour
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              Highlights: Automatic Alu-Alu high-speed strip packaging, batch stability testing chambers, HEPA-filtered class 10,000 cleanrooms, and automated barcode dispatch systems.
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 bg-[#064E3B] hover:bg-[#08634B] text-white px-4 py-2 rounded-lg font-bold text-xs transition-colors cursor-pointer"
          >
            Done Watching
          </button>
        </div>

      </DialogContent>
    </Dialog>
  );
};
