import { expect, Page } from "@playwright/test";
import { BagModalLocators } from "@retail-website-locators";

export default class BagModalComponent {
    private page: Page;
    private locators: BagModalLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new BagModalLocators(page);
    }

    async verifyBagModalIsVisible(): Promise<void> {
        await expect(this.locators.bagModalTitleLocator).toBeVisible();
    }

    async verifyProductInBag(itemName: string): Promise<void> {
        const itemLocator = this.locators.bagModalItemLocator(itemName);
        await expect(itemLocator).toBeVisible();
    }
}