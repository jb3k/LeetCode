/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(root, subRoot) {
    
  if (!root && !subRoot) return true;
  if (!root || !subRoot || root.val !== subRoot.val) return false;
  
  return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
    
};