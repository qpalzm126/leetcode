/*
 * @lc app=leetcode id=2225 lang=javascript
 *
 * [2225] Find Players With Zero or One Losses
 */

// @lc code=start
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let losses = new Array(100001).fill(0)
  for (const [winner, loser] of matches) {
    if (losses[winner] === 0) {
      losses[winner] = -1
    }
    if (losses[loser] === -1) {
      losses[loser] = 1
    } else {
      losses[loser] += 1
    }
  }
  let zeroLose = []
  let oneLose = []
  for (let i = 1; i < 100001; i++) {
    if (losses[i] === -1) {
      zeroLose.push(i)
    } else if (losses[i] === 1) {
      oneLose.push(i)
    }
  }
  return [zeroLose, oneLose]
}
// @lc code=end
// const win = new Map()
// const lose = new Map()
// const overlose = new Map()
// for (let i = 0; i < matches.length; i++) {
//   if (
//     win.has(matches[i][1]) ||
//     lose.has(matches[i][0]) ||
//     overlose.has(matches[i][0])
//   ) {
//     win.delete(matches[i][1])
//   } else {
//     win.set(matches[i][0], 1)
//   }
//   if (lose.has(matches[i][1])) {
//     lose.delete(matches[i][1])
//     overlose.set(matches[i][1], 1)
//   } else {
//     lose.set(matches[i][1], 1)
//   }
// }
// return [
//   [...win.keys()].sort((a, b) => a - b),
//   [...lose.keys()].filter((i) => !overlose.has(i)).sort((a, b) => a - b),
// ]
