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
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast.success(t('contact.form.success', { defaultValue: 'Message sent successfully' }));
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const inputClasses = (field: string) => `
    w-full bg-transparent border-0 border-b border-border/40 
    px-0 py-3 text-foreground placeholder:text-muted-foreground/50
    focus:outline-none focus:ring-0 transition-all duration-500
    ${focusedField === field ? 'border-accent' : 'hover:border-muted-foreground/50'}
  `;

  const labelClasses = (field: string) => `
    absolute left-0 transition-all duration-300 pointer-events-none
    ${focusedField === field || formData[field as keyof typeof formData] 
      ? '-top-5 text-xs text-accent' 
      : 'top-3 text-sm text-muted-foreground/70'}
  `;

  return (
    <div className="relative">
      {/* Elegant container with soft glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-3xl blur-xl" />
      
      <div className="relative bg-card/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-border/30 shadow-2xl shadow-black/5">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-accent/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent/20 rounded-br-3xl" />
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Name Field */}
            <div className="relative group">
              <label className={labelClasses('name')}>
                {t('contact.form.name')}
              </label>
              <div className="flex items-center gap-3">
                <User className={`w-4 h-4 transition-colors duration-300 ${focusedField === 'name' ? 'text-accent' : 'text-muted-foreground/40'}`} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses('name')}
                />
              </div>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className={labelClasses('email')}>
                {t('contact.form.email')}
              </label>
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 transition-colors duration-300 ${focusedField === 'email' ? 'text-accent' : 'text-muted-foreground/40'}`} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses('email')}
                />
              </div>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative group">
            <label className={labelClasses('phone')}>
              {t('contact.form.phone')}
              <span className="text-muted-foreground/40 ml-1">
                ({t('contact.form.optional', { defaultValue: 'optional' })})
              </span>
            </label>
            <div className="flex items-center gap-3">
              <Phone className={`w-4 h-4 transition-colors duration-300 ${focusedField === 'phone' ? 'text-accent' : 'text-muted-foreground/40'}`} />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses('phone')}
              />
            </div>
            <div className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ${focusedField === 'phone' ? 'w-full' : 'w-0'}`} />
          </div>

          {/* Message Field */}
          <div className="relative group">
            <label className={labelClasses('message')}>
              {t('contact.form.message')}
            </label>
            <div className="flex gap-3">
              <MessageSquare className={`w-4 h-4 mt-3 transition-colors duration-300 ${focusedField === 'message' ? 'text-accent' : 'text-muted-foreground/40'}`} />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={4}
                required
                className={`${inputClasses('message')} resize-none`}
              />
            </div>
            <div className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full md:w-auto md:min-w-[200px] overflow-hidden rounded-full px-8 py-4 
                bg-foreground/5 border border-border/50 
                hover:border-accent/50 hover:bg-accent/5
                transition-all duration-500 ease-out
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Hover background effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <span className="relative flex items-center justify-center gap-3 text-sm tracking-wide uppercase">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {t('contact.form.submit', { defaultValue: 'Send Message' })}
                    </span>
                    <Send className="w-4 h-4 text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
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
