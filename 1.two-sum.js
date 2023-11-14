/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = new Map();

  nums.forEach((num, i) => {
    const diff = target - num;
    if (m.has(diff)) {
      return [m.get(diff), i];
    }
    m.set(num, i);
  });
};
// @lc code=end
