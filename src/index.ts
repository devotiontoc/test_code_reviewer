import { CartService } from './services/CartService';
import { Product } from './models/Product';

// 1. Initialize the cart service
const cartService = new CartService();

// 2. Define some products
const laptop: Product = { id: 'prod-001', name: 'Super Laptop', price: 120000 }; // $1200.00
const mouse: Product = { id: 'prod-002', name: 'Gaming Mouse', price: 7500 }; // $75.00

// 3. Add products to the cart
cartService.addProduct(laptop, 1);
cartService.addProduct(mouse, 2);

// 4. Display cart contents
console.log('Cart Items:', cartService.getCartItems());

// 5. Calculate and display the total
const totalCents = cartService.calculateTotal();
console.log(`Total: $${(totalCents / 100).toFixed(2)}`); // Expected: 1200 + 2*75 = $1350.00
