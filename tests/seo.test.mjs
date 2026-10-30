import assert from 'node:assert/strict';
import test from 'node:test';
import { getStructuredData, serializeJsonLd, contentPaths } from '../src/config/seo.ts';
import { site } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';

test('canonical content inventory excludes errors and fixtures', () => {
  assert.deepEqual(contentPaths, ['/', '/services/website-development/', '/services/custom-business-software/', '/services/business-automation-integrations/', '/projects/', '/about/', '/contact/']);
});

test('structured data contains factual identity and visible service hierarchy only', () => {
  for (const service of services) {
    const breadcrumbs = [{ name: 'Home', path: '/' }, { name: service.name, path: service.path }];
    const graph = getStructuredData({ pathname: service.path, serviceId: service.id, breadcrumbs })['@graph'];
    assert.deepEqual(graph.map((node) => node['@type']), ['Organization', 'WebSite', 'Service', 'BreadcrumbList']);
    assert.equal(graph[0].name, site.name);
    assert.equal(graph[1].publisher['@id'], graph[0]['@id']);
    assert.equal(graph[2].name, service.name);
    assert.equal(graph[2].description, service.summary);
    assert.equal(graph[2].url, new URL(service.path, site.origin).href);
    assert.deepEqual(graph[3].itemListElement.map((item) => [item.name, item.item]), breadcrumbs.map((item) => [item.name, new URL(item.path, site.origin).href]));
    assert.doesNotMatch(JSON.stringify(graph), /"(?:email|address|aggregateRating|offers|telephone|foundingDate)":/i);
  }
  assert.equal(getStructuredData({ pathname: '/' })['@graph'].length, 2);
  assert.throws(() => getStructuredData({ pathname: '/about/', serviceId: services[0].id }), /service/i);
});

test('JSON-LD safely round-trips HTML-sensitive characters and script terminators', () => {
  const value = { text: '</script><script>alert(1)</script>&\u2028\u2029' };
  const result = serializeJsonLd(value);
  assert.doesNotMatch(result, /[<>&\u2028\u2029]/);
  assert.deepEqual(JSON.parse(result), value);
});
