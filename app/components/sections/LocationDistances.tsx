import { LocationDistancesSection } from './LocationDistancesSection';
import { LocationDistancesMobile } from './LocationDistanceMobile';

export default function LocationDistances() {
  const LocationItems = [
    {
      key: 'pde-airport',
      image: '/images/location/easy_access/pde_airport.webp',
      label: 'location.distances.items.pde-airport',
    },
    {
      key: 'carrasco',
      image: '/images/location/easy_access/carrasco_airport.jpg',
      label: 'location.distances.items.carrasco',
    },
    {
      key: 'montoya',
      image: '/images/location/easy_access/montoya.webp',
      label: 'location.distances.items.montoya',
    },
    {
      key: 'bikini',
      image: '/images/location/easy_access/bikini_beach.jpg',
      label: 'location.distances.items.bikini',
    },
    {
      key: 'labarra',
      image: '/images/location/easy_access/labarra.webp',
      label: 'location.distances.items.labarra',
    },
  ];

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <LocationDistancesMobile
          title="location.distances.title"
          items={LocationItems}
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <LocationDistancesSection
          title="location.distances.title"
          items={LocationItems}
        />
      </div>
    </>
  );
}
