"use client";

import { useTranslation } from "react-i18next";

import { HeroSection } from "@/app/components/sections/HeroSection";
import { LocationMapSection } from "@/app/components/sections/LocationMapSection";
import { ImageDeviderSection } from "@/app/components/sections/ImageDeviderSection";
import { LocationMasonryGallery } from "@/app/components/sections/LocationMasonryGallery";
import { LocationDistancesSection } from "@/app/components/sections/LocationDistancesSection";
import { LaBarraDividerSection } from "@/app/components/sections/LaBarraDividerSection";
import { CTASection } from "@/app/components/sections/CTASection";

export default function LocationPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("location.hero.title")}
        subtitle={t("location.hero.subtitle")}
        backgroundVideo="/video/home/hero-final-web_7mb.mp4"
      />
      <LocationMapSection />
      <ImageDeviderSection imageSource="" />
      <LocationDistancesSection />
      <LocationMasonryGallery />
      <LaBarraDividerSection />
      <CTASection
        titleKey="location.cta.title"
        descriptionKey="location.cta.description"
      />
    </>
  );
}


