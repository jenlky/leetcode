/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let selling of prices) {
    if (selling < minPrice) {
      minPrice = selling;
    } else if (selling - minPrice > maxProfit) {
      maxProfit = selling - minPrice;
    }
  }
  return maxProfit;
};
// @lc code=end
module.exports = { maxProfit };
