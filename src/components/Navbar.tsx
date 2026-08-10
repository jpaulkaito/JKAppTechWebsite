import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { type Route, navigateTo } from '@/lib/router';

const NAV_ITEMS: { label: string; route: Route }[] = [
  { label: 'Home', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Solutions', route: '/solutions' },
  { label: 'About', route: '/about' },
  { label: 'Why Us', route: '/why-us' },
  { label: 'Contact', route: '/contact' },
];

export function Navbar({ current }: { current: Route }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (r: Route) => {
    setOpen(false);
    navigateTo(r);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-ink-950/85 backdrop-blur-xl ring-1 ring-ink-200/70 dark:ring-ink-800/70 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 lg:h-18">
        <button onClick={() => go('/')} className="flex items-center gap-2.5 group" aria-label="JK AppTech Solutions home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white font-display font-bold shadow-glow transition-transform group-hover:scale-105">
            JK
          </span>
          {/* <img src="/logo.png"
            alt="JK AppTech Solutions Ltd."
            className="h-12 w-auto transition-transform group-hover:scale-105"
          /> */}
          <span className="hidden sm:flex flex-col leading-none text-left">
            <span className="font-display text-sm font-bold tracking-tight text-ink-900 dark:text-white">
              JK AppTech
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400 dark:text-ink-400">
              Solutions Ltd.
            </span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = current === item.route;
            return (
              <button
                key={item.route}
                onClick={() => go(item.route)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-brand-700 dark:text-brand-300'
                    : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-600 dark:bg-brand-400" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-xl text-ink-600 ring-1 ring-inset ring-ink-200 transition-colors hover:bg-ink-100 dark:text-ink-300 dark:ring-ink-700 dark:hover:bg-ink-800"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => go('/contact')} className="hidden sm:inline-flex btn-primary">
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl text-ink-700 ring-1 ring-inset ring-ink-200 dark:text-ink-200 dark:ring-ink-700"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pb-5 pt-2">
          <div className="card p-2">
            {NAV_ITEMS.map((item) => {
              const active = current === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => go(item.route)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </button>
              );
            })}
            <button onClick={() => go('/contact')} className="btn-primary mt-2 w-full">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
