/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
      let pointer = nums[0]
  let max = 0
  
  for(let i = 0; i < nums.length; i++){
  	let num = nums[i]
    if(max < 0) max = 0
    max += num
    pointer = Math.max(pointer, max)
  }
  
  return pointer
  
    
    
};