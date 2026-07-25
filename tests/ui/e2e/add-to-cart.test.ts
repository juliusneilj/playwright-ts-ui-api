import { test } from "playwright/test";
import { HomePage } from "@ui-pages";

test.describe("Automation Exercise Cart End-to-End Tests", () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.init();
    });

    test("Should add a product to the cart", async () => {
        // Step 1: Navigate to automationexercise.com
        await homePage.navigateTo();    

        // Step 2: Verify we are on the home page
        await homePage.verifyHomePage();

        // Step 3: Open the product list page and initialize the product page object
        const productPage = await homePage.openProductListPage();

        // Step 4: Verify we are on the product page
        await productPage.verifyProductPage();

        // Step 5: Add the first product to the cart
        const productToAdd: string = 'Men Tshirt';
        await productPage.addProductToCart(productToAdd);
    });
});