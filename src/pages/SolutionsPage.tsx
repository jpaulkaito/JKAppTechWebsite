import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { SOLUTIONS } from '@/data/solutions';
import { navigateTo } from '@/lib/router';

export function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-ink-50 dark:from-brand-950/40 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div className="container-page relative py-20 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Solutions</span>
            <h1 className="mt-5 text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl text-balance">
              Pre-built solutions, customized to your business
            </h1>
            <p className="mt-5 text-lg text-ink-600 dark:text-ink-300">
              Each solution is a proven starting point we tailor to your process, data, and team —
              so you get working software in weeks, not months.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((sol, i) => (
              <Reveal key={sol.slug} delay={(i % 3) * 80}>
                <article className="card card-hover group flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-md transition-transform group-hover:scale-105">
                      <sol.icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                      {sol.industry}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-900 dark:text-white">{sol.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{sol.blurb}</p>
                  <ul className="mt-4 space-y-2">
                    {sol.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-300">
                        <Check className="h-4 w-4 text-accent-500" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigateTo('/contact')}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-500 dark:text-brand-300"
                  >
                    Request a demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      <CTASection
        title="See a solution tailored to your process"
        subtitle="Tell us about your workflow and we'll show you exactly how we'd customize one of these solutions for your business."
      />
    </>
  );
}
