export default class ProductPageLocators {
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

    // Product Page sections
    static readonly ALL_PRODUCTS_SECTION: string = 'div.features_items';
    static readonly MODAL_CONTENT: string = '.modal-content';
    static readonly MODAL_VIEW_CART: string = '.modal-body a[href="/view_cart"]';

    // Product Page elements
    static readonly productContainer: (productName: string) => string = (productName: string) => `div.features_items .single-products:has-text("${productName}")`;
    static readonly addToCartButton: string = '.add-to-cart';
}