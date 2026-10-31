import assert from 'node:assert/strict';
import test from 'node:test';
import { getStructuredData, getContactDescription, serializeJsonLd, contentPaths } from '../src/config/seo.ts';
import { site } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';

test('canonical content inventory excludes errors and fixtures', () => {
  assert.deepEqual(contentPaths, ['/', '/services/website-development/', '/services/custom-business-software/', '/services/business-automation-integrations/', '/projects/', '/about/', '/contact/', '/privacy/']);
});

test('structured data contains factual identity and visible service hierarchy only', () => {
  for (const service of services) {
    const breadcrumbs = [{ name: 'Home', path: '/' }, { name: service.name, path: service.path }];
    const graph = getStructuredData({ pathname: service.path, serviceId: service.id, breadcrumbs })['@graph'];
    assert.deepEqual(graph.map((node) => node['@type']), ['Organization', 'WebSite', 'Service', 'BreadcrumbList']);
    assert.equal(graph[0].name, site.name);
    assert.equal(graph[0].email, site.contact.email);
    assert.deepEqual(graph[0].logo, { '@type': 'ImageObject', url: `${site.origin}/brand/ternloom-logo.svg`, width: 512, height: 512 });
    assert.equal(graph[1].publisher['@id'], graph[0]['@id']);
    assert.equal(graph[2].name, service.name);
    assert.equal(graph[2].description, service.lead);
    assert.equal(graph[2].url, new URL(service.path, site.origin).href);
    assert.deepEqual(graph[3].itemListElement.map((item) => [item.name, item.item]), breadcrumbs.map((item) => [item.name, new URL(item.path, site.origin).href]));
    assert.doesNotMatch(JSON.stringify(graph), /"(?:address|aggregateRating|offers|telephone|foundingDate)":/i);
  }
  assert.equal(getStructuredData({ pathname: '/' })['@graph'].length, 2);
  assert.throws(() => getStructuredData({ pathname: '/about/', serviceId: services[0].id }), /service/i);
});

test('unconfirmed contact email is excluded from Organization metadata', () => {
  const confirmed = site.readiness.contactConfirmed;
  try {
    site.readiness.contactConfirmed = false;
    assert.ok(!('email' in getStructuredData({ pathname: '/' })['@graph'][0]));
  } finally {
    site.readiness.contactConfirmed = confirmed;
  }
});

test('contact search descriptions follow confirmed email and available form', () => {
  const changed = { ...site, contact: { email: 'changed@example.test' } };
  assert.match(getContactDescription(changed), /enquiry form or email changed@example\.test/);
  assert.doesNotMatch(getContactDescription(changed), /info@ternloom\.com/);
  const unconfirmed = { ...changed, readiness: { ...site.readiness, contactConfirmed: false } };
  assert.match(getContactDescription(unconfirmed), /Use the enquiry form\./);
  assert.doesNotMatch(getContactDescription(unconfirmed), /changed@example\.test/);
  assert.doesNotMatch(getContactDescription({ ...changed, contactForm: null }), /enquiry form/);
  assert.doesNotMatch(getContactDescription({ ...unconfirmed, contactForm: null }), /enquiry form|example\.test|Use /);
});

test('JSON-LD safely round-trips HTML-sensitive characters and script terminators', () => {
  const value = { text: '</script><script>alert(1)</script>&\u2028\u2029' };
  const result = serializeJsonLd(value);
  assert.doesNotMatch(result, /[<>&\u2028\u2029]/);
  assert.deepEqual(JSON.parse(result), value);
});
