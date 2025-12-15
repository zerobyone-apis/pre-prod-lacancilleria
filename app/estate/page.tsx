"use client";

import { useTranslation } from "react-i18next";

import { HeroSection } from "@/app/components/sections/HeroSection";
import { PropertiesSliderSection } from "@/app/components/sections/PropertiesSliderSection";
import { EstateServicesSection } from "@/app/components/sections/EstateServicesSection";
import { EstateDividerSection } from "@/app/components/sections/EstateDividerSection";
import { EstateLogisticsSection } from "@/app/components/sections/EstateLogisticsSection";
import { EstateAmenitiesSection } from "@/app/components/sections/EstateAmenitiesSection";
import { EstateStaffSection } from "@/app/components/sections/EstateStaffSection";
import { EstateGalleryMasonry } from "@/app/components/sections/EstateGalleryMasonry";
import { EstateExploreSection } from "@/app/components/sections/EstateExploreSection";
import { CTASection } from "@/app/components/sections/CTASection";

export default function EstatePage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("estate.hero.title")}
        subtitle={t("estate.hero.subtitle")}
        backgroundVideo="/video/location/location_refined_hero.mp4"
      />
      <PropertiesSliderSection />
      <EstateServicesSection />
      <EstateAmenitiesSection />
      <EstateGalleryMasonry />
      <EstateDividerSection />
      <PropertiesSliderSection propertyFilter="griega" />
      <EstateStaffSection />
      <EstateExploreSection />
      <EstateDividerSection />
      <CTASection
        titleKey={t("estate.cta.title")}
        descriptionKey={t("estate.cta.description")}
      />
    </>
  );
}


