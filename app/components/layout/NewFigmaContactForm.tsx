'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const NewFigmaContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      setLoading(true);

      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Error sending email');

      toast.success(
        t('home.contact.form.success', {
          defaultValue: 'Message sent successfully',
        }),
        {
          position: 'bottom-center',
          duration: 3500,
        }
      );

      reset();
    } catch (err) {
      toast.error('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    'w-full bg-transparent border-0 border-b border-[#c9c4bd] text-mar placeholder:text-[#b8b2aa] py-3 text-[15px] outline-none focus:border-mar transition';

  return (
    <div className="bg-none rounded-2xl p-6 md:p-10 lg:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* ---------------------- ROW 1 ---------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* NAME */}
          <div className="flex items-center gap-4">
            <User className="w-4 h-4 text-[#b8b2aa]" />
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder={t('home.contact.form.name')}
              className={inputBase}
            />
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4 text-[#b8b2aa]" />
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder={t('home.contact.form.email')}
              className={inputBase}
            />
          </div>
        </div>

        {/* ---------------------- PHONE ---------------------- */}
        <div className="flex items-center gap-4">
          <Phone className="w-4 h-4 text-[#b8b2aa]" />
          <input
            {...register('phone')}
            type="tel"
            placeholder={`${t('home.contact.form.phone')} (${t(
              'home.contact.form.optional'
            )})`}
            className={inputBase}
          />
        </div>

        {/* ---------------------- MESSAGE ---------------------- */}
        <div className="flex items-start gap-4">
          <MessageSquare className="w-4 h-4 text-[#b8b2aa] mt-3" />
          <textarea
            {...register('message', { required: true })}
            rows={4}
            placeholder={t('home.contact.form.message')}
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* ---------------------- BUTTON ---------------------- */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="
              bg-[#243140] text-white px-10 py-3 rounded-md 
              shadow-md hover:bg-[#1c2733] transition flex items-center gap-3
            "
          >
            {loading ? (
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
