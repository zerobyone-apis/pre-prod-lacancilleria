import { useGsapStagger } from '@/hooks/useGsapAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface TimelineItem {
  text: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export const TimelineSection = () => {
  const { t } = useTranslation();
  const containerRef = useGsapStagger('.timeline-item');

  const timelineItems: TimelineItem[] = [
    {
      text: t('timeline.oceanBreezes'),
      image: '/images/house-gallery-1.jpg',
      imagePosition: 'right'
    },
    {
      text: t('timeline.alfrescoLunches'),
      image: '/images/house-gallery-2.jpg',
      imagePosition: 'left'
    },
    {
      text: t('timeline.vibrantScene'),
      image: '/images/nearby-beach.jpg',
      imagePosition: 'right'
    },
    {
      text: t('timeline.laBarraJoseIgnacio'),
      image: '/images/nearby-restaurants.jpg',
      imagePosition: 'left'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-20 md:mb-32">
          {t('timeline.title')}
        </h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-24 md:space-y-32">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="timeline-item relative"
              >
                <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  item.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Text Content */}
                  <div className={`${
                    item.imagePosition === 'right' 
                      ? 'md:text-right md:pr-12' 
                      : 'md:text-left md:pl-12 md:order-2'
                  }`}>
                    <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-foreground/90">
                      {item.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`${
                    item.imagePosition === 'left' ? 'md:order-1' : ''
                  }`}>
                    <div className="relative overflow-hidden rounded-sm group aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.text}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20 md:mt-32">
          <Link to="/location">
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg transition-all duration-500 hover:bg-primary/80 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              {t('timeline.exploreLocation')}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
