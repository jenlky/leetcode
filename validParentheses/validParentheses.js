/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const odd = s.length % 2 !== 0;
  if (odd) return false;

  const arrayChar = s.split("");
  const endings = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let char of arrayChar) {
    if (char in map) {
      endings.push(map[char]);
    } else if (endings.length === 0 || endings.pop() !== char) {
      return false;
    }
  }

  return endings.length === 0;
};
// @lc code=end
module.exports = { isValid };
