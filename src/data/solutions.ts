import {
  UserPlus,
  Store,
  ClipboardCheck,
  Boxes,
  Wrench,
  ShieldCheck,
  CheckSquare,
  LayoutDashboard,
  ShoppingCart,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export interface Solution {
  slug: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  industry: string;
  outcomes: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'employee-onboarding',
    icon: UserPlus,
    title: 'Employee Onboarding System',
    blurb: 'A guided, automated onboarding flow that gets new hires productive from day one.',
    industry: 'All industries',
    outcomes: ['Automated task assignments', 'Digital document collection', 'IT provisioning triggers'],
  },
  {
    slug: 'vendor-management',
    icon: Store,
    title: 'Vendor Management Portal',
    blurb: 'Centralize vendor profiles, contracts, performance, and renewals in one portal.',
    industry: 'Retail · Manufacturing',
    outcomes: ['Vendor self-service portal', 'Contract tracking', 'Performance scoring'],
  },
  {
    slug: 'inspection-audit',
    icon: ClipboardCheck,
    title: 'Inspection & Audit App',
    blurb: 'Mobile inspections and audits with photo evidence, scoring, and instant reporting.',
    industry: 'Manufacturing · Logistics',
    outcomes: ['Offline mobile capture', 'Photo & signature evidence', 'Auto-generated reports'],
  },
  {
    slug: 'inventory-tracking',
    icon: Boxes,
    title: 'Inventory Tracking System',
    blurb: 'Real-time stock visibility across warehouses with barcode scanning and alerts.',
    industry: 'Retail · Logistics',
    outcomes: ['Barcode scanning', 'Low-stock alerts', 'Multi-location visibility'],
  },
  {
    slug: 'asset-management',
    icon: Wrench,
    title: 'Asset Management Solution',
    blurb: 'Track asset lifecycles, assignments, maintenance, and depreciation in one place.',
    industry: 'All industries',
    outcomes: ['QR asset tagging', 'Assignment tracking', 'Depreciation schedules'],
  },
  {
    slug: 'maintenance-requests',
    icon: ShieldCheck,
    title: 'Maintenance Request System',
    blurb: 'Submit, triage, and resolve maintenance requests with full audit history.',
    industry: 'Manufacturing · Facilities',
    outcomes: ['Request portal', 'SLA tracking', 'Technician dispatch'],
  },
  {
    slug: 'approval-management',
    icon: CheckSquare,
    title: 'Approval Management App',
    blurb: 'Multi-stage approvals for purchases, leave, and expenses — on any device.',
    industry: 'All industries',
    outcomes: ['Multi-stage workflows', 'Mobile approvals', 'Audit trail'],
  },
  {
    slug: 'executive-dashboards',
    icon: LayoutDashboard,
    title: 'Executive Dashboards',
    blurb: 'Live KPI dashboards that give leadership a clear, real-time view of the business.',
    industry: 'All industries',
    outcomes: ['Real-time KPIs', 'Drill-down analytics', 'Scheduled reports'],
  },
  {
    slug: 'purchase-request',
    icon: ShoppingCart,
    title: 'Purchase Request Solution',
    blurb: 'Streamlined purchase requests with budget checks, approvals, and ERP sync.',
    industry: 'Retail · Manufacturing',
    outcomes: ['Budget validation', 'Approval routing', 'ERP integration'],
  },
  {
    slug: 'site-operations',
    icon: Building2,
    title: 'Site Operations Management',
    blurb: 'Coordinate daily site operations, checklists, and reporting from one app.',
    industry: 'Logistics · Service',
    outcomes: ['Daily checklists', 'Shift handover', 'Incident logging'],
  },
];
