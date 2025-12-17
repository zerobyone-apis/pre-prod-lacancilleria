"use client";

import { useTranslation } from "react-i18next";

import { HeroSection } from "@/app/components/sections/HeroSection";
import { LocationMapSection } from "@/app/components/sections/LocationMapSection";
import { ImageDeviderSection } from "@/app/components/sections/ImageDeviderSection";
import { LocationGallery } from "@/app/components/sections/LocationGallery";
import { NewFigmaContactSection } from "../components/sections/NewFigmaContactSection";
import LocationDistances from "../components/sections/LocationDistances";
import { 
  VariantThumbnailCards, 
  VariantMinimalList, 
  VariantOverlayCards, 
  VariantHorizontalCarousel, 
  VariantDesktopStyle 
} from "../components/sections/LocationDistanceMobileVariants";

const DISTANCE_ITEMS = [
  { key: 'pde-airport', image: '/images/location/easy_access/pde_airport.webp', label: 'location.distances.items.pde-airport' },
  { key: 'carrasco', image: '/images/location/easy_access/carrasco_airport.jpg', label: 'location.distances.items.carrasco' },
  { key: 'montoya', image: '/images/location/easy_access/montoya.webp', label: 'location.distances.items.montoya' },
  { key: 'bikini', image: '/images/location/easy_access/bikini_beach.jpg', label: 'location.distances.items.bikini' },
  { key: 'labarra', image: '/images/location/easy_access/labarra.webp', label: 'location.distances.items.labarra' },
];

export default function LocationPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("location.hero.title")}
        subtitle={t("location.hero.subtitle")}
        backgroundVideo="/video/location/location_refined_hero.mp4"
      />
      <LocationMapSection />
      <ImageDeviderSection imageSource="/images/location/devider/devider1.webp" />
      <LocationDistances />
      
      {/* === VARIANTES PARA COMPARAR (solo mobile) === */}
      <div className="md:hidden bg-arena py-4">
        <p className="text-center text-piel font-bold text-sm mb-2">VARIANTE 1: Thumbnail Cards</p>
      </div>
      <VariantThumbnailCards title="location.distances.title" items={DISTANCE_ITEMS} />
      
      <div className="md:hidden bg-arena py-4">
        <p className="text-center text-piel font-bold text-sm mb-2">VARIANTE 2: Minimal List</p>
      </div>
      <VariantMinimalList title="location.distances.title" items={DISTANCE_ITEMS} />
      
      <div className="md:hidden bg-arena py-4">
        <p className="text-center text-piel font-bold text-sm mb-2">VARIANTE 3: Overlay Cards</p>
      </div>
      <VariantOverlayCards title="location.distances.title" items={DISTANCE_ITEMS} />
      
      <div className="md:hidden bg-arena py-4">
        <p className="text-center text-piel font-bold text-sm mb-2">VARIANTE 4: Carousel</p>
      </div>
      <VariantHorizontalCarousel title="location.distances.title" items={DISTANCE_ITEMS} />
      
      <div className="md:hidden bg-arena py-4">
        <p className="text-center text-piel font-bold text-sm mb-2">VARIANTE 5: Desktop Style</p>
      </div>
      <VariantDesktopStyle title="location.distances.title" items={DISTANCE_ITEMS} />
      {/* === FIN VARIANTES === */}
      <ImageDeviderSection imageSource="/images/location/devider/puente_de_la_barra.webp" />
      <LocationGallery />
      <ImageDeviderSection imageSource="/images/location/devider/la_barra_3.webp" />
      <NewFigmaContactSection />
    </>
  );
}
