export interface ServiceDefinition {
  id: string;
  name: string;
  path: string;
  summary: string;
  problems: string[];
  deliverables: string[];
  scopeNotes: string[];
  projectIds: string[];
  questions: { question: string; answer: string }[];
}

export const services: ServiceDefinition[] = [
  {
    id: 'website-development',
    name: 'Website Development',
    path: '/services/website-development/',
    summary: 'Professional business websites that help customers find and contact a business.',
    problems: [], deliverables: [], scopeNotes: [], projectIds: [], questions: [],
  },
  {
    id: 'custom-business-software',
    name: 'Custom Business Software',
    path: '/services/custom-business-software/',
    summary: "Software built around a business's own workflows.",
    problems: [], deliverables: [], scopeNotes: [], projectIds: [], questions: [],
  },
  {
    id: 'business-automation-integrations',
    name: 'Business Automation & Integrations',
    path: '/services/business-automation-integrations/',
    summary: 'Connected tools and automated workflows that reduce repetitive work.',
    problems: [], deliverables: [], scopeNotes: [], projectIds: [], questions: [],
  },
];
