import { Locator, Page } from "@playwright/test";

/**
 * Home Page Locators
 * 
 * Contains only locators specific to the Home Page.
 * Shared navigation elements (navbar, home link) are in the NavbarComponent.
 */
export default class HomePageLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Add home-page-specific locators here
}