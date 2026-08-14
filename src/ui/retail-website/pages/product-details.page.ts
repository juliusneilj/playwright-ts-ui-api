import { BasePage } from "@core";
import { ProductCategory, ProductSize } from "@custom-types";
import { expect, Page } from "@playwright/test";
import { ProductDetailsPageLocators } from "@retail-website-locators";
import { BagModalComponent, NavbarComponent } from "@retail-website-ui-components";

export default class ProductDetailsPage extends BasePage {
    private locators: ProductDetailsPageLocators;
    public navbar: NavbarComponent;
    public bagModal: BagModalComponent;

    constructor(page: Page) {
        const baseUrl = process.env.DAVID_JONES_BASE_URL || 'https://www.davidjones.com/';
        super(page, baseUrl);
        this.locators = new ProductDetailsPageLocators(page);
        this.navbar = new NavbarComponent(page);
        this.bagModal = new BagModalComponent(page);
    }

    async verifyProductDetailsPage(productName: string): Promise<void> {
        await expect(this.locators.productDetailsTitleLocator(productName)).toBeVisible();
    }

    async setProductSize(size: ProductSize): Promise<void> {
        await this.locators.productSizeOptionLocator(size).click();
    }

    async clickAddtoBag(): Promise<void> {
        await this.locators.addToBagButtonLocator().click();
    }
};