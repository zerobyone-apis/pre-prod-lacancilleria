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
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("estate.staff.label")}
          title={t("estate.staff.title")}
          align="center"
          className="mb-16"
        />
        
        <div className="space-y-8 md:space-y-12">
          {STAFF_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={service.id}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}>
                  {/* Text Side */}
                  <div className={`md:col-span-5 ${isEven ? 'md:col-start-1' : 'md:col-start-8'}`}>
                    <div className="relative py-6 cursor-pointer group">
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-serif transition-colors duration-300 ${
                        isHovered ? 'text-foreground' : 'text-foreground/70'
                      }`}>
                        {t(`estate.staff.services.${service.id}`)}
                      </h3>
                      
                      {/* Animated underline */}
                      <div className={`absolute left-0 bottom-0 h-[2px] bg-accent transition-all duration-500 ${
                        isHovered ? 'w-full' : 'w-0'
                      }`}>
                        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent transition-opacity duration-300 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Image Side - Alternating position */}
                  <div className={`md:col-span-5 ${isEven ? 'md:col-start-8' : 'md:col-start-1'} ${
                    isEven ? '' : 'md:row-start-1'
                  }`}>
                    <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary/20 transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <img
                        src={service.image}
                        alt={t(`estate.staff.services.${service.id}`)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Decorative separator */}
                {index < STAFF_SERVICES.length - 1 && (
                  <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-px h-8 md:h-12 bg-gradient-to-b from-border to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
