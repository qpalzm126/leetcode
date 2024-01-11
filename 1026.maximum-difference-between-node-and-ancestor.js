/*
 * @lc app=leetcode id=1026 lang=javascript
 *
 * [1026] Maximum Difference Between Node and Ancestor
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  if (!root) return 0
  function find(root, max, min) {
    if (!root) return max - min
    max = Math.max(root.val, max)
    min = Math.min(root.val, min)
    return Math.max(find(root.left, max, min), find(root.right, max, min))
  }
  return find(root, root.val, root.val)
}
// @lc code=end
