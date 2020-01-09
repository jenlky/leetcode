/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (const current of nums) {
    prev = Math.max(prev + current, current);
    max = Math.max(prev, max);
  }
  return max;
};
// @lc code=end
module.exports = { maxSubArray };
