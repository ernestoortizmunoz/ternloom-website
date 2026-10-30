export interface SiteConfig {
  name: string;
  origin: string;
  locale: string;
  location: string;
  serviceArea: string;
  experienceStatement: string;
  contact: { email: string } | null;
  readiness: {
    contactConfirmed: boolean;
    projectCopyApproved: boolean;
    projectAssetsApproved: boolean;
  };
}

export const site: SiteConfig = {
  name: 'Ternloom Technologies',
  origin: 'https://ternloom.com',
  locale: 'en-CA',
  location: 'Ottawa, Ontario, Canada',
  serviceArea: 'Canada',
  experienceStatement: 'Built on more than 15 years of experience in IT and software development.',
  contact: null,
  readiness: {
    contactConfirmed: false,
    projectCopyApproved: false,
    projectAssetsApproved: false,
  },
};
