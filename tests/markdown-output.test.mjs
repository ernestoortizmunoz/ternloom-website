import assert from 'node:assert/strict';
import test from 'node:test';
import { toAgentMarkdown } from '../scripts/markdown-output.mjs';

test('build conversion preserves main facts, metadata, lists, absolute links and JSON-LD', () => {
  const html = `<html><head><title>Tools &amp; work</title><meta name="description" content="A &quot;clear&quot; description"><script type="application/ld+json">{"@type":"Organization","name":"Ternloom"}</script></head><body><header>Site navigation</header><main><nav>Breadcrumb</nav><header><h1>Business tools</h1><p>Important introduction</p></header><p>Keep <strong>human review</strong>. <a href="/contact/">Contact</a></p><ul><li>First task</li><li>Second task</li></ul><img src="/example.webp" alt="Actual project"><svg><text>Decorative art</text></svg><iframe src="https://tally.so/"></iframe><script>alert(1)</script></main><footer>Footer navigation</footer></body></html>`;
  const md = toAgentMarkdown(html, 'https://ternloom.com/about/');
  assert.match(md, /title: "Tools & work"/);
  assert.match(md, /# Business tools/);
  assert.match(md, /Important introduction/);
  assert.match(md, /\*\*human review\*\*/);
  assert.match(md, /\[Contact\]\(https:\/\/ternloom.com\/contact\/\)/);
  assert.match(md, /-\s+First task/);
  assert.match(md, /!\[Actual project\]\(https:\/\/ternloom.com\/example.webp\)/);
  assert.match(md, /```json\n/);
  assert.doesNotMatch(md, /Site navigation|Footer navigation|Breadcrumb|Decorative art|alert\(1\)|<iframe|<script|<svg/);
  assert.throws(() => toAgentMarkdown('<p>No main content</p>', 'https://ternloom.com/'), /main/i);
});
