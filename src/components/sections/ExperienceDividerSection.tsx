import { useTranslation } from 'react-i18next';

export const ExperienceDividerSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center px-6">
          {t('divider.experience')}
        </h3>
      </div>
    </section>
  );
};
