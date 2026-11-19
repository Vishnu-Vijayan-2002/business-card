import React from 'react';
import { Wifi, Code } from 'lucide-react';
import { profiles } from '../config/profileData';

export default function Footer({ profile, onSelectProfile }) {
  const allProfileKeys = Object.keys(profiles);

  return (
    <footer className="px-6 pt-5 pb-8 text-center space-y-3.5">
      {/* Brand NFC tag */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
        <Wifi className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
        <span>Powered by Smart NFC & QR Card Architecture</span>
      </div>

      {/* Multi-Client Profile Switcher (Testing & demonstration) */}
      {allProfileKeys.length > 1 && (
        <div className="pt-2 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-center gap-1 font-bold">
            <Code className="w-3 h-3 text-blue-600" />
            <span>Multi-Client Profiles Demo:</span>
          </p>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {allProfileKeys.map((key) => (
              <button
                key={key}
                onClick={() => onSelectProfile(key)}
                className={`text-[10.5px] px-2.5 py-1 rounded-lg border transition cursor-pointer font-medium ${
                  profile.id === key
                    ? 'bg-blue-50 text-blue-700 border-blue-300 font-bold shadow-xs'
                    : 'bg-white text-slate-500 border-slate-200 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="text-[10.5px] text-slate-400 leading-tight">
        <p className="font-semibold text-slate-500">© 2026 {profile.companyName}</p>
        <p className="mt-0.5 text-slate-400">Kottayam, Kerala, India</p>
      </div>
    </footer>
  );
}
