export default class CartPageLocators {
    static readonly CART_TABLE: string = '#cart_info_table';
    static readonly CART_ITEMS: string = 'tr.cart_menu';

    static readonly productRow: (productName: string) => string = (productName: string) => `#cart_info_table tbody tr:has(:text("${productName}"))`;
}
