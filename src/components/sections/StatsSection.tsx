import { TrendingDown, Zap, Eye, TrendingUp, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
}

const STATS: Stat[] = [
  { icon: TrendingDown, value: '80%', label: 'Less Manual Work', sub: 'Automate repetitive tasks and free your team for higher-value work.' },
  { icon: Zap, value: '5×', label: 'Faster Processes', sub: 'Workflows that once took days now complete in hours or minutes.' },
  { icon: Eye, value: '360°', label: 'Data Visibility', sub: 'Live dashboards give every role a clear, real-time view of the business.' },
  { icon: TrendingUp, value: '40%', label: 'Higher Productivity', sub: 'Teams accomplish more with the same headcount and fewer errors.' },
];

export function StatsSection() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-ink-900 dark:text-white">{s.value}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900 dark:text-white">{s.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
