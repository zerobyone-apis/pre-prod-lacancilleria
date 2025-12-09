'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success(t('home.contact.form.success', { defaultValue: 'Message sent successfully' }));
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const inputClasses = `
    w-full bg-transparent border-0 border-b border-[#C8B8A5]/50 
    px-0 py-3 text-mar placeholder:text-mar/40
    outline-none focus:border-piel transition-all duration-500
  `;

  const labelClasses = (field: string) => `
    absolute left-7 transition-all duration-300 pointer-events-none
    ${
      focusedField === field || formData[field as keyof typeof formData]
        ? 'top-0 text-xs text-piel'
        : 'top-9 text-sm text-mar/60'
    }
  `;

  return (
    <div className="relative">
      {/* Glow exterior suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-piel/10 via-transparent to-piel/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Caja elegante del formulario */}
      <div className="relative bg-white/60 backdrop-blur-xl rounded-[16px] p-10 md:p-14 border border-[#C8B8A5]/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.20)]">
        
        {/* Accentos decorativos en las esquinas */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-piel/30 rounded-tl-[16px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-piel/30 rounded-br-[16px] pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* GRID 2 COLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* NAME */}
            <div className="relative pt-6">
              <label className={labelClasses('name')}>
                {t('home.contact.form.name')}
              </label>
              <div className="flex items-center gap-3">
                <User className={`w-4 h-4 ${focusedField === 'name' ? 'text-piel' : 'text-mar/40'}`} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative pt-6">
              <label className={labelClasses('email')}>
                {t('home.contact.form.email')}
              </label>
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 ${focusedField === 'email' ? 'text-piel' : 'text-mar/40'}`} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="relative pt-6">
            <label className={labelClasses('phone')}>
              {t('home.contact.form.phone')}
              <span className="text-mar/40 ml-1">({t('home.contact.form.optional')})</span>
            </label>
            <div className="flex items-center gap-3">
              <Phone className={`w-4 h-4 ${focusedField === 'phone' ? 'text-piel' : 'text-mar/40'}`} />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses}
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="relative pt-6">
            <label className={labelClasses('message')}>
              {t('home.contact.form.message')}
            </label>
            <div className="flex items-start gap-3">
              <MessageSquare className={`w-4 h-4 mt-3 ${focusedField === 'message' ? 'text-piel' : 'text-mar/40'}`} />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={4}
                required
                className={`${inputClasses} resize-none`}
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="pt-4 flex justify-center md:justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group relative rounded-[8px] px-10 py-4 
                bg-mar border border-[#C8B8A5]/50 text-nieve
                hover:bg-piel/80 hover:shadow-xl hover:-translate-y-1
                transition-all duration-500 shadow-md
              "
            >
              <span className="relative flex items-center gap-3 text-sm tracking-wide uppercase">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-mar/30 border-t-mar rounded-full animate-spin" />
                ) : (
                  <>
                    {t('home.contact.form.submit')}
                    <Send className="w-4 h-4 text-piel group-hover:translate-x-1 group-hover:text-mar/50 transition-all duration-300" />
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
