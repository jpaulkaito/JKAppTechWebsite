import {
  AppWindow,
  Workflow,
  FileStack,
  BarChart3,
  MonitorSmartphone,
  Cog,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string; // tailwind gradient classes
}

export const SERVICES: Service[] = [
  {
    slug: 'power-apps',
    icon: AppWindow,
    title: 'Power Apps Development',
    tagline: 'Custom business applications, built fast',
    description:
      'Tailor-made canvas and model-driven apps that replace spreadsheets and paper forms with modern, mobile-friendly interfaces connected to your data.',
    features: [
      'Custom business applications',
      'Mobile and tablet-friendly solutions',
      'Digital forms and inspections',
      'Asset management systems',
    ],
    accent: 'from-brand-500 to-brand-700',
  },
  {
    slug: 'power-automate',
    icon: Workflow,
    title: 'Power Automate',
    tagline: 'Workflows that run themselves',
    description:
      'Automate repetitive tasks, approvals, and notifications across Microsoft 365 and third-party systems so your team focuses on work that matters.',
    features: [
      'Workflow automation',
      'Approval processes',
      'Notifications and reminders',
      'Integration automation',
    ],
    accent: 'from-accent-500 to-accent-700',
  },
  {
    slug: 'sharepoint',
    icon: FileStack,
    title: 'SharePoint Solutions',
    tagline: 'A single source of truth',
    description:
      'Document management, intranet portals, and collaboration hubs that organize knowledge and keep teams aligned across locations.',
    features: [
      'Document management',
      'Intranet portals',
      'Employee collaboration',
      'Knowledge management',
    ],
    accent: 'from-sky-500 to-brand-700',
  },
  {
    slug: 'power-bi',
    icon: BarChart3,
    title: 'Power BI',
    tagline: 'Decisions backed by real data',
    description:
      'Interactive dashboards and KPI reporting that turn scattered data into clear, actionable insight for every level of your organization.',
    features: [
      'Interactive dashboards',
      'KPI reporting',
      'Executive reporting',
      'Business intelligence analytics',
    ],
    accent: 'from-warn-500 to-amber-700',
  },
  {
    slug: 'microsoft-365',
    icon: MonitorSmartphone,
    title: 'Microsoft 365 Consulting',
    tagline: 'Get more from the platform you own',
    description:
      'Strategic guidance to improve processes, govern your environment, and adopt best practices that maximize your Microsoft 365 investment.',
    features: [
      'Process improvement',
      'Digital transformation',
      'Governance and best practices',
    ],
    accent: 'from-brand-600 to-ink-800',
  },
  {
    slug: 'automation',
    icon: Cog,
    title: 'Business Process Automation',
    tagline: 'End-to-end, hands-off processes',
    description:
      'From manual task elimination to system integrations and data synchronization, we connect your tools into one seamless pipeline.',
    features: [
      'End-to-end automation',
      'Manual task elimination',
      'Data synchronization',
      'System integrations',
    ],
    accent: 'from-accent-600 to-brand-700',
  },
];
