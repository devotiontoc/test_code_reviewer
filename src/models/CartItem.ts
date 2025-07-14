import { Product } from './Product';

/**
 * Represents an item within the shopping cart,
 * linking a product to a specific quantity.
 */
export interface CartItem {
    product: Product;
    quantity: number;
}