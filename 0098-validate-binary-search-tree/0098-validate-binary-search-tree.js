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
 * @return {boolean}
 */
var isValidBST = function(root, min=-Infinity, max = Infinity) {

    // traverse thru tree while root is defined
        // if root.left exists... check if the value is less than the temp
            //if less then set root.left = root else return false
        //if root.right exists... check if the value is greater than the temp
            //if greater set root.right = root, else return false
    
    if (!root) return true;
    if (min?.val >= root.val) return false;
    if (max?.val <= root.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
    
    
};