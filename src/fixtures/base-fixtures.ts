import { test as base } from '@playwright/test';
import { HomePage, ProductPage, CartPage } from '@ui-pages';

export type TestFixtures = {
  homePage: HomePage;
  productPage: ProductPage;
  cartPage: CartPage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const pageObj = new HomePage(page);
    await pageObj.init();
    await use(pageObj);
  },

  productPage: async ({ page }, use) => {
    const pageObj = new ProductPage(page);
    await pageObj.init();
    await use(pageObj);
  },

  cartPage: async ({ page }, use) => {
    const pageObj = new CartPage(page);
    await pageObj.init();
    await use(pageObj);
  },
});

/**
 * Capture a screenshot on test failure and attach it to the test report.
 */
test.afterEach(async ({ page }, testInfo) => {
  if (!page || testInfo.status === testInfo.expectedStatus) {
    return;
  }

  try {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach('failure-screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  } catch (error) {
    // Ignore screenshot capture failures so the actual test failure remains visible.
  }
});

export { expect } from '@playwright/test';
