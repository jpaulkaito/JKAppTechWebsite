import { ArrowRight, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/CTASection';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { navigateTo } from '@/lib/router';

const HERO_IMG =
  'https://images.pexels.com/photos/6803523/pexels-photo-6803523.jpeg?auto=compress&cs=tinysrgb&w=1200';
const DASHBOARD_IMG =
  'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1000';

const INDUSTRIES = [
  'Small & Medium Businesses',
  'Retail Companies',
  'Manufacturing',
  'Logistics & Transportation',
  'Service-Based Businesses',
  'Spreadsheet-Heavy Organizations',
];

const HERO_BULLETS = [
  'Power Apps, Power Automate & Power BI',
  'SharePoint, Microsoft 365 & Dataverse',
  'Built for your exact process — not a template',
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-ink-50 to-ink-50 dark:from-brand-950/40 dark:via-ink-950 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/20" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-300/20 blur-3xl dark:bg-accent-700/10" />

        <div className="container-page relative pt-16 pb-24 sm:pt-20 lg:pt-24 lg:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Microsoft Business Applications Specialist
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-ink-900 dark:text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05] text-balance">
                  Transform Your Business with{' '}
                  <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                    Microsoft-Powered Solutions
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  We build custom business applications, automate workflows, and create data-driven
                  solutions that save time and increase efficiency.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <ul className="mt-7 flex flex-col gap-2.5">
                  {HERO_BULLETS.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-ink-700 dark:text-ink-200">
                      <CheckCircle2 className="h-5 w-5 text-accent-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => navigateTo('/contact')} className="btn-primary">
                    Book a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button onClick={() => navigateTo('/services')} className="btn-secondary">
                    Explore Services
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-ink-200/70 dark:ring-ink-800">
                    <img
                      src={HERO_IMG}
                      alt="Business team collaborating on Microsoft-powered solutions"
                      className="h-[340px] w-full object-cover sm:h-[420px]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                  </div>

                  {/* Floating stat card */}
                  <div className="absolute -bottom-6 -left-4 hidden animate-float rounded-2xl bg-white p-4 shadow-card-hover ring-1 ring-ink-200/70 dark:bg-ink-900 dark:ring-ink-700 sm:block">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-display text-xl font-bold text-ink-900 dark:text-white">80%</div>
                        <div className="text-xs text-ink-500 dark:text-ink-400">Less manual work</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Services preview */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
              End-to-end Microsoft business solutions
            </h2>
            <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
              From custom apps to automated workflows and live dashboards — we cover the full
              Microsoft Power Platform and Microsoft 365 stack.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <button
                  onClick={() => navigateTo('/services')}
                  className="card card-hover group flex h-full w-full flex-col p-6 text-left"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-md`}
                  >
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink-900 dark:text-white">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">{s.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-500 dark:text-brand-300">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data-driven banner */}
      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-ink-900 p-8 sm:p-12 lg:grid-cols-2 dark:bg-ink-900">
              <div>
                <span className="eyebrow bg-brand-950 text-brand-300 ring-brand-800">Data-Driven</span>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl text-balance">
                  Turn scattered data into decisions you can trust
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-300">
                  We replace disconnected spreadsheets with structured data, automated workflows, and
                  live dashboards — so every team works from a single source of truth.
                </p>
                <button onClick={() => navigateTo('/solutions')} className="btn-primary mt-7">
                  See the solutions
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={DASHBOARD_IMG}
                  alt="Interactive Power BI dashboard with analytics"
                  className="rounded-2xl ring-1 ring-white/10 shadow-card-hover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solutions preview */}
      <section className="section bg-white dark:bg-ink-950">
        <div className="container-page">
          <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Solutions</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
                Ready-made solutions, tailored to you
              </h2>
              <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
                Battle-tested starting points we customize to your exact process — delivered in weeks,
                not months.
              </p>
            </div>
            <button onClick={() => navigateTo('/solutions')} className="btn-ghost shrink-0">
              View all solutions
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.slice(0, 8).map((sol, i) => (
              <Reveal key={sol.slug} delay={(i % 4) * 80}>
                <button
                  onClick={() => navigateTo('/solutions')}
                  className="card card-hover group flex h-full w-full flex-col p-5 text-left"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950 dark:text-brand-300">
                    <sol.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">{sol.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {sol.blurb}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Who We Serve</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
              Built for businesses ready to move past spreadsheets
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind} delay={(i % 6) * 60}>
                <div className="card card-hover flex h-full items-center justify-center p-5 text-center">
                  <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">{ind}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Brochure CTA */}
      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 dark:bg-brand-950 dark:ring-brand-900 sm:flex-row sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
                  <Download className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                    Download our services brochure
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-300">
                    A one-page overview of our Microsoft solutions and engagement model.
                  </p>
                </div>
              </div>
              <button onClick={() => navigateTo('/contact')} className="btn-primary shrink-0">
                Get the brochure
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
