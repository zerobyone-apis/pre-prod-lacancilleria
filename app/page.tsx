"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { HomeIntroSection } from "@/app/components/sections/HomeIntroSection";
import { PropertiesSliderSection } from "@/app/components/sections/PropertiesSliderSection";
import { QuickFactsSection } from "@/app/components/sections/QuickFactsSection";
import { TimelineSection } from "@/app/components/sections/TimelineSection";
import { HomeDividerSection } from "@/app/components/sections/HomeDividerSection";
import { HomeCTASection } from "@/app/components/sections/HomeCTASection";
import { ExperienceDividerSection } from "@/app/components/sections/ExperienceDividerSection";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { ImageDeviderSection } from "./components/sections/ImageDeviderSection";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        backgroundImage="/images/home/hero.webp"
      />
      <HomeIntroSection />
      {/* {<PropertiesSliderSection />} */}
      <QuickFactsSection />
      <ImageDeviderSection imageSource='/images/home/deviders/montoya.webp' />
      <TimelineSection />
      {/* <HomeDividerSection /> */}
      {/* <HomeCTASection /> */}
      <ImageDeviderSection imageSource='/images/home/deviders/lacancilleria_panoramic.jpg' />
      <ContactSection />
    </>
  );
}


