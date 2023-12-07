/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length < 2) return 0
  let lastJumpIndex = 0
  let curCoverage = 0
  let jumpTimes = 0

  for (let i = 0; i < nums.length; i++) {
    curCoverage = Math.max(curCoverage, nums[i] + i)
    if (i === lastJumpIndex) {
      lastJumpIndex = curCoverage
      jumpTimes += 1
      if (curCoverage >= nums.length - 1) {
        return jumpTimes
      }
    }
  }
}
// @lc code=end
