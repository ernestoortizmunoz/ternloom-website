import { site } from './site.ts';
import { getPublicationState } from './publication.ts';

export interface Breadcrumb { name: string; path: string }
export interface PageMetadataInput { title: string; description: string; pathname: string; noindex?: boolean }

export function getPageMetadata({ title, description, pathname, noindex = false }: PageMetadataInput, releaseRequested = false) {
  const publication = getPublicationState(site, releaseRequested);
  return {
    title,
    description,
    canonical: new URL(pathname, site.origin).href,
    noindex: noindex || publication.noindex,
  };
}
