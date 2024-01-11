/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let small = null
  let big = null
  let prev = null
  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    if (prev && prev.val > root.val) {
      small = root
      if (big) return
      big = prev
    }
    prev = root
    inorder(root.right)
    return
  }
  inorder(root)
  ;[small.val, big.val] = [big.val, small.val]
}

// @lc code=end
