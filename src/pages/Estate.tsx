import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { EstateIntroSection } from "@/components/sections/EstateIntroSection";
import { EstateDividerSection } from "@/components/sections/EstateDividerSection";
import { EstateServicesSection } from "@/components/sections/EstateServicesSection";
import { EstateLogisticsSection } from "@/components/sections/EstateLogisticsSection";
import { EstateAmenitiesSection } from "@/components/sections/EstateAmenitiesSection";
import { EstateGalleryMasonry } from "@/components/sections/EstateGalleryMasonry";
import { CTASection } from "@/components/sections/CTASection";
import { FooterMinimal } from "@/components/layout/FooterMinimal";

const Estate = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title={t("estate.hero.title")}
        subtitle={t("estate.hero.subtitle")}
        backgroundImage="/images/estate-hero.jpg"
      />
      <EstateIntroSection />
      <EstateDividerSection />
      <EstateServicesSection />
      <EstateLogisticsSection />
      <EstateAmenitiesSection />
      <EstateGalleryMasonry />
      <CTASection titleKey={t("estate.cta.title")} descriptionKey={t("estate.cta.description")} />
      <FooterMinimal />
    </PageContainer>
  );
};

export default Estate;
