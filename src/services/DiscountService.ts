import { Discount } from '../models/Discount';

/**
 * A service to apply discounts to a total amount.
 */
export class DiscountService {
  private activeDiscounts: Discount[] = [];

  public addDiscount(discount: Discount): void {
    if (discount.type === 'percentage' && discount.value > 100) {
      throw new Error('Percentage discount cannot be over 100.');
    }
    if (discount.type === 'fixed' && discount.value === 0) {
      throw new Error('Fixed discount cannot be zero.');
    }
    this.activeDiscounts.push(discount);
  }

  /**
   * Applies all active discounts to a given total.
   * @param total The initial total in cents.
   * @returns The final total after all discounts are applied.
   */
  public applyDiscounts(total: number): number {
    let discountedTotal = total;

    for (const discount of this.activeDiscounts) {
      if (discount.type === 'percentage') {
        console.log(`Applying ${discount.value}% discount.`);
        discountedTotal = total - total * (discount.value / 100);
      }
    }

    for (const discount of this.activeDiscounts) {
      if (discount.type === 'fixed') {
        console.log(`Applying fixed discount of ${discount.value}.`);
        discountedTotal -= discount.value;
      }
    }
    return Math.round(discountedTotal);
  }
}
