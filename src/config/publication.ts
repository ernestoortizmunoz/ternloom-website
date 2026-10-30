import type { SiteConfig } from './site.ts';

export function getPublicationState(site: SiteConfig, releaseRequested: boolean): { noindex: boolean } {
  if (!releaseRequested) return { noindex: true };

  const missing: string[] = [];
  if (!site.contact?.email.trim()) missing.push('contact');
  for (const [gate, approved] of Object.entries(site.readiness)) {
    if (!approved) missing.push(gate);
  }
  if (missing.length > 0) {
    throw new Error(`Release blocked: confirm ${missing.join(', ')} before requesting publication.`);
  }
  return { noindex: false };
}
