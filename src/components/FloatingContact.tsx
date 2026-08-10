import { useEffect, useState } from 'react';
import { MessageCircle, X, Mail, Phone, Calendar } from 'lucide-react';
import { navigateTo } from '@/lib/router';

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      {open && (
        <div className="flex flex-col gap-2 animate-fade-up">
          <button
            onClick={() => navigateTo('/contact')}
            className="group flex items-center gap-3 rounded-2xl bg-white py-3 pl-4 pr-5 shadow-card-hover ring-1 ring-ink-200 dark:bg-ink-900 dark:ring-ink-700"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              <Calendar className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">Book a consultation</span>
          </button>
          <a
            href="mailto:info@jkapptech.ca"
            className="group flex items-center gap-3 rounded-2xl bg-white py-3 pl-4 pr-5 shadow-card-hover ring-1 ring-ink-200 dark:bg-ink-900 dark:ring-ink-700"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
              <Mail className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">Email us</span>
          </a>
          <a
            href="tel:+18005551234"
            className="group flex items-center gap-3 rounded-2xl bg-white py-3 pl-4 pr-5 shadow-card-hover ring-1 ring-ink-200 dark:bg-ink-900 dark:ring-ink-700"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-warn-500/10 text-warn-600">
              <Phone className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">Call us</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Quick contact"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-500/40 [animation-duration:2.5s]" />
        )}
      </button>
    </div>
  );
}
