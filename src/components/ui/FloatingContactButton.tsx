import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the viewport height (hero section)
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-4 rounded-full',
        'bg-primary text-primary-foreground shadow-lg',
        'hover:bg-primary/90 hover:scale-105',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="Contact us"
    >
      <Mail className="w-5 h-5" />
    </button>
  );
};
