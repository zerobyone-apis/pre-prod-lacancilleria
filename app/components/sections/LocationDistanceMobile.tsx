'use client';

import { useState } from 'react';
import { Trans } from 'react-i18next';
import { X } from 'lucide-react';

const DISTANCE_KEYS = [
  'pde-airport',
  'carrasco',
  'montoya',
  'bikini',
  'labarra',
] as const;

const DISTANCE_IMAGES: Record<string, string> = {
  'pde-airport': '/images/location/easy_access/pde_airport.webp',
  carrasco: '/images/location/easy_access/carrasco_airport.jpg',
  montoya: '/images/location/easy_access/montoya.webp',
  bikini: '/images/location/easy_access/bikini_beach.jpg', 
  labarra: '/images/location/easy_access/labarra.webp',
};

export const LocationDistancesMobile = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="md:hidden px-6 py-12 space-y-10">
      
      {/* TÍTULO */}
      <h2 className="mt-16 text-center font-serif text-mar text-[32px] leading-tight">
        <Trans i18nKey="location.distances.title" />
      </h2>

      {DISTANCE_KEYS.map((key) => {
        const isOpen = openKey === key;

        return (
          <div
            key={key}
            className="relative bg-white rounded-xl shadow-sm border border-mar/10 overflow-hidden"
          >
            {/* IMAGE PREVIEW */}
            <div
              className={`w-full overflow-hidden transition-all duration-500 ${
                isOpen ? 'h-[55vh]' : 'h-[180px]'
              }`}
              onClick={() => setOpenKey(isOpen ? null : key)}
            >
              <img
                src={DISTANCE_IMAGES[key]}
                alt=""
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
              onClick={() => setOpenKey(isOpen ? null : key)}
            >
              <p
                className={`text-[22px] leading-snug transition-colors ${
                  isOpen ? 'text-piel' : 'text-mar/80'
                }`}
              >
                <Trans i18nKey={`location.distances.items.${key}`} />
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
