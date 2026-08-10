import { useEffect } from 'react';
import { type Route } from '@/lib/router';

const META: Record<Route, { title: string; description: string }> = {
  '/': {
    title: 'JK AppTech Solutions Ltd. — Microsoft-Powered Business Solutions',
    description:
      'We build custom business applications, automate workflows, and create data-driven solutions that save time and increase efficiency.',
  },
  '/services': {
    title: 'Services — JK AppTech Solutions Ltd.',
    description:
      'Power Apps, Power Automate, SharePoint, Power BI, Microsoft 365 consulting, and business process automation.',
  },
  '/solutions': {
    title: 'Solutions — JK AppTech Solutions Ltd.',
    description:
      'Ready-made, customizable Microsoft solutions: onboarding, vendor portals, inspections, inventory, approvals, and more.',
  },
  '/about': {
    title: 'About Us — JK AppTech Solutions Ltd.',
    description:
      'Helping businesses work smarter through Microsoft-powered automation and digital innovation across Canada.',
  },
  '/why-us': {
    title: 'Why Choose Us — JK AppTech Solutions Ltd.',
    description:
      'Custom-tailored solutions, Microsoft expertise, rapid development, scalable architecture, and ongoing support.',
  },
  '/contact': {
    title: 'Contact — JK AppTech Solutions Ltd.',
    description:
      "Let's discuss your next automation project. Book a free consultation with JK AppTech Solutions.",
  },
};

export function useSEO(route: Route) {
  useEffect(() => {
    const m = META[route] ?? META['/'];
    document.title = m.title;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', m.description);
  }, [route]);
}
