import { BasePage } from "@core";
import { CartPageLocators } from "@ui-locators";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";

export default class CartPage extends BasePage {
    constructor(page: Page) {
        const baseUrl = process.env.AUTOMATION_EXERCISE_BASE_URL || 'https://automationexercise.com';
        super(page, baseUrl);
    }

    async init(): Promise<this> {
        return this;
    }

    async verifyCartPage(): Promise<void> {
        await expect(this.page).toHaveURL(/\/view_cart/);
        await expect(this.page.locator(CartPageLocators.CART_TABLE).first()).toBeVisible();
    }

    async verifyProductInCart(productName: string): Promise<void> {
        const cartProduct = this.page.locator(CartPageLocators.productRow(productName)).first();
        await expect(cartProduct).toBeVisible();
        await expect(cartProduct).toContainText(productName);
    }
}
