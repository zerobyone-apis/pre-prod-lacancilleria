/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const HomeCTASection = ({textCta}: any) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center text-center pt-20 md:pt-24 pb-24 md:pb-32 bg-none">
      <h2
        className="
        text-[34px] md:text-[48px]
        font-serif text-mar/90
        leading-[1.35]
        tracking-[0.015em]
        max-w-[900px]
        mb-10
      "
      >
        <Trans i18nKey={textCta} />
      </h2>

      <Button
        onClick={() =>
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        size="lg"
        className="
        px-4 md:px-8 py-3 md:py-3
        text-cta_bottn md:text-cta_bottn
        bg-mar text-white
        rounded-[4px]
        tracking-wide
        transition-all duration-500
        hover:bg-piel/80 hover:shadow-xl hover:-translate-y-1
      "
      >
        {t('home.cta.button')}
      </Button>
    </div>
  );
};
