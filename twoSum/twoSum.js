/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = {};

  for (let x = 0; x < nums.length; x++) {
    const complement = target - nums[x];

    if (complement in map) {
      return [map[complement], x];
    }

    map[nums[x]] = x;
  }
};
// @lc code=end
module.exports = { twoSum };
