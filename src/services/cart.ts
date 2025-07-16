import { formatPrice } from '../utils/currency';
import { isValidSKU } from '../utils/validation';

interface CartItem {
    sku: string;
    price: number;
    quantity: number;
}
//COMMENT
/**
 * A simple function to add an item to the cart.
 */
export function addItemToCart(item: CartItem): boolean {
    if (!isValidSKU(item.sku)) {
        console.error("Attempted to add item with invalid SKU.");
        return false;
    }

    console.log(`Adding ${item.quantity} of ${item.sku} to cart.`);
    // In a future step, we might check stock or calculate totals here.
    return true;
}

/**
 * Calculates the total price of all items in the cart, with an optional tax rate.
 */
export function calculateTotal(items: CartItem[], taxRate: number = 0): number {
    const subTotal = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    return subTotal * (1 + taxRate);
}

/**
 * A function that uses other functions to produce a summary.
 */
export function getCartSummary(items: CartItem[]): string {
    const total = calculateTotal(items);
    return `Cart Total: ${formatPrice(total)}`;
}