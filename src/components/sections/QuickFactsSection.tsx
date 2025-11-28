import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const QuickFactsSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const container = containerRef.current;
    const scrollContent = scrollRef.current;
    
    // Horizontal scroll animation
    const scrollTween = gsap.to(scrollContent, {
      x: () => -(scrollContent.scrollWidth - container.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollContent.scrollWidth - container.offsetWidth}`,
        invalidateOnRefresh: true,
      }
    });

    // Fade in cards on scroll
    const cards = scrollContent.querySelectorAll('.quick-fact-card');
    cards.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 50%",
            scrub: true,
          }
        }
      );

      // Parallax effect on images
      const image = card.querySelector('.quick-fact-image');
      if (image) {
        gsap.to(image, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const quickFacts = [
    { key: 'guests', image: '/images/house-gallery-1.jpg' },
    { key: 'bedrooms', image: '/images/house-gallery-2.jpg' },
    { key: 'pool', image: '/images/house-gallery-3.jpg' },
    { key: 'views', image: '/images/house-hero.jpg' },
    { key: 'concierge', image: '/images/estate-entrance.jpg' },
    { key: 'outdoor', image: '/images/house-gallery-4.jpg' },
  ];

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 z-10 p-8 md:p-12 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          {t('home.quickFacts.label')}
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          {t('home.quickFacts.title')}
        </h2>
      </div>

      <div ref={scrollRef} className="flex items-center h-full gap-8 pl-[10vw]" style={{ width: 'max-content' }}>
        {quickFacts.map((fact) => (
          <div
            key={fact.key}
            className="quick-fact-card group flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] rounded-2xl overflow-hidden shadow-2xl relative cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]"
          >
            {/* Full-bleed image */}
            <img
              src={fact.image}
              alt={t(`home.quickFacts.items.${fact.key}.title`)}
              className="quick-fact-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content positioned at bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white drop-shadow-lg">
                  {t(`home.quickFacts.items.${fact.key}.title`)}
                </h3>
                <p className="text-white/80 text-base leading-relaxed max-w-md">
                  {t(`home.quickFacts.items.${fact.key}.description`)}
                </p>
              </div>
              
              {/* Button that slides up on hover */}
              <div className="mt-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <NavLink to="/estate">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/50">
                    {t('home.quickFacts.cta.button')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] flex items-center justify-center pr-[10vw]">
          <div className="text-center space-y-10 px-8">
            <h3 className="text-3xl md:text-4xl font-serif leading-tight">{t('home.quickFacts.cta.title')}</h3>
            <NavLink to="/estate">
              <Button size="lg" className="group mt-5 bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                {t('home.quickFacts.cta.button')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
