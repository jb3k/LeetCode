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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let times = 0
    let stack = []
    let cur = root
    
    while(cur || stack.length){
        while(cur){
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        times += 1
        if(times === k) return cur.val
        cur = cur.right
    }
};
