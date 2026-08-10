import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { TESTIMONIALS } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Client Stories</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
            Trusted by businesses across Canada
          </h2>
          <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
            Real results from real clients who replaced manual work with Microsoft automation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100}>
              <figure className="card card-hover flex h-full flex-col p-6">
                <Quote className="h-8 w-8 text-brand-200 dark:text-brand-800" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4 dark:border-ink-800">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-ink-500 dark:text-ink-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
