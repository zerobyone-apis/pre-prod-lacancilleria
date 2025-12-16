'use client';

import { useTranslation } from 'react-i18next';

import { HeroSection } from '@/app/components/sections/HeroSection';
import { LocationMapSection } from '@/app/components/sections/LocationMapSection';
import { ImageDeviderSection } from '@/app/components/sections/ImageDeviderSection';
import { LocationGallery } from '@/app/components/sections/LocationGallery';
import { NewFigmaContactSection } from '../components/sections/NewFigmaContactSection';
import LocationDistances from '../components/sections/LocationDistances';

export default function LocationPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t('location.hero.title')}
        subtitle={t('location.hero.subtitle')}
        backgroundVideo="/video/location/location_refined_hero.mp4"
      />
      <LocationMapSection />
      <ImageDeviderSection imageSource="/images/location/devider/devider1.webp" />
      <LocationDistances />
      <ImageDeviderSection imageSource="/images/location/devider/puente_de_la_barra.webp" />
      <LocationGallery />
      <ImageDeviderSection imageSource="/images/location/devider/la_barra_3.webp" />
      <NewFigmaContactSection />
    </>
  );
}
