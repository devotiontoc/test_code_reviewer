/**
 * Formats a price into a standard currency string.
 * e.g., 10.5 becomes "$10.50"
 */
export function formatPrice(price: number): string {
    if (price < 0) {
        return "$0.00";
    }
    return `$${price.toFixed(2)}`;
}