'use client';

import { useState } from 'react';
import { Trans } from 'react-i18next';
import { X } from 'lucide-react';
import { LocationDistancesMobileProps } from '@/app/location/ILocationDistance';

export const LocationDistancesMobile = ({
  title,
  description,
  items,
}: LocationDistancesMobileProps) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="md:hidden px-6 py-12 space-y-10">
  
      
      {/* // TODO: QUEDA HACER QUE APAREZCA UN SHADOW EN MOBILE Y BORRE LAS LINEAS DE COLOR COMO LO HACE EN DESKTP
      <div 
        className="md:block absolute inset-x-0 bottom-0 pointer-events-none z-[0]"
        style={{
          height: '260px',
          background: `
        linear-gradient(
          to bottom,
          rgba(247,245,241,0) 0%,
          rgba(247,245,241,0.25) 25%,
          rgba(247,245,241,0.55) 55%,
          rgba(247,245,241,0.85) 85%,
          rgba(247,245,241,1) 100%
        )
      `,
        }}
      /> */}
      <div>
        {/* TÍTULO */}
        <h2 className="mt-16 text-center font-serif text-mar text-[32px] leading-tight">
          <Trans i18nKey={title} />
        </h2>

        {/* Description */}
        <p className="mb-10 md:text-body text-center font-serif text-mar text-body md:text-[20px] leading-tight">
          <Trans i18nKey={description ? description : ''} />
        </p>
      </div>

      {items.map((item) => {
        const isOpen = openKey === item.key;

        return (
          <div
            key={item.key}
            className="relative bg-white rounded-xl shadow-sm border border-mar/10 overflow-hidden"
          >
            {/* IMAGE PREVIEW */}
            <div
              className={`w-full overflow-hidden transition-all duration-500 ${
                isOpen ? 'h-[55vh]' : 'h-[180px]'
              }`}
              onClick={() => setOpenKey(isOpen ? null : item.key)}
            >
              <img
                src={item.image}
                alt={item.key}
                className={`
                  w-full h-full object-cover transition-transform duration-700
                  ${isOpen ? 'scale-95' : 'scale-100'}
                `}
              />
            </div>

            {/* CLOSE BUTTON */}
            {isOpen && (
              <button
                className="absolute top-3 right-3 p-2 bg-white/80 rounded-full shadow-md z-20"
                onClick={() => setOpenKey(null)}
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* TEXT + LINE */}
            <div
              className="px-5 py-6"
              onClick={() => setOpenKey(isOpen ? null : item.key)}
            >
              <p
                className={`text-[22px] leading-snug transition-colors ${
                  isOpen ? 'text-piel' : 'text-mar/80'
                }`}
              >
                <Trans i18nKey={item.label} />
              </p>

              <div className="relative mt-3 h-px w-full bg-mar/10">
                <div
                  className={`absolute left-0 top-0 h-px bg-piel transition-all duration-500 ${
                    isOpen ? 'w-full' : 'w-0'
                  }`}
                />
                <span
                  className={`absolute right-0 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-piel transition-opacity ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
