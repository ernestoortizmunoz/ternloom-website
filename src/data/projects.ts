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
  role: string;
  status: string;
  summary: string;
  businessNeed: string;
  capabilities: string[];
  scopeNotes: string[];
  serviceIds: string[];
  copyApproved: boolean;
  image: ProjectImage | null;
}

// Owner-confirmed relationships; Bonita and Wood Dust summaries still await
// final copy approval. Screenshots are actual public sites, captured 2026-10-30
// and selected for local review only. No image has publication approval.
export const projects: ProjectDefinition[] = [
  {
    id: 'bonita-nights',
    name: 'Bonita Nights',
    url: 'https://www.bonitanights.ca/',
    role: 'Technology provider',
    status: 'Public website',
    summary: 'A website for an Ottawa and Gatineau sleepover-rental business, bringing together theme galleries, customer information and a connected booking-request flow.',
    businessNeed: 'Help families explore rental themes, understand the service and request a preferred night.',
    capabilities: ['Theme galleries and service information', 'Setup guidance and answers to common questions', 'A connected booking-request flow'],
    scopeNotes: ['A booking request is not a confirmed reservation. This project does not establish automated payments, inventory management or guaranteed availability.'],
    serviceIds: ['website-development', 'business-automation-integrations'],
    copyApproved: false,
    image: {
      src: '/images/projects/bonita-website-preview.jpg',
      alt: 'Bonita Nights website introducing its indoor sleepover rentals.',
      width: 1265,
      height: 712,
      caption: 'Bonita Nights — public website.',
      approved: false,
    },
  },
  {
    id: 'wood-dust-creations',
    name: 'Wood Dust Creations',
    url: 'https://www.wooddustcreations.ca/',
    role: 'Technology provider',
    status: 'Public website',
    summary: 'A woodworking business website combining a product catalogue, Square checkout links, custom-order enquiries and a portfolio of completed work.',
    businessNeed: 'Help customers browse handmade pieces, purchase through an existing payment provider and discuss custom work.',
    capabilities: ['A product catalogue and portfolio', 'Square-hosted checkout links', 'An entry point for custom-order enquiries'],
    scopeNotes: ['Checkout takes place through Square. This project does not establish live inventory synchronization or automated fulfilment.'],
    serviceIds: ['website-development', 'business-automation-integrations'],
    copyApproved: false,
    image: {
      src: '/images/projects/wooddust-website-preview.jpg',
      alt: 'Wood Dust Creations website introducing its handmade woodworking.',
      width: 1265,
      height: 712,
      caption: 'Wood Dust Creations — public website.',
      approved: false,
    },
  },
  {
    id: 'turnory',
    name: 'Turnory',
    url: 'https://turnory.racing/',
    role: 'Our own product',
    status: 'application in development',
    summary: 'Turnory is a Windows sim-racing telemetry application developed by Ternloom Technologies, alongside its product website and launch-notification integration. The application is currently in development.',
    businessNeed: 'Help sim racers understand a specialist software product, explore its capabilities and request a launch notification.',
    capabilities: ['A Windows sim-racing telemetry application in development', 'A product website with interface examples and game-specific information', 'A launch-notification integration'],
    scopeNotes: ['Turnory is Ternloom’s own product, not a completed commissioned software engagement. The application is in development; game and feature support have limits.'],
    serviceIds: ['website-development', 'custom-business-software'],
    copyApproved: true,
    image: {
      src: '/images/projects/turnory-website-preview.jpg',
      alt: 'Turnory product website introducing its sim-racing telemetry application.',
      width: 1265,
      height: 712,
      caption: 'Turnory — product website; application in development.',
      approved: false,
    },
  },
];
