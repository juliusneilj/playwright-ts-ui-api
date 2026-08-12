import { test } from '@fixtures';

test.describe('Automation Exercise UI - home page', () => {
    test('@smoke should load the homepage and validate key navigation elements', async ({ homePage }) => {
        await homePage.navigateTo();
        await homePage.verifyHomePage();
    });

    test('should display the featured products section when the homepage loads', async ({ homePage }) => {
        await homePage.navigateTo();
        await homePage.verifyFeaturedItemsSection();
    });

    test('should show at least one product card in the featured items section', async ({ homePage }) => {
        await homePage.navigateTo();
        await homePage.verifyFeaturedItemsSection();
    });
});