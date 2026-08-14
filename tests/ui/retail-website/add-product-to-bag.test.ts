import { test, expect } from '@fixtures/retail-website.fixture';

test.describe('Add Product to Bag', () => {
  test('should add a product to the bag successfully', async ({ homePage, productListPage, productDetailsPage }) => {
    // Navigate to the home page
    await homePage.navigateTo();
    await homePage.verifyHomePage();
    // Navigate to a product page
    await homePage.navbar.navigateToSubMenuItem('Men', 'Coats & Jackets');
    // Verify that the product list page is displayed
    const cJproductListPage = productListPage('Coats & Jackets');
    await cJproductListPage.verifyProductListPage('Coats & Jackets');
    // Open product
    await cJproductListPage.clickProductByName('Houndstooth-Print Estate-Rib Vest');
    await productDetailsPage.verifyProductDetailsPage('Houndstooth-Print Estate-Rib Vest');
    // Set product size
    await productDetailsPage.setProductSize('M');
    // Add product to bag
    await productDetailsPage.clickAddtoBag();
    // Verify that the product has been added to the bag
    await productDetailsPage.bagModal.verifyBagModalIsVisible();
    await productDetailsPage.bagModal.verifyProductInBag('Houndstooth-Print Estate-Rib Vest');
  });
});