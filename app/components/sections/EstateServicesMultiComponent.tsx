import { LocationDistancesSection } from './LocationDistancesSection';
import { LocationDistancesMobile } from './LocationDistanceMobile';

export default function EstateServicesMultiComponent() {
  const ServiceItems = [
    {
      key: 'housekeeping',
      image: '/images/the_estate/la_cancilleria/services/garder.webp',
      label: 'estate.cancilleria.services.items.housekeeping',
    },
    {
      key: 'loundry',
      image: '/images/the_estate/la_cancilleria/services/garder.webp',
      label: 'estate.cancilleria.services.items.loundry',
    },
    {
      key: 'garden',
      image: '/images/the_estate/la_cancilleria/services/garder.webp',
      label: 'estate.cancilleria.services.items.garden',
    },
    {
      key: 'pool',
      image: '/images/the_estate/la_cancilleria/services/garder.webp',
      label: 'estate.cancilleria.services.items.pool',
    },
    {
      key: 'property',
      image: '/images/the_estate/la_cancilleria/services/garder.webp',
      label: 'estate.cancilleria.services.items.property',
    },
  ];

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <LocationDistancesMobile
          title="estate.cancilleria.services.title"
          description="estate.cancilleria.services.description"
          items={ServiceItems}
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <LocationDistancesSection
          title="estate.cancilleria.services.title"
          description="estate.cancilleria.services.description"
          items={ServiceItems}
        />
      </div>
    </>
  );
}
