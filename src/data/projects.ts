export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  approved: boolean;
}

export interface ProjectDefinition {
  id: string;
  name: string;
  url: string;
  role: 'technology-provider' | 'own-product';
  status: 'business-website' | 'application-in-development';
  summary: string;
  businessNeed: string;
  capabilities: string[];
  scopeNotes: string[];
  serviceIds: string[];
  copyApproved: boolean;
  image: ProjectImage | null;
}

// Owner-confirmed relationships and final project copy. Screenshots are actual
// public sites, captured 2026-10-30 and approved for website use on the same day.
export const projects: ProjectDefinition[] = [
  {
    id: 'bonita-nights',
    name: 'Bonita Nights',
    url: 'https://www.bonitanights.ca/',
    role: 'technology-provider',
    status: 'business-website',
    summary: 'A website for an Ottawa and Gatineau sleepover-rental business, bringing together theme galleries, customer information and a connected booking-request flow.',
    businessNeed: 'Help families explore rental themes, understand the service and request a preferred night.',
    capabilities: ['Theme galleries and service information', 'Setup guidance and answers to common questions', 'A connected booking-request flow'],
    scopeNotes: ['Families submit a booking request for their preferred date and theme. Bonita Nights then confirms availability and the reservation with the customer.'],
    serviceIds: ['website-development', 'business-automation-integrations'],
    copyApproved: true,
    image: {
      src: '/images/projects/bonita-website-preview.jpg',
      alt: 'Bonita Nights website introducing its indoor sleepover rentals.',
      width: 1265,
      height: 712,
      caption: 'Bonita Nights — public website.',
      approved: true,
    },
  },
  {
    id: 'wood-dust-creations',
    name: 'Wood Dust Creations',
    url: 'https://www.wooddustcreations.ca/',
    role: 'technology-provider',
    status: 'business-website',
    summary: 'A woodworking business website combining a product catalogue, Square checkout links, custom-order enquiries, a blog and a portfolio of completed work.',
    businessNeed: 'Help customers browse handmade pieces, purchase through an existing payment provider and discuss custom work.',
    capabilities: ['A product catalogue and portfolio', 'Square-hosted checkout links', 'An entry point for custom-order enquiries', 'A business blog'],
    scopeNotes: ['Customers follow product links to Square-hosted checkout to make a purchase. Custom work starts with an enquiry to discuss the piece and its requirements.'],
    serviceIds: ['website-development', 'business-automation-integrations'],
    copyApproved: true,
    image: {
      src: '/images/projects/wooddust-website-preview.jpg',
      alt: 'Wood Dust Creations website introducing its handmade woodworking.',
      width: 1265,
      height: 712,
      caption: 'Wood Dust Creations — public website.',
      approved: true,
    },
  },
  {
    id: 'turnory',
    name: 'Turnory',
    url: 'https://turnory.racing/',
    role: 'own-product',
    status: 'application-in-development',
    summary: 'Turnory is a Windows sim-racing telemetry application developed by Ternloom Technologies, alongside its product website and launch-notification integration. The application is currently in development.',
    businessNeed: 'Help sim racers understand a specialist software product, explore its capabilities and request a launch notification.',
    capabilities: ['A Windows sim-racing telemetry application in development', 'A product website with interface examples and game-specific information', 'A launch-notification integration'],
    scopeNotes: ['Turnory is Ternloom’s own product, with the application still in development. The product website describes game-specific capabilities and provides a way to request a launch notification.'],
    serviceIds: ['website-development', 'custom-business-software'],
    copyApproved: true,
    image: {
      src: '/images/projects/turnory-website-preview.jpg',
      alt: 'Turnory product website introducing its sim-racing telemetry application.',
      width: 1265,
      height: 712,
      caption: 'Turnory — product website; application in development.',
      approved: true,
    },
  },
];
