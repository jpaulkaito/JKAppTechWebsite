export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: 'What is Power Apps?',
    a: 'Power Apps is a Microsoft low-code platform for building custom business applications. We use it to create mobile- and tablet-friendly apps that connect directly to your data — replacing spreadsheets, paper forms, and manual processes with modern interfaces your team can use anywhere.',
  },
  {
    q: 'What is Power Automate?',
    a: 'Power Automate is Microsoft’s workflow automation service. It connects your apps and services to automate repetitive tasks — approvals, notifications, data synchronization, and integrations — so work moves forward without manual handoffs.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most targeted solutions (a single app or automation flow) take 2–6 weeks. Broader transformations spanning multiple systems typically run 8–16 weeks. We work in short iterations, so you see working results early and often — not just at the end.',
  },
  {
    q: 'Do you offer support after deployment?',
    a: 'Yes. Every engagement includes a handover period, and we offer ongoing support packages for monitoring, enhancements, and user questions. Many clients keep us on retainer for continuous improvement as their business evolves.',
  },
  {
    q: 'Can existing Excel processes be automated?',
    a: 'Absolutely — this is one of our most common engagements. We analyze your spreadsheets, map the underlying process, then rebuild it as a proper app with automated workflows and dashboards. Your data becomes structured, reliable, and accessible to the right people in real time.',
  },
];
