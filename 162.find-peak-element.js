/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const length=nums.length
    if (length<2 || nums[0]>nums[1]) return 0
    if (nums[length-1]>nums[length-2]) return length-1

    for (let i=1;i<length;i++){
      if (nums[i] > nums[i+1] && nums[i] > nums[i-1]) return i
    }

};
// var findPeakElement = function (nums) {
//   const length = nums.length
//   if (length < 2 || nums[0] > nums[1]) return 0
//   if (nums[length - 1] > nums[length - 2]) return length - 1
//   for (let i = 0; i < length; i++) {
//     if (nums[i] > nums[i + 1]) return i
//   }
//   return length - 1
}
// @lc code=end
