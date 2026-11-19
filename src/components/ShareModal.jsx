import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';

export default function ShareModal({ isOpen, onClose, profile }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : profile.contact.website;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.companyName} | Smart Card`,
          text: `Connect with ${profile.companyName} (${profile.slogan})`,
          url: currentUrl,
        });
      } catch (err) {
        // User dismissed
      }
    } else {
      handleCopy();
    }
  };

  const shareWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    `Check out ${profile.companyName}'s Smart Business Card: ${currentUrl}`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm rounded-3xl modal-surface p-6 z-10 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center mb-2">
                <Share2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Share Smart Card</h3>
              <p className="text-xs text-slate-500">Scan QR Code or share link instantly</p>
            </div>

            {/* QR Code Canvas */}
            <div className="p-4 bg-white rounded-2xl inline-block mx-auto shadow-md border-2 border-slate-100">
              <QRCodeSVG
                value={currentUrl}
                size={175}
                level="H"
                includeMargin={false}
                imageSettings={{
                  src: profile.logo || "/logo.png",
                  x: undefined,
                  y: undefined,
                  height: 38,
                  width: 38,
                  excavate: true,
                }}
              />
            </div>

            <p className="text-[11px] text-slate-500 mt-3 font-semibold">
              Point any smartphone camera to open
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition active:scale-95 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                <span>{copied ? "Copied Link!" : "Copy Link"}</span>
              </button>

              <a
                href={shareWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {typeof navigator !== 'undefined' && navigator.share && (
              <button
                onClick={handleNativeShare}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>More Share Options</span>
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
