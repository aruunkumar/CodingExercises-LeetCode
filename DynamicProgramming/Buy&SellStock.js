/**EASY
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5

Approach: Keep track of the min stock price and calculate profit for each iteration. 
*/

var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    let prf = 0, min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        prf = Math.max(prf, prices[i] - min);
        if (prices[i] < min) min = prices[i];
    }
    return prf;
};
