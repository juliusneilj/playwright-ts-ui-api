import { test as base } from './base-fixture';
import { HomePage, ProductPage } from '@ui-pages';

export type TestFixtures = {
  homePage: HomePage;
  productPage: ProductPage;
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
});

export { expect } from '@playwright/test';