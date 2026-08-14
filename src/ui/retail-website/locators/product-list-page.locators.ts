import { Locator, Page } from "@playwright/test";

/**
 * Product List Page Locators
 * 
 * Contains only locators specific to the Product List Page.
 * Shared navigation elements (navbar, home link) are in the NavbarComponent.
 */
export default class ProductListPageLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    productListTitleLocator(title: string): Locator {
        return this.page.getByRole('heading', { name: title, exact: true });
    }

    get productListContainerLocator(): Locator {
        return this.page.locator('#products-list');
    }

    productListItemLocator(productName: string): Locator {
        return this.productListContainerLocator.locator(`//h2[contains(@class, "ProductCard") and text()="${productName}"]`);
    }
}