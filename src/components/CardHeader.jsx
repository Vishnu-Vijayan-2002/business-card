import React from 'react';
import { motion } from 'framer-motion';
import { Share2, CreditCard, Sparkles, Wifi } from 'lucide-react';

export default function CardHeader({ profile, onOpenShare, onOpenPhysicalCard }) {
  const { brandTitle, brandSubtitle, slogan, tagline, person, logo } = profile;

  return (
    <div className="relative pt-6 pb-4 px-6">
      {/* Decorative Brand Top Curve / Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-t-[32px]" />

      {/* Top Utility Bar */}
      <div className="flex items-center justify-between mb-5 text-xs">
        {/* NFC Verified Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-semibold shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <Wifi className="w-3 h-3 text-emerald-600" />
          <span className="text-[11px] tracking-wide">NFC Verified</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {profile.cardImage && (
            <button
              onClick={onOpenPhysicalCard}
              title="View Original Physical Card"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-[11px] font-semibold transition-all cursor-pointer active:scale-95 shadow-xs"
            >
              <CreditCard className="w-3 h-3 text-blue-600" />
              <span>Card</span>
            </button>
          )}

          <button
            onClick={onOpenShare}
            title="Share & QR Code"
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Hero Logo with Soft Glow */}
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-3.5 group"
        >
          {/* Subtle Outer Drop Shadow */}
          <div className="absolute -inset-1.5 bg-blue-500/10 rounded-3xl blur-lg group-hover:bg-blue-500/20 transition-all" />
          
          {/* Logo Frame */}
          <div className="relative w-24 h-24 rounded-2xl bg-white border border-slate-200/90 p-3 shadow-md flex items-center justify-center">
            <img
              src={logo || "/logo.png"}
              alt={profile.companyName}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(30,96,255,0.2)]"
            />
          </div>
        </motion.div>

        {/* Company / Brand Name styled cleanly */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="w-full"
        >
          <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase">
            {brandTitle || "GALAXYNEX"}
          </h1>

          {/* Subtitle with styled divider */}
          <div className="flex items-center justify-center gap-2 mt-0.5 mb-2">
            <div className="h-[1.5px] w-6 bg-gradient-to-r from-transparent to-blue-600" />
            <span className="text-xs font-bold tracking-wider text-slate-600 uppercase">
              {brandSubtitle || "Software Solutions"}
            </span>
            <div className="h-[1.5px] w-6 bg-gradient-to-l from-transparent to-blue-600" />
          </div>

          {/* Official Slogan */}
          <p className="text-xs font-semibold text-blue-700 tracking-wide mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{slogan || "Smart Solutions. Better Future."}</span>
          </p>

          {/* Person Designation Badge */}
          <div className="mt-1 inline-flex flex-col items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 shadow-xs">
            <span className="text-sm font-bold text-slate-900">
              {person.name}
            </span>
            <span className="text-[11.5px] font-semibold text-slate-500">
              {person.designation}
            </span>
          </div>

          {/* Tagline / Core Domains */}
          <p className="mt-2.5 text-xs text-slate-500 font-normal leading-relaxed max-w-xs mx-auto">
            {tagline}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
