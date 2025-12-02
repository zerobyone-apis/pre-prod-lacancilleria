"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { HomeIntroSection } from "@/app/components/sections/HomeIntroSection";
import { PropertiesSliderSection } from "@/app/components/sections/PropertiesSliderSection";
import { QuickFactsSection } from "@/app/components/sections/QuickFactsSection";
import { LifestyleImageSection } from "@/app/components/sections/LifestyleImageSection";
import { TimelineSection } from "@/app/components/sections/TimelineSection";
import { HomeDividerSection } from "@/app/components/sections/HomeDividerSection";
import { HomeCTASection } from "@/app/components/sections/HomeCTASection";
import { ExperienceDividerSection } from "@/app/components/sections/ExperienceDividerSection";
import { ContactSection } from "@/app/components/sections/ContactSection";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        backgroundImage="/images/house-hero.jpg"
      />
      <HomeIntroSection />
      <PropertiesSliderSection />
      <QuickFactsSection />
      <LifestyleImageSection />
      <TimelineSection />
      <HomeDividerSection />
      <HomeCTASection />
      <ExperienceDividerSection />
      <ContactSection />
    </>
  );
}


