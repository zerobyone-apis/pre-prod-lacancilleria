"use client";

import { useTranslation } from "react-i18next";

import { HeroSection } from "@/app/components/sections/HeroSection";
import { LocationMapSection } from "@/app/components/sections/LocationMapSection";
import { ImageDeviderSection } from "@/app/components/sections/ImageDeviderSection";
import { LocationGallery } from "@/app/components/sections/LocationGallery";
import { NewFigmaContactSection } from "../components/sections/NewFigmaContactSection";
import LocationDistances from "../components/sections/LocationDistances";
import { LocationDistanceMobileShowcase } from "../components/sections/LocationDistanceMobileVariants";

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
      <LocationDistanceMobileShowcase
        title="location.distances.title"
        items={[
          { key: 'pde-airport', image: '/images/location/easy_access/pde_airport.webp', label: 'location.distances.items.pde-airport' },
          { key: 'carrasco', image: '/images/location/easy_access/carrasco_airport.jpg', label: 'location.distances.items.carrasco' },
          { key: 'montoya', image: '/images/location/easy_access/montoya.webp', label: 'location.distances.items.montoya' },
          { key: 'bikini', image: '/images/location/easy_access/bikini_beach.jpg', label: 'location.distances.items.bikini' },
          { key: 'labarra', image: '/images/location/easy_access/labarra.webp', label: 'location.distances.items.labarra' },
        ]}
      />
      <ImageDeviderSection imageSource="/images/location/devider/puente_de_la_barra.webp" />
      <LocationGallery />
      <ImageDeviderSection imageSource="/images/location/devider/la_barra_3.webp" />
      <NewFigmaContactSection />
    </>
  );
}
