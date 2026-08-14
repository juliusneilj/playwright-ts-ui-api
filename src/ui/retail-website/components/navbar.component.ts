import { expect, Page } from "@playwright/test";
import { NavbarLocators } from "@retail-website-locators";

/**
 * Navigation Bar Component
 * 
 * Encapsulates all interactions with the shared navigation bar
 * that appears on all pages of the Retail Website.
 * 
 * This component is reusable across multiple pages (Home, Product, Cart, etc.)
 * 
 * Locators are managed separately in NavbarLocators for better separation of concerns.
 * 
 * @example
 * const navbar = new NavbarComponent(page);
 * await navbar.navigateToMenuItem('Women');
 * await navbar.clickHome();
 */
export default class NavbarComponent {
    private page: Page;
    private locators: NavbarLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new NavbarLocators(page);
    }

    /**
     * Click on the home link
     * Navigates back to homepage from any page
     * 
     * @throws Error if home link is not clickable
     */
    async clickHome(): Promise<void> {
        await this.locators.homeLinkLocator.click();
        await expect(this.page).toHaveTitle(/David Jones/);
    }

    async navigateToSubMenuItem(menuItem: string, subMenuItem: string): Promise<void> {
        const menuItemLocator = this.locators.menuItemLocator(menuItem);
        await menuItemLocator.hover();
        const subMenuItemLocator = this.locators.menuItemLocator(subMenuItem);
        await subMenuItemLocator.click();
    }
}

