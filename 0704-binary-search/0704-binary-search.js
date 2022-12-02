/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(target === num) return i
        
    }
    return -1
    
};