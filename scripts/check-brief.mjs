import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const url = pathToFileURL(resolve('examples/99-union-square/brief.html')).href;
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL });

try {
  for (const width of [375, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, offline: true });
    const remoteRequests = [];
    page.on('request', request => {
      if (/^https?:/.test(request.url())) remoteRequests.push(request.url());
    });

    await page.goto(url);
    const photo = page.getByRole('img', { name: /historic buildings around the Milford Oval/i });
    assert.ok(await photo.isVisible(), `Photo is hidden at ${width}px`);
    assert.ok(await photo.evaluate(image => image.complete && image.naturalWidth > 0),
      `Photo did not load at ${width}px`);

    const map = page.getByRole('img', { name: /street map of downtown Milford/i });
    assert.ok(await map.isVisible(), `Map is hidden at ${width}px`);
    assert.ok(await map.locator('path').count() > 0, 'Map is missing its street geometry');
    assert.ok(await map.locator('circle').isVisible(), 'Map is missing its property marker');

    const financing = page.locator('section').filter({
      has: page.getByRole('heading', { name: 'Financing breakdown', exact: true })
    });
    for (const amount of ['$600,000', '$150,000', '$450,000']) {
      assert.ok(await financing.getByText(amount, { exact: true }).isVisible(), `Missing ${amount}`);
    }
    const nextSteps = page.getByRole('region', { name: 'What happens next' });
    assert.ok(await nextSteps.getByText('Confirm availability.', { exact: true }).isVisible());
    assert.equal(await nextSteps.getByRole('listitem').count(), 3);

    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width,
      `Brief overflows the viewport at ${width}px`);
    assert.deepEqual(remoteRequests, [], 'The standalone brief tried to load remote assets');
    console.log(`99 Union Square brief passed at ${width}px offline.`);
    await page.close();
  }
} finally {
  await browser.close();
}
