import { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  Clock,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMPTY: FormData = { name: '', company: '', email: '', phone: '', message: '' };

export function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Please tell us about your project.';
    else if (form.message.trim().length < 10) e.message = 'Please add a little more detail (10+ characters).';
    return e;
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm(EMPTY);
    }, 1200);
  };

  const inputCls = (field: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:bg-ink-900 dark:text-ink-100 ${
      (errors as Record<string, string | undefined>)[field]
        ? 'border-err-400 focus:border-err-500'
        : 'border-ink-200 focus:border-brand-500 dark:border-ink-700'
    }`;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-ink-50 dark:from-brand-950/40 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div className="container-page relative py-20 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl text-balance">
              Let's Discuss Your Next Automation Project
            </h1>
            <p className="mt-5 text-lg text-ink-600 dark:text-ink-300">
              Tell us about your process and goals. We'll reply within one business day with a free,
              no-obligation consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <div className="card p-6 sm:p-8 lg:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-ink-900 dark:text-white">Message sent!</h3>
                    <p className="mt-2 max-w-sm text-ink-500 dark:text-ink-400">
                      Thanks for reaching out. A member of our team will reply within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <h2 className="text-xl font-bold text-ink-900 dark:text-white">Send us a message</h2>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                      Fields marked with <span className="text-err-500">*</span> are required.
                    </p>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-ink-800 dark:text-ink-100">
                          Name <span className="text-err-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          placeholder="Jane Doe"
                          className={`mt-2 ${inputCls('name')}`}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-err-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-ink-800 dark:text-ink-100">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          placeholder="Your company"
                          className={`mt-2 ${inputCls('company')}`}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-ink-800 dark:text-ink-100">
                          Email <span className="text-err-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="jane@company.com"
                          className={`mt-2 ${inputCls('email')}`}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-err-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-ink-800 dark:text-ink-100">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className={`mt-2 ${inputCls('phone')}`}
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className="block text-sm font-semibold text-ink-800 dark:text-ink-100">
                        Message <span className="text-err-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Tell us about the process you'd like to automate or improve…"
                        className={`mt-2 ${inputCls('message')} resize-none`}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-err-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary mt-7 w-full sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={120} className="lg:col-span-5">
              <div className="flex h-full flex-col gap-5">
                <div className="card p-6">
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white">Contact details</h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">Email</div>
                        <a href="mailto:info@jkapptech.ca" className="font-medium text-ink-800 link-underline dark:text-ink-100">
                          info@jkapptech.ca
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">Phone</div>
                        <a href="tel:+18005551234" className="font-medium text-ink-800 link-underline dark:text-ink-100">
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-warn-500/10 text-warn-600">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">Location</div>
                        <div className="font-medium text-ink-800 dark:text-ink-100">Toronto, Ontario, Canada</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                        <Linkedin className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">LinkedIn</div>
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-ink-800 link-underline dark:text-ink-100"
                        >
                          linkedin.com/company/jkapptech
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                      <Clock className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-ink-900 dark:text-white">Business hours</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {[
                      { d: 'Monday – Friday', h: '9:00 AM – 6:00 PM ET' },
                      { d: 'Saturday', h: 'By appointment' },
                      { d: 'Sunday', h: 'Closed' },
                    ].map((r) => (
                      <li key={r.d} className="flex items-center justify-between border-b border-ink-100 pb-2 last:border-0 dark:border-ink-800">
                        <span className="font-medium text-ink-700 dark:text-ink-200">{r.d}</span>
                        <span className="text-ink-500 dark:text-ink-400">{r.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
