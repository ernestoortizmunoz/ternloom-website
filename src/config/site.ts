export interface SiteConfig {
  name: string;
  origin: string;
  locale: string;
  location: string;
  serviceArea: string;
  experienceStatement: string;
  contact: { email: string } | null;
  contactForm: { tallyId: string } | null;
  privacy: { enquiryRetentionMonths: number | null };
  readiness: {
    contactConfirmed: boolean;
    contactFormReady: boolean;
    privacyNoticeApproved: boolean;
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
  contact: { email: 'info@ternloom.com' },
  contactForm: { tallyId: 'dbEbrd' },
  privacy: { enquiryRetentionMonths: 12 },
  readiness: {
    contactConfirmed: true,
    contactFormReady: false,
    privacyNoticeApproved: true,
    projectCopyApproved: false,
    projectAssetsApproved: false,
  },
};
