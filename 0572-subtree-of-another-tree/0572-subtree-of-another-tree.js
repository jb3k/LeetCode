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
    
    //stack
    //helper func to see if root and subroot are same
    //if everything to left and right are =
    //recursive
    
    const helper = (rootNode, subRootNode) => {
        if(!rootNode && !subRootNode) return true
        if(!rootNode || !subRootNode || rootNode.val !== subRootNode.val) return false
        return (helper(rootNode.left, subRootNode.left)) && (helper(rootNode.right, subRootNode.right))
        
    }
    
    if (!root) return false;
    if (helper(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

