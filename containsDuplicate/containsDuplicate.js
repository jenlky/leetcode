/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  nums.sort();
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] === nums[x + 1]) {
      return true;
    }
  }
  return false;
};
// @lc code=end
module.exports = { containsDuplicate };
