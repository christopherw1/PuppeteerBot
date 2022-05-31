console.log("Hello world");

import Puppeteer from 'puppeteer';

(async () => {
  const browser = await Puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://github.com/puppeteer/puppeteer/blob/v14.1.1/docs/api.md#class-puppeteer');
  await page.click(".header-logged-out a[aria-label=\"Homepage\"]");

  await browser.close();
})();