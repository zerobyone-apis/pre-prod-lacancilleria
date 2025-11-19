import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight">
              La Cancillería
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              Punta del Este, Uruguay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <Link to="/house">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-auto py-8 text-lg flex flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <span className="font-serif text-2xl">{t('nav.house')}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/location">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-auto py-8 text-lg flex flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <span className="font-serif text-2xl">{t('nav.location')}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/estate">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-auto py-8 text-lg flex flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <span className="font-serif text-2xl">{t('nav.estate')}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
