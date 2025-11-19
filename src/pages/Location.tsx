import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { LocationIntroSection } from '@/components/sections/LocationIntroSection';
import { LocationMapSection } from '@/components/sections/LocationMapSection';
import { LocationNearbySpotsSection } from '@/components/sections/LocationNearbySpotsSection';
import { CTASection } from '@/components/sections/CTASection';
import { FooterMinimal } from '@/components/layout/FooterMinimal';

const Location = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <HeroSection
        title={t('location.hero.title')}
        subtitle={t('location.hero.subtitle')}
        backgroundImage="/images/location-hero.jpg"
      />
      <LocationIntroSection />
      <LocationMapSection />
      <LocationNearbySpotsSection />
      <CTASection 
        titleKey="location.cta.title"
        descriptionKey="location.cta.description"
      />
      <FooterMinimal />
    </PageContainer>
  );
};

export default Location;
