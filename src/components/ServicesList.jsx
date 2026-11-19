import React from 'react';
import { Code2, Globe, Smartphone, Cloud, Palette, Layout, Zap, Layers } from 'lucide-react';

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Layout,
  Zap,
  Layers
};

export default function ServicesList({ profile }) {
  const { services, highlights } = profile;

  return (
    <div className="px-6 pt-5">
      {/* Services Header */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Services & Capabilities
        </h2>
        <span className="text-[10.5px] text-blue-600 font-semibold">What we deliver</span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-2">
        {services && services.map((service, index) => {
          const Icon = iconMap[service.icon] || Code2;

          return (
            <div
              key={index}
              className="p-3.5 rounded-2xl item-surface flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 text-blue-600 mt-0.5">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                  {service.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Metrics Banner */}
      {highlights && highlights.length > 0 && (
        <div className="mt-3.5 p-3 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-100/80 grid grid-cols-3 gap-2 text-center shadow-xs">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-sm font-black text-blue-700">
                {item.value}
              </span>
              <span className="text-[9.5px] text-slate-600 font-semibold tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
