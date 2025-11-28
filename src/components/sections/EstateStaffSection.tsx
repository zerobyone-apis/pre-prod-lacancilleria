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
    <Section className="py-24 md:py-32 overflow-visible">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label={t("estate.staff.label")}
          title={t("estate.staff.title")}
          align="center"
          className="mb-16"
        />
        
        <div className="relative">
          {STAFF_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={service.id}
                className="relative border-b border-border/30 last:border-b-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Text row */}
                <div className="py-6 md:py-8 cursor-pointer">
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-serif text-center transition-colors duration-300 ${
                    isHovered ? 'text-foreground' : 'text-foreground/60'
                  }`}>
                    {t(`estate.staff.services.${service.id}`)}
                  </h3>
                </div>

                {/* Image - overflowing container */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 aspect-[4/3] rounded-lg overflow-hidden shadow-2xl z-10 pointer-events-none transition-all duration-500 ease-out ${
                    isEven 
                      ? 'right-0 translate-x-[60%] md:translate-x-[70%]' 
                      : 'left-0 -translate-x-[60%] md:-translate-x-[70%]'
                  } ${
                    isHovered 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={t(`estate.staff.services.${service.id}`)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Connecting line from text to image */}
                <div className={`absolute top-1/2 h-[2px] bg-accent/60 transition-all duration-500 ease-out ${
                  isEven 
                    ? 'right-0 origin-left' 
                    : 'left-0 origin-right'
                } ${
                  isHovered 
                    ? 'w-[30%] md:w-[35%] opacity-100' 
                    : 'w-0 opacity-0'
                }`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent ${
                    isEven ? 'left-0' : 'right-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
