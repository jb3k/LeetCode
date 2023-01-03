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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    if (!node) continue;
    if (isSame(node, subRoot)) return true;
    queue.push(node.right, node.left);
  }
  return false;
    
};

var isSame = function(root, subRoot){
    if (!root || !subRoot) return !root && !subRoot;
    if( root.val !== subRoot.val) return false
    
    return (isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right))
}