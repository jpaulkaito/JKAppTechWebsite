export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "JK AppTech automated our purchase approval process end-to-end. What used to take three days of back-and-forth emails now completes in under an hour. The ROI was immediate.",
    name: 'Daniel Reyes',
    role: 'Operations Manager',
    company: 'Northgate Manufacturing',
    initials: 'DR',
  },
  {
    quote:
      "Their Power Apps inspection app replaced our paper checklists completely. Auditors were impressed by the photo evidence and instant reports. We cut inspection time by 60%.",
    name: 'Priya Sharma',
    role: 'Quality Director',
    company: 'Apex Logistics',
    initials: 'PS',
  },
  {
    quote:
      "We ran the entire business on Excel for years. JK AppTech built a custom app and dashboards in weeks. Our team finally trusts the numbers and meetings are half as long.",
    name: 'Marcus Tremblay',
    role: 'Managing Director',
    company: 'Tremblay Retail Group',
    initials: 'MT',
  },
  {
    quote:
      "The onboarding system they built reduced our new-hire setup from two weeks to two days. HR, IT, and managers are all aligned without a single spreadsheet.",
    name: 'Sarah Okafor',
    role: 'HR Manager',
    company: 'Brightpath Services',
    initials: 'SO',
  },
  {
    quote:
      "From scoping to deployment, the team was professional and responsive. Our executive dashboard gives me a live view of KPIs I used to wait a month to see.",
    name: 'James Whitfield',
    role: 'CEO',
    company: 'Whitfield Transportation',
    initials: 'JW',
  },
  {
    quote:
      "They didn't just build software — they understood our process first. The vendor portal eliminated duplicate data entry and gave us real contract visibility for the first time.",
    name: 'Elena Castillo',
    role: 'Procurement Lead',
    company: 'Castillo Distribution',
    initials: 'EC',
  },
];
