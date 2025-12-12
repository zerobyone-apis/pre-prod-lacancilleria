'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export const NewFigmaContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success(
      t('home.contact.form.success', {
        defaultValue: 'Message sent successfully',
      })
    );
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const inputBase =
    'w-full bg-transparent border-0 border-b border-[#c9c4bd] text-mar placeholder:text-[#b8b2aa] py-3 text-[15px] outline-none focus:border-mar transition';

  return (
    <div className="bg-none rounded-2xl p-6 md:p-10 lg:p-12">
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* ---------------------- ROW 1 ---------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* NAME */}
          <div className="flex items-center gap-4">
            <User className="w-4 h-4 text-[#b8b2aa]" />
            <input
              type="text"
              placeholder={t('home.contact.form.name')}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className={inputBase}
            />
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4 text-[#b8b2aa]" />
            <input
              type="email"
              placeholder={t('home.contact.form.email')}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className={inputBase}
            />
          </div>
        </div>

        {/* ---------------------- PHONE ---------------------- */}
        <div className="flex items-center gap-4">
          <Phone className="w-4 h-4 text-[#b8b2aa]" />
          <input
            type="tel"
            placeholder={`${t('home.contact.form.phone')} (${t(
              'home.contact.form.optional'
            )})`}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={inputBase}
          />
        </div>

        {/* ---------------------- MESSAGE ---------------------- */}
        <div className="flex items-start gap-4">
          <MessageSquare className="w-4 h-4 text-[#b8b2aa] mt-3" />
          <textarea
            placeholder={t('home.contact.form.message')}
            rows={4}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* ---------------------- BUTTON ---------------------- */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              bg-[#243140] text-white px-10 py-3 rounded-md 
              shadow-md hover:bg-[#1c2733] transition flex items-center gap-3
            "
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {t('home.contact.form.submit')}
                <Send className="w-4 h-4 text-[#c39a7e]" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
