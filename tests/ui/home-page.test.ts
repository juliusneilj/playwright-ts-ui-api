import { test } from "playwright/test";
import { HomePage } from "@ui-pages";

test.describe("Automation Exercise Home Page", () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.init();
    });

    test("Should navigate to automationexercise.com and verify home page", async () => {
        // Step 1: Navigate to automationexercise.com
        await homePage.navigateTo();    

        // Step 2: Verify we are on the home page
        await homePage.verifyHomePage();
    });

    test("Should verify Featured Items section is visible on the home page", async () => {
        // Step 1: Navigate to automationexercise.com
        await homePage.navigateTo();    

        // Step 2: Verify we are on the home page
        await homePage.verifyFeaturedItemsSection();
    });

    test("Should verify products are available in the Featured Items section", async () => {
        // Step 1: Navigate to automationexercise.com
        await homePage.navigateTo();    

        // Step 2: Verify we are on the home page
        await homePage.verifyFeaturedItemsSection();
    });
});