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

export const TimelineSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const timelineItems: TimelineItem[] = [
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

  return isMobile ? (
    <TimelineMobile items={timelineItems} />
  ) : (
    <DesktopTimeline timelineItems={timelineItems} />
  );
};
