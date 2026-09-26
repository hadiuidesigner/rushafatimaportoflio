import React, { useState } from 'react';
import { X, Send, Sparkles, Instagram, Linkedin, Mail, MessageCircle, Check, Copy, MapPin } from 'lucide-react';
import { bioData } from '../data/siteData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillNote = ''
}) => {
  const [projectType, setProjectType] = useState<'commercial' | 'reels' | 'product' | 'film'>('commercial');
  const [timeline, setTimeline] = useState<'48h' | '1week' | 'flexible'>('48h');
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState(prefillNote ? `Inquiring about style: ${prefillNote}\n\nProject details: ` : '');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bioData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Commission AI Video with Syeda Rusha Fatima"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#F7EDEC] border border-[#E8D2EB] rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col text-[#1E1A2B]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8D2EB] bg-[#F2E4ED]/80">
          <div>
            <h2 className="text-lg font-bold text-[#1E1A2B] font-heading flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9B82BD]" />
              <span>Commission an AI Video Project</span>
            </h2>
            <p className="text-xs text-[#1E1A2B]/70 font-body">
              Syeda Rusha Fatima · Direct response within 6 hours · 48h to 4-day delivery
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#1E1A2B]/60 hover:text-[#1E1A2B] hover:bg-white/60 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E8D2EB] text-[#9B82BD] border border-[#D4B1E3] flex items-center justify-center shadow-xs">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1A2B] font-heading">Inquiry Received!</h3>
              <p className="text-sm text-[#1E1A2B]/75 max-w-md mx-auto font-body">
                Thank you, <strong>{name}</strong>! Syeda Rusha Fatima will personally review your project scope and respond to <strong>{email}</strong> within 6 hours with treatment concepts and quotation.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={bioData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#1E1A2B] bg-white border border-[#E8D2EB] hover:bg-[#F2E4ED] rounded-full transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Direct channels strip */}
              <div className="p-3.5 bg-[#F2E4ED]/90 border border-[#E8D2EB] rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[#1E1A2B]/70 font-medium">Direct Channels:</span>
                  <a
                    href={bioData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#9B82BD] hover:text-[#8A71AC] font-medium transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>@rusha_creator</span>
                  </a>
                  <a
                    href={bioData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#9B82BD] hover:text-[#8A71AC] font-medium transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs text-[#1E1A2B] bg-white border border-[#E8D2EB] hover:bg-[#E8D2EB]/50 rounded-full transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied rushafatima46@gmail.com!' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Project Category */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A2B] mb-2 font-heading">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'commercial', label: 'Brand Commercial' },
                      { id: 'reels', label: 'Viral Reel / UGC' },
                      { id: 'product', label: 'Product Video Ad' },
                      { id: 'film', label: 'Cinematic Story / 3D' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setProjectType(item.id as any)}
                        className={`px-3 py-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                          projectType === item.id
                            ? 'bg-[#9B82BD] text-white border-[#9B82BD] shadow-xs'
                            : 'bg-white/80 border-[#E8D2EB] text-[#1E1A2B]/80 hover:bg-[#F2E4ED]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A2B] mb-2 font-heading">
                    Target Turnaround
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '48h', label: '48h Express' },
                      { id: '1week', label: '1 Week Standard' },
                      { id: 'flexible', label: 'Retainer / Campaign' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTimeline(item.id as any)}
                        className={`px-3 py-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                          timeline === item.id
                            ? 'bg-[#9B82BD] text-white border-[#9B82BD] shadow-xs'
                            : 'bg-white/80 border-[#E8D2EB] text-[#1E1A2B]/80 hover:bg-[#F2E4ED]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#1E1A2B]/80 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aliza Khan"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#E8D2EB] rounded-xl text-[#1E1A2B] focus:outline-none focus:border-[#9B82BD] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1E1A2B]/80 mb-1">Brand or Project</label>
                    <input
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="e.g. Elysian Botanicals"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#E8D2EB] rounded-xl text-[#1E1A2B] focus:outline-none focus:border-[#9B82BD] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E1A2B]/80 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#E8D2EB] rounded-xl text-[#1E1A2B] focus:outline-none focus:border-[#9B82BD] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E1A2B]/80 mb-1">Project Details & Creative Vision</label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your vision: product type, aesthetic preferences, target platform (Reels/TikTok/YouTube), or script ideas."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#E8D2EB] rounded-xl text-[#1E1A2B] focus:outline-none focus:border-[#9B82BD] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href={bioData.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 border border-emerald-300 bg-emerald-50 rounded-full transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-6 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full transition-all shadow-md hover:shadow-[0_4px_16px_rgba(155,130,189,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Project Brief</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
