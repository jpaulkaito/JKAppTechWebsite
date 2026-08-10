export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  stack: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'northgate-manufacturing',
    client: 'Northgate Manufacturing',
    industry: 'Manufacturing',
    challenge:
      'Purchase approvals moved through email and spreadsheets, taking up to three days and frequently getting lost in inboxes.',
    solution:
      'A Power Apps request form with multi-stage Power Automate approvals, budget validation against Dataverse, and automatic ERP sync on approval.',
    results: [
      { label: 'Faster approvals', value: '3 days → 1 hr' },
      { label: 'Manual effort cut', value: '85%' },
      { label: 'Approval errors', value: 'Eliminated' },
    ],
    stack: ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI'],
  },
  {
    slug: 'apex-logistics',
    client: 'Apex Logistics',
    industry: 'Logistics & Transportation',
    challenge:
      'Site inspections were paper-based, with photo evidence stored on personal phones and reports compiled manually days later.',
    solution:
      'A mobile inspection app with offline capture, photo and signature evidence, automated scoring, and instant PDF reports emailed to stakeholders.',
    results: [
      { label: 'Inspection time', value: '−60%' },
      { label: 'Report turnaround', value: '3 days → instant' },
      { label: 'Audit pass rate', value: '+22%' },
    ],
    stack: ['Power Apps', 'Power Automate', 'SharePoint'],
  },
  {
    slug: 'tremblay-retail',
    client: 'Tremblay Retail Group',
    industry: 'Retail',
    challenge:
      'The entire operation ran on a web of Excel workbooks. Numbers conflicted between departments and leadership had no reliable view of performance.',
    solution:
      'A custom Dataverse-backed operations app with Power BI executive dashboards, replacing 14 separate spreadsheets with one source of truth.',
    results: [
      { label: 'Spreadsheets replaced', value: '14 → 1 app' },
      { label: 'Reporting time', value: '−75%' },
      { label: 'Data accuracy', value: 'Near 100%' },
    ],
    stack: ['Power Apps', 'Dataverse', 'Power BI', 'Microsoft 365'],
  },
];
