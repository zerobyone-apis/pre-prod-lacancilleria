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
    <div className="bg-card rounded-sm p-8 md:p-12 shadow-lg border border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder={t('contact.form.name')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-background"
        />
        <Input
          type="email"
          placeholder={t('contact.form.email')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-background"
        />
        <Input
          type="tel"
          placeholder={t('contact.form.phone')}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="bg-background"
        />
        <Textarea
          placeholder={t('contact.form.message')}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          required
          className="bg-background"
        />
        <Button type="submit" className="w-full" size="lg">
          {t('contact.form.submit')}
        </Button>
      </form>
    </div>
  );
};
