import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: string;
  backgroundImage: string;
}

export const HeroSection = ({ title, subtitle, cta, backgroundImage }: HeroSectionProps) => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight mb-6 text-primary-foreground drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-primary-foreground/90 font-light tracking-wide drop-shadow">
          {subtitle}
        </p>
        {cta && (
          <Button size="lg" className="text-lg px-8 py-6">
            {cta}
          </Button>
        )}
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </div>
  );
};
