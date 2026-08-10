import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { navigateTo } from '@/lib/router';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryRoute?: () => void;
}

export function CTASection({
  title = "Let's Discuss Your Next Automation Project",
  subtitle = 'Book a free consultation and discover how much time and money Microsoft automation can save your business.',
  primaryLabel = 'Book a Free Consultation',
  primaryRoute,
}: CTAProps) {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-balance">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
                {subtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={primaryRoute ?? (() => navigateTo('/contact'))}
                  className="btn bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => navigateTo('/contact')}
                  className="btn bg-brand-600/40 text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-brand-600/60"
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
