export default class HomePageLocators {
    // Main heading
    static readonly MAIN_HEADING: string = 'h1:first-of-type';
    
    // Subheading
    static readonly SUB_HEADING: string = 'h2:first-of-type';
    
    // Home logo/link
    static readonly HOME_LOGO: string = 'link:has-text("Website for automation practice")';
    
    // Navigation links
    static readonly NAV_HOME: string = 'a[href="/"]';
    static readonly NAV_PRODUCTS: string = 'a[href="/products"]';
    static readonly NAV_CART: string = 'a[href="/view_cart"]';
    static readonly NAV_LOGIN: string = 'a[href="/login"]';
    
    // Test Cases button
    static readonly TEST_CASES_BUTTON: string = 'button:has-text("Test Cases")';
    
    // APIs list button
    static readonly APIS_BUTTON: string = 'button:has-text("APIs list for practice")';

    // Home Page sections
    static readonly FEATURED_ITEMS_SECTION: string = 'div.features_items';
}