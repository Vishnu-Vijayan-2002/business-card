import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Copy, Check, ChevronRight } from 'lucide-react';

export default function ContactDetails({ profile }) {
  const { contact } = profile;
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactItems = [
    {
      key: 'phone1',
      label: 'Primary Phone',
      val: contact.primaryPhone,
      displayVal: contact.primaryPhone,
      actionHref: `tel:${contact.primaryPhoneClean}`,
      icon: Phone,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200/60',
      actionLabel: 'Call'
    },
    {
      key: 'phone2',
      label: 'Alternate Phone',
      val: contact.secondaryPhone,
      displayVal: contact.secondaryPhone,
      actionHref: `tel:${contact.secondaryPhoneClean}`,
      icon: Phone,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200/60',
      actionLabel: 'Call'
    },
    {
      key: 'email',
      label: 'Business Email',
      val: contact.email,
      displayVal: contact.email,
      actionHref: `mailto:${contact.email}`,
      icon: Mail,
      iconColor: 'text-cyan-600 bg-cyan-50 border-cyan-200/60',
      actionLabel: 'Send'
    },
    {
      key: 'location',
      label: 'Headquarters',
      val: contact.location,
      displayVal: contact.location,
      actionHref: contact.googleMapsUrl,
      icon: MapPin,
      iconColor: 'text-rose-600 bg-rose-50 border-rose-200/60',
      actionLabel: 'Map'
    },
    {
      key: 'website',
      label: 'Official Website',
      val: contact.website,
      displayVal: contact.displayWebsite || contact.website.replace('https://', ''),
      actionHref: contact.website,
      icon: Globe,
      iconColor: 'text-indigo-600 bg-indigo-50 border-indigo-200/60',
      actionLabel: 'Visit'
    }
  ].filter(item => Boolean(item.val));

  return (
    <div className="px-6 pt-5">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Contact Details
        </h2>
        <span className="text-[10.5px] text-slate-400 font-medium">Tap to call or copy</span>
      </div>

      <div className="space-y-2">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isCopied = copiedKey === item.key;

          return (
            <div
              key={item.key}
              className="p-3 rounded-2xl item-surface flex items-center justify-between gap-3 group"
            >
              {/* Left: Icon & Text */}
              <a
                href={item.actionHref}
                target={item.key === 'location' || item.key === 'website' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 min-w-0 flex-1"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${item.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                    {item.displayVal}
                  </p>
                </div>
              </a>

              {/* Right: Copy & Direct Action */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.val, item.key)}
                  title="Copy to clipboard"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 active:scale-90 transition-all cursor-pointer"
                >
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>

                <a
                  href={item.actionHref}
                  target={item.key === 'location' || item.key === 'website' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-slate-100 active:scale-90 transition-all cursor-pointer"
                  title={item.actionLabel}
                >
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
