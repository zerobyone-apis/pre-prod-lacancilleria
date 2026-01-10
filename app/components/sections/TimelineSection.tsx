import { useMediaQuery } from '../../hooks/useMediaQuery';
import { TimelineMobile } from './TimelineMobileSection';
import { DesktopTimeline } from './TimelineDesktopSection'; // tu componente actual
import { t } from 'i18next';

export interface TimelineItem {
  text: string;
  mobileText: string;
  image: string;
  imagePosition: 'left' | 'right';
}

interface TimeLineProps {
  home: boolean;
  estate: boolean;
}

export const TimelineSection = ({ home, estate }: TimeLineProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  let timelineItems: TimelineItem[] = [];
  let backgroundColor: string = '';
  let title: string = '';
  let subTitle: string = '';
  let mobileSubTitle: string = '';
  let mobileTitle: string = '';

  if (home) {
    title = 'home.timeline.title';
    subTitle = 'home.timeline.subTitle';
    
    mobileTitle = 'home.mobile_timeline.title';
    mobileSubTitle = 'home.mobile_timeline.mobileSubTitle';

    backgroundColor = 'bg-gradient-to-b from-[#E6DCCF] to-[#F7F5F1]';
    timelineItems = [
      {
        text: t('home.timeline.oceanBreezes'),
        mobileText: t('home.mobile_timeline.oceanBreezes'),
        image: '/images/home/timeline/room_2.webp',
        imagePosition: 'right',
      },
      {
        text: t('home.timeline.alfrescoLunches'),
        mobileText: t('home.mobile_timeline.alfrescoLunches'),
        image: '/images/home/timeline/familly.jpg',
        imagePosition: 'left',
      },
      {
        text: t('home.timeline.bikini'),
        mobileText: t('home.mobile_timeline.bikini'),
        image: '/images/home/timeline/bikini.jpg',
        imagePosition: 'right',
      },
      {
        text: t('home.timeline.garzon'),
        mobileText: t('home.mobile_timeline.garzon'),
        image: '/images/home/timeline/garzon.jpg',
        imagePosition: 'left',
      },
      {
        text: t('home.timeline.joseIgnacio'),
        mobileText: t('home.mobile_timeline.joseIgnacio'),
        image: '/images/home/timeline/joseIgnacio.webp',
        imagePosition: 'right',
      },
      {
        text: t('home.timeline.laBarraJoseIgnacio'),
        mobileText: t('home.mobile_timeline.laBarraJoseIgnacio'),
        image: '/images/home/timeline/la_barra.webp',
        imagePosition: 'left',
      },
    ];
  }

  if (estate) {
    title = 'estate.cancilleria.amenities.title';
    subTitle = 'estate.cancilleria.amenities.subTitle';
    mobileTitle = 'estate.cancilleria.amenities.mobileTitle';
    mobileSubTitle = 'estate.cancilleria.amenities.mobileSubTitle';
    backgroundColor = 'bg-[#F7F5F1]';
    timelineItems = [
      {
        text: t('estate.cancilleria.amenities.items.pool'),
        mobileText: t('estate.cancilleria.amenities.items.pool'),
        image: '/images/the_estate/la_cancilleria/amenities/new_pool.webp',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.amenities.items.pergola'),
        mobileText: t('estate.cancilleria.amenities.items.pergola'),
        image:
        '/images/the_estate/la_cancilleria/amenities/new_living_outdoor.webp',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.amenities.items.grill'),
        mobileText: t('estate.cancilleria.amenities.items.grill'),
        image: '/images/the_estate/la_cancilleria/amenities/new_grill.webp',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.amenities.items.air-accon'),
        mobileText: t('estate.cancilleria.amenities.items.air-accon'),
        image: '/images/the_estate/la_cancilleria/amenities/air.png',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.amenities.items.master-suite'),
        mobileText: t('estate.cancilleria.amenities.items.master-suite'),
        image: '/images/the_estate/la_cancilleria/amenities/tv.jpg',
        imagePosition: 'right',
      },
    ];
  }

  const mobileHeaderKey = isMobile ? mobileTitle : title || title;

  if (isMobile && estate) {
    // Mobile Estate: fondo unificado con degradé cálido
    return (
      <section className="relative w-full pt-10 overflow-hidden bg-nieve">
        <div
          className="absolute inset-x-0 top-0 h-[520px] pointer-events-none z-0"
          style={{
            background:
              'linear-gradient(360deg, rgba(247,245,241,0) 0%, #F7F5F1 80%, #f3e7da 100%)',
          }}
        />
        <div className="relative z-10">
          <TimelineMobile
            items={timelineItems}
            backgroundColor="bg-transparent"
            title={mobileHeaderKey}
            subTitle={mobileSubTitle}
          />
        </div>
      </section>
    );
  }

  return isMobile ? (
    <TimelineMobile
      items={timelineItems}
      backgroundColor={backgroundColor}
      title={mobileHeaderKey}
      subTitle={mobileSubTitle}
    />
  ) : (
    <DesktopTimeline
      timelineItems={timelineItems}
      backgroundColor={backgroundColor}
      title={title}
      subTitle={mobileSubTitle}
    />
  );
};
