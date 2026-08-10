import { ArrowRight, type LucideIcon } from 'lucide-react';
import {
  Wrench,
  Award,
  Zap,
  Layers,
  PiggyBank,
  LifeBuoy,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { navigateTo } from '@/lib/router';

interface Reason {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const REASONS: Reason[] = [
  {
    icon: Wrench,
    title: 'Custom-Tailored Solutions',
    desc: 'We build to your exact process — not a generic template. Your app fits how your team actually works.',
  },
  {
    icon: Award,
    title: 'Microsoft Platform Expertise',
    desc: 'Deep, hands-on knowledge of Power Platform, Microsoft 365, SharePoint, and Dataverse, applied to real business problems.',
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    desc: 'Working software in weeks, delivered in short iterations so you see value early and often.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'Solutions designed to grow with your business — from one team to many locations without rebuilding.',
  },
  {
    icon: PiggyBank,
    title: 'Affordable Implementation',
    desc: 'Enterprise-grade outcomes without enterprise overhead. Clear scope, predictable pricing, real ROI.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    desc: 'We don\'t disappear after go-live. Support, monitoring, and continuous improvement keep your solution sharp.',
  },
];

export function WhyUsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-ink-50 dark:from-brand-950/40 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div className="container-page relative py-20 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h1 className="mt-5 text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl text-balance">
              A partner who delivers, not just a vendor who builds
            </h1>
            <p className="mt-5 text-lg text-ink-600 dark:text-ink-300">
              We combine Microsoft expertise with real business process knowledge — so you get
              solutions that actually move the needle, not just software that exists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 100}>
                <div className="card card-hover group h-full p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-md transition-transform group-hover:scale-105">
                    <r.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink-900 dark:text-white">{r.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="section bg-white dark:bg-ink-950">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
              A clear path from problem to deployed solution
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discover', desc: 'We map your process, pain points, and goals.' },
              { step: '02', title: 'Design', desc: 'A tailored solution blueprint and prototype.' },
              { step: '03', title: 'Build', desc: 'Iterative development with working software early.' },
              { step: '04', title: 'Deploy & Support', desc: 'Go-live, training, and ongoing improvement.' },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative h-full rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 dark:bg-ink-900 dark:ring-ink-800">
                  <span className="font-display text-4xl font-bold text-brand-200 dark:text-brand-800">
                    {p.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <button onClick={() => navigateTo('/contact')} className="btn-primary">
              Start with a free consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
