"use client";

import { useTranslation } from "react-i18next";

import { HeroSection } from "@/app/components/sections/HeroSection";
import { HouseIntroSection } from "@/app/components/sections/HouseIntroSection";
import { HouseFeaturesSection } from "@/app/components/sections/HouseFeaturesSection";
import { HouseSpecsSection } from "@/app/components/sections/HouseSpecsSection";
import { HouseGallerySection } from "@/app/components/sections/HouseGallerySection";
import { CTASection } from "@/app/components/sections/CTASection";

export default function HousePage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("house.hero.title")}
        subtitle={t("house.hero.subtitle")}
        cta={t("house.hero.cta")}
        backgroundVideo="/public/images/home/hero.webp"
      />
      <HouseIntroSection />
      <HouseSpecsSection />
      <HouseFeaturesSection />
      <HouseGallerySection />
      <CTASection
        titleKey="house.cta.title"
        descriptionKey="house.cta.description"
      />
    </>
  );
}


