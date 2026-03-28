import { BasePage } from "@core";
import { HomePageLocators } from "@ui-locators";
import { expect } from "@playwright/test";

export default class HomePage extends BasePage {
    async init(): Promise<this> {
        return this;
    }

    async navigateTo() {
        await this.page.goto('https://automationexercise.com');
    }

    async verifyHomePage() {
        // Verify page title
        await expect(this.page).toHaveTitle('Automation Exercise');
        
        // Verify main heading is visible
        await expect(this.page.locator('h1').first()).toBeVisible();
        
        // Verify subheading is visible
        await expect(this.page.locator('h2').first()).toBeVisible();
        
        // Verify home navigation link is visible
        await expect(this.page.locator(HomePageLocators.NAV_HOME).first()).toBeVisible();
    }
}