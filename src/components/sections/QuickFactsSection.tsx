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
    cards.forEach((card, index) => {
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
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const quickFacts = [
    { key: 'guests', icon: '🛏️' },
    { key: 'bedrooms', icon: '🚿' },
    { key: 'pool', icon: '🏊' },
    { key: 'views', icon: '🌊' },
    { key: 'concierge', icon: '🤵' },
    { key: 'outdoor', icon: '🍖' },
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
        {quickFacts.map((fact, index) => (
          <div
            key={fact.key}
            className="quick-fact-card flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center bg-muted text-8xl">
                {fact.icon}
              </div>
              <div className="p-8 bg-card">
                <h3 className="text-2xl font-serif mb-2">
                  {t(`home.quickFacts.items.${fact.key}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`home.quickFacts.items.${fact.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] flex items-center justify-center pr-[10vw]">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-serif">{t('home.quickFacts.cta.title')}</h3>
            <NavLink to="/estate">
              <Button size="lg" className="group">
                {t('home.quickFacts.cta.button')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
