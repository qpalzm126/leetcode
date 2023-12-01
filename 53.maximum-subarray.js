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

var maxSubArray = function (nums) {
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i]
    if (nums[i] > maxSum) {
      maxSum = nums[i]
    }
  }

  return maxSum
}
// @lc code=end
