import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneCall, X } from 'lucide-react';

export default function CallModal({ isOpen, onClose, profile }) {
  const { contact } = profile;

  const phoneNumbers = [
    {
      title: "Primary Line",
      number: contact.primaryPhone,
      clean: contact.primaryPhoneClean,
      badge: "Main Office / Lead",
    },
    contact.secondaryPhone ? {
      title: "Secondary Line",
      number: contact.secondaryPhone,
      clean: contact.secondaryPhoneClean,
      badge: "Support / Alternate",
    } : null
  ].filter(Boolean);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="relative w-full max-w-sm rounded-3xl modal-surface p-5 z-10 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-blue-600" />
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-900">Direct Phone Lines</h3>
            <p className="text-xs text-slate-500 mb-3.5">Select a line to call Galaxy Software Solutions</p>

            <div className="space-y-2">
              {phoneNumbers.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.clean}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl item-surface group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider block">
                        {p.title}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {p.number}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-xs">
                    Call
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
