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

  if (home) {
    title = 'home.timeline.title';
    backgroundColor = 'bg-gradient-to-b from-[#E6DCCF] to-[#F7F5F1]';
    timelineItems = [
      {
        text: t('home.timeline.oceanBreezes'),
        mobileText: t('home.mobile_timeline.oceanBreezes'),
        image: '/images/home/timeline/room.jpg',
        imagePosition: 'right',
      },
      {
        text: t('home.timeline.alfrescoLunches'),
        mobileText: t('home.mobile_timeline.alfrescoLunches'),
        image: '/images/home/timeline/familly.jpg',
        imagePosition: 'left',
      },
      {
        text: t('home.timeline.vibrantScene'),
        mobileText: t('home.mobile_timeline.vibrantScene'),
        image: '/images/home/timeline/punta_pic.webp',
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
    backgroundColor = 'bg-[#F7F5F1]';
    timelineItems = [
      {
        text: t('estate.cancilleria.amenities.items.pool'),
        mobileText: t('estate.cancilleria.amenities.items.pool'),
        image: '/images/the_estate/la_cancilleria/amenities/pool.webp',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.amenities.items.pergola'),
        mobileText: t('estate.cancilleria.amenities.items.pergola'),
        image:
          '/images/the_estate/la_cancilleria/amenities/outdoor-living-area.webp',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.amenities.items.grill'),
        mobileText: t('estate.cancilleria.amenities.items.grill'),
        image: '/images/the_estate/la_cancilleria/amenities/grill.webp',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.amenities.items.air-accon'),
        mobileText: t('estate.cancilleria.amenities.items.air-accon'),
        image: '/images/the_estate/la_cancilleria/services/no-image.jpg',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.amenities.items.master-suite'),
        mobileText: t('estate.cancilleria.amenities.items.master-suite'),
        image: '/images/the_estate/la_cancilleria/services/no-image.jpg',
        imagePosition: 'right',
      },
    ];
  }

  return isMobile ? (
    <TimelineMobile items={timelineItems} backgroundColor={backgroundColor} title={title} />
  ) : (
    <DesktopTimeline timelineItems={timelineItems} backgroundColor={backgroundColor} title={title} />
  );
};
