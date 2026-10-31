import { site } from './site.ts';
import { getPublicationState } from './publication.ts';
import { services } from '../data/services.ts';

export const contentPaths = ['/', ...services.map((service) => service.path), '/projects/', '/about/', '/contact/', '/privacy/'];
export const socialImage = { path: '/social-preview.png', width: 1200, height: 630, alt: 'Ternloom Technologies — Built around the way you work.' };
export const organizationLogo = { path: '/brand/ternloom-logo.svg', width: 512, height: 512 };

export interface Breadcrumb { name: string; path: string }
export interface PageMetadataInput { title: string; description: string; pathname: string; noindex?: boolean }

export function getContactDescription(config = site): string {
  const methods = [
    config.contactForm ? 'the enquiry form' : null,
    config.contact && config.readiness.contactConfirmed ? `email ${config.contact.email}` : null,
  ].filter(Boolean);
  return `Contact ${config.name} about a website, custom software or business automation project.${methods.length ? ` Use ${methods.join(' or ')}.` : ''}`;
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, '0')}`);
}

export function getStructuredData({ pathname, breadcrumbs = [], serviceId }: { pathname: string; breadcrumbs?: Breadcrumb[]; serviceId?: string }) {
  const organizationId = `${site.origin}/#organization`;
  const graph: Record<string, unknown>[] = [
    { '@type': 'Organization', '@id': organizationId, name: site.name, url: `${site.origin}/`, logo: { '@type': 'ImageObject', url: `${site.origin}${organizationLogo.path}`, width: organizationLogo.width, height: organizationLogo.height }, ...(site.contact && site.readiness.contactConfirmed ? { email: site.contact.email } : {}) },
    { '@type': 'WebSite', '@id': `${site.origin}/#website`, name: site.name, url: `${site.origin}/`, inLanguage: site.locale, publisher: { '@id': organizationId } },
  ];
  if (serviceId) {
    const service = services.find((item) => item.id === serviceId && item.path === pathname);
    if (!service) throw new Error(`Service schema must match its visible service page: ${serviceId} at ${pathname}`);
    graph.push({ '@type': 'Service', '@id': `${site.origin}${service.path}#service`, name: service.name, description: service.lead, url: `${site.origin}${service.path}`, provider: { '@id': organizationId }, areaServed: site.serviceArea });
  }
  if (breadcrumbs.length > 0) {
    graph.push({ '@type': 'BreadcrumbList', '@id': `${site.origin}${pathname}#breadcrumbs`, itemListElement: breadcrumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: new URL(crumb.path, site.origin).href })) });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function getPageMetadata({ title, description, pathname, noindex = false }: PageMetadataInput, releaseRequested = false) {
  const publication = getPublicationState(site, releaseRequested);
  return {
    title,
    description,
    canonical: new URL(pathname, site.origin).href,
    noindex: noindex || publication.noindex,
  };
}
