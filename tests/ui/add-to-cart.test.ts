import { test, expect } from '@fixtures';

test.describe('Automation Exercise UI - cart workflow', () => {
    test('@smoke should add a product to cart and verify it is present', async ({ homePage }) => {
        const productToAdd = 'Men Tshirt';

        await homePage.navigateTo();
        await homePage.verifyHomePage();

        const productPage = await homePage.openProductListPage();
        await productPage.verifyProductPage();
        await productPage.addProductToCart(productToAdd);

        const cartPage = await productPage.goToCart();
        await cartPage.verifyCartPage();
        await cartPage.verifyProductInCart(productToAdd);

        expect(cartPage).toBeTruthy();
    });
});