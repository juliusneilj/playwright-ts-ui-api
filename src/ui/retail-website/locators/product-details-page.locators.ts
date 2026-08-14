import { Locator, Page } from "@playwright/test";

/**
 * Product Details Page Locators
 * 
 * Contains only locators specific to the Product Details Page.
 * Shared navigation elements (navbar, home link) are in the NavbarComponent.
 */
export default class ProductDetailsPageLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    productDetailsTitleLocator(productName: string): Locator {
        return this.page.getByRole('heading', { name: productName, exact: true });
    }

    productSizeOptionLocator(size: string): Locator {
        return this.page.getByRole('radio', { name: size, exact: true });
    }

    addToBagButtonLocator(): Locator {
        return this.page.getByRole('button', { name: 'Add to Bag', exact: true });
    }
}