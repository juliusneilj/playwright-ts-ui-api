import { BasePage } from "@core";
import { expect, Page } from "@playwright/test";
import { HomePageLocators } from "@retail-website-locators";
import { NavbarComponent } from "@retail-website-ui-components";

export default class HomePage extends BasePage {
    private locators: HomePageLocators;
    public navbar: NavbarComponent;

    constructor(page: Page) {
        const baseUrl = process.env.DAVID_JONES_BASE_URL || 'https://www.davidjones.com/';
        super(page, baseUrl);
        this.locators = new HomePageLocators(page);
        this.navbar = new NavbarComponent(page);
    }

    async navigateTo(): Promise<void> {
        await this.page.goto(this.baseUrl);
    }

    async verifyHomePage(): Promise<void> {
        await expect(this.page).toHaveTitle(/David Jones/);
    }
};