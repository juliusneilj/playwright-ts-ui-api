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

export { expect } from '@playwright/test';
