import { HomePage, ProductDetailsPage, ProductListPage } from '@retail-website-ui-pages';
import { test as base } from './base.fixture';
import { ProductCategory } from '@custom-types';

export type TestFixtures = {
    homePage: HomePage;
    productListPage: (category: string) => ProductListPage;
    productDetailsPage: ProductDetailsPage;
};

/**
 * Retail Website test fixtures providing initialized page objects.
 * All fixtures are scoped to individual tests for isolation.
 */
export const test = base.extend<TestFixtures>({
    /**
     * Provides an initialized HomePage instance for Retail Website tests.
     * 
     * Automatically initializes the page object before each test.
     * Cleanup and page closure are handled automatically after the test completes.
     * 
     * @example
     * test('should navigate home', async ({ homePage }) => {
     *   await homePage.navigateTo();
     *   await homePage.verifyHomePage();
     * });
     */
    homePage: async ({ page }, use) => {
        try {
            const pageObj = new HomePage(page);
            await use(pageObj);
        } catch (error) {
            console.error('HomePage fixture initialization failed:', error);
            throw error;
        }
    },

    /**
     * Provides an initialized ProductListPage instance for Retail Website tests.
     *
     * Automatically initializes the page object before each test.
     * Cleanup and page closure are handled automatically after the test completes.
     * @example
     * test('should navigate to product list', async ({ productListPage }) => {
     *   await productListPage.navigateTo();
     *   await productListPage.verifyHomePage();
     * });
     */
    productListPage: async ({ page }, use) => {
        try {
            const pageObj = (category: string) => new ProductListPage(page, category);
            await use(pageObj);
        } catch (error) {
            console.error('ProductListPage fixture initialization failed:', error);
            throw error;
        }
    },

    /**
     * Provides an initialized ProductDetailsPage instance for Retail Website tests.
     *
     * Automatically initializes the page object before each test.
     */
    productDetailsPage: async ({ page }, use) => {
        try {
            const pageObj = new ProductDetailsPage(page);
            await use(pageObj);
        } catch (error) {
            console.error('ProductDetailsPage fixture initialization failed:', error);
            throw error;
        }
    }
});

export { expect } from '@playwright/test';