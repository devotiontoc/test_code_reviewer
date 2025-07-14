import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

/**
 * Manages the state and operations of the shopping cart.
 */
export class CartService {
    private items: Map<string, CartItem> = new Map();

    /**
     * Adds a product to the cart or updates its quantity if it already exists.
     * @param product The product to add.
     * @param quantity The number of items to add.
     */
    public addProduct(product: Product, quantity: number): void {
        if (quantity <= 0) {
            throw new Error('Quantity must be positive.');
        }

        if (this.items.has(product.id)) {
            const existingItem = this.items.get(product.id)!;
            existingItem.quantity += quantity;
        } else {
            this.items.set(product.id, { product, quantity });
        }
        console.log(`${quantity} x ${product.name} added to the cart.`);
    }

    /**
     * Removes a product entirely from the cart.
     * @param productId The ID of the product to remove.
     */
    public removeProduct(productId: string): void {
        if (this.items.has(productId)) {
            const itemName = this.items.get(productId)!.product.name;
            this.items.delete(productId);
            console.log(`${itemName} removed from the cart.`);
        }
    }

    /**
     * Retrieves all items currently in the cart.
     * @returns An array of CartItem objects.
     */
    public getCartItems(): CartItem[] {
        return Array.from(this.items.values());
    }

    /**
     * Calculates the total cost of all items in the cart.
     * @returns The total price in cents.
     */
    public calculateTotal(): number {
        let total = 0;
        for (const item of this.items.values()) {
            total += item.product.price * item.quantity;
        }
        return total;
    }
}