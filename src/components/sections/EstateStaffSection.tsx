import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState } from "react";

import staffChef from "@/assets/staff-chef.jpg";
import staffNanny from "@/assets/staff-nanny.jpg";
import staffDriver from "@/assets/staff-driver.jpg";
import staffYoga from "@/assets/staff-yoga.jpg";
import staffMassage from "@/assets/staff-massage.jpg";

const STAFF_SERVICES = [
  { id: "chef", image: staffChef },
  { id: "nanny", image: staffNanny },
  { id: "driver", image: staffDriver },
  { id: "yoga", image: staffYoga },
  { id: "massage", image: staffMassage },
];

export const EstateStaffSection = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={t("estate.staff.label")}
          title={t("estate.staff.title")}
          align="center"
          className="mb-16"
        />
        
        <div className="space-y-2">
          {STAFF_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={service.id}
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`flex items-center gap-8 py-5 px-4 cursor-pointer transition-all duration-500 ease-out ${
                  isHovered 
                    ? isEven 
                      ? 'translate-x-[-20%] md:translate-x-[-30%]' 
                      : 'translate-x-[20%] md:translate-x-[30%]'
                    : 'translate-x-0'
                }`}>
                  {/* Text content */}
                  <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-serif transition-colors duration-300 ${
                      isHovered ? 'text-foreground' : 'text-foreground/70'
                    }`}>
                      {t(`estate.staff.services.${service.id}`)}
                    </h3>
                  </div>
                </div>

                {/* Animated underline */}
                <div className={`absolute bottom-0 h-[1px] bg-border/50 transition-all duration-300 ${
                  isHovered ? 'left-0 right-0' : 'left-[10%] right-[10%]'
                }`} />

                {/* Image appearing on hover - positioned on opposite side */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-[45%] md:w-[40%] aspect-[4/3] rounded-lg overflow-hidden transition-all duration-500 ease-out ${
                  isEven 
                    ? 'right-0 translate-x-full' 
                    : 'left-0 -translate-x-full'
                } ${
                  isHovered 
                    ? isEven 
                      ? '!translate-x-[15%]' 
                      : '!-translate-x-[15%]'
                    : ''
                }`}>
                  <img
                    src={service.image}
                    alt={t(`estate.staff.services.${service.id}`)}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>

                {/* Accent dot */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent transition-all duration-300 ${
                  isEven ? 'left-4' : 'right-4'
                } ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
