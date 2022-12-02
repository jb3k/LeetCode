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
    if (!root) return false

    if (isSame(root, subRoot)) return true

    const hasLeftTree = isSubtree(root.left, subRoot)
    const hasRightTree = isSubtree(root.right, subRoot)

    return hasLeftTree || hasRightTree
};

const isSame = (root, subRoot) => {
    const hasReachedEnd = !(root && subRoot)
    if (hasReachedEnd) return root === subRoot

    const isMismatch = root.val !== subRoot.val
    if (isMismatch) return false

    const isLeftSame = isSame(root.left, subRoot.left)
    const isRightSame = isSame(root.right, subRoot.right)

    return isLeftSame && isRightSame
}