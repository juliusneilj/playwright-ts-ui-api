import { BasePage } from "@core";
import { ProductPageLocators } from "@ui-locators";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { CartPage } from "@ui-pages";

export default class ProductPage extends BasePage {

    constructor(page: Page) {
        const baseUrl = process.env.AUTOMATION_EXERCISE_BASE_URL || 'https://automationexercise.com';
        super(page, baseUrl);
    }
    async init(): Promise<this> {
        return this;
    }

    async navigateTo(): Promise<void> {
        await this.page.goto(`${this.baseUrl}/products`);
        await this.handlePopupsBeforeAction();
    }

    async verifyProductPage(): Promise<void> {
        // Verify page title
        await expect(this.page).toHaveTitle('Automation Exercise - All Products');

        // Verify subheading is visible
        await expect(this.page.locator(ProductPageLocators.SUB_HEADING).first()).toBeVisible();

        // Verify home navigation link is visible
        await expect(this.page.locator(ProductPageLocators.NAV_HOME).first()).toBeVisible();

        // Verify All Products section is visible
        await expect(this.page.locator(ProductPageLocators.ALL_PRODUCTS_SECTION).first()).toBeVisible();
    }

    async addProductToCart(productName: string): Promise<void> {
        const productContainer = this.page.locator(ProductPageLocators.productContainer(productName)).first();
        const addToCartButton = productContainer.locator(ProductPageLocators.addToCartButton).first();
        await productContainer.hover();
        await addToCartButton.click();
    }

    async goToCart(): Promise<CartPage> {
        const modalViewCart = this.page.locator(ProductPageLocators.MODAL_VIEW_CART);
        if (await modalViewCart.count()) {
            await modalViewCart.first().click();
        } else {
            await this.page.locator(ProductPageLocators.NAV_CART).first().click();
        }

        const cartPage = new CartPage(this.page);
        await cartPage.init();
        return cartPage;
    }
}