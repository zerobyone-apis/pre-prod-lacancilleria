'use client';

import { useTranslation } from 'react-i18next';

import { HeroSection } from '@/app/components/sections/HeroSection';
import { PropertiesSliderSection } from '@/app/components/sections/PropertiesSliderSection';
import { EstateDividerSection } from '@/app/components/sections/EstateDividerSection';
import { EstateStaffSection } from '@/app/components/sections/EstateStaffSection';

import { EstateExploreSection } from '@/app/components/sections/EstateExploreSection';

import EstateServicesMultiComponent from '../components/sections/EstateServicesMultiComponent';
import { TimelineSection } from '../components/sections/TimelineSection';
import { NewFigmaContactSection } from '../components/sections/NewFigmaContactSection';
import { ImageDeviderSection } from '../components/sections/ImageDeviderSection';
import { IntroImageSlider } from '../components/sections/IntroImageSlider';

export default function EstatePage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t('estate.hero.title')}
        subtitle={t('estate.hero.subtitle')}
        backgroundVideo="/video/the_estate/hero-estate-final-web.mp4"
      />
      <PropertiesSliderSection propertyFilter="cancilleria"/>
      <EstateServicesMultiComponent />
      <TimelineSection home={false} estate={true} />
      <IntroImageSlider
        images={[
          '/images/home/slider/suit-guess-edited-ai.jpg',
          '/images/home/slider/pool.webp',
          '/images/home/slider/suit-bed.webp',
          '/images/home/slider/sec-room.webp', // TODO: QUEDA COLOCAR LAS FOTOS QUE VAN.
          '/images/home/slider/coctails-in-pool.webp',
        ]}
        showTextOverlay={false}

      />
      <PropertiesSliderSection propertyFilter="griega" />
      <EstateStaffSection />
      <EstateExploreSection />
      <EstateDividerSection />
      <NewFigmaContactSection />
    </>
  );
}
