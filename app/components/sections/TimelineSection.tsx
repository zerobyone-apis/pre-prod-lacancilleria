import { useMediaQuery } from '../../hooks/useMediaQuery';
import { TimelineMobile } from './TimelineMobileSection';
import { DesktopTimeline } from './TimelineDesktopSection'; // tu componente actual
import { t } from 'i18next';
import { useMounted } from '@/app/hooks/useMounted';

export interface TimelineItem {
  text: string;
  mobileText: string;
  image: string;
  imagePosition: 'left' | 'right';
}

interface TimeLineProps {
  home: boolean;
  estate: boolean;
  quick_facts?: boolean;
  service_lc?: boolean;
  service_lg?: boolean;
}

export const TimelineSection = ({
  home,
  estate,
  service_lc,
  service_lg,
}: TimeLineProps) => {
  const mounted = useMounted();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Importante: antes de mounted, no renderices una versión distinta a la que luego cambiaría.
  if (!mounted) {
    // Opción 1: devolver null (no hay mismatch, pero hay “salto”)
    return null;

    // Opción 2 (mejor UX): un placeholder con altura similar
    // return <section className="w-full bg-[#F7F5F1] py-24" />;
  }

  let timelineItems: TimelineItem[] = [];
  let backgroundColor: string = '';
  let title: string = '';
  let subTitle: string = '';
  let mobileSubTitle: string = '';
  let mobileTitle: string = '';
  let showCTA: boolean = false;
  let isHome: boolean = false;

  if (home) {
    title = 'home.timeline.title';
    subTitle = 'home.timeline.subTitle';

    mobileTitle = 'home.mobile_timeline.title';
    mobileSubTitle = 'home.mobile_timeline.mobileSubTitle';

    showCTA = true;
    isHome = true;

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
        //image: '/images/home/timeline/bikini.jpg',
        image: '/images/home/timeline/montoya.webp',
        imagePosition: 'right',
      },
      {
        text: t('home.timeline.garzon'),
        mobileText: t('home.mobile_timeline.garzon'),
        image: '/images/home/timeline/garzon.webp',
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
    showCTA = true;
    backgroundColor = isMobile
      ? 'bg-gradient-to-b from-[#F7F5F1] via-[#E6DCCF] to-[#F7F5F1]'
      : 'bg-[#F7F5F1]';
    timelineItems = [
      {
        text: t('estate.cancilleria.amenities.items.biking'),
        mobileText: t('estate.cancilleria.amenities.items.biking'),
        image: '/images/the_estate/la_cancilleria/amenities/biking.png',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.amenities.items.pool'),
        mobileText: t('estate.cancilleria.amenities.items.pool'),
        image: '/images/the_estate/la_cancilleria/amenities/new_pool.webp',
        imagePosition: 'right',
      },
      {
        text: t('home.quickFacts.items.garden.title'),
        mobileText: t('home.quickFacts.items.garden.title'),
        image: '/images/home/quick-facts/new/garden.webp',
        imagePosition: 'left',
      },
      {
        text: t('home.quickFacts.items.pergola.title'),
        mobileText: t('home.quickFacts.items.pergola.title'),
        image: '/images/home/quick-facts/new/outdor-pergola.webp',
        imagePosition: 'right',
      },
      {
        text: t('home.quickFacts.items.staff-house.title'),
        mobileText: t('home.quickFacts.items.staff-house.title'),
        image: '/images/home/quick-facts/new/la_griega.webp',
        imagePosition: 'left',
      },
      {
        text: t('home.quickFacts.items.parrillero.title'),
        mobileText: t('home.quickFacts.items.parrillero.title'),
        image: '/images/home/quick-facts/new/grill.webp',
        imagePosition: 'right',
      },
      // {
      //   text: t('home.quickFacts.items.services.title'),
      //   mobileText: t('home.quickFacts.items.services.title'),
      //   image: '/images/home/quick-facts/new/chef.png',
      //   imagePosition: 'left',
      // },
      {
        text: t('home.quickFacts.items.office.title'),
        mobileText: t('home.quickFacts.items.office.title'),
        image: '/images/home/quick-facts/new/office.webp',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.amenities.items.air-accon'),
        mobileText: t('estate.cancilleria.amenities.items.air-accon'),
        image: '/images/the_estate/la_cancilleria/amenities/air.png',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.amenities.items.master-suite'),
        mobileText: t('estate.cancilleria.amenities.items.master-suite'),
        image: '/images/the_estate/la_cancilleria/amenities/tv.jpg',
        imagePosition: 'left',
      },
    ];
  }

  if (service_lc) {
    title = 'estate.cancilleria.services.title';
    subTitle = 'estate.cancilleria.services.description';

    mobileTitle = 'estate.cancilleria.services.title';
    mobileSubTitle = 'estate.cancilleria.services.description';

    showCTA = false;

    backgroundColor =
      'bg-gradient-to-b from-[#F7F5F1] via-[#E6DCCF] to-[#F7F5F1]';
    timelineItems = [
      {
        text: t('estate.cancilleria.services.items.housekeeping'),
        mobileText: t('estate.cancilleria.services.items.housekeeping'),
        image: '/images/the_estate/la_cancilleria/services/housekeeping.jpg',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.services.items.loundry'),
        mobileText: t('estate.cancilleria.services.items.loundry'),
        image: '/images/the_estate/la_cancilleria/services/loundry.jpg',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.services.items.garden'),
        mobileText: t('estate.cancilleria.services.items.garden'),
        image: '/images/the_estate/la_cancilleria/services/garder.webp',
        imagePosition: 'right',
      },
      {
        text: t('estate.cancilleria.services.items.pool'),
        mobileText: t('estate.cancilleria.services.items.pool'),
        image: '/images/the_estate/la_cancilleria/services/pool-clean1.jpg',
        imagePosition: 'left',
      },
      {
        text: t('estate.cancilleria.services.items.property'),
        mobileText: t('estate.cancilleria.services.items.property'),
        image: '/images/the_estate/la_cancilleria/services/maintenance.jpg',
        imagePosition: 'right',
      },
    ];
  }

  if (service_lg) {
    title = 'estate.griega.staff.title';
    subTitle = 'estate.griega.staff.description';

    mobileTitle = 'estate.griega.staff.title';
    mobileSubTitle = 'estate.griega.staff.description';

    showCTA = false;

    backgroundColor =
      'bg-gradient-to-b from-[#F7F5F1] via-[#E6DCCF] to-[#F7F5F1]';
    timelineItems = [
      {
        text: t('estate.griega.staff.items.chef'),
        mobileText: t('estate.griega.staff.items.chef'),
        image: '/images/the_estate/la_griega/staff/chef.png',
        imagePosition: 'right',
      },
      {
        text: t('estate.griega.staff.items.nanny'),
        mobileText: t('estate.griega.staff.items.nanny'),
        image: '/images/the_estate/la_griega/staff/nanny.png',
        imagePosition: 'left',
      },
      {
        text: t('estate.griega.staff.items.driver'),
        mobileText: t('estate.griega.staff.items.driver'),
        image: '/images/the_estate/la_griega/staff/driver.jpg',
        imagePosition: 'right',
      },
      {
        text: t('estate.griega.staff.items.driver'),
        mobileText: t('estate.griega.staff.items.driver'),
        image: '/images/the_estate/la_griega/staff/yoga-coach.jpg',
        imagePosition: 'left',
      },
      {
        text: t('estate.griega.staff.items.massage'),
        mobileText: t('estate.griega.staff.items.massage'),
        image: '/images/the_estate/la_griega/staff/terapist.jpg',
        imagePosition: 'right',
      },
    ];
  }

  const mobileHeaderKey = isMobile ? mobileTitle : title || title;

  // if (isMobile && estate) {
  //   // Mobile Estate: fondo unificado con degradé cálido
  //   return (
  //     <section className="relative w-full pt-10 overflow-hidden bg-nieve">
  //       <div
  //         className="absolute inset-x-0 top-0 h-[520px] pointer-events-none z-0"
  //         style={{
  //           background:
  //             'linear-gradient(360deg, rgba(247,245,241,0) 0%, #F7F5F1 80%, #f3e7da 100%)',
  //         }}
  //       />
  //       <div className="relative z-10">
  //         <TimelineMobile
  //           items={timelineItems}
  //           backgroundColor="bg-transparent"
  //           title={mobileHeaderKey}
  //           subTitle={mobileSubTitle}
  //         />
  //       </div>
  //     </section>
  //   );
  // }

  // TimelineSection (solo el return mobile)
  return isMobile ? (
    <section className={`relative w-full overflow-hidden ${backgroundColor}`}>
      {/* opcional: si querés un fade arriba, hacelo igual para todos */}

      <div className="relative z-10">
        <TimelineMobile
          items={timelineItems}
          backgroundColor={backgroundColor} // TimelineMobile no decide fondo
          title={mobileHeaderKey}
          subTitle={mobileSubTitle}
          showCTA={showCTA}
          fromHome={isHome}
        />
      </div>
    </section>
  ) : (
    <DesktopTimeline
      timelineItems={timelineItems}
      backgroundColor={backgroundColor}
      title={title}
      subTitle={mobileSubTitle}
      showCTA={showCTA}
      fromHome={isHome}
    />
  );
};
