import { formatPrice } from '../utils/currency';

interface CartItem {
    sku: string;
    price: number;
    quantity: number;
}

/**
 * A simple function to add an item to the cart.
 */
export function addItemToCart(item: CartItem): boolean {
    console.log(`Adding ${item.quantity} of ${item.sku} to cart.`);
    // In a future step, we might check stock or calculate totals here.
    return true;
}

/**
 * Calculates the total price of all items in the cart.
 */
export function calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

/**
 * A function that uses other functions to produce a summary.
 */
export function getCartSummary(items: CartItem[]): string {
    const total = calculateTotal(items);
    return `Cart Total: ${formatPrice(total)}`;
}