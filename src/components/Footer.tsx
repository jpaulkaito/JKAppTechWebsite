import { Mail, Phone, Clock, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { type Route, navigateTo } from '@/lib/router';

const LINKS: { label: string; route: Route }[] = [
  { label: 'Home', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Solutions', route: '/solutions' },
  { label: 'About Us', route: '/about' },
  { label: 'Why Choose Us', route: '/why-us' },
  { label: 'Contact', route: '/contact' },
];

const SERVICES = [
  'Power Apps Development',
  'Power Automate',
  'SharePoint Solutions',
  'Power BI',
  'Microsoft 365 Consulting',
  'Business Process Automation',
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-ink-200/70 bg-white dark:border-ink-800 dark:bg-ink-950">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 font-display font-bold text-white">
                JK
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold text-ink-900 dark:text-white">
                  JK AppTech Solutions
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Solutions Ltd.
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Helping businesses work smarter through Microsoft-powered automation, custom applications,
              and data-driven solutions across Canada.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink-100 px-4 py-2.5 text-sm font-semibold text-ink-700 ring-1 ring-inset ring-ink-200 transition-colors hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-200 dark:ring-ink-700 dark:hover:bg-ink-700"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4 opacity-60" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Pages</h4>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.route}>
                  <button
                    onClick={() => navigateTo(l.route)}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => navigateTo('/services')}
                    className="text-left text-sm text-ink-600 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-600 dark:text-ink-300">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-600 dark:text-brand-400" />
                <a href="mailto:info@jkapptech.ca" className="link-underline">info@jkapptech.ca</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand-600 dark:text-brand-400" />
                <a href="tel:+18005551234" className="link-underline">+1 (800) 555-1234</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-600 dark:text-brand-400" />
                <span>Toronto, Ontario, Canada</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-brand-600 dark:text-brand-400" />
                <span>Mon – Fri, 9:00 AM – 6:00 PM ET</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-200/70 pt-6 text-xs text-ink-400 dark:border-ink-800 sm:flex-row">
          <p>© {new Date().getFullYear()} JK AppTech Solutions Ltd. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span className="link-underline cursor-pointer">Privacy Policy</span>
            <span className="link-underline cursor-pointer">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
