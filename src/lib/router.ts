import { useEffect, useState, useCallback } from 'react';

export type Route = '/' | '/services' | '/solutions' | '/about' | '/why-us' | '/contact';

function parseHash(): Route {
  const h = window.location.hash.replace(/^#/, '') || '/';
  const valid: Route[] = ['/', '/services', '/solutions', '/about', '/why-us', '/contact'];
  return (valid.includes(h as Route) ? h : '/') as Route;
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((to: Route) => {
    if (to === parseHash()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = to;
  }, []);

  return { route, navigate };
}

export function navigateTo(to: Route) {
  window.location.hash = to;
}
