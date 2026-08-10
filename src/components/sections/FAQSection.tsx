import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FAQS } from '@/data/faqs';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-white dark:bg-ink-950">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
              Questions, answered
            </h2>
            <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
              Everything you need to know about working with us and the Microsoft platform.
              Still curious? We're a message away.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 60}>
                    <div
                      className={`card overflow-hidden transition-colors ${
                        isOpen ? 'ring-brand-300/60 dark:ring-brand-700/60' : ''
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-semibold text-ink-900 dark:text-white">{f.q}</span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                            isOpen
                              ? 'bg-brand-600 text-white'
                              : 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300'
                          }`}
                        >
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
