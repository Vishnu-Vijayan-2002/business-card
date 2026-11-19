import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function IntroSplash({ profile, onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Fast, ultra-smooth intro: 1.2s total duration
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 1250);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => {
            setShow(false);
            if (onComplete) onComplete();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl cursor-pointer select-none"
        >
          {/* Ambient soft glow background */}
          <div className="absolute w-80 h-80 rounded-full bg-blue-100/70 blur-[100px] pointer-events-none" />
          <div className="absolute w-60 h-60 rounded-full bg-indigo-50 blur-[80px] pointer-events-none" />

          {/* Elevated Logo Card */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: [0.85, 1.05, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center p-6"
          >
            {/* Outer soft shadow ring */}
            <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl" />
            
            {/* Logo container */}
            <div className="relative w-28 h-28 rounded-2xl bg-white border border-slate-200/90 p-4 shadow-2xl flex items-center justify-center overflow-hidden">
              <motion.img
                src={profile.logo || "/logo.png"}
                alt={profile.companyName}
                initial={{ scale: 0.6, rotate: -6, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(30,96,255,0.25)]"
              />
              {/* Scanline light sweep */}
              <motion.div 
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "200%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-3 text-center px-4"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Smart NFC Digital Card</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-1">
              {profile.brandTitle || "GALAXYNEX"}
            </h1>
            <p className="text-xs text-slate-500 font-semibold tracking-wide">
              {profile.brandSubtitle || "Software Solutions"}
            </p>
          </motion.div>

          {/* Connecting Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.45 }}
            className="absolute bottom-10 flex items-center gap-2 text-xs text-slate-400 font-medium"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span>Connecting profile...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
