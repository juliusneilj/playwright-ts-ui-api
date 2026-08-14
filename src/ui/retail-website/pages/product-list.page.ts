import { BasePage } from "@core";
import { ProductCategory } from "@custom-types";
import { expect, Page } from "@playwright/test";
import { ProductListPageLocators } from "@retail-website-locators";
import { NavbarComponent } from "@retail-website-ui-components";

export default class ProductListPage extends BasePage {
    private locators: ProductListPageLocators;
    public navbar: NavbarComponent;
    private path: string;

    constructor(page: Page, category: string) {
        const baseUrl = process.env.DAVID_JONES_BASE_URL || 'https://www.davidjones.com/';
        super(page, baseUrl);
        this.locators = new ProductListPageLocators(page);
        this.navbar = new NavbarComponent(page);
        this.path = category;
    }

    async verifyProductListPage(subCategory: string): Promise<void> {
        await expect(this.locators.productListTitleLocator(subCategory)).toBeVisible();
    }

    async clickProductByName(productName: string): Promise<void> {
        const productLocator = this.locators.productListItemLocator(productName);
        await expect(productLocator).toBeVisible();
        await productLocator.click();
    }
};