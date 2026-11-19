import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard } from 'lucide-react';

export default function PhysicalCardModal({ isOpen, onClose, profile }) {
  if (!profile.cardImage) return null;

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
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            className="relative w-full max-w-md rounded-3xl modal-surface p-5 z-10 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Physical Smart NFC Card</h3>
            </div>

            {/* Card Graphic */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src={profile.cardImage}
                alt={`${profile.companyName} Business Card`}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="text-xs text-slate-500 mt-3.5 leading-relaxed font-normal">
              Equipped with contactless NFC chip & dynamic QR code for instant client networking.
            </p>

            <button
              onClick={onClose}
              className="w-full mt-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition cursor-pointer shadow-sm"
            >
              Close Preview
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
