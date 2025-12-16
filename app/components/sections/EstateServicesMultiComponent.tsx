import { LocationDistancesSection } from './LocationDistancesSection';
import { LocationDistancesMobile } from './LocationDistanceMobile';

interface EstateServicesProps {
  service: boolean;
  griegaItems: boolean;
}

import staffChef from '@/app/assets/staff-chef.jpg';
import staffNanny from '@/app/assets/staff-nanny.jpg';
import staffDriver from '@/app/assets/staff-driver.jpg';
import staffYoga from '@/app/assets/staff-yoga.jpg';
import staffMassage from '@/app/assets/staff-massage.jpg';

export default function EstateServicesMultiComponent({
  service,
  griegaItems,
}: EstateServicesProps) {
  let LIST_ITEMS_IMAGES = [];
  let title = '';
  let description = '';

  if (service) {
    title = 'estate.cancilleria.services.title';
    description = 'estate.cancilleria.services.description';
    LIST_ITEMS_IMAGES = [
      {
        key: 'housekeeping',
        image: '/images/the_estate/la_cancilleria/services/no-image.jpg',
        label: 'estate.cancilleria.services.items.housekeeping',
      },
      {
        key: 'loundry',
        image: '/images/the_estate/la_cancilleria/services/no-image.jpg',
        label: 'estate.cancilleria.services.items.loundry',
      },
      {
        key: 'garden',
        image: '/images/the_estate/la_cancilleria/services/garder.webp',
        label: 'estate.cancilleria.services.items.garden',
      },
      {
        key: 'pool',
        image: '/images/the_estate/la_cancilleria/services/no-image.jpg',
        label: 'estate.cancilleria.services.items.pool',
      },
      {
        key: 'property',
        image: '/images/the_estate/la_cancilleria/services/no-image.jpg',
        label: 'estate.cancilleria.services.items.property',
      },
    ];
  }
  if (griegaItems) {
    title = 'estate.griega.staff.title';
    description = 'estate.griega.staff.description';
    LIST_ITEMS_IMAGES = [
      {
        key: 'chef',
        image: '/images/the_estate/la_griega/staff/staff-chef.jpg',
        label: 'estate.griega.staff.items.chef',
      },
      {
        key: 'nanny',
        image: '/images/the_estate/la_griega/staff/staff-nanny.jpg',
        label: 'estate.griega.staff.items.nanny',
      },
      {
        key: 'driver',
        image: '/images/the_estate/la_griega/staff/staff-driver.jpg',
        label: 'estate.griega.staff.items.driver',
      },
      {
        key: 'yoga',
        image: '/images/the_estate/la_griega/staff/staff-yoga.jpg',
        label: 'estate.griega.staff.items.yoga',
      },
      {
        key: 'massage',
        image: '/images/the_estate/la_griega/staff/staff-massage.jpg',
        label: 'estate.griega.staff.items.massage',
      },
    ];
  }

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <LocationDistancesMobile
          title={title}
          description={description}
          items={LIST_ITEMS_IMAGES}
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <LocationDistancesSection
          title={title}
          description={description}
          items={LIST_ITEMS_IMAGES}
        />
      </div>
    </>
  );
}
