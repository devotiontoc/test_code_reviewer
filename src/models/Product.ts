/**
 * Represents a single product available for purchase.
 */
export interface Product {
    id: string;
    name: string;
    price: number; // Price in cents to avoid floating point issues
}