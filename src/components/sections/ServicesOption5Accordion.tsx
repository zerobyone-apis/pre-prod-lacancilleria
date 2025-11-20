import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { Sparkles, Shirt, Trees, Droplets, Wrench } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ServicesOption5Accordion = () => {
  const { t } = useTranslation();
  const accordionRef = useGsapStagger('.accordion-item');

  const services = [
    {
      key: 'housekeeping',
      icon: Sparkles,
      title: 'Housekeeping / Cleaning',
      description: 'Professional daily cleaning and housekeeping services for your residence',
      details: [
        'Daily or weekly cleaning schedules',
        'Deep cleaning services available',
        'Eco-friendly cleaning products',
        'Trained and vetted staff',
        'Flexible scheduling'
      ]
    },
    {
      key: 'laundry',
      icon: Shirt,
      title: 'Laundry / Wardrobe',
      description: 'Complete laundry service and wardrobe management with care',
      details: [
        'Washing, drying, and ironing',
        'Delicate fabric care',
        'Wardrobe organization',
        'Seasonal clothing storage',
        'Professional alterations available'
      ]
    },
    {
      key: 'garden',
      icon: Trees,
      title: 'Garden / Exterior Maintenance',
      description: 'Expert landscaping and exterior upkeep to maintain pristine grounds',
      details: [
        'Regular lawn mowing and edging',
        'Pruning and hedge trimming',
        'Seasonal planting and mulching',
        'Irrigation system maintenance',
        'Pest and weed control'
      ]
    },
    {
      key: 'pool',
      icon: Droplets,
      title: 'Pool Maintenance / Technician',
      description: 'Professional pool cleaning and technical support year-round',
      details: [
        'Weekly pool cleaning',
        'Chemical testing and balancing',
        'Equipment inspection and repair',
        'Filter cleaning and replacement',
        'Pool opening and closing services'
      ]
    },
    {
      key: 'property',
      icon: Wrench,
      title: 'Property / Estate Maintenance',
      description: 'Comprehensive property maintenance and repair services',
      details: [
        '24/7 emergency repairs',
        'Preventive maintenance inspections',
        'Plumbing and electrical work',
        'HVAC system maintenance',
        'General handyman services'
      ]
    }
  ];

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title="Option 5: Accordion Expandible"
        description="Diseño compacto con información detallada"
        align="center"
        className="mb-16"
      />
      <div ref={accordionRef} className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {services.map((service) => (
            <AccordionItem
              key={service.key}
              value={service.key}
              className="accordion-item border border-border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline group">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-16 pt-4 pb-2">
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
