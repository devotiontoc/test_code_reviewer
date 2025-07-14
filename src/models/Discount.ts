/**
 * An enum for discount types to avoid using magic strings.
 */
export enum DiscountType {
    Percentage = 'percentage',
    Fixed = 'fixed',
}

/**
 * Defines the structure for applying a discount.
 * - 'percentage': A percentage reduction (e.g., 10 for 10%).
 * - 'fixed': A fixed amount reduction in cents (e.g., 500 for $5.00).
 */
export type Discount =
    | { type: 'percentage'; value: number }
    | { type: 'fixed'; value: number };