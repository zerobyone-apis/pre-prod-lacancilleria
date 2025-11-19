import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { HouseIntroSection } from '@/components/sections/HouseIntroSection';
import { HouseFeaturesSection } from '@/components/sections/HouseFeaturesSection';
import { HouseSpecsSection } from '@/components/sections/HouseSpecsSection';
import { HouseGallerySection } from '@/components/sections/HouseGallerySection';
import { CTASection } from '@/components/sections/CTASection';
import { FooterMinimal } from '@/components/layout/FooterMinimal';

const House = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title={t('house.hero.title')}
        subtitle={t('house.hero.subtitle')}
        cta={t('house.hero.cta')}
        backgroundImage="/images/house-hero.jpg"
      />
      <HouseIntroSection />
      <HouseSpecsSection />
      <HouseFeaturesSection />
      <HouseGallerySection />
      <CTASection 
        titleKey="house.cta.title"
        descriptionKey="house.cta.description"
      />
      <FooterMinimal />
    </PageContainer>
  );
};

export default House;
