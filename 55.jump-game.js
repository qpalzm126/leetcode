/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//greed
var canJump = function (nums) {
  if (nums.length <= 1) {
    return true
  }
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (max <= i && nums[i] === 0) {
      return false
    }
    if (i + nums[i] > max) {
      max = i + nums[i]
    }
    if (max >= nums.length - 1) return true
  }
  return false
}
// @lc code=end
