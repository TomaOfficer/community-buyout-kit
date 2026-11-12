import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import MarkdownIt from 'markdown-it';
import { parse } from 'yaml';

const markdown = new MarkdownIt({ html: true });
const root = process.cwd();

function checkLink(file, href) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) return;

  const [path, fragment] = href.split('#', 2);
  const pathname = decodeURIComponent(path.split('?')[0]);
  const target = pathname ? resolve(dirname(file), pathname) : resolve(file);
  const label = `${file} → ${href}`;
  assert.ok(!relative(root, target).startsWith('..'), `Link escapes the repository: ${label}`);
  assert.ok(existsSync(target), `Local link does not exist: ${label}`);

  if (fragment && target.endsWith('.md') && statSync(target).isFile()) {
    const headings = markdown.parse(readFileSync(target, 'utf8'), {})
      .filter((token, index, tokens) => tokens[index - 1]?.type === 'heading_open')
      .map(token => token.content.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/ /g, '-'));
    assert.ok(headings.includes(decodeURIComponent(fragment)), `Heading does not exist: ${label}`);
  }
}

function checkLinks(file, content) {
  function checkTokens(tokens) {
    for (const token of tokens) {
      const href = token.attrGet('href') ?? token.attrGet('src');
      if (href !== null) checkLink(file, href);
      if (token.type === 'html_block' || token.type === 'html_inline') {
        for (const [, destination] of token.content.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
          checkLink(file, destination);
        }
      }
      if (token.children) checkTokens(token.children);
    }
  }

  checkTokens(markdown.parse(content, {}));
}

checkLinks('README.md', readFileSync('README.md', 'utf8'));

const skills = readdirSync('skills', { withFileTypes: true }).filter(entry => entry.isDirectory());
assert.ok(skills.length > 0, 'No skills found');
for (const { name: directory } of skills) {
  const file = join('skills', directory, 'SKILL.md');
  const content = readFileSync(file, 'utf8');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(content);
  assert.ok(frontmatter, `${file} needs YAML frontmatter`);
  const metadata = parse(frontmatter[1]);
  const { name, description } = metadata ?? {};
  assert.equal(name, directory, `${file} name must match its directory`);
  assert.ok(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) && name.length <= 64, `${file} has an invalid name`);
  assert.ok(typeof description === 'string' && description.trim() && description.length <= 1024,
    `${file} needs a description of 1 to 1024 characters`);
  checkLinks(file, content.slice(frontmatter[0].length));
}

console.log(`Validated ${skills.length} skills and all README and skill local links.`);
