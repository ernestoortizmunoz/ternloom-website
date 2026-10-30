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
    summary: 'A clear, practical website that explains what your business offers and gives customers a straightforward way to take the next step.',
    problems: [
      'Your business has outgrown a basic page, or needs its first website.',
      'Customers struggle to understand your services, browse your work or find the right enquiry route.',
      'Your current site is awkward to use on a phone, difficult to keep current or disconnected from the tools you already use.',
    ],
    deliverables: [
      'A new business website or a considered redesign, with a structure built around customer questions.',
      'Service pages, project galleries or a product catalogue that make your offer easier to explore.',
      'Responsive layouts, clear navigation and accessible content that works across screen sizes.',
      'Enquiry journeys, booking-request connections or links to an existing checkout provider, where they fit the scope.',
      'Page titles, descriptions and a clear content structure to support search discovery.',
    ],
    scopeNotes: [
      'We agree the pages, content, imagery and connected tools before building. Copywriting, photography and moving existing content are discussed as part of that scope.',
      'Cloud deployment and hosting can support the website, with infrastructure suited to its needs. Provider fees, domains, email and paid tools are separate costs to review.',
      'Ongoing updates, maintenance and support are agreed separately. A website project does not include an assumed support package.',
      'Search foundations help describe your business clearly; they do not guarantee rankings, enquiries or sales.',
    ],
    projectIds: ['bonita-nights', 'wood-dust-creations'],
    questions: [
      {
        question: 'Can you work with an existing website?',
        answer: 'Yes. We start by reviewing what is working, what customers need and how the current site is maintained. That helps determine whether focused changes or a rebuild make sense, and which content and connections need to be carried across.',
      },
      {
        question: 'What should I have ready before we start?',
        answer: 'Bring a description of your business, the main action you want customers to take and a link to any existing site. Logos, photos and draft content are useful, but we can first identify what is available and what still needs to be prepared.',
      },
      {
        question: 'Can the site connect to booking or payment tools?',
        answer: 'Connections can be included when the tools and workflow are understood. A booking-request form or a link to a hosted checkout may be enough; live availability, inventory synchronization and more complex automation need their own scope.',
      },
      {
        question: 'How are cost, timing and future updates agreed?',
        answer: 'The number of pages, content readiness, integrations and review needs shape the estimate and schedule. We agree those details before building, including how future content changes will be handled and whether ongoing support is wanted.',
      },
    ],
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
