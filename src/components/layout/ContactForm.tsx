import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.form.submit'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-card rounded-sm p-8 md:p-12 shadow-lg">
      <h3 className="text-3xl font-serif mb-6">{t('contact.title')}</h3>
      <p className="text-muted-foreground mb-8">{t('contact.description')}</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder={t('contact.form.name')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder={t('contact.form.email')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          type="tel"
          placeholder={t('contact.form.phone')}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Textarea
          placeholder={t('contact.form.message')}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          required
        />
        <Button type="submit" className="w-full" size="lg">
          {t('contact.form.submit')}
        </Button>
      </form>
    </div>
  );
};
