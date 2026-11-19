import React from 'react';
import { MessageSquare, Linkedin, Github, Instagram, Mail, Globe, Twitter } from 'lucide-react';

const socialIcons = {
  MessageSquare,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Globe,
  Twitter,
};

export default function SocialLinks({ profile }) {
  const { socials } = profile;
  if (!socials || socials.length === 0) return null;

  return (
    <div className="px-6 pt-5 pb-2">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Social & Online
        </h2>
        <span className="text-[10.5px] text-slate-400">Connect</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {socials.map((s, idx) => {
          const Icon = socialIcons[s.icon] || Globe;
          return (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl item-surface text-xs font-semibold text-slate-700 hover:text-blue-600 transition cursor-pointer"
            >
              <Icon className="w-3.5 h-3.5 text-blue-600" />
              <span>{s.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
