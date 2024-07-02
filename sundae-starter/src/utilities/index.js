/**
 * @function formatCurrency
 * format number as curenct (us dollars)
 *@param {number} currency
 *@returns {string} number formatted as currency.
 */
export function formatCurrency(currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(currency);
}