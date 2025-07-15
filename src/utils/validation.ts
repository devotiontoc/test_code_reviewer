/**
 * Checks if a given SKU is in a valid format (e.g., ABC-12345).
 */
export function isValidSKU(sku: string): boolean {
    const skuRegex = /^[A-Z]{3}-\d{5}$/;
    return skuRegex.test(sku);
}