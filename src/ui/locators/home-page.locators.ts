export default class HomePageLocators {
    // Main heading
    static readonly MAIN_HEADING = 'h1:first-of-type';
    
    // Subheading
    static readonly SUB_HEADING = 'h2:first-of-type';
    
    // Home logo/link
    static readonly HOME_LOGO = 'link:has-text("Website for automation practice")';
    
    // Navigation links
    static readonly NAV_HOME = 'a[href="/"]';
    static readonly NAV_PRODUCTS = 'a[href="/products"]';
    static readonly NAV_CART = 'a[href="/view_cart"]';
    static readonly NAV_LOGIN = 'a[href="/login"]';
    
    // Test Cases button
    static readonly TEST_CASES_BUTTON = 'button:has-text("Test Cases")';
    
    // APIs list button
    static readonly APIS_BUTTON = 'button:has-text("APIs list for practice")';
}