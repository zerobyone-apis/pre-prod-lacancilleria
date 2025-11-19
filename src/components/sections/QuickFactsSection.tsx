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
            className="quick-fact-card group flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-full flex flex-col">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={fact.image}
                  alt={t(`home.quickFacts.items.${fact.key}.title`)}
                  className="quick-fact-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-2xl font-serif mb-3 text-foreground">
                  {t(`home.quickFacts.items.${fact.key}.title`)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(`home.quickFacts.items.${fact.key}.description`)}
                </p>
                
                {/* Button that slides up from bottom */}
                <div className="translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <NavLink to="/estate">
                    <Button size="lg" className="w-full bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm shadow-lg">
                      {t('home.quickFacts.cta.button')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] flex items-center justify-center pr-[10vw]">
          <div className="text-center space-y-10 px-8">
            <h3 className="text-3xl md:text-4xl font-serif leading-tight">{t('home.quickFacts.cta.title')}</h3>
            <NavLink to="/estate">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
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
