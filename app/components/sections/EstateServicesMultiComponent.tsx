import { LocationDistancesSection } from './LocationDistancesSection';
import { LocationDistancesMobile } from './LocationDistanceMobile';

interface EstateServicesProps {
  service: boolean;
  griegaItems: boolean;
}

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
        image: '/images/the_estate/la_griega/staff/chef.png',
        label: 'estate.griega.staff.items.chef',
      },
      {
        key: 'nanny',
        image: '/images/the_estate/la_griega/staff/nanny.png',
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
      {/* Mobile – fondo unificado con degradé cálido tipo Home/Properties */}
      <section
        className="relative block md:hidden w-full overflow-hidden py-16"
        style={{
          background:
            'linear-gradient(180deg, #f7f5f1 0%, #f7f5f1 85%, #f3e7da 100%)',
        }}
      >
        <div className="relative z-10">
          <LocationDistancesMobile
            title={title}
            description={description}
            items={LIST_ITEMS_IMAGES}
          />
        </div>
      </section>

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
