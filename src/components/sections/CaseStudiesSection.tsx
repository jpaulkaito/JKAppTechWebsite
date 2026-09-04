import { ArrowRight, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CASE_STUDIES } from '@/data/caseStudies';
import { navigateTo } from '@/lib/router';

export function CaseStudiesSection() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Case Studies</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
              Measurable impact, not just software
            </h2>
            <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
              A few of the transformation scenarios for Canadian businesses.
            </p>
          </div>
          <button onClick={() => navigateTo('/solutions')} className="btn-ghost shrink-0">
            Explore all solutions
            <ArrowRight className="h-4 w-4" />
          </button>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                    {cs.industry}
                  </span>
                  <TrendingUp className="h-5 w-5 text-accent-500" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{cs.client}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  <span className="font-semibold text-ink-700 dark:text-ink-200">Challenge: </span>
                  {cs.challenge}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  <span className="font-semibold text-ink-700 dark:text-ink-200">Solution: </span>
                  {cs.solution}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {cs.results.map((r) => (
                    <div key={r.label} className="rounded-xl bg-brand-50 p-3 text-center dark:bg-brand-950">
                      <div className="font-display text-base font-bold text-brand-700 dark:text-brand-300">
                        {r.value}
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-500 dark:text-ink-400">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ink-100 pt-4 dark:border-ink-800">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-ink-100 px-2 py-0.5 text-[11px] font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
