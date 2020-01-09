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
  let profit;
  let maxProfit = 0;

  prices.forEach((buy, index) => {
    let rest = prices.slice(index + 1);
    let sell = Math.max(...rest);

    sell > buy ? (profit = sell - buy) : null;
    profit > maxProfit ? (maxProfit = profit) : null;
  });

  return maxProfit;
};
// @lc code=end
module.exports = { maxProfit };
