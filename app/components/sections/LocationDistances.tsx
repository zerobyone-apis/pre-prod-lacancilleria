import { LocationDistancesSection } from "./LocationDistancesSection";
import { LocationDistancesMobile } from "./LocationDistanceMobile";

export default function LocationDistances() {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <LocationDistancesMobile />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <LocationDistancesSection />
      </div>
    </>
  );
}
