import React from 'react';
import { StoredLead } from '../types';
import { CheckCircle2, ShieldCheck, Phone, MapPin, Calendar, ArrowRight, MessageSquare, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

interface SuccessModalProps {
  lead: StoredLead | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ lead, isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!lead) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(lead.referenceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Skylarr Labs Team, I have submitted my franchise enquiry for ${lead.district}, ${lead.state}. My Reference Code is ${lead.referenceCode}. Please share the product price list.`
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white border-[#DCE5DF] p-0 overflow-hidden rounded-2xl shadow-2xl">
        
        {/* Top Celebration Header */}
        <div className="bg-gradient-to-br from-[#064E3B] to-[#022C22] p-6 text-white text-center relative">
          <div className="w-14 h-14 rounded-full bg-[#F8E7C9] text-[#064E3B] mx-auto flex items-center justify-center mb-3 shadow-lg">
            <CheckCircle2 className="w-8 h-8 text-[#064E3B]" />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#F8E7C9]">
            Territory Application Registered
          </DialogTitle>
          <DialogDescription className="text-emerald-100 text-xs mt-1">
            Thank you, {lead.fullName}. Your exclusive franchise request has been queued in our central ERP.
          </DialogDescription>
        </div>

        {/* Lead Reference Box */}
        <div className="p-6 space-y-6">
          <div className="bg-[#FAF3E5] border border-[#F8E7C9] rounded-xl p-4 text-center">
            <div className="text-xs uppercase tracking-wider font-bold text-[#064E3B] mb-1">
              Your Official Tracking Reference Code
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl font-black font-mono text-[#064E3B] tracking-wider">
                {lead.referenceCode}
              </span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-white border border-[#DCE5DF] text-[#064E3B] hover:bg-emerald-50 transition-colors cursor-pointer"
                title="Copy reference code"
              >
                {copied ? <Check className="w-4 h-4 text-[#19734D]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-[11px] text-[#64716B] mt-1">
              Save this reference code for territory status tracking and BDM verification.
            </div>
          </div>

          {/* Assigned BDM Details */}
          <div className="bg-[#FCFDFD] border border-[#DCE5DF] rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold text-[#17231F] flex items-center justify-between">
              <span>Assigned Business Development Manager:</span>
              <span className="text-[#19734D] text-[11px] font-semibold bg-[#EAF3EE] px-2 py-0.5 rounded">
                ● Territory Active
              </span>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <div className="w-10 h-10 rounded-full bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center font-bold text-sm shrink-0">
                {lead.assignedBdm.name.split(' ')[0][0]}
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-[#17231F]">{lead.assignedBdm.name}</div>
                <div className="text-xs text-[#064E3B] font-semibold">{lead.assignedBdm.region}</div>
                <div className="text-xs text-[#64716B] mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A95D]" />
                  <span>Allotted Territory: <strong>{lead.district}, {lead.state}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* What happens next timeline */}
          <div className="space-y-2 text-xs text-[#64716B]">
            <div className="font-bold text-[#17231F] mb-1">Next Operational Steps:</div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center font-bold text-[10px]">1</span>
              <span>BDM will verify pin-code vacancy in <strong>{lead.district}</strong>.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center font-bold text-[10px]">2</span>
              <span>Full product catalog with net rate list will be shared on WhatsApp.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#EAF3EE] text-[#064E3B] flex items-center justify-center font-bold text-[10px]">3</span>
              <span>Draft franchise monopoly agreement will be provided for review.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`https://wa.me/919876543210?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#19734D] hover:bg-[#13593B] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <Button
              variant="outline"
              onClick={onClose}
              className="border-[#DCE5DF] text-[#17231F] text-xs font-semibold py-3 h-auto"
            >
              Close & Continue Browsing
            </Button>
          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
};
