import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  MessageCircle, 
  PhoneCall, 
  Mail, 
  Globe, 
  MapPin, 
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadVCard } from '../utils/vcard';

export default function ActionButtons({ profile, onSelectCall }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleSaveContact = () => {
    // 1. Download vCard
    downloadVCard(profile);

    // 2. Confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#1E60FF', '#2563EB', '#10B981', '#06B6D4']
      });
    } catch (e) {
      // safe fallback
    }

    // 3. UI feedback
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const whatsappUrl = `https://wa.me/${profile.contact.whatsappNumber}?text=${encodeURIComponent(profile.whatsappPreFilledMessage)}`;

  return (
    <div className="px-6 space-y-3 pt-2">
      {/* 1. Primary "Save Contact" Button */}
      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSaveContact}
        className={`w-full relative overflow-hidden py-3.5 px-5 rounded-2xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
          downloaded
            ? 'bg-emerald-600 text-white shadow-emerald-500/25'
            : 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white shadow-blue-600/25 hover:shadow-blue-600/40'
        }`}
      >
        {downloaded ? (
          <>
            <Check className="w-5 h-5 stroke-[2.5]" />
            <span>Contact Saved to Phone!</span>
          </>
        ) : (
          <>
            <UserPlus className="w-5 h-5 stroke-[2.2]" />
            <span>Save Contact (.vcf)</span>
            <span className="text-[10.5px] uppercase font-bold px-2 py-0.5 rounded bg-white/20 tracking-wider">
              1-Tap
            </span>
          </>
        )}
      </motion.button>

      {/* 2. Instant WhatsApp Connect Button */}
      <motion.a
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span>Connect on WhatsApp</span>
      </motion.a>

      {/* 3. Quick Action Icons Grid */}
      <div className="grid grid-cols-4 gap-2.5 pt-1">
        {/* Direct Call Button */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={onSelectCall}
          className="flex flex-col items-center justify-center p-3 rounded-2xl item-surface cursor-pointer text-slate-700 hover:text-blue-600"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center mb-1.5 text-blue-600">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold text-slate-700">Call</span>
        </motion.button>

        {/* Email Button */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          href={`mailto:${profile.contact.email}`}
          className="flex flex-col items-center justify-center p-3 rounded-2xl item-surface cursor-pointer text-slate-700 hover:text-cyan-600"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center mb-1.5 text-cyan-600">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold text-slate-700">Email</span>
        </motion.a>

        {/* Website Button */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          href={profile.contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-2xl item-surface cursor-pointer text-slate-700 hover:text-indigo-600"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center mb-1.5 text-indigo-600">
            <Globe className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold text-slate-700">Website</span>
        </motion.a>

        {/* Location / Maps Button */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          href={profile.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-2xl item-surface cursor-pointer text-slate-700 hover:text-rose-600"
        >
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/60 flex items-center justify-center mb-1.5 text-rose-600">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold text-slate-700">Location</span>
        </motion.a>
      </div>
    </div>
  );
}
