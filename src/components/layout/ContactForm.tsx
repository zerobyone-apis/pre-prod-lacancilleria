import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast.success(t('contact.form.success', { defaultValue: 'Message sent successfully' }));
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-border/50 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              {t('contact.form.name')}
            </label>
            <Input
              placeholder={t('contact.form.namePlaceholder', { defaultValue: 'Your name' })}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/80 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              {t('contact.form.email')}
            </label>
            <Input
              type="email"
              placeholder={t('contact.form.emailPlaceholder', { defaultValue: 'your@email.com' })}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/80 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            {t('contact.form.phone')}
            <span className="text-muted-foreground/60 ml-1 normal-case">
              ({t('contact.form.optional', { defaultValue: 'optional' })})
            </span>
          </label>
          <Input
            type="tel"
            placeholder={t('contact.form.phonePlaceholder', { defaultValue: '+1 (555) 000-0000' })}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-background/80 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            {t('contact.form.message')}
          </label>
          <Textarea
            placeholder={t('contact.form.messagePlaceholder', { defaultValue: 'Tell us about your inquiry...' })}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            required
            className="bg-background/80 border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-foreground/90 hover:bg-foreground text-background border-0 transition-all duration-300 group"
          size="lg"
        >
          <span className="flex items-center justify-center gap-2">
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
            ) : (
              <>
                {t('contact.form.submit', { defaultValue: 'Send Message' })}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
        </Button>
      </form>
    </div>
  );
};
