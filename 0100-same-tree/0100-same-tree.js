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
    
//     if(!p && !q) return true
//     if(!p || !q || p.val !== q.val) return false
    
//     if(!isSameTree(p.left, q.left) || !isSameTree(p.right, q.right)) return false
//     return true
        const hasReachedEnd = !(root && subRoot)
    if (hasReachedEnd) return root === subRoot

    const isMismatch = root.val !== subRoot.val
    if (isMismatch) return false

    const isLeftSame = isSameTree(root.left, subRoot.left)
    const isRightSame = isSameTree(root.right, subRoot.right)

    return isLeftSame && isRightSame
    
};