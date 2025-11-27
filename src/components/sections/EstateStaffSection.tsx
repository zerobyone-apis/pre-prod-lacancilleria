import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const EstateStaffSection = () => {
  const { t } = useTranslation();

  const staffServices = [
    "chef",
    "nanny",
    "driver",
    "yoga",
    "massage"
  ];

  return (
    <Section className="py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <SectionHeader
          label={t("estate.staff.label")}
          title={t("estate.staff.title")}
        />
        
        <div className="space-y-4">
          {staffServices.map((service) => (
            <div
              key={service}
              className="text-lg md:text-xl text-foreground border-b border-border/30 pb-3 last:border-0"
            >
              {t(`estate.staff.services.${service}`)}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
