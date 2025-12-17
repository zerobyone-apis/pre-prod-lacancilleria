'use client';

import { useState } from 'react';
import { Trans } from 'react-i18next';
import { X, ChevronRight } from 'lucide-react';

interface DistanceItem {
  key: string;
  label: string;
  image: string;
}

interface LocationDistancesProps {
  title: string;
  description?: string;
  items: DistanceItem[];
}

// ==========================================
// OPCIÓN 1: Cards compactas con thumbnail
// ==========================================
export const VariantThumbnailCards = ({
  title,
  description,
  items,
}: LocationDistancesProps) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="md:hidden px-4 py-8">
      <div className="mb-8">
        <h2 className="text-center font-serif text-mar text-2xl leading-tight mb-2">
          <Trans i18nKey={title} />
        </h2>
        {description && (
          <p className="text-center font-serif text-mar/70 text-sm">
            <Trans i18nKey={description} />
          </p>
        )}
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openKey === item.key;

          return (
            <div
              key={item.key}
              className={`
                bg-white rounded-2xl overflow-hidden
                border border-mar/5
                shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)]
                transition-all duration-500 ease-out
                ${isOpen ? 'shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]' : ''}
              `}
              onClick={() => setOpenKey(isOpen ? null : item.key)}
            >
              {/* Row: Thumbnail + Text */}
              <div className="flex items-center gap-4 p-4">
                {/* Thumbnail */}
                <div className={`
                  relative overflow-hidden rounded-xl flex-shrink-0
                  transition-all duration-500
                  ${isOpen ? 'w-16 h-16' : 'w-14 h-14'}
                `}>
                  <img
                    src={item.image}
                    alt={item.key}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`
                    font-serif text-base leading-snug transition-colors duration-300
                    ${isOpen ? 'text-piel' : 'text-mar/80'}
                  `}>
                    <Trans i18nKey={item.label} />
                  </p>
                  {/* Animated line */}
                  <div className="relative mt-2 h-px w-full bg-mar/5">
                    <div className={`
                      absolute left-0 top-0 h-px bg-piel transition-all duration-500
                      ${isOpen ? 'w-full' : 'w-0'}
                    `} />
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className={`
                  w-5 h-5 text-mar/30 flex-shrink-0 transition-transform duration-300
                  ${isOpen ? 'rotate-90 text-piel' : ''}
                `} />
              </div>

              {/* Expanded Image */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${isOpen ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-4 pb-4">
                  <img
                    src={item.image}
                    alt={item.key}
                    className="w-full h-[230px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// OPCIÓN 2: Lista vertical minimalista
// ==========================================
export const VariantMinimalList = ({
  title,
  description,
  items,
}: LocationDistancesProps) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="md:hidden px-6 py-8">
      <div className="mb-10">
        <h2 className="text-center font-serif text-mar text-2xl leading-tight mb-2">
          <Trans i18nKey={title} />
        </h2>
        {description && (
          <p className="text-center font-serif text-mar/60 text-sm">
            <Trans i18nKey={description} />
          </p>
        )}
      </div>

      <div className="space-y-0">
        {items.map((item, index) => {
          const isOpen = openKey === item.key;

          return (
            <div key={item.key}>
              {/* Item row */}
              <div
                className="py-5 cursor-pointer"
                onClick={() => setOpenKey(isOpen ? null : item.key)}
              >
                <p className={`
                  font-serif text-lg leading-snug transition-colors duration-300
                  ${isOpen ? 'text-piel' : 'text-mar/70'}
                `}>
                  <Trans i18nKey={item.label} />
                </p>

                {/* Animated line */}
                <div className="relative mt-3 h-px w-full bg-mar/10">
                  <div className={`
                    absolute left-0 top-0 h-px bg-piel transition-all duration-700 ease-out
                    ${isOpen ? 'w-full' : 'w-0'}
                  `} />
                  <span className={`
                    absolute right-0 top-0 -translate-y-1/2 
                    w-2 h-2 rounded-full bg-piel 
                    transition-all duration-500
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                  `} />
                </div>
              </div>

              {/* Accordion Image */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${isOpen ? 'max-h-[280px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
              `}>
                <img
                  src={item.image}
                  alt={item.key}
                  className="w-full h-[260px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// OPCIÓN 3: Cards apiladas con overlay
// ==========================================
export const VariantOverlayCards = ({
  title,
  description,
  items,
}: LocationDistancesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="md:hidden px-4 py-8">
      <div className="mb-8">
        <h2 className="text-center font-serif text-mar text-2xl leading-tight mb-2">
          <Trans i18nKey={title} />
        </h2>
        {description && (
          <p className="text-center font-serif text-mar/60 text-sm">
            <Trans i18nKey={description} />
          </p>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.key}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer
                transition-all duration-500 ease-out
                ${isActive ? 'h-[280px]' : 'h-[100px]'}
              `}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.key}
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700
                  ${isActive ? 'scale-100' : 'scale-110'}
                `}
              />

              {/* Gradient Overlay */}
              <div className={`
                absolute inset-0 transition-opacity duration-500
                ${isActive 
                  ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent' 
                  : 'bg-gradient-to-r from-white/95 via-white/80 to-white/40'
                }
              `} />

              {/* Text */}
              <div className={`
                absolute transition-all duration-500
                ${isActive 
                  ? 'bottom-6 left-6 right-6' 
                  : 'inset-0 flex items-center px-6'
                }
              `}>
                <p className={`
                  font-serif text-lg leading-snug transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-mar'}
                `}>
                  <Trans i18nKey={item.label} />
                </p>
                
                {isActive && (
                  <div className="mt-2 h-px w-16 bg-piel" />
                )}
              </div>

              {/* Close hint */}
              {isActive && (
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(null);
                  }}
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// OPCIÓN 4: Carousel horizontal premium
// ==========================================
export const VariantHorizontalCarousel = ({
  title,
  description,
  items,
}: LocationDistancesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:hidden py-8">
      <div className="px-6 mb-6">
        <h2 className="text-center font-serif text-mar text-2xl leading-tight mb-2">
          <Trans i18nKey={title} />
        </h2>
        {description && (
          <p className="text-center font-serif text-mar/60 text-sm">
            <Trans i18nKey={description} />
          </p>
        )}
      </div>

      {/* Carousel */}
      <div className="relative">
        <div 
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => {
            const target = e.target as HTMLDivElement;
            const scrollLeft = target.scrollLeft;
            const cardWidth = 280;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(newIndex, items.length - 1));
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.key}
              className="flex-shrink-0 w-[260px] snap-center"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-mar/5">
                {/* Image */}
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.key}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-5">
                  <p className="font-serif text-mar text-base leading-snug">
                    <Trans i18nKey={item.label} />
                  </p>
                  <div className="mt-3 h-px w-12 bg-piel/50" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <div
              key={index}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'w-6 bg-piel' 
                  : 'w-1.5 bg-mar/20'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// OPCIÓN 5: Desktop-style (Item -> Line -> Photo)
// Adaptado para mobile - Layout horizontal
// ==========================================
export const VariantDesktopStyle = ({
  title,
  description,
  items,
}: LocationDistancesProps) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="md:hidden px-4 py-8">
      <div className="mb-8">
        <h2 className="text-center font-serif text-mar text-2xl leading-tight mb-2">
          <Trans i18nKey={title} />
        </h2>
        {description && (
          <p className="text-center font-serif text-mar/60 text-sm">
            <Trans i18nKey={description} />
          </p>
        )}
      </div>

      <div className="space-y-6">
        {items.map((item) => {
          const isOpen = openKey === item.key;

          return (
            <div
              key={item.key}
              className="cursor-pointer"
              onClick={() => setOpenKey(isOpen ? null : item.key)}
            >
              {/* Row: Text - Line - Image */}
              <div className="flex items-center gap-3">
                {/* Text (left) */}
                <p className={`
                  flex-shrink-0 w-[40%] font-serif text-sm leading-snug
                  transition-colors duration-300
                  ${isOpen ? 'text-piel' : 'text-mar/70'}
                `}>
                  <Trans i18nKey={item.label} />
                </p>

                {/* Animated Line (center) */}
                <div className="flex-1 relative h-px">
                  {/* Base line */}
                  <div className="absolute inset-0 bg-mar/10" />
                  {/* Animated fill */}
                  <div className={`
                    absolute left-0 top-0 h-px bg-piel
                    transition-all duration-700 ease-out
                    ${isOpen ? 'w-full' : 'w-0'}
                  `} />
                  {/* Dot at end */}
                  <span className={`
                    absolute right-0 top-1/2 -translate-y-1/2 
                    w-2 h-2 rounded-full bg-piel 
                    transition-all duration-500
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                  `} />
                </div>

                {/* Image thumbnail (right) */}
                <div className={`
                  flex-shrink-0 overflow-hidden rounded-lg
                  transition-all duration-500 ease-out
                  ${isOpen 
                    ? 'w-[120px] h-[90px] shadow-lg' 
                    : 'w-[80px] h-[60px] opacity-50'
                  }
                `}>
                  <img
                    src={item.image}
                    alt={item.key}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// COMPONENTE DE SHOWCASE - Para comparar todas
// ==========================================
export const LocationDistanceMobileShowcase = ({
  title,
  description,
  items,
}: LocationDistancesProps) => {
  const [activeVariant, setActiveVariant] = useState(0);

  const variants = [
    { name: 'Thumbnail Cards', component: VariantThumbnailCards },
    { name: 'Minimal List', component: VariantMinimalList },
    { name: 'Overlay Cards', component: VariantOverlayCards },
    { name: 'Carousel', component: VariantHorizontalCarousel },
    { name: 'Desktop Style', component: VariantDesktopStyle },
  ];

  const ActiveComponent = variants[activeVariant].component;

  return (
    <div className="md:hidden">
      {/* Variant Selector */}
      <div className="sticky top-0 z-50 bg-arena/95 backdrop-blur-sm border-b border-mar/10 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {variants.map((variant, index) => (
            <button
              key={variant.name}
              className={`
                flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium
                transition-all duration-300
                ${activeVariant === index 
                  ? 'bg-piel text-white' 
                  : 'bg-white text-mar/70 border border-mar/10'
                }
              `}
              onClick={() => setActiveVariant(index)}
            >
              {variant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Variant */}
      <ActiveComponent
        title={title}
        description={description}
        items={items}
      />
    </div>
  );
};
