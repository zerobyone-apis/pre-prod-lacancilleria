'use client';

import { useTranslation } from 'react-i18next';

import { HeroSection } from '@/app/components/sections/HeroSection';
import { PropertiesSliderSection } from '@/app/components/sections/PropertiesSliderSection';

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
        title={t('estate.cancilleria.hero.title')}
        subtitle={t('estate.cancilleria.hero.subtitle')}
        backgroundVideo="/video/the_estate/hero-estate-final-web.mp4"
      />
      <PropertiesSliderSection propertyFilter="cancilleria"/>
      <EstateServicesMultiComponent service={true}  griegaItems={false}
  />
      <TimelineSection home={false} estate={true} />
      <IntroImageSlider
        images={[
          '/images/the_estate/la_cancilleria/galery_slider/la_cancilleria_front_house.webp',
          '/images/the_estate/la_cancilleria/galery_slider/suit-guess-edited-ai.jpg',
          '/images/the_estate/la_cancilleria/galery_slider/coocking.webp',
          '/images/the_estate/la_cancilleria/galery_slider/guest_bedth.webp',
          '/images/the_estate/la_cancilleria/galery_slider/living_pergola.webp',
          '/images/the_estate/la_cancilleria/galery_slider/living_principal.webp',
          '/images/the_estate/la_cancilleria/galery_slider/living.webp',
          '/images/the_estate/la_cancilleria/galery_slider/pergola_2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/pergola.webp'
        ]}
        showTextOverlay={false}
      />
      <PropertiesSliderSection propertyFilter="griega" />
      <EstateServicesMultiComponent service={false} griegaItems={true}/>

      <ImageDeviderSection imageSource='/images/the_estate/la_griega/devider/faro_remasted.webp' />
      <NewFigmaContactSection />
    </>
  );
}
