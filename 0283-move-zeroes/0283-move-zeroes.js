/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //two pointer starting next to each other
    
    //while l < nums.length
        // if the right value is 0 i can just increment
    
    let pointer = 0
    for (let i in nums){
        if (nums[i] !== 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
    }
    return nums
    
    
};

