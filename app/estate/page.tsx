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
        backgroundVideo="/video/the_estate/hero-estate.mp4"
      />
      <PropertiesSliderSection propertyFilter="cancilleria"/>
      <EstateServicesMultiComponent service={true}  griegaItems={false}
  />
      <TimelineSection home={false} estate={true} />
      <IntroImageSlider
        images={[
          '/images/the_estate/la_cancilleria/galery_slider/lc_entrada.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_entrada_2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_entrada_3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_1.3.webp',
     
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.4.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_2.5.webp',

          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_4.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_4.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_internal_4.2.webp',

      
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_1.webp',
          
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_2.3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_3.3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_4.4.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.1.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.2.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.3.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_back_external_5.4.webp',
          '/images/the_estate/la_cancilleria/galery_slider/lc_end_tour.webp',
         
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



// Todo:
// Me falta colocar los videos en los HeroSection, y comprimirlos para que pesen Poco 170mb a -> 7mb max
// Por otro lado revisar otras fotos que deba cambiar en el home y location y ver si puedo añadir algunas de la griega interior.


// Trabajo realizado hoy 4hrs. 05/01/2026