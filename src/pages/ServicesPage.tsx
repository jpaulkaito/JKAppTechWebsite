import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { SERVICES } from '@/data/services';
import { navigateTo } from '@/lib/router';

export function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-ink-50 dark:from-brand-950/40 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div className="container-page relative py-20 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our Services</span>
            <h1 className="mt-5 text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl text-balance">
              Microsoft solutions for every part of your business
            </h1>
            <p className="mt-5 text-lg text-ink-600 dark:text-ink-300">
              We specialize in the full Microsoft Power Platform and Microsoft 365 stack — building
              apps, automating workflows, and surfacing the data that drives better decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services detail */}
      <section className="section pt-0">
        <div className="container-page">
          <div className="space-y-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <article className="card card-hover overflow-hidden p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-5">
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-md`}
                      >
                        <s.icon className="h-7 w-7" />
                      </span>
                      <h2 className="mt-5 text-2xl font-bold text-ink-900 dark:text-white">{s.title}</h2>
                      <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                        {s.tagline}
                      </p>
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
                        {s.description}
                      </p>
                      <button onClick={() => navigateTo('/contact')} className="btn-primary mt-6">
                        Discuss this service
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {s.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-start gap-3 rounded-xl bg-ink-50 p-4 ring-1 ring-ink-100 dark:bg-ink-800/50 dark:ring-ink-800"
                          >
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-sm font-medium text-ink-800 dark:text-ink-100">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Book a free consultation and we'll map the right Microsoft solutions to your exact business goals."
      />
    </>
  );
}
