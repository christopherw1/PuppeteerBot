console.log("Hello world");

import Puppeteer, { JSCoverageEntry } from 'puppeteer';
import expect from 'expect-puppeteer';

(async () => {
  const browser = await Puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://github.com/puppeteer/puppeteer/blob/v14.1.1/docs/api.md#class-puppeteer');
  await page.click(".header-logged-out a[aria-label=\"Homepage\"]");
  
  await expect(page).toClick('button', { text: 'Sign up' });
  await page.waitForTimeout(2000);
  await expect(page).toClick('a', { text: 'Sign in →' });
  await page.waitForTimeout(1000);

  await expect(page).toFill('input[name="login"]', 'chriswang3718@gmail.com');
  await expect(page).toFill('input[name="password"]', 'AHC37ahc37');
  await page.click('[class="btn btn-primary btn-block js-sign-in-button"]');

  await page.waitForTimeout(1000);
  await page.click('[class="dropdown-menu dropdown-menu-sw"]');
  await expect(page).toClick('button', { text: 'Sign out' });


//   await page.goto('https://devapiserver.tradingblock.com/?redirect=https://devdashboard.tradingblock.com/auth&next=/&grp=');
  
//   //await page.waitForSelector('input[name="user[email]"]',{visible : true});
//   await expect(page).toFill('input[name="signin.username"]','ctwang4');
//   //await page.focus('input[name=signin.password]'): Promise<void>;
//   await page.waitForTimeout(1000);
//   await expect(page).toFill('input[name="signin.password"]','D2qht2022!!');
//   await expect(page).toClick('button', { text: 'Log in'});

//   //await page.waitForSelector('button[id="dashboard-menu-toggle"]',{visible : true});
//   await page.waitForTimeout(4000);

//   await expect(page).toFill('input[id="react-select-3-input"]','AAPL');
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(3000);
//   await expect(page).toClick('button', { text: 'Add shares leg'});
//   await page.waitForTimeout(1000);
//   for (let i = 0; i < 5; i++) {
//     await expect(page).toClick('button', { text: 'Preview'});
//     await page.waitForTimeout(1000);
//     await expect(page).toClick('button', { text: 'Send order'});
//     await page.waitForTimeout(300000);
//   }

//   await page.click('[id="dashboard-menu-toggle"]');
//   //await page.click('.dashboard-nav-account-menu button[]');
//   await page.waitForTimeout(3000);
//   await page.click('[aria-label="(Links to an external website in a new tab)"]');
//   await page.waitForTimeout(1000);


//   await page.goto('https://www.google.com');
//   await expect(page).toClick('a',{ text: 'Images' });
//   await page.waitForTimeout(1000);
//   await expect(page).toFill('input[aria-label="Search"]','Earth');
//   await page.click('[aria-label="Google Search"]');
//   await page.waitForTimeout(1000);
//   await page.click('[aria-label="Google apps"]');
//   await page.waitForTimeout(1000);
//   await page.click('a[href="https\:\/\/maps\.google\.com\/maps\?hl\=en\&tab\=il"]');

  //await page.waitForTimeout(5000);
  //await browser.close();
})();