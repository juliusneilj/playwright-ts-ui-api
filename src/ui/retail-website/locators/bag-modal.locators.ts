import { Locator, Page } from "@playwright/test";

/**
 * Bag Modal Locators
 * 
 * Contains all locators for the Bag modal component.
 * These locators are used by BagModalComponent to interact with the bag modal.
 * 
 * Scope: All pages across the Retail Website application
 */
export default class BagModalLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get bagModalTitleLocator(): Locator {
        return this.page.getByRole('heading', { name: 'Your bag' });
    }

    get bagModalItemsLocator(): Locator {
        return this.page.locator('[class*="MiniBagItems-module"]');
    }

    bagModalItemLocator(itemName: string): Locator {
        return this.bagModalItemsLocator.filter({ has: this.page.locator(`//a[contains(@arialabel, '${itemName}')]`) });
    }
}
