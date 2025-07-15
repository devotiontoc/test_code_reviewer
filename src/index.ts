import { CartService } from './services/CartService';
import { DiscountService } from './services/DiscountService';
import { Product } from './models/Product';
import { Discount } from './models/Discount';

// --- Demo Usage ---

// 1. Initialize services
const cartService = new CartService();
const discountService = new DiscountService();

// 2. Define products
const laptop: Product = { id: 'prod-001', name: 'Super Laptop', price: 200000 }; // $2000.00 in cents

// 3. Add products
cartService.addProduct(laptop, 1);
const originalTotal = cartService.calculateTotal(); // 200000 cents
console.log(`Original Total: $${(originalTotal / 100).toFixed(2)}`);

// 4. Add discounts that will trigger bugs
const flawedSale1: Discount = { type: 'percentage', value: 10 }; // 10% off
const flawedSale2: Discount = { type: 'percentage', value: 20 }; // 20% off
const fixedDiscount: Discount = { type: 'fixed', value: 50 };

discountService.addDiscount(flawedSale1);
discountService.addDiscount(flawedSale2);
discountService.addDiscount(fixedDiscount);

// 5. Apply discounts
const finalTotal = discountService.applyDiscounts(originalTotal);

console.log(`\n--- Buggy Calculation ---`);
console.log(`Final price after discounts: $${(finalTotal / 100).toFixed(2)}`);

console.log('\nCorrectly calculated price should be $1550.00');
console.log(`The buggy code produced: $${(finalTotal / 100).toFixed(2)}`);