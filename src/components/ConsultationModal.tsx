import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, Building, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Weddings & Celebrations',
    preferredDate: '',
    inquiryTopic: 'Weddings & Celebrations',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div id="consultation-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="consultation-modal-dialog"
        className="bg-[#0e1420] border border-[#c5a059]/40 rounded-xs shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative text-slate-200 p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          id="btn-close-consultation-modal"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#122417] border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
                Consultation Request Confirmed
              </span>
              <h3 className="text-2xl font-serif-luxury text-white font-semibold">
                Thank You, {formData.name}
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                An Anahita Hospitality specialist will contact you within 4 hours to discuss your event or travel plans.
              </p>
            </div>

            <div className="bg-[#121824] p-4 rounded-xs border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-500">Service Category:</span>
                <span className="font-medium text-amber-200">{formData.inquiryTopic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Requested Date:</span>
                <span className="font-medium text-slate-200">{formData.preferredDate || 'Earliest Available'}</span>
              </div>
            </div>

            <button
              id="btn-done-consultation"
              onClick={handleResetAndClose}
              className="px-8 py-3 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-semibold text-xs uppercase tracking-[0.2em] rounded-xs transition-all"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="mb-3">
                <Logo size="md" variant="full" />
              </div>
              <div className="flex items-center gap-2 text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em]">
                <Sparkles className="w-4 h-4" />
                <span>Bespoke Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white font-medium mt-1">
                Schedule a Session
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Connect directly with our team to plan your luxury wedding, domestic or international travel, or corporate MICE event.
              </p>
            </div>

            <form id="consultation-form" onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 pl-10 pr-3 py-2.5 outline-none rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="info@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 pl-10 pr-3 py-2.5 outline-none rounded-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 73039 07800"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 pl-10 pr-3 py-2.5 outline-none rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 pl-10 pr-3 py-2.5 outline-none rounded-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Service Category
                </label>
                <select
                  value={formData.inquiryTopic}
                  onChange={(e) => setFormData({ ...formData, inquiryTopic: e.target.value })}
                  className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 px-3 py-2.5 outline-none rounded-xs">

                  <option value="Select Option">Select Option</option>
                  <option value="Real Estate Inquiry">Real Estate Acquisition / Listing</option>
                  <option value="Weddings & Celebrations">Weddings & Celebrations</option>
                  <option value="Domestic Travel">Domestic Travel & Domestic Destination</option>
                  <option value="International Travel">International Travel & Private Holidays</option>
                  <option value="MICE & Corporate Events">MICE & Corporate Events (MICE)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Event / Travel Details & Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding guest count, preferred destinations, budget range, or specific requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#080c14] border border-slate-700 focus:border-[#c5a059] text-slate-100 p-3 outline-none rounded-xs resize-none"/>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Your information is safe and treated with confidentiality.</span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold uppercase tracking-wider text-xs rounded-xs"
                >
                  Cancel
                </button>
                <button
                  id="btn-submit-consultation"
                  type="submit"
                  className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#e2c887] text-[#0b0f17] font-semibold uppercase tracking-[0.15em] text-xs rounded-xs transition-all shadow-lg shadow-[#c5a059]/20"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
