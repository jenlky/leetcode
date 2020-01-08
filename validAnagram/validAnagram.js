/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// You may assume the string contains only lowercase alphabets.
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
const sorting = string => {
  return string
    .split("")
    .sort()
    .join();
};

const isAnagram = function(s, t) {
  const sortedS = sorting(s);
  const sortedT = sorting(t);

  if (sortedS === sortedT) {
    return true;
  }
  return false;
};
// @lc code=end
module.exports = { isAnagram };
