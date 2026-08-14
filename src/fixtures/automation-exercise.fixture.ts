import { test as base } from './base.fixture';
import { HomePage, ProductPage } from 'src/ui/automation-exercise/pages';

export type TestFixtures = {
  autoHomePage: HomePage;
  autoProductPage: ProductPage;
};

/**
 * Automation Exercise test fixtures providing initialized page objects.
 * All fixtures are scoped to individual tests for isolation.
 */
export const test = base.extend<TestFixtures>({
  /**
   * Provides an initialized HomePage instance for Automation Exercise tests.
   * 
   * Automatically initializes the page object before each test.
   * Cleanup and page closure are handled automatically after the test completes.
   * 
   * @example
   * test('should load homepage', async ({ autoHomePage }) => {
   *   await autoHomePage.navigateTo();
   *   await autoHomePage.verifyHomePage();
   * });
   */
  autoHomePage: async ({ page }, use) => {
    try {
      const pageObj = new HomePage(page);
      await use(pageObj);
    } catch (error) {
      console.error('HomePage fixture initialization failed:', error);
      throw error;
    }
  },

  /**
   * Provides an initialized ProductPage instance for Automation Exercise tests.
   * 
   * Automatically initializes the page object before each test.
   * Cleanup and page closure are handled automatically after the test completes.
   * 
   * @example
   * test('should display product details', async ({ autoProductPage }) => {
   *   await autoProductPage.navigateTo();
   *   await autoProductPage.verifyProductDetails();
   * });
   */
  autoProductPage: async ({ page }, use) => {
    try {
      const pageObj = new ProductPage(page);
      await pageObj.init();
      await use(pageObj);
    } catch (error) {
      console.error('ProductPage fixture initialization failed:', error);
      throw error;
    }
  },
});

export { expect } from '@playwright/test';