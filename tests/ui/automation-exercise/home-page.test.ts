import { test } from '@fixtures';

test.describe('Automation Exercise UI - home page', () => {
    test.skip('@smoke should load the homepage and validate key navigation elements', async ({ autoHomePage }) => {
        await autoHomePage.navigateTo();
        await autoHomePage.verifyHomePage();
    });

    test.skip('should display the featured products section when the homepage loads', async ({ autoHomePage }) => {
        await autoHomePage.navigateTo();
        await autoHomePage.verifyFeaturedItemsSection();
    });

    test.skip('should show at least one product card in the featured items section', async ({ autoHomePage }) => {
        await autoHomePage.navigateTo();
        await autoHomePage.verifyFeaturedItemsSection();
    });
});