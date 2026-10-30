import type { SiteConfig } from './site.ts';
import { projects, type ProjectDefinition } from '../data/projects.ts';

export function getPublicationState(site: SiteConfig, releaseRequested: boolean, projectRecords: readonly ProjectDefinition[] = projects): { noindex: boolean } {
  if (!releaseRequested) return { noindex: true };

  const missing: string[] = [];
  if (!site.contact?.email.trim()) missing.push('contact');
  for (const [gate, approved] of Object.entries(site.readiness)) {
    if (!approved) missing.push(gate);
  }
  for (const project of projectRecords) {
    if (!project.copyApproved) missing.push(`${project.id}.copyApproved`);
    if (project.image && !project.image.approved) missing.push(`${project.id}.image.approved`);
  }
  if (missing.length > 0) {
    throw new Error(`Release blocked: confirm ${missing.join(', ')} before requesting publication.`);
  }
  return { noindex: false };
}
