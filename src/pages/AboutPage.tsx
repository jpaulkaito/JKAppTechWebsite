import { Target, Eye, Heart, Shield, Sparkles, Handshake, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { navigateTo } from '@/lib/router';

const ABOUT_IMG =
  'https://images.pexels.com/photos/7792836/pexels-photo-7792836.jpeg?auto=compress&cs=tinysrgb&w=1000';
const BUILDING_IMG =
  'https://images.pexels.com/photos/14527417/pexels-photo-14527417.jpeg?auto=compress&cs=tinysrgb&w=1000';

const VALUES = [
  { icon: Sparkles, title: 'Innovation', desc: 'We apply the latest Microsoft capabilities to solve old business problems in new ways.' },
  { icon: Shield, title: 'Integrity', desc: 'Clear scope, honest timelines, and recommendations that serve your business — not our bill.' },
  { icon: Heart, title: 'Reliability', desc: 'Solutions built to last, with support that keeps them running long after go-live.' },
  { icon: Handshake, title: 'Customer Success', desc: 'Your outcome is the deliverable. We measure success by the value you realize, not the code we ship.' },
];

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-ink-50 dark:from-brand-950/40 dark:to-ink-950" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div className="container-page relative py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">About Us</span>
              <h1 className="mt-5 text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl text-balance">
                Helping Businesses Work Smarter
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                JK AppTech Solutions Ltd. is focused on helping organizations unlock the full
                potential of Microsoft's platform. We combine technical expertise with business
                process knowledge to deliver practical, scalable, and cost-effective solutions.
              </p>
              <button onClick={() => navigateTo('/contact')} className="btn-primary mt-8">
                Work with us
                <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
                <img
                  src={ABOUT_IMG}
                  alt="JK AppTech team collaborating in the office"
                  className="relative h-[380px] w-full rounded-3xl object-cover shadow-card-hover ring-1 ring-ink-200/70 dark:ring-ink-800"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                  <Target className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink-900 dark:text-white">Our Mission</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  Enable businesses to work smarter through automation and digital innovation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-50 text-accent-700 dark:bg-accent-900 dark:text-accent-300">
                  <Eye className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink-900 dark:text-white">Our Vision</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  Become a trusted digital transformation partner for organizations across Canada.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white dark:bg-ink-950">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl text-balance">
              What we stand for
            </h2>
            <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
              The principles that guide every engagement, every decision, and every line of code.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink-900 dark:text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Canada banner */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-ink-950 p-8 sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-25" />
              <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
                    Proudly serving Canadian businesses
                  </h2>
                  <p className="mt-4 text-lg text-brand-100">
                    From Toronto to coast to coast, we help organizations of every size modernize
                    with Microsoft technologies — without the enterprise price tag.
                  </p>
                </div>
                <img
                  src={BUILDING_IMG}
                  alt="Modern Canadian office building"
                  className="h-48 w-full max-w-sm rounded-2xl object-cover ring-1 ring-white/10"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
