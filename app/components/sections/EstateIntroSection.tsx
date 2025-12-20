import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { TwoColumn } from '@/app/components/ui/TwoColumn';
import { ImageCard } from '@/app/components/ui/ImageCard';

export const EstateIntroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f1] py-12 md:py-24 lg:py-32">
      {/* Mobile background: reutiliza el degradé cálido del Home */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] md:hidden pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(247,245,241,0) 0%, #f7f5f1 45%, #f3e7da 100%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <TwoColumn
          left={
            <ImageCard
              src="/images/estate-entrance.jpg"
              alt="Estate entrance"
              aspectRatio="portrait"
            />
          }
          right={
            <SectionHeader
              title={t('estate.intro.title')}
              description={t('estate.intro.description')}
            />
          }
          reverse
        />
      </div>
    </section>
  );
};
