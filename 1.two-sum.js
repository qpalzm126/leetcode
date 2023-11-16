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

  for (let i=0;i<nums.length;i++){
    const diff = target-nums[i]
    if (m.has(diff)){
      return [m.get(diff),i]
    }else{
      m.set(nums[i],i)
    }
  } 

  // nums.forEach((num, i) => {
  //   console.log(num)
  //   const diff = target - nums[i];
  //   if (m.has(diff)) {
  //     return [m.get(diff), i];
  //   }
  //   m.set(nums[i], i);
  // });
};
// @lc code=end
