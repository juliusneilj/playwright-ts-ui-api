import { BasePage } from "@core";
import { HomePageLocators } from "@ui-locators";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import ProductPage from "./product.page";

export default class HomePage extends BasePage {

    constructor(page: Page) {
        const baseUrl = process.env.AUTOMATION_EXERCISE_BASE_URL || 'https://automationexercise.com';
        super(page, baseUrl);
    }
    async init(): Promise<this> {
        return this;
    }

    async navigateTo(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.handlePopupsBeforeAction();
    }

    async verifyHomePage(): Promise<void> {
        // Verify page title
        await expect(this.page).toHaveTitle('Automation Exercise');
        
        // Verify main heading is visible
        await expect(this.page.locator('h1').first()).toBeVisible();
        
        // Verify subheading is visible
        await expect(this.page.locator('h2').first()).toBeVisible();
        
        // Verify home navigation link is visible
        await expect(this.page.locator(HomePageLocators.NAV_HOME).first()).toBeVisible();
    }

    async verifyFeaturedItemsSection(): Promise<void> {
        // Verify Featured Items section is visible
        await expect(this.page.locator(HomePageLocators.FEATURED_ITEMS_SECTION).first()).toBeVisible();

        // Verify products are available in the Featured Items section
        const products = await this.page.locator(`${HomePageLocators.FEATURED_ITEMS_SECTION} .product-image-wrapper`).count();
        expect(products).toBeGreaterThan(0);
    }

    async openProductListPage(): Promise<ProductPage> {
        // Click on the "Products" link in the navigation bar
        await this.page.locator(HomePageLocators.NAV_PRODUCTS).click();
        const productPage = new ProductPage(this.page);
        await productPage.init();
        return productPage;
    }
}