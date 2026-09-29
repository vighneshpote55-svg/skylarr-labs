import React, { useState } from 'react';
import { StoredLead } from '../types';
import { Search, MapPin, CheckCircle2, Clock, AlertCircle, Phone, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

interface InquiryLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryLookupModal: React.FC<InquiryLookupModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<StoredLead | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const stored: StoredLead[] = JSON.parse(localStorage.getItem('skylarr_leads') || '[]');
      const term = searchTerm.trim().toLowerCase();

      const found = stored.find(
        (lead) =>
          lead.referenceCode.toLowerCase() === term ||
          lead.phone.includes(term) ||
          lead.fullName.toLowerCase().includes(term)
      );

      setResult(found || null);
      setSearched(true);
    } catch (err) {
      console.error(err);
      setResult(null);
      setSearched(true);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setResult(null);
    setSearched(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-[#DCE5DF] p-6 rounded-2xl shadow-xl">
        <DialogHeader className="pb-3 border-b border-gray-100">
          <DialogTitle className="text-xl font-bold text-[#064E3B] flex items-center gap-2">
            <Search className="w-5 h-5 text-[#D4A95D]" />
            <span>Track Application Status</span>
          </DialogTitle>
          <DialogDescription className="text-xs text-[#64716B]">
            Enter your Reference Code (`SL-XXXXXX`) or registered phone number.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSearch} className="space-y-4 pt-2">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="e.g. SL-849201 or 9876543210"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-11 rounded-xl text-sm border-[#DCE5DF]"
            />
            <Button
              type="submit"
              className="bg-[#064E3B] hover:bg-[#08634B] text-white px-5 h-11 rounded-xl font-semibold"
            >
              Check
            </Button>
          </div>
        </form>

        {searched && (
          <div className="pt-2">
            {result ? (
              <div className="bg-[#EAF3EE] border border-[#DCE5DF] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#064E3B] bg-white px-2 py-0.5 rounded border border-[#DCE5DF]">
                    {result.referenceCode}
                  </span>
                  <span className="text-[11px] font-bold text-[#19734D] bg-white px-2 py-0.5 rounded border border-[#DCE5DF] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#19734D]" />
                    {result.status.toUpperCase()}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-[#17231F]">{result.fullName}</div>
                  <div className="text-xs text-[#64716B] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4A95D]" />
                    <span>Territory: <strong>{result.district}, {result.state}</strong></span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DCE5DF] text-xs">
                  <div className="font-semibold text-[#17231F]">Assigned BDM:</div>
                  <div className="text-[#064E3B] font-bold">{result.assignedBdm.name} ({result.assignedBdm.region})</div>
                  <div className="text-gray-500 text-[11px] mt-0.5">Phone: {result.assignedBdm.phone}</div>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <AlertCircle className="w-6 h-6 text-[#B42318] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#B42318]">No Application Found</div>
                <div className="text-[11px] text-[#64716B] mt-1">
                  Please verify the reference code or submit a new franchise inquiry.
                </div>
              </div>
            )}
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
};
