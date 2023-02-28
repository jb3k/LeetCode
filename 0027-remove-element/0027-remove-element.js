/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let count = 0
    // for(let i = 0; i < nums.length; i++){
    //     let num = nums[i];
    //     if(num === val){
    //         count++
    //         nums[i] = nums[nums.length - count]
    //         nums[nums.length - count] = '_'
    //     }   
    // }
    
    let start = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[start] = nums[i];
            start++
        }
    }
    return start;
};