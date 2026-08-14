import { Locator, Page } from "@playwright/test";

/**
 * Navbar Component Locators
 * 
 * Contains all locators for the shared Navigation Bar component.
 * These locators are used by NavbarComponent to interact with the navbar.
 * 
 * Scope: All pages across the Retail Website application
 */
export default class NavbarLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Get the home/logo link locator
     * Appears on all pages - navigates back to homepage
     * 
     * @returns Locator for the David Jones Homepage link
     */
    get homeLinkLocator(): Locator {
        return this.page.getByRole('link', { name: 'David Jones Homepage' });
    }

    /**
     * Get the main menubar locator
     * The container for all navigation menu items
     * 
     * @returns Locator for the menubar element
     */
    get menuBarLocator(): Locator {
        return this.page.getByRole('menubar');
    }

    /**
     * Get a specific menu item by name
     * Menu items are typically: Women, Men, Kids, Home & Garden, etc.
     * 
     * @param menuItemName The display name of the menu item
     * @returns Locator for the specific menu item
     * 
     * @example
     * const womenMenuItem = navbarLocators.menuItemLocator('Women');
     * const menMenuItem = navbarLocators.menuItemLocator('Men');
     */
    menuItemLocator(menuItemName: string): Locator {
        return this.page.getByRole('menuitem', { name: menuItemName, exact: true });
    }
}
