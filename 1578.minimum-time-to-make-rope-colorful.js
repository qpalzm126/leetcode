/*
 * @lc app=leetcode id=1578 lang=javascript
 *
 * [1578] Minimum Time to Make Rope Colorful
 */

// @lc code=start
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let previousColor = "a"
  let previousTime = 0
  let currentCost = 0
  let previousCost = 0

  for (let i = 0; i < colors.length; i++) {
    if (colors[i - 1] === previousColor) {
      currentCost = previousCost + Math.min(neededTime[i - 1], previousTime)
      previousTime = Math.max(neededTime[i - 1], previousTime)
    } else {
      currentCost = previousCost
      previousColor = colors[i - 1]
      previousTime = neededTime[i - 1]
    }
    previousCost = currentCost
  }
  return previousCost
}
// @lc code=end
