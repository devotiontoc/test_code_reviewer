/**
 * Checks if a given SKU is in a valid format (e.g., ABC-12345).
 */
export function isValidSKU(sku: string): boolean {
    const skuRegex = /^[A-Z]{3}-\d{5}$/;
    return skuRegex.test(sku);
}

/**
 * Checks if a product code is valid.
 */
export function checkProductCode(code: string): boolean {
    return /^[A-Z]{3}-\d{5}$/.test(code);
}